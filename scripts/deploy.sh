#!/usr/bin/env bash

# NOTE:
# `set -e` est volontairement désactivé.
# Chaque opération critique est contrôlée explicitement afin de pouvoir
# conserver le code d'erreur, distinguer les états modifiés et effectuer
# un rollback ciblé.
set -u
set -o pipefail

PROJECT_DIR="/home/cesar/my-e-perso"
COMPOSE_FILE="docker-compose.prod.yml"

CONTAINER_NAME="my-e-perso-web"
IMAGE_NAME="my-e-perso-web"

LOCAL_PORT="8090"
LOCAL_HEALTH_PATH="/health"
LOCAL_HEALTH_URL="http://127.0.0.1:${LOCAL_PORT}${LOCAL_HEALTH_PATH}"

PUBLIC_URL="https://operius.fr/"
PUBLIC_HEALTH_URL="https://operius.fr/health"
PUBLIC_HEALTH_EXPECTED="ok"

EXPECTED_BRANCH="main"
EXPECTED_REMOTE="git@github.com:mohamedbouhlel/my-e-perso.git"

BACKUP_ROOT="${HOME}/backups/my-e-perso"
LOCK_FILE="${HOME}/.cache/my-e-perso-deploy.lock"

MIN_FREE_SPACE_KB=$((2 * 1024 * 1024))

HEALTH_MAX_ATTEMPTS=12
HEALTH_RETRY_DELAY=2
LOCAL_HEALTH_TIMEOUT=5
PUBLIC_HEALTH_TIMEOUT=20

CURRENT_COMMIT=""
TARGET_COMMIT=""

CURRENT_IMAGE_ID=""
CURRENT_CONTAINER_ID=""

NEW_IMAGE_ID=""

BACKUP_DIR=""
PREVIOUS_IMAGE_TAG=""

GIT_CHANGED=0
DOCKER_CHANGED=0


usage() {
    cat <<'EOF'
Usage:
  ./scripts/deploy.sh [OPTIONS]

Options:
  --help       Affiche cette aide et quitte.
  --check      Vérifie localement le script et le dépôt.
  --preflight  Vérifie l'environnement de production.
  --deploy     Effectue le déploiement production.

Without an option:
  Équivalent à --deploy.

Check local:
  --check ne contacte pas l'environnement de production
  et ne modifie ni Git ni Docker.

Preflight production:
  --preflight vérifie uniquement l'environnement srv1.
  Aucun déploiement n'est effectué.

Deployment flow:
  1. Préflight
  2. Lock
  3. Capture de l'état actuel
  4. Fetch origin/main
  5. Vérification d'un nouveau commit
  6. Backup de l'état actuel
  7. Pull --ff-only
  8. Validation
  9. Build Docker avec --pull
 10. Conservation de l'ancienne image
 11. Déploiement
 12. Vérification de l'image réellement utilisée
 13. Healthcheck local
 14. Vérification HTTPS publique
 15. Verdict

Rollback:
  Le rollback restaure uniquement les composants qui ont
  effectivement été modifiés.
EOF
}


timestamp() {
    date '+%Y-%m-%d %H:%M:%S'
}

log() {
    printf '[%s] %s\n' "$(timestamp)" "$*"
}

error_log() {
    printf '[%s] ERREUR : %s\n' "$(timestamp)" "$*" >&2
}

section() {
    printf '\n'
    log "============================================================"
    log "$*"
    log "============================================================"
}

die() {
    error_log "$*"
    return 1
}


on_exit() {
    local exit_code=$?

    if [[ "$exit_code" -ne 0 ]]; then
        error_log "Script terminé avec le code ${exit_code}."
    fi

    # FD 9 est automatiquement fermé par le shell.
    # Aucun rollback n'est effectué depuis le trap.
    return "$exit_code"
}


on_signal() {
    local signal="$1"

    error_log "Signal ${signal} reçu."

    # Le rollback est volontairement laissé à main().
    # Le trap évite uniquement une terminaison silencieuse.
    exit 130
}


trap on_exit EXIT
trap 'on_signal INT' INT
trap 'on_signal TERM' TERM


report_backup() {
    if [[ -n "${BACKUP_DIR}" && -d "${BACKUP_DIR}" ]]; then
        log "Backup de déploiement : ${BACKUP_DIR}"
    fi
}


require_command() {
    local command_name="$1"

    if ! command -v "$command_name" >/dev/null 2>&1; then
        die "Commande requise absente : ${command_name}"
        return 1
    fi
}


