import type { Translations } from './fr';

/** Textes anglais. */
const en: Translations = {
  meta: {
    title: 'Site personnel',
    description: 'Personal site — projects, skills and contact.',
  },

  a11y: {
    skipToContent: 'Skip to content',
    sectionNav: 'Site sections',
    headerNav: 'Site navigation',
    footerNav: 'Footer links',
    backToTop: 'Back to top of page',
    languageGroup: 'Language selection',
  },

  window: {
    trigger: 'Window commands',
    groups: {
      window: 'Window',
      display: 'Display',
      share: 'Share',
    },
    items: {
      fullscreen: 'Full screen',
      exitFullscreen: 'Exit full screen',
      print: 'Print page',
      zoom: 'Zoom',
      zoomOut: 'Zoom out',
      zoomIn: 'Zoom in',
      zoomReset: 'Actual size',
      copyLink: 'Copy link',
      unavailable: 'unavailable',
    },
    status: {
      fullscreenRefused: 'Full screen refused by the browser.',
      linkCopied: 'Page link copied.',
      copyFailed: 'Copy failed: permission denied.',
    },
  },

  sections: {
    accueil: 'Home',
    projets: 'Projects',
    competences: 'Skills',
    'a-propos': 'About',
    contact: 'Contact',
  },

  headerNav: {
    accueil: 'home',
    projets: 'projects',
    competences: 'skills',
    'a-propos': 'about',
  },

  footer: {
    tagline: 'Useful tools, not overblown machinery.',
    note: 'All texts and figures in this version are provisional.',
    links: {
      github: 'github',
      linkedin: 'linkedin',
      contact: 'contact',
    },
  },

  common: {
    contactCta: 'contact me',
    pendingValue: '—',
    pendingPeriod: 'period to be specified',
    linkPending: 'Link to be defined',
    documentPending: 'Document to be provided',
    all: 'All',
    overview: 'Overview',
    copy: 'copy',
  },

  visuals: {
    alt: {
      projectsHero: 'Technical workspace: code screens, plant and mug',
      skillsHero: 'Technical desk: two code screens, method poster and mug',
      aboutHero: 'Desk with laptop, plant, poster and mug',
      aboutWorkshop: 'Workshop: tool board, technical books, notes screen and mug',
      contactHero: 'Workspace: laptop, mug and notebook',
      projectCockpitServers: 'Supervised server racks',
      projectDomotique: 'Wall-mounted home automation tablet controlling home equipment',
      projectSecuriteReseaux: 'Video surveillance camera on a facade',
    },
  },

  home: {
    eyebrow: '// concrete solutions for your projects',
    title: ['Technician.', 'Developer.', 'Integrator.'],
    lead: 'I help craftspeople, small businesses and SMEs set up reliable, simple, open-source solutions: networks, home automation, security, fire detection, AI and web applications.',
    primaryCta: 'see my projects',
    secondaryCta: 'contact me',
    visualLines: [
      '# Concrete needs',
      'study how it is used',
      'design solutions',
      'deploy properly',
      'support over time',
      'share knowledge',
      'stay open-source',
    ],
    quote: 'Useful tools, not overblown machinery.',
    domains: {
      infrastructure: {
        title: 'Infrastructure',
        text: 'Networks, fibre, security, servers and monitoring.',
      },
      domotique: {
        title: 'Home automation',
        text: 'Connected solutions for homes and commercial buildings.',
      },
      developpement: {
        title: 'Development',
        text: 'Web applications, automation, AI.',
      },
      support: {
        title: 'Support & Advice',
        text: 'Audit, installation, training, assistance.',
      },
    },
    domainLink: 'learn more',
    profile: {
      eyebrow: '// skills',
      title: 'A versatile profile',
      lead: 'A mix of field work and IT for complete, pragmatic solutions.',
      checks: [
        'Low voltage & networks',
        'Fire detection',
        'Home automation',
        'Linux & servers',
        'Docker & virtualisation',
        'Programming (Python, JS)',
        'Databases',
        'Local AI & RAG',
        'Supervision & monitoring',
        'Open-source',
      ],
      cvCta: 'see my CV',
      tabs: {
        experience: 'experience',
        projects: 'projects',
        tools: 'tools',
      },
      experienceTitle: 'years of experience',
      experienceNote: 'values to be specified (no validated figures)',
      experienceRows: [
        'Networks / Low voltage',
        'Home automation',
        'Development',
        'Linux / Servers',
        'AI & automation',
      ],
      projectsTitle: 'projects in progress and in production',
      toolsTitle: 'technologies & tools',
      toolsMore: 'see all technologies',
    },
    mission: {
      eyebrow: '// my mission',
      title: 'Technology that serves the field',
      text: 'Helping professionals save time, secure their installations and simplify their daily work, with reliable and durable solutions.',
      action: 'let’s discuss your project',
    },
  },

  projects: {
    eyebrow: '// my projects',
    title: ['Concrete projects', 'for real needs.'],
    lead: 'Open-source, pragmatic and documented solutions for craftspeople, small businesses and technical environments.',
    heroVisualLines: ['# ideas', 'design', 'development', 'deployment', 'maintenance'],
    filtersLabel: 'Filter projects by category',
    linkLabel: 'view project',
    repositoryLabel: 'GitHub',
    pendingNote: 'Project and repository links will be enabled once the URLs are validated.',
    empty: 'No project in this category yet.',
    categories: {
      infrastructure: 'Infrastructure',
      ia: 'AI & Automation',
      developpement: 'Development',
      domotique: 'Home automation',
      securite: 'Security',
    },
    items: {
      smartBtpProgest: {
        status: 'In development',
        description:
          'Project management SaaS for construction craftspeople and SMEs: planning, tracking, budget, collaboration.',
        visualLines: [
          '# construction project management',
          '→ planning',
          '→ site tracking',
          '→ budget',
          '→ collaboration',
        ],
      },
      versutusIa: {
        status: 'In production',
        description: 'Local AI platform: LLM, RAG, tools, web interfaces and agents. Open-source.',
        visualLines: [
          '# local · private · useful AI',
          '→ switch model',
          '→ query documents',
          '→ automate tasks',
          '→ stay in control',
        ],
      },
      cockpitServers: {
        status: 'In production',
        description: 'Server infrastructure: mail, DNS, reverse proxy, backups and monitoring.',
        visualLines: [
          '# services & monitoring',
          '→ mail',
          '→ dns',
          '→ reverse proxy',
          '→ backups',
        ],
      },
      domotique: {
        status: 'In production',
        description:
          'Integration of home automation solutions for homes and commercial buildings (KNX, Home Assistant…).',
        visualLines: ['# comfort & energy', '→ lighting', '→ blinds', '→ heating', '→ scenes'],
      },
      outilsScripts: {
        status: 'In progress',
        description: 'Scripts and automation tools to save time every day.',
        visualLines: ['# automation', '→ backups', '→ scripts', '→ deployment', '→ documentation'],
      },
      securiteReseaux: {
        status: 'In production',
        description: 'Networks, video surveillance, fire detection and access control.',
        visualLines: [
          '# network & security',
          '→ video surveillance',
          '→ access control',
          '→ fire detection',
          '→ monitoring',
        ],
      },
    },
    cta: {
      eyebrow: '// a project idea?',
      title: 'Let’s discuss your needs',
      text: 'I support you from the idea to deployment, with simple, reliable solutions suited to your environment.',
      action: 'contact me',
    },
  },

  skills: {
    eyebrow: '// my skills',
    title: ['Skills that serve', 'your projects.'],
    lead: 'A technical and versatile profile to design, deploy and maintain reliable, simple and durable solutions.',
    visualLines: ['# working method', 'plan', 'code', 'test', 'deploy', 'improve'],
    quote: 'Useful tools, not overblown machinery.',
    filtersLabel: 'Filter skills by area',
    empty: 'No item in this area yet.',
    metrics: {
      experience: 'years of experience',
      projects: 'projects delivered',
      passion: 'field & tech passion',
    },
    domains: {
      informatique: 'IT',
      domotique: 'Home automation',
      reseaux: 'Networks & Security',
      developpement: 'Development',
      outils: 'Tools',
      soft: 'Soft skills',
    },
    keySkills: {
      title: 'Core skills',
      subtitle: 'A solid, complementary foundation, field and IT.',
      items: {
        infrastructure: {
          title: 'Infrastructure',
          text: 'Servers, virtualisation, Docker, monitoring.',
        },
        domotique: {
          title: 'Home automation',
          text: 'KNX, Home Assistant, custom integrations.',
        },
        reseaux: {
          title: 'Networks & Security',
          text: 'Networks, firewall, VPN, monitoring, backups.',
        },
        developpement: {
          title: 'Development',
          text: 'Python, Bash, JavaScript, automation, APIs.',
        },
        basesDonnees: {
          title: 'Databases',
          text: 'PostgreSQL, SQL, modelling, backups.',
        },
        support: {
          title: 'Support & Advice',
          text: 'Audit, installation, training, assistance.',
        },
      },
    },
    mastery: {
      title: 'Skill levels',
      subtitle: 'A clear view of my areas of expertise.',
      note: 'Levels to be filled in: no validated figures yet.',
      rows: {
        reseaux: 'Networks / Low voltage',
        linux: 'Linux / Servers',
        domotique: 'Home automation (KNX / HA)',
        securite: 'Security',
        developpement: 'Development (Python / JS)',
        basesDonnees: 'Databases',
        ia: 'AI & Automation',
      },
    },
    technologies: {
      title: 'Technologies & tools',
      subtitle: 'The tools I use every day.',
      groups: {
        systemes: 'systems',
        reseaux: 'networks & security',
        developpement: 'development',
        domotique: 'home automation',
        basesDonnees: 'databases',
        ia: 'ai & automation',
      },
    },
    certifications: {
      title: 'Certifications & training',
      subtitle: 'A continuous learning approach.',
      note: 'Titles and periods to be confirmed before publication.',
      items: {
        linux: { title: 'Linux (Debian)', text: 'Advanced experience' },
        knx: { title: 'KNX', text: 'Training & field projects' },
        securite: { title: 'Network security', text: 'Continuous self-training' },
        python: { title: 'Python', text: 'Professional projects' },
        docker: { title: 'Docker & containers', text: 'Projects and deployments' },
      },
    },
    cta: {
      eyebrow: '// building together',
      title: 'A project? Let’s discuss your needs.',
      text: 'I support you from the idea to production, with suitable and pragmatic solutions.',
      action: 'contact me',
    },
  },

  about: {
    eyebrow: '// about',
    title: ['A journey,', 'a passion,', 'solutions.'],
    lead: 'Low-voltage technician, developer and integrator, I help craftspeople, small businesses and SMEs set up reliable, simple and durable solutions, relying on open-source and field experience.',
    primaryCta: 'contact me',
    cvCta: 'download my CV',
    visualLines: [
      '# common thread',
      'understand the need',
      'design simply',
      'deploy and document',
      'pass it on',
      '# ideas · code · tests · real impact',
    ],
    quote: 'Useful tools, not overblown machinery.',
    metrics: {
      experience: 'years of field & IT experience',
      projects: 'projects delivered (small businesses, SMEs, craftspeople)',
      passion: 'passion & commitment for useful solutions',
      goal: 'goal: a simpler digital world',
    },
    story: {
      eyebrow: '// my story',
      title: 'A versatile path',
      lead: 'I work across networks, security, home automation and development. This variety gives me a global and concrete view of needs, from the field to production.',
      timeline: {
        diploma: {
          title: 'Systems and network management',
          text: 'Training in IT and networks.',
        },
        technician: {
          title: 'Low-voltage technician',
          text: 'Networks, fire safety, access control, door entry systems, home automation.',
        },
        integrator: {
          title: 'Integrator & developer',
          text: 'Custom solutions for craftspeople and SMEs. Automation, scripts, internal tools.',
        },
        personal: {
          title: 'Personal projects & sharing',
          text: 'Versutus-IA, Smart BTP ProGest, home automation and security.',
        },
      },
    },
    values: {
      title: 'My values',
      items: [
        'Simplicity before complexity',
        'Concrete and durable solutions',
        'Open-source and independence',
        'Sharing knowledge',
        'Listening and support',
        'Quality and reliability',
        'Continuous improvement',
      ],
    },
    motivation: {
      title: 'What drives me',
      paragraphs: [
        'Helping professionals save time, secure their installations and simplify their daily work, relying on open and proven technologies.',
        'I believe in a sober, useful and controlled digital world, serving the field.',
      ],
      quote: 'The best solutions are the ones that disappear behind the use.',
    },
    wideVisualLines: [
      '# learn · share · build',
      'linux',
      'networks',
      'home automation',
      'security',
      'python',
      'open source',
    ],
    cta: {
      eyebrow: '// and now?',
      title: 'A project? Let’s talk about it.',
      text: 'Whether for advice, an integration or the development of a custom solution, I am here to listen.',
      action: 'contact me',
    },
  },

  contact: {
    eyebrow: '// contact',
    title: ['Let’s discuss', 'your project.'],
    lead: 'An idea, a need, a question? I am here to talk about your projects and find concrete, simple solutions suited to your environment.',
    highlights: {
      response: { title: 'Quick reply', text: 'delay to be specified' },
      exchange: { title: 'No-commitment exchange', text: '' },
      confidential: { title: 'Confidential and secure', text: '' },
    },
    visualLines: [
      '# design · deploy · simplify',
      'understand the need',
      'propose a clear solution',
      'quote without surprises',
      'deploy and document',
      'stay available',
    ],
    form: {
      title: 'Send me a message',
      subtitle: 'I will reply as soon as possible.',
      requiredMark: '*',
      optionalMark: '(optional)',
      fields: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        subject: 'Subject',
        message: 'Your message',
      },
      subjectPlaceholder: 'Choose a subject',
      subjects: ['Infrastructure', 'Home automation', 'Networks & security', 'Development', 'Other'],
      submit: 'Send message',
      notice:
        'Sending disabled: no sending service is connected yet. The form is ready to be wired up.',
    },
    methods: {
      title: 'Other ways to reach me',
      subtitle: 'Choose the channel that suits you.',
      items: {
        email: { title: 'Email', value: 'address to be filled in' },
        phone: { title: 'Phone', value: 'number to be filled in' },
        location: { title: 'Location', value: 'to be specified' },
      },
    },
    zone: {
      title: 'Service area',
      subtitle: 'On site or remotely.',
      items: ['Geographic area to be specified', 'Remote maintenance', 'Remote projects'],
      badge: 'Local solutions, for a lasting impact.',
    },
    cta: {
      eyebrow: '// a project in mind?',
      title: 'Let’s turn your ideas into concrete solutions.',
      text: 'Whether for advice, an installation, a development or a collaboration, let’s simply talk about it.',
      note: 'See you soon!',
    },
  },
};

export default en;
