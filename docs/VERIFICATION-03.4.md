# Rapport de vérification — Étape 03.4

**Étape :** 03.4 — Intégration des visuels + responsive final

**Date :** 2026-09-25

**État de départ :** étapes 03.2 et 03.3 terminées et vérifiées (shell clair conforme aux
références, cinq sections, cinq langues, navigation par hash, menu `⋯`). Worktree non committé.

## Diagnostic

### Visuels disponibles

| Emplacement | Contenu |
|---|---|
| `docs/design/` | 6 captures PNG de référence (1024 × 1536) |
| `public/images/` | vide au départ |
| `src/assets/` | inexistant |
| Tout autre fichier image du dépôt | aucun |

Aucun fichier image de site n'existait. **Décision retenue (validée avec le demandeur) :** découper
les zones photo directement dans les captures de référence (`docs/design/*.png`) et les intégrer
comme visuels du site.

### Règle d'intégration appliquée

Deux catégories ont été distinguées à partir de l'examen des captures :

1. **Photos** (heros de Projets, Compétences, À propos, Contact + visuel large d'À propos +
   3 visuels de cartes) → découpées dans les captures et intégrées comme images. La présence d'un
   panneau technique incrusté est reprise **carte par carte** : panneau traduit sur Cockpit Servers
   et Sécurité & Réseaux (la référence en incruste un), aucun panneau sur Solutions Domotique
   (la référence n'en a pas — la tablette photographiée est le sujet).
2. **Maquettes d'interface / terminal** (visuels des cartes Smart BTP ProGest, Versutus-IA,
   Outils & Scripts ; visuel du hero d'Accueil) → **réimplémentées en HTML/CSS avec du texte
   traduit**, car ce sont des textes d'interface et non des photos : une extraction figerait du
   texte non traduisible dans les cinq langues.

Les **incrustations éditoriales** des références (panneau de processus du hero Projets, citation du
hero À propos) sont reprises en HTML **traduit**, positionnées aux emplacements mesurés sur les
captures, pour recouvrir entièrement l'incrustation d'origine. Les textes réellement portés par des
objets photographiés (tasses, affiches, carnets, écrans de code, livres) font partie de l'image.

### Problèmes identifiés

1. **Tablette 768 px** : toutes les grilles étaient empilées à une colonne (seuil unique à 820 px),
   la tablette étant traitée comme le mobile.
2. **`HTTP 404 /favicon.ico`** à chaque chargement.
3. **Calage des incrustations de hero** : le panneau du hero Projets ne couvrait pas l'incrustation
   d'origine (décalage), et la citation du hero À propos transparaissait (fond à 94 % d'opacité et
   encart non dimensionné à sa zone).

## Modifications

### Assets ajoutés (8 fichiers, 272 Ko au total, JPEG qualité 90-92)

| Fichier | Source (capture → zone) | Taille |
|---|---|---|
| `public/images/projects-hero.jpg` | `projects.png` — 390×260 à (610,165) | 31 Ko |
| `public/images/skills-hero.jpg` | `skills.png` — 393×269 à (607,168) | 35 Ko |
| `public/images/about-hero.jpg` | `about.png` — 483×375 à (512,160) | 45 Ko |
| `public/images/about-workshop.jpg` | `about.png` — 560×250 à (440,1005) | 47 Ko |
| `public/images/contact-hero.jpg` | `contact.png` — 490×265 à (510,480) | 35 Ko |
| `public/images/project-cockpit-servers.jpg` | `projects.png` — 315×190 à (680,470) | 26 Ko |
| `public/images/project-domotique.jpg` | `projects.png` — 315×190 à (30,855) | 17 Ko |
| `public/images/project-securite-reseaux.jpg` | `projects.png` — 315×190 à (680,855) | 19 Ko |

La zone du hero Contact exclut volontairement l'affiche et la note manuscrite de la référence
(textes éditoriaux figés en français sur la photo).

### Fichiers ajoutés

- `src/content/visuals.ts` — identifiants et chemins des visuels
- `src/components/PhotoVisual.tsx` — image + contenu superposé (position mesurée)
- `docs/VERIFICATION-03.4.md` (ce rapport)

### Fichiers modifiés