git_remote_url() {
    git -C "$PROJECT_DIR" remote get-url origin 2>/dev/null
}


git_worktree_clean() {
    [[ -z "$(git -C "$PROJECT_DIR" status --porcelain)" ]]
}


acquire_lock() {
    local lock_dir

    lock_dir="$(dirname "$LOCK_FILE")"

    if ! mkdir -p "$lock_dir"; then
        die "Impossible de créer le répertoire du verrou : ${lock_dir}"
        return 1
    fi

    exec 9>"$LOCK_FILE"

    if ! flock -n 9; then
        die "Un autre déploiement est déjà en cours."
        return 1
    fi

    log "Lock acquis."
}


local_check() {
    section "CHECK LOCAL"

    require_command bash || return 1
    require_command git || return 1
    require_command date || return 1

    local repository_root

    repository_root="$(
        git rev-parse --show-toplevel 2>/dev/null
    )" || {
        die "Le répertoire courant n'est pas un dépôt Git."
        return 1
    }

    log "Dépôt local : ${repository_root}"

    if ! bash -n "${BASH_SOURCE[0]}"; then
        die "Syntaxe Bash invalide."
        return 1
    fi

    if [[ -f "${repository_root}/scripts/validate.sh" ]]; then
        if ! bash -n "${repository_root}/scripts/validate.sh"; then
            die "Syntaxe Bash invalide dans scripts/validate.sh."
            return 1
        fi

        log "Syntaxe scripts/validate.sh : OK"
    else
        log "scripts/validate.sh absent : contrôle ignoré."
    fi

    if ! git -C "$repository_root" diff --check; then
        die "git diff --check a échoué."
        return 1
    fi

    log "git diff --check : OK"
    log "Syntaxe deploy.sh : OK"
    log "Contrôle local OK."
}


preflight() {
    section "PREFLIGHT PRODUCTION"

    log "Projet : ${PROJECT_DIR}"

    if [[ ! -d "$PROJECT_DIR" ]]; then
        die "Répertoire projet absent : ${PROJECT_DIR}"
        return 1
    fi

    if [[ ! -f "${PROJECT_DIR}/${COMPOSE_FILE}" ]]; then
        die "Compose absent : ${PROJECT_DIR}/${COMPOSE_FILE}"
        return 1
    fi

    require_command git || return 1
    require_command docker || return 1
    require_command curl || return 1
    require_command flock || return 1
    require_command df || return 1
    require_command awk || return 1
    require_command rg || return 1
    require_command date || return 1
    require_command sleep || return 1
    require_command mkdir || return 1

    if ! git -C "$PROJECT_DIR" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
        die "Le projet n'est pas un dépôt Git valide."
        return 1
    fi

    local branch

    branch="$(git -C "$PROJECT_DIR" branch --show-current)"

    if [[ "$branch" != "$EXPECTED_BRANCH" ]]; then
        die "Branche inattendue : ${branch} (attendu : ${EXPECTED_BRANCH})"
        return 1
    fi

    local remote

    remote="$(git_remote_url)"

    if [[ "$remote" != "$EXPECTED_REMOTE" ]]; then
        die "Remote inattendu : ${remote}"
        return 1
    fi

    if ! git_worktree_clean; then
        die "Le working tree n'est pas propre."
        return 1
    fi

    if ! docker info >/dev/null 2>&1; then
        die "Docker n'est pas accessible par l'utilisateur courant."
        return 1
    fi

    if ! docker network inspect compose_edge >/dev/null 2>&1; then
        die "Le réseau Docker compose_edge est absent."
        return 1
    fi

    if ! docker compose \
        -f "${PROJECT_DIR}/${COMPOSE_FILE}" \
        config --quiet; then
        die "Configuration Docker Compose invalide."
        return 1
    fi

    local available_kb

    available_kb="$(
        df -Pk "$PROJECT_DIR" |
            awk 'NR==2 {print $4}'
    )"

    if [[ -z "$available_kb" || "$available_kb" -lt "$MIN_FREE_SPACE_KB" ]]; then
        die "Espace disque insuffisant : moins de 2 GiB disponibles."
        return 1
    fi

    log "Espace disque disponible : ${available_kb} KiB"
    log "Préflight production OK."
}


