# Étape 05.1 — Intégration de la V3 rédactionnelle française

Date : 25 septembre 2026 · Application : site personnel « Operius » (React 19 + TypeScript + Vite)

## Cadrage préalable

La V3 décrit moins de blocs que le site n'en affichait (Accueil sans le bloc à onglets
« expérience / projets / outils », Projets avec 4 projets au lieu de 6, Compétences sans niveaux de
maîtrise ni certifications, À propos sans timeline / valeurs / motivation, Contact sans moyens de
contact ni zone d'intervention).

Deux lectures étaient possibles et incompatibles ; la question a été posée avant toute écriture :

- **retenue** — la V3 définit le contenu : les textes sont remplacés et les blocs portent la V3, les
  blocs sans équivalent V3 ne sont plus affichés ; design, composants, grilles, styles, shell,
  navigation et déploiement restent inchangés ;
- écartée — remplacer seulement les textes couverts par la V3 en conservant tous les blocs actuels.

## Modifications

### Fichiers

24 fichiers modifiés, aucun fichier supprimé, aucun commit créé (`AGENTS.md` n'exige pas de commit).

| Domaine | Fichiers |
|---|---|
| Textes FR | `src/i18n/fr.ts` (réécrit) |
| Autres langues (parité de clés) | `src/i18n/en.ts`, `es.ts`, `it.ts`, `de.ts` |
| Structure non traduite | `src/content/{home,projects,skills,about,contact,panels}.ts` |
| Sections | `src/sections/{Home,Projects,Skills,About,Contact}Section.tsx` |
| Composants partagés | `src/components/{Hero,ProjectCard,ContactForm,CallToAction}.tsx` |
| Styles (ajustements locaux) | `src/styles/components.css`, `src/styles/sections.css` |
| Documentation d'état | `CONTEXT.md`, `README.md` |

### Textes remplacés (par section)

- **Accueil** : titre « Pas plus de technologie. / La bonne technologie. », deux paragraphes
  d'introduction, CTA « Voir les projets » et « Parler de votre besoin » ; quatre cartes de domaines
  (Infrastructure, Sécurité & courant faible, Automatisation & domotique, Développement & IA) avec
  accroche et description ; bloc « Pourquoi cette approche ? » ; carte « Du terrain au logiciel » ;
  conclusion « Une conviction » et son CTA « Parler de votre projet ».
- **Projets** : titre et deux paragraphes d'introduction ; quatre cartes (Smart BTP ProGest,
  Versutus IA, Cockpit Servers, Outils & automatisations) avec accroche, description, « Approche »
  et « Technologies » ; conclusion « Ce que ces projets ont en commun ». Catégories de filtre
  ramenées à Infrastructure / IA & Automation / Développement (Domotique et Sécurité n'avaient plus
  de projet).
- **Compétences** : titre et deux paragraphes ; quatre cartes de niveaux d'intervention (Terrain,
  Infrastructure, Développement, IA) avec sous-titre et texte ; carte « Technologies » (liste et
  précision de lecture) ; conclusion « Ce qui compte ».
- **À propos** : titre et deux paragraphes ; bloc « Du terrain au logiciel » (quatre leçons) ;
  carte « Un profil hybride » (chaîne installation → automatisation) ; carte « Ce que je privilégie »
  (quatre critères) ; conclusion « Construire des solutions que l'on peut encore comprendre demain ».
- **Contact** : titre et introduction, « Expliquez simplement : » et ses quatre entrées ; carte
  « Décrire mon besoin » (champs Votre nom, Votre adresse email, Sujet, Décrivez votre besoin,
  placeholder « Quelques lignes suffisent pour commencer. ») ; carte « Ce que vous pouvez attendre » ;
  conclusion « Le premier travail consiste à comprendre le besoin ».

Aucune phrase de la V3 n'a été perdue : 121 phrases distinctes vérifiées présentes dans `fr.ts`.

### Blocs et éléments retirés de l'affichage

Bloc à onglets « expérience / projets / outils » et bouton CV (Accueil) · barres de niveaux de
maîtrise, certifications, métriques et filtres de domaines (Compétences) · métriques, timeline,
valeurs et motivation (À propos) · moyens de contact, zone d'intervention et champ « Entreprise »
(Contact) · métriques (Accueil, Compétences, À propos) · liens « voir mon CV » et « télécharger mon
CV ». Les fichiers de composants concernés sont conservés (voir Problèmes).

### Ajustements de mise en page (locaux uniquement)

- `Hero` : le texte d'introduction accepte plusieurs paragraphes, pour ne pas fusionner les
  paragraphes de la V3. Rendu identique quand il n'y a qu'un paragraphe.
- `CallToAction` : le paragraphe de texte devient facultatif (la conclusion de Compétences tient en
  un titre et une action).
- `ProjectCard` : ajout de l'accroche et des sous-titres « Approche » / « Technologies », avec deux
  règles CSS ajoutées dans le bloc « carte projet » existant.
- Projets : grille `grid--3` → `grid--2`, cohérente avec 4 projets enrichis (une grille de 3 laissait
  une rangée incomplète).
- Compétences : les filtres de domaines sont retirés (les domaines V3 sont des blocs de contenu, pas
  des catégories) ; le filtre de Projets est conservé.
- `.info-list__item > div` : `flex: 1 1 8rem`, pour que les pictogrammes de « Ce que je privilégie »
  restent alignés sur leur titre dans une colonne étroite.