- `src/content/projects.ts` — type de visuel par projet (`photo` ou `panel`)
- `src/components/TechPanel.tsx` — option `showBar` (panneau superposé sans barre de titre)
- `src/components/ProjectCard.tsx` — visuel photo ou panneau selon le projet
- `src/sections/{Projects,Skills,About,Contact}Section.tsx` — visuels photo et incrustations traduites
- `src/styles/components.css` — styles `.photo-visual`, ratio uniforme des cartes, seuils responsive,
  calage des incrustations (mesuré sur les captures)
- `index.html` — favicon SVG en ligne
- `src/i18n/{fr,en,es,it,de}.ts` — 8 textes alternatifs par langue (`visuals.alt.*`)

### Composants modifiés

Aucun composant du shell : navigation, menu `⋯`, sélecteur de langue et chargement i18n sont
inchangés. Aucune dépendance ajoutée.

## Visuels

```text
Accueil      : finalisé   — la référence n'utilise pas de photo sur ce hero (panneau de code),
                            reproduit en HTML/CSS avec le texte traduit
Projets      : intégré    — photo de hero + 3 visuels de cartes photo, 3 cartes en panneau traduit
Compétences  : intégré    — photo de hero (le visuel de référence est une photo)
À propos     : intégré    — photo de hero + visuel large d'atelier
Contact      : intégré    — photo de hero (zone hors textes éditoriaux figés)
```

Répartition réelle des `<img>` par section : Accueil 0, Projets 4, Compétences 1, À propos 2,
Contact 1 = **8 images**, aucune cassée, aucun `alt` manquant.

## Responsive

Mesures réelles (Chromium 153, `npm run preview`) : `scrollWidth` / `clientWidth` du document, plus
recherche de tout élément dépassant le cadre.

| Section | 1440 | 768 | 375 |
| --- | --- | --- | --- |
| Accueil | OK — 1440/1440, 0 élément hors cadre | OK — 768/768 | OK — 375/375 |
| Projets | OK — 1440/1440 | OK — 768/768 | OK — 375/375 |
| Compétences | OK — 1440/1440 | OK — 768/768 | OK — 375/375 |
| À propos | OK — 1440/1440 | OK — 768/768 | OK — 375/375 |
| Contact | OK — 1440/1440 | OK — 768/768 | OK — 375/375 |

75 mesures (3 largeurs × 5 sections × 5 langues), toutes en `scrollWidth === clientWidth`.
Ratios : cartes projet uniformes (`aspect-ratio: 315 / 190`, visuels affichés 361×218), photos de
hero à leur ratio naturel (527×351 et 527×409) — aucune déformation, `object-fit: cover` utilisé
uniquement là où le ratio est imposé par la grille de cartes.

## Langues

```text
FR : OK — visuels, incrustations traduites et textes alternatifs vérifiés
EN : OK
ES : OK
IT : OK
DE : OK — cas de texte long : aucun débordement, incrustations traduites
```

## Vérifications

| Vérification | Résultat |
| --- | --- |
| `npm run build` (`tsc -b && vite build`) | **Succès**, 83 modules (relancé après chaque correction) |
| `./scripts/validate.sh` | **Absent du projet** — non exécuté |
| `git status --short` / `git diff --check` | Exécutés ; aucune erreur d'espacement ; **aucun commit** créé |
| Navigation `#accueil` → `#contact` (3 largeurs) | 5/5 hashes corrects, section conforme |
| Changement de langue → section conservée | OK (`#competences` conservé, CTA allemand) |
| Menu `⋯` (ouverture, 6 éléments, fermeture Échap) | OK aux 3 largeurs |
| Sélecteur de langue | OK aux 3 largeurs, dans l'en-tête |
| Overflow (`scrollWidth` / `clientWidth` + éléments hors cadre) | 0 débordement, 0 élément hors cadre |
| Console / exceptions / ressources | 0 erreur, 0 exception, 0 erreur réseau |
| Images chargées | 8/8 dans les 75 mesures, 0 cassée, 0 `alt` manquant |
| Textes alternatifs et superposés traduits | Vérifiés langue par langue (FR/EN/ES/IT/DE) |
| Tests navigateur | Chromium 153 en CDP ; captures desktop 1440 et mobile 375 en FR et DE, plus tablette 768 en FR |

## Problèmes corrigés (méthode imposée)