capture_current_state() {
    section "CAPTURE ETAT ACTUEL"

    CURRENT_COMMIT="$(git -C "$PROJECT_DIR" rev-parse HEAD)"

    if [[ -z "$CURRENT_COMMIT" ]]; then
        die "Impossible de déterminer le commit courant."
        return 1
    fi

    if ! docker inspect "$CONTAINER_NAME" >/dev/null 2>&1; then
        die "Le conteneur ${CONTAINER_NAME} n'existe pas."
        return 1
    fi

    CURRENT_CONTAINER_ID="$(
        docker inspect -f '{{.Id}}' "$CONTAINER_NAME"
    )"

    CURRENT_IMAGE_ID="$(
        docker inspect -f '{{.Image}}' "$CONTAINER_NAME"
    )"

    if [[ -z "$CURRENT_CONTAINER_ID" || -z "$CURRENT_IMAGE_ID" ]]; then
        die "Impossible de capturer l'état Docker courant."
        return 1
    fi

    log "Commit courant : ${CURRENT_COMMIT}"
    log "Container      : ${CURRENT_CONTAINER_ID}"
    log "Image courante : ${CURRENT_IMAGE_ID}"
}


sync_repository() {
    section "SYNCHRONISATION GIT"

    if ! git -C "$PROJECT_DIR" fetch --prune origin; then
        die "git fetch --prune origin a échoué."
        return 1
    fi

    local origin_commit

    origin_commit="$(git -C "$PROJECT_DIR" rev-parse origin/main)"

    if [[ -z "$origin_commit" ]]; then
        die "Impossible de déterminer origin/main."
        return 1
    fi

    log "HEAD actuel : ${CURRENT_COMMIT}"
    log "origin/main : ${origin_commit}"

    if [[ "$origin_commit" == "$CURRENT_COMMIT" ]]; then
        TARGET_COMMIT="$CURRENT_COMMIT"
        log "Aucun nouveau commit à déployer."
        return 0
    fi

    TARGET_COMMIT="$origin_commit"

    log "Nouveau commit détecté : ${TARGET_COMMIT}"
}


create_backup() {
    section "BACKUP"

    local stamp

    stamp="$(date '+%Y%m%d-%H%M%S')"

    BACKUP_DIR="${BACKUP_ROOT}/${stamp}-${CURRENT_COMMIT:0:12}"

    if ! mkdir -p "$BACKUP_DIR"; then
        die "Impossible de créer le backup : ${BACKUP_DIR}"
        return 1
    fi

    if ! git -C "$PROJECT_DIR" bundle create \
        "${BACKUP_DIR}/repository.bundle" \
        --all; then
        die "Impossible de créer le Git bundle."
        return 1
    fi

    if ! docker inspect "$CONTAINER_NAME" \
        >"${BACKUP_DIR}/container.inspect.json"; then
        die "Impossible de sauvegarder l'état du conteneur."
        return 1
    fi

    if ! docker image inspect "$CURRENT_IMAGE_ID" \
        >"${BACKUP_DIR}/image.inspect.json"; then
        die "Impossible de sauvegarder l'état de l'image."
        return 1
    fi

    if ! docker compose \
        -f "${PROJECT_DIR}/${COMPOSE_FILE}" \
        config >"${BACKUP_DIR}/compose.config.yml"; then
        die "Impossible de sauvegarder la configuration Compose."
        return 1
    fi

    cat >"${BACKUP_DIR}/deployment-state.txt" <<EOF
timestamp=$(timestamp)
project=${PROJECT_DIR}
branch=${EXPECTED_BRANCH}
remote=${EXPECTED_REMOTE}
commit=${CURRENT_COMMIT}
target_commit=${TARGET_COMMIT}
container=${CURRENT_CONTAINER_ID}
image=${CURRENT_IMAGE_ID}
EOF

    log "Backup créé : ${BACKUP_DIR}"
}


pull_target() {
    section "MISE A JOUR GIT"

    if ! git -C "$PROJECT_DIR" pull --ff-only origin main; then
        die "git pull --ff-only origin main a échoué."
        return 1
    fi

    GIT_CHANGED=1

    local resulting_commit

    resulting_commit="$(git -C "$PROJECT_DIR" rev-parse HEAD)"

    if [[ "$resulting_commit" != "$TARGET_COMMIT" ]]; then
        die "HEAD après pull ne correspond pas au commit cible."
        return 1
    fi

    if ! git_worktree_clean; then
        die "Le working tree n'est plus propre après le pull."
        return 1
    fi

    log "HEAD après pull : ${resulting_commit}"
    log "État Git modifié."
}


validate_source() {
    section "VALIDATION SOURCE"

    if [[ ! -f "${PROJECT_DIR}/scripts/validate.sh" ]]; then
        die "scripts/validate.sh absent."
        return 1
    fi

    if ! bash -n "${PROJECT_DIR}/scripts/validate.sh"; then
        die "Syntaxe invalide de scripts/validate.sh."
        return 1
    fi

    if ! (
        cd "$PROJECT_DIR" &&
        bash scripts/validate.sh
    ); then
        die "Validation technique échouée."
        return 1
    fi

    if ! git -C "$PROJECT_DIR" diff --check; then
        die "git diff --check a échoué."
        return 1
    fi

    if ! git_worktree_clean; then
        die "Le working tree n'est plus propre après validation."
        return 1
    fi

    log "Validation source OK."
}


preserve_current_image() {
    section "CONSERVATION IMAGE PRECEDENTE"

    PREVIOUS_IMAGE_TAG="${IMAGE_NAME}:previous-${CURRENT_COMMIT:0:12}"

    if ! docker tag \
        "$CURRENT_IMAGE_ID" \
        "$PREVIOUS_IMAGE_TAG"; then
        die "Impossible de conserver l'image précédente."
        return 1
    fi

    log "Image précédente : ${PREVIOUS_IMAGE_TAG}"
}


build_image() {
    section "BUILD DOCKER"

    if ! docker compose \
        -f "${PROJECT_DIR}/${COMPOSE_FILE}" \
        build --pull; then
        die "Docker build échoué."
        return 1
    fi

    NEW_IMAGE_ID="$(
        docker inspect \
            -f '{{.Id}}' \
            "${IMAGE_NAME}:latest" \
            2>/dev/null || true
    )"

    if [[ -z "$NEW_IMAGE_ID" ]]; then
        die "Impossible de déterminer l'image construite."
        return 1
    fi

    log "Nouvelle image : ${NEW_IMAGE_ID}"

    if [[ "$NEW_IMAGE_ID" == "$CURRENT_IMAGE_ID" ]]; then
        die "Le build produit la même image que l'image actuellement déployée."
        return 1
    fi

    if ! docker tag \
        "$NEW_IMAGE_ID" \
        "${IMAGE_NAME}:${TARGET_COMMIT}"; then
        die "Impossible de taguer l'image avec le commit."
        return 1
    fi

    log "Tag : ${IMAGE_NAME}:${TARGET_COMMIT}"
}


deploy_container() {
    section "DEPLOIEMENT"

    if [[ -z "$NEW_IMAGE_ID" ]]; then
        die "NEW_IMAGE_ID est vide."
        return 1
    fi

    DOCKER_CHANGED=1

    if ! docker compose \
        -f "${PROJECT_DIR}/${COMPOSE_FILE}" \
        up -d --no-build; then
        die "Docker Compose up a échoué."
        return 1
    fi

    local running_id
    local running_image
    local running_state

    running_id="$(
        docker inspect \
            -f '{{.Id}}' \
            "$CONTAINER_NAME" \
            2>/dev/null || true
    )"

    if [[ -z "$running_id" ]]; then
        die "Le conteneur ${CONTAINER_NAME} n'existe plus."
        return 1
    fi

    running_state="$(
        docker inspect \
            -f '{{.State.Running}}' \
            "$CONTAINER_NAME" \
            2>/dev/null || true
    )"

    if [[ "$running_state" != "true" ]]; then
        die "Le conteneur ${CONTAINER_NAME} n'est pas en fonctionnement."
        return 1
    fi

    running_image="$(
        docker inspect \
            -f '{{.Image}}' \
            "$CONTAINER_NAME" \
            2>/dev/null || true
    )"

    if [[ "$running_image" != "$NEW_IMAGE_ID" ]]; then
        die "Le conteneur n'utilise pas la nouvelle image."
        error_log "Attendu : ${NEW_IMAGE_ID}"
        error_log "Actuel   : ${running_image}"
        return 1
    fi

    log "Conteneur actif : ${running_id}"
    log "Image déployée  : ${running_image}"
}


check_local_health() {
    section "HEALTHCHECK LOCAL"

    local attempt

    for ((attempt=1; attempt<=HEALTH_MAX_ATTEMPTS; attempt++)); do
        if curl \
            --fail \
            --silent \
            --max-time "$LOCAL_HEALTH_TIMEOUT" \
            "$LOCAL_HEALTH_URL" >/dev/null 2>&1; then

            log "Health local OK (${attempt}/${HEALTH_MAX_ATTEMPTS})"
            return 0
        fi

        log "Health local en attente (${attempt}/${HEALTH_MAX_ATTEMPTS})"

        if (( attempt < HEALTH_MAX_ATTEMPTS )); then
            sleep "$HEALTH_RETRY_DELAY"
        fi
    done

    die "Health local échoué après ${HEALTH_MAX_ATTEMPTS} tentatives."
    return 1
}


check_public_health() {
    section "HEALTHCHECK PUBLIC"

    local health_response
    local health_code
    local public_code
    local effective_url

    health_response="$(
        curl \
            --silent \
            --show-error \
            --location \
            --max-time "$PUBLIC_HEALTH_TIMEOUT" \
            --write-out $'\n%{http_code}\n%{url_effective}' \
            "$PUBLIC_HEALTH_URL"
    )" || {
        die "Impossible d'accéder à ${PUBLIC_HEALTH_URL}"
        return 1
    }

    health_code="$(
        printf '%s\n' "$health_response" |
            tail -n 2 |
            head -n 1
    )"

    effective_url="$(
        printf '%s\n' "$health_response" |
            tail -n 1
    )"

    if [[ "$health_code" != "200" ]]; then
        die "Health public inattendu : HTTP ${health_code}"
        return 1
    fi

    if [[ "$effective_url" != "$PUBLIC_HEALTH_URL" ]]; then
        die "URL health finale inattendue : ${effective_url}"
        return 1
    fi

    if ! printf '%s\n' "$health_response" |
        sed '$d' |
        sed '$d' |
        rg -Fxq "$PUBLIC_HEALTH_EXPECTED"; then

        die "Le contenu du health public n'est pas '${PUBLIC_HEALTH_EXPECTED}'."
        return 1
    fi

    public_code="$(
        curl \
            --silent \
            --show-error \
            --location \
            --max-time "$PUBLIC_HEALTH_TIMEOUT" \
            --output /dev/null \
            --write-out '%{http_code}' \
            "$PUBLIC_URL"
    )" || {
        die "Impossible d'accéder à ${PUBLIC_URL}"
        return 1
    }

    if [[ "$public_code" != "200" ]]; then
        die "HTTP public inattendu : ${public_code}"
        return 1
    fi

    log "Health public OK : HTTP ${health_code}"
    log "Site public OK   : HTTP ${public_code}"
}


rollback_git() {
    if [[ "$GIT_CHANGED" -ne 1 ]]; then
        log "Rollback Git : aucune modification Git."
        return 0
    fi

    log "Rollback Git vers ${CURRENT_COMMIT}."

    if git -C "$PROJECT_DIR" cat-file -e "${CURRENT_COMMIT}^{commit}" >/dev/null 2>&1; then
        if ! git -C "$PROJECT_DIR" reset --hard "$CURRENT_COMMIT"; then
            error_log "Rollback Git : reset --hard échoué."
            return 1
        fi

        log "Rollback Git local effectué."
        return 0
    fi

    if [[ -z "$BACKUP_DIR" || ! -f "${BACKUP_DIR}/repository.bundle" ]]; then
        error_log "Rollback Git impossible : commit absent et bundle indisponible."
        return 1
    fi

    log "Commit absent localement : restauration depuis le bundle."

    if ! git bundle verify \
        "${BACKUP_DIR}/repository.bundle" >/dev/null 2>&1; then
        error_log "Le Git bundle est invalide ou inutilisable."
        return 1
    fi

    if ! git bundle unbundle \
        "${BACKUP_DIR}/repository.bundle" >/dev/null; then
        error_log "Impossible de restaurer les objets depuis le bundle."
        return 1
    fi

    if ! git -C "$PROJECT_DIR" reset --hard "$CURRENT_COMMIT"; then
        error_log "Rollback Git depuis le bundle échoué."
        return 1
    fi

    log "Rollback Git depuis le bundle effectué."
}


