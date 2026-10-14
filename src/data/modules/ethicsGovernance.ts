import { TopicContent } from '../../types';

export const ethicsGovernanceContent: TopicContent = {
  nodeId: 'ethics-governance-case-studies',
  title: 'Ethics, Integrity & Administrative Case Studies',
  titleTelugu: 'నీతిశాస్త్రం, సత్యనిష్ఠ & పరిపాలనా అధ్యయనాలు',
  subject: 'Ethics & Governance (UPSC GS-4, APPSC Paper-IV, TSPSC Paper-VI)',
  overview: 'Foundational civil service values: Integrity, impartiality, objectivity, empathy; Nolan Committee Seven Principles of Public Life, 2nd Administrative Reforms Commission (ARC) Fourth Report on Ethics in Governance, emotional intelligence frameworks, and structured case-study resolution templates.',
  standardReferences: [
    {
      title: 'Second Administrative Reforms Commission (4th Report: Ethics in Governance)',
      source: 'Government of India (MoPPSG & Pensions)',
      relevance: 'The gold standard blueprint for anti-corruption machinery, code of ethics, and public procurement reforms.'
    },
    {
      title: 'Standards in Public Life (First Report of Nolan Committee)',
      source: 'UK Committee on Standards in Public Life (Lord Nolan)',
      relevance: 'Universally accepted canonical source for the Seven Principles of Public Life.'
    },
    {
      title: 'Central Civil Services (Conduct) Rules, 1964',
      source: 'Department of Personnel and Training (DoPT)',
      relevance: 'Statutory code governing conflict of interest, gifts, political neutrality, and private investments.'
    }
  ],
  infographic: {
    title: 'Nolan Committee Principles & Administrative Ethical Framework',
    subtitle: 'Core Values, Anti-Corruption Architecture & Ethical Dilemma Resolution',
    type: 'matrix',
    items: [
      {
        heading: '1. Selflessness & Integrity',
        subheading: 'Public Interest Supremacy',
        description: 'Holders of public office must act solely in terms of the public interest. Must not place themselves under financial obligations to outside individuals or organizations.',
        badge: 'Zero Compromise',
        highlight: true
      },
      {
        heading: '2. Objectivity & Accountability',
        subheading: 'Evidence-Based Decisions',
        description: 'Decisions in awarding contracts or recommending individuals must be made strictly on merit. Must submit themselves to scrutiny appropriate to their office.',
        badge: 'Merit & Scrutiny',
        highlight: false
      },
      {
        heading: '3. Openness & Honesty',
        subheading: 'Transparency & Disclosure',
        description: 'Give reasons for decisions and restrict information only when wider public interest demands. Declare private interests relating to public duties (conflict of interest).',
        badge: 'RTI Compliance',
        highlight: true
      },
      {
        heading: '4. Leadership by Example',
        subheading: 'Promoting Ethical Culture',
        description: 'Holders of public office should promote and support these principles by leadership and example, inspiring sub-ordinates to uphold institutional probity.',
        badge: 'Moral Leadership',
        highlight: true
      }
    ]
  },
  cheatSheet: {
    corePillars: [
      {
        title: 'Nolan Committee Seven Principles of Public Life (1995)',
        points: [
          '1. Selflessness: Decisions must serve only the public interest, never private gain.',
          '2. Integrity: Resisting undue external influences and financial obligations.',
          '3. Objectivity: Impartial execution of duties based on evidence, law, and merit.',
          '4. Accountability: Submitting actions to public and institutional scrutiny.',
          '5. Openness: Maximizing transparency and providing reasoned explanations.',
          '6. Honesty: Transparent declaration of private interests and duty to resolve conflict.',
          '7. Leadership: Embodying and actively defending ethical norms within the hierarchy.'
        ]
      },
      {
        title: 'Emotional Intelligence (EI) in Administration (Daniel Goleman)',
        points: [
          'Self-Awareness: Recognizing one’s own emotional triggers, prejudices, and stress levels under political or public pressure.',
          'Self-Regulation: Channeling impulses constructively; maintaining calm composure during violent riots, protests, or aggressive media scrutiny.',
          'Social Awareness (Empathy): Understanding perspectives of marginalized communities (tribals, urban poor, disabled) beyond rigid bureaucratic rules.',
          'Relationship Management: Negotiating with striking unions, motivating a fatigued disaster-response field staff, and de-escalating communal tensions.'
        ]
      },
      {
        title: '2nd ARC Recommendations on Ethics in Governance',
        points: [
          'Code of Ethics vs Code of Conduct: Code of conduct prescribes "what not to do" (negative list); Code of ethics inspires "what to aspire to" (positive constitutional values).',
          'Statutory Protection for Whistleblowers: Enacted via Whistle Blowers Protection Act 2014.',
          'Public Procurement Law: Enactment of a comprehensive public procurement statute with mandatory e-procurement and independent oversight monitors.',
          'Strengthening Anti-Corruption Bodies: Constitutional status for Lokpal and Lokayuktas with their own independent investigative wings.'
        ]
      }
    ],
    statutoryOrConstitutionalProvisions: [
      {
        code: 'Prevention of Corruption Act 1988',
        label: 'Section 17A Prior Sanction',
        detail: 'Requires prior approval of competent authority before conducting any inquiry or investigation into decisions taken by public servants in official discharge.'
      },
      {
        code: 'Article 311',
        label: 'Dismissal/Removal Safeguards',
        detail: 'Provides constitutional protection to civil servants: no civil servant can be dismissed without an inquiry and reasonable opportunity of being heard.'
      },
      {
        code: 'Whistle Blowers Protection Act 2014',
        label: 'Identity Concealment Mechanism',
        detail: 'Statutory mechanism for receiving complaints relating to corruption or willful misuse of power and safeguarding complainants against victimization.'
      }
    ],
    landmarkPrecedents: [
      {
        title: 'Vineet Narain v. Union of India (1998)',
        significance: 'Supreme Court struck down the "Single Directive" requirement, insulating Central Vigilance Commission (CVC) and CBI from executive interference.'
      },
      {
        title: 'Prakash Singh v. Union of India (2006)',
        significance: 'Laid down seven landmark directives for police reforms: security of tenure (minimum 2 years for DGP/SP), separation of investigation and law & order, and Police Complaints Authorities.'
      }
    ],
    examPitfalls: [
      'Do not confuse "Code of Conduct" (rules defining prohibited activities like accepting expensive gifts) with "Code of Ethics" (guiding principles and philosophical values like compassion and justice).',
      'In Ethics Case Studies, NEVER choose the extremes of blind adherence to illegal orders OR reckless insubordination without exhausting institutional redressal mechanisms.',
      'Always identify ALL primary and secondary stakeholders in a case study (e.g. affected citizens, government exchequer, political superiors, junior staff, your own conscience).',
      'Empathy without Objectivity leads to favoritism; Objectivity without Empathy leads to heartless bureaucracy. Effective civil servants synthesize both.'
    ]
  },
  topperNotes: {
    author: 'AspirantAtlas Topper Editorial Board',
    rankOrCred: 'Curated by UPSC GS-4 Top Scorers (130+ Marks Club)',
    readingTime: '10 min core revision',
    keyTakeaways: [
      'Structure every Case Study using the 6-Step Template: 1) Facts of the case; 2) Key ethical dilemmas involved; 3) Stakeholder mapping; 4) Evaluation of options (Pros/Cons); 5) Course of action chosen with justification; 6) Long-term systemic reforms.',
      'Quote thinkers and moral philosophers strategically: Aristotle (Virtue Ethics), Immanuel Kant (Deontology/Categorical Imperative), J.S. Mill (Utilitarianism/Greatest Good), and Mahatma Gandhi (Sarvodaya & Talisman).',
      'Use Gandhi’s Talisman: "Recall the face of the poorest and the weakest man whom you may have seen, and ask yourself if the step you contemplate is going to be of any use to him."'
    ],
    corePointers: [
      {
        title: 'Common Ethical Dilemmas in Administration',
        notes: [
          'Law vs Conscience: Following a rigid procedural rule that results in denial of food grains to an elderly widow without biometric authentication vs discretionary relaxation.',
          'Development vs Tribal Rights: Rapid land acquisition for a critical hydroelectric power project vs displacing vulnerable indigenous tribes from ancestral habitats.',
          'Whistleblowing vs Institutional Loyalty: Reporting financial irregularities in a senior minister’s department to anti-corruption authorities vs maintaining official hierarchy.'
        ]
      },
      {
        title: 'Deontology vs Consequentialism in Governance',
        notes: [
          'Deontology (Kant): Focuses on the rightness of the action itself (Means matter). A civil servant must never lie or falsify data even if it achieves a good result.',
          'Utilitarianism (Bentham/Mill): Focuses on consequences (Ends justify the means). Decisions maximizing the greatest happiness for the greatest number.',
          'Gandhian Synthesis: Clean means are non-negotiable for noble ends: "They say, \'means are, after all, means\'. I would say, \'means are, after all, everything\'."'
        ]
      }
    ]
  },
  officialDocuments: [
    {
      id: 'second-arc-ethics-governance-report',
      title: 'Second Administrative Reforms Commission: 4th Report on Ethics in Governance',
      issuingAuthority: 'Government of India (Second ARC)',
      gazetteNoOrYear: 'January 2007',
      downloadUrl: '/documents/second-arc-ethics-governance.pdf',
      r2StorageKey: 'gazettes/second-arc-ethics-governance.pdf',
      fileSize: '2.4 MB',
      isPrimaryLaw: false
    }
  ],
  microQuiz: [
    {
      id: 'eth-q1',
      question: 'Which of the following is NOT one of the Seven Principles of Public Life formulated by the Nolan Committee in 1995?',
      questionTelugu: '1995 నాటి నోలన్ కమిటీ రూపొందించిన ప్రభుత్వ సేవా విలువలలో ఏది లేదు?',
      options: ['Selflessness', 'Integrity', 'Profitability', 'Accountability'],
      correctIndex: 2,
      explanation: 'The Nolan principles are Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, and Leadership. "Profitability" is a commercial goal, not a public service ethical principle.',
      tag: 'Nolan Committee'
    },
    {
      id: 'eth-q2',
      question: 'Daniel Goleman’s emotional intelligence framework identifies which component as the ability to understand the emotional makeup of other people and treat them accordingly?',
      questionTelugu: 'డేనియల్ గోల్‌మన్ ఎమోషనల్ ఇంటెలిజెన్స్ నమూనా ప్రకారం ఇతర వ్యక్తుల భావోద్వేగాలను అర్థం చేసుకునే సామర్థ్యాన్ని ఏమంటారు?',
      options: ['Self-Regulation', 'Social Awareness (Empathy)', 'Internal Motivation', 'Cognitive Dissonance'],
      correctIndex: 1,
      explanation: 'Social Awareness or Empathy is the ability to perceive and understand others’ feelings, perspectives, and unspoken concerns, essential for sensitive public administration.',
      tag: 'Emotional Intelligence'
    },
    {
      id: 'eth-q3',
      question: 'According to the Second Administrative Reforms Commission (2nd ARC), what is the key distinction between a "Code of Conduct" and a "Code of Ethics"?',
      questionTelugu: 'రెండవ పరిపాలనా సంస్కరణల కమిషన్ (2nd ARC) ప్రకారం "కోడ్ ఆఫ్ కండక్ట్" మరియు "కోడ్ ఆఫ్ ఎథిక్స్" మధ్య ప్రధాన వ్యత్యాసం ఏమిటి?',
      options: [
        'Code of Conduct applies only to judges, while Code of Ethics applies to ministers',
        'Code of Conduct specifies prohibited actions (what not to do), while Code of Ethics articulates aspirational moral values (what to strive for)',
        'Code of Conduct is optional, while Code of Ethics is criminally punishable',
        'There is no distinction; they are identical legal documents'
      ],
      correctIndex: 1,
      explanation: 'The 2nd ARC pointed out that a Code of Conduct is prohibitive and regulatory (listing forbidden acts), whereas a Code of Ethics is inspirational and values-based.',
      tag: 'Administrative Reforms'
    },
    {
      id: 'eth-q4',
      question: 'Under Section 17A inserted into the Prevention of Corruption Act in 2018, what statutory safeguard was introduced for public servants?',
      questionTelugu: '2018 లో అవినీతి నిరోధక చట్టంలో చేర్చిన సెక్షన్ 17A ప్రకారం ప్రభుత్వ ఉద్యోగులకు కల్పించిన చట్టబద్ధమైన రక్షణ ఏమిటి?',
      options: [
        'Total immunity from all investigations forever',
        'Mandatory prior sanction/approval from the competent authority before conducting any inquiry or investigation into official decisions',
        'Right to appoint private defense attorneys at government cost',
        'Exemption from filing annual asset declarations'
      ],
      correctIndex: 1,
      explanation: 'Section 17A mandates prior approval of the competent government authority before any police officer conducts any inquiry or investigation into an offense relatable to an official recommendation or decision.',
      tag: 'Anti-Corruption Laws'
    },
    {
      id: 'eth-q5',
      question: 'The ethical dilemma where a civil servant is required to execute a policy that they personally consider morally questionable, but which is legally enacted by an elected legislature, tests the principle of:',
      questionTelugu: 'శాసనసభ ద్వారా చట్టబద్ధంగా ఆమోదించబడిన విధానాన్ని వ్యక్తిగత మనస్సాక్షికి విరుద్ధంగా అమలు చేయాల్సి వచ్చినప్పుడు సివిల్ సర్వెంట్ ఎదుర్కొనే సందిగ్ధత ఏ సూత్రాన్ని పరీక్షిస్తుంది?',
      options: [
        'Civil Service Neutrality and Constitutional Morality',
        'Opportunistic Careerism',
        'Judicial Activism',
        'Substantive Due Process'
      ],
      correctIndex: 0,
      explanation: 'This classic dilemma tests Civil Service Neutrality: public servants are bound by their constitutional oath to execute legitimate statutory enactments unless they violate constitutional rights, while recording dissent on file.',
      tag: 'Civil Service Values'
    }
  ],
  mainsScaffold: {
    question: 'You are the District Collector of an aspirational tribal district. A multi-national industrial conglomerate has been allotted land for a critical copper smelting plant that promises 10,000 local jobs. However, local tribal Gram Sabhas are protesting, alleging fraudulent consent under PESA Act and environmental pollution of their sacred forest stream. A cabinet minister calls you and directs you to clear the site within 48 hours using police force if necessary. How will you handle this situation? Discuss the ethical dilemmas involved and your course of action. (20 Marks / 250 Words)',
    marks: 20,
    timeMinutes: 15,
    approach: {
      intro: 'Briefly define the administrative situation: A high-stakes clash between industrial development, tribal rights under PESA Act 1996, environmental protection, political pressure from superiors, and maintenance of public order.',
      body: [
        {
          subheading: '1. Ethical Dilemmas Involved',
          points: [
            'Economic Development vs Tribal Inalienable Rights: Job creation for the youth vs ecological disruption of tribal cultural habitat.',
            'Constitutional Morality vs Political Directives: Upholding the rule of law (PESA, Forest Rights Act) vs obeying verbal orders of a cabinet minister.',
            'Use of Force vs Empathy & Non-Violence: Using police coercion against peaceful indigenous citizens vs peaceful dispute resolution.'
          ]
        },
        {
          subheading: '2. Stakeholder Mapping',
          points: [
            'Tribal Communities & Gram Sabhas (vulnerable, rights-holders)',
            'Industrial Project Proponents & Local Job Aspirants',
            'District Administration & Law Enforcement Machinery',
            'Elected Government / Cabinet Minister',
            'Environment and Sacred Stream Ecosystem'
          ]
        },
        {
          subheading: '3. Immediate Course of Action',
          points: [
            'Maintain Restraint & Decline Unlawful Coercion: Politely inform the minister in writing that using police force without statutory inquiry poses grave law and order risks and violates PESA provisions.',
            'Order Transparent Verification of PESA Consent: Form a multi-disciplinary committee comprising an independent magistrate, tribal representatives, and civil society observers to verify whether Gram Sabha consent was genuine or forged.',
            'Scientific Environmental Baseline Study: Direct State Pollution Control Board to inspect the project’s effluent treatment designs and ensure zero liquid discharge (ZLD) into the sacred stream.'
          ]
        },
        {
          subheading: '4. Long-Term Resolution',
          points: [
            'Facilitate Tripartite Dialogue: Convene open round-table between company leadership, tribal elders, and district officials to address grievances.',
            'Fair Compensation & Tribal Benefit Sharing: Ensure local community shares in equity, localized skill training, and strict monitoring of sacred sites.'
          ]
        }
      ],
      conclusion: 'Conclude that true governance lies in balancing economic aspirations with constitutional morality. By upholding procedural justice and protecting vulnerable citizens, a civil servant reinforces the legitimacy of the democratic state.'
    }
  }
};
