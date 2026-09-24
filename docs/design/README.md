# Références de design — site personnel

## Statut

Ces captures constituent la **référence visuelle principale** pour l'intégration de l'étape 03.2.

Le shell React existant (`0c560b5`) reste la base technique. Toute modification doit viser la fidélité aux références sans réintroduire une architecture plus complexe.

## Références canoniques

| Fichier | Section | Rôle |
|---|---|---|
| `home.png` | Accueil | Référence principale |
| `projects.png` | Projets | Référence principale |
| `skills.png` | Compétences | Référence principale |
| `about.png` | À propos | Référence principale |
| `contact.png` | Contact | Référence principale |

`home-alternate-browser-frame.png` est conservée comme référence historique/complémentaire. Elle montre un cadre de navigateur réel autour du site et ne doit pas être reproduite dans l'interface du site.

## Principes visuels observés

- Interface claire, fond blanc et grille discrète en arrière-plan.
- Esthétique technique, professionnelle et minimaliste.
- Typographie noire fortement hiérarchisée avec grands titres.
- Accent vert vif pour les éléments actifs, le logo, certains indicateurs et accents.
- Bleu pour une grande partie des liens, pictogrammes et éléments secondaires.
- Cartes à bordure fine, angles légèrement arrondis et beaucoup d'espace blanc.
- Photos réalistes associées à des blocs techniques/code.
- Faux environnement de fenêtre/navigateur intégré au design : bouton `⋯`, onglets supérieurs et navigation interne du site.
- Les onglets supérieurs sont des éléments de l'interface du site, pas les onglets du navigateur réel.
- Les cinq sections utilisent une structure de page longue avec hero, blocs de contenu, CTA et footer.

## Architecture visuelle commune

```text
Window chrome visuel
├── bouton `⋯`
├── onglets : Accueil / Projets / Compétences / À propos / Contact
└── bouton `+`

En-tête du site
├── logo / nom
├── navigation interne
└── bouton de contact

Page
├── contexte / eyebrow
├── hero texte + visuel
├── contenu spécifique à la section
├── CTA récurrent
└── footer
```

## Composants visuels à prévoir

Seulement lorsqu'ils sont nécessaires au contenu réel :

- `Hero`
- `Section`
- `Card`
- `Badge`
- `Button`
- `Metric`
- `Timeline`
- `TechnologyList`
- `ProjectCard`
- `ContactForm`
- `CallToAction`

Pas d'architecture React supplémentaire tant qu'un besoin concret ne le justifie pas.

## Contenu déductible des références

Les captures permettent d'établir la structure et le positionnement général : profil hybride technicien / intégrateur / développeur, avec infrastructure, domotique, réseaux, sécurité, développement, automatisation, support et conseil.

Motifs récurrents :

- hero avec titre court et fort ;
- description courte ;
- CTA ;
- visuel principal ;
- cartes et métriques ;
- blocs techniques/code ;
- CTA final récurrent ;
- footer.

## Informations à ne pas déduire automatiquement

Les captures seules ne permettent pas de figer :

- les textes définitifs ;
- les chiffres d'expérience ou de projets ;
- les URLs ;
- les coordonnées ;
- les technologies réellement publiées ;
- les données de projets ;
- le comportement mobile exact ;
- les traductions ;
- les animations ;
- les fonctionnalités du menu `⋯`.

Ces éléments doivent être définis séparément avant leur implémentation.

## Règle pour Codex

Avant toute modification visuelle importante, lire ce fichier et les cinq références canoniques. Ne pas inventer les éléments absents des références ou des décisions du projet. En cas d'information manquante, laisser un emplacement explicite plutôt que fabriquer du contenu.