```text
PROBLÈME   : à 768 px, toutes les grilles passaient à une colonne (tablette traitée comme mobile).
CAUSE      : seuil unique à 820 px dans components.css, appliqué aux paires de panneaux comme aux
             grilles de cartes.
FICHIER    : src/styles/components.css
CORRECTION : seuil porté à 700 px pour `.grid--3`, `.grid--4`, `.grid--tiles`, `.checks` et
             l'empilement du CTA ; 820 px conservé pour `.grid--2` et les barres de niveau.
VÉRIFICATION: 0 débordement aux 3 largeurs ; captures tablette relues (2 colonnes, CTA côte à côte).
```

```text
PROBLÈME   : `HTTP 404 /favicon.ico` à chaque chargement.
CAUSE      : aucun favicon déclaré dans index.html.
FICHIER    : index.html
CORRECTION : favicon SVG en ligne (monogramme vert), sans fichier binaire ni dépendance.
VÉRIFICATION: 0 erreur de ressource sur les 15 passes suivantes.
```

```text
PROBLÈME   : le panneau du hero Projets ne recouvrait pas l'incrustation de la référence (bord
             gauche et bas de la carte d'origine visibles) ; la citation du hero À propos laissait
             transparaître la citation française d'origine.
CAUSE      : calage estimé à l'œil (left 15%/top 35%) au lieu d'être mesuré ; encart de citation
             en fond à 94 % d'opacité et dimensionné par son contenu au lieu de remplir sa zone.
FICHIERS   : src/styles/components.css
CORRECTION : géométrie mesurée sur les captures (projets : 8 %/24 %/47 %/65 % → zone de recouvrement
             6 %/22 %/51 %/69 % ; citation : 60 %/62 %/40 %/30 % → 55 %/57 %/47 %/38 %), encart de
             citation opaque (var(--code-bg)) et remplissant sa zone.
VÉRIFICATION: captures des deux heros relues après correction — aucune trace de texte d'origine ;
             campagne complète relancée : 0 débordement, 0 erreur.
```

## Écarts connus

1. **Accueil sans photo** : la référence n'utilise pas de photo sur ce hero (panneau de code) ; il
   est reproduit en HTML/CSS avec le texte traduit — impossible d'en extraire une photo.
2. **Micro-textes figés dans certains visuels** : les cartes Smart BTP ProGest, Versutus-IA et
   Outils & Scripts sont réimplémentées en HTML traduit (aucun texte figé) ; la carte Solutions
   Domotique et l'écran du visuel large d'À propos conservent, comme dans les références, des
   objets photographiés portant du texte (interface de tablette murale, écran d'atelier) — au même
   titre que les tasses, affiches et livres des photos.
3. **Résolution limitée** : les découpes proviennent de captures 1024 px de large (315 à 560 px de
   large selon le visuel) ; elles peuvent paraître douces sur écran haute densité. Des fichiers
   sources d'origine seraient préférables.
4. **Cadrage du hero Contact** : la zone retenue exclut l'affiche et la note manuscrite de la
   référence (textes éditoriaux en français) ; le cadrage diffère donc légèrement de la capture.
5. **Clés i18n non rendues** : `skills.visualLines`, `about.visualLines`, `about.wideVisualLines`
   et `contact.visualLines` ne sont plus affichées (panneaux remplacés par les photos) ;
   `projects.items.domotique.visualLines` est lue mais non rendue (carte sans panneau, comme la
   référence). Ces clés restent dans les cinq fichiers de langue : elles n'ont pas été supprimées
   pour ne retirer aucun contenu traduit.
6. **Contenus provisoires** (chiffres, périodes, coordonnées, zone géographique) : inchangés depuis
   03.2/03.3, toujours des emplacements explicites, aucune valeur inventée.
7. **Formulaire de contact** : structure complète, envoi désactivé (aucun service connecté) ;
   liens externes inactifs (aucune URL validée) — inchangé.
8. **Navigateurs** : seul Chromium 153 a été utilisé (ni Firefox, ni WebKit, ni appareil réel).

## Verdict

```text
VALIDÉ
```

Les cinq sections ont leurs visuels intégrés ou finalisés conformément aux références, les
incrustations éditoriales sont reprises en HTML traduit aux emplacements mesurés, les ratios sont
maîtrisés sans déformation, desktop (1440), tablette (768) et mobile (375) sont vérifiés, FR et DE
sont contrôlés visuellement, les cinq langues restent fonctionnelles, aucun débordement ni
élément hors cadre n'a été relevé, la navigation et le menu `⋯` fonctionnent, la console est
vierge, `npm run build` réussit et `git diff --check` est propre. Les écarts listés ci-dessus sont
documentés ; aucun n'empêche l'usage du site.
