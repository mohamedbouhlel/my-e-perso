import type { Translations } from './fr';

/**
 * English texts.
 * Mirrors the structure of `fr.ts` (source of truth) exactly:
 * `const en: Translations = { ... }` fails to compile on any mismatch.
 */
const en: Translations = {
  meta: {
    title: 'Operius',
    description:
      'Operius — technical solutions from the field to software: networks, infrastructure, automation, development and AI.',
  },

  a11y: {
    skipToContent: 'Skip to content',
    sectionNav: 'Site sections',
    headerNav: 'Site navigation',
    footerNav: 'Footer links',
    backToTop: 'Back to top of page',
    languageGroup: 'Language selection',
  },

  /** Window command menu (⋯ button). */
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
    legal: 'Useful, reliable and manageable solutions.',
    links: {
      github: 'github',
      linkedin: 'linkedin',
      contact: 'contact',
    },
  },

  common: {
    contactCta: 'contact me',
    linkPending: 'Link to be defined',
    all: 'All',
    copy: 'copy',
  },

  /** Alt texts for the photo visuals (see `src/content/visuals.ts`). */
  visuals: {
    alt: {
      projectsHero: 'Technical workspace: code screens, plant and mug',
      skillsHero: 'Technical desk: two code screens, method poster and mug',
      aboutHero: 'Desk with laptop, plant, poster and mug',
      aboutWorkshop: 'Workshop: tool board, technical books, notes screen and mug',
      contactHero: 'Workspace: laptop, mug and notebook',
      projectCockpitServers: 'Supervised server racks',
    },
  },

  home: {
    eyebrow: '// my approach',
    title: ['Not more technology.', 'The right technology.'],
    lead: [
      'I design and integrate technical solutions that answer concrete problems — from the field all the way to software.',
      'Networks, security, low voltage, home automation, automation, development and AI: I first seek to understand the need, then choose the simplest solution that can genuinely answer it.',
    ],
    primaryCta: 'See the projects',
    secondaryCta: 'Talk about your needs',
    /** Method shown in the hero panel: the four steps of the V3 copy. */
    visualLines: ['understand', 'simplify', 'build', 'test'],
    quote: 'Understand the problem before choosing the technology.',
    domains: {
      infrastructure: {
        title: 'Infrastructure',
        hook: 'Keep the systems everything else rests on running.',
        text: 'Networks, servers, Linux, services and infrastructure: building a reliable, consistent and maintainable foundation.',
      },
      securite: {
        title: 'Security & low voltage',
        hook: 'Connect the technical work to real-world conditions.',
        text: 'Detection, security, low voltage and technical systems: integrating equipment that must work under real conditions.',
      },
      automatisation: {
        title: 'Automation & home automation',
        hook: 'Let systems do whatever can be done automatically.',
        text: 'Monitoring, automation and home automation to reduce repetitive operations and improve control.',
      },
      developpement: {
        title: 'Development & AI',
        hook: 'Build when existing tools do not answer the need.',
        text: 'Applications, scripts, tools and AI solutions when development provides a better answer than stacking existing software.',
      },
    },
    domainLink: 'learn more',
    approach: {
      eyebrow: '// why this approach?',
      title: 'Because a problem does not always need more technology.',
      lead: 'A system can be technically sophisticated and yet hard to use, maintain or evolve.',
      stepsLead: 'I favour a different approach:',
      steps: ['Understand', 'Simplify', 'Build', 'Test'],
      closingLead: 'The goal is not the most impressive solution.',
      closing: 'It is a useful, reliable and manageable one.',
    },
    journey: {
      title: 'From the field to software',
      lead: 'My background brings together several areas that are usually handled separately:',
      steps: ['Low voltage', 'Networks', 'Systems', 'Development', 'Automation', 'AI'],
      closing:
        'This continuity makes it possible to approach a problem at several levels and to understand how the different layers interact.',
    },
    conviction: {
      eyebrow: '// a conviction',
      title: 'A good solution must remain understandable.',
      text: 'When relevant, I favour open technologies and solutions that can be administered, diagnosed and evolved without needlessly depending on a black box. Tools are a means. The result is what matters.',
      action: 'Talk about your project',
    },
  },

  projects: {
    eyebrow: '// my projects',
    title: ['Concrete problems.', 'Solutions built to answer them.'],
    lead: [
      'The projects presented here are not a collection of technologies.',
      'They show a way of working: start from a need, understand the constraints, build a solution and verify that it truly works.',
    ],
    heroVisualLines: ['# ideas', 'design', 'development', 'deployment', 'maintenance'],
    filtersLabel: 'Filter projects by category',
    linkLabel: 'view project',
    repositoryLabel: 'GitHub',
    approachLabel: 'Approach',
    technologiesLabel: 'Technologies',
    pendingNote:
      'Project and repository links will be enabled once the URLs are validated.',
    empty: 'No project in this category yet.',
    categories: {
      infrastructure: 'Infrastructure',
      ia: 'AI & automation',
      developpement: 'Development',
    },
    items: {
      smartBtpProgest: {
        status: 'In development',
        hook: 'Simplify management without building overblown machinery.',
        description:
          'Craftspeople and small businesses need tools suited to their activity, not necessarily general-purpose platforms overloaded with features. Smart BTP ProGest explores an approach centred on the project, planning, tasks, documents and tracking.',
        approach:
          'Build only the functions that are useful day to day and keep an architecture simple enough to evolve.',
        remark: '',
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
        hook: 'Understand AI rather than simply using it.',
        description:
          'Versutus IA explores a local AI infrastructure able to bring together models, APIs, RAG, memory and tools. The goal is to master the whole chain: installation, execution, integration, measurement and diagnosis.',
        approach:
          'Favour reproducible experimentation and an understanding of how it works rather than the use of an opaque solution.',
        remark: '',
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
        hook: 'An infrastructure is only reliable when its components work together.',
        description:
          'DNS, mail, certificates, reverse proxy, Docker, network and web services must form a coherent system.',
        // Descriptive phrasing taken from the source text: the method already stated in its next sentence.
        approach:
          'Administering an infrastructure does not simply mean installing software, but understanding their interactions and dependencies.',
        remark: '',
        visualLines: [
          '# services & monitoring',
          '→ mail',
          '→ dns',
          '→ reverse proxy',
          '→ backups',
        ],
      },
      outilsAutomatisations: {
        status: 'In progress',
        hook: 'Eliminate unnecessary operations.',
        description:
          'Scripts, administration tools and automations help reduce repetitive tasks and make some procedures more reliable.',
        // Descriptive phrasing taken from the source text: the limitation already stated in its next sentence.
        approach: 'Automation is not an end in itself.',
        remark:
          'If the cure is more complex than the problem, the cure probably needs rethinking.',
        visualLines: [
          '# automation',
          '→ backups',
          '→ scripts',
          '→ deployment',
          '→ documentation',
        ],
      },
    },
    cta: {
      eyebrow: '// what these projects have in common',
      title: 'Analyse. Simplify. Build. Test.',
      text: 'It is this method, more than the technologies used, that forms the common thread.',
      action: 'Talk about your project',
    },
  },

  skills: {
    eyebrow: '// my skills',
    title: ['Understanding several layers', 'of the same problem.'],
    lead: [
      'A technical skill only has value when it makes it possible to solve something.',
      'My profile covers several levels, from hardware and installations to software and automation.',
    ],
    quote: 'It is a useful, reliable and manageable one.',
    domains: {
      terrain: {
        title: 'Field',
        subtitle: 'Low voltage · Security · Detection · Home automation',
        text: 'Experience directly linked to technical installations and their real constraints. The system must work in the field, be operable and be diagnosable.',
      },
      infrastructure: {
        title: 'Infrastructure',
        subtitle: 'Networks · Linux · Servers · Docker',
        text: 'Design, administer and diagnose the systems that keep services running. The goal is not to accumulate components, but to build an infrastructure consistent with its use.',
      },
      developpement: {
        title: 'Development',
        subtitle: 'Applications · Scripts · Automation',
        text: 'Build when a need cannot be properly covered by existing tools. Code is a way to remove a limitation, not an end in itself.',
      },
      ia: {
        title: 'AI',
        subtitle: 'Local models · RAG · Integration · Automation',
        text: 'Explore the possibilities of AI while keeping control of the technical environment. Understanding what happens behind the interface is part of the work.',
      },
    },
    technologies: {
      title: 'Technologies',
      subtitle: 'Tools change. Principles remain.',
      note: 'This list shows technologies genuinely used across different projects. It is not a promise to use each of them for every need.',
    },
    /** Pointer to the proof: the technologies listed above are used in the projects. */
    projectsLink: 'See the projects',
    cta: {
      eyebrow: '// what matters',
      title:
        'Understand the problem. Choose the right level of technology. Build something maintainable.',
      action: 'Talk about your project',
    },
  },

  about: {
    eyebrow: '// about',
    title: ['A path built', 'between the field and digital.'],
    lead: [
      'My path has not followed a single speciality.',
      'It was built gradually around a single need: understanding how systems work and how to make them work together.',
    ],
    primaryCta: 'Talk about your project',
    quote: 'A good solution must remain understandable.',
    journey: {
      eyebrow: '// journey',
      title: 'From the field to software',
      intros: [
        'Low voltage taught me one essential thing:',
        'Networks and systems added another dimension:',
        'Development brought another tool:',
        'Automation and AI now open a new possibility:',
      ],
      lessons: [
        'a solution must work in the real world.',
        'components must communicate and remain manageable.',
        'when something is missing, it can be built.',
        'do more without necessarily adding more complexity.',
      ],
    },
    profile: {
      title: 'A hybrid profile',
      lead: 'I can look at the same problem from several levels:',
      layers: ['Installation', 'Network', 'System', 'Software', 'Automation'],
      paragraphs: [
        'This does not mean always working on every one of these layers.',
        'It means it is possible to understand where the problem really lies before choosing how to handle it.',
      ],
    },
    principles: {
      title: 'What I favour',
      items: {
        simplicity: {
          title: 'Useful simplicity.',
          text: 'A solution is not better because it has more features.',
        },
        mastery: {
          title: 'Mastery.',
          text: 'Understanding how a system works makes it easier to operate and evolve.',
        },
        proportion: {
          title: 'Proportion.',
          text: 'A small difficulty does not necessarily justify a large architecture.',
        },
        openness: {
          title: 'Openness.',
          text: 'When relevant, open technologies make it possible to limit certain dependencies and keep more control.',
        },
      },
    },
    cta: {
      eyebrow: '// conclusion',
      title: 'Build solutions that can still be understood tomorrow.',
      text: 'This is probably the best criterion for judging a technical solution. Not the number of features. Not the novelty of its technology. Its ability to remain useful, reliable and manageable over time.',
      action: 'Talk about your project',
    },
  },

  contact: {
    eyebrow: '// contact',
    title: ['You have a technical problem?', "Let's start by understanding it."],
    lead: ['You do not need to know the solution before getting in touch.'],
    listLead: 'Simply explain:',
    list: [
      'what is not working',
      'what you would like to improve',
      'what you want to build',
      'or simply what you are trying to understand.',
    ],
    expectations: {
      title: 'What you can expect',
      items: {
        noPaste: {
          title: 'No off-the-shelf solution.',
          text: 'We start from the real context and what already exists.',
        },
        noFreeComplexity: {
          title: 'No needless complexity.',
          text: 'Every component must have a reason to exist.',
        },
        explainedChoices: {
          title: 'Explained choices.',
          text: 'A technical solution must be understandable and justifiable.',
        },
        proportionate: {
          title: 'A proportionate answer.',
          text: 'The right level of technology depends on the problem, not the other way round.',
        },
      },
    },
    form: {
      title: 'Describe my need',
      requiredMark: '*',
      fields: {
        name: 'Your name',
        email: 'Your email address',
        subject: 'Subject',
        message: 'Describe your need',
      },
      messagePlaceholder: 'A few lines are enough to get started.',
      subjectPlaceholder: 'Choose a subject',
      subjects: [
        'Field / low voltage',
        'Infrastructure / networks',
        'Automation & home automation',
        'Development & AI',
        'Other',
      ],
      submit: 'Send message',
      notice:
        'Sending disabled: no sending service is connected yet. The form is ready to be wired up.',
    },
    cta: {
      eyebrow: '// conclusion',
      title: 'The first task is to understand the need.',
      text: 'There is no need to have already defined the solution precisely.',
      note: 'An idea, a problem, a project?',
    },
  },
};

export default en;
