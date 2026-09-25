import type { Translations } from './fr';

/** Textes italiens. */
const it: Translations = {
  meta: {
    title: 'Operius',
    description: 'Operius — progetti, competenze e contatti.',
  },

  a11y: {
    skipToContent: 'Vai al contenuto',
    sectionNav: 'Sezioni del sito',
    headerNav: 'Navigazione del sito',
    footerNav: 'Link del piè di pagina',
    backToTop: 'Torna all’inizio della pagina',
    languageGroup: 'Scelta della lingua',
  },

  window: {
    trigger: 'Comandi della finestra',
    groups: {
      window: 'Finestra',
      display: 'Visualizzazione',
      share: 'Condivisione',
    },
    items: {
      fullscreen: 'Schermo intero',
      exitFullscreen: 'Esci da schermo intero',
      print: 'Stampa la pagina',
      zoom: 'Zoom',
      zoomOut: 'Riduci zoom',
      zoomIn: 'Aumenta zoom',
      zoomReset: 'Dimensione reale',
      copyLink: 'Copia il link',
      unavailable: 'non disponibile',
    },
    status: {
      fullscreenRefused: 'Schermo intero rifiutato dal browser.',
      linkCopied: 'Link della pagina copiato.',
      copyFailed: 'Copia impossibile: autorizzazione negata.',
    },
  },

  sections: {
    accueil: 'Home',
    projets: 'Progetti',
    competences: 'Competenze',
    'a-propos': 'Chi sono',
    contact: 'Contatti',
  },

  headerNav: {
    accueil: 'home',
    projets: 'progetti',
    competences: 'competenze',
    'a-propos': 'chi sono',
  },

  footer: {
    legal: 'Soluzioni aperte per un mondo più semplice.',
    links: {
      github: 'github',
      linkedin: 'linkedin',
      contact: 'contatti',
    },
  },

  common: {
    contactCta: 'contattami',
    pendingValue: '—',
    pendingPeriod: 'periodo da definire',
    linkPending: 'Link da definire',
    documentPending: 'Documento da fornire',
    all: 'Tutti',
    overview: 'Panoramica',
    copy: 'copia',
  },

  visuals: {
    alt: {
      projectsHero: 'Scrivania tecnica: schermi di codice, pianta e tazza',
      skillsHero: 'Scrivania tecnica: due schermi di codice, poster del metodo e tazza',
      aboutHero: 'Scrivania con portatile, pianta, poster e tazza',
      aboutWorkshop: 'Officina: pannello attrezzi, libri tecnici, schermo con appunti e tazza',
      contactHero: 'Postazione di lavoro: portatile, tazza e quaderno',
      projectCockpitServers: 'Rack di server supervisionati',
      projectDomotique: 'Tablet domotico a parete che controlla i dispositivi della casa',
      projectSecuriteReseaux: 'Telecamera di videosorveglianza su una facciata',
    },
  },

  home: {
    eyebrow: '// soluzioni concrete per i vostri progetti',
    title: ['Tecnico.', 'Sviluppatore.', 'Integratore.'],
    lead: 'Accompagno artigiani, microimprese e PMI nell’adozione di soluzioni affidabili, semplici e open-source: reti, domotica, sicurezza, rilevazione incendi, IA e applicazioni web.',
    primaryCta: 'vedi i miei progetti',
    secondaryCta: 'contattami',
    visualLines: [
      '# Esigenze concrete',
      'analizzare gli usi',
      'progettare soluzioni',
      'distribuire con cura',
      'accompagnare nel tempo',
      'condividere il sapere',
      'restare open-source',
    ],
    quote: 'Strumenti utili, non soluzioni complicate.',
    domains: {
      infrastructure: {
        title: 'Infrastruttura',
        text: 'Reti, fibra, sicurezza, server e supervisione.',
      },
      domotique: {
        title: 'Domotica',
        text: 'Soluzioni connesse per abitazioni e terziario.',
      },
      developpement: {
        title: 'Sviluppo',
        text: 'Applicazioni web, automazioni, IA.',
      },
      support: {
        title: 'Assistenza e consulenza',
        text: 'Audit, installazione, formazione, assistenza.',
      },
    },
    domainLink: 'scopri di più',
    profile: {
      eyebrow: '// competenze',
      title: 'Un profilo versatile',
      lead: 'Un mix di lavoro sul campo e informatica per soluzioni complete e pragmatiche.',
      checks: [
        'Corrente debole e reti',
        'Rilevazione incendi',
        'Domotica',
        'Linux e server',
        'Docker e virtualizzazione',
        'Programmazione (Python, JS)',
        'Database',
        'IA locale e RAG',
        'Supervisione e monitoraggio',
        'Open-source',
      ],
      cvCta: 'vedi il mio CV',
      tabs: {
        experience: 'esperienza',
        projects: 'progetti',
        tools: 'strumenti',
      },
      experienceTitle: 'anni di esperienza',
      experienceNote: 'valori da definire (nessun dato validato)',
      experienceRows: [
        'Reti / Corrente debole',
        'Domotica',
        'Sviluppo',
        'Linux / Server',
        'IA e automazione',
      ],
      projectsTitle: 'progetti in corso e in produzione',
      toolsTitle: 'tecnologie e strumenti',
      toolsMore: 'vedi tutte le tecnologie',
    },
    mission: {
      eyebrow: '// la mia missione',
      title: 'Tecnologie al servizio del lavoro sul campo',
      text: 'Aiutare i professionisti a risparmiare tempo, mettere in sicurezza i propri impianti e semplificare la quotidianità, con soluzioni affidabili e durature.',
      action: 'parliamo del vostro progetto',
    },
  },

  projects: {
    eyebrow: '// i miei progetti',
    title: ['Progetti concreti', 'per esigenze reali.'],
    lead: 'Soluzioni open-source, pragmatiche e documentate per artigiani, microimprese, PMI e contesti tecnici.',
    heroVisualLines: ['# idee', 'progettazione', 'sviluppo', 'distribuzione', 'manutenzione'],
    filtersLabel: 'Filtra i progetti per categoria',
    linkLabel: 'vedi il progetto',
    repositoryLabel: 'GitHub',
    pendingNote:
      'I link ai progetti e ai repository saranno attivati quando gli URL saranno convalidati.',
    empty: 'Nessun progetto in questa categoria per ora.',
    categories: {
      infrastructure: 'Infrastruttura',
      ia: 'IA e automazione',
      developpement: 'Sviluppo',
      domotique: 'Domotica',
      securite: 'Sicurezza',
    },
    items: {
      smartBtpProgest: {
        status: 'In sviluppo',
        description:
          'SaaS di gestione progetti per artigiani e PMI del settore edile: pianificazione, monitoraggio, budget, collaborazione.',
        visualLines: [
          '# gestione progetti edili',
          '→ pianificazione',
          '→ avanzamento del cantiere',
          '→ budget',
          '→ collaborazione',
        ],
      },
      versutusIa: {
        status: 'In produzione',
        description:
          'Piattaforma IA locale: LLM, RAG, strumenti, interfacce web e agenti. Open-source.',
        visualLines: [
          '# IA locale · privata · utile',
          '→ cambiare modello',
          '→ interrogare documenti',
          '→ automatizzare attività',
          '→ mantenere il controllo',
        ],
      },
      cockpitServers: {
        status: 'In produzione',
        description:
          'Infrastruttura server: mail, DNS, reverse proxy, backup e supervisione.',
        visualLines: [
          '# servizi e supervisione',
          '→ mail',
          '→ dns',
          '→ reverse proxy',
          '→ backup',
        ],
      },
      domotique: {
        status: 'In produzione',
        description:
          'Integrazione di soluzioni domotiche per abitazioni e terziario (KNX, Home Assistant…).',
        visualLines: ['# comfort ed energia', '→ illuminazione', '→ tapparelle', '→ riscaldamento', '→ scenari'],
      },
      outilsScripts: {
        status: 'In corso',
        description: 'Script e strumenti di automazione per risparmiare tempo ogni giorno.',
        visualLines: ['# automazione', '→ backup', '→ script', '→ distribuzione', '→ documentazione'],
      },
      securiteReseaux: {
        status: 'In produzione',
        description: 'Reti, videosorveglianza, rilevazione incendi e controllo accessi.',
        visualLines: [
          '# rete e sicurezza',
          '→ videosorveglianza',
          '→ controllo accessi',
          '→ rilevazione incendi',
          '→ supervisione',
        ],
      },
    },
    cta: {
      eyebrow: '// un’idea di progetto?',
      title: 'Parliamo della vostra esigenza',
      text: 'Vi accompagno dall’idea al deploy, con soluzioni semplici, affidabili e adatte al vostro contesto.',
      action: 'contattami',
    },
  },

  skills: {
    eyebrow: '// le mie competenze',
    title: ['Competenze', 'al servizio dei vostri', 'progetti.'],
    lead: 'Un profilo tecnico e versatile per progettare, distribuire e mantenere soluzioni affidabili, semplici e durature.',
    visualLines: ['# metodo di lavoro', 'pianifica', 'codice', 'test', 'deploy', 'migliora'],
    quote: 'Strumenti utili, non soluzioni complicate.',
    filtersLabel: 'Filtra le competenze per ambito',
    empty: 'Nessun elemento in questo ambito per ora.',
    metrics: {
      experience: 'anni di esperienza',
      projects: 'progetti realizzati',
      passion: 'passione per il campo e la tecnologia',
    },
    domains: {
      informatique: 'Informatica',
      domotique: 'Domotica',
      reseaux: 'Reti e sicurezza',
      developpement: 'Sviluppo',
      outils: 'Strumenti',
      soft: 'Soft skills',
    },
    keySkills: {
      title: 'Competenze chiave',
      subtitle: 'Una base solida e complementare, sul campo e informatica.',
      items: {
        infrastructure: {
          title: 'Infrastruttura',
          text: 'Server, virtualizzazione, Docker, supervisione.',
        },
        domotique: {
          title: 'Domotica',
          text: 'KNX, Home Assistant, integrazioni su misura.',
        },
        reseaux: {
          title: 'Reti e sicurezza',
          text: 'Reti, firewall, VPN, supervisione, backup.',
        },
        developpement: {
          title: 'Sviluppo',
          text: 'Python, Bash, JavaScript, automazione, API.',
        },
        basesDonnees: {
          title: 'Database',
          text: 'PostgreSQL, SQL, modellazione, backup.',
        },
        support: {
          title: 'Assistenza e consulenza',
          text: 'Audit, installazione, formazione, assistenza.',
        },
      },
    },
    mastery: {
      title: 'Livelli di padronanza',
      subtitle: 'Una visione chiara dei miei ambiti di competenza.',
      note: 'Livelli da definire: nessun dato validato per il momento.',
      rows: {
        reseaux: 'Reti / Corrente debole',
        linux: 'Linux / Server',
        domotique: 'Domotica (KNX / HA)',
        securite: 'Sicurezza',
        developpement: 'Sviluppo (Python / JS)',
        basesDonnees: 'Database',
        ia: 'IA e automazione',
      },
    },
    technologies: {
      title: 'Tecnologie e strumenti',
      subtitle: 'Gli strumenti che uso ogni giorno.',
      groups: {
        systemes: 'sistemi',
        reseaux: 'reti e sicurezza',
        developpement: 'sviluppo',
        domotique: 'domotica',
        basesDonnees: 'database',
        ia: 'ia e automazione',
      },
    },
    certifications: {
      title: 'Certificazioni e formazioni',
      subtitle: 'Un percorso di apprendimento continuo.',
      note: 'Denominazioni e periodi da confermare prima della pubblicazione.',
      items: {
        linux: { title: 'Linux (Debian)', text: 'Esperienza avanzata' },
        knx: { title: 'KNX', text: 'Formazione e progetti sul campo' },
        securite: { title: 'Sicurezza reti', text: 'Autoformazione continua' },
        python: { title: 'Python', text: 'Progetti professionali' },
        docker: { title: 'Docker e container', text: 'Progetti e distribuzioni' },
      },
    },
    cta: {
      eyebrow: '// sviluppare insieme',
      title: 'Un progetto? Parliamo delle vostre esigenze.',
      text: 'Vi accompagno dall’idea alla messa in produzione, con soluzioni adatte e pragmatiche.',
      action: 'contattami',
    },
  },

  about: {
    eyebrow: '// chi sono',
    title: ['Un percorso,', 'una passione,', 'soluzioni.'],
    lead: 'Tecnico in corrente debole, sviluppatore e integratore, accompagno artigiani, microimprese e PMI nell’adozione di soluzioni affidabili, semplici e durature, basandomi sull’open-source e sull’esperienza sul campo.',
    primaryCta: 'contattami',
    cvCta: 'scarica il mio CV',
    visualLines: [
      '# filo conduttore',
      'capire l’esigenza',
      'progettare con semplicità',
      'distribuire e documentare',
      'trasmettere',
      '# idee · codice · test · impatto reale',
    ],
    quote: 'Strumenti utili, non soluzioni complicate.',
    metrics: {
      experience: 'anni di esperienza sul campo e informatica',
      projects: 'progetti realizzati (microimprese, PMI, artigiani)',
      passion: 'passione e impegno per soluzioni utili',
      goal: 'obiettivo: un digitale più semplice',
    },
    story: {
      eyebrow: '// la mia storia',
      title: 'Un percorso versatile',
      lead: 'Opero nei settori delle reti, della sicurezza, della domotica e dello sviluppo. Questa diversità mi permette di avere una visione globale e concreta delle esigenze, dal campo alla messa in produzione.',
      timeline: {
        diploma: {
          title: 'Gestione di sistemi e reti',
          text: 'Formazione in informatica e reti.',
        },
        technician: {
          title: 'Tecnico in corrente debole',
          text: 'Reti, sicurezza antincendio, controllo accessi, videocitofonia, domotica.',
        },
        integrator: {
          title: 'Integratore e sviluppatore',
          text: 'Soluzioni su misura per artigiani e PMI. Automazione, script, strumenti interni.',
        },
        personal: {
          title: 'Progetti personali e condivisione',
          text: 'Versutus-IA, Smart BTP ProGest, domotica e sicurezza.',
        },
      },
    },
    values: {
      title: 'I miei valori',
      items: [
        'Semplicità prima della complessità',
        'Soluzioni concrete e durature',
        'Open-source e indipendenza',
        'Condivisione delle conoscenze',
        'Ascolto e accompagnamento',
        'Qualità e affidabilità',
        'Miglioramento continuo',
      ],
    },
    motivation: {
      title: 'Ciò che mi motiva',
      paragraphs: [
        'Aiutare i professionisti a risparmiare tempo, mettere in sicurezza i propri impianti e semplificare la quotidianità, basandomi su tecnologie aperte e collaudate.',
        'Credo in un digitale sobrio, utile e controllato, al servizio del campo.',
      ],
      quote: 'Le soluzioni migliori sono quelle che scompaiono dietro l’uso.',
    },
    wideVisualLines: [
      '# imparare · condividere · costruire',
      'linux',
      'reti',
      'domotica',
      'sicurezza',
      'python',
      'open source',
    ],
    cta: {
      eyebrow: '// e adesso?',
      title: 'Un progetto? Parliamone.',
      text: 'Che si tratti di una consulenza, di un’integrazione o dello sviluppo di una soluzione su misura, sono a vostra disposizione.',
      action: 'contattami',
    },
  },

  contact: {
    eyebrow: '// contatti',
    title: ['Parliamo', 'del vostro progetto.'],
    lead: 'Un’idea, un’esigenza, una domanda? Sono a vostra disposizione per parlare dei vostri progetti e trovare insieme soluzioni concrete, semplici e adatte al vostro contesto.',
    highlights: {
      response: { title: 'Risposta rapida', text: 'tempi da definire' },
      exchange: { title: 'Scambio senza impegno', text: '' },
      confidential: { title: 'Riservato e sicuro', text: '' },
    },
    visualLines: [
      '# progettare · distribuire · semplificare',
      'capire l’esigenza',
      'proporre una soluzione chiara',
      'preventivare senza sorprese',
      'distribuire e documentare',
      'restare disponibile',
    ],
    form: {
      title: 'Inviatemi un messaggio',
      subtitle: 'Vi rispondo il prima possibile.',
      requiredMark: '*',
      optionalMark: '(facoltativo)',
      fields: {
        name: 'Nome',
        email: 'Email',
        company: 'Azienda',
        subject: 'Oggetto',
        message: 'Il vostro messaggio',
      },
      subjectPlaceholder: 'Scegli un oggetto',
      subjects: ['Infrastruttura', 'Domotica', 'Reti e sicurezza', 'Sviluppo', 'Altro'],
      submit: 'Invia il messaggio',
      notice:
        'Invio disattivato: nessun servizio di invio è collegato per il momento. Il modulo è pronto per essere collegato.',
    },
    methods: {
      title: 'Altri modi per contattarmi',
      subtitle: 'Scegliete il canale che preferite.',
      items: {
        email: { title: 'Email', value: 'indirizzo da inserire' },
        phone: { title: 'Telefono', value: 'numero da inserire' },
        location: { title: 'Ubicazione', value: 'da definire' },
      },
    },
    zone: {
      title: 'Zona di intervento',
      subtitle: 'In loco o da remoto.',
      items: ['Zona geografica da definire', 'Telemanutenzione', 'Progetti da remoto'],
      badge: 'Soluzioni locali, per un impatto duraturo.',
    },
    cta: {
      eyebrow: '// un progetto in mente?',
      title: 'Trasformiamo le vostre idee in soluzioni concrete.',
      text: 'Che si tratti di una consulenza, di un’installazione, di uno sviluppo o di una collaborazione, parliamone con semplicità.',
      note: 'A presto!',
    },
  },
};

export default it;
