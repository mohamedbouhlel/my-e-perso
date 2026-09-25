# Historique

## Initialisation
- Création du squelette React + TypeScript + Vite.
- Initialisation du dépôt Git sur `main`.

## Interface et contenu
- Shell d'interface conforme aux références de design validées (interface claire, faux chrome de
  fenêtre, navigation par onglets in-page, menu de commandes `⋯`).
- Cinq sections : Accueil, Projets, Compétences, À propos, Contact.

## Internationalisation
- i18next + react-i18next ; langues FR / EN / ES / IT / DE, français par défaut et en repli.
- Sélecteur de langue dans l'en-tête, changement sans rechargement, section conservée, langue
  persistée dans `localStorage`.

## Visuels
- Photos découpées dans les captures de référence et servies depuis `public/images/`.
- Incrustations éditoriales des références reprises en HTML traduit.

## Validation avant publication
- `scripts/validate.sh` ajouté (build + `git diff --check` ; aucun lint n'est configuré).
- Rapports de vérification : `docs/VERIFICATION-03.2.md`, `03.3`, `03.4`.
- Validation de bout en bout : navigation, menu `⋯` et ses six commandes, contacts, cinq langues,
  visuels, responsive desktop / tablette / mobile — sans erreur console.
