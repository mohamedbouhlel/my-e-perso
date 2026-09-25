# Rapport de vérification — Étape 03.3

**Étape :** 03.3 — Internationalisation FR / EN / ES / IT / DE

**Date :** 2026-09-25

**Commit de départ :** `87bdeab` (état de travail de l'étape 03.2, non committé)

**État initial :** aucun système i18n, aucun `src/i18n/`, aucune dépendance i18next. Tous les
textes étaient centralisés dans `src/content/*.ts` (français uniquement).

## Solution mise en place

- `i18next` + `react-i18next` (seules dépendances d'i18n ajoutées).
- `src/i18n/index.ts` : ressources des cinq langues, résolution initiale, persistance, `changeLanguage`.
- `src/i18n/fr.ts` : **source de vérité** des textes, exporte `type Translations = typeof fr`.
- `src/i18n/{en,es,it,de}.ts` : déclarés `const xx: Translations`, donc toute clé manquante,
  renommée ou mal typée casse la compilation (parité vérifiée par `tsc`).
- `src/content/*.ts` réduits à la structure non traduite : ids, pictogrammes, tons visuels,
  noms de projets, technologies, noms de fichiers des panneaux.
- `src/components/LanguageSwitcher.tsx` : sélecteur dans l'en-tête (FR EN ES IT DE).

## Résolution et persistance de la langue

1. langue enregistrée dans `localStorage` (clé `site-language`) ;
2. langue du navigateur si elle fait partie des langues supportées ;
3. français en repli garanti.

`document.documentElement.lang` suit la langue active ; le titre et la description du document
sont également traduits.

## Vérifications

Chromium 153 piloté en CDP, application servie par `npm run preview`.

| Contrôle | Résultat |
|---|---|
| Cinq langues rendues (onglets, en-tête, menu `⋯`, section, titre de document) | OK pour fr, en, es, it, de |
| Clés de traduction brutes affichées | Aucune, dans aucune langue ni section |
| Changement de langue depuis `#contact` | Section et hash conservés (`#contact`), textes mis à jour |
| Rechargement après changement de langue | Langue et section conservées |
| Ouverture directe d'un hash sans valeur stockée | Section correcte, langue résolue (navigateur) |
| Détection navigateur : `de-DE` → de, `es-ES` → es, `ja-JP` → fr | OK |
| Menu `⋯` (ouverture, libellés traduits, fermeture Échap) | OK |
| Débordement horizontal — 5 sections × 5 langues × 3 largeurs | Aucun, après correction locale |
| Console / exceptions JS | Aucune |
| `npm run build` (`tsc -b && vite build`) | Succès, 81 modules |

Défaut réel détecté et corrigé : en allemand sur mobile 375 px, la section Compétences débordait
de 13 px — `.info-list__meta` (« Zeitraum noch anzugeben ») en `nowrap` dans une ligne flex non
sécable. Corrigé localement (`flex-wrap` sur `.info-list__item`, `min-width: 0` sur la colonne de
texte, `overflow-wrap` sur le texte), sans toucher à la typographie globale.

## Écarts connus

1. **Nom du site non traduit** (« Site personnel » et le monogramme « S ») : traité comme un nom
   propre, par cohérence avec le monogramme. Le titre de l'onglet du navigateur, lui, est traduit
   (« Persönliche Website », « Sitio personal »…). À trancher si le nom doit être considéré comme
   descriptif plutôt que comme une marque.
2. **`index.html` reste en français** (titre, description, `lang="fr"`) : valeurs statiques par
   défaut avant l'exécution de React ; elles sont remplacées à l'initialisation selon la langue.
3. **Traductions EN/ES/IT/DE** : produites à partir du français, à faire relire par des locuteurs
   natifs (aucun test linguistique humain n'a été mené).
4. **Contenus provisoires conservés** dans les cinq langues (chiffres, périodes, coordonnées,
   zones géographiques) : toujours des emplacements explicites, jamais de valeurs inventées.
5. **Autres navigateurs** non testés (Chromium uniquement).

## Verdict

**Étape 03.3 terminée** : cinq langues fonctionnelles, français par défaut et en repli, aucun texte
d'interface en dur dans les composants, changement de langue sans rechargement et sans perte de
section, persistance après rechargement, architecture visuelle et navigation inchangées, build
réussi et rendu vérifié dans un navigateur réel.
