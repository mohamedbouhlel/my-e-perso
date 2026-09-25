# Smoke test production — étape 04.3

**Date :** 2026-09-25
**URL testée :** https://operius.fr/
**Commit testé :** `f94b834` (*fix: style compact language selector*), branche `main`, arbre de travail propre au moment du test
**Correspondance build ↔ production :** le build local produit `assets/index-Cm1cgjIp.js` et `assets/index-CvIyXWWG.css`, **identiques aux assets servis par operius.fr** — le site publié est donc bien le build de ce commit.

## Contexte

Le dépôt a avancé depuis l'étape 03.2c : ajout de l'outillage de production (`Dockerfile`, `docker-compose.prod.yml`, `docker/nginx/default.conf`), reprise de l'identité du site (`Operius`, monogramme `O`, adresse `operius.fr`) et rétablissement du sélecteur de langue sous forme compacte (`<select>`). Le site n'est **pas** servi par la machine de test (`docker ps -a` ne montre aucun conteneur lié, aucun serveur web local) : le déploiement est distant.

## Contrôles effectués et résultats

| # | Contrôle | Résultat |
|---|---|---|
| 1 | Accueil `/#accueil` | **OK** — rendu complet, titre `Operius`, marque « Operius », adresse `operius.fr`, 5 sections montées, 8 images, hero « Technician. Developer. Integrator. » (langue EN résolue depuis le navigateur), **0 erreur JS**, aucun débordement |
| 2 | Navigation 5 sections | **OK** — `accueil→projets→competences→a-propos→contact→accueil` : hash, section affichée et onglet actif corrects à chaque étape, **aucun rechargement** (marqueur de page inchangé) |
| 3 | Menu `⋯` | **OK** — ouverture (`aria-expanded=true`, 6 éléments, focus dans le menu), fermeture par **Échap** (focus rendu au déclencheur), par **clic extérieur**, par re-clic. Commandes réellement présentes et testées : Plein écran (entrée + sortie effectives), Imprimer la page (1 appel à `window.print`, menu refermé), Zoom arrière (16 → 14,4 px, 90 %), Zoom avant (110 → 125 → 150 %, bouton désactivé au maximum), Taille réelle (retour 16 px / 100 %), Copier le lien (message explicite `role="status"`) |
| 4 | Internationalisation FR/EN/ES/IT/DE | **OK** — pour chaque langue (sélection via le `<select>`) : `html lang` correct, onglets, CTA et titres traduits, **cinq sections** vérifiées une à une, changement de section effectué sans perdre la langue |
| 5 | Conservation de la section | **OK** — `#projets → EN → #projets` et `#contact → DE → #contact` : hash et section conservés, langue appliquée, **aucun rechargement**. Cas complémentaire validé : section → changement de langue → autre section |
| 6 | Persistance | **OK** — sélection de IT puis rechargement : `lang=it`, `localStorage.site-language=it`, valeur du sélecteur `it`, hash et onglet actif conservés |
| 7 | Liens | **OK** — 25 liens, **tous in-page**, 0 href vide, **0 lien cassé** (chaque cible `#section` existe), 0 `mailto:`/`tel:`/externe. `github` et `linkedin` du pied de page restent des emplacements non cliquables (`title="Link da definire"` dans la langue active) : aucune URL inventée |
| 8 | Assets | **OK** — 11 réponses HTTP, **0 hors 200**, aucune erreur réseau ; CSS, JS et les 8 images JPEG chargés (`naturalWidth > 0`), aucun 404 |
| 9 | Responsive | **OK** — desktop 1440 : aucun débordement. Mobile 375 : chrome 197 px, 5 onglets sur 3 lignes, sélecteur visible dans la fenêtre, en-tête 153 px, **0 débordement sur les 5 sections**, formulaire de contact présent |
| 10 | Contraste `.pending-inline` | **Défaut confirmé en production** : `rgb(125,139,157)` sur `#ffffff` = **3,47:1** (< 4,5 AA), taille 12,8 px. Contenu toujours provisoire (« valori da definire (nessun dato validato) ») → **correction du contraste uniquement**, appliquée (voir ci-dessous) |
| 11 | `npm run build` | **Succès** (83 modules) |
| 12 | Git | `git status --short` : arbre **propre** avant correction ; `git log -5 --oneline` : `f94b834`, `b82ea9a`, `e162f5a`, `98e3ef7`, `0dd24b5`. Aucun `reset`, `clean` ni suppression |

