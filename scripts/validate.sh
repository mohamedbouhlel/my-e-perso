#!/usr/bin/env bash
#
# Validation technique du projet.
#
# Aucun lint n'est configuré : `package.json` n'expose que `dev`, `build` et `preview`.
# Le contrôle de types (`tsc -b`) fait partie du build et vérifie aussi la parité des clés
# d'internationalisation (chaque fichier de langue est typé `Translations = typeof fr`).
#
set -euo pipefail

echo "→ npm run build (tsc -b && vite build)"
npm run build

echo "→ git diff --check"
git diff --check

echo "→ Validation technique OK (lint non configuré dans ce projet)"
