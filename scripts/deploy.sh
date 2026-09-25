#!/usr/bin/env bash
set -Eeuo pipefail

# ============================================================
# Configuration
# ============================================================

PROJECT_DIR="/home/cesar/my-e-perso"
COMPOSE_FILE="docker-compose.prod.yml"

CONTAINER_NAME="my-e-perso-web"
IMAGE_NAME="my-e-perso-web"

LOCAL_HEALTH_URL="http://127.0.0.1:8090/health"
PUBLIC_URL="https://operius.fr/"

BACKUP_ROOT="/var/backups/my-e-perso"
LOCK_FILE="/var/lock/my-e-perso-deploy.lock"

EXPECTED_BRANCH="main"
EXPECTED_REMOTE="git@github.com:mohamedbouhlel/my-e-perso.git"

MIN_FREE_KB=1048576

DEPLOY_START="$(date +%Y%m%d-%H%M%S)"
BACKUP_DIR="${BACKUP_ROOT}/${DEPLOY_START}"

CURRENT_COMMIT=""
TARGET_COMMIT=""

CURRENT_IMAGE_ID=""
TARGET_IMAGE_ID=""

CURRENT_CONTAINER_ID=""

ROLLBACK_DONE=0
DEPLOY_FAILED=0


# ============================================================
# Logging
# ============================================================

log() {
    printf '[%s] %s\n' \
        "$(date '+%Y-%m-%d %H:%M:%S')" \
        "$*"
}


die() {
    log "ERROR: $*"
    return 1
}


# ============================================================
# Cleanup
# ============================================================

cleanup() {
    rm -f "$LOCK_FILE"
}


# ============================================================
# Rollback
# ============================================================

rollback() {
    local original_rc="${1:-1}"

    if [[ "$ROLLBACK_DONE" -eq 1 ]]; then
        return "$original_rc"
    fi

    ROLLBACK_DONE=1

    log "============================================================"
    log "ROLLBACK"
    log "============================================================"

    set +e

    if [[ -z "$CURRENT_COMMIT" ]]; then
        log "Rollback impossible : ancien commit inconnu."
        return "$original_rc"
    fi

    if [[ -z "$CURRENT_IMAGE_ID" ]]; then
        log "Rollback impossible : ancienne image inconnue."
        return "$original_rc"
    fi

    cd "$PROJECT_DIR" || {
        log "Rollback impossible : projet inaccessible."
        return "$original_rc"
    }

    # --------------------------------------------------------
    # Restaurer Git
    # --------------------------------------------------------

    log "Restauration Git : $CURRENT_COMMIT"

    git reset --hard "$CURRENT_COMMIT"

    if [[ $? -ne 0 ]]; then
        log "ROLLBACK GIT : FAIL"
        return "$original_rc"
    fi

    # --------------------------------------------------------
    # Restaurer l'image précédente
    # --------------------------------------------------------

    log "Restauration de l'image précédente : $CURRENT_IMAGE_ID"

    docker tag \
        "$CURRENT_IMAGE_ID" \
        "${IMAGE_NAME}:latest"

    if [[ $? -ne 0 ]]; then
        log "ROLLBACK IMAGE : FAIL"
        return "$original_rc"
    fi

    # --------------------------------------------------------
    # Restaurer le container
    # --------------------------------------------------------

    log "Redémarrage de l'ancienne version..."

    docker compose \
        -f "$COMPOSE_FILE" \
        up -d

    if [[ $? -ne 0 ]]; then
        log "ROLLBACK CONTAINER : FAIL"
        return "$original_rc"
    fi

    # --------------------------------------------------------
    # Vérification
    # --------------------------------------------------------

    log "Vérification du rollback..."

    for i in {1..10}; do
        if curl -fsS \
            --connect-timeout 5 \
            "$LOCAL_HEALTH_URL" >/dev/null; then

            log "ROLLBACK LOCAL : PASS"
            log "Ancien commit restauré : $CURRENT_COMMIT"

            return "$original_rc"
        fi

        sleep 2
    done

    log "ROLLBACK LOCAL : FAIL"

    return "$original_rc"
}


# ============================================================
# Gestion globale des erreurs
# ============================================================

on_error() {
    local rc=$?

    if [[ "$DEPLOY_FAILED" -eq 1 ]]; then
        exit "$rc"
    fi

    DEPLOY_FAILED=1

    log "Une erreur est survenue (code=$rc)."

    rollback "$rc"

    exit "$rc"
}