**Erreurs globales :** 0 exception JS, 0 erreur console, 0 erreur réseau (sur l'ensemble du parcours desktop et mobile).

## Problèmes constatés

1. **Contraste insuffisant sur les marques provisoires** (défaut déjà signalé, toujours en production) : `.pending-inline` à `#7d8b9d` sur blanc = **3,47:1** au lieu de 4,5:1 (WCAG AA, texte normal). Le texte étant un placeholder non définitif, seule la lisibilité a été corrigée. La même variable `--muted-soft` est utilisée par 17 autres règles (`.pending-note`, `.badge--pending`, `.metric__value--pending`, `.form__counter`, `.info-list__meta`, `.window-menu__value`, etc.) : elles présentent le même écart et relèvent d'une décision ultérieure (correction de la variable ou des règles une à une).
2. **Nommage résiduel** : la description (`meta.description` et celle d'`index.html`) indique encore « Site personnel — projets, compétences et contact. » alors que la marque publiée est **Operius**. Aucun impact fonctionnel ; l'étape 03.2c avait limité la correction à `meta.title`. À reformuler dans une passe dédiée.
3. **Copie dans le presse-papiers non vérifiable** : l'environnement de test refuse l'autorisation (`Copy failed: permission denied.`) ; la commande existe, est disponible et affiche un message explicite plutôt que de simuler un succès. Le chemin de succès n'est donc pas vérifié.
4. Constat (non défaut) : les liens `github`/`linkedin` ne sont pas cliquables faute d'URL validées, conformément aux décisions précédentes.

## Corrections apportées

**Contraste des marques provisoires** — `src/styles/components.css`, règle `.pending-inline` : `color: var(--muted-soft)` → `color: var(--muted)` (#55657a), avec commentaire expliquant que le contenu n'est pas définitif et que seule la lisibilité est ajustée. Vérification sur le build local : **5,95:1** (≥ 4,5), texte inchangé.

⚠️ Cette correction **n'est pas encore en production** : les assets publiés (`index-Cm1cgjIp.js` / `index-CvIyXWWG.css`) correspondent au commit `f94b834`, alors que le nouveau build produit `index-C2UDVGph.js` / `index-4crwwhR4.css`. Un redéploiement est nécessaire pour que le correctif soit effectif en ligne. Aucun déploiement n'a été effectué pendant cette étape (le site n'est pas servi par cette machine).

## Commandes réellement exécutées

```bash
git status --short                # arbre propre avant correction
git log -5 --oneline              # f94b834 … 0dd24b5
git diff --stat fd16984..HEAD      # 28 fichiers : outillage prod + identité + sélecteur
npm run build                     # succès, assets comparés à ceux de production
curl -s https://operius.fr/       # HTTP 200, <title>Operius</title>, assets index-Cm1cgjIp.js / index-CvIyXWWG.css
curl -o /dev/null -w '%{http_code}' https://operius.fr/images/*.jpg   # 8/8 → 200
docker ps -a                      # aucun conteneur du site sur cette machine
node /tmp/smoke-live.mjs          # parcours CDP complet sur https://operius.fr/ (contrôles 1 à 10, desktop + mobile)
node /tmp/contrast-local.mjs      # contraste après correction, sur le build local
```

Les scripts de test pilotent Chromium 153 via le protocole DevTools (contexte de navigation réel, `userGesture` activé pour le plein écran).

## Verdict

```text
VALIDÉ
```

Les douze contrôles obligatoires ont été réellement exécutés sur le site publié : navigation, menu `⋯` et ses six commandes, cinq langues, conservation de la section, persistance, liens, assets (0 404), responsive desktop et mobile, absence d'erreur JS/console/réseau, build. **Réserve explicite** : le défaut de contraste `.pending-inline` (3,47:1) est corrigé dans le code et vérifié (5,95:1), mais reste visible en production jusqu'au prochain redéploiement ; le nommage résiduel « Site personnel » dans la description est signalé sans correction.
