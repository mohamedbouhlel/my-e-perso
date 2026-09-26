# Rapport — optimisation PageSpeed

**Date :** 2026-09-26  
**Base :** `main` à `65133f771d9c6271e21819f1cd319c5362939736`  
**Branche :** `perf/pagespeed-2026-09-26`

## Objectif

Traiter les principaux constats PageSpeed mobile observés sur `https://operius.fr/` sans modifier le design ni introduire d'architecture disproportionnée.

## Constats

- Performance PageSpeed mobile : 90.
- Accessibilité : 100.
- Bonnes pratiques : 100.
- SEO : 100.
- FCP/LCP observés : 2,9 s.
- TBT : 0 ms.
- CLS : 0.
- JavaScript : environ 359,8 KiB transférés sur le bundle principal, avec environ 131 KiB d'économies estimées.
- CSS inutilisé : environ 13 KiB d'économies estimées.
- Requête CSS bloquante : environ 25,2 KiB et environ 300 ms dans l'audit.
- Cache : l'audit signalait environ 605 KiB d'économies potentielles sur la durée de vie du cache.

## Modifications

1. **Compression Nginx**
   - gzip activé pour les ressources textuelles.
   - niveau de compression 5.
   - types CSS/JS/JSON/SVG/XML couverts.

2. **Cache**
   - `/assets/` : `max-age=31536000, immutable` pour les assets Vite fingerprintés.
   - `/images/` : cache de 30 jours.
   - HTML : revalidation (`no-cache`).
   - `/health` : `no-store`.

3. **JavaScript initial**
   - sections React chargées en lazy chunks.
   - une seule section active rendue à la fois.
   - catalogues i18n chargés à la demande ; la langue courante et le fallback français sont chargés au démarrage.

4. **Images**
   - images des cartes projets en lazy loading.
   - image atelier de la section À propos en lazy loading.
   - possibilité explicite de définir `loading` et `fetchPriority` dans `PhotoVisual`.

## Ce qui n'a volontairement pas été fait

- Pas de purge agressive du CSS : risque de régression visuelle supérieur au gain identifié.
- Pas de report arbitraire de la feuille CSS principale : elle participe au rendu initial et l'audit indique aussi une latence serveur.
- Pas de modification du design.
- Pas de nouveau framework ou dépendance lourde.

## Vérifications

- Comparaison GitHub : branche proprement dérivée de `main`, 7 commits en avance, 0 en retard.
- Fichiers modifiés limités à :
  - `docker/nginx/default.conf`
  - `src/App.tsx`
  - `src/components/PhotoVisual.tsx`
  - `src/components/ProjectCard.tsx`
  - `src/i18n/index.ts`
  - `src/sections/AboutSection.tsx`
  - `src/sections/index.ts`
- **Build TypeScript/Vite non exécuté dans cet environnement.**
- **PageSpeed post-correction non exécuté.**
- Aucun déploiement production effectué.

## Verdict

**Correctifs préparés et isolés sur une branche dédiée.**

La validation finale doit être effectuée par :

```bash
npm ci
npm run build
bash scripts/validate.sh
```

puis par un nouveau test PageSpeed mobile sur `https://operius.fr/`.

La fusion dans `main` et le déploiement production sont volontairement séparés de cette étape de modification.
