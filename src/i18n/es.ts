import type { Translations } from './fr';

/** Textes espagnols. */
const es: Translations = {
  meta: {
    title: 'MonSite',
    description: 'Sitio personal — proyectos, competencias y contacto.',
  },

  a11y: {
    skipToContent: 'Ir al contenido',
    sectionNav: 'Secciones del sitio',
    headerNav: 'Navegación del sitio',
    footerNav: 'Enlaces del pie de página',
    backToTop: 'Volver al inicio de la página',
    languageGroup: 'Selección de idioma',
  },

  /** Menú de comandos de ventana (botón ⋯). */
  window: {
    trigger: 'Comandos de ventana',
    groups: {
      window: 'Ventana',
      display: 'Visualización',
      share: 'Compartir',
    },
    items: {
      fullscreen: 'Pantalla completa',
      exitFullscreen: 'Salir de pantalla completa',
      print: 'Imprimir la página',
      zoom: 'Zoom',
      zoomOut: 'Alejar',
      zoomIn: 'Acercar',
      zoomReset: 'Tamaño real',
      copyLink: 'Copiar el enlace',
      unavailable: 'no disponible',
    },
    status: {
      fullscreenRefused: 'Pantalla completa rechazada por el navegador.',
      linkCopied: 'Enlace de la página copiado.',
      copyFailed: 'No se puede copiar: permiso denegado.',
    },
  },

  sections: {
    accueil: 'Inicio',
    projets: 'Proyectos',
    competences: 'Competencias',
    'a-propos': 'Sobre mí',
    contact: 'Contacto',
  },

  headerNav: {
    accueil: 'inicio',
    projets: 'proyectos',
    competences: 'competencias',
    'a-propos': 'sobre mí',
  },

  footer: {
    legal: 'Soluciones abiertas para un mundo más simple.',
    links: {
      github: 'github',
      linkedin: 'linkedin',
      contact: 'contacto',
    },
  },

  common: {
    contactCta: 'contactarme',
    pendingValue: '—',
    pendingPeriod: 'periodo por precisar',
    linkPending: 'Enlace por definir',
    documentPending: 'Documento por proporcionar',
    all: 'Todos',
    overview: 'Vista general',
    copy: 'copiar',
  },

  visuals: {
    alt: {
      projectsHero: 'Escritorio técnico: pantallas de código, planta y taza',
      skillsHero: 'Escritorio técnico: dos pantallas de código, póster de método y taza',
      aboutHero: 'Escritorio con portátil, planta, póster y taza',
      aboutWorkshop: 'Taller: panel de herramientas, libros técnicos, pantalla de notas y taza',
      contactHero: 'Espacio de trabajo: portátil, taza y cuaderno',
      projectCockpitServers: 'Bastidores de servidores supervisados',
      projectDomotique: 'Tableta domótica de pared que controla los equipos de la casa',
      projectSecuriteReseaux: 'Cámara de videovigilancia en una fachada',
    },
  },

  home: {
    eyebrow: '// soluciones concretas para tus proyectos',
    title: ['Técnico.', 'Desarrollador.', 'Integrador.'],
    lead: 'Acompaño a artesanos, micropymes y pymes en la implantación de soluciones fiables, sencillas y de código abierto: redes, domótica, seguridad, detección de incendios, IA y aplicaciones web.',
    primaryCta: 'ver mis proyectos',
    secondaryCta: 'contactarme',
    visualLines: [
      '# Necesidades concretas',
      'analizar los usos',
      'diseñar soluciones',
      'desplegar correctamente',
      'acompañar a largo plazo',
      'compartir el conocimiento',
      'seguir siendo código abierto',
    ],
    quote: 'Herramientas útiles, no complicaciones innecesarias.',
    domains: {
      infrastructure: {
        title: 'Infraestructura',
        text: 'Redes, fibra, seguridad, servidores y supervisión.',
      },
      domotique: {
        title: 'Domótica',
        text: 'Soluciones conectadas para el hogar y el sector terciario.',
      },
      developpement: {
        title: 'Desarrollo',
        text: 'Aplicaciones web, automatizaciones, IA.',
      },
      support: {
        title: 'Soporte y consultoría',
        text: 'Auditoría, instalación, formación, asistencia.',
      },
    },
    domainLink: 'saber más',
    profile: {
      eyebrow: '// competencias',
      title: 'Un perfil polivalente',
      lead: 'Una combinación de trabajo de campo e informática para ofrecer soluciones completas y pragmáticas.',
      checks: [
        'Corriente débil y redes',
        'Detección de incendios',
        'Domótica',
        'Linux y servidores',
        'Docker y virtualización',
        'Programación (Python, JS)',
        'Bases de datos',
        'IA local y RAG',
        'Supervisión y monitorización',
        'Código abierto',
      ],
      cvCta: 'ver mi CV',
      tabs: {
        experience: 'experiencia',
        projects: 'proyectos',
        tools: 'herramientas',
      },
      experienceTitle: 'años de experiencia',
      experienceNote: 'valores por precisar (ninguna cifra validada)',
      experienceRows: [
        'Redes / Corriente débil',
        'Domótica',
        'Desarrollo',
        'Linux / Servidores',
        'IA y automatización',
      ],
      projectsTitle: 'proyectos en curso y en producción',
      toolsTitle: 'tecnologías y herramientas',
      toolsMore: 'ver todas las tecnologías',
    },
    mission: {
      eyebrow: '// mi misión',
      title: 'Tecnologías al servicio del trabajo de campo',
      text: 'Ayudar a los profesionales a ganar tiempo, proteger sus instalaciones y simplificar su día a día, con soluciones fiables y duraderas.',
      action: 'hablemos de tu proyecto',
    },
  },

  projects: {
    eyebrow: '// mis proyectos',
    title: ['Proyectos concretos', 'para necesidades reales.'],
    lead: 'Soluciones de código abierto, pragmáticas y documentadas para artesanos, micropymes y pymes y entornos técnicos.',
    heroVisualLines: ['# ideas', 'concepción', 'desarrollo', 'despliegue', 'mantenimiento'],
    filtersLabel: 'Filtrar los proyectos por categoría',
    linkLabel: 'ver el proyecto',
    repositoryLabel: 'GitHub',
    pendingNote:
      'Los enlaces a los proyectos y a los repositorios se activarán cuando se validen las URL.',
    empty: 'Todavía no hay ningún proyecto en esta categoría.',
    categories: {
      infrastructure: 'Infraestructura',
      ia: 'IA y automatización',
      developpement: 'Desarrollo',
      domotique: 'Domótica',
      securite: 'Seguridad',
    },
    items: {
      smartBtpProgest: {
        status: 'En desarrollo',
        description:
          'SaaS de gestión de proyectos para artesanos y pymes del sector de la construcción: planificación, seguimiento, presupuesto, colaboración.',
        visualLines: [
          '# gestión de proyectos de construcción',
          '→ planificación',
          '→ seguimiento de obra',
          '→ presupuesto',
          '→ colaboración',
        ],
      },
      versutusIa: {
        status: 'En producción',
        description:
          'Plataforma de IA local: LLM, RAG, herramientas, interfaces web y agentes. Código abierto.',
        visualLines: [
          '# IA local · privada · útil',
          '→ cambiar un modelo',
          '→ consultar documentos',
          '→ automatizar tareas',
          '→ mantener el control',
        ],
      },
      cockpitServers: {
        status: 'En producción',
        description:
          'Infraestructura de servidores: correo, DNS, proxy inverso, copias de seguridad y supervisión.',
        visualLines: [
          '# servicios y supervisión',
          '→ correo',
          '→ dns',
          '→ proxy inverso',
          '→ copias de seguridad',
        ],
      },
      domotique: {
        status: 'En producción',
        description:
          'Integración de soluciones domóticas para el hogar y el sector terciario (KNX, Home Assistant…).',
        visualLines: ['# confort y energía', '→ iluminación', '→ persianas', '→ calefacción', '→ escenas'],
      },
      outilsScripts: {
        status: 'En curso',
        description: 'Scripts y herramientas de automatización para ahorrar tiempo en el día a día.',
        visualLines: ['# automatización', '→ copias de seguridad', '→ scripts', '→ despliegue', '→ documentación'],
      },
      securiteReseaux: {
        status: 'En producción',
        description: 'Redes, videovigilancia, detección de incendios y control de accesos.',
        visualLines: [
          '# red y seguridad',
          '→ videovigilancia',
          '→ control de accesos',
          '→ detección de incendios',
          '→ supervisión',
        ],
      },
    },
    cta: {
      eyebrow: '// ¿una idea de proyecto?',
      title: 'Hablemos de lo que necesitas',
      text: 'Te acompaño desde la idea hasta el despliegue, con soluciones sencillas, fiables y adaptadas a tu entorno.',
      action: 'contactarme',
    },
  },

  skills: {
    eyebrow: '// mis competencias',
    title: ['Competencias', 'al servicio de tus', 'proyectos.'],
    lead: 'Un perfil técnico y polivalente para diseñar, desplegar y mantener soluciones fiables, sencillas y duraderas.',
    visualLines: ['# método de trabajo', 'plan', 'código', 'prueba', 'despliegue', 'mejora'],
    quote: 'Herramientas útiles, no complicaciones innecesarias.',
    filtersLabel: 'Filtrar las competencias por ámbito',
    empty: 'Todavía no hay ningún elemento en este ámbito.',
    metrics: {
      experience: 'años de experiencia',
      projects: 'proyectos realizados',
      passion: 'pasión por el trabajo de campo y la tecnología',
    },
    domains: {
      informatique: 'Informática',
      domotique: 'Domótica',
      reseaux: 'Redes y seguridad',
      developpement: 'Desarrollo',
      outils: 'Herramientas',
      soft: 'Habilidades blandas',
    },
    keySkills: {
      title: 'Competencias clave',
      subtitle: 'Una base sólida y complementaria: trabajo de campo e informática.',
      items: {
        infrastructure: {
          title: 'Infraestructura',
          text: 'Servidores, virtualización, Docker, supervisión.',
        },
        domotique: {
          title: 'Domótica',
          text: 'KNX, Home Assistant, integraciones a medida.',
        },
        reseaux: {
          title: 'Redes y seguridad',
          text: 'Redes, firewall, VPN, supervisión, copias de seguridad.',
        },
        developpement: {
          title: 'Desarrollo',
          text: 'Python, Bash, JavaScript, automatización, APIs.',
        },
        basesDonnees: {
          title: 'Bases de datos',
          text: 'PostgreSQL, SQL, modelización, copias de seguridad.',
        },
        support: {
          title: 'Soporte y consultoría',
          text: 'Auditoría, instalación, formación, asistencia.',
        },
      },
    },
    mastery: {
      title: 'Niveles de dominio',
      subtitle: 'Una visión clara de mis áreas de especialización.',
      note: 'Niveles por completar: ninguna cifra validada por el momento.',
      rows: {
        reseaux: 'Redes / Corriente débil',
        linux: 'Linux / Servidores',
        domotique: 'Domótica (KNX / HA)',
        securite: 'Seguridad',
        developpement: 'Desarrollo (Python / JS)',
        basesDonnees: 'Bases de datos',
        ia: 'IA y automatización',
      },
    },
    technologies: {
      title: 'Tecnologías y herramientas',
      subtitle: 'Las herramientas que utilizo a diario.',
      groups: {
        systemes: 'sistemas',
        reseaux: 'redes y seguridad',
        developpement: 'desarrollo',
        domotique: 'domótica',
        basesDonnees: 'bases de datos',
        ia: 'ia y automatización',
      },
    },
    certifications: {
      title: 'Certificaciones y formación',
      subtitle: 'Un proceso continuo de aprendizaje.',
      note: 'Denominaciones y periodos por confirmar antes de su publicación.',
      items: {
        linux: { title: 'Linux (Debian)', text: 'Experiencia avanzada' },
        knx: { title: 'KNX', text: 'Formación y proyectos de campo' },
        securite: { title: 'Seguridad de redes', text: 'Autoformación continua' },
        python: { title: 'Python', text: 'Proyectos profesionales' },
        docker: { title: 'Docker y contenedores', text: 'Proyectos y despliegues' },
      },
    },
    cta: {
      eyebrow: '// desarrollar juntos',
      title: '¿Un proyecto? Hablemos de lo que necesitas.',
      text: 'Te acompaño desde la idea hasta la puesta en producción, con soluciones adaptadas y pragmáticas.',
      action: 'contactarme',
    },
  },

  about: {
    eyebrow: '// sobre mí',
    title: ['Una trayectoria,', 'una pasión,', 'soluciones.'],
    lead: 'Técnico en corriente débil, desarrollador e integrador, acompaño a artesanos, micropymes y pymes en la implantación de soluciones fiables, sencillas y duraderas, apoyándome en el código abierto y la experiencia de campo.',
    primaryCta: 'contactarme',
    cvCta: 'descargar mi CV',
    visualLines: [
      '# hilo conductor',
      'entender la necesidad',
      'diseñar con sencillez',
      'desplegar y documentar',
      'transmitir',
      '# ideas · código · pruebas · impacto real',
    ],
    quote: 'Herramientas útiles, no complicaciones innecesarias.',
    metrics: {
      experience: 'años de experiencia de campo e informática',
      projects: 'proyectos realizados (micropymes, pymes, artesanos)',
      passion: 'pasión y compromiso por soluciones útiles',
      goal: 'objetivo: un entorno digital más sencillo',
    },
    story: {
      eyebrow: '// mi historia',
      title: 'Una trayectoria polivalente',
      lead: 'Me muevo en los ámbitos de las redes, la seguridad, la domótica y el desarrollo. Esta diversidad me permite tener una visión global y concreta de las necesidades, desde el trabajo de campo hasta la puesta en producción.',
      timeline: {
        diploma: {
          title: 'Gestión de sistemas y redes',
          text: 'Formación en informática y redes.',
        },
        technician: {
          title: 'Técnico en corriente débil',
          text: 'Redes, seguridad contra incendios, control de accesos, videoportero, domótica.',
        },
        integrator: {
          title: 'Integrador y desarrollador',
          text: 'Soluciones a medida para artesanos y pymes. Automatización, scripts, herramientas internas.',
        },
        personal: {
          title: 'Proyectos personales y divulgación',
          text: 'Versutus-IA, Smart BTP ProGest, domótica y seguridad.',
        },
      },
    },
    values: {
      title: 'Mis valores',
      items: [
        'Sencillez antes que complejidad',
        'Soluciones concretas y duraderas',
        'Código abierto e independencia',
        'Compartir conocimientos',
        'Escucha y acompañamiento',
        'Calidad y fiabilidad',
        'Mejora continua',
      ],
    },
    motivation: {
      title: 'Lo que me motiva',
      paragraphs: [
        'Ayudar a los profesionales a ganar tiempo, proteger sus instalaciones y simplificar su día a día, apoyándome en tecnologías abiertas y contrastadas.',
        'Creo en un entorno digital sobrio, útil y controlado, al servicio del trabajo de campo.',
      ],
      quote: 'Las mejores soluciones son las que desaparecen detrás del uso.',
    },
    wideVisualLines: [
      '# aprender · compartir · construir',
      'linux',
      'redes',
      'domótica',
      'seguridad',
      'python',
      'open source',
    ],
    cta: {
      eyebrow: '// ¿y ahora qué?',
      title: '¿Un proyecto? Hablemos.',
      text: 'Ya sea para un asesoramiento, una integración o el desarrollo de una solución a medida, estoy a tu disposición.',
      action: 'contactarme',
    },
  },

  contact: {
    eyebrow: '// contacto',
    title: ['Hablemos', 'de tu proyecto.'],
    lead: '¿Una idea, una necesidad, una pregunta? Estoy a tu disposición para hablar de tus proyectos y encontrar juntos soluciones concretas, sencillas y adaptadas a tu entorno.',
    highlights: {
      response: { title: 'Respuesta rápida', text: 'plazo por precisar' },
      exchange: { title: 'Conversación sin compromiso', text: '' },
      confidential: { title: 'Confidencial y seguro', text: '' },
    },
    visualLines: [
      '# diseñar · desplegar · simplificar',
      'entender la necesidad',
      'proponer una solución clara',
      'presupuestar sin sorpresas',
      'desplegar y documentar',
      'seguir disponible',
    ],
    form: {
      title: 'Envíame un mensaje',
      subtitle: 'Te responderé lo antes posible.',
      requiredMark: '*',
      optionalMark: '(opcional)',
      fields: {
        name: 'Nombre',
        email: 'Email',
        company: 'Empresa',
        subject: 'Asunto',
        message: 'Tu mensaje',
      },
      subjectPlaceholder: 'Elegir un asunto',
      subjects: ['Infraestructura', 'Domótica', 'Redes y seguridad', 'Desarrollo', 'Otro'],
      submit: 'Enviar el mensaje',
      notice:
        'Envío desactivado: no hay ningún servicio de envío conectado por el momento. El formulario está listo para conectarse.',
    },
    methods: {
      title: 'Otras formas de contactarme',
      subtitle: 'Elige el canal que prefieras.',
      items: {
        email: { title: 'Email', value: 'dirección por completar' },
        phone: { title: 'Teléfono', value: 'número por completar' },
        location: { title: 'Ubicación', value: 'por precisar' },
      },
    },
    zone: {
      title: 'Zona de intervención',
      subtitle: 'En el lugar o a distancia.',
      items: ['Zona geográfica por precisar', 'Telemantenimiento', 'Proyectos a distancia'],
      badge: 'Soluciones locales para un impacto duradero.',
    },
    cta: {
      eyebrow: '// ¿tienes un proyecto en mente?',
      title: 'Transformemos tus ideas en soluciones concretas.',
      text: 'Ya sea para un asesoramiento, una instalación, un desarrollo o una colaboración, hablemos de forma sencilla.',
      note: '¡Hasta pronto!',
    },
  },
};

export default es;
