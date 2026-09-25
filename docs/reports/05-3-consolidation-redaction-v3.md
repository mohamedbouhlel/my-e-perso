# Étape 05.3 — Consolidation rédactionnelle V3

## Date

26 septembre 2026.

## Périmètre

Dernière passe de consolidation rédactionnelle demandée après l'audit 05.2 : supprimer les
incohérences restantes et renforcer la chaîne **problème → compréhension → approche → solution →
preuve → contact**, sans refaire la rédaction V3 ni toucher au shell, aux proportions du design, à
la navigation, au système i18n ou au déploiement.

État au départ de l'étape : intégration 05.1 en place (24 fichiers modifiés), rapports 05.1 et 05.2
présents, **aucune modification 05.3 encore appliquée**. Toutes les modifications listées ci-dessous
ont donc été réalisées dans cette étape.

Pas de commit, pas de commande Git destructive.

## Modifications réalisées

### Rédaction française (`src/i18n/fr.ts`)

- `projects.categories.ia` : « IA & Automation » → **« IA & automatisation »** (français homogène avec
  « Automatisation & domotique » et « Développement & IA »).
- `contact.form.subjects` : nouvelle liste de cinq sujets alignés sur les domaines réellement
  présentés — « Terrain / courant faible », « Infrastructure / réseaux », « Automatisation &
  domotique », « Développement & IA », « Autre ».
- `home.eyebrow` : « // des solutions concrètes pour vos projets » → **« // mon approche »**.
- `home.visualLines` : les sept lignes d'origine → les quatre étapes de la méthode — `comprendre`,
  `simplifier`, `construire`, `tester` (aucun autre slogan). `src/content/panels.ts` passe à quatre
  tons (`accent`, `default`, `default`, `accent`).
- `home.quote`, `skills.quote`, `about.quote` : trois citations **différentes** issues de la V3, au lieu
  de la même phrase répétée trois fois.
- `footer.legal` : « Solutions ouvertes pour un monde plus simple. » → **« Des solutions utiles,
  fiables et maîtrisables. »**
- `meta.description` : **« Operius — solutions techniques du terrain au logiciel : réseaux,
  infrastructure, automatisation, développement et IA. »**
- `projects.items.cockpitServers` et `projects.items.outilsAutomatisations` : `description` ramenée à
  la phrase de problème, et `approach` renseignée par **reprise descriptive du texte source** (sa
  seconde phrase), sans rédaction nouvelle.
- `skills.projectsLink` : nouvelle clé « Voir les projets ».
- `about.journey.title` : nouvelle clé « Du terrain au logiciel » ; `about.journey.eyebrow` :
  « // parcours ».
- `visuals.alt` : suppression de `projectDomotique` et `projectSecuriteReseaux`.

### Quatre autres langues

`en.ts`, `es.ts`, `it.ts`, `de.ts` : mêmes clés, mêmes longueurs de tableaux (`home.visualLines` = 4,
`contact.form.subjects` = 5), valeurs traduites ; les valeurs dont le français n'a pas changé ont
conservé leur traduction existante. Compilation vérifiée par `tsc -b` (parité `Translations`).

### Chaîne de conviction

- `src/sections/SkillsSection.tsx` : lien **« Voir les projets → »** ajouté sous la note de la carte
  Technologies, avec la navigation par hash existante (`#projets`, via `projectsTarget` dans
  `src/content/skills.ts`). Aucun routeur ajouté.

### Structure HTML

- `Hero` : le titre principal de chaque section passe de `<h2>` à **`<h1>`**.
- `Card`, `CallToAction`, `ProjectCard`, tuiles de domaines et titres de bloc : `<h3>` → **`<h2>`**.
- À propos : le bloc « Du terrain au logiciel » dispose désormais d'un **vrai titre `<h2>`**
  (`block-title`), au lieu d'un simple intitulé de contexte.
