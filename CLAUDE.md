# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commandes

- `npm run dev` — serveur de développement Vite.
- `npm run build` — `tsc -b && vite build` (contrôle de types inclus).
- `npm run preview` — sert le contenu de `dist/`.
- `./scripts/validate.sh` — build puis `git diff --check`.

Aucun lint ni test n'est configuré (`package.json` ne expose que `dev`, `build`, `preview`). La validation repose sur `tsc` : toute erreur de type, y compris une clé de traduction manquante, fait échouer le build. Ne jamais annoncer une vérification sans en avoir exécuté le résultat.

## Architecture

Frontend statique React + TypeScript + Vite. Pas de backend, CMS, base de données ni routeur — voir `AGENTS.md` pour les consignes du projet.

### Navigation par hash, sans routeur

`src/sections/index.ts` est la source unique des cinq sections (Accueil, Projets, Compétences, À propos, Contact) : identifiant d'URL, composant `lazy` et garde `isSectionId`. `App.tsx` lit et corrige le hash (`#accueil`, `#projets`, `#competences`, `#a-propos`, `#contact`) ; un hash absent ou inconnu est remplacé par `DEFAULT_SECTION_ID`, jamais écrasé silencieusement. Changer de langue ne doit pas toucher au hash.

### Double couche de contenu

- `src/i18n/` — tout le texte visible. `fr.ts` est la source de vérité de la structure **et** de la rédaction (rédaction V3 : partir du problème avant la technologie ; aucun chiffre, client ou résultat non validé — voir `docs/redaction-v3.md`).
- `src/content/` — structure volontairement non traduite : noms propres, technologies, pictogrammes, ids, visuels.

Les autres langues sont typées `Translations = typeof fr` : ajouter ou renommer une clé dans `fr.ts` casse la compilation tant que `en/es/it/de` ne sont pas mis à jour. Les listes traduites passent par `useTranslatedList` (tableaux dans les ressources).

### i18n chargé à la demande

`src/i18n/index.ts` fait du top-level `await` : seule la langue initiale (+ le français en repli) est montée avant le rendu ; `changeLanguage` importe les autres catalogues à la volée. L'import `./i18n` dans `main.tsx` précède donc obligatoirement le rendu. Résolution : `localStorage` (`site-language`) → navigateur → français.

### Thème en deux fichiers à garder alignés

Le thème (`light` / `dark` / `system`) vit dans `src/theme.ts` : le choix est persisté sous `site-theme`, le thème résolu est écrit dans `data-theme` sur `<html>`. `index.html` répète la même clé, la même valeur par défaut et la même résolution dans un script inline anti-flash — toute évolution doit être faite dans **les deux fichiers**. Les styles ne connaissent que `light`/`dark` via les jetons CSS de `src/styles/global.css` (`:root` et `[data-theme='dark']`).

### Shell d'interface

`App.tsx` monte le faux chrome de fenêtre (barre d'onglets via `TabNav`, barre d'adresse décorative, menu `⋯` via `WindowMenu`) autour de l'en-tête / contenu / pied de page. `WindowMenu` regroupe les commandes (plein écran, impression, zoom, apparence, copie du lien) et désactive honnêtement celles que le navigateur ne supporte pas — jamais simulées.

Styles en CSS pur dans `src/styles/` (`global`, `shell`, `components`, `sections`), importés par `main.tsx`.

### Déploiement

Docker + nginx (`Dockerfile`, `docker-compose.prod.yml`, `docker/nginx/`) vers `https://operius.fr/` via `scripts/deploy.sh` (branche `main`, health-check local puis public, rollback en cas d'échec).

## Repères documentaires

- `CONTEXT.md` — état actuel du projet et points à finaliser.
- `docs/design/` — captures de référence du design validé ; ne pas dévier sans validation explicite.
- `docs/redaction-v3.md` — style rédactionnel des textes.
- `docs/DECISIONS.md`, `docs/VERIFICATION-*.md`, `docs/reports/` — décisions et rapports de vérification.
