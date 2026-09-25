# CONTEXT.md

État actuel du projet. Consignes : `AGENTS.md` · décisions : `docs/DECISIONS.md` · références visuelles : `docs/design/`.

## Stack

- React 19 + TypeScript + Vite
- i18next + react-i18next (traductions)
- Aucun backend, CMS, base de données ni routeur

## Structure

```text
src/
├── i18n/        index.ts + fr.ts, en.ts, es.ts, it.ts, de.ts
├── content/     structure non traduite : ids, pictogrammes, tons, technologies, noms de projets
├── components/  shell (chrome, en-tête, pied de page, menu ⋯) + composants partagés
├── sections/    les cinq sections
└── styles/      global.css, shell.css, components.css, sections.css
docs/design/     références visuelles validées (captures)
```

## Sections

Accueil · Projets · Compétences · À propos · Contact.

## Navigation

- Onglets in-page dans le faux chrome de fenêtre, plus la navigation de l'en-tête.
- Hash d'URL : `#accueil`, `#projets`, `#competences`, `#a-propos`, `#contact`. Pas de routeur.
- Bouton `⋯` : menu de commandes de fenêtre (plein écran, impression, zoom, copie du lien).
- Changer de langue ne touche pas au hash : la section courante reste affichée.

## Internationalisation

- Langues disponibles : **FR, EN, ES, IT, DE** (ressources dans `src/i18n/`). Français par défaut.
- Le sélecteur compact de langue est monté dans le shell (`src/App.tsx`) et la résolution est active
  dans `src/i18n/index.ts` : langue enregistrée → langue du navigateur → français.
- Persistance : `localStorage`, clé `site-language`. L'attribut `lang` du document suit la langue active.
- Source de vérité des textes : `src/i18n/fr.ts`, réécrit en **rédaction V3** (partir du problème et de
  son contexte avant la technologie ; aucun chiffre, client ou résultat non validé). La rédaction de
  référence est documentée dans `docs/redaction-v3.md`. Les autres langues
  sont déclarées `Translations = typeof fr` : une clé manquante ou renommée casse la compilation, et
  elles reprennent la structure V3.
- Volontairement non traduits : noms de projets, technologies, noms de fichiers des panneaux techniques, nom du site et monogramme.

## Visuels

- Photos découpées dans les captures de référence (`docs/design/`) et exportées dans `public/images/`
  (6 fichiers JPEG) ; déclarées dans `src/content/visuals.ts`, affichées par `PhotoVisual`.
- Les incrustations éditoriales des références (panneau de processus, citation) sont reprises en HTML
  **traduit**, positionnées aux emplacements mesurés sur les captures.
- Les visuels de référence qui sont des maquettes d'interface/terminal (Accueil, cartes Smart BTP
  ProGest, Versutus IA, Outils & automatisations) restent réimplémentés en HTML/CSS avec du texte traduit.
- Détail complet : `docs/VERIFICATION-03.4.md`.

## Build

- `npm run build` (`tsc -b && vite build`) : OK
- `./scripts/validate.sh` : build + `git diff --check` (aucun lint n'est configuré)
- `npm run dev` pour le développement, `npm run preview` pour servir `dist/`

## À finaliser

- Visuels : fournir les fichiers sources d'origine (les découpes viennent de captures 1024 px, donc de résolution limitée).
- URL des projets et des dépôts, liens de pied de page, coordonnées de contact.
- Formulaire de contact : aucun service d'envoi connecté, bouton désactivé.
- CV : aucun fichier fourni ; les emplacements de téléchargement ont été retirés (la V3 ne prévoit pas de CV).
- Traductions EN/ES/IT/DE : à faire relire par des locuteurs natifs.
- La rédaction V3 n'affirme aucun chiffre (expérience, niveaux, périodes, zone géographique) : les blocs correspondants ne sont plus affichés.
- Statuts, technologies et libellés de projets restent à confirmer par le propriétaire du site (aucune donnée n'a été inventée).