trap on_error ERR
trap cleanup EXIT


# ============================================================
# 0. VERROU
# ============================================================

mkdir -p "$BACKUP_ROOT"

(
    set -o noclobber
    echo "$$" > "$LOCK_FILE"
) 2>/dev/null || {
    log "ERROR: Un autre déploiement est déjà en cours."
    exit 1
}


# ============================================================
# 1. PRÉFLIGHT
# ============================================================

log "============================================================"
log "DÉPLOIEMENT SITE PERSONNEL"
log "============================================================"

cd "$PROJECT_DIR" || die "Répertoire projet introuvable."

[[ -f "$COMPOSE_FILE" ]] ||
    die "Fichier $COMPOSE_FILE absent."

command -v git >/dev/null ||
    die "git absent."

command -v docker >/dev/null ||
    die "docker absent."

command -v curl >/dev/null ||
    die "curl absent."

command -v awk >/dev/null ||
    die "awk absent."


# ------------------------------------------------------------
# Branche
# ------------------------------------------------------------

BRANCH="$(git branch --show-current)"

[[ "$BRANCH" == "$EXPECTED_BRANCH" ]] ||
    die "Branche inattendue : $BRANCH"


# ------------------------------------------------------------
# Remote
# ------------------------------------------------------------

REMOTE="$(git remote get-url origin)"

[[ "$REMOTE" == "$EXPECTED_REMOTE" ]] ||
    die "Remote origin inattendu : $REMOTE"


# ------------------------------------------------------------
# Working tree
# ------------------------------------------------------------

if [[ -n "$(git status --porcelain)" ]]; then
    die "Le dépôt de production contient des modifications locales."
fi


# ------------------------------------------------------------
# Docker
# ------------------------------------------------------------

docker info >/dev/null ||
    die "Docker indisponible."


# ------------------------------------------------------------
# Espace disque
# ------------------------------------------------------------

AVAILABLE_KB="$(
    df -Pk "$PROJECT_DIR" |
        awk 'NR==2 {print $4}'
)"

[[ "$AVAILABLE_KB" =~ ^[0-9]+$ ]] ||
    die "Impossible de déterminer l'espace disque disponible."

if [[ "$AVAILABLE_KB" -lt "$MIN_FREE_KB" ]]; then
    die "Espace disque disponible inférieur à 1 GiB."
fi


# ============================================================
# 2. ÉTAT ACTUEL
# ============================================================

CURRENT_COMMIT="$(git rev-parse HEAD)"

log "Commit actuel : $CURRENT_COMMIT"

if docker image inspect "$IMAGE_NAME:latest" >/dev/null 2>&1; then
    CURRENT_IMAGE_ID="$(
        docker image inspect \
            "$IMAGE_NAME:latest" \
            --format '{{.Id}}'
    )"

    log "Image actuelle : $CURRENT_IMAGE_ID"
else
    die "Image Docker actuelle absente."
fi


if docker inspect "$CONTAINER_NAME" >/dev/null 2>&1; then
    CURRENT_CONTAINER_ID="$(
        docker inspect \
            "$CONTAINER_NAME" \
            --format '{{.Id}}'
    )"

    log "Container actuel : $CURRENT_CONTAINER_ID"
fi


# ============================================================
# 3. BACKUP
# ============================================================

log "Création du backup : $BACKUP_DIR"

mkdir -p "$BACKUP_DIR"


# Git
git bundle create \
    "$BACKUP_DIR/repository.bundle" \
    --all


# Compose
cp \
    "$COMPOSE_FILE" \
    "$BACKUP_DIR/$COMPOSE_FILE"


# État Git
cat > "$BACKUP_DIR/deployment-state.txt" <<EOF
DATE=$DEPLOY_START
PROJECT_DIR=$PROJECT_DIR
BRANCH=$BRANCH
REMOTE=$REMOTE
CURRENT_COMMIT=$CURRENT_COMMIT
CURRENT_IMAGE_ID=$CURRENT_IMAGE_ID
CURRENT_CONTAINER_ID=$CURRENT_CONTAINER_ID
CONTAINER=$CONTAINER_NAME
IMAGE=$IMAGE_NAME
EOF


# État Docker
docker compose \
    -f "$COMPOSE_FILE" \
    ps > "$BACKUP_DIR/docker-compose-ps.txt"


# Inspection image
docker image inspect \
    "$IMAGE_NAME:latest" \
    > "$BACKUP_DIR/docker-image.json"