- `.highlights` : seuil de colonne porté de 9 rem à 16 rem, pour une disposition 2 × 2 des quatre
  entrées de « Ce que vous pouvez attendre » dans une carte en demi-largeur (mesuré après rebuild :
  2 × 2 en desktop 1440 px, empilé en mobile).
- Aucune taille de typographie globale n'a été réduite et aucun texte n'a été raccourci.

### Choix documentés (aucun contenu inventé)

- Les intitulés de contexte (`// des solutions concrètes pour vos projets`, `// mes projets`, etc.)
  sont conservés : la V3 n'en fournit pas.
- Le panneau technique et les citations incrustées de l'Accueil, de Compétences et de À propos sont
  des éléments graphiques de la référence validée ; leurs textes existants sont conservés.
- CTA de fin de section là où la V3 n'en donne pas : « Parler de votre projet » (libellé V3).
- Contact : « Décrire mon besoin » (CTA V3) est le titre de la carte du formulaire. La page ne
  contient qu'une section, un lien vers elle-même n'aurait rien déclenché ; aucun bouton inactif n'a
  été ajouté.
- Statuts de projet, placeholders explicites (liens à valider, envoi désactivé), sujets du
  formulaire et liens de pied de page : conservés (information déjà présente, aucune donnée validée
  inventée).
- Noms repris de la V3 : « Versutus IA » (au lieu de Versutus-IA) et « Outils & automatisations »
  (au lieu de Outils & Scripts). Technologies des cartes alignées sur les listes V3.
- Les textes anglais, espagnols, italiens et allemands ont été mis à jour pour suivre la structure
  V3 : sans cela, la parité de types (`Translations = typeof fr`) cassait la compilation et les
  autres langues affichaient du contenu périmé. Les valeurs dont le français n'a pas changé ont
  gardé leur traduction existante.
- `meta.title` / `meta.description` et le texte légal du pied de page sont inchangés : la V3 n'en
  fournit pas.

## Vérifications

| Vérification | Commande / moyen | Résultat |
|---|---|---|
| Build | `npm run build` | OK, 79 modules, `dist/` généré |
| Validation projet | `./scripts/validate.sh` | OK (build + `git diff --check`) |
| Espaces / conflits | `git diff --check` | aucune anomalie |
| Parité des clés i18n | `tsc -b` (types `Translations`) | 0 erreur sur les 5 langues |
| Clés utilisées | script d'extraction des `t(...)` du code | 100 clés statiques + 20 gabarits dynamiques résolus, 0 manquante, 0 valeur vide |
| Textes V3 | contrôle des 121 phrases distinctes dans `fr.ts` | 0 manquante |
| Cinq sections | navigateur, `#accueil` → `#contact` | 5 sections, 4 masquées à la fois, titres conformes |
| Navigation par hash et par onglets | clic sur chaque onglet, contrôle `location.hash` | 5/5 : hash et section affichée corrects |
| Débordement horizontal | mesure `documentElement.scrollWidth` vs `innerWidth` et balayage des éléments hors cadre | 0 débordement : 5 sections × desktop 1440 px et mobile 390 px, en FR et DE |
| Images | contrôle `img.complete` / `naturalWidth` | 0 image cassée |
| CTA et boutons | comptage et inspection | aucun bouton inactif ajouté ; boutons d'envoi et liens non validés restent désactivés comme avant |
| Accessibilité élémentaire | structure | libellés de champs reliés (`label` + `for`), textes alternatifs présents, `lang` du document suivi par langue |
| Autres langues | 5 langues × 5 sections sur le build de production | EN, ES, IT, DE : titres, CTA et textes rendus, 0 clé i18n brute visible |
| Sélecteur de langue | bascule à chaud FR → ES sans rechargement | `lang` du document, contenu et persistance mis à jour, hash inchangé |
| Serveurs et processus | contrôle après vérification | serveurs de développement et de prévisualisation arrêtés, aucun navigateur de vérification résiduel |

## Problèmes

1. **Composants conservés mais plus rendus** : `Bars`, `Metrics`, `Timeline` et `MiniTabs` ne sont
   plus utilisés par aucune section. Ils sont laissés en place (la consigne interdit de supprimer un
   fichier sans nécessité démontrée) et signalés dans `CONTEXT.md`.
2. **Visuels non affichés** : `project-domotique.jpg` et `project-securite-reseaux.jpg` restent dans
   `public/images/` et déclarés dans `src/content/visuals.ts`, mais ne sont plus rendus.
3. **Traductions à relire** : les versions EN, ES, IT et DE suivent la structure V3 et s'affichent
   correctement, mais n'ont pas été relues par des locuteurs natifs (déjà listé dans `CONTEXT.md`).
4. **Dette préexistante corrigée au passage** : `CONTEXT.md` et `README.md` décrivaient encore un
   sélecteur de langue non monté et une langue forcée au français, ce qui n'est plus le cas ; la
   mention des clés i18n non rendues (`skills|about|contact.visualLines`, supprimées ici) a été
   retirée.
5. **Non modifié volontairement** : aucun commit n'a été créé (l'arbre contient les 23 fichiers
   modifiés), le déploiement n'a pas été touché, et `.pending-inline` reste dans la feuille de style
   bien que ce marqueur ne soit plus utilisé.

## Verdict

```text
VALIDÉ
```
