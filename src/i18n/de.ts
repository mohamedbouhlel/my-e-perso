import type { Translations } from './fr';

/** Textes allemands. */
const de: Translations = {
  meta: {
    title: 'Operius',
    description:
      'Operius — technische Lösungen von der Praxis bis zur Software: Netzwerke, Infrastruktur, Automatisierung, Entwicklung und KI.',
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
      appearance: 'Darstellung',
      share: 'Teilen',
    },
    /** Darstellung der Website (siehe `src/theme.ts`). */
    theme: {
      light: 'Hell',
      dark: 'Dunkel',
      system: 'System',
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
    legal: 'Nützliche, zuverlässige und beherrschbare Lösungen.',
    links: {
      github: 'github',
      linkedin: 'linkedin',
      contact: 'kontakt',
    },
  },

  common: {
    contactCta: 'kontakt aufnehmen',
    linkPending: 'Link noch festzulegen',
    all: 'Alle',
    copy: 'kopieren',
  },

  /** Alternativtexte der Foto-Visuals (siehe `src/content/visuals.ts`). */
  visuals: {
    alt: {
      projectsHero: 'Technischer Arbeitsplatz: Code-Bildschirme, Pflanze und Tasse',
      skillsHero: 'Technischer Schreibtisch: zwei Code-Bildschirme, Methodenposter und Tasse',
      aboutHero: 'Schreibtisch mit Laptop, Pflanze, Poster und Tasse',
      aboutWorkshop: 'Werkstatt: Werkzeugwand, Fachbücher, Notizbildschirm und Tasse',
      contactHero: 'Arbeitsplatz: Laptop, Tasse und Notizbuch',
      projectCockpitServers: 'Überwachte Server-Racks',
    },
  },

  home: {
    eyebrow: '// mein ansatz',
    title: ['Nicht mehr Technologie.', 'Die richtige Technologie.'],
    lead: [
      'Ich entwerfe und integriere technische Lösungen, die konkrete Probleme lösen — von der Praxis bis zur Software.',
      'Netzwerke, Sicherheit, Schwachstrom, Smart Home, Automatisierung, Entwicklung und KI: Zuerst verstehe ich den Bedarf, dann wähle ich die einfachste Lösung, die ihn wirklich beantwortet.',
    ],
    primaryCta: 'Projekte ansehen',
    secondaryCta: 'Über Ihr Anliegen sprechen',
    /** Methode im Hero-Panel: die vier Schritte der Redaktion V3. */
    visualLines: ['Verstehen', 'Vereinfachen', 'Bauen', 'Testen'],
    quote: 'Das Problem verstehen, bevor man die Technologie wählt.',
    domains: {
      infrastructure: {
        title: 'Infrastruktur',
        hook: 'Die Systeme am Laufen halten, auf denen alles andere aufbaut.',
        text: 'Netzwerke, Server, Linux, Dienste und Infrastruktur: eine zuverlässige, stimmige und wartbare Grundlage aufbauen.',
      },
      securite: {
        title: 'Sicherheit & Schwachstrom',
        hook: 'Technik mit der Realität vor Ort verbinden.',
        text: 'Detektion, Sicherheit, Schwachstrom und technische Systeme: Geräte integrieren, die unter realen Bedingungen funktionieren müssen.',
      },
      automatisation: {
        title: 'Automatisierung & Smart Home',
        hook: 'Systeme erledigen lassen, was automatisch möglich ist.',
        text: 'Überwachung, Automatisierung und Smart Home, um wiederkehrende Abläufe zu reduzieren und die Kontrolle zu verbessern.',
      },
      developpement: {
        title: 'Entwicklung & KI',
        hook: 'Bauen, wenn bestehende Werkzeuge den Bedarf nicht abdecken.',
        text: 'Anwendungen, Skripte, Werkzeuge und KI-Lösungen, wenn Entwicklung die passendere Antwort gibt als das Stapeln bestehender Software.',
      },
    },
    domainLink: 'mehr erfahren',
    approach: {
      eyebrow: '// warum dieser ansatz?',
      title: 'Weil ein Problem nicht immer mehr Technologie braucht.',
      lead: 'Ein System kann technisch anspruchsvoll und trotzdem schwer zu bedienen, zu warten oder weiterzuentwickeln sein.',
      stepsLead: 'Ich setze auf einen anderen Ansatz:',
      steps: ['Verstehen', 'Vereinfachen', 'Bauen', 'Testen'],
      closingLead: 'Das angestrebte Ergebnis ist nicht die beeindruckendste Lösung.',
      closing: 'Sondern eine nützliche, zuverlässige und beherrschbare Lösung.',
    },
    journey: {
      title: 'Von der Praxis zur Software',
      lead: 'Mein Werdegang vereint mehrere Bereiche, die sonst getrennt behandelt werden:',
      steps: ['Schwachstrom', 'Netzwerke', 'Systeme', 'Entwicklung', 'Automatisierung', 'KI'],
      closing:
        'Diese Kontinuität erlaubt es, ein Problem auf mehreren Ebenen zu betrachten und die Wechselwirkungen zwischen den Schichten zu verstehen.',
    },
    conviction: {
      eyebrow: '// eine überzeugung',
      title: 'Eine gute Lösung muss verständlich bleiben.',
      text: 'Wo es sinnvoll ist, setze ich auf offene Technologien und Lösungen, die man administrieren, diagnostizieren und weiterentwickeln kann, ohne unnötig von einer Blackbox abzuhängen. Die Werkzeuge sind ein Mittel. Das Ergebnis zählt.',
      action: 'Über Ihr Projekt sprechen',
    },
  },

  projects: {
    eyebrow: '// meine projekte',
    title: ['Konkrete Probleme.', 'Lösungen, die genau darauf antworten.'],
    lead: [
      'Die hier gezeigten Projekte sind keine Sammlung von Technologien.',
      'Sie zeigen eine Arbeitsweise: von einem Bedarf ausgehen, die Rahmenbedingungen verstehen, eine Lösung bauen und prüfen, ob sie wirklich funktioniert.',
    ],
    heroVisualLines: ['# Ideen', 'Konzeption', 'Entwicklung', 'Bereitstellung', 'Wartung'],
    filtersLabel: 'Projekte nach Kategorie filtern',
    linkLabel: 'projekt ansehen',
    repositoryLabel: 'GitHub',
    approachLabel: 'Ansatz',
    technologiesLabel: 'Technologien',
    pendingNote:
      'Die Links zu den Projekten und Repositories werden aktiviert, sobald die URLs validiert sind.',
    empty: 'Noch keine Projekte in dieser Kategorie.',
    categories: {
      infrastructure: 'Infrastruktur',
      ia: 'KI & Automatisierung',
      developpement: 'Entwicklung',
    },
    items: {
      smartBtpProgest: {
        status: 'In Entwicklung',
        hook: 'Die Verwaltung vereinfachen, ohne eine überladene Lösung zu bauen.',
        description:
          'Handwerksbetriebe und kleine Unternehmen brauchen Werkzeuge, die zu ihrer Tätigkeit passen, nicht unbedingt überladene Allzweckplattformen. Smart BTP ProGest erkundet einen Ansatz rund um Projekt, Planung, Aufgaben, Dokumente und Nachverfolgung.',
        approach:
          'Nur die im Alltag nützlichen Funktionen bauen und eine Architektur beibehalten, die einfach genug bleibt, um sich weiterzuentwickeln.',
        remark: '',
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
        hook: 'KI verstehen, statt sie nur zu benutzen.',
        description:
          'Versutus IA erkundet eine lokale KI-Infrastruktur, die Modelle, API, RAG, Speicher und Werkzeuge zusammenführt. Das Ziel ist, die gesamte Kette zu beherrschen: Installation, Ausführung, Integration, Messung und Diagnose.',
        approach:
          'Reproduzierbares Experimentieren und das Verständnis der Funktionsweise bevorzugen, statt eine undurchsichtige Lösung zu verwenden.',
        remark: '',
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
        hook: 'Eine Infrastruktur ist erst zuverlässig, wenn ihre Komponenten zusammenwirken.',
        description:
          'DNS, Mail, Zertifikate, Reverse Proxy, Docker, Netzwerk und Webdienste müssen ein stimmiges System bilden.',
        approach:
          'Eine Infrastruktur zu administrieren heißt nicht einfach, Software zu installieren, sondern ihre Wechselwirkungen und Abhängigkeiten zu verstehen.',
        remark: '',
        visualLines: [
          '# Dienste & Monitoring',
          '→ mail',
          '→ dns',
          '→ reverse proxy',
          '→ Backups',
        ],
      },
      outilsAutomatisations: {
        status: 'In Arbeit',
        hook: 'Überflüssige Vorgänge entfernen.',
        description:
          'Skripte, Administrationswerkzeuge und Automatisierungen reduzieren wiederkehrende Aufgaben und machen manche Abläufe zuverlässiger.',
        approach: 'Automatisierung ist aber kein Selbstzweck.',
        remark:
          'Wenn das Mittel komplizierter ist als das Problem, sollte man wahrscheinlich das Mittel überdenken.',
        visualLines: [
          '# Automatisierung',
          '→ Backups',
          '→ Skripte',
          '→ Bereitstellung',
          '→ Dokumentation',
        ],
      },
    },
    cta: {
      eyebrow: '// was diese projekte gemeinsam haben',
      title: 'Analysieren. Vereinfachen. Bauen. Testen.',
      text: 'Diese Methode ist der rote Faden, mehr noch als die verwendeten Technologien.',
      action: 'Über Ihr Projekt sprechen',
    },
  },

  skills: {
    eyebrow: '// meine kompetenzen',
    title: ['Mehrere Schichten', 'eines Problems verstehen.'],
    lead: [
      'Eine technische Kompetenz hat erst dann Wert, wenn sie hilft, etwas zu lösen.',
      'Mein Profil deckt mehrere Ebenen ab, von der Hardware und den Installationen bis zur Software und zur Automatisierung.',
    ],
    quote: 'Das ist eine nützliche, zuverlässige und beherrschbare Lösung.',
    domains: {
      terrain: {
        title: 'Praxis',
        subtitle: 'Schwachstrom · Sicherheit · Detektion · Smart Home',
        text: 'Erfahrung direkt aus der Arbeit mit technischen Anlagen und ihren realen Anforderungen. Das System muss vor Ort funktionieren, nutzbar und diagnostizierbar sein.',
      },
      infrastructure: {
        title: 'Infrastruktur',
        subtitle: 'Netzwerke · Linux · Server · Docker',
        text: 'Systeme entwerfen, administrieren und diagnostizieren, die Dienste am Laufen halten. Das Ziel ist nicht, Komponenten anzuhäufen, sondern eine Infrastruktur zu bauen, die zu ihrem Einsatzzweck passt.',
      },
      developpement: {
        title: 'Entwicklung',
        subtitle: 'Anwendungen · Skripte · Automatisierung',
        text: 'Entwickeln, wenn bestehende Werkzeuge einen Bedarf nicht richtig abdecken können. Code ist ein Mittel, um eine Einschränkung aufzuheben, kein Selbstzweck.',
      },
      ia: {
        title: 'KI',
        subtitle: 'Lokale Modelle · RAG · Integration · Automatisierung',
        text: 'Die Möglichkeiten der KI ausloten und dabei die Kontrolle über die technische Umgebung behalten. Zu verstehen, was hinter der Oberfläche geschieht, gehört zur Arbeit.',
      },
    },
    technologies: {
      title: 'Technologien',
      subtitle: 'Die Werkzeuge ändern sich. Die Prinzipien bleiben.',
      note: 'Diese Liste nennt Technologien, die tatsächlich in verschiedenen Projekten eingesetzt werden. Sie ist kein Versprechen, jede davon für jeden Bedarf zu verwenden.',
    },
    /** Verweis auf den Beleg: die oben genannten Technologien werden in den Projekten eingesetzt. */
    projectsLink: 'Projekte ansehen',
    cta: {
      eyebrow: '// was zählt',
      title:
        'Das Problem verstehen. Das richtige Technologieniveau wählen. Etwas Wartbares bauen.',
      action: 'Über Ihr Projekt sprechen',
    },
  },

  about: {
    eyebrow: '// über mich',
    title: ['Ein Werdegang zwischen', 'Praxis und Digitalem.'],
    lead: [
      'Mein Werdegang folgte nicht einer einzigen Fachrichtung.',
      'Er hat sich nach und nach um einen einzigen Bedarf entwickelt: zu verstehen, wie Systeme funktionieren und wie man sie zusammenbringt.',
    ],
    primaryCta: 'Über Ihr Projekt sprechen',
    quote: 'Eine gute Lösung muss verständlich bleiben.',
    journey: {
      eyebrow: '// werdegang',
      title: 'Von der Praxis zur Software',
      intros: [
        'Der Schwachstrom hat mir etwas Wesentliches beigebracht:',
        'Netzwerke und Systeme haben eine weitere Dimension ergänzt:',
        'Die Entwicklung hat ein weiteres Werkzeug gebracht:',
        'Automatisierung und KI eröffnen heute eine neue Möglichkeit:',
      ],
      lessons: [
        'eine Lösung muss in der realen Welt funktionieren.',
        'Komponenten müssen miteinander kommunizieren und administrierbar bleiben.',
        'was fehlt, lässt sich selbst bauen.',
        'mehr erreichen, ohne zwangsläufig mehr Komplexität hinzuzufügen.',
      ],
    },
    profile: {
      title: 'Ein hybrides Profil',
      lead: 'Ich kann dasselbe Problem aus mehreren Ebenen betrachten:',
      layers: ['Installation', 'Netzwerk', 'System', 'Software', 'Automatisierung'],
      paragraphs: [
        'Das heißt nicht, dass man immer auf allen diesen Ebenen eingreifen muss.',
        'Es heißt, dass man verstehen kann, wo das Problem tatsächlich liegt, bevor man entscheidet, wie man es angeht.',
      ],
    },
    principles: {
      title: 'Was ich bevorzuge',
      items: {
        simplicity: {
          title: 'Nützliche Einfachheit.',
          text: 'Eine Lösung ist nicht besser, weil sie mehr Funktionen hat.',
        },
        mastery: {
          title: 'Beherrschbarkeit.',
          text: 'Zu verstehen, wie ein System funktioniert, erleichtert Betrieb und Weiterentwicklung.',
        },
        proportion: {
          title: 'Angemessenheit.',
          text: 'Eine kleine Schwierigkeit rechtfertigt nicht unbedingt eine große Architektur.',
        },
        openness: {
          title: 'Offenheit.',
          text: 'Wo es sinnvoll ist, erlauben offene Technologien, bestimmte Abhängigkeiten zu begrenzen und mehr Kontrolle zu behalten.',
        },
      },
    },
    cta: {
      eyebrow: '// fazit',
      title: 'Lösungen bauen, die man auch morgen noch versteht.',
      text: 'Das ist wahrscheinlich das beste Kriterium für eine technische Lösung. Nicht die Zahl ihrer Funktionen. Nicht die Neuheit ihrer Technologie. Sondern ihre Fähigkeit, auf Dauer nützlich, zuverlässig und beherrschbar zu bleiben.',
      action: 'Über Ihr Projekt sprechen',
    },
  },

  contact: {
    eyebrow: '// kontakt',
    title: ['Sie haben ein technisches Problem?', 'Verstehen wir es zuerst.'],
    lead: ['Sie müssen die Lösung nicht kennen, bevor Sie Kontakt aufnehmen.'],
    listLead: 'Beschreiben Sie einfach:',
    list: [
      'was nicht funktioniert',
      'was Sie verbessern möchten',
      'was Sie aufbauen möchten',
      'oder einfach das, was Sie verstehen möchten.',
    ],
    expectations: {
      title: 'Was Sie erwarten können',
      items: {
        noPaste: {
          title: 'Keine aufgesetzte Lösung.',
          text: 'Ausgangspunkt sind der reale Kontext und das Bestehende.',
        },
        noFreeComplexity: {
          title: 'Keine unnötige Komplexität.',
          text: 'Jede Komponente muss einen Grund haben, zu existieren.',
        },
        explainedChoices: {
          title: 'Erklärte Entscheidungen.',
          text: 'Eine technische Lösung muss verständlich und begründbar sein.',
        },
        proportionate: {
          title: 'Eine angemessene Antwort.',
          text: 'Das richtige Technologieniveau richtet sich nach dem Problem, nicht umgekehrt.',
        },
      },
    },
    form: {
      title: 'Mein Anliegen beschreiben',
      requiredMark: '*',
      fields: {
        name: 'Ihr Name',
        email: 'Ihre E-Mail-Adresse',
        subject: 'Betreff',
        message: 'Beschreiben Sie Ihr Anliegen',
      },
      messagePlaceholder: 'Ein paar Zeilen genügen für den Anfang.',
      subjectPlaceholder: 'Betreff auswählen',
      subjects: [
        'Praxis / Schwachstrom',
        'Infrastruktur / Netzwerke',
        'Automatisierung & Smart Home',
        'Entwicklung & KI',
        'Sonstiges',
      ],
      submit: 'Nachricht senden',
      notice:
        'Versand deaktiviert: Derzeit ist kein Versanddienst verbunden. Das Formular ist bereit zum Anbinden.',
    },
    cta: {
      eyebrow: '// fazit',
      title: 'Der erste Schritt ist, den Bedarf zu verstehen.',
      text: 'Es ist nicht nötig, die Lösung schon genau festgelegt zu haben.',
      note: 'Eine Idee, ein Problem, ein Projekt?',
    },
  },
};

export default de;