log "Backup créé."


# ============================================================
# 4. GITHUB
# ============================================================

log "Synchronisation GitHub..."

git fetch --prune origin

REMOTE_COMMIT="$(git rev-parse origin/main)"

log "GitHub : $REMOTE_COMMIT"

if [[ "$REMOTE_COMMIT" == "$CURRENT_COMMIT" ]]; then
    log "Production déjà synchronisée."
else
    git pull --ff-only origin main
fi

TARGET_COMMIT="$(git rev-parse HEAD)"

[[ "$TARGET_COMMIT" == "$REMOTE_COMMIT" ]] ||
    die "HEAD différent de origin/main."


if [[ -n "$(git status --porcelain)" ]]; then
    die "Working tree non propre après synchronisation."
fi


log "Commit cible : $TARGET_COMMIT"


# ============================================================
# 5. VALIDATION
# ============================================================

log "Validation du projet..."

./scripts/validate.sh


# ============================================================
# 6. BUILD DOCKER
# ============================================================

log "Construction Docker..."

docker compose \
    -f "$COMPOSE_FILE" \
    build


# ------------------------------------------------------------
# Capturer la nouvelle image
# ------------------------------------------------------------

TARGET_IMAGE_ID="$(
    docker image inspect \
        "$IMAGE_NAME:latest" \
        --format '{{.Id}}'
)"

log "Nouvelle image : $TARGET_IMAGE_ID"


# ------------------------------------------------------------
# Tag immutable
# ------------------------------------------------------------

docker tag \
    "$IMAGE_NAME:latest" \
    "${IMAGE_NAME}:${TARGET_COMMIT}"

log "Tag : ${IMAGE_NAME}:${TARGET_COMMIT}"


# ============================================================
# 7. DÉPLOIEMENT
# ============================================================

log "Démarrage du nouveau container..."

docker compose \
    -f "$COMPOSE_FILE" \
    up -d


# ============================================================
# 8. CONTAINER
# ============================================================

log "Vérification du container..."

docker inspect "$CONTAINER_NAME" >/dev/null ||
    die "Container absent après déploiement."

RUNNING="$(
    docker inspect \
        -f '{{.State.Running}}' \
        "$CONTAINER_NAME"
)"

[[ "$RUNNING" == "true" ]] ||
    die "Container non actif."


# ============================================================
# 9. HEALTH LOCAL
# ============================================================

log "Healthcheck local..."

LOCAL_OK=0

for i in {1..10}; do

    if curl -fsS \
        --connect-timeout 5 \
        "$LOCAL_HEALTH_URL" >/dev/null; then

        LOCAL_OK=1
        break
    fi

    sleep 2
done

[[ "$LOCAL_OK" -eq 1 ]] ||
    die "Healthcheck local : FAIL."

log "Healthcheck local : PASS"


# ============================================================
# 10. HTTPS PUBLIC
# ============================================================

log "Vérification HTTPS publique..."

HTTP_CODE="$(
    curl -4 -sS \
        --connect-timeout 10 \
        --max-time 20 \
        -o /dev/null \
        -w '%{http_code}' \
        "$PUBLIC_URL"
)"

[[ "$HTTP_CODE" == "200" ]] ||
    die "HTTPS public retourne HTTP $HTTP_CODE."

log "HTTPS public : PASS"


# ============================================================
# 11. VÉRIFICATION FINALE
# ============================================================

DEPLOYED_COMMIT="$(git rev-parse HEAD)"

[[ "$DEPLOYED_COMMIT" == "$TARGET_COMMIT" ]] ||
    die "Commit final inattendu."


DEPLOYED_IMAGE_ID="$(
    docker image inspect \
        "$IMAGE_NAME:latest" \
        --format '{{.Id}}'
)"

[[ "$DEPLOYED_IMAGE_ID" == "$TARGET_IMAGE_ID" ]] ||
    die "Image finale inattendue."


# ============================================================
# 12. SUCCÈS
# ============================================================

log "============================================================"
log "DÉPLOIEMENT : PASS"
log "============================================================"

log "Ancien commit : $CURRENT_COMMIT"
log "Nouveau commit : $TARGET_COMMIT"
log "Ancienne image : $CURRENT_IMAGE_ID"
log "Nouvelle image : $TARGET_IMAGE_ID"
log "Backup         : $BACKUP_DIR"
log "Site           : $PUBLIC_URL"

exit 0