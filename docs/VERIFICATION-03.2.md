# Rapport de vérification — Étape 03.2

**Étape :** 03.2 — Mise en conformité visuelle et intégration des cinq sections

**Date :** 2026-09-25

**Commit de départ :** `87bdeab` (docs: add validated design references) — shell de base validé : `0c560b5`

**État initial :** shell fonctionnel (thème sombre, cinq sections en placeholders), six visuels
ajoutés dans `docs/design/` avec `docs/design/README.md` comme référence visuelle principale.
Aucun commit n'a été créé pendant cette étape (conformément à la consigne).

## Référence de vérité appliquée

Ordre respecté : références visuelles validées → décisions documentées (`AGENTS.md`,
`docs/DECISIONS.md`, `docs/design/README.md`) → shell existant → placeholders.

Les références imposant une interface **claire** (fond blanc + grille, typographie noire,
accent vert, liens bleus, cartes à bordure fine, faux chrome de fenêtre), le shell a été mis en
conformité visuelle sur la palette et les composants, **sans** modifier sa base technique :
navigation par onglets in-page, hashes d'URL, onglet actif, bouton `⋯` et son menu de commandes.

## Sections intégrées

- Accueil
- Projets
- Compétences
- À propos
- Contact

## Fichiers modifiés

- `src/App.tsx` — chrome de fenêtre (`⋯`, onglets, `+`, barre d'adresse), en-tête du site, pied de page
- `src/components/TabNav.tsx` — onglets avec pictogrammes (monogramme, icône verte Compétences)
- `src/main.tsx` — ajout de la feuille de styles des composants
- `src/styles/global.css` — palette claire, grille de fond, typographie, focus
- `src/styles/shell.css` — chrome, en-tête, pied de page, menu `⋯` (thème clair), responsive du shell
- `src/styles/sections.css` — mises en page propres aux sections
- `src/sections/{Home,Projects,Skills,About,Contact}Section.tsx` — contenu des cinq sections
- `README.md` — ajout de `src/content/` à la structure

## Fichiers ajoutés

- `src/content/` : `site.ts`, `home.ts`, `projects.ts`, `skills.ts`, `about.ts`, `contact.ts`
- `src/components/` : `Icon.tsx`, `Hero.tsx`, `Card.tsx`, `TechPanel.tsx`, `ProjectCard.tsx`,
  `CallToAction.tsx`, `Metrics.tsx`, `CheckList.tsx`, `Timeline.tsx`, `Bars.tsx`, `Filters.tsx`,
  `MiniTabs.tsx`, `ContactForm.tsx`, `BackToTop.tsx`
- `src/styles/components.css`
- `docs/VERIFICATION-03.2.md` (ce rapport)

## Fichier supprimé

- `src/components/PlaceholderBlock.tsx` (bloc placeholder de l'étape 03.1, remplacé par les
  contenus réels et les marqueurs de valeur provisoire). Aucune autre suppression.

## Vérifications

### Navigation

Vérifié dans Chromium 153 piloté en CDP, sur trois largeurs (1440×900, 1024×800, 375×812) :

- cinq onglets présents, libellés et `href` corrects, un seul onglet actif (`aria-current`) ;
- cycle complet des cinq sections : section affichée, hash d'URL et onglet actif cohérents ;
- lien profond (`/#contact`) et hash inconnu (`#inconnu` → normalisé vers `#accueil`) ;
- bouton `⋯` : ouverture (`aria-expanded`), panneau dans la fenêtre, focus amené dans le menu,
  fermeture par **Échap** (focus rendu au déclencheur), par **clic extérieur** et par re-clic ;
- commandes du menu inchangées (plein écran, impression, zoom, copie de lien) ;
- changement d'onglet depuis une page défilée : retour en haut effectif ;
- bouton « retour en haut » : masqué en haut de page, présent après défilement, fonctionnel.

### Responsive

- Débordement horizontal : **aucun** sur les cinq sections, aux trois largeurs testées.
- Grilles : 4 colonnes (domaines, métriques À propos) → 2 → 1 ; 3 colonnes (projets, tuiles
  Compétences) → 2 → 1 ; formulaires et colonnes latérales en une colonne sur mobile.
- Sur mobile, les onglets passent à la ligne à droite du bouton `⋯` ; la navigation du site passe
  sous l'identité et le bouton « me contacter ».
- Correction apportée après la première passe : bouton `⋯` repositionné sur mobile et bouton
  « retour en haut » rendu masqué au-dessus de 320 px de défilement (il recouvrait un CTA).

### Console

Aucune erreur console, aucun avertissement, aucune exception JavaScript, sur les cinq sections et
les trois largeurs (écoute des événements `Runtime.consoleAPICalled` et `Runtime.exceptionThrown`).

### Build

`npm run build` (`tsc -b && vite build`) : **succès**, 47 modules transformés, aucune erreur de type.
Commande relancée après chaque série de corrections ; le dernier build correspond à l'état livré.

### Comparaison visuelle

Captures plein écran par section (viewport + section entière clippée) aux trois largeurs, comparées
aux cinq références : structure, proportions, hiérarchie typographique, espacements, bordures,
cartes, pastilles, CTA récurrent, pied de page et chrome de fenêtre.

Écarts corrigés après comparaison : échelle du titre de hero, retours à la ligne des titres
(comme dans les références), pastille de statut de Smart BTP ProGest (vert et non ambre), boutons
qui se coupaient sur deux lignes, rangées de trois (métriques, points forts, moyens de contact),
icône verte de l'onglet Compétences.

## Écarts connus

1. **Visuels photo remplacés.** Les références utilisent des photographies (bureaux, baies, mur
   d'outils, écrans). Aucune image n'est fournie dans le projet et aucune n'a été inventée :
   les visuels sont des panneaux techniques sombres (façon terminal, coins verts) reprenant la
   même famille visuelle que le bloc de code du hero. À remplacer si des photos sont fournies.
2. **Chiffres, dates, URL, coordonnées non publiés.** Conformément à `docs/design/README.md`
   (« informations à ne pas déduire automatiquement »), les années d'expérience, nombres de
   projets, pourcentages de maîtrise, périodes de chronologie, adresse email, téléphone,
   localisation et zone géographique sont remplacés par des marqueurs explicites
   (« — », « période à préciser », « adresse à renseigner », « zone géographique à préciser »).
   Les barres de niveau sont affichées vides.
3. **Liens externes inactifs.** Les actions « voir le projet », « GitHub » et les liens de pied de
   page sans URL validée sont présents mais désactivés, avec une note indiquant que les URL
   restent à définir.
4. **Formulaire non connecté.** La structure complète du formulaire est en place (champs, compteur
   de caractères) mais aucun service d'envoi n'existe : le bouton est désactivé et une note
   l'indique explicitement. Aucun envoi n'est simulé.
5. **CV non téléchargeable.** « voir mon CV » (Accueil) et « télécharger mon CV » (À propos) sont
   désactivés : aucun fichier n'est fourni.
6. **Pictogrammes dessinés à la main.** Aucune bibliothèque d'icônes n'a été ajoutée : les
   pictogrammes sont des SVG inline, plus simples que ceux des références. Les technologies sont
   présentées en pastilles texte et non en logos (pas de logos fournis, et consigne de ne pas
   transformer la section en mur de logos).
7. **Polices.** Aucune police web n'est embarquée : la pile système (Inter si installée) approche
   la typographie des références sans l'égaler exactement.
8. **Double navigation.** L'en-tête reprend la navigation de `home.png` (accueil, projets,
   compétences, à propos) en plus des onglets de fenêtre, comme dans la référence. Les deux
   navigations portent des libellés d'accessibilité distincts.
9. **Éléments décoratifs.** Le bouton `+` et la barre d'adresse du chrome sont décoratifs
   (`aria-hidden`) : ils n'exécutent aucune action, pour ne pas simuler une fonctionnalité.
   L'adresse affichée (`site-personnel`) est provisoire.
10. **Contenu provisoire.** Tous les textes proviennent des références et restent provisoires
    (positionnement, descriptions de projets, domaines, valeurs, motifs). Ils sont regroupés dans
    `src/content/` pour être remplacés sans toucher aux composants.
11. **Navigateurs.** Seul Chromium a été utilisé. Aucun test sur Firefox, WebKit, ni sur appareil
    mobile réel. L'impression et la boîte de dialogue système n'ont pas été vérifiées.

## Points restant à finaliser

- Fournir les visuels définitifs (photos) et, si souhaité, les logos des technologies.
- Valider ou remplacer les textes de `src/content/` et renseigner les valeurs provisoires.
- Renseigner les URL (projets, dépôts, profils) et les coordonnées de contact.
- Décider du devenir du formulaire de contact (service d'envoi, `mailto:` ou backend).
- Fournir le CV si les CTA correspondants doivent être actifs.
- Traductions : non implémentées à cette étape (aucun `src/i18n/` ou `src/locales/` créé).

## CONTEXT.md

Non créé. Les décisions et le contexte sont déjà couverts par `AGENTS.md`, `README.md`,
`docs/DECISIONS.md`, `docs/design/README.md` et ce rapport ; un `CONTEXT.md` n'apporterait pas
d'information nouvelle à ce stade.

## Verdict

**Étape 03.2 terminée pour ce qui concerne la structure et la mise en conformité visuelle**, avec
les contenus définitifs listés ci-dessus restant à finaliser. Les cinq sections sont présentes et
exploitables, la navigation existante fonctionne (onglets, hashes, onglet actif, menu `⋯`), aucun
débordement horizontal n'a été constaté, le responsive de base fonctionne, `npm run build` réussit
et le rendu a été vérifié dans un navigateur réel sur trois largeurs.
