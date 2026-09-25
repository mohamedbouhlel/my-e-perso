/**
 * Source de vérité des textes (français).
 * Les autres langues doivent respecter exactement cette structure :
 * `const en: Translations = { ... }` échoue à la compilation en cas d'écart.
 *
 * Rédaction V3 : le discours part du problème et de son contexte avant la technologie.
 * Aucun chiffre, client, résultat ou certification n'est affirmé sans donnée validée.
 */
const fr = {
  meta: {
    title: 'Operius',
    description:
      'Operius — solutions techniques du terrain au logiciel : réseaux, infrastructure, automatisation, développement et IA.',
  },

  a11y: {
    skipToContent: 'Aller au contenu',
    sectionNav: 'Sections du site',
    headerNav: 'Navigation du site',
    footerNav: 'Liens de pied de page',
    backToTop: 'Revenir en haut de la page',
    languageGroup: 'Choix de la langue',
  },

  /** Menu de commandes de fenêtre (bouton ⋯). */
  window: {
    trigger: 'Commandes de fenêtre',
    groups: {
      window: 'Fenêtre',
      display: 'Affichage',
      share: 'Partage',
    },
    items: {
      fullscreen: 'Plein écran',
      exitFullscreen: 'Quitter le plein écran',
      print: 'Imprimer la page',
      zoom: 'Zoom',
      zoomOut: 'Zoom arrière',
      zoomIn: 'Zoom avant',
      zoomReset: 'Taille réelle',
      copyLink: 'Copier le lien',
      unavailable: 'indisponible',
    },
    status: {
      fullscreenRefused: 'Plein écran refusé par le navigateur.',
      linkCopied: 'Lien de la page copié.',
      copyFailed: 'Copie impossible : autorisation refusée.',
    },
  },

  sections: {
    accueil: 'Accueil',
    projets: 'Projets',
    competences: 'Compétences',
    'a-propos': 'À propos',
    contact: 'Contact',
  },

  headerNav: {
    accueil: 'accueil',
    projets: 'projets',
    competences: 'compétences',
    'a-propos': 'à propos',
  },

  footer: {
    legal: 'Des solutions utiles, fiables et maîtrisables.',
    links: {
      github: 'github',
      linkedin: 'linkedin',
      contact: 'contact',
    },
  },

  common: {
    contactCta: 'me contacter',
    linkPending: 'Lien à définir',
    all: 'Tous',
    copy: 'copier',
  },

  /** Textes alternatifs des visuels photo (voir `src/content/visuals.ts`). */
  visuals: {
    alt: {
      projectsHero: 'Bureau technique : écrans de code, plante et tasse',
      skillsHero: 'Bureau technique : deux écrans de code, affiche de méthode et tasse',
      aboutHero: 'Bureau avec ordinateur portable, plante, affiche et tasse',
      aboutWorkshop: 'Atelier : panneau d’outils, ouvrages techniques, écran de notes et tasse',
      contactHero: 'Espace de travail : ordinateur portable, tasse et carnet de notes',
      projectCockpitServers: 'Baies de serveurs supervisées',
    },
  },

  home: {
    eyebrow: '// mon approche',
    title: ['Pas plus de technologie.', 'La bonne technologie.'],
    lead: [
      "Je conçois et intègre des solutions techniques qui répondent à des problèmes concrets — du terrain jusqu'au logiciel.",
      "Réseaux, sécurité, courant faible, domotique, automatisation, développement et IA : je cherche d'abord à comprendre le besoin, puis à choisir la solution la plus simple qui puisse réellement y répondre.",
    ],
    primaryCta: 'Voir les projets',
    secondaryCta: 'Parler de votre besoin',
    /** Méthode affichée dans le panneau du hero : les quatre étapes de la rédaction V3. */
    visualLines: ['comprendre', 'simplifier', 'construire', 'tester'],
    quote: 'Comprendre le problème avant de choisir la technologie.',
    domains: {
      infrastructure: {
        title: 'Infrastructure',
        hook: 'Faire fonctionner les systèmes sur lesquels tout repose.',
        text: 'Réseaux, serveurs, Linux, services et infrastructure : construire une base fiable, cohérente et maintenable.',
      },
      securite: {
        title: 'Sécurité & courant faible',
        hook: 'Relier la technique à la réalité du terrain.',
        text: 'Détection, sécurité, courant faible et systèmes techniques : intégrer des équipements qui doivent fonctionner dans des conditions réelles.',
      },
      automatisation: {
        title: 'Automatisation & domotique',
        hook: "Faire faire aux systèmes ce qui peut l'être automatiquement.",
        text: 'Supervision, automatisation et domotique pour réduire les opérations répétitives et améliorer le contrôle.',
      },
      developpement: {
        title: 'Développement & IA',
        hook: "Construire lorsque les outils existants ne répondent pas au besoin.",
        text: "Applications, scripts, outils et solutions IA lorsque le développement apporte une réponse plus adaptée qu'un empilement de logiciels existants.",
      },
    },
    domainLink: 'en savoir plus',
    approach: {
      eyebrow: '// pourquoi cette approche ?',
      title: "Parce qu'un problème n'a pas toujours besoin de plus de technologie.",
      lead: "Un système peut être techniquement sophistiqué et pourtant difficile à utiliser, à maintenir ou à faire évoluer.",
      stepsLead: 'Je privilégie une approche différente :',
      steps: ['Comprendre', 'Simplifier', 'Construire', 'Tester'],
      closingLead: "Le résultat recherché n'est pas la solution la plus impressionnante.",
      closing: "C'est une solution utile, fiable et maîtrisable.",
    },
    journey: {
      title: 'Du terrain au logiciel',
      lead: 'Mon parcours réunit plusieurs domaines généralement traités séparément :',
      steps: ['Courant faible', 'Réseaux', 'Systèmes', 'Développement', 'Automatisation', 'IA'],
      closing:
        "Cette continuité permet d'aborder un problème à plusieurs niveaux et de comprendre les interactions entre les différentes couches.",
    },
    conviction: {
      eyebrow: '// une conviction',
      title: 'Une bonne solution doit rester compréhensible.',
      text: "Lorsque c'est pertinent, je privilégie les technologies ouvertes et les solutions que l'on peut administrer, diagnostiquer et faire évoluer sans dépendre inutilement d'une boîte noire. Les outils sont un moyen. Le résultat est ce qui compte.",
      action: 'Parler de votre projet',
    },
  },

  projects: {
    eyebrow: '// mes projets',
    title: ['Des problèmes concrets.', 'Des solutions construites pour y répondre.'],
    lead: [
      "Les projets présentés ici ne sont pas une collection de technologies.",
      "Ils montrent une manière de travailler : partir d'un besoin, comprendre les contraintes, construire une solution et vérifier qu'elle fonctionne réellement.",
    ],
    heroVisualLines: ['# idées', 'conception', 'développement', 'déploiement', 'maintenance'],
    filtersLabel: 'Filtrer les projets par catégorie',
    linkLabel: 'voir le projet',
    repositoryLabel: 'GitHub',
    approachLabel: 'Approche',
    technologiesLabel: 'Technologies',
    pendingNote:
      'Les liens vers les projets et les dépôts seront activés lorsque les URL seront validées.',
    empty: "Aucun projet dans cette catégorie pour l'instant.",
    categories: {
      infrastructure: 'Infrastructure',
      ia: 'IA & automatisation',
      developpement: 'Développement',
    },
    items: {
      smartBtpProgest: {
        status: 'En développement',
        hook: 'Simplifier la gestion sans construire une usine à gaz.',
        description:
          "Les artisans et petites entreprises ont besoin d'outils adaptés à leur activité, pas nécessairement de plateformes généralistes surchargées de fonctionnalités. Smart BTP ProGest explore une approche centrée sur le projet, le planning, les tâches, les documents et le suivi.",
        approach:
          "Construire uniquement les fonctions utiles au quotidien et conserver une architecture suffisamment simple pour évoluer.",
        remark: '',
        visualLines: [
          '# gestion de projets BTP',
          '→ planning',
          '→ suivi de chantier',
          '→ budget',
          '→ collaboration',
        ],
      },
      versutusIa: {
        status: 'En production',
        hook: "Comprendre l'IA plutôt que simplement l'utiliser.",
        description:
          "Versutus IA explore une infrastructure d'IA locale capable de réunir modèles, API, RAG, mémoire et outils. L'objectif est de maîtriser la chaîne complète : installation, exécution, intégration, mesure et diagnostic.",
        approach:
          "Privilégier l'expérimentation reproductible et la compréhension du fonctionnement plutôt que l'utilisation d'une solution opaque.",
        remark: '',
        visualLines: [
          '# IA locale · privée · utile',
          '→ changer un modèle',
          '→ interroger des documents',
          '→ automatiser des tâches',
          '→ garder le contrôle',
        ],
      },
      cockpitServers: {
        status: 'En production',
        hook: "Une infrastructure n'est fiable que lorsque ses composants fonctionnent ensemble.",
        description:
          'DNS, messagerie, certificats, reverse proxy, Docker, réseau et services web doivent former un système cohérent.',
        // Formulation descriptive reprise du texte source : la méthode déjà énoncée dans sa phrase suivante.
        approach:
          "Administrer une infrastructure ne consiste pas simplement à installer des logiciels, mais à comprendre leurs interactions et leurs dépendances.",
        remark: '',
        visualLines: [
          '# services & supervision',
          '→ mail',
          '→ dns',
          '→ reverse proxy',
          '→ sauvegardes',
        ],
      },
      outilsAutomatisations: {
        status: 'En cours',
        hook: 'Éliminer les opérations inutiles.',
        description:
          "Scripts, outils d'administration et automatisations permettent de réduire les tâches répétitives et de rendre certaines procédures plus fiables.",
        // Formulation descriptive reprise du texte source : la limite déjà énoncée dans sa phrase suivante.
        approach: "L'automatisation n'est pas une fin en soi.",
        remark:
          'Si le remède est plus complexe que le problème, il faut probablement revoir le remède.',
        visualLines: [
          '# automatisation',
          '→ sauvegardes',
          '→ scripts',
          '→ déploiement',
          '→ documentation',
        ],
      },
    },
    cta: {
      eyebrow: '// ce que ces projets ont en commun',
      title: 'Analyser. Simplifier. Construire. Tester.',
      text: "C'est cette méthode, plus que les technologies utilisées, qui constitue le fil conducteur.",
      action: 'Parler de votre projet',
    },
  },

  skills: {
    eyebrow: '// mes compétences',
    title: ['Comprendre plusieurs couches', "d'un même problème."],
    lead: [
      "Une compétence technique n'a de valeur que lorsqu'elle permet de résoudre quelque chose.",
      "Mon profil couvre plusieurs niveaux, du matériel et des installations jusqu'au logiciel et à l'automatisation.",
    ],
    quote: "C'est une solution utile, fiable et maîtrisable.",
    domains: {
      terrain: {
        title: 'Terrain',
        subtitle: 'Courant faible · Sécurité · Détection · Domotique',
        text: "Une expérience directement liée aux installations techniques et à leurs contraintes réelles. Le système doit fonctionner sur le terrain, être exploitable et pouvoir être diagnostiqué.",
      },
      infrastructure: {
        title: 'Infrastructure',
        subtitle: 'Réseaux · Linux · Serveurs · Docker',
        text: "Concevoir, administrer et diagnostiquer les systèmes qui font fonctionner les services. L'objectif n'est pas d'accumuler des composants, mais de construire une infrastructure cohérente avec son usage.",
      },
      developpement: {
        title: 'Développement',
        subtitle: 'Applications · Scripts · Automatisation',
        text: "Développer lorsqu'un besoin ne peut pas être correctement couvert par les outils existants. Le code est un moyen de supprimer une limitation, pas une finalité.",
      },
      ia: {
        title: 'IA',
        subtitle: 'Modèles locaux · RAG · Intégration · Automatisation',
        text: "Explorer les possibilités de l'IA en conservant la maîtrise de l'environnement technique. Comprendre ce qui se passe derrière l'interface fait partie du travail.",
      },
    },
    technologies: {
      title: 'Technologies',
      subtitle: 'Les outils changent. Les principes restent.',
      note: "Cette liste indique des technologies réellement utilisées dans différents projets. Elle ne constitue pas une promesse d'utiliser chacune d'elles pour chaque besoin.",
    },
    /** Renvoi vers la preuve : les technologies listées ci-dessus sont utilisées dans les projets. */
    projectsLink: 'Voir les projets',
    cta: {
      eyebrow: '// ce qui compte',
      title:
        'Comprendre le problème. Choisir le bon niveau de technologie. Construire quelque chose de maintenable.',
      action: 'Parler de votre projet',
    },
  },

  about: {
    eyebrow: '// à propos',
    title: ['Un parcours construit', 'entre le terrain et le numérique.'],
    lead: [
      "Mon parcours n'a pas suivi une seule spécialité.",
      "Il s'est construit progressivement autour d'un même besoin : comprendre comment les systèmes fonctionnent et comment les faire fonctionner ensemble.",
    ],
    primaryCta: 'Parler de votre projet',
    quote: 'Une bonne solution doit rester compréhensible.',
    journey: {
      eyebrow: '// parcours',
      title: 'Du terrain au logiciel',
      intros: [
        "Le courant faible m'a appris une chose essentielle :",
        'Les réseaux et les systèmes ont ajouté une autre dimension :',
        'Le développement a apporté un autre outil :',
        "L'automatisation et l'IA ouvrent aujourd'hui une nouvelle possibilité :",
      ],
      lessons: [
        'une solution doit fonctionner dans le monde réel.',
        'les composants doivent communiquer et rester administrables.',
        "lorsqu'il manque quelque chose, on peut le construire.",
        'faire davantage sans ajouter nécessairement davantage de complexité.',
      ],
    },
    profile: {
      title: 'Un profil hybride',
      lead: 'Je peux regarder un même problème depuis plusieurs niveaux :',
      layers: ['Installation', 'Réseau', 'Système', 'Logiciel', 'Automatisation'],
      paragraphs: [
        "Cela ne signifie pas qu'il faut toujours intervenir sur toutes ces couches.",
        "Cela signifie qu'il est possible de comprendre où se situe réellement le problème avant de choisir comment le traiter.",
      ],
    },
    principles: {
      title: 'Ce que je privilégie',
      items: {
        simplicity: {
          title: 'La simplicité utile.',
          text: "Une solution n'est pas meilleure parce qu'elle possède davantage de fonctionnalités.",
        },
        mastery: {
          title: 'La maîtrise.',
          text: "Comprendre comment fonctionne un système facilite son exploitation et son évolution.",
        },
        proportion: {
          title: 'La proportion.',
          text: 'Une petite difficulté ne justifie pas nécessairement une grosse architecture.',
        },
        openness: {
          title: "L'ouverture.",
          text: "Lorsque c'est pertinent, les technologies ouvertes permettent de limiter certaines dépendances et de conserver davantage de contrôle.",
        },
      },
    },
    cta: {
      eyebrow: '// conclusion',
      title: "Construire des solutions que l'on peut encore comprendre demain.",
      text: "C'est probablement le meilleur critère pour juger une solution technique. Pas son nombre de fonctionnalités. Pas la nouveauté de sa technologie. Sa capacité à rester utile, fiable et maîtrisable dans le temps.",
      action: 'Parler de votre projet',
    },
  },

  contact: {
    eyebrow: '// contact',
    title: ['Vous avez un problème technique ?', 'Commençons par le comprendre.'],
    lead: ["Vous n'avez pas besoin de connaître la solution avant de prendre contact."],
    listLead: 'Expliquez simplement :',
    list: [
      'ce qui ne fonctionne pas',
      'ce que vous aimeriez améliorer',
      'ce que vous souhaitez construire',
      'ou simplement ce que vous cherchez à comprendre.',
    ],
    expectations: {
      title: 'Ce que vous pouvez attendre',
      items: {
        noPaste: {
          title: 'Pas de solution plaquée.',
          text: "On part du contexte réel et de l'existant.",
        },
        noFreeComplexity: {
          title: 'Pas de complexité gratuite.',
          text: "Chaque composant doit avoir une raison d'être.",
        },
        explainedChoices: {
          title: 'Des choix expliqués.',
          text: 'Une solution technique doit pouvoir être comprise et justifiée.',
        },
        proportionate: {
          title: 'Une réponse proportionnée.',
          text: 'Le bon niveau de technologie dépend du problème, pas l’inverse.',
        },
      },
    },
    form: {
      title: 'Décrire mon besoin',
      requiredMark: '*',
      fields: {
        name: 'Votre nom',
        email: 'Votre adresse email',
        subject: 'Sujet',
        message: 'Décrivez votre besoin',
      },
      messagePlaceholder: 'Quelques lignes suffisent pour commencer.',
      subjectPlaceholder: 'Choisir un sujet',
      subjects: [
        'Terrain / courant faible',
        'Infrastructure / réseaux',
        'Automatisation & domotique',
        'Développement & IA',
        'Autre',
      ],
      submit: 'Envoyer le message',
      notice:
        "Envoi désactivé : aucun service d'envoi n'est connecté pour l'instant. Le formulaire est prêt à être relié.",
    },
    cta: {
      eyebrow: '// conclusion',
      title: 'Le premier travail consiste à comprendre le besoin.',
      text: "Il n'est pas nécessaire d'avoir déjà défini précisément la solution.",
      note: 'Une idée, un problème, un projet ?',
    },
  },
};

export type Translations = typeof fr;

export default fr;
