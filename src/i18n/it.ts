import type { Translations } from './fr';

/** Textes italiens. */
const it: Translations = {
  meta: {
    title: 'Operius',
    description:
      'Operius — soluzioni tecniche dal campo al software: reti, infrastruttura, automazione, sviluppo e IA.',
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
    legal: 'Soluzioni utili, affidabili e gestibili.',
    links: {
      github: 'github',
      linkedin: 'linkedin',
      contact: 'contatti',
    },
  },

  common: {
    contactCta: 'contattami',
    linkPending: 'Link da definire',
    all: 'Tutti',
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
    },
  },

  home: {
    eyebrow: '// il mio approccio',
    title: ['Non più tecnologia.', 'La tecnologia giusta.'],
    lead: [
      'Progetto e integro soluzioni tecniche che rispondono a problemi concreti — dal campo fino al software.',
      'Reti, sicurezza, corrente debole, domotica, automazione, sviluppo e IA: cerco prima di capire l’esigenza, poi di scegliere la soluzione più semplice che possa davvero rispondere.',
    ],
    primaryCta: 'Vedi i progetti',
    secondaryCta: 'Parliamo del vostro bisogno',
    visualLines: ['capire', 'semplificare', 'costruire', 'testare'],
    quote: 'Capire il problema prima di scegliere la tecnologia.',
    domains: {
      infrastructure: {
        title: 'Infrastruttura',
        hook: 'Far funzionare i sistemi su cui tutto si basa.',
        text: 'Reti, server, Linux, servizi e infrastruttura: costruire una base affidabile, coerente e mantenibile.',
      },
      securite: {
        title: 'Sicurezza e corrente debole',
        hook: 'Collegare la tecnica alla realtà del campo.',
        text: 'Rilevazione, sicurezza, corrente debole e sistemi tecnici: integrare apparecchiature che devono funzionare in condizioni reali.',
      },
      automatisation: {
        title: 'Automazione e domotica',
        hook: 'Far svolgere ai sistemi ciò che può essere automatizzato.',
        text: 'Supervisione, automazione e domotica per ridurre le operazioni ripetitive e migliorare il controllo.',
      },
      developpement: {
        title: 'Sviluppo e IA',
        hook: 'Costruire quando gli strumenti esistenti non rispondono all’esigenza.',
        text: 'Applicazioni, script, strumenti e soluzioni IA quando lo sviluppo offre una risposta più adatta di un accumulo di software esistenti.',
      },
    },
    domainLink: 'scopri di più',
    approach: {
      eyebrow: '// perché questo approccio?',
      title: 'Perché un problema non ha sempre bisogno di più tecnologia.',
      lead: 'Un sistema può essere tecnicamente sofisticato e comunque difficile da usare, da mantenere o da far evolvere.',
      stepsLead: 'Preferisco un approccio diverso:',
      steps: ['Capire', 'Semplificare', 'Costruire', 'Testare'],
      closingLead: 'Il risultato cercato non è la soluzione più impressionante.',
      closing: 'È una soluzione utile, affidabile e gestibile.',
    },
    journey: {
      title: 'Dal campo al software',
      lead: 'Il mio percorso riunisce più ambiti di solito trattati separatamente:',
      steps: ['Corrente debole', 'Reti', 'Sistemi', 'Sviluppo', 'Automazione', 'IA'],
      closing:
        'Questa continuità permette di affrontare un problema a più livelli e di capire le interazioni tra i diversi strati.',
    },
    conviction: {
      eyebrow: '// una convinzione',
      title: 'Una buona soluzione deve restare comprensibile.',
      text: 'Quando è pertinente, preferisco le tecnologie aperte e le soluzioni che si possono amministrare, diagnosticare e far evolvere senza dipendere inutilmente da una scatola nera. Gli strumenti sono un mezzo. Il risultato è ciò che conta.',
      action: 'Parliamo del vostro progetto',
    },
  },

  projects: {
    eyebrow: '// i miei progetti',
    title: ['Problemi concreti.', 'Soluzioni costruite per rispondere.'],
    lead: [
      'I progetti presentati qui non sono una raccolta di tecnologie.',
      'Mostrano un modo di lavorare: partire da un’esigenza, capire i vincoli, costruire una soluzione e verificare che funzioni davvero.',
    ],
    heroVisualLines: ['# idee', 'progettazione', 'sviluppo', 'distribuzione', 'manutenzione'],
    filtersLabel: 'Filtra i progetti per categoria',
    linkLabel: 'vedi il progetto',
    repositoryLabel: 'GitHub',
    approachLabel: 'Approccio',
    technologiesLabel: 'Tecnologie',
    pendingNote:
      'I link ai progetti e ai repository saranno attivati quando gli URL saranno convalidati.',
    empty: 'Nessun progetto in questa categoria per ora.',
    categories: {
      infrastructure: 'Infrastruttura',
      ia: 'IA e automazione',
      developpement: 'Sviluppo',
    },
    items: {
      smartBtpProgest: {
        status: 'In sviluppo',
        hook: 'Semplificare la gestione senza costruire soluzioni complicate.',
        description:
          'Artigiani e piccole imprese hanno bisogno di strumenti adatti alla loro attività, non necessariamente di piattaforme generaliste sovraccariche di funzioni. Smart BTP ProGest esplora un approccio centrato su progetto, pianificazione, attività, documenti e monitoraggio.',
        approach:
          'Costruire solo le funzioni utili nel quotidiano e mantenere un’architettura abbastanza semplice da poter evolvere.',
        remark: '',
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
        hook: 'Capire l’IA invece di usarla soltanto.',
        description:
          'Versutus IA esplora un’infrastruttura IA locale capace di riunire modelli, API, RAG, memoria e strumenti. L’obiettivo è padroneggiare l’intera catena: installazione, esecuzione, integrazione, misurazione e diagnosi.',
        approach:
          'Preferire la sperimentazione riproducibile e la comprensione del funzionamento rispetto all’uso di una soluzione opaca.',
        remark: '',
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
        hook: 'Un’infrastruttura è affidabile solo quando i suoi componenti funzionano insieme.',
        description:
          'DNS, posta, certificati, reverse proxy, Docker, rete e servizi web devono formare un sistema coerente.',
        approach:
          'Amministrare un’infrastruttura non significa semplicemente installare software, ma capire le loro interazioni e dipendenze.',
        remark: '',
        visualLines: [
          '# servizi e supervisione',
          '→ mail',
          '→ dns',
          '→ reverse proxy',
          '→ backup',
        ],
      },
      outilsAutomatisations: {
        status: 'In corso',
        hook: 'Eliminare le operazioni inutili.',
        description:
          'Script, strumenti di amministrazione e automazioni permettono di ridurre le attività ripetitive e di rendere alcune procedure più affidabili.',
        approach: 'L’automazione non è un fine in sé.',
        remark:
          'Se il rimedio è più complesso del problema, probabilmente bisogna rivedere il rimedio.',
        visualLines: ['# automazione', '→ backup', '→ script', '→ distribuzione', '→ documentazione'],
      },
    },
    cta: {
      eyebrow: '// ciò che questi progetti hanno in comune',
      title: 'Analizzare. Semplificare. Costruire. Testare.',
      text: 'È questo metodo, più delle tecnologie usate, a costituire il filo conduttore.',
      action: 'Parliamo del vostro progetto',
    },
  },

  skills: {
    eyebrow: '// le mie competenze',
    title: ['Capire più livelli', 'di uno stesso problema.'],
    lead: [
      'Una competenza tecnica ha valore solo quando permette di risolvere qualcosa.',
      'Il mio profilo copre più livelli, dall’hardware e dagli impianti fino al software e all’automazione.',
    ],
    quote: 'È una soluzione utile, affidabile e gestibile.',
    domains: {
      terrain: {
        title: 'Campo',
        subtitle: 'Corrente debole · Sicurezza · Rilevazione · Domotica',
        text: 'Un’esperienza direttamente legata agli impianti tecnici e ai loro vincoli reali. Il sistema deve funzionare sul campo, essere utilizzabile e potersi diagnosticare.',
      },
      infrastructure: {
        title: 'Infrastruttura',
        subtitle: 'Reti · Linux · Server · Docker',
        text: 'Progettare, amministrare e diagnosticare i sistemi che fanno funzionare i servizi. L’obiettivo non è accumulare componenti, ma costruire un’infrastruttura coerente con il suo uso.',
      },
      developpement: {
        title: 'Sviluppo',
        subtitle: 'Applicazioni · Script · Automazione',
        text: 'Sviluppare quando un’esigenza non può essere coperta correttamente dagli strumenti esistenti. Il codice è un mezzo per eliminare un limite, non un fine.',
      },
      ia: {
        title: 'IA',
        subtitle: 'Modelli locali · RAG · Integrazione · Automazione',
        text: 'Esplorare le possibilità dell’IA mantenendo il controllo dell’ambiente tecnico. Capire cosa succede dietro l’interfaccia fa parte del lavoro.',
      },
    },
    technologies: {
      title: 'Tecnologie',
      subtitle: 'Gli strumenti cambiano. I principi restano.',
      note: 'Questa lista indica tecnologie realmente utilizzate in diversi progetti. Non costituisce una promessa di usarle tutte per ogni esigenza.',
    },
    projectsLink: 'Vedi i progetti',
    cta: {
      eyebrow: '// ciò che conta',
      title:
        'Capire il problema. Scegliere il giusto livello di tecnologia. Costruire qualcosa di mantenibile.',
      action: 'Parliamo del vostro progetto',
    },
  },

  about: {
    eyebrow: '// chi sono',
    title: ['Un percorso costruito', 'tra il campo e il digitale.'],
    lead: [
      'Il mio percorso non ha seguito una sola specialità.',
      'Si è costruito progressivamente attorno a una stessa esigenza: capire come funzionano i sistemi e come farli funzionare insieme.',
    ],
    primaryCta: 'Parliamo del vostro progetto',
    quote: 'Una buona soluzione deve restare comprensibile.',
    journey: {
      eyebrow: '// percorso',
      title: 'Dal campo al software',
      intros: [
        'La corrente debole mi ha insegnato una cosa essenziale:',
        'Reti e sistemi hanno aggiunto un’altra dimensione:',
        'Lo sviluppo ha portato un altro strumento:',
        'L’automazione e l’IA aprono oggi una nuova possibilità:',
      ],
      lessons: [
        'una soluzione deve funzionare nel mondo reale.',
        'i componenti devono comunicare e restare amministrabili.',
        'quando manca qualcosa, la si può costruire.',
        'fare di più senza aggiungere necessariamente più complessità.',
      ],
    },
    profile: {
      title: 'Un profilo ibrido',
      lead: 'Posso guardare uno stesso problema da più livelli:',
      layers: ['Installazione', 'Rete', 'Sistema', 'Software', 'Automazione'],
      paragraphs: [
        'Questo non significa che si debba sempre intervenire su tutti questi livelli.',
        'Significa che è possibile capire dove si trova realmente il problema prima di scegliere come affrontarlo.',
      ],
    },
    principles: {
      title: 'Ciò che preferisco',
      items: {
        simplicity: {
          title: 'La semplicità utile.',
          text: 'Una soluzione non è migliore perché ha più funzionalità.',
        },
        mastery: {
          title: 'La padronanza.',
          text: 'Capire come funziona un sistema ne facilita l’uso e l’evoluzione.',
        },
        proportion: {
          title: 'La proporzione.',
          text: 'Una piccola difficoltà non giustifica necessariamente un’architettura complessa.',
        },
        openness: {
          title: 'L’apertura.',
          text: 'Quando è pertinente, le tecnologie aperte permettono di limitare alcune dipendenze e di mantenere più controllo.',
        },
      },
    },
    cta: {
      eyebrow: '// conclusione',
      title: 'Costruire soluzioni che si possano ancora capire domani.',
      text: 'È probabilmente il miglior criterio per giudicare una soluzione tecnica. Non il suo numero di funzionalità. Non la novità della sua tecnologia. La sua capacità di restare utile, affidabile e gestibile nel tempo.',
      action: 'Parliamo del vostro progetto',
    },
  },

  contact: {
    eyebrow: '// contatti',
    title: ['Avete un problema tecnico?', 'Iniziamo dal capirlo.'],
    lead: ['Non dovete conoscere la soluzione prima di contattarmi.'],
    listLead: 'Spiegate semplicemente:',
    list: [
      'cosa non funziona',
      'cosa vorreste migliorare',
      'cosa desiderate costruire',
      'o semplicemente cosa cercate di capire.',
    ],
    expectations: {
      title: 'Cosa potete aspettarvi',
      items: {
        noPaste: {
          title: 'Nessuna soluzione preconfezionata.',
          text: 'Si parte dal contesto reale e da ciò che esiste già.',
        },
        noFreeComplexity: {
          title: 'Nessuna complessità inutile.',
          text: 'Ogni componente deve avere una ragione d’essere.',
        },
        explainedChoices: {
          title: 'Scelte spiegate.',
          text: 'Una soluzione tecnica deve poter essere capita e giustificata.',
        },
        proportionate: {
          title: 'Una risposta proporzionata.',
          text: 'Il giusto livello di tecnologia dipende dal problema, non il contrario.',
        },
      },
    },
    form: {
      title: 'Descrivere la mia esigenza',
      requiredMark: '*',
      fields: {
        name: 'Il vostro nome',
        email: 'Il vostro indirizzo email',
        subject: 'Oggetto',
        message: 'Descrivete la vostra esigenza',
      },
      messagePlaceholder: 'Poche righe bastano per iniziare.',
      subjectPlaceholder: 'Scegli un oggetto',
      subjects: [
        'Campo / corrente debole',
        'Infrastruttura / reti',
        'Automazione e domotica',
        'Sviluppo e IA',
        'Altro',
      ],
      submit: 'Invia il messaggio',
      notice:
        'Invio disattivato: nessun servizio di invio è collegato per il momento. Il modulo è pronto per essere collegato.',
    },
    cta: {
      eyebrow: '// conclusione',
      title: 'Il primo lavoro consiste nel capire l’esigenza.',
      text: 'Non è necessario aver già definito con precisione la soluzione.',
      note: 'Un’idea, un problema, un progetto?',
    },
  },
};

export default it;
