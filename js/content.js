/* ============================================================
   Portfolio Mariaceleste Picanza — Content & Translations
   All UI text is defined here. The HTML contains only structure.
   Two-language support: Italian (it) · English (en)
   ============================================================ */

const CONTENT = {

  /* ── Meta ── */
  meta: {
    description: {
      it: 'Portfolio professionale di Mariaceleste Picanza — Giurista specializzata in Diritto Alimentare, Ambientale e Commercio Internazionale.',
      en: 'Professional portfolio of Mariaceleste Picanza — Jurist specialising in Food Law, Environmental Law and International Trade.'
    },
    pageTitle: {
      it: 'Mariaceleste Picanza — Giurista & Legal Researcher',
      en: 'Mariaceleste Picanza — Jurist & Legal Researcher'
    }
  },

  /* ── Navigation ── */
  nav: {
    about:     { it: 'Chi Sono',   en: 'About' },
    skills:    { it: 'Competenze', en: 'Skills' },
    education: { it: 'Formazione', en: 'Education' },
    portfolio: { it: 'Portfolio',  en: 'Portfolio' },
    contacts:  { it: 'Contatti',   en: 'Contacts' }
  },

  /* ── Hero ── */
  hero: {
    eyebrow:  { it: 'Giurista · Ricercatrice · Futura Avvocata', en: 'Jurist · Researcher · Future Lawyer' },
    tagline:  { it: '\u201cWhere Law Meets Sustainability\u201d', en: '\u201cWhere Law Meets Sustainability\u201d' },
    subtitle: {
      it: 'Food Law\u00a0\u00b7 Diritto Ambientale\u00a0\u00b7 Commercio Internazionale\u00a0\u00b7 Regolamentazione UE',
      en: 'Food Law\u00a0\u00b7 Environmental Law\u00a0\u00b7 International Trade\u00a0\u00b7 EU Regulation'
    },
    cta: { it: 'Scopri il Profilo', en: 'View Profile' }
  },

  /* ── About ── */
  about: {
    label: { it: 'Chi Sono', en: 'About Me' },
    title: { it: 'Biografia Professionale', en: 'Professional Biography' },

    /* Stored as HTML strings because they contain <p> and <em> tags */
    bio: {
      it: `<p>Mi chiamo Mariaceleste Picanza e sono una giurista con una formazione accademica di alto livello, coronata da una laurea magistrale in Giurisprudenza conseguita con il massimo dei voti presso l\u2019Universit\u00e0 LUMSA di Roma, con una tesi in diritto ambientale dedicata all\u2019impiego di sostanze inquinanti in agricoltura, con specifico riferimento al caso del glifosato.</p>
<p>Il mio percorso riflette una vocazione interdisciplinare: dalla tutela ambientale alla regolamentazione del sistema agro-alimentare, fino al commercio internazionale e alle politiche di sicurezza alimentare a livello europeo e globale. Attualmente frequento il <em>LL.M. in Food Law</em> presso la Luiss Guido Carli, approfondendo le intersezioni tra diritto, etica della produzione alimentare e governance internazionale.</p>
<p>Parallelamente, sto completando il Corso di Formazione Forense \u201cGiuseppe Dalla Torre\u201d all\u2019Universit\u00e0 LUMSA, passo necessario per l\u2019ammissione alla professione di avvocato in Italia. Credo fermamente che il rigore scientifico e la sensibilit\u00e0 verso le questioni globali siano le fondamenta di una pratica legale moderna e responsabile.</p>
<p>Nel 2025 ho ricevuto il <em>Premio America Giovani</em> dalla Fondazione Italia USA, riconoscimento nazionale assegnato a mille giovani laureati italiani distintisi per eccellenti risultati accademici, insieme a una borsa di studio per il Master Executive in Leadership per le Relazioni Internazionali e il Made in Italy.</p>`,
      en: `<p>My name is Mariaceleste Picanza. I am a jurist trained at the highest academic level, having graduated with full marks in Law from LUMSA University in Rome. My thesis in environmental law explored the regulatory challenges posed by the use of polluting chemical substances in agriculture, focusing on the emblematic case of glyphosate.</p>
<p>My profile reflects an interdisciplinary approach to law: from environmental protection and food safety governance to international trade regulation and EU agricultural policy. I am currently pursuing an <em>LL.M. in Food Law</em> at LUISS Guido Carli, deepening my expertise at the intersection of legal scholarship, food ethics, and international regulatory frameworks.</p>
<p>Concurrently, I am completing the mandatory bar admission training course (\u201cGiuseppe Dalla Torre\u201d) at LUMSA University, which qualifies graduates to sit the Italian bar exam. I believe that rigorous analytical thinking and a commitment to global sustainability are the foundations of responsible, contemporary legal practice.</p>
<p>In 2025, I was honoured with the <em>Premio America Giovani</em> \u2014 a national award granted by Fondazione Italia USA to one thousand outstanding young Italian graduates \u2014 alongside a merit-based scholarship for the Executive Master in Leadership for International Relations and Italian Excellence.</p>`
    },

    quote: {
      it: 'Ogni grande caso dipende da qualcosa di piccolo: la capacit\u00e0 di leggere la legge con precisione e umanit\u00e0.',
      en: 'Every great case depends on something small: the ability to read the law with precision and humanity.'
    },

    facts: [
      {
        icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
        label: { it: 'Specializzazione',   en: 'Specialisation' },
        value: { it: 'Food Law \u00b7 Diritto Ambientale \u00b7 Commercio Internazionale', en: 'Food Law \u00b7 Environmental Law \u00b7 International Trade' }
      },
      {
        icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
        label: { it: 'Stato Professionale', en: 'Professional Status' },
        value: { it: 'Praticante Forense \u00b7 LL.M. in corso', en: 'Bar Admission Trainee \u00b7 LL.M. in progress' }
      },
      {
        icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
        label: { it: 'Sede',            en: 'Location' },
        value: { it: 'Roma, Italia',    en: 'Rome, Italy' }
      },
      {
        icon: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>',
        label: { it: 'Riconoscimento', en: 'Award' },
        value: { it: 'Premio America Giovani 2025 \u2014 Fondazione Italia USA', en: 'Premio America Giovani 2025 \u2014 Fondazione Italia USA' }
      }
    ]
  },

  /* ── Legal Skills ── */
  skills: {
    label: { it: 'Competenze', en: 'Skills' },
    title: { it: 'Competenze Giuridiche', en: 'Legal Skills' },
    intro: {
      it: 'Consolidata preparazione nelle principali branche del diritto pubblico e privato, con una specializzazione nelle aree di regolamentazione agro-alimentare, tutela ambientale e diritto del commercio internazionale.',
      en: 'Solid grounding across the main branches of public and private law, with specialised expertise in agri-food regulation, environmental protection, and international trade law.'
    },
    cards: [
      {
        area: { it: 'Diritto Privato Speciale',  en: 'Specialised Private Law' },
        name: { it: 'Diritto Alimentare',         en: 'Food Law' },
        desc: { it: 'Normativa UE sulla sicurezza alimentare, etichettatura, pubblicit\u00e0 e qualit\u00e0 dei prodotti alimentari.', en: 'EU food safety regulation, labelling requirements, food advertising standards and product quality policies.' }
      },
      {
        area: { it: 'Diritto Pubblico',           en: 'Public Law' },
        name: { it: 'Diritto Ambientale',         en: 'Environmental Law' },
        desc: { it: 'Tutela giuridica dell\u2019ambiente, uso di sostanze inquinanti in agricoltura, responsabilit\u00e0 ambientale.', en: 'Legal protection of the environment, regulation of agricultural pollutants, and environmental liability frameworks.' }
      },
      {
        area: { it: 'Diritto Internazionale',     en: 'International Law' },
        name: { it: 'Commercio Internazionale',   en: 'International Trade' },
        desc: { it: 'Regolamentazione degli scambi internazionali, accordi multilaterali, quadri normativi WTO e UE.', en: 'International trade regulation, multilateral agreements, and WTO / EU legal frameworks.' }
      },
      {
        area: { it: 'Politiche Settoriali',       en: 'Sectoral Policies' },
        name: { it: 'Politiche Agricole e di Mercato', en: 'Agricultural & Market Policy' },
        desc: { it: 'PAC europea, strumenti di regolazione del mercato agricolo, sicurezza alimentare globale.', en: 'EU Common Agricultural Policy, agricultural market regulation tools, and global food security governance.' }
      },
      {
        area: { it: 'Diritto Pubblico',           en: 'Public Law' },
        name: { it: 'Diritto Costituzionale',     en: 'Constitutional Law' },
        desc: { it: 'Principi fondamentali dell\u2019ordinamento repubblicano, valori costituzionali e meccanismi istituzionali.', en: 'Foundational principles of the republican legal order, constitutional values and institutional mechanisms.' }
      },
      {
        area: { it: 'Diritto Penale',             en: 'Criminal Law' },
        name: { it: 'Diritto Penale & Scienze Penitenziarie', en: 'Criminal Law & Penology' },
        desc: { it: 'Esecuzione penale, diritti dei detenuti, prospettive criminologiche e riforma penitenziaria.', en: 'Criminal enforcement, detainee rights, criminological perspectives and penitentiary reform.' }
      },
      {
        area: { it: 'Tecnologia e Diritto',       en: 'Tech & Law' },
        name: { it: 'Intelligenza Artificiale e Diritto', en: 'AI & Law' },
        desc: { it: 'Profili giuridici dell\u2019IA, responsabilit\u00e0 algoritmica, etica dell\u2019innovazione tecnologica.', en: 'Legal dimensions of AI, algorithmic accountability, ethics of technological innovation.' }
      },
      {
        area: { it: 'Metodologia Giuridica',      en: 'Legal Methodology' },
        name: { it: 'Legal Research & Analisi Normativa', en: 'Legal Research & Regulatory Analysis' },
        desc: { it: 'Ricerca giuridica avanzata, rassegne normative, analisi comparata di fonti nazionali ed europee.', en: 'Advanced legal research, regulatory reviews, and comparative analysis of national and EU legal sources.' }
      },
      {
        area: { it: 'Diritto Internazionale',     en: 'International Law' },
        name: { it: 'Sicurezza Alimentare & Ambiente', en: 'Food Security & Environment' },
        desc: { it: 'Intersezione tra diritto alimentare internazionale, sostenibilit\u00e0 ambientale e obiettivi SDG.', en: 'Intersection of international food law, environmental sustainability and UN Sustainable Development Goals.' }
      },
      {
        area: { it: 'Relazioni Internazionali',   en: 'International Relations' },
        name: { it: 'Made in Italy & Diplomazia Economica', en: 'Made in Italy & Economic Diplomacy' },
        desc: { it: 'Valorizzazione del patrimonio agro-alimentare italiano, leadership internazionale e diplomazia economica.', en: 'Promotion of Italian agri-food heritage, international leadership and economic diplomacy.' }
      }
    ],

    softSkillsTitle: { it: 'Soft Skills', en: 'Soft Skills' },
    softSkills: [
      { it: 'Ragionamento Giuridico',     en: 'Legal Reasoning' },
      { it: 'Pensiero Analitico',          en: 'Analytical Thinking' },
      { it: 'Rigore nella Ricerca',        en: 'Research Rigour' },
      { it: 'Redazione Giuridica',         en: 'Legal Drafting' },
      { it: 'Problem Solving Legale',      en: 'Legal Problem Solving' },
      { it: 'Comunicazione Istituzionale', en: 'Institutional Communication' },
      { it: 'Sintesi Normativa',           en: 'Regulatory Synthesis' },
      { it: 'Approccio Interdisciplinare', en: 'Interdisciplinary Approach' },
      { it: 'Curiosit\u00e0 Intellettuale', en: 'Intellectual Curiosity' },
      { it: 'Autonomia & Proattivit\u00e0', en: 'Autonomy & Proactivity' }
    ]
  },

  /* ── Education ── */
  education: {
    label: { it: 'Percorso',            en: 'Education' },
    title: { it: 'Formazione Accademica', en: 'Academic Background' },
    items: [
      {
        period:      'Gen 2026 \u2014 Gen 2027',
        title:       { it: 'LL.M. in Food Law', en: 'LL.M. in Food Law' },
        institution: 'Luiss Guido Carli University \u2014 School of Law, Roma',
        details:     {
          it: 'Master of Laws di specializzazione nel diritto alimentare internazionale ed europeo. Aree di studio: commercio internazionale, sicurezza e qualit\u00e0 alimentare, etichettatura e pubblicit\u00e0, politiche agricole, diritto ambientale applicato all\u2019alimentazione.',
          en: 'Advanced LL.M. specialising in international and European food law. Areas of study include: international trade law, food safety and quality regulation, food labelling and advertising, agricultural policies, and environmental law applied to food systems.'
        }
      },
      {
        period:      'Apr 2025 \u2014 Ott 2026',
        title:       { it: 'Corso di Formazione Forense', en: 'Bar Admission Training Course' },
        institution: { it: 'Scuola Forense \u201cGiuseppe Dalla Torre\u201d, Universit\u00e0 LUMSA, Roma', en: 'Forensic Training School \u201cGiuseppe Dalla Torre\u201d, LUMSA University, Rome' },
        details:     {
          it: 'Percorso obbligatorio di abilitazione all\u2019esercizio della professione forense, previsto dalla normativa italiana per l\u2019accesso all\u2019esame di Stato per l\u2019iscrizione all\u2019albo degli avvocati.',
          en: 'Mandatory professional training course required by Italian law for admission to the State bar exam and enrolment in the national roll of qualified lawyers.'
        }
      },
      {
        period:      { it: 'Ago 2025', en: 'Aug 2025' },
        title:       { it: 'Master Executive \u2014 Leadership per le Relazioni Internazionali e il Made in Italy', en: 'Executive Master \u2014 Leadership for International Relations & Made in Italy' },
        institution: 'Fondazione Italia USA, Roma',
        badge:       { it: 'Borsa di Studio', en: 'Scholarship' },
        details:     {
          it: 'Programma selettivo riservato a giovani talenti italiani eccellenti nelle discipline internazionali, giuridiche ed economiche. Accesso mediante borsa di studio per merito accademico.',
          en: 'Selective programme for outstanding young Italian talents in international, legal and economic disciplines. Admission via full merit-based academic scholarship.'
        }
      },
      {
        period:      'Ott 2019 \u2014 Apr 2025',
        title:       { it: 'Laurea Magistrale in Giurisprudenza', en: "Master's Degree in Law (LLM / Laurea Magistrale)" },
        institution: 'Universit\u00e0 LUMSA, Roma',
        badge:       '110/110 cum laude',
        details:     {
          it: 'Tesi in Diritto Ambientale (A.A. 2023/2024): analisi giuridica dell\u2019impiego di sostanze potenzialmente inquinanti nell\u2019attivit\u00e0 agricola, con approfondimento del quadro normativo europeo e internazionale in materia di glifosato.',
          en: 'Thesis in Environmental Law (Academic Year 2023/2024): legal analysis of the use of potentially polluting substances in agricultural practice, with an in-depth examination of the European and international regulatory framework on glyphosate.'
        }
      },
      {
        period:      'Set 2014 \u2014 Lug 2019',
        title:       { it: 'Maturit\u00e0 Classica', en: 'Classical Baccalaureate (Maturit\u00e0 Classica)' },
        institution: 'Liceo Classico \u201cFrancesco D\u2019Ovidio\u201d',
        details:     {
          it: 'Formazione umanistica di base con approfondimento di latino, greco antico, filosofia e storia, che ha sviluppato solide capacit\u00e0 critiche e interpretative.',
          en: 'Classical humanities education encompassing Latin, Ancient Greek, philosophy and history, providing a strong foundation in critical thinking and textual interpretation.'
        }
      }
    ]
  },

  /* ── Portfolio ── */
  portfolio: {
    label:      { it: 'Portfolio',              en: 'Portfolio' },
    title:      { it: 'Pubblicazioni & Ricerche', en: 'Publications & Research' },
    cards: [
      {
        type:  { it: 'Tesi Magistrale',  en: "Master's Thesis" },
        title: { it: 'L\u2019Impiego di Sostanze Inquinanti in Agricoltura: Il Caso del Glifosato', en: 'The Use of Polluting Substances in Agriculture: The Case of Glyphosate' },
        meta:  { it: 'Diritto Ambientale \u00b7 Universit\u00e0 LUMSA \u00b7 A.A. 2023/2024', en: 'Environmental Law \u00b7 LUMSA University \u00b7 Academic Year 2023/2024' },
        desc:  { it: 'Ricerca originale sull\u2019impatto giuridico dell\u2019utilizzo del glifosato in agricoltura, tra normativa europea, giurisprudenza internazionale e tutela della salute pubblica e dell\u2019ecosistema.', en: 'Original research on the legal impact of glyphosate use in agriculture, analysing EU regulatory frameworks, international case law, and the protection of public health and environmental integrity.' }
      },
      {
        type:  { it: 'Pubblicazione',    en: 'Publication' },
        title: { it: 'Rassegna Normativa', en: 'Regulatory Review' },
        meta:  { it: 'Rivista Giuridica \u201cTempio di Giove\u201d \u00b7 Vol. 3, Set\u2013Dic 2025 \u00b7 Gennaio 2026', en: '\u201cTempio di Giove\u201d Law Review \u00b7 Vol. 3, Sep\u2013Dec 2025 \u00b7 January 2026' },
        desc:  { it: 'Contributo pubblicato nella rivista giuridica accademica \u201cTempio di Giove\u201d, con una rassegna critica e sistematica delle pi\u00f9 significative novit\u00e0 normative del periodo.', en: "Contribution published in the academic law journal \u2018Tempio di Giove\u2019, offering a critical and systematic review of the most significant legislative and regulatory developments of the period." }
      }
    ],

    certsTitle:  { it: 'Licenze & Certificazioni', en: 'Licences & Certifications' },
    certs: [
      {
        name:   { it: 'Principi Fondamentali della Costituzione, Valori e Meccanismi della Repubblica', en: 'Fundamental Constitutional Principles, Values and Mechanisms of the Republic' },
        issuer: { it: 'Universit\u00e0 LUMSA \u00b7 Dic 2022', en: 'LUMSA University \u00b7 Dec 2022' }
      },
      {
        name:   { it: 'Seminari su Intelligenza Artificiale e Diritto', en: 'Seminars on Artificial Intelligence and Law' },
        issuer: { it: 'Universit\u00e0 LUMSA \u00b7 Nov 2021', en: 'LUMSA University \u00b7 Nov 2021' }
      },
      {
        name:   { it: 'Corso di Alta Formazione in Scienze Penitenziarie e Criminologiche', en: 'Advanced Course in Penology and Criminological Sciences' },
        issuer: { it: 'Universit\u00e0 LUMSA \u2014 Spring School \u00b7 Giu 2023', en: 'LUMSA University \u2014 Spring School \u00b7 Jun 2023' }
      },
      {
        name:   { it: 'Certificazione Informatica EIPASS', en: 'EIPASS IT Certification' },
        issuer: 'EIPASS'
      }
    ],

    awardsTitle: { it: 'Riconoscimenti & Premi', en: 'Awards & Honours' },
    awards: [
      {
        icon:   '\u2605',
        title:  { it: 'Premio America Giovani',  en: 'Premio America Giovani' },
        issuer: { it: 'Fondazione Italia USA \u00b7 Ottobre 2025', en: 'Fondazione Italia USA \u00b7 October 2025' },
        desc:   { it: 'Riconoscimento nazionale assegnato annualmente a mille giovani laureati italiani distintisi per l\u2019eccellenza del percorso accademico e il potenziale di leadership in ambito internazionale.', en: 'National award granted annually to one thousand young Italian graduates who have distinguished themselves through exemplary academic achievement and leadership potential in an international context.' }
      },
      {
        icon:   '\U0001F393',
        title:  { it: 'Borsa di Studio per Merito Accademico', en: 'Merit-Based Academic Scholarship' },
        issuer: { it: 'Fondazione Italia USA \u00b7 Ago 2025', en: 'Fondazione Italia USA \u00b7 Aug 2025' },
        desc:   { it: 'Borsa assegnata per l\u2019accesso al Master Executive in Leadership per le Relazioni Internazionali e il Made in Italy, in virt\u00f9 del percorso accademico eccellente.', en: 'Scholarship awarded for admission to the Executive Master in Leadership for International Relations and Italian Excellence, granted on the basis of outstanding academic record.' }
      }
    ]
  },

  /* ── Contacts ── */
  contacts: {
    label:         { it: 'Contatti',              en: 'Contacts' },
    title:         { it: 'Mettiamoci in Contatto', en: 'Get in Touch' },
    locationLabel: { it: 'Sede',                  en: 'Location' },
    locationValue: { it: 'Roma, Italia',           en: 'Rome, Italy' },
    linkedinLabel: 'LinkedIn',
    linkedinText:  'LinkedIn \u2014 Profilo Professionale',
    linkedinAria:  {
      it: 'Profilo LinkedIn di Mariaceleste Picanza (si apre in nuova finestra)',
      en: "Mariaceleste Picanza's LinkedIn profile (opens in new window)"
    },
    ctaText: { it: 'Connettiti su LinkedIn', en: 'Connect on LinkedIn' },
    ctaAria: {
      it: 'Visita il profilo LinkedIn di Mariaceleste Picanza',
      en: 'Visit the LinkedIn profile of Mariaceleste Picanza'
    },
    note: {
      it: 'Sono disponibile per opportunit\u00e0 di stage, collaborazioni in ambito legale, progetti di ricerca in materia di diritto alimentare, ambientale e commercio internazionale, nonch\u00e9 per partecipare a eventi, convegni o iniziative nel settore giuridico. Non esitate a contattarmi, sar\u00f2 lieta di rispondere.',
      en: 'I am open to internship opportunities, legal collaborations, research projects in food law, environmental law and international trade, as well as participation in events, conferences or professional initiatives in the legal sector. Please do not hesitate to reach out \u2014 I will be glad to reply.'
    },
    bioThirdLabel: {
      it: 'Bio in Terza Persona (per CV \u00b7 Brochure \u00b7 Siti)',
      en: 'Third-Person Bio (for CV \u00b7 Brochures \u00b7 Websites)'
    },
    bioThird: {
      it: 'Mariaceleste Picanza \u00e8 una giurista romana, laureata con lode in Giurisprudenza presso l\u2019Universit\u00e0 LUMSA con una tesi in diritto ambientale sul caso del glifosato. Attualmente frequenta il LL.M. in Food Law alla Luiss Guido Carli e il Corso di Formazione Forense LUMSA per l\u2019accesso alla professione legale. Vincitrice del Premio America Giovani 2025 della Fondazione Italia USA, si specializza in diritto alimentare, ambientale e regolamentazione internazionale.',
      en: 'Mariaceleste Picanza is a Roman jurist who graduated magna cum laude in Law from LUMSA University with a thesis in environmental law focused on the glyphosate case. She is currently completing an LL.M. in Food Law at LUISS Guido Carli and bar admission training at LUMSA. A recipient of the Premio America Giovani 2025 awarded by Fondazione Italia USA, she specialises in food law, environmental regulation and international trade.'
    }
  },

  /* ── Footer ── */
  footer: {
    location: { it: 'Roma, Italia', en: 'Rome, Italy' }
  }

};
