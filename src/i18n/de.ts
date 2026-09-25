import type { Translations } from './fr';

/** Textes allemands. */
const de: Translations = {
  meta: {
    title: 'Persönliche Website',
    description: 'Persönliche Website — Projekte, Kompetenzen und Kontakt.',
  },

  a11y: {
    skipToContent: 'Zum Inhalt springen',
    sectionNav: 'Abschnitte der Website',
    headerNav: 'Website-Navigation',
    footerNav: 'Fußzeilen-Links',
    backToTop: 'Zurück nach oben',
    languageGroup: 'Sprachauswahl',
  },

  /** Menü für Fensterbefehle (Schaltfläche ⋯). */
  window: {
    trigger: 'Fensterbefehle',
    groups: {
      window: 'Fenster',
      display: 'Anzeige',
      share: 'Teilen',
    },
    items: {
      fullscreen: 'Vollbild',
      exitFullscreen: 'Vollbild beenden',
      print: 'Seite drucken',
      zoom: 'Zoom',
      zoomOut: 'Verkleinern',
      zoomIn: 'Vergrößern',
      zoomReset: 'Originalgröße',
      copyLink: 'Link kopieren',
      unavailable: 'nicht verfügbar',
    },
    status: {
      fullscreenRefused: 'Vollbild vom Browser abgelehnt.',
      linkCopied: 'Link der Seite kopiert.',
      copyFailed: 'Kopieren nicht möglich: Berechtigung verweigert.',
    },
  },

  sections: {
    accueil: 'Startseite',
    projets: 'Projekte',
    competences: 'Kompetenzen',
    'a-propos': 'Über mich',
    contact: 'Kontakt',
  },

  headerNav: {
    accueil: 'startseite',
    projets: 'projekte',
    competences: 'kompetenzen',
    'a-propos': 'über mich',
  },

  footer: {
    tagline: 'Nützliche Werkzeuge, keine überladenen Lösungen.',
    note: 'Alle Texte und Zahlen dieser Version sind vorläufig.',
    links: {
      github: 'github',
      linkedin: 'linkedin',
      contact: 'kontakt',
    },
  },

  common: {
    contactCta: 'kontakt aufnehmen',
    pendingValue: '—',
    pendingPeriod: 'Zeitraum noch anzugeben',
    linkPending: 'Link noch festzulegen',
    documentPending: 'Dokument noch bereitzustellen',
    all: 'Alle',
    overview: 'Überblick',
    copy: 'kopieren',
  },

  visuals: {
    alt: {
      projectsHero: 'Technischer Arbeitsplatz: Code-Bildschirme, Pflanze und Tasse',
      skillsHero: 'Technischer Schreibtisch: zwei Code-Bildschirme, Methodenposter und Tasse',
      aboutHero: 'Schreibtisch mit Laptop, Pflanze, Poster und Tasse',
      aboutWorkshop: 'Werkstatt: Werkzeugwand, Fachbücher, Notizbildschirm und Tasse',
      contactHero: 'Arbeitsplatz: Laptop, Tasse und Notizbuch',
      projectCockpitServers: 'Überwachte Server-Racks',
      projectDomotique: 'Wandtablet für Smart Home zur Steuerung der Hausgeräte',
      projectSecuriteReseaux: 'Überwachungskamera an einer Fassade',
    },
  },

  home: {
    eyebrow: '// konkrete lösungen für ihre projekte',
    title: ['Techniker.', 'Entwickler.', 'Integrator.'],
    lead: 'Ich begleite Handwerksbetriebe sowie kleine und mittlere Unternehmen bei der Umsetzung zuverlässiger, einfacher und quelloffener Lösungen: Netzwerke, Smart Home, Sicherheit, Brandmeldetechnik, KI und Webanwendungen.',
    primaryCta: 'meine projekte ansehen',
    secondaryCta: 'kontakt aufnehmen',
    visualLines: [
      '# Konkrete Anforderungen',
      'Nutzung analysieren',
      'Lösungen entwerfen',
      'sauber bereitstellen',
      'langfristig begleiten',
      'Wissen teilen',
      'open-source bleiben',
    ],
    quote: 'Nützliche Werkzeuge, keine überladenen Lösungen.',
    domains: {
      infrastructure: {
        title: 'Infrastruktur',
        text: 'Netzwerke, Glasfaser, Sicherheit, Server und Monitoring.',
      },
      domotique: {
        title: 'Smart Home',
        text: 'Vernetzte Lösungen für Wohn- und Gewerbegebäude.',
      },
      developpement: {
        title: 'Entwicklung',
        text: 'Webanwendungen, Automatisierungen, KI.',
      },
      support: {
        title: 'Support & Beratung',
        text: 'Audit, Installation, Schulung, Unterstützung.',
      },
    },
    domainLink: 'mehr erfahren',
    profile: {
      eyebrow: '// kompetenzen',
      title: 'Ein vielseitiges Profil',
      lead: 'Eine Mischung aus Praxis und IT für vollständige und pragmatische Lösungen.',
      checks: [
        'Schwachstrom & Netzwerke',
        'Brandmeldetechnik',
        'Smart Home',
        'Linux & Server',
        'Docker & Virtualisierung',
        'Programmierung (Python, JS)',
        'Datenbanken',
        'Lokale KI & RAG',
        'Überwachung & Monitoring',
        'Open Source',
      ],
      cvCta: 'meinen lebenslauf ansehen',
      tabs: {
        experience: 'erfahrung',
        projects: 'projekte',
        tools: 'werkzeuge',
      },
      experienceTitle: 'jahre erfahrung',
      experienceNote: 'werte noch anzugeben (keine zahl bestätigt)',
      experienceRows: [
        'Netzwerke / Schwachstrom',
        'Smart Home',
        'Entwicklung',
        'Linux / Server',
        'KI & Automatisierung',
      ],
      projectsTitle: 'projekte in entwicklung und produktion',
      toolsTitle: 'technologien & werkzeuge',
      toolsMore: 'alle technologien ansehen',
    },
    mission: {
      eyebrow: '// meine mission',
      title: 'Technologien im Dienst der Praxis',
      text: 'Professionellen helfen, Zeit zu gewinnen, ihre Anlagen zu sichern und ihren Alltag zu vereinfachen, mit zuverlässigen und dauerhaften Lösungen.',
      action: 'sprechen wir über ihr projekt',
    },
  },

  projects: {
    eyebrow: '// meine projekte',
    title: ['Konkrete Projekte', 'für echte Anforderungen.'],
    lead: 'Open-Source-Lösungen, pragmatisch und dokumentiert für Handwerksbetriebe, KMU und technische Umgebungen.',
    heroVisualLines: ['# Ideen', 'Konzeption', 'Entwicklung', 'Bereitstellung', 'Wartung'],
    filtersLabel: 'Projekte nach Kategorie filtern',
    linkLabel: 'projekt ansehen',
    repositoryLabel: 'GitHub',
    pendingNote:
      'Die Links zu den Projekten und Repositories werden aktiviert, sobald die URLs validiert sind.',
    empty: 'Noch keine Projekte in dieser Kategorie.',
    categories: {
      infrastructure: 'Infrastruktur',
      ia: 'KI & Automatisierung',
      developpement: 'Entwicklung',
      domotique: 'Smart Home',
      securite: 'Sicherheit',
    },
    items: {
      smartBtpProgest: {
        status: 'In Entwicklung',
        description:
          'SaaS für Projektmanagement für Handwerksbetriebe und KMU im Bauwesen: Planung, Nachverfolgung, Budget, Zusammenarbeit.',
        visualLines: [
          '# Bauprojektmanagement',
          '→ Planung',
          '→ Baustellenverfolgung',
          '→ Budget',
          '→ Zusammenarbeit',
        ],
      },
      versutusIa: {
        status: 'In Produktion',
        description:
          'Lokale KI-Plattform: LLM, RAG, Werkzeuge, Weboberflächen und Agenten. Open Source.',
        visualLines: [
          '# Lokale KI · privat · nützlich',
          '→ Modell wechseln',
          '→ Dokumente abfragen',
          '→ Aufgaben automatisieren',
          '→ Kontrolle behalten',
        ],
      },
      cockpitServers: {
        status: 'In Produktion',
        description:
          'Serverinfrastruktur: Mail, DNS, Reverse Proxy, Backups und Monitoring.',
        visualLines: [
          '# Dienste & Monitoring',
          '→ mail',
          '→ dns',
          '→ reverse proxy',
          '→ Backups',
        ],
      },
      domotique: {
        status: 'In Produktion',
        description:
          'Integration von Smart-Home-Lösungen für Wohn- und Gewerbegebäude (KNX, Home Assistant…).',
        visualLines: ['# Komfort & Energie', '→ Beleuchtung', '→ Rollläden', '→ Heizung', '→ Szenarien'],
      },
      outilsScripts: {
        status: 'In Arbeit',
        description: 'Skripte und Automatisierungswerkzeuge für Zeitgewinn im Alltag.',
        visualLines: ['# Automatisierung', '→ Backups', '→ Skripte', '→ Bereitstellung', '→ Dokumentation'],
      },
      securiteReseaux: {
        status: 'In Produktion',
        description:
          'Netzwerke, Videoüberwachung, Brandmeldetechnik und Zutrittskontrolle.',
        visualLines: [
          '# Netzwerk & Sicherheit',
          '→ Videoüberwachung',
          '→ Zutrittskontrolle',
          '→ Brandmeldetechnik',
          '→ Monitoring',
        ],
      },
    },
    cta: {
      eyebrow: '// eine projektidee?',
      title: 'Sprechen wir über Ihr Anliegen',
      text: 'Ich begleite Sie von der Idee bis zur Bereitstellung, mit einfachen, zuverlässigen Lösungen, die zu Ihrer Umgebung passen.',
      action: 'kontakt aufnehmen',
    },
  },

  skills: {
    eyebrow: '// meine kompetenzen',
    title: ['Kompetenzen', 'im Dienst Ihrer', 'Projekte.'],
    lead: 'Ein technisches und vielseitiges Profil, um zuverlässige, einfache und dauerhafte Lösungen zu entwerfen, bereitzustellen und zu warten.',
    visualLines: ['# Arbeitsweise', 'plan', 'code', 'test', 'deploy', 'improve'],
    quote: 'Nützliche Werkzeuge, keine überladenen Lösungen.',
    filtersLabel: 'Kompetenzen nach Bereich filtern',
    empty: 'Noch keine Einträge in diesem Bereich.',
    metrics: {
      experience: 'jahre erfahrung',
      projects: 'umgesetzte projekte',
      passion: 'leidenschaft für praxis & tech',
    },
    domains: {
      informatique: 'IT',
      domotique: 'Smart Home',
      reseaux: 'Netzwerke & Sicherheit',
      developpement: 'Entwicklung',
      outils: 'Werkzeuge',
      soft: 'Soft Skills',
    },
    keySkills: {
      title: 'Kernkompetenzen',
      subtitle: 'Ein solides und ergänzendes Fundament aus Praxis und IT.',
      items: {
        infrastructure: {
          title: 'Infrastruktur',
          text: 'Server, Virtualisierung, Docker, Monitoring.',
        },
        domotique: {
          title: 'Smart Home',
          text: 'KNX, Home Assistant, maßgeschneiderte Integrationen.',
        },
        reseaux: {
          title: 'Netzwerke & Sicherheit',
          text: 'Netzwerke, Firewall, VPN, Monitoring, Backups.',
        },
        developpement: {
          title: 'Entwicklung',
          text: 'Python, Bash, JavaScript, Automatisierung, APIs.',
        },
        basesDonnees: {
          title: 'Datenbanken',
          text: 'PostgreSQL, SQL, Modellierung, Backups.',
        },
        support: {
          title: 'Support & Beratung',
          text: 'Audit, Installation, Schulung, Unterstützung.',
        },
      },
    },
    mastery: {
      title: 'Kenntnisstufen',
      subtitle: 'Ein klarer Überblick über meine Fachgebiete.',
      note: 'Stufen noch anzugeben: bisher keine Zahl bestätigt.',
      rows: {
        reseaux: 'Netzwerke / Schwachstrom',
        linux: 'Linux / Server',
        domotique: 'Smart Home (KNX / HA)',
        securite: 'Sicherheit',
        developpement: 'Entwicklung (Python / JS)',
        basesDonnees: 'Datenbanken',
        ia: 'KI & Automatisierung',
      },
    },
    technologies: {
      title: 'Technologien & Werkzeuge',
      subtitle: 'Die Werkzeuge, die ich täglich nutze.',
      groups: {
        systemes: 'systeme',
        reseaux: 'netzwerke & sicherheit',
        developpement: 'entwicklung',
        domotique: 'smart home',
        basesDonnees: 'datenbanken',
        ia: 'ki & automatisierung',
      },
    },
    certifications: {
      title: 'Zertifizierungen & Schulungen',
      subtitle: 'Ein kontinuierlicher Lernprozess.',
      note: 'Bezeichnungen und Zeiträume vor der Veröffentlichung zu bestätigen.',
      items: {
        linux: { title: 'Linux (Debian)', text: 'Fortgeschrittene Erfahrung' },
        knx: { title: 'KNX', text: 'Schulung & Praxisprojekte' },
        securite: { title: 'Netzwerksicherheit', text: 'Kontinuierliche Selbstschulung' },
        python: { title: 'Python', text: 'Berufliche Projekte' },
        docker: { title: 'Docker & Container', text: 'Projekte und Bereitstellungen' },
      },
    },
    cta: {
      eyebrow: '// gemeinsam entwickeln',
      title: 'Ein Projekt? Sprechen wir über Ihre Anforderungen.',
      text: 'Ich begleite Sie von der Idee bis zur Produktivsetzung, mit passenden und pragmatischen Lösungen.',
      action: 'kontakt aufnehmen',
    },
  },

  about: {
    eyebrow: '// über mich',
    title: ['Ein Werdegang,', 'eine Leidenschaft,', 'Lösungen.'],
    lead: 'Als Schwachstromtechniker, Entwickler und Integrator begleite ich Handwerksbetriebe sowie kleine und mittlere Unternehmen bei der Umsetzung zuverlässiger, einfacher und dauerhafter Lösungen, gestützt auf Open Source und Praxiserfahrung.',
    primaryCta: 'kontakt aufnehmen',
    cvCta: 'lebenslauf herunterladen',
    visualLines: [
      '# roter Faden',
      'den Bedarf verstehen',
      'einfach entwerfen',
      'bereitstellen und dokumentieren',
      'weitergeben',
      '# Ideen · Code · Tests · echte Wirkung',
    ],
    quote: 'Nützliche Werkzeuge, keine überladenen Lösungen.',
    metrics: {
      experience: 'jahre erfahrung in praxis & IT',
      projects: 'umgesetzte projekte (KMU, handwerksbetriebe)',
      passion: 'leidenschaft & engagement für nützliche lösungen',
      goal: 'ziel: eine einfachere digitalisierung',
    },
    story: {
      eyebrow: '// meine geschichte',
      title: 'Ein vielseitiger Werdegang',
      lead: 'Ich bin in den Bereichen Netzwerke, Sicherheit, Smart Home und Entwicklung tätig. Diese Vielfalt gibt mir einen ganzheitlichen und konkreten Blick auf den Bedarf, von der Praxis bis zur Produktivsetzung.',
      timeline: {
        diploma: {
          title: 'System- und Netzwerkverwaltung',
          text: 'Ausbildung in Informatik und Netzwerken.',
        },
        technician: {
          title: 'Schwachstromtechniker',
          text: 'Netzwerke, Brandschutz, Zutrittskontrolle, Türsprechanlagen, Smart Home.',
        },
        integrator: {
          title: 'Integrator & Entwickler',
          text: 'Maßgeschneiderte Lösungen für Handwerksbetriebe und KMU. Automatisierung, Skripte, interne Werkzeuge.',
        },
        personal: {
          title: 'Eigene Projekte & Wissenstransfer',
          text: 'Versutus-IA, Smart BTP ProGest, Smart Home und Sicherheit.',
        },
      },
    },
    values: {
      title: 'Meine Werte',
      items: [
        'Einfachheit vor Komplexität',
        'Konkrete und dauerhafte Lösungen',
        'Open Source und Unabhängigkeit',
        'Wissensaustausch',
        'Zuhören und Begleiten',
        'Qualität und Zuverlässigkeit',
        'Kontinuierliche Verbesserung',
      ],
    },
    motivation: {
      title: 'Was mich antreibt',
      paragraphs: [
        'Professionellen helfen, Zeit zu sparen, ihre Anlagen zu sichern und ihren Alltag zu vereinfachen, gestützt auf offene und bewährte Technologien.',
        'Ich glaube an eine schlanke, nützliche und beherrschte Digitalisierung im Dienst der Praxis.',
      ],
      quote: 'Die besten Lösungen sind die, die hinter dem Nutzen verschwinden.',
    },
    wideVisualLines: [
      '# lernen · teilen · aufbauen',
      'linux',
      'netzwerke',
      'smart home',
      'sicherheit',
      'python',
      'open source',
    ],
    cta: {
      eyebrow: '// und jetzt?',
      title: 'Ein Projekt? Sprechen wir darüber.',
      text: 'Ob für eine Beratung, eine Integration oder die Entwicklung einer maßgeschneiderten Lösung, ich bin für Sie da.',
      action: 'kontakt aufnehmen',
    },
  },

  contact: {
    eyebrow: '// kontakt',
    title: ['Sprechen wir', 'über Ihr Projekt.'],
    lead: 'Eine Idee, ein Bedarf, eine Frage? Ich bin für Sie da, um über Ihre Projekte zu sprechen und gemeinsam konkrete, einfache Lösungen zu finden, die zu Ihrer Umgebung passen.',
    highlights: {
      response: { title: 'Schnelle Antwort', text: 'Reaktionszeit noch anzugeben' },
      exchange: { title: 'Unverbindlicher Austausch', text: '' },
      confidential: { title: 'Vertraulich und sicher', text: '' },
    },
    visualLines: [
      '# entwerfen · bereitstellen · vereinfachen',
      'den Bedarf verstehen',
      'eine klare Lösung vorschlagen',
      'ohne Überraschungen kalkulieren',
      'bereitstellen und dokumentieren',
      'verfügbar bleiben',
    ],
    form: {
      title: 'Senden Sie mir eine Nachricht',
      subtitle: 'Ich antworte Ihnen so schnell wie möglich.',
      requiredMark: '*',
      optionalMark: '(optional)',
      fields: {
        name: 'Name',
        email: 'E-Mail',
        company: 'Unternehmen',
        subject: 'Betreff',
        message: 'Ihre Nachricht',
      },
      subjectPlaceholder: 'Betreff auswählen',
      subjects: ['Infrastruktur', 'Smart Home', 'Netzwerke & Sicherheit', 'Entwicklung', 'Sonstiges'],
      submit: 'Nachricht senden',
      notice:
        'Versand deaktiviert: Derzeit ist kein Versanddienst verbunden. Das Formular ist bereit zum Anbinden.',
    },
    methods: {
      title: 'Weitere Kontaktmöglichkeiten',
      subtitle: 'Wählen Sie den Kanal, der Ihnen passt.',
      items: {
        email: { title: 'E-Mail', value: 'Adresse noch anzugeben' },
        phone: { title: 'Telefon', value: 'Nummer noch anzugeben' },
        location: { title: 'Standort', value: 'noch anzugeben' },
      },
    },
    zone: {
      title: 'Einsatzgebiet',
      subtitle: 'Vor Ort oder aus der Ferne.',
      items: ['Geografisches Gebiet noch anzugeben', 'Fernwartung', 'Remote-Projekte'],
      badge: 'Lokale Lösungen für eine nachhaltige Wirkung.',
    },
    cta: {
      eyebrow: '// ein projekt im kopf?',
      title: 'Machen wir aus Ihren Ideen konkrete Lösungen.',
      text: 'Ob Beratung, Installation, Entwicklung oder Zusammenarbeit, sprechen wir einfach darüber.',
      note: 'Bis bald!',
    },
  },
};

export default de;
