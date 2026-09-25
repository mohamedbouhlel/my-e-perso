# Étape 05.2 — Audit de la V3 rédactionnelle

Date : 26 septembre 2026 · Site personnel « Operius » · **Aucun fichier du site n'a été modifié par cet audit.**

Méthode : lecture des sources de vérité du dépôt (`AGENTS.md`, `README.md`, `CONTEXT.md`,
`docs/DECISIONS.md`), lecture des composants et des textes français réellement utilisés, puis
relevé du **texte réellement rendu** et des métriques du navigateur sur le build de production
(`npm run build` puis `npm run preview`), en desktop 1440 px et en mobile 390 px.

## Contenu

### Ce qui est correctement intégré

| Section | Titre rendu | Blocs et libellés |
|---|---|---|
| Accueil | « Pas plus de technologie. La bonne technologie. » | 2 paragraphes d'introduction ; CTA « Voir les projets » et « Parler de votre besoin » ; 4 cartes de domaines (Infrastructure, Sécurité & courant faible, Automatisation & domotique, Développement & IA) avec accroche et description ; « Pourquoi cette approche ? » ; « Du terrain au logiciel » ; « Une conviction » et CTA « Parler de votre projet » |
| Projets | « Des problèmes concrets. Des solutions construites pour y répondre. » | 2 paragraphes ; filtres Tous / Infrastructure / IA & Automation / Développement ; 4 cartes (Smart BTP ProGest, Versutus IA, Cockpit Servers, Outils & automatisations) avec accroche et description ; conclusion « Analyser. Simplifier. Construire. Tester. » |
| Compétences | « Comprendre plusieurs couches d'un même problème. » | 2 paragraphes ; 4 cartes de niveaux (Terrain, Infrastructure, Développement, IA) avec sous-titre et texte ; carte Technologies (8 technologies + précision de lecture) ; conclusion « Comprendre le problème. Choisir le bon niveau de technologie. Construire quelque chose de maintenable. » |
| À propos | « Un parcours construit entre le terrain et le numérique. » | 2 paragraphes ; « Du terrain au logiciel » (4 leçons) ; « Un profil hybride » (installation → automatisation) ; « Ce que je privilégie » (4 critères) ; conclusion « Construire des solutions que l'on peut encore comprendre demain. » |
| Contact | « Vous avez un problème technique ? Commençons par le comprendre. » | introduction, « Expliquez simplement : » et 4 entrées ; carte « Décrire mon besoin » (Votre nom, Votre adresse email, Sujet, Décrivez votre besoin, placeholder « Quelques lignes suffisent pour commencer. », bouton « Envoyer le message ») ; carte « Ce que vous pouvez attendre » (4 entrées) ; conclusion « Le premier travail consiste à comprendre le besoin. » |

Contrôles de fidélité de la rédaction :