- Aucun changement visuel : toutes les classes de titres portent déjà `margin: 0` et leur propre
  `font-size` ; la règle globale `h1, h2, h3, h4` de `global.css` est identique pour ces niveaux.

### Documentation

- **`docs/redaction-v3.md` créé** : positionnement, phrase directrice, chaîne de conviction, structure
  rédactionnelle des cinq sections, texte français de référence, principes et interdits rédactionnels.
  Il devient la source de vérité documentaire de la rédaction ; `src/i18n/fr.ts` reste le texte
  exécutable. Les 171 fragments cités ont été recontrôlés contre `fr.ts` (seuls manquants : dix noms de
  technologies, qui vivent dans `src/content/projects.ts`).
- `CONTEXT.md` mis à jour (renvoi vers `docs/redaction-v3.md`, 6 visuels au lieu de 8, composants
  supprimés, données restant à confirmer).
- `src/content/site.ts` : commentaire obsolète corrigé (l'adresse affichée correspond au domaine
  réellement servi) ; la donnée n'a pas été modifiée.

### Nettoyage (inutilité vérifiée avant suppression)

Suppression des quatre composants plus rendus — `Bars`, `Metrics`, `Timeline`, `MiniTabs` — et des
deux visuels plus affichés — `project-domotique.jpg`, `project-securite-reseaux.jpg` — après recherche
de toutes leurs références dans `src/` (aucune). Déclaration `VisualId`/`visualSources` réduite à six
entrées ; clés `visuals.alt` correspondantes retirées dans les cinq langues. Suppressions effectuées
avec l'outil de corbeille récupérable du poste.

## Textes pré-V3 supprimés ou remplacés

| Texte antérieur | Traitement |
|---|---|
| `// des solutions concrètes pour vos projets` | remplacé par `// mon approche` |
| Panneau `mon_approche.sh` (7 lignes : « Des besoins concrets », « analyser les usages », …) | remplacé par les 4 étapes de la méthode V3 |
| Citation « Des outils utiles, pas des usines à gaz. » (3 pages) | remplacée par 3 citations différentes issues de la V3 |
| Slogan de pied de page « Solutions ouvertes pour un monde plus simple. » | remplacé par « Des solutions utiles, fiables et maîtrisables. » |
| Méta-description « Operius — projets, compétences et contact. » | remplacée par la description V3 |
| `IA & Automation` | remplacé par `IA & automatisation` |
| Sujets « Domotique », « Réseaux & sécurité » | remplacés par les quatre domaines du site |
| Formulations héritées des descriptions Cockpit Servers et Outils & automatisations | redistribuées entre `description` et `approach`, sans ajout de texte |

Contrôle après modification, sur le texte réellement rendu : 0 occurrence de « usines à gaz », de
« Solutions ouvertes », des lignes du panneau d'origine, de « Automation » en français, de
« Réseaux & sécurité » comme sujet de formulaire.

## Éléments conservés et pourquoi

- **Panneau du hero Projets (`idees/`) et lignes internes des quatre cartes projet** : contenu
  graphique neutre décrivant chaque projet, cohérent avec la V3, qui ne contredit ni n'affaiblit le
  positionnement. Conservés sans modification.
- **Libellés de shell** : « me contacter », « copier », menu de fenêtre, onglets, adresse affichée.
  Fonctionnels et neutres ; le shell ne doit pas être modifié.
- **Badges de statut des projets, sujets, placeholders annoncés** (liens à valider, envoi désactivé,
  liens de pied de page inertes) : information déjà présente, explicitement signalée à l'utilisateur,
  aucune donnée inventée.
- **Technologies de Cockpit Servers et Outils & automatisations** : conservées pour que les quatre
  cartes gardent la même structure (nom, accroche, description, approche, technologies) ; la V3 n'en
  fournit pas, elles restent à confirmer par le propriétaire du site.
- **Page À propos** : aucun projet ajouté (elle reste centrée sur le parcours, le profil hybride, les
  principes et la méthode) ; la preuve passe par la navigation vers Projets.
- **Accueil** : les quatre cartes de domaines continuent de pointer vers Compétences, le CTA « Voir
  les projets » reste le point d'entrée vers la preuve ; aucun bloc ajouté.
- **Contact** : le titre et l'introduction sont inchangés, aucune promesse commerciale ajoutée.

## Vérifications exécutées et résultats

| Vérification | Commande / moyen | Résultat |
|---|---|---|
| Build | `npm run build` | OK — 79 modules, `dist/` généré |
| Validation projet | `./scripts/validate.sh` | OK, exit 0 |
| Espaces | `git diff --check` | OK, aucune anomalie |
| Parité i18n | `tsc -b --force` | 0 erreur sur les cinq langues |
| Contenu des 5 langues | extraction des objets i18n et comparaison | `visualLines` = 4 et `subjects` = 5 partout ; `projectsLink`, `journey.title`, citations, slogan et méta-description présents partout ; 2 clés `visuals.alt` supprimées partout |
| Cinq sections | navigateur, `#accueil` → `#contact` | 5 sections, titres conformes, 4 masquées à la fois |
| Navigation par hash et onglets | clic sur chaque onglet | 5/5 (hash et section affichée corrects) |
| Liens | balayage de tous les `a[href]` | 0 lien cassé ; nouveau lien `#projets` résolu |
| Structure des titres | relevé DOM | 1 `<h1>` par section (5 dans le document, 1 visible), 0 `<h3>` ; « Du terrain au logiciel » en `<h2>` |
| Console et erreurs React | `Runtime.exceptionThrown`, `console.error/warning`, `Log.entryAdded` | 0 événement |
| Débordement horizontal | desktop 1440 px et mobile 390 px, FR / EN / DE | 0 sur toutes les sections, hauteur de page vérifiée non nulle |
| Contenu tronqué | éléments à débordement masqué | 0 |
| Formulaire | cinq sujets, quatre champs reliés à un `<label>`, placeholder, envoi désactivé | conforme |
| Autres langues | 5 langues × 5 sections sur le build de production | titres rendus, 0 clé i18n brute |
| Sélecteur de langue | bascule à chaud FR → ES sans rechargement | langue du document, contenu et persistance mis à jour, hash inchangé |
| Textes pré-V3 | recherche dans le texte rendu | aucune occurrence contradictoire |
| `docs/redaction-v3.md` | présence et cohérence | présent, 171 fragments de référence contrôlés |
| État Git | `git status --short` | 27 fichiers modifiés, 6 supprimés, rapports et doc non suivis ; aucun commit |

## Problèmes restants

1. **Statuts, technologies et libellés de projets** restent à confirmer par le propriétaire du site
   (aucune donnée n'a été inventée ; la V3 n'en fournit pas pour deux des quatre projets).
2. **Citations d'incrustation** : trois extraits différents de la V3 sont utilisés, mais le texte de la
   V3 étant entièrement rendu, deux d'entre eux existent aussi comme texte de corps sur une autre page.
   Éviter toute reprise aurait imposé de supprimer les incrustations prévues par les références.
3. **Panneau du hero Accueil** : passé de sept à quatre lignes (exigence de la méthode V3), la colonne
   visuelle est plus courte que la colonne de texte ; le design et la grille sont inchangés.
4. **Un seul `<h1>` visible mais cinq dans le document** (une par section, les sections inactives sont
   masquées par `hidden`). Choix imposé par l'architecture à onglets sans routeur.
5. **Documents historiques** : `docs/VERIFICATION-03.4.md` mentionne encore les deux visuels supprimés
   et les composants retirés ; il décrit un état passé et n'a pas été réécrit.
6. **Traductions EN/ES/IT/DE** : à faire relire par des locuteurs natifs (déjà listé dans `CONTEXT.md`).

## Verdict final

```text
VALIDÉ
```