rollback_docker() {
    if [[ "$DOCKER_CHANGED" -ne 1 ]]; then
        log "Rollback Docker : aucune modification Docker."
        return 0
    fi

    if [[ -z "$PREVIOUS_IMAGE_TAG" ]]; then
        error_log "Rollback Docker impossible : tag précédent inconnu."
        return 1
    fi

    log "Rollback Docker vers ${PREVIOUS_IMAGE_TAG}."

    if ! docker image inspect \
        "$PREVIOUS_IMAGE_TAG" >/dev/null 2>&1; then
        error_log "Image précédente absente : ${PREVIOUS_IMAGE_TAG}"
        return 1
    fi

    if ! docker tag \
        "$PREVIOUS_IMAGE_TAG" \
        "${IMAGE_NAME}:latest"; then
        error_log "Impossible de restaurer l'image précédente."
        return 1
    fi

    if ! docker compose \
        -f "${PROJECT_DIR}/${COMPOSE_FILE}" \
        up -d --no-build; then
        error_log "Rollback Docker Compose échoué."
        return 1
    fi

    local rollback_image
    local previous_image_id

    rollback_image="$(
        docker inspect \
            -f '{{.Image}}' \
            "$CONTAINER_NAME" \
            2>/dev/null || true
    )"

    previous_image_id="$(
        docker inspect \
            -f '{{.Id}}' \
            "$PREVIOUS_IMAGE_TAG" \
            2>/dev/null || true
    )"

    if [[ "$rollback_image" != "$previous_image_id" ]]; then
        error_log "Le conteneur n'utilise pas l'image précédente après rollback."
        error_log "Attendu : ${previous_image_id}"
        error_log "Actuel   : ${rollback_image}"
        return 1
    fi

    log "Rollback Docker effectué."
}


rollback() {
    section "ROLLBACK"

    local rollback_failed=0

    if ! rollback_git; then
        rollback_failed=1
    fi

    if ! rollback_docker; then
        rollback_failed=1
    fi

    if [[ "$DOCKER_CHANGED" -eq 1 ]]; then
        if ! check_local_health; then
            error_log "Health local KO après rollback."
            rollback_failed=1
        else
            log "Health local après rollback : OK"
        fi
    fi

    if [[ "$rollback_failed" -ne 0 ]]; then
        error_log "ROLLBACK INCOMPLET : intervention manuelle nécessaire."
        return 1
    fi

    log "Rollback terminé."
    return 0
}


run_deploy() {
    preflight || return 1
    acquire_lock || return 1

    capture_current_state || return 1
    sync_repository || return 1

    if [[ "$TARGET_COMMIT" == "$CURRENT_COMMIT" ]]; then
        log "Déploiement inutile : aucun nouveau commit."
        return 0
    fi

    create_backup || return 1
    preserve_current_image || return 1
    pull_target || return 1
    validate_source || return 1
    build_image || return 1
    deploy_container || return 1
    check_local_health || return 1
    check_public_health || return 1

    section "VERIFICATION FINALE"

    local final_commit
    local final_image

    final_commit="$(git -C "$PROJECT_DIR" rev-parse HEAD)"

    if [[ "$final_commit" != "$TARGET_COMMIT" ]]; then
        die "Le commit final ne correspond pas au commit déployé."
        return 1
    fi

    if ! git_worktree_clean; then
        die "Le working tree final n'est pas propre."
        return 1
    fi

    final_image="$(
        docker inspect \
            -f '{{.Image}}' \
            "$CONTAINER_NAME"
    )"

    if [[ "$final_image" != "$NEW_IMAGE_ID" ]]; then
        die "L'image finale ne correspond pas à l'image construite."
        return 1
    fi

    log "Commit déployé : ${final_commit}"
    log "Image déployée  : ${final_image}"
    log "Déploiement terminé avec succès."

    return 0
}

main() {
    local mode="deploy"
    local deploy_rc=0

    case "${1:-}" in
        "")
            mode="deploy"
            ;;

        --help|-h)
            usage
            return 0
            ;;

        --check)
            mode="check"
            ;;

        --preflight)
            mode="preflight"
            ;;

        --deploy)
            mode="deploy"
            ;;

        *)
            usage >&2
            return 2
            ;;
    esac

    case "$mode" in
        check)
            local_check
            return $?
            ;;

        preflight)
            preflight
            return $?
            ;;

        deploy)
            # Ne pas écrire :
            #   if run_deploy; then ... fi
            #
            # Le statut doit être capturé explicitement.
            run_deploy || deploy_rc=$?

            if [[ "$deploy_rc" -eq 0 ]]; then
                report_backup
                return 0
            fi

            if [[ "$GIT_CHANGED" -eq 1 || "$DOCKER_CHANGED" -eq 1 ]]; then
                if ! rollback; then
                    error_log "ATTENTION : le rollback a échoué ou est incomplet."
                fi
            else
                log "Aucune modification de production : rollback inutile."
            fi

            report_backup

            # Le code d'échec ORIGINAL est conservé.
            return "$deploy_rc"
            ;;
    esac
}


main "$@"