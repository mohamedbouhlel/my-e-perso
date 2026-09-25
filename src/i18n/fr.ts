/**
 * Source de vérité des textes (français).
 * Les autres langues doivent respecter exactement cette structure :
 * `const en: Translations = { ... }` échoue à la compilation en cas d'écart.
 */
const fr = {
  meta: {
    title: 'Operius',
    description: 'Site personnel — projets, compétences et contact.',
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
    legal: 'Solutions ouvertes pour un monde plus simple.',
    links: {
      github: 'github',
      linkedin: 'linkedin',
      contact: 'contact',
    },
  },

  common: {
    contactCta: 'me contacter',
    pendingValue: '—',
    pendingPeriod: 'période à préciser',
    linkPending: 'Lien à définir',
    documentPending: 'Document à fournir',
    all: 'Tous',
    overview: "Vue d'ensemble",
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
      projectDomotique: 'Tablette domotique murale pilotant les équipements de la maison',
      projectSecuriteReseaux: 'Caméra de vidéosurveillance sur une façade',
    },
  },

  home: {
    eyebrow: '// des solutions concrètes pour vos projets',
    title: ['Technicien.', 'Développeur.', 'Intégrateur.'],
    lead: "J'accompagne les artisans, TPE et PME dans la mise en place de solutions fiables, simples et open-source : réseaux, domotique, sécurité, détection incendie, IA et applications web.",
    primaryCta: 'voir mes projets',
    secondaryCta: 'me contacter',
    visualLines: [
      '# Des besoins concrets',
      'analyser les usages',
      'concevoir des solutions',
      'déployer proprement',
      'accompagner sur la durée',
      'partager le savoir',
      'rester open-source',
    ],
    quote: 'Des outils utiles, pas des usines à gaz.',
    domains: {
      infrastructure: {
        title: 'Infrastructure',
        text: 'Réseaux, fibre, sécurité, serveurs et supervision.',
      },
      domotique: {
        title: 'Domotique',
        text: "Solutions connectées pour l'habitat et le tertiaire.",
      },
      developpement: {
        title: 'Développement',
        text: 'Applications web, automatisations, IA.',
      },
      support: {
        title: 'Support & Conseil',
        text: 'Audit, installation, formation, assistance.',
      },
    },
    domainLink: 'en savoir plus',
    profile: {
      eyebrow: '// compétences',
      title: 'Un profil polyvalent',
      lead: 'Un mélange terrain et informatique pour des solutions complètes et pragmatiques.',
      checks: [
        'Courant faible & réseaux',
        'Détection incendie',
        'Domotique',
        'Linux & serveurs',
        'Docker & virtualisation',
        'Programmation (Python, JS)',
        'Bases de données',
        'IA locale & RAG',
        'Supervision & monitoring',
        'Open-source',
      ],
      cvCta: 'voir mon CV',
      tabs: {
        experience: 'expérience',
        projects: 'projets',
        tools: 'outils',
      },
      experienceTitle: "années d'expérience",
      experienceNote: 'valeurs à préciser (aucun chiffre validé)',
      experienceRows: [
        'Réseaux / Courant faible',
        'Domotique',
        'Développement',
        'Linux / Serveurs',
        'IA & automatisation',
      ],
      projectsTitle: 'projets en cours et en production',
      toolsTitle: 'technologies & outils',
      toolsMore: 'voir toutes les technologies',
    },
    mission: {
      eyebrow: '// ma mission',
      title: 'Des technologies au service du terrain',
      text: 'Aider les professionnels à gagner du temps, sécuriser leurs installations et simplifier leur quotidien, avec des solutions fiables et durables.',
      action: 'discutons de votre projet',
    },
  },

  projects: {
    eyebrow: '// mes projets',
    title: ['Des projets concrets', 'pour des besoins réels.'],
    lead: 'Des solutions open-source, pragmatiques et documentées pour les artisans, TPE/PME et environnements techniques.',
    heroVisualLines: ['# idées', 'conception', 'développement', 'déploiement', 'maintenance'],
    filtersLabel: 'Filtrer les projets par catégorie',
    linkLabel: 'voir le projet',
    repositoryLabel: 'GitHub',
    pendingNote:
      'Les liens vers les projets et les dépôts seront activés lorsque les URL seront validées.',
    empty: "Aucun projet dans cette catégorie pour l'instant.",
    categories: {
      infrastructure: 'Infrastructure',
      ia: 'IA & Automation',
      developpement: 'Développement',
      domotique: 'Domotique',
      securite: 'Sécurité',
    },
    items: {
      smartBtpProgest: {
        status: 'En développement',
        description:
          'SaaS de gestion de projets pour artisans et PME du BTP : planning, suivi, budget, collaboration.',
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
        description:
          'Plateforme IA locale : LLM, RAG, outils, interfaces web et agents. Open-source.',
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
        description:
          'Infrastructure serveurs : mail, DNS, reverse proxy, sauvegardes et supervision.',
        visualLines: [
          '# services & supervision',
          '→ mail',
          '→ dns',
          '→ reverse proxy',
          '→ sauvegardes',
        ],
      },
      domotique: {
        status: 'En production',
        description:
          "Intégration de solutions domotiques pour l'habitat et le tertiaire (KNX, Home Assistant…).",
        visualLines: ['# confort & énergie', '→ éclairage', '→ volets', '→ chauffage', '→ scénarios'],
      },
      outilsScripts: {
        status: 'En cours',
        description: "Scripts et outils d'automatisation pour gagner du temps au quotidien.",
        visualLines: ['# automatisation', '→ sauvegardes', '→ scripts', '→ déploiement', '→ documentation'],
      },
      securiteReseaux: {
        status: 'En production',
        description: "Réseaux, vidéosurveillance, détection incendie et contrôle d'accès.",
        visualLines: [
          '# réseau & sécurité',
          '→ vidéosurveillance',
          "→ contrôle d'accès",
          '→ détection incendie',
          '→ supervision',
        ],
      },
    },
    cta: {
      eyebrow: '// une idée de projet ?',
      title: 'Discutons de votre besoin',
      text: "Je vous accompagne de l'idée au déploiement, avec des solutions simples, fiables et adaptées à votre environnement.",
      action: 'me contacter',
    },
  },

  skills: {
    eyebrow: '// mes compétences',
    title: ['Des compétences', 'au service de vos', 'projets.'],
    lead: 'Un profil technique et polyvalent pour concevoir, déployer et maintenir des solutions fiables, simples et durables.',
    visualLines: ['# méthode de travail', 'plan', 'code', 'test', 'deploy', 'improve'],
    quote: 'Des outils utiles, pas des usines à gaz.',
    filtersLabel: 'Filtrer les compétences par domaine',
    empty: "Aucun élément dans ce domaine pour l'instant.",
    metrics: {
      experience: "années d'expérience",
      projects: 'projets réalisés',
      passion: 'passion terrain & tech',
    },
    domains: {
      informatique: 'Informatique',
      domotique: 'Domotique',
      reseaux: 'Réseaux & Sécurité',
      developpement: 'Développement',
      outils: 'Outils',
      soft: 'Soft skills',
    },
    keySkills: {
      title: 'Compétences clés',
      subtitle: 'Un socle solide et complémentaire, terrain et informatique.',
      items: {
        infrastructure: {
          title: 'Infrastructure',
          text: 'Serveurs, virtualisation, Docker, supervision.',
        },
        domotique: {
          title: 'Domotique',
          text: 'KNX, Home Assistant, intégrations sur mesure.',
        },
        reseaux: {
          title: 'Réseaux & Sécurité',
          text: 'Réseaux, firewall, VPN, supervision, sauvegardes.',
        },
        developpement: {
          title: 'Développement',
          text: 'Python, Bash, JavaScript, automatisation, APIs.',
        },
        basesDonnees: {
          title: 'Bases de données',
          text: 'PostgreSQL, SQL, modélisation, sauvegardes.',
        },
        support: {
          title: 'Support & Conseil',
          text: 'Audit, installation, formation, assistance.',
        },
      },
    },
    mastery: {
      title: 'Niveaux de maîtrise',
      subtitle: "Une vision claire de mes domaines d'expertise.",
      note: 'Niveaux à renseigner : aucun chiffre validé pour le moment.',
      rows: {
        reseaux: 'Réseaux / Courant faible',
        linux: 'Linux / Serveurs',
        domotique: 'Domotique (KNX / HA)',
        securite: 'Sécurité',
        developpement: 'Développement (Python / JS)',
        basesDonnees: 'Bases de données',
        ia: 'IA & Automatisation',
      },
    },
    technologies: {
      title: 'Technologies & outils',
      subtitle: "Les outils que j'utilise au quotidien.",
      groups: {
        systemes: 'systèmes',
        reseaux: 'réseaux & sécurité',
        developpement: 'développement',
        domotique: 'domotique',
        basesDonnees: 'bases de données',
        ia: 'ia & automatisation',
      },
    },
    certifications: {
      title: 'Certifications & formations',
      subtitle: "Une démarche continue d'apprentissage.",
      note: 'Intitulés et périodes à confirmer avant publication.',
      items: {
        linux: { title: 'Linux (Debian)', text: 'Expérience avancée' },
        knx: { title: 'KNX', text: 'Formation & projets terrain' },
        securite: { title: 'Sécurité réseaux', text: 'Auto-formation continue' },
        python: { title: 'Python', text: 'Projets professionnels' },
        docker: { title: 'Docker & containers', text: 'Projets et déploiements' },
      },
    },
    cta: {
      eyebrow: '// développer ensemble',
      title: 'Un projet ? Discutons de vos besoins.',
      text: "Je vous accompagne de l'idée à la mise en production, avec des solutions adaptées et pragmatiques.",
      action: 'me contacter',
    },
  },

  about: {
    eyebrow: '// à propos',
    title: ['Un parcours,', 'une passion,', 'des solutions.'],
    lead: "Technicien en courant faible, développeur et intégrateur, j'accompagne les artisans, TPE et PME dans la mise en place de solutions fiables, simples et durables, en m'appuyant sur l'open-source et l'expérience terrain.",
    primaryCta: 'me contacter',
    cvCta: 'télécharger mon CV',
    visualLines: [
      '# fil conducteur',
      'comprendre le besoin',
      'concevoir simplement',
      'déployer et documenter',
      'transmettre',
      '# idées · code · tests · impact réel',
    ],
    quote: 'Des outils utiles, pas des usines à gaz.',
    metrics: {
      experience: "années d'expérience terrain & informatique",
      projects: 'projets réalisés (TPE, PME, artisans)',
      passion: 'passion & engagement pour des solutions utiles',
      goal: 'objectif : un numérique plus simple',
    },
    story: {
      eyebrow: '// mon histoire',
      title: 'Un parcours polyvalent',
      lead: "J'évolue dans les domaines des réseaux, de la sécurité, de la domotique et du développement. Cette diversité me permet d'avoir une vision globale et concrète des besoins, du terrain à la mise en production.",
      timeline: {
        diploma: {
          title: 'Gestion de systèmes et réseaux',
          text: 'Formation en informatique et réseaux.',
        },
        technician: {
          title: 'Technicien en courant faible',
          text: "Réseaux, sécurité incendie, contrôle d'accès, visiophonie, domotique.",
        },
        integrator: {
          title: 'Intégrateur & développeur',
          text: 'Solutions sur mesure pour artisans et PME. Automatisation, scripts, outils internes.',
        },
        personal: {
          title: 'Projets personnels & partage',
          text: 'Versutus-IA, Smart BTP ProGest, domotique et sécurité.',
        },
      },
    },
    values: {
      title: 'Mes valeurs',
      items: [
        'Simplicité avant complexité',
        'Solutions concrètes et durables',
        'Open-source et indépendance',
        'Partage des connaissances',
        'Écoute et accompagnement',
        'Qualité et fiabilité',
        'Amélioration continue',
      ],
    },
    motivation: {
      title: 'Ce qui me motive',
      paragraphs: [
        "Aider les professionnels à gagner du temps, sécuriser leurs installations et simplifier leur quotidien, en m'appuyant sur des technologies ouvertes et éprouvées.",
        'Je crois à un numérique sobre, utile et maîtrisé, au service du terrain.',
      ],
      quote: 'Les meilleures solutions sont celles qui disparaissent derrière l’usage.',
    },
    wideVisualLines: [
      '# apprendre · partager · construire',
      'linux',
      'réseaux',
      'domotique',
      'sécurité',
      'python',
      'open source',
    ],
    cta: {
      eyebrow: '// et maintenant ?',
      title: 'Un projet ? Discutons-en.',
      text: "Que ce soit pour un conseil, une intégration ou le développement d'une solution sur mesure, je suis à votre écoute.",
      action: 'me contacter',
    },
  },

  contact: {
    eyebrow: '// contact',
    title: ['Discutons', 'de votre projet.'],
    lead: "Une idée, un besoin, une question ? Je suis à votre écoute pour échanger sur vos projets et trouver ensemble des solutions concrètes, simples et adaptées à votre environnement.",
    highlights: {
      response: { title: 'Réponse rapide', text: 'délai à préciser' },
      exchange: { title: 'Échange sans engagement', text: '' },
      confidential: { title: 'Confidentiel et sécurisé', text: '' },
    },
    visualLines: [
      '# concevoir · déployer · simplifier',
      'comprendre le besoin',
      'proposer une solution claire',
      'chiffrer sans surprise',
      'déployer et documenter',
      'rester disponible',
    ],
    form: {
      title: 'Envoyez-moi un message',
      subtitle: 'Je vous réponds dans les plus brefs délais.',
      requiredMark: '*',
      optionalMark: '(facultatif)',
      fields: {
        name: 'Nom',
        email: 'Email',
        company: 'Entreprise',
        subject: 'Sujet',
        message: 'Votre message',
      },
      subjectPlaceholder: 'Choisir un sujet',
      subjects: ['Infrastructure', 'Domotique', 'Réseaux & sécurité', 'Développement', 'Autre'],
      submit: 'Envoyer le message',
      notice:
        "Envoi désactivé : aucun service d'envoi n'est connecté pour l'instant. Le formulaire est prêt à être relié.",
    },
    methods: {
      title: 'Autres moyens de me contacter',
      subtitle: 'Choisissez le canal qui vous convient.',
      items: {
        email: { title: 'Email', value: 'adresse à renseigner' },
        phone: { title: 'Téléphone', value: 'numéro à renseigner' },
        location: { title: 'Localisation', value: 'à préciser' },
      },
    },
    zone: {
      title: "Zone d'intervention",
      subtitle: 'Sur site ou à distance.',
      items: ['Zone géographique à préciser', 'Télémaintenance', 'Projets à distance'],
      badge: 'Des solutions locales, pour un impact durable.',
    },
    cta: {
      eyebrow: '// un projet en tête ?',
      title: 'Transformons vos idées en solutions concrètes.',
      text: 'Que ce soit pour un conseil, une installation, un développement ou une collaboration, parlons-en simplement.',
      note: 'À très vite !',
    },
  },
};

export type Translations = typeof fr;

export default fr;
