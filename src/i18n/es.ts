import type { Translations } from './fr';

/** Textes espagnols. */
const es: Translations = {
  meta: {
    title: 'Operius',
    description:
      'Operius — soluciones técnicas del terreno al software: redes, infraestructura, automatización, desarrollo e IA.',
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
    legal: 'Soluciones útiles, fiables y controlables.',
    links: {
      github: 'github',
      linkedin: 'linkedin',
      contact: 'contacto',
    },
  },

  common: {
    contactCta: 'contactarme',
    linkPending: 'Enlace por definir',
    all: 'Todos',
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
    },
  },

  home: {
    eyebrow: '// mi enfoque',
    title: ['No más tecnología.', 'La tecnología adecuada.'],
    lead: [
      'Diseño e integro soluciones técnicas que responden a problemas concretos, del trabajo de campo al software.',
      'Redes, seguridad, corriente débil, domótica, automatización, desarrollo e IA: primero busco entender la necesidad y después elijo la solución más sencilla que pueda responder realmente a ella.',
    ],
    primaryCta: 'Ver los proyectos',
    secondaryCta: 'Hablar de tu necesidad',
    visualLines: ['comprender', 'simplificar', 'construir', 'probar'],
    quote: 'Comprender el problema antes de elegir la tecnología.',
    domains: {
      infrastructure: {
        title: 'Infraestructura',
        hook: 'Hacer funcionar los sistemas sobre los que descansa todo.',
        text: 'Redes, servidores, Linux, servicios e infraestructura: construir una base fiable, coherente y mantenible.',
      },
      securite: {
        title: 'Seguridad y corriente débil',
        hook: 'Conectar la técnica con la realidad del terreno.',
        text: 'Detección, seguridad, corriente débil y sistemas técnicos: integrar equipos que deben funcionar en condiciones reales.',
      },
      automatisation: {
        title: 'Automatización y domótica',
        hook: 'Hacer que los sistemas hagan lo que puede automatizarse.',
        text: 'Supervisión, automatización y domótica para reducir las operaciones repetitivas y mejorar el control.',
      },
      developpement: {
        title: 'Desarrollo e IA',
        hook: 'Construir cuando las herramientas existentes no responden a la necesidad.',
        text: 'Aplicaciones, scripts, herramientas y soluciones de IA cuando el desarrollo aporta una respuesta más adecuada que una acumulación de programas existentes.',
      },
    },
    domainLink: 'saber más',
    approach: {
      eyebrow: '// ¿por qué este enfoque?',
      title: 'Porque un problema no siempre necesita más tecnología.',
      lead: 'Un sistema puede ser técnicamente sofisticado y, aun así, difícil de usar, de mantener o de hacer evolucionar.',
      stepsLead: 'Prefiero un enfoque distinto:',
      steps: ['Comprender', 'Simplificar', 'Construir', 'Probar'],
      closingLead: 'El resultado que busco no es la solución más impresionante.',
      closing: 'Es una solución útil, fiable y controlable.',
    },
    journey: {
      title: 'Del terreno al software',
      lead: 'Mi trayectoria reúne varios ámbitos que suelen tratarse por separado:',
      steps: ['Corriente débil', 'Redes', 'Sistemas', 'Desarrollo', 'Automatización', 'IA'],
      closing:
        'Esta continuidad permite abordar un problema en varios niveles y comprender las interacciones entre las distintas capas.',
    },
    conviction: {
      eyebrow: '// una convicción',
      title: 'Una buena solución debe seguir siendo comprensible.',
      text: 'Cuando es pertinente, doy prioridad a las tecnologías abiertas y a las soluciones que se pueden administrar, diagnosticar y hacer evolucionar sin depender innecesariamente de una caja negra. Las herramientas son un medio. El resultado es lo que cuenta.',
      action: 'Hablar de tu proyecto',
    },
  },

  projects: {
    eyebrow: '// mis proyectos',
    title: ['Problemas concretos.', 'Soluciones construidas para responder.'],
    lead: [
      'Los proyectos que aparecen aquí no son una colección de tecnologías.',
      'Muestran una forma de trabajar: partir de una necesidad, entender las limitaciones, construir una solución y comprobar que funciona de verdad.',
    ],
    heroVisualLines: ['# ideas', 'concepción', 'desarrollo', 'despliegue', 'mantenimiento'],
    filtersLabel: 'Filtrar los proyectos por categoría',
    linkLabel: 'ver el proyecto',
    repositoryLabel: 'GitHub',
    approachLabel: 'Enfoque',
    technologiesLabel: 'Tecnologías',
    pendingNote:
      'Los enlaces a los proyectos y a los repositorios se activarán cuando se validen las URL.',
    empty: 'Todavía no hay ningún proyecto en esta categoría.',
    categories: {
      infrastructure: 'Infraestructura',
      ia: 'IA y automatización',
      developpement: 'Desarrollo',
    },
    items: {
      smartBtpProgest: {
        status: 'En desarrollo',
        hook: 'Simplificar la gestión sin complicaciones innecesarias.',
        description:
          'Los artesanos y las pequeñas empresas necesitan herramientas adaptadas a su actividad, no necesariamente plataformas genéricas cargadas de funciones. Smart BTP ProGest explora un enfoque centrado en el proyecto, la planificación, las tareas, los documentos y el seguimiento.',
        approach:
          'Construir únicamente las funciones útiles en el día a día y mantener una arquitectura lo bastante sencilla para poder evolucionar.',
        remark: '',
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
        hook: 'Entender la IA en lugar de limitarse a usarla.',
        description:
          'Versutus IA explora una infraestructura de IA local capaz de reunir modelos, API, RAG, memoria y herramientas. El objetivo es controlar toda la cadena: instalación, ejecución, integración, medición y diagnóstico.',
        approach:
          'Priorizar la experimentación reproducible y la comprensión del funcionamiento en lugar de usar una solución opaca.',
        remark: '',
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
        hook: 'Una infraestructura solo es fiable cuando sus componentes funcionan juntos.',
        description:
          'DNS, correo, certificados, proxy inverso, Docker, red y servicios web deben formar un sistema coherente.',
        approach:
          'Administrar una infraestructura no consiste simplemente en instalar programas, sino en comprender sus interacciones y sus dependencias.',
        remark: '',
        visualLines: [
          '# servicios y supervisión',
          '→ correo',
          '→ dns',
          '→ proxy inverso',
          '→ copias de seguridad',
        ],
      },
      outilsAutomatisations: {
        status: 'En curso',
        hook: 'Eliminar las operaciones inútiles.',
        description:
          'Los scripts, las herramientas de administración y las automatizaciones permiten reducir las tareas repetitivas y hacer más fiables algunos procedimientos.',
        approach: 'La automatización no es un fin en sí mismo.',
        remark: 'Si el remedio es más complejo que el problema, probablemente haya que revisar el remedio.',
        visualLines: [
          '# automatización',
          '→ copias de seguridad',
          '→ scripts',
          '→ despliegue',
          '→ documentación',
        ],
      },
    },
    cta: {
      eyebrow: '// lo que estos proyectos tienen en común',
      title: 'Analizar. Simplificar. Construir. Probar.',
      text: 'Es este método, más que las tecnologías utilizadas, lo que constituye el hilo conductor.',
      action: 'Hablar de tu proyecto',
    },
  },

  skills: {
    eyebrow: '// mis competencias',
    title: ['Entender varias capas', 'de un mismo problema.'],
    lead: [
      'Una competencia técnica solo tiene valor cuando permite resolver algo.',
      'Mi perfil abarca varios niveles, desde el hardware y las instalaciones hasta el software y la automatización.',
    ],
    quote: 'Es una solución útil, fiable y controlable.',
    domains: {
      terrain: {
        title: 'Terreno',
        subtitle: 'Corriente débil · Seguridad · Detección · Domótica',
        text: 'Una experiencia directamente ligada a las instalaciones técnicas y a sus limitaciones reales. El sistema debe funcionar sobre el terreno, ser explotable y poder diagnosticarse.',
      },
      infrastructure: {
        title: 'Infraestructura',
        subtitle: 'Redes · Linux · Servidores · Docker',
        text: 'Diseñar, administrar y diagnosticar los sistemas que hacen funcionar los servicios. El objetivo no es acumular componentes, sino construir una infraestructura coherente con su uso.',
      },
      developpement: {
        title: 'Desarrollo',
        subtitle: 'Aplicaciones · Scripts · Automatización',
        text: 'Desarrollar cuando una necesidad no puede cubrirse correctamente con las herramientas existentes. El código es un medio para eliminar una limitación, no un fin.',
      },
      ia: {
        title: 'IA',
        subtitle: 'Modelos locales · RAG · Integración · Automatización',
        text: 'Explorar las posibilidades de la IA manteniendo el control del entorno técnico. Entender lo que ocurre detrás de la interfaz forma parte del trabajo.',
      },
    },
    technologies: {
      title: 'Tecnologías',
      subtitle: 'Las herramientas cambian. Los principios permanecen.',
      note: 'Esta lista indica tecnologías realmente utilizadas en distintos proyectos. No constituye una promesa de usar cada una de ellas para cada necesidad.',
    },
    projectsLink: 'Ver los proyectos',
    cta: {
      eyebrow: '// lo que cuenta',
      title: 'Entender el problema. Elegir el nivel de tecnología adecuado. Construir algo mantenible.',
      action: 'Hablar de tu proyecto',
    },
  },

  about: {
    eyebrow: '// sobre mí',
    title: ['Una trayectoria construida', 'entre el terreno y lo digital.'],
    lead: [
      'Mi trayectoria no ha seguido una sola especialidad.',
      'Se ha construido poco a poco en torno a una misma necesidad: entender cómo funcionan los sistemas y cómo hacerlos funcionar juntos.',
    ],
    primaryCta: 'Hablar de tu proyecto',
    quote: 'Una buena solución debe seguir siendo comprensible.',
    journey: {
      eyebrow: '// trayectoria',
      title: 'Del terreno al software',
      intros: [
        'La corriente débil me enseñó algo esencial:',
        'Las redes y los sistemas añadieron otra dimensión:',
        'El desarrollo aportó otra herramienta:',
        'La automatización y la IA abren hoy una nueva posibilidad:',
      ],
      lessons: [
        'una solución debe funcionar en el mundo real.',
        'los componentes deben comunicarse y seguir siendo administrables.',
        'cuando falta algo, se puede construir.',
        'hacer más sin añadir necesariamente más complejidad.',
      ],
    },
    profile: {
      title: 'Un perfil híbrido',
      lead: 'Puedo mirar un mismo problema desde varios niveles:',
      layers: ['Instalación', 'Red', 'Sistema', 'Software', 'Automatización'],
      paragraphs: [
        'Esto no significa que siempre haya que intervenir en todas esas capas.',
        'Significa que es posible entender dónde está realmente el problema antes de elegir cómo tratarlo.',
      ],
    },
    principles: {
      title: 'Lo que priorizo',
      items: {
        simplicity: {
          title: 'La sencillez útil.',
          text: 'Una solución no es mejor por tener más funciones.',
        },
        mastery: {
          title: 'El control.',
          text: 'Entender cómo funciona un sistema facilita su explotación y su evolución.',
        },
        proportion: {
          title: 'La proporción.',
          text: 'Una pequeña dificultad no justifica necesariamente una gran arquitectura.',
        },
        openness: {
          title: 'La apertura.',
          text: 'Cuando es pertinente, las tecnologías abiertas permiten limitar ciertas dependencias y conservar más control.',
        },
      },
    },
    cta: {
      eyebrow: '// conclusión',
      title: 'Construir soluciones que todavía se puedan entender mañana.',
      text: 'Es probablemente el mejor criterio para juzgar una solución técnica. No su número de funciones. No la novedad de su tecnología. Su capacidad de seguir siendo útil, fiable y controlable con el tiempo.',
      action: 'Hablar de tu proyecto',
    },
  },

  contact: {
    eyebrow: '// contacto',
    title: ['¿Tienes un problema técnico?', 'Empecemos por entenderlo.'],
    lead: ['No necesitas conocer la solución antes de ponerte en contacto.'],
    listLead: 'Explica sencillamente:',
    list: [
      'lo que no funciona',
      'lo que te gustaría mejorar',
      'lo que quieres construir',
      'o simplemente lo que buscas entender.',
    ],
    expectations: {
      title: 'Lo que puedes esperar',
      items: {
        noPaste: {
          title: 'Ninguna solución impuesta.',
          text: 'Se parte del contexto real y de lo que ya existe.',
        },
        noFreeComplexity: {
          title: 'Ninguna complejidad innecesaria.',
          text: 'Cada componente debe tener una razón de ser.',
        },
        explainedChoices: {
          title: 'Decisiones explicadas.',
          text: 'Una solución técnica debe poder entenderse y justificarse.',
        },
        proportionate: {
          title: 'Una respuesta proporcionada.',
          text: 'El nivel de tecnología adecuado depende del problema, no al contrario.',
        },
      },
    },
    form: {
      title: 'Describir mi necesidad',
      requiredMark: '*',
      fields: {
        name: 'Tu nombre',
        email: 'Tu dirección de correo electrónico',
        subject: 'Asunto',
        message: 'Describe tu necesidad',
      },
      messagePlaceholder: 'Unas líneas bastan para empezar.',
      subjectPlaceholder: 'Elegir un asunto',
      subjects: [
        'Terreno / corriente débil',
        'Infraestructura / redes',
        'Automatización y domótica',
        'Desarrollo e IA',
        'Otro',
      ],
      submit: 'Enviar el mensaje',
      notice:
        'Envío desactivado: no hay ningún servicio de envío conectado por el momento. El formulario está listo para conectarse.',
    },
    cta: {
      eyebrow: '// conclusión',
      title: 'El primer trabajo consiste en entender la necesidad.',
      text: 'No hace falta haber definido ya con precisión la solución.',
      note: '¿Una idea, un problema, un proyecto?',
    },
  },
};

export default es;