- **121 phrases distinctes de la V3** recherchées dans `src/i18n/fr.ts` : 0 manquante.
- **Aucun chiffre** dans les textes français (les seules valeurs numériques rendues sont le
  compteur technique du formulaire « 0 / 1000 » et l'année du pied de page) ; aucun client, résultat,
  certification ou période affirmé.
- **Aucun tutoiement** ; vouvoiement du lecteur (12 occurrences) et première personne pour l'auteur.
- Aucun superlatif auto-promotionnel : le seul « meilleur » est celui de la V3 (« C'est probablement
  le meilleur critère pour juger une solution technique. »), atténué par « probablement ».
- Vocabulaire technique concret (« boîte noire », « reverse proxy », « supervision », « RAG ») ;
  aucune formule de type « sur mesure », « clé en main », « expertise », « performant ».

### Chaîne de conviction (problème → compréhension → approche → solution → preuve → contact)

Respectée sur l'Accueil dans l'ordre de la V3 (problème → domaines → approche → parcours →
conviction → contact), et sur Projets (problème → solution → méthode → contact). Ruptures
constatées, relevées précisément :

1. **Accueil** : aucun nom de projet n'apparaît sur la page. L'étape « preuve » n'y existe qu'en
   renvoi (CTA « Voir les projets ») ; les 4 cartes de domaines mènent à **Compétences**, pas à
   Projets.
2. **Compétences** : la carte Technologies affirme « des technologies réellement utilisées dans
   différents projets » sans aucun lien vers la page Projets : la preuve annoncée n'est pas
   atteignable depuis cette page.
3. **Projets** : la structure des cartes n'est pas homogène. « Approche » n'existe que sur 2 cartes
   sur 4 (Smart BTP ProGest, Versutus IA) et l'étape « compréhension » n'apparaît sur aucune carte ;
   Cockpit Servers et Outils & automatisations n'ont que l'accroche et la description.
4. **À propos** et **Contact** : aucune référence aux projets ; l'étape « preuve » est absente.
5. Aucune page ne renvoie vers Projets en dehors du CTA du hero d'Accueil et de la navigation du
   shell (onglets, en-tête).

## Problèmes

1. **Libellé mixte français/anglais** : le filtre de Projets affiche « IA & Automation » alors que la
   page Compétences utilise « IA » et « Automatisation ». Seul libellé du site contenant un mot
   anglais, hérité de l'état antérieur à la V3.
2. **Textes antérieurs à la V3 encore exposés** (conservés volontairement, liste exhaustive) :
   intitulé de l'Accueil « // des solutions concrètes pour vos projets » ; panneau technique
   `mon_approche.sh` et ses 7 lignes ; citation « Des outils utiles, pas des usines à gaz. » sur
   trois pages (Accueil, Compétences, À propos) ; panneau `idees/` de Projets et les 5 lignes de
   chaque carte projet ; slogan de pied de page « Solutions ouvertes pour un monde plus simple. » ;
   méta-description « Operius — projets, compétences et contact. » ; libellés de shell
   (« me contacter », « github », « linkedin », « copier », menu de fenêtre).
3. **Données héritées non fournies par la V3** : les statuts de projet (« En développement »,
   « En production », « En cours ») et les technologies des cartes Cockpit Servers (Debian, Postfix,
   Nginx, Monitoring) et Outils & automatisations (Bash, Python, Docker, Linux) viennent de l'état
   antérieur. La V3 ne liste des technologies que pour Smart BTP ProGest et Versutus IA. Rien n'a été
   inventé, mais ces affirmations ne sont pas sourcées par la V3.
4. **Sujets du formulaire incohérents avec les domaines** : le menu « Sujet » propose encore
   « Domotique » et « Réseaux & sécurité », qui ne correspondent plus aux quatre niveaux affichés
   par Compétences (Terrain, Infrastructure, Développement, IA).
5. **Aucun titre de niveau 1** : les cinq pages commencent à `<h2>` (structure d'origine du shell,
   antérieure à la V3). Sur À propos, le bloc « Du terrain au logiciel » n'a pas de titre de niveau 3 :
   son intitulé est un texte de contexte (`// du terrain au logiciel`), alors que les deux autres
   blocs de la page ont un `<h3>`.
6. **Commentaire obsolète** dans `src/content/site.ts` : l'adresse affichée est décrite comme
   « provisoire et volontairement non routable (`.local` est réservé) » alors que la valeur est
   `operius.fr`, domaine réellement servi.
7. **Pas de source de vérité versionnée pour la V3** : le texte de référence n'existe pas comme
   document du dépôt ; `src/i18n/fr.ts` le porte et le rapport 05.1 le décrit. Toute modification
   future devra être arbitrée sans référence stable.
8. **Placeholders restants — intentionnels et annoncés** (aucune fuite accidentelle) : note sous les
   cartes Projets (« Les liens vers les projets et les dépôts seront activés lorsque les URL seront
   validées. »), boutons « voir le projet » et « GitHub » désactivés (`title` « Lien à définir »),
   bouton d'envoi désactivé avec l'encart « Envoi désactivé… », liens de pied de page `github` et
   `linkedin` inertes. Aucun marqueur de développement (« à préciser », « provisoire », « TODO »)
   n'est visible par erreur.
9. **Éléments conservés mais non rendus** : composants `Bars`, `Metrics`, `Timeline`, `MiniTabs` ;
   visuels `project-domotique.jpg`, `project-securite-reseaux.jpg` ; clés `visuals.alt.projectDomotique`
   et `visuals.alt.projectSecuriteReseaux`. Les visuels conservés mais non affichés ne sont pas
   détectés par la mesure de débordement : le DOM des cinq sections est présent sur chaque page
   (les sections inactives sont masquées par `hidden`).

## Corrections nécessaires

Aucune n'a été appliquée : les points 1 à 6 touchent la rédaction ou la structure et relèvent d'un
arbitrage. Le point 7 est documentaire.

1. `src/i18n/fr.ts` → `projects.categories.ia` : « IA & Automation » → « IA & automatisation »
   (correction de langue, sans changement de sens ; les 4 autres langues suivent).
2. `src/i18n/fr.ts` → `contact.form.subjects` : aligner les sujets sur les domaines de Compétences
   (Terrain, Infrastructure, Automatisation & domotique, Développement & IA, Autre) ou conserver une
   liste générique, mais retirer les intitulés qui ne correspondent plus à aucun contenu du site.
   Décision rédactionnelle à prendre avant modification.
3. Textes antérieurs à la V3 (point 2 des problèmes) : décider page par page de les remplacer par une
   formulation V3, de les conserver ou de les retirer. Les lignes du panneau `mon_approche.sh`
   pourraient reprendre la séquence V3 « comprendre → simplifier → construire → tester » ou la chaîne
   « courant faible → … → IA » ; les citations sont répétées trois fois et pourraient être remplacées
   par des extraits distincts de la V3. Rédaction à valider avant application.
4. Projets : confirmer ou retirer les statuts, et confirmer les listes de technologies de Cockpit
   Servers et Outils & automatisations, ou les retirer pour homogénéiser avec la V3.
5. Chaîne de conviction (point 5 de l'audit de conviction) : ajouter un renvoi vers Projets depuis
   Compétences (par exemple sur « Cette liste indique des technologies réellement utilisées dans
   différents projets ») ; envisager une ligne « Approche » sur les deux cartes qui n'en ont pas.
   Ces ajouts sont du contenu : à rédiger et valider.
6. Structure : décider d'introduire un `<h1>` (le titre de la section active) et de donner un titre
   de niveau 3 au bloc « Du terrain au logiciel ». Impacts structure et design à valider.
7. Documentation : corriger le commentaire de `src/content/site.ts` et, si souhaité, versionner la V3
   dans le dépôt (par exemple `docs/redaction-v3.md`) comme source de vérité.
8. Nettoyage : retirer ou réutiliser les composants, visuels et clés i18n listés au point 9 des
   problèmes.

## Vérifications

Toutes exécutées sur le build de production (`npm run build`, puis `npm run preview` sur `dist/`),
en français, desktop 1440 px et mobile 390 px.

| Vérification | Résultat réel |
|---|---|
| `npm run build` | OK — 79 modules transformés, `dist/` généré |
| `./scripts/validate.sh` | OK — build + `git diff --check` (exit 0) |
| Console navigateur et erreurs React | **0** événement (`Runtime.exceptionThrown`, `console.error/warning`, `Log.entryAdded`), sur les cinq sections |
| Cinq sections | 5 présentes ; 4 masquées à la fois ; titres principaux conformes (relevés page par page) |
| Navigation par hash et par onglets | Cibles `#accueil #projets #competences #a-propos #contact` : **tous les liens de la page résolvent vers un élément existant** (0 lien cassé) |
| Débordement horizontal | 0 sur 5 sections × desktop et mobile (`documentElement.scrollWidth` = `innerWidth` = 1440 / 390) |
| Contenu tronqué | 0 élément à débordement masqué (`scrollHeight > clientHeight` ou `scrollWidth > clientWidth`) sur les cinq sections, desktop et mobile |
| Images | 8 visuels affichés, **tous avec texte alternatif**, aucune image cassée |
| Formulaire | 4 champs présents, chacun relié à un `<label for>` ; sélecteur de langue et champs obligatoires conformes ; bouton d'envoi désactivé comme documenté |
| Boutons et liens | Aucun bouton inactif ajouté ; les seuls éléments désactivés sont les emplacements d'URL non validées et l'envoi du formulaire, déjà documentés |
| Textes accessibles | Lien d'évitement « Aller au contenu », `aria-label` sur la navigation, le sélecteur de langue (« Choix de la langue ») et le menu de fenêtre (« Commandes de fenêtre »), croix des onglets en `aria-hidden` |
| Pied de page | Rendu en français, année courante, `github` et `linkedin` inertes avec `title` « Lien à définir », `contact` actif vers la section Contact |
| Registre et répétitions | Aucun tutoiement ; citation « usines à gaz » présente 3 fois ; « comprendre » 10 fois (vocabulaire de la V3, pas une répétition de remplissage) |
| État du dépôt | Aucun fichier modifié par cet audit : 24 fichiers modifiés et 1 rapport non suivi, identiques à la fin de l'étape 05.1 |

## Verdict

L'intégration du contenu V3 est présente, fidèle et fonctionnelle : aucun texte V3 manquant, aucun
chiffre ou engagement non validé ajouté, aucun placeholder de développement exposé par erreur,
design et navigation intacts, aucune erreur de console, aucun débordement ni contenu tronqué en
desktop comme en mobile.

Les points listés dans « Problèmes » et « Corrections nécessaires » sont des arbitrages rédactionnels
et des résidus antérieurs à la V3, pas des défauts d'intégration.

```text
VALIDÉ
```
