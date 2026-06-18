export const site = {
  name: 'JGM Advisory',
  owner: 'Jean-Gabriel Michaud',
  email: 'jean-gabriel.michaud@jgmadvisory.com',
  location: 'Lyon, France',
  linkedin: 'https://www.linkedin.com/in/jean-gabriel-michaud-11b0592',
  portrait: '/assets/jean-gabriel-michaud.webp'
};

export const languages = [
  { locale: 'fr', label: 'Français', short: 'FR' },
  { locale: 'en', label: 'English', short: 'EN' }
];

export const translations = {
  fr: {
    meta: {
      title: 'JGM Advisory - Conseil en transformation & organisation',
      description:
        "JGM Advisory, conseil indépendant à Lyon. Jean-Gabriel Michaud accompagne les transformations, organisations, cultures d'entreprise, démarches de changement et équipes dirigeantes.",
      ogDescription:
        "J'accompagne les organisations de bout en bout sur leurs transformations à forts enjeux organisationnels et humains.",
      locale: 'fr_FR'
    },
    ui: {
      skipLink: 'Aller au contenu principal',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
      navLabel: 'Navigation principale',
      mainLabel: 'Contenu principal',
      languageLabel: 'Choisir la langue',
      autoScroll: 'Défilement auto',
      serviceTabsHelp:
        "Sélectionnez un domaine d'intervention pour afficher son détail. Les flèches du clavier permettent de passer d'un domaine au suivant.",
      detailHint: 'Voir le détail',
      proofLabel: 'Chiffres clés',
      emailCopied: 'Email copié',
      sendEmailLabel: 'Envoyer un email à Jean-Gabriel Michaud',
      copyEmailLabel: "Copier l'adresse email",
      linkedinLabel: 'Profil LinkedIn de Jean-Gabriel Michaud, ouvre un nouvel onglet',
      portraitAlt: 'Portrait de Jean-Gabriel Michaud'
    },
    navItems: [
      ['Offre', '#offre'],
      ['Approche', '#approche'],
      ['Références', '#references'],
      ['Parcours', '#parcours'],
      ['Contact', '#contact']
    ],
    hero: {
      eyebrow: 'Conseil indépendant à Lyon',
      title: 'JGM Advisory',
      subtitle: "Conseil en transformation, organisation et culture d'entreprise",
      intro:
        "J'accompagne les organisations de bout en bout sur leurs transformations à forts enjeux organisationnels et humains.",
      primaryCta: 'Démarrer un échange',
      secondaryCta: 'Voir les expertises'
    },
    proofPoints: [
      { value: '22 ans', suffix: "d'expérience", label: 'en conseil et transformation' },
      { value: 'PME, ETI, groupes', label: 'des organisations de tailles et cultures variées' },
      { value: 'France & international', label: 'des interventions à Lyon, en France et au-delà' }
    ],
    about: {
      eyebrow: 'À propos',
      title: 'Une pratique de conseil exigeante, directe et proche du terrain.',
      paragraphs: [
        "Consultant indépendant basé à Lyon, j'accompagne depuis plus de 22 ans des organisations de toutes tailles: PME en croissance, ETI et grands groupes internationaux.",
        "J'interviens aussi bien auprès des Comités de Direction que des équipes terrain, sur des transformations de grande ampleur comme sur des chantiers opérationnels ciblés."
      ],
      cta: 'En savoir plus sur le parcours'
    },
    offer: {
      eyebrow: "Domaines d'intervention",
      title: "De la stratégie à l'opérationnel, sans frontière de périmètre."
    },
    services: [
      {
        number: '01',
        title: 'Accompagnement opérationnel',
        short: 'Structurer, piloter, embarquer.',
        description:
          "Structuration et pilotage de projets de transformation, narratif, storytelling et dispositifs de conduite du changement. Un accompagnement concret, du cadrage initial à la mise en oeuvre terrain.",
        points: [
          'Trajectoire et plan de transformation',
          'Narratif et dispositifs de changement',
          'Accompagnement opérationnel au jour le jour',
          'Interface entre équipes projet et parties prenantes',
          'Formalisation des livrables clés'
        ]
      },
      {
        number: '02',
        title: "Design d'organisation",
        short: 'Repenser les rôles et la gouvernance.',
        description: 'Création ou refonte de Directions, Départements ou Services.',
        points: [
          'Diagnostic organisationnel',
          'Design de la cible organisationnelle',
          'Rôles, responsabilités et gouvernance',
          'Plan de déploiement et feuilles de route',
          'Support aux 100 premiers jours'
        ]
      },
      {
        number: '03',
        title: 'Efficacité opérationnelle',
        short: 'Faire mieux, plus simple, plus fiable.',
        description:
          'Optimisation des processus et des modes de fonctionnement de travail pour gagner en simplicité, fiabilité et impact.',
        points: [
          'Cartographie des processus existants',
          'Analyse des irritants et causes racines',
          'Refonte des modes opératoires',
          'Mesure et suivi des résultats'
        ]
      },
      {
        number: '04',
        title: "Culture d'entreprise",
        short: 'Aligner pratiques et ambition.',
        description:
          "Définition d'une culture d'entreprise, ou inflexion de la culture existante, pour singulariser l'entreprise et aligner les modes de fonctionnement internes avec ses enjeux.",
        points: [
          'Diagnostic culturel quantitatif et qualitatif',
          'Construction du modèle culturel cible',
          'Déclinaison dans les façons de faire et de manager',
          "Dispositifs d'appropriation à petite ou grande échelle"
        ]
      },
      {
        number: '05',
        title: 'Mobilisation & engagement',
        short: "Créer l'adhésion autour des sujets stratégiques.",
        description:
          "Design de dispositifs visant à mobiliser toute une organisation autour d'une transformation ou d'un sujet stratégique.",
        points: [
          'Narratif et promesse de transformation',
          'Événements fédérateurs',
          'Animation de communautés managériales',
          "Mesure de l'engagement et de l'adhésion"
        ]
      },
      {
        number: '06',
        title: 'Coaching & développement managérial',
        short: 'Renforcer les postures et les coopérations.',
        description: 'Accompagnement managérial sur la posture et les compétences, individuel ou collectif.',
        points: [
          'Coaching individuel de managers et dirigeants',
          'Programmes de développement collectifs',
          'Séminaires managériaux',
          'Coopération en équipe de direction'
        ]
      }
    ],
    approachSection: {
      eyebrow: 'Mon approche',
      titleLead: 'Pas seulement une méthode.',
      titleGold: "Une façon d'être.",
      intro:
        'Ce qui guide chaque mission: la clarté, le respect du terrain et une exigence de conseil sans posture inutile.'
    },
    approach: [
      [
        '01',
        'Rigueur',
        'Une démarche structurée, des méthodes éprouvées, des livrables soignés et un engagement total.'
      ],
      [
        '02',
        'Respect',
        'Respect des collaborateurs, mais aussi de votre agenda, de vos contraintes, de votre rythme et de vos perceptions.'
      ],
      [
        '03',
        'Nuance',
        "Vos projets méritent mieux que des certitudes. La méthode compte autant que les questions et l'écoute du terrain."
      ],
      [
        '04',
        'Simplicité',
        "Une façon de travailler fondée sur l'humilité, la disponibilité et la clarté, pour ne jamais ajouter de complexité à la complexité."
      ]
    ],
    referencesSection: {
      eyebrow: 'Références',
      title: 'Quelques missions réalisées au cours des 24 derniers mois.',
      intro: 'Les noms de clients restent confidentiels.'
    },
    references: [
      [
        'Tourisme & Hôtellerie',
        "Définition d'un nouveau modèle managérial, en lien avec la nouvelle culture d'entreprise"
      ],
      ['Avantages aux employés', "Design d'une culture d'entreprise et déploiement dans 29 pays"],
      [
        'Industrie pharmaceutique',
        "Déploiement d'un projet d'entreprise sur la charge de travail avec plus de 1 000 collaborateurs mobilisés"
      ],
      ['Industrie pharmaceutique', 'Refonte du service Administration des Ventes'],
      [
        'Solutions RH',
        'Responsable du chantier Change Management dans le cadre de la refonte mondiale des activités de Middle Office'
      ],
      [
        'Conseil en ingénierie',
        "Accompagnement d'une start-up en forte croissance: formalisation de l'ambition et feuille de route"
      ],
      [
        'Industrie pharmaceutique',
        "Conception et animation d'un programme de développement managérial pour plus de 100 managers"
      ],
      [
        'Transport & Mobilité',
        "Accompagnement à l'ouverture à la concurrence: organisation, offre de service, processus et culture managériale"
      ],
      ['Industrie pharmaceutique', 'Diagnostic et optimisation du processus S&OP']
    ],
    profile: {
      eyebrow: 'Qui je suis',
      title: 'Jean-Gabriel Michaud',
      role: 'Consultant indépendant - Lyon',
      paragraphs: [
        "Mes domaines d'intervention sont variés: stratégie, organisation, processus, conduite du changement, développement managérial, coaching. Depuis 2022, une grande partie de mes missions porte sur la culture d'entreprise, dont j'ai fait ma spécialité.",
        "Pour les programmes de grande envergure, j'interviens également aux côtés de partenaires externes - cabinets spécialisés ou consultants indépendants - selon les besoins spécifiques de la mission."
      ]
    },
    timeline: [
      ['2021 -', 'Consultant indépendant', 'JGM Advisory - Lyon'],
      ['2015 - 2021', 'Directeur Associé, en charge du bureau de Lyon', 'Alixio Change Management - Lyon'],
      ['2005 - 2015', 'Directeur', 'Equinox Consulting - Paris'],
      ['2004 - 2005', 'Analyste financier - Amérique Latine', 'Crédit Agricole CIB - New York'],
      [
        'Formation',
        'ESCP Business School - Programme Grande École, majeure Finance',
        'Certification Coach - ESSEC Business School, formation continue 2017'
      ]
    ],
    contact: {
      eyebrow: 'Travaillons ensemble',
      title: 'Un projet, une mission, une question.',
      intro: 'Écrivez-moi directement pour ouvrir un premier échange.',
      emailCta: 'Envoyer un email',
      copyCta: "Copier l'email",
      emailLabel: 'Email',
      locationLabel: 'Localisation',
      locationText: "Interventions en France et à l'international",
      linkedinLabel: 'LinkedIn'
    },
    footer: '© 2026 JGM Advisory - Jean-Gabriel Michaud · Lyon, France',
    noscript:
      "Jean-Gabriel Michaud, consultant indépendant à Lyon, accompagne les organisations sur leurs transformations, leur organisation, leur culture d'entreprise, la conduite du changement et le développement managérial."
  },
  en: {
    meta: {
      title: 'JGM Advisory - Transformation & organization advisory',
      description:
        'JGM Advisory, independent advisory practice in Lyon. Jean-Gabriel Michaud supports transformation, organization, corporate culture, change and leadership development programs.',
      ogDescription:
        'I support organizations end to end through transformations with significant organizational and human stakes.',
      locale: 'en_US'
    },
    ui: {
      skipLink: 'Skip to main content',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      navLabel: 'Main navigation',
      mainLabel: 'Main content',
      languageLabel: 'Choose language',
      autoScroll: 'Auto scroll',
      serviceTabsHelp:
        'Select an area of expertise to display its details. Use the arrow keys to move between areas.',
      detailHint: 'View details',
      proofLabel: 'Key figures',
      emailCopied: 'Email copied',
      sendEmailLabel: 'Send an email to Jean-Gabriel Michaud',
      copyEmailLabel: 'Copy email address',
      linkedinLabel: "Jean-Gabriel Michaud's LinkedIn profile, opens in a new tab",
      portraitAlt: 'Portrait of Jean-Gabriel Michaud'
    },
    navItems: [
      ['Expertise', '#offre'],
      ['Approach', '#approche'],
      ['References', '#references'],
      ['Profile', '#parcours'],
      ['Contact', '#contact']
    ],
    hero: {
      eyebrow: 'Independent advisory in Lyon',
      title: 'JGM Advisory',
      subtitle: 'Transformation, organization and corporate culture advisory',
      intro:
        'I support organizations end to end through transformations with significant organizational and human stakes.',
      primaryCta: 'Start a conversation',
      secondaryCta: 'Explore expertise'
    },
    proofPoints: [
      { value: '22 years', suffix: 'of experience', label: 'in advisory and transformation' },
      { value: 'SMEs, mid-size companies, groups', label: 'organizations of varied sizes and cultures' },
      { value: 'France & international', label: 'assignments in Lyon, across France and beyond' }
    ],
    about: {
      eyebrow: 'About',
      title: 'An exacting advisory practice, direct and close to the field.',
      paragraphs: [
        'As an independent consultant based in Lyon, I have supported organizations of all sizes for more than 22 years: growing SMEs, mid-size companies and international groups.',
        'I work with executive committees as well as field teams, on large-scale transformations and targeted operational initiatives.'
      ],
      cta: 'Learn more about my background'
    },
    offer: {
      eyebrow: 'Areas of expertise',
      title: 'From strategy to operations, without artificial boundaries.'
    },
    services: [
      {
        number: '01',
        title: 'Operational transformation support',
        short: 'Structure, steer, engage.',
        description:
          'Structuring and steering transformation programs, narratives, storytelling and change-management systems. Practical support from initial framing through field deployment.',
        points: [
          'Transformation roadmap and trajectory',
          'Narrative and change-management mechanisms',
          'Day-to-day operational support',
          'Interface between project teams and stakeholders',
          'Formalization of key deliverables'
        ]
      },
      {
        number: '02',
        title: 'Organization design',
        short: 'Redesign roles and governance.',
        description: 'Creation or redesign of departments, functions or services.',
        points: [
          'Organizational diagnosis',
          'Target organization design',
          'Roles, responsibilities and governance',
          'Deployment plan and roadmaps',
          'Support for the first 100 days'
        ]
      },
      {
        number: '03',
        title: 'Operational effectiveness',
        short: 'Make work simpler, stronger and more reliable.',
        description:
          'Optimization of processes and ways of working to gain simplicity, reliability and impact.',
        points: [
          'Mapping of current processes',
          'Analysis of pain points and root causes',
          'Redesign of operating modes',
          'Measurement and tracking of outcomes'
        ]
      },
      {
        number: '04',
        title: 'Corporate culture',
        short: 'Align practices with ambition.',
        description:
          "Definition or evolution of a corporate culture to make the company more distinctive and align internal ways of working with its challenges.",
        points: [
          'Quantitative and qualitative culture diagnosis',
          'Design of the target culture model',
          'Translation into ways of working and managing',
          'Adoption mechanisms at small or large scale'
        ]
      },
      {
        number: '05',
        title: 'Mobilization & engagement',
        short: 'Build buy-in around strategic topics.',
        description:
          'Design of mechanisms that mobilize an entire organization around a transformation or strategic topic.',
        points: [
          'Transformation narrative and promise',
          'Mobilizing events',
          'Management community facilitation',
          'Measurement of engagement and buy-in'
        ]
      },
      {
        number: '06',
        title: 'Coaching & leadership development',
        short: 'Strengthen postures and cooperation.',
        description: 'Leadership support on posture and capabilities, individually or collectively.',
        points: [
          'Individual coaching for managers and executives',
          'Collective development programs',
          'Leadership seminars',
          'Executive-team cooperation'
        ]
      }
    ],
    approachSection: {
      eyebrow: 'My approach',
      titleLead: 'Not just a method.',
      titleGold: 'A way of being.',
      intro:
        'What guides every assignment: clarity, respect for the field and a demanding advisory standard without unnecessary posturing.'
    },
    approach: [
      ['01', 'Rigor', 'A structured approach, proven methods, carefully crafted deliverables and total commitment.'],
      [
        '02',
        'Respect',
        'Respect for employees, but also for your agenda, your constraints, your pace and your perceptions.'
      ],
      [
        '03',
        'Nuance',
        'Your projects deserve better than certainty. The method matters as much as the questions and listening to the field.'
      ],
      [
        '04',
        'Simplicity',
        'A way of working based on humility, availability and clarity, so complexity is never added to complexity.'
      ]
    ],
    referencesSection: {
      eyebrow: 'References',
      title: 'Selected assignments completed over the past 24 months.',
      intro: 'Client names remain confidential.'
    },
    references: [
      ['Tourism & Hospitality', 'Definition of a new managerial model linked to a renewed corporate culture'],
      ['Employee benefits', 'Design of a corporate culture and deployment across 29 countries'],
      [
        'Pharmaceutical industry',
        'Deployment of a company-wide workload initiative involving more than 1,000 employees'
      ],
      ['Pharmaceutical industry', 'Redesign of the Sales Administration department'],
      [
        'HR solutions',
        'Change Management workstream lead as part of a global redesign of Middle Office activities'
      ],
      [
        'Engineering consulting',
        'Support for a fast-growing startup: ambition formalization and roadmap'
      ],
      [
        'Pharmaceutical industry',
        'Design and facilitation of a leadership development program for more than 100 managers'
      ],
      [
        'Transport & Mobility',
        'Support for market opening: organization, service offering, processes and managerial culture'
      ],
      ['Pharmaceutical industry', 'Diagnosis and optimization of the S&OP process']
    ],
    profile: {
      eyebrow: 'Who I am',
      title: 'Jean-Gabriel Michaud',
      role: 'Independent consultant - Lyon',
      paragraphs: [
        'My fields of intervention are varied: strategy, organization, processes, change management, leadership development and coaching. Since 2022, a large share of my work has focused on corporate culture, which has become my specialty.',
        'For large-scale programs, I also work alongside external partners - specialist firms or independent consultants - depending on the specific needs of the assignment.'
      ]
    },
    timeline: [
      ['2021 -', 'Independent consultant', 'JGM Advisory - Lyon'],
      ['2015 - 2021', 'Partner, in charge of the Lyon office', 'Alixio Change Management - Lyon'],
      ['2005 - 2015', 'Director', 'Equinox Consulting - Paris'],
      ['2004 - 2005', 'Financial analyst - Latin America', 'Crédit Agricole CIB - New York'],
      [
        'Education',
        'ESCP Business School - Grande École program, Finance major',
        'Certified Coach - ESSEC Business School, executive education 2017'
      ]
    ],
    contact: {
      eyebrow: "Let's work together",
      title: 'A project, an assignment, a question.',
      intro: 'Write to me directly to start a first conversation.',
      emailCta: 'Send an email',
      copyCta: 'Copy email',
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationText: 'Assignments in France and internationally',
      linkedinLabel: 'LinkedIn'
    },
    footer: '© 2026 JGM Advisory - Jean-Gabriel Michaud · Lyon, France',
    noscript:
      'Jean-Gabriel Michaud, independent consultant based in Lyon, supports organizations on transformation, organization, corporate culture, change management and leadership development.'
  }
};
