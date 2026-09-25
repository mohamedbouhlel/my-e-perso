# Site personnel

Squelette frontend React + TypeScript + Vite.

## Prérequis
Node.js, npm et Git.

## Installation et lancement
```bash
npm install
npm run dev
```

## Build de production
```bash
npm run build
npm run preview
```

## Validation
```bash
./scripts/validate.sh
```
Le script lance le build (contrôle de types inclus) puis `git diff --check`. Aucun lint n'est
configuré dans ce projet.

## Structure
- `src/components/` : composants réutilisables
- `src/sections/` : sections du site
- `src/i18n/` : configuration i18next + un fichier par langue (fr, en, es, it, de)
- `src/content/` : structure non traduite (ids, pictogrammes, technologies, noms de projets)
- `src/styles/` : styles
- `public/images/` : images statiques
- `docs/` : documentation et références de design

## Langues
Français (défaut), anglais, espagnol, italien, allemand. Le sélecteur est dans l'en-tête ; la
langue est conservée dans `localStorage` et la section affichée n'est pas perdue au changement.
