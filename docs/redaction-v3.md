# Rédaction V3 — site Operius

Statut : **source de vérité documentaire de la rédaction du site**. Le texte exécutable reste
`src/i18n/fr.ts` ; ce document décrit le positionnement, la structure et le texte de référence. Toute
modification de l'un doit être répercutée dans l'autre, ainsi que dans les quatre autres langues.

## Positionnement

**Comprendre le problème avant de choisir la technologie.**

Le site présente une valeur apportée, une méthode de travail et des preuves par les projets, plutôt
qu'une liste de compétences. Il s'adresse à des particuliers et à des professionnels qui ont un
problème technique ou un projet à construire.

## Phrase directrice

> Comprendre le problème avant de choisir la technologie.

Elle sert de citation d'incrustation sur l'Accueil.

## Chaîne de conviction

```text
problème → compréhension → approche → solution → preuve → contact
```

- **Problème** : Accueil (hero), Projets (hero et accroches de cartes), Contact (hero).
- **Compréhension** : Accueil (« Pourquoi cette approche ? », « Du terrain au logiciel »), À propos (« Un profil hybride »).
- **Approche** : cartes projet (« Approche »), À propos (« Ce que je privilégie »), Compétences (niveaux d'intervention).
- **Solution** : cartes projet.
- **Preuve** : page Projets (les quatre projets), renvoi « Voir les projets » depuis Compétences, CTA « Voir les projets » de l'Accueil.
- **Contact** : CTA de toutes les sections, page Contact.

## Structure rédactionnelle des cinq sections

```text
Accueil      hero · 4 cartes de domaines · « Pourquoi cette approche ? » · « Du terrain au logiciel » · « Une conviction » + CTA
Projets      hero · filtres par catégorie · 4 cartes projet (nom, accroche, description, approche, technologies) · conclusion + CTA
Compétences  hero · 4 niveaux d'intervention (titre, sous-titre, texte) · technologies · conclusion + CTA
À propos     hero · « Du terrain au logiciel » · « Un profil hybride » · « Ce que je privilégie » · conclusion + CTA
Contact      hero + « Expliquez simplement » · formulaire · « Ce que vous pouvez attendre » · conclusion
```

## Texte français de référence

### Général

- Titre du document : `Operius`
- Méta-description : `Operius — solutions techniques du terrain au logiciel : réseaux, infrastructure, automatisation, développement et IA.`
- Texte de pied de page : `Des solutions utiles, fiables et maîtrisables.`
- Bouton de l'en-tête : `me contacter`
- Liens de pied de page : `github`, `linkedin`, `contact`

### Accueil

- Intitulé de contexte : `// mon approche`
- Titre : `Pas plus de technologie.` / `La bonne technologie.`
- Introduction : `Je conçois et intègre des solutions techniques qui répondent à des problèmes concrets — du terrain jusqu'au logiciel.`
- Introduction : `Réseaux, sécurité, courant faible, domotique, automatisation, développement et IA : je cherche d'abord à comprendre le besoin, puis à choisir la solution la plus simple qui puisse réellement y répondre.`
- CTA : `Voir les projets` · `Parler de votre besoin`
- Panneau du hero (`mon_approche.sh`) : `comprendre`, `simplifier`, `construire`, `tester`
- Citation : `Comprendre le problème avant de choisir la technologie.` — Operius
- Domaine : `Infrastructure` — `Faire fonctionner les systèmes sur lesquels tout repose.` — `Réseaux, serveurs, Linux, services et infrastructure : construire une base fiable, cohérente et maintenable.`
- Domaine : `Sécurité & courant faible` — `Relier la technique à la réalité du terrain.` — `Détection, sécurité, courant faible et systèmes techniques : intégrer des équipements qui doivent fonctionner dans des conditions réelles.`
- Domaine : `Automatisation & domotique` — `Faire faire aux systèmes ce qui peut l'être automatiquement.` — `Supervision, automatisation et domotique pour réduire les opérations répétitives et améliorer le contrôle.`
- Domaine : `Développement & IA` — `Construire lorsque les outils existants ne répondent pas au besoin.` — `Applications, scripts, outils et solutions IA lorsque le développement apporte une réponse plus adaptée qu'un empilement de logiciels existants.`
- Lien de carte : `en savoir plus` (vers Compétences)
- Bloc : `// pourquoi cette approche ?` — `Parce qu'un problème n'a pas toujours besoin de plus de technologie.` — `Un système peut être techniquement sophistiqué et pourtant difficile à utiliser, à maintenir ou à faire évoluer.` — `Je privilégie une approche différente :` — `Comprendre`, `Simplifier`, `Construire`, `Tester` — `Le résultat recherché n'est pas la solution la plus impressionnante.` + `C'est une solution utile, fiable et maîtrisable.`
- Bloc : `Du terrain au logiciel` — `Mon parcours réunit plusieurs domaines généralement traités séparément :` — `Courant faible`, `Réseaux`, `Systèmes`, `Développement`, `Automatisation`, `IA` — `Cette continuité permet d'aborder un problème à plusieurs niveaux et de comprendre les interactions entre les différentes couches.`
- Bloc : `// une conviction` — `Une bonne solution doit rester compréhensible.` — `Lorsque c'est pertinent, je privilégie les technologies ouvertes et les solutions que l'on peut administrer, diagnostiquer et faire évoluer sans dépendre inutilement d'une boîte noire. Les outils sont un moyen. Le résultat est ce qui compte.` — CTA `Parler de votre projet`

### Projets

- Intitulé de contexte : `// mes projets`
- Titre : `Des problèmes concrets.` / `Des solutions construites pour y répondre.`
- Introduction : `Les projets présentés ici ne sont pas une collection de technologies.`
- Introduction : `Ils montrent une manière de travailler : partir d'un besoin, comprendre les contraintes, construire une solution et vérifier qu'elle fonctionne réellement.`
- Filtres : `Tous`, `Infrastructure`, `IA & automatisation`, `Développement`
- Libellés de carte : `Approche`, `Technologies`, `voir le projet`, `GitHub`
- Note sous les cartes : `Les liens vers les projets et les dépôts seront activés lorsque les URL seront validées.`
- Smart BTP ProGest — `Simplifier la gestion sans construire une usine à gaz.` — `Les artisans et petites entreprises ont besoin d'outils adaptés à leur activité, pas nécessairement de plateformes généralistes surchargées de fonctionnalités. Smart BTP ProGest explore une approche centrée sur le projet, le planning, les tâches, les documents et le suivi.` — Approche : `Construire uniquement les fonctions utiles au quotidien et conserver une architecture suffisamment simple pour évoluer.` — Technologies : `FastAPI`, `React`, `TypeScript`, `PostgreSQL`, `Docker`
- Versutus IA — `Comprendre l'IA plutôt que simplement l'utiliser.` — `Versutus IA explore une infrastructure d'IA locale capable de réunir modèles, API, RAG, mémoire et outils. L'objectif est de maîtriser la chaîne complète : installation, exécution, intégration, mesure et diagnostic.` — Approche : `Privilégier l'expérimentation reproductible et la compréhension du fonctionnement plutôt que l'utilisation d'une solution opaque.` — Technologies : `Linux`, `Docker`, `llama.cpp`, `Python`, `RAG`
- Cockpit Servers — `Une infrastructure n'est fiable que lorsque ses composants fonctionnent ensemble.` — `DNS, messagerie, certificats, reverse proxy, Docker, réseau et services web doivent former un système cohérent.` — Approche : `Administrer une infrastructure ne consiste pas simplement à installer des logiciels, mais à comprendre leurs interactions et leurs dépendances.` — Technologies : `Debian`, `Postfix`, `Nginx`, `Monitoring`
- Outils & automatisations — `Éliminer les opérations inutiles.` — `Scripts, outils d'administration et automatisations permettent de réduire les tâches répétitives et de rendre certaines procédures plus fiables.` — Approche : `L'automatisation n'est pas une fin en soi.` — Mise en avant : `Si le remède est plus complexe que le problème, il faut probablement revoir le remède.` — Technologies : `Bash`, `Python`, `Docker`, `Linux`
- Conclusion : `// ce que ces projets ont en commun` — `Analyser. Simplifier. Construire. Tester.` — `C'est cette méthode, plus que les technologies utilisées, qui constitue le fil conducteur.` — CTA `Parler de votre projet`

### Compétences

- Intitulé de contexte : `// mes compétences`
- Titre : `Comprendre plusieurs couches` / `d'un même problème.`
- Introduction : `Une compétence technique n'a de valeur que lorsqu'elle permet de résoudre quelque chose.`
- Introduction : `Mon profil couvre plusieurs niveaux, du matériel et des installations jusqu'au logiciel et à l'automatisation.`
- Citation : `C'est une solution utile, fiable et maîtrisable.` — Operius
- Niveau : `Terrain` — `Courant faible · Sécurité · Détection · Domotique` — `Une expérience directement liée aux installations techniques et à leurs contraintes réelles. Le système doit fonctionner sur le terrain, être exploitable et pouvoir être diagnostiqué.`
- Niveau : `Infrastructure` — `Réseaux · Linux · Serveurs · Docker` — `Concevoir, administrer et diagnostiquer les systèmes qui font fonctionner les services. L'objectif n'est pas d'accumuler des composants, mais de construire une infrastructure cohérente avec son usage.`
- Niveau : `Développement` — `Applications · Scripts · Automatisation` — `Développer lorsqu'un besoin ne peut pas être correctement couvert par les outils existants. Le code est un moyen de supprimer une limitation, pas une finalité.`
- Niveau : `IA` — `Modèles locaux · RAG · Intégration · Automatisation` — `Explorer les possibilités de l'IA en conservant la maîtrise de l'environnement technique. Comprendre ce qui se passe derrière l'interface fait partie du travail.`
- Technologies : `Technologies` — `Les outils changent. Les principes restent.` — `Linux`, `Docker`, `Python`, `React`, `TypeScript`, `PostgreSQL`, `Git`, `llama.cpp` — `Cette liste indique des technologies réellement utilisées dans différents projets. Elle ne constitue pas une promesse d'utiliser chacune d'elles pour chaque besoin.` — lien `Voir les projets`
- Conclusion : `// ce qui compte` — `Comprendre le problème. Choisir le bon niveau de technologie. Construire quelque chose de maintenable.` — CTA `Parler de votre projet`

### À propos

- Intitulé de contexte : `// à propos`
- Titre : `Un parcours construit` / `entre le terrain et le numérique.`
- Introduction : `Mon parcours n'a pas suivi une seule spécialité.`
- Introduction : `Il s'est construit progressivement autour d'un même besoin : comprendre comment les systèmes fonctionnent et comment les faire fonctionner ensemble.`
- CTA du hero : `Parler de votre projet`
- Citation : `Une bonne solution doit rester compréhensible.` — Operius
- Bloc `// parcours` — `Du terrain au logiciel` :
  - `Le courant faible m'a appris une chose essentielle :` + `une solution doit fonctionner dans le monde réel.`
  - `Les réseaux et les systèmes ont ajouté une autre dimension :` + `les composants doivent communiquer et rester administrables.`
  - `Le développement a apporté un autre outil :` + `lorsqu'il manque quelque chose, on peut le construire.`
  - `L'automatisation et l'IA ouvrent aujourd'hui une nouvelle possibilité :` + `faire davantage sans ajouter nécessairement davantage de complexité.`
- Bloc : `Un profil hybride` — `Je peux regarder un même problème depuis plusieurs niveaux :` — `Installation`, `Réseau`, `Système`, `Logiciel`, `Automatisation` — `Cela ne signifie pas qu'il faut toujours intervenir sur toutes ces couches.` — `Cela signifie qu'il est possible de comprendre où se situe réellement le problème avant de choisir comment le traiter.`
- Bloc : `Ce que je privilégie` — `La simplicité utile.` + `Une solution n'est pas meilleure parce qu'elle possède davantage de fonctionnalités.` — `La maîtrise.` + `Comprendre comment fonctionne un système facilite son exploitation et son évolution.` — `La proportion.` + `Une petite difficulté ne justifie pas nécessairement une grosse architecture.` — `L'ouverture.` + `Lorsque c'est pertinent, les technologies ouvertes permettent de limiter certaines dépendances et de conserver davantage de contrôle.`
- Conclusion : `// conclusion` — `Construire des solutions que l'on peut encore comprendre demain.` — `C'est probablement le meilleur critère pour juger une solution technique. Pas son nombre de fonctionnalités. Pas la nouveauté de sa technologie. Sa capacité à rester utile, fiable et maîtrisable dans le temps.` — CTA `Parler de votre projet`

### Contact

- Intitulé de contexte : `// contact`
- Titre : `Vous avez un problème technique ?` / `Commençons par le comprendre.`
- Introduction : `Vous n'avez pas besoin de connaître la solution avant de prendre contact.`
- Liste : `Expliquez simplement :` — `ce qui ne fonctionne pas`, `ce que vous aimeriez améliorer`, `ce que vous souhaitez construire`, `ou simplement ce que vous cherchez à comprendre.`
- Formulaire : titre `Décrire mon besoin` — champs `Votre nom`, `Votre adresse email`, `Sujet`, `Décrivez votre besoin` — placeholder `Quelques lignes suffisent pour commencer.` — sujets `Terrain / courant faible`, `Infrastructure / réseaux`, `Automatisation & domotique`, `Développement & IA`, `Autre` — bouton `Envoyer le message`
- Encart : `Envoi désactivé : aucun service d'envoi n'est connecté pour l'instant. Le formulaire est prêt à être relié.`
- Bloc : `Ce que vous pouvez attendre` — `Pas de solution plaquée.` + `On part du contexte réel et de l'existant.` — `Pas de complexité gratuite.` + `Chaque composant doit avoir une raison d'être.` — `Des choix expliqués.` + `Une solution technique doit pouvoir être comprise et justifiée.` — `Une réponse proportionnée.` + `Le bon niveau de technologie dépend du problème, pas l'inverse.`
- Conclusion : `// conclusion` — `Le premier travail consiste à comprendre le besoin.` — `Il n'est pas nécessaire d'avoir déjà défini précisément la solution.` — `Une idée, un problème, un projet ?`

## Principes de rédaction

- Français naturel, ton professionnel, phrases courtes.
- Vocabulaire technique concret ; la méthode avant les outils.
- La preuve passe par les projets, jamais par des affirmations sur soi.
- Vouvoiement du lecteur ; première personne pour l'auteur du site.
- Les intitulés de contexte (`// …`) restent des repères courts, jamais des slogans.
- Les citations d'incrustation reprennent une phrase de la V3, différente d'une page à l'autre.

## Interdits rédactionnels

- Aucun chiffre non validé (années d'expérience, niveaux, périodes, volumes, zone géographique).
- Aucun client, résultat, certification ou réalisation inventé.
- Aucune formulation commerciale générique, aucun superlatif ni promesse invérifiable.
- Aucun nom de projet ou de technologie traduit.
- Aucun tutoiement.
- Aucun bloc rempli avec du contenu de remplissage : en cas d'information manquante, un emplacement
  explicite ou aucune information.
