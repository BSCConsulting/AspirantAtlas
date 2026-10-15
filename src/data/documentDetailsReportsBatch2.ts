import { DocumentDetail } from '../types';

export const REPORTS_BATCH2_DETAILS: Record<string, DocumentDetail> = {
  // =========================================================================
  // 1. SECOND ARC (1ST REPORT): RIGHT TO INFORMATION
  // =========================================================================
  'arc2-rti-master-key': {
    id: 'arc2-rti-master-key',
    title: '2nd ARC 1st Report: Right to Information — Master Key to Good Governance',
    titleTelugu: 'రెండవ పరిపాలనా సంస్కరణల కమిషన్ 1వ నివేదిక: సమాచార హక్కు చట్టం (ఆర్టీఐ)',
    issuingAuthority: 'Department of Administrative Reforms & Public Grievances (DARPG), Govt of India',
    dateOrYear: 'June 2006',
    pages: '215 Pages Official Report',
    summary: 'The seminal report on operationalizing transparency in Indian administration following the enactment of the RTI Act 2005. Recommends repealing the Official Secrets Act 1923, protecting public interest disclosures, proactive suo motu disclosure under Section 4, and strengthening Central & State Information Commissions.',
    pdfFilename: 'second-arc-1st-report-rti.pdf',
    sections: [
      {
        numberOrCode: 'Official Secrets Act & Culture of Secrecy',
        title: 'Repeal of OSA 1923 & Section 5 Replacement',
        content: [
          'Recommended repealing the colonial Official Secrets Act, 1923, and inserting a dedicated chapter on National Security in the National Security Act.',
          'Noted that the colonial bureaucratic mindset treated secrecy as the default rule and openness as an exception.',
          'Advocated that public interest in disclosure should systematically override confidentiality except in strictly defined defense and national security matters.'
        ],
        keyHighlight: 'Recommended repealing the Official Secrets Act 1923 to dismantle the colonial culture of administrative secrecy.'
      },
      {
        numberOrCode: 'Section 4: Suo Motu Disclosures',
        title: 'Digital Proactive Transparency & Record Digitisation',
        content: [
          'Recommended that at least 80% of all administrative information should be placed proactively in the public domain via digital portals under Section 4(1)(b).',
          'Record management reform: Mandatory indexing and computerization of government files across all ministries within a strict time bound period.'
        ],
        keyHighlight: 'Proactive digital disclosure eliminates the need for citizens to file individual RTI applications.'
      },
      {
        numberOrCode: 'Information Commissions',
        title: 'Selection Process & Institutional Autonomy',
        content: [
          'Recommended broad-based search committees for selecting Central and State Chief Information Commissioners to ensure bipartisan credibility.',
          'Abolished the practice of Information Commissions becoming retirement sinecures exclusively for retired civil servants; recommended appointment of eminent persons from civil society, law, and journalism.'
        ],
        keyHighlight: 'Advocated diverse non-bureaucratic composition for Information Commissions.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What did the 2nd ARC recommend regarding the Official Secrets Act, 1923?',
        answer: 'The 2nd ARC recommended repealing the Official Secrets Act, 1923 entirely, arguing that its vague provisions fostered administrative opacity. It proposed incorporating necessary national security safeguards directly into the National Security Act.',
        examTip: 'Direct quote for GS-2 Transparency & Governance questions.'
      }
    ],
    testQuestions: [
      {
        id: 'rti-q1',
        question: 'Which report of the Second Administrative Reforms Commission is titled "Right to Information: Master Key to Good Governance"?',
        options: ['First Report', 'Third Report', 'Sixth Report', 'Ninth Report'],
        correctIndex: 0,
        explanation: 'The First Report of the Second ARC (June 2006) is titled "Right to Information: Master Key to Good Governance".',
        tag: 'Governance'
      }
    ]
  },

  // =========================================================================
  // 2. SECOND ARC (6TH REPORT): LOCAL GOVERNANCE
  // =========================================================================
  'arc2-local-governance': {
    id: 'arc2-local-governance',
    title: '2nd ARC 6th Report: Local Governance — An Inspiring Journey into the Future',
    titleTelugu: 'రెండవ పరిపాలనా సంస్కరణల కమిషన్ 6వ నివేదిక: స్థానిక స్వపరిపాలన (73 & 74 సవరణలు)',
    issuingAuthority: 'DARPG, Government of India',
    dateOrYear: 'October 2007',
    pages: '340 Pages Official Report',
    summary: 'Comprehensive policy roadmap evaluating democratic decentralization under the 73rd and 74th Constitutional Amendments. Focuses on the "3 Fs" (Functions, Funds, Functionaries), activity mapping, State Election Commissions parity, and District Planning Committees.',
    pdfFilename: 'second-arc-6th-report-local-governance.pdf',
    sections: [
      {
        numberOrCode: 'The 3 Fs & Activity Mapping',
        title: 'Devolution of Functions, Funds & Functionaries',
        content: [
          'Identified that while States devolved functions on paper, actual financial funds and bureaucratic functionaries remained tightly held by state-level line departments.',
          'Recommended mandatory legislative "Activity Mapping" delineating exactly what Village, Block, and District Panchayats are empowered to execute.'
        ],
        keyHighlight: 'Activity Mapping is the essential prerequisite for genuine fiscal decentralization.'
      },
      {
        numberOrCode: 'State Finance & Election Commissions',
        title: 'Constitutional Parity with Union Bodies',
        content: [
          'State Finance Commissions (Art 243-I & 243-Y): Mandatory constitution every 5 years; Action Taken Reports must be placed before State Legislatures within 6 months.',
          'State Election Commissions (Art 243-K): Institutional parity with the Election Commission of India; removal only via legislative impeachment like High Court Judges.'
        ],
        keyHighlight: 'Strengthened the autonomy of State Election and Finance Commissions.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What is "Activity Mapping" in the context of Panchayati Raj institutions?',
        answer: 'Activity Mapping is a formal administrative process of disaggregating subjects listed in the 11th Schedule into specific sub-activities, explicitly specifying which level of panchayat (Gram, Mandal, or Zilla) is responsible for planning, executing, and funding each task.',
        examTip: 'High-value keyword for Panchayati Raj GS-2 questions.'
      }
    ],
    testQuestions: [
      {
        id: 'loc-q1',
        question: 'Which constitutional article empowers the State Finance Commission to review the financial position of Panchayats?',
        options: ['Article 243-I', 'Article 243-K', 'Article 243-D', 'Article 243-G'],
        correctIndex: 0,
        explanation: 'Article 243-I mandates the Governor to constitute a State Finance Commission every five years.',
        tag: 'Panchayati Raj'
      }
    ]
  },

  // =========================================================================
  // 3. SECOND ARC (8TH REPORT): COMBATING TERRORISM
  // =========================================================================
  'arc2-combating-terrorism': {
    id: 'arc2-combating-terrorism',
    title: '2nd ARC 8th Report: Combating Terrorism — Protecting by Righteousness',
    titleTelugu: 'రెండవ పరిపాలనా సంస్కరణల కమిషన్ 8వ నివేదిక: ఉగ్రవాద నిరోధక వ్యూహం',
    issuingAuthority: 'DARPG, Government of India',
    dateOrYear: 'June 2008',
    pages: '190 Pages Official Report',
    summary: 'Landmark national security report recommending the establishment of a specialized federal investigative agency for terror crimes (which directly led to the National Investigation Agency Act, 2008), intelligence sharing protocols under Multi-Agency Centre (MAC), and freezing terror finance.',
    pdfFilename: 'second-arc-8th-report-combating-terrorism.pdf',
    sections: [
      {
        numberOrCode: 'Federal Agency & NIA Genesis',
        title: 'Creation of a Specialized Federal Investigative Agency',
        content: [
          'Recommended creating a specialized federal statutory agency with all-India jurisdiction to investigate and prosecute terrorism and trans-border cyber offenses.',
          'Directly materialized as the National Investigation Agency (NIA) through Parliament enactment following the 26/11 Mumbai terror attacks.'
        ],
        keyHighlight: 'The primary policy recommendation that established the National Investigation Agency (NIA).'
      },
      {
        numberOrCode: 'Intelligence & Terror Financing',
        title: 'Multi-Agency Centre (MAC) & Financial Intelligence Unit',
        content: [
          'Strengthening the Multi-Agency Centre (MAC) in the Intelligence Bureau for 24x7 real-time intelligence pooling among Central and State agencies.',
          'Leveraging the Financial Intelligence Unit (FIU-IND) and PMLA to track hawala channels, counterfeit currency, and shell companies funding insurgent groups.'
        ],
        keyHighlight: 'Intelligence integration under MAC eliminates inter-agency operational silos.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'How did the 2nd ARC 8th Report balance national security with civil liberties?',
        answer: 'The Commission emphasized that anti-terror legislation must incorporate robust safeguards against arbitrary detention, mandatory judicial oversight, time-bound trials in designated Special Courts, and strict compensation for malicious wrongful arrests.',
        examTip: 'Cite in GS-3 Internal Security and GS-2 Fundamental Rights questions.'
      }
    ],
    testQuestions: [
      {
        id: 'ter-q1',
        question: 'The National Investigation Agency (NIA) was established under an Act of Parliament in 2008 based on recommendations in which 2nd ARC Report?',
        options: ['Eighth Report', 'Fifth Report', 'Seventh Report', 'Tenth Report'],
        correctIndex: 0,
        explanation: 'The 8th Report ("Combating Terrorism: Protecting by Righteousness") recommended creating a specialized federal investigative agency.',
        tag: 'Internal Security'
      }
    ]
  },

  // =========================================================================
  // 4. LAW COMMISSION 255TH REPORT: ELECTORAL REFORMS
  // =========================================================================
  'law-commission-255-electoral': {
    id: 'law-commission-255-electoral',
    title: 'Law Commission of India 255th Report: Electoral Reforms',
    titleTelugu: 'భారత న్యాయ కమిషన్ 255వ నివేదిక: ఎన్నికల సంస్కరణలు',
    issuingAuthority: 'Law Commission of India, Ministry of Law and Justice',
    dateOrYear: 'March 2015',
    pages: '280 Pages Statutory Report',
    summary: 'The most comprehensive judicial and legal review of electoral reforms in India, chaired by Justice A.P. Shah. Recommends strict criminalisation safeguards, regulated political party expenditure limits, regulating opinion/exit polls, state funding in kind, and disqualification for false affidavits.',
    pdfFilename: 'law-commission-report-255-electoral-reforms.pdf',
    sections: [
      {
        numberOrCode: 'Candidate Disqualification',
        title: 'Framing of Charges & False Affidavits',
        content: [
          'Recommended disqualifying candidates facing trial for heinous offenses (punishable with 5+ years imprisonment) from the date charges are formally framed by a court.',
          'Recommended making the submission of false affidavits under Section 125A of RPA an electoral offense punishable with a minimum of 2 years imprisonment (triggering automatic disqualification under Section 8).'
        ],
        keyHighlight: 'Targeted criminalization at the charges-framing stage with strict judicial safeguards.'
      },
      {
        numberOrCode: 'Campaign Finance & Paid News',
        title: 'Expenditure Caps on Political Parties & Media Ethics',
        content: [
          'Proposed capping expenditure of political parties during election campaigns (currently only individual candidates have spending ceilings under Rule 90).',
          'Recommended making "Paid News" an explicit corrupt practice under Section 123 of RPA 1951, punishable with election disqualification.'
        ],
        keyHighlight: 'Advocated extending expenditure ceilings from individual candidates to political parties.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Why did the Law Commission recommend capping political party expenditure in addition to candidate expenditure?',
        answer: 'Currently, only individual candidates face statutory expenditure limits (e.g. ₹95 lakh for Lok Sabha), while political parties can spend unlimited funds. Candidates exploit this loophole by having parties fund their lavish advertising, defeating the purpose of expenditure ceilings.',
        examTip: 'High-scoring analytical point for GS-2 electoral reforms questions.'
      }
    ],
    testQuestions: [
      {
        id: 'lc-q1',
        question: 'Who chaired the 20th Law Commission of India when the landmark 255th Report on Electoral Reforms was submitted in 2015?',
        options: ['Justice A.P. Shah', 'Justice B.S. Chauhan', 'Justice M.N. Venkatachaliah', 'Justice J.S. Verma'],
        correctIndex: 0,
        explanation: 'Justice A.P. Shah was the Chairman of the 20th Law Commission of India that authored the 255th Report.',
        tag: 'Electoral Reforms'
      }
    ]
  },

  // =========================================================================
  // 5. JUSTICE J.S. VERMA COMMITTEE REPORT (CRIMINAL LAW)
  // =========================================================================
  'justice-verma-committee-report': {
    id: 'justice-verma-committee-report',
    title: 'Justice J.S. Verma Committee Report on Amendments to Criminal Law',
    titleTelugu: 'జస్టిస్ జె.ఎస్. వర్మ కమిటీ నివేదిక: క్రిమినల్ చట్ట సవరణలు & మహిళా భద్రత',
    issuingAuthority: 'Ministry of Home Affairs / Committee on Amendments to Criminal Law',
    dateOrYear: 'January 2013',
    pages: '630 Pages Landmark Report',
    summary: 'Constituted following the December 16, 2012 Delhi gang-rape incident. Chaired by former Chief Justice of India J.S. Verma, Justice Leila Seth, and Gopal Subramanium. Led to the Criminal Law (Amendment) Act, 2013, expanding sexual assault definitions, introducing stalking/voyeurism offenses, and establishing police accountability.',
    pdfFilename: 'justice-verma-committee-report-2013.pdf',
    sections: [
      {
        numberOrCode: 'Criminal Law Amendment Act 2013',
        title: 'Broadening Sexual Offenses in Indian Penal Code',
        content: [
          'Expanded Section 375 of IPC from penile penetration to encompass any non-consensual penetrative act.',
          'Introduced new distinct offenses: Acid attack (Sec 326A/326B), Voyeurism (Sec 354C), Stalking (Sec 354D), and Disrobing a woman (Sec 354B).',
          'Penalties for public servants who fail to register FIRs regarding sexual offenses under amended Section 166A of IPC.'
        ],
        keyHighlight: 'Redefined sexual assault jurisprudence and created criminal liability for police officers refusing to register FIRs.'
      },
      {
        numberOrCode: 'Medical & Evidence Reforms',
        title: 'Banning Two-Finger Test & Victim Dignity',
        content: [
          'Categorically condemned and banned the degrading "Two-Finger Test" (per-vaginum examination), declaring it a violation of bodily integrity and privacy under Article 21.',
          'Mandated that free medical treatment must be provided to victims of sexual offenses by all hospitals (public or private) under Section 357C of CrPC.'
        ],
        keyHighlight: 'Abolished the regressive two-finger test, later reaffirmed by the Supreme Court in 2022.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What institutional change did the Verma Committee recommend regarding police accountability during sexual crime reporting?',
        answer: 'The Committee recommended enacting Section 166A of the IPC, which makes it a punishable criminal offense for any police officer or public servant to knowingly refuse or fail to register an FIR regarding reported sexual violence against women.',
        examTip: 'Quote in GS-2 Social Justice and Women Empowerment answers.'
      }
    ],
    testQuestions: [
      {
        id: 'ver-q1',
        question: 'Under the Criminal Law (Amendment) Act 2013 enacted post-Verma Committee report, which section of the IPC makes stalking a punishable offense?',
        options: ['Section 354D', 'Section 354A', 'Section 354B', 'Section 354C'],
        correctIndex: 0,
        explanation: 'Section 354D was inserted into the Indian Penal Code to penalize stalking.',
        tag: 'Criminal Law'
      }
    ]
  },

  // =========================================================================
  // 6. NATIONAL EDUCATION POLICY (NEP 2020)
  // =========================================================================
  'nep-2020-policy-document': {
    id: 'nep-2020-policy-document',
    title: 'National Education Policy 2020 (NEP 2020) & Curricular Restructuring',
    titleTelugu: 'జాతీయ విద్యా విధానం 2020 (ఎన్‌ఈపీ 2020) & విద్యా సంస్కరణలు',
    issuingAuthority: 'Ministry of Education, Government of India',
    dateOrYear: 'July 2020 (Kasturirangan Committee)',
    pages: '66 Pages Comprehensive Policy',
    summary: 'The first comprehensive national education policy of the 21st century replacing the 1986 policy. Restructures school pedagogy from 10+2 to 5+3+3+4, emphasizes mother tongue/regional language instruction, promotes multidisciplinary higher education with multiple entry/exit points, and targets 6% of GDP public expenditure on education.',
    pdfFilename: 'national-education-policy-nep-2020.pdf',
    sections: [
      {
        numberOrCode: '5+3+3+4 Curricular Structure',
        title: 'Foundational, Preparatory, Middle & Secondary Stages',
        content: [
          'Replaced 10+2 with 5+3+3+4: Foundational Stage (5 years, ages 3–8: pre-school + grades 1–2), Preparatory Stage (3 years, ages 8–11: grades 3–5), Middle Stage (3 years, ages 11–14: grades 6–8), and Secondary Stage (4 years, ages 14–18: grades 9–12).',
          'NIPUN Bharat & FLN: Prioritizes Foundational Literacy and Numeracy (FLN) as an urgent national mission by Grade 3.',
          'Mother tongue / regional language as medium of instruction wherever possible until at least Grade 5.'
        ],
        keyHighlight: 'Integrated early childhood education (ages 3–6) into the formal formal schooling structure for the first time.'
      },
      {
        numberOrCode: 'Higher Education Reforms',
        title: 'Multidisciplinary FYUP, ABC & HECI',
        content: [
          'Four-Year Undergraduate Programme (FYUP) with flexible multiple entry and exit points: Certificate after 1 year, Diploma after 2 years, Bachelor’s Degree after 3 years, and Bachelor’s with Research after 4 years.',
          'Academic Bank of Credits (ABC): Digital repository storing credits earned across different higher educational institutions.',
          'Higher Education Commission of India (HECI): Proposed single overarching umbrella regulator replacing UGC and AICTE, with 4 distinct verticals.'
        ],
        keyHighlight: 'Multiple exit options eliminate credit loss for students forced to interrupt degrees.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What are the four distinct verticals proposed under the Higher Education Commission of India (HECI)?',
        answer: 'The four verticals under HECI are: (1) National Higher Education Regulatory Council (NHERC) for regulation, (2) National Accreditation Council (NAC) for accreditation, (3) Higher Education Grants Council (HEGC) for funding, and (4) General Education Council (GEC) for setting graduate academic standards.',
        examTip: 'High-yield conceptual architecture for GS-2 Education.'
      }
    ],
    testQuestions: [
      {
        id: 'nep-q1',
        question: 'The National Education Policy 2020 replaces the existing 10+2 school structure with which pedagogical framework?',
        options: ['5+3+3+4 structure', '5+4+3+2 structure', '4+4+4 structure', '3+3+3+3 structure'],
        correctIndex: 0,
        explanation: 'NEP 2020 introduces the 5+3+3+4 structure covering ages 3 to 18.',
        tag: 'Social Sector & Education'
      }
    ]
  },

  // =========================================================================
  // 7. NITI AAYOG: NATIONAL MULTIDIMENSIONAL POVERTY INDEX (MPI)
  // =========================================================================
  'niti-aayog-multidimensional-poverty': {
    id: 'niti-aayog-multidimensional-poverty',
    title: 'NITI Aayog National Multidimensional Poverty Index (MPI) Report',
    titleTelugu: 'నీతి ఆయోగ్ జాతీయ బహుమితీయ పేదరిక సూచిక (ఎంపీఐ)',
    issuingAuthority: 'NITI Aayog, Government of India (with OPHI & UNDP)',
    dateOrYear: 'National MPI Baseline & Progress Reports',
    pages: '190 Pages Data Blueprint',
    summary: 'The national benchmark measuring non-income deprivations in India using the Alkire-Foster methodology across 12 indicators aligned with SDG 1. Highlights that 13.5 crore Indians exited multidimensional poverty between 2015-16 and 2019-21, with rural areas experiencing the fastest rate of poverty reduction.',
    pdfFilename: 'niti-aayog-national-mpi-report.pdf',
    sections: [
      {
        numberOrCode: 'Methodology & 12 Indicators',
        title: 'Health, Education & Standard of Living',
        content: [
          'Constructed using National Family Health Survey (NFHS) data across 3 equal dimensions: Health (1/3 weight), Education (1/3 weight), and Standard of Living (1/3 weight).',
          '12 indicators: Nutrition, Child & Adolescent Mortality, Maternal Health (added by India), Years of Schooling, School Attendance, Cooking Fuel, Sanitation, Drinking Water, Electricity, Housing, Bank Account (added by India), and Assets.'
        ],
        keyHighlight: 'India added Maternal Health and Bank Accounts to the global Oxford MPI methodology.'
      },
      {
        numberOrCode: 'State-Level Poverty Reductions',
        title: 'Fastest Reductions & Regional Realities',
        content: [
          'Proportion of multidimensionally poor individuals declined sharply from 24.85% in 2015-16 to 14.96% in 2019-21.',
          'States with steepest poverty decline: Uttar Pradesh, Bihar, Madhya Pradesh, Odisha, and Rajasthan.',
          'Southern States (Kerala, Tamil Nadu, Andhra Pradesh, Telangana) maintained low MPI headcounts (< 7%), driven by high social sector investments.'
        ],
        keyHighlight: 'Rural multidimensional poverty dropped from 32.59% to 19.28%.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Which two indicators did NITI Aayog add to the global MPI framework to create the National MPI for India?',
        answer: 'NITI Aayog added (1) Maternal Health (under the Health dimension) and (2) Bank Accounts (under the Standard of Living dimension, reflecting Jan Dhan financial inclusion) to align with national policy priorities.',
        examTip: 'Frequent question in UPSC and State PSC exams.'
      }
    ],
    testQuestions: [
      {
        id: 'mpi-q1',
        question: 'What methodology is utilized by NITI Aayog to compute India’s National Multidimensional Poverty Index?',
        options: ['Alkire-Foster (AF) methodology', 'Sen Index methodology', 'Tendulkar Committee poverty line', 'Rangarajan Committee basket'],
        correctIndex: 0,
        explanation: 'The National MPI uses the dual-cutoff Alkire-Foster methodology developed by the Oxford Poverty and Human Development Initiative (OPHI).',
        tag: 'Poverty & Inclusive Growth'
      }
    ]
  },

  // =========================================================================
  // 8. NITI AAYOG: STRATEGY FOR NEW INDIA @ 75
  // =========================================================================
  'niti-aayog-strategy-new-india': {
    id: 'niti-aayog-strategy-new-india',
    title: 'NITI Aayog: Strategy for New India @ 75',
    titleTelugu: 'నీతి ఆయోగ్: సరికొత్త భారతదేశ నిర్మాణం @ 75 సమగ్ర కార్యాచరణ',
    issuingAuthority: 'NITI Aayog, Government of India',
    dateOrYear: 'Flagship Strategic Blueprint',
    pages: '220 Pages Policy Roadmap',
    summary: 'The 41-chapter comprehensive development roadmap that replaced the Planning Commission’s Five-Year Plans. Organized across four sections: Drivers (GDP, Innovation, Industry), Infrastructure (Logistics, Energy, Digital), Inclusion (Health, Education, Gender), and Governance (Administrative reforms, Civil service modernisation).',
    pdfFilename: 'niti-aayog-strategy-for-new-india.pdf',
    sections: [
      {
        numberOrCode: 'Section 1: Drivers',
        title: 'Accelerating Economic Growth & Doubling Farm Incomes',
        content: [
          'Targeted raising the investment rate (Gross Fixed Capital Formation) to 36% of GDP from 29%.',
          'Shifting agriculture from production-centric to income-centric through e-NAM market integration, cold chain infrastructure, and Farmer Producer Organisations (FPOs).'
        ],
        keyHighlight: 'Replaced rigid input planning with outcome-based economic targets.'
      },
      {
        numberOrCode: 'Section 2 & 4: Infrastructure & Governance',
        title: 'Unified Logistics & Civil Service Lateral Entry',
        content: [
          'Lowering national logistics costs from 14% of GDP to less than 9% through PM GatiShakti multi-modal connectivity.',
          'Governance: Modernising civil services through lateral entry at Joint Secretary and Director levels to infuse specialized domain expertise.'
        ],
        keyHighlight: 'Pioneered lateral entry recruitment into central administrative ministries.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'How did NITI Aayog’s approach in "Strategy for New India @ 75" differ from erstwhile Five-Year Plans?',
        answer: 'Five-Year Plans were command-economy input allocations that dictated state budgets from New Delhi. NITI Aayog’s strategy is an outcome-oriented, consultative policy roadmap based on cooperative federalism, setting sectoral milestones without imposing financial conditionalities.',
        examTip: 'Excellent fodder for Mains GS-3 Planning and Economic Development.'
      }
    ],
    testQuestions: [
      {
        id: 'sni-q1',
        question: 'Across how many broad thematic sections is NITI Aayog’s "Strategy for New India @ 75" organized?',
        options: ['Four sections (Drivers, Infrastructure, Inclusion, Governance)', 'Three sections (Primary, Secondary, Tertiary)', 'Five sections (Growth, Equity, Green, Rural, Urban)', 'Two sections (Central and State)'],
        correctIndex: 0,
        explanation: 'It is organized across 4 sections: Drivers, Infrastructure, Inclusion, and Governance.',
        tag: 'Economic Planning'
      }
    ]
  },

  // =========================================================================
  // 9. SHANTA KUMAR COMMITTEE REPORT ON FCI RESTRUCTURING
  // =========================================================================
  'shanta-kumar-fci-reforms': {
    id: 'shanta-kumar-fci-reforms',
    title: 'High Level Committee on Restructuring Food Corporation of India (Shanta Kumar Committee)',
    titleTelugu: 'భారత ఆహార సంస్థ (ఎఫ్‌సీఐ) పునర్వ్యవస్థీకరణపై శాంత కుమార్ కమిటీ నివేదిక',
    issuingAuthority: 'Ministry of Consumer Affairs, Food and Public Distribution',
    dateOrYear: 'January 2015',
    pages: '110 Pages Strategic Report',
    summary: 'The landmark committee appointed to streamline foodgrain procurement, buffer stock storage, and targeted public distribution system (TPDS) in India. Highlighted that only 6% of Indian farmers benefited from Minimum Support Price (MSP) and recommended unbundling FCI operations.',
    pdfFilename: 'shanta-kumar-committee-fci-reforms.pdf',
    sections: [
      {
        numberOrCode: 'Procurement Decentralization',
        title: '6% MSP Beneficiary Reality & Eastern States Focus',
        content: [
          'Found that only 6% of total farmers in India sold their crops at MSP, heavily concentrated in Punjab, Haryana, and Andhra Pradesh.',
          'Recommended handing over procurement to states that have established infrastructure (Decentralised Procurement Scheme - DCP), freeing FCI to focus on underdeveloped eastern and central states (UP, Bihar, Assam, WB).'
        ],
        keyHighlight: 'First official government report revealing that only 6% of farmers benefited from MSP procurement.'
      },
      {
        numberOrCode: 'PDS & Food Subsidy Rationalization',
        title: 'NFSA Coverage Reduction & Direct Cash Transfer',
        content: [
          'Recommended reducing the coverage of the National Food Security Act (NFSA) from 67% of population to 40% (comfortably covering the bottom poor).',
          'Gradual transition to Direct Benefit Transfer (DBT) of food subsidy into bank accounts of beneficiaries in major urban cities.',
          'Privatization of storage through modern steel silos on PPP mode to eliminate grains rotting in open Cover and Plinth (CAP) storage.'
        ],
        keyHighlight: 'Advocated modern steel silos and targeted direct cash transfers for food subsidies.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What were the primary criticisms made by the Shanta Kumar Committee regarding FCI’s buffer stocking policies?',
        answer: 'The Committee pointed out that FCI routinely held foodgrain buffer stocks at nearly 2 to 3 times the mandated operational norms, locking up enormous public capital (₹1+ lakh crore food subsidy bill), inflating open market prices, and suffering massive storage losses in open CAP yards.',
        examTip: 'Compulsory citation for GS-3 Agriculture PDS and Buffer Stock questions.'
      }
    ],
    testQuestions: [
      {
        id: 'fci-q1',
        question: 'According to the Shanta Kumar Committee (2015), what percentage of agricultural households in India benefited from Minimum Support Price (MSP) procurement?',
        options: ['Approximately 6%', 'Approximately 25%', 'Approximately 40%', 'Approximately 15%'],
        correctIndex: 0,
        explanation: 'The Committee found that only 5.8% (rounded to 6%) of farmers received MSP benefits.',
        tag: 'Agriculture & Food Security'
      }
    ]
  },

  // =========================================================================
  // 10. ASHOK DALWAI COMMITTEE ON DOUBLING FARMERS’ INCOME
  // =========================================================================
  'ashok-dalwai-doubling-farmers-income': {
    id: 'ashok-dalwai-doubling-farmers-income',
    title: 'Committee on Doubling Farmers’ Income (Ashok Dalwai Committee 14-Volume Report)',
    titleTelugu: 'రైతుల ఆదాయం రెట్టింపు చేయడంపై అశోక్ దల్వాయ్ కమిటీ నివేదిక',
    issuingAuthority: 'Ministry of Agriculture and Farmers Welfare, Govt of India',
    dateOrYear: '14 Volumes (Submitted 2017–2018)',
    pages: '1,500 Pages Comprehensive Farm Blueprint',
    summary: 'The most exhaustive blueprint for transforming Indian agriculture from a production-centric model to an income-centric business model. Recommended 7 sources of income growth, secondary agriculture, PM-KISAN income support foundation, and deregulation of agricultural marketing.',
    pdfFilename: 'ashok-dalwai-doubling-farmers-income.pdf',
    sections: [
      {
        numberOrCode: 'The 7 Sources of Income Growth',
        title: 'Productivity, Input Efficiency & Allied Sectors',
        content: [
          '1. Improvement in crop productivity; 2. Improvement in livestock productivity; 3. Resource use efficiency and cost reduction (micro-irrigation, soil health cards); 4. Increase in cropping intensity; 5. Diversification towards high-value crops (horticulture, floriculture); 6. Remunerative market realization through e-NAM and contract farming; 7. Shift from agriculture to non-farm and allied rural activities.'
        ],
        keyHighlight: 'The "7 Sources of Income Growth" forms the standard answering framework for agricultural transformation in GS-3.'
      },
      {
        numberOrCode: 'Marketing & Value Addition',
        title: 'FPOs, Agri-Logistics & Direct Income Support',
        content: [
          'Promotion of 10,000 Farmer Producer Organisations (FPOs) to give small and marginal farmers collective bargaining power.',
          'Pioneered the proposal for direct income support (which evolved into PM-KISAN providing ₹6,000/year to all landholding farmers).',
          'Investments in post-harvest cold chains and irradiation centers under the Agriculture Infrastructure Fund (AIF).'
        ],
        keyHighlight: 'Advocated direct income support (PM-KISAN) to decouple welfare from market price distortion.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What is "Secondary Agriculture" as defined by the Ashok Dalwai Committee?',
        answer: 'Secondary Agriculture refers to rural economic activities that generate value additions from primary agricultural outputs and byproducts (e.g. food processing, beekeeping, sericulture, bio-fertilizer from crop residue, mushroom cultivation), enabling farm households to generate continuous off-season incomes.',
        examTip: 'High-yield conceptual question for UPSC Mains GS-3 Agriculture.'
      }
    ],
    testQuestions: [
      {
        id: 'dfi-q1',
        question: 'Who chaired the landmark Inter-Ministerial Committee on Doubling Farmers’ Income that submitted a 14-volume report to the Government of India?',
        options: ['Ashok Dalwai', 'M.S. Swaminathan', 'Shanta Kumar', 'Ramesh Chand'],
        correctIndex: 0,
        explanation: 'Dr. Ashok Dalwai chaired the Committee on Doubling Farmers’ Income.',
        tag: 'Indian Agriculture'
      }
    ]
  },

  // =========================================================================
  // 11. MADHAV GADGIL REPORT: WESTERN GHATS ECOLOGY EXPERT PANEL (WGEEP)
  // =========================================================================
  'madhav-gadgil-western-ghats': {
    id: 'madhav-gadgil-western-ghats',
    title: 'Report of the Western Ghats Ecology Expert Panel (WGEEP / Madhav Gadgil Committee)',
    titleTelugu: 'పశ్చిమ కనుమల పర్యావరణ పరిరక్షణ నివేదిక (మాధవ్ గాడ్గిల్ కమిటీ)',
    issuingAuthority: 'Ministry of Environment and Forests, Govt of India',
    dateOrYear: 'August 2011',
    pages: '522 Pages Milestone Report',
    summary: 'The landmark ecological document designating the entire Western Ghats as an Ecologically Sensitive Area (ESA) divided into three sensitivity zones (ESZ-1, ESZ-2, ESZ-3). Recommended an absolute ban on mining, thermal power plants, and large dams in ESZ-1, championing bottom-up participatory conservation via Gram Sabhas.',
    pdfFilename: 'madhav-gadgil-wgeep-western-ghats.pdf',
    sections: [
      {
        numberOrCode: 'ESZ-1, ESZ-2 & ESZ-3 Zoning',
        title: 'Graduated Ecological Sensitivity Framework',
        content: [
          'Designated the entire Western Ghats (1,29,037 sq km across 6 states: Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu) as ecologically sensitive.',
          'ESZ-1: Highest sensitivity; complete ban on mining, quarrying, red-category polluting industries, thermal plants, and large storage dams (e.g. Athirappilly project in Kerala).',
          'ESZ-2: Moderate sensitivity; regulated activities with strict carrying capacity constraints.',
          'ESZ-3: Lowest sensitivity; sustainable development permitted with environmental clearances.'
        ],
        keyHighlight: 'Proposed dividing the entire Western Ghats into three strict ecological zones (ESZ 1, 2, 3).'
      },
      {
        numberOrCode: 'Western Ghats Ecology Authority',
        title: 'Statutory Body & Gram Sabha Empowerment',
        content: [
          'Recommended establishing the Western Ghats Ecology Authority (WGEA) as a statutory authority under Section 3 of the Environment (Protection) Act, 1986.',
          'Pioneered bottom-up environmental democracy: Gram Sabhas must have mandatory consent authority before launching any commercial projects or land conversion.'
        ],
        keyHighlight: 'Advocated decentralized democratic decision-making via Forest Rights Act (FRA) Gram Sabhas.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Why was the Madhav Gadgil report rejected by all six state governments along the Western Ghats?',
        answer: 'States viewed the report as excessively preservationist and anti-development. The total ban on mining, dams, and land conversion in ESZ-1 was seen as freezing infrastructure development, threatening local livelihoods, and causing political pushback from agricultural and plantation settlers.',
        examTip: 'Classic environmental dilemma question in GS-3 Environment and GS-4 Ethics.'
      }
    ],
    testQuestions: [
      {
        id: 'gad-q1',
        question: 'The Madhav Gadgil Western Ghats Ecology Expert Panel (WGEEP) recommended establishing a statutory regulatory body under which parent legislation?',
        options: ['Environment (Protection) Act, 1986', 'Wildlife (Protection) Act, 1972', 'Biological Diversity Act, 2002', 'Forest (Conservation) Act, 1980'],
        correctIndex: 0,
        explanation: 'WGEA was recommended under Section 3 of the Environment (Protection) Act, 1986.',
        tag: 'Ecology & Biodiversity'
      }
    ]
  },

  // =========================================================================
  // 12. DR. K. KASTURIRANGAN COMMITTEE ON WESTERN GHATS (HLWG)
  // =========================================================================
  'kasturirangan-western-ghats': {
    id: 'kasturirangan-western-ghats',
    title: 'Report of the High Level Working Group on Western Ghats (Dr. K. Kasturirangan Committee)',
    titleTelugu: 'పశ్చిమ కనుమలపై డాక్టర్ కె. కస్తూరిరంగన్ కమిటీ నివేదిక',
    issuingAuthority: 'Ministry of Environment, Forest and Climate Change, Govt of India',
    dateOrYear: 'April 2013',
    pages: '160 Pages Practical Compromise Report',
    summary: 'Constituted to find a pragmatic balance between conservation and economic development following state resistance to the Gadgil report. Reduced the Ecologically Sensitive Area (ESA) from 100% of the Ghats to 37% (natural landscape), protecting 59,940 sq km while excluding cultural and populated landscapes.',
    pdfFilename: 'kasturirangan-committee-western-ghats.pdf',
    sections: [
      {
        numberOrCode: 'Cultural vs Natural Landscape',
        title: '37% Natural Landscape Protected as ESA',
        content: [
          'Differentiated between "Natural Landscape" (forests, protected areas, high biodiversity - 37%) and "Cultural Landscape" (human settlements, plantations, agricultural lands - 63%).',
          'Declared the 37% Natural Landscape (59,940 sq km) as the Ecologically Sensitive Area (ESA).',
          'Complete ban in ESA on: (1) Mining, quarrying and sand mining, (2) Thermal power plants, (3) Red-category industries, (4) Buildings and townships over 20,000 sq m.'
        ],
        keyHighlight: 'Balanced conservation by designating 37% of the Ghats as strictly protected ESA while leaving human settlements in cultural landscape.'
      },
      {
        numberOrCode: 'Hydropower & Green Growth',
        title: 'Allowing Hydro Projects with Ecological Flow Rules',
        content: [
          'Unlike Gadgil’s total ban, Kasturirangan allowed run-of-the-river hydroelectric projects in ESA subject to strict conditions: minimum 30% uninterrupted ecological flow in lean seasons and 3 km inter-project distance.'
        ],
        keyHighlight: 'Permitted environmentally certified hydropower with mandatory ecological stream flows.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What was the core conceptual distinction between the Madhav Gadgil Report and the Kasturirangan Report on the Western Ghats?',
        answer: 'Gadgil treated the ENTIRE Western Ghats as ecologically sensitive (100% area) and proposed a graded three-tier zoning system (ESZ 1, 2, 3) with top-down bans. Kasturirangan separated the landscape into "Natural" (37%) and "Cultural" (63%), restricting strict development bans exclusively to the 37% Natural Landscape to protect local livelihoods.',
        examTip: 'The definitive comparison tested in UPSC Prelims and Mains GS-3.'
      }
    ],
    testQuestions: [
      {
        id: 'kas-q1',
        question: 'What percentage of the Western Ghats was designated as Ecologically Sensitive Area (ESA) by the High Level Working Group headed by Dr. K. Kasturirangan?',
        options: ['Approximately 37%', '100% (Entire Ghats)', 'Approximately 50%', 'Approximately 20%'],
        correctIndex: 0,
        explanation: 'Kasturirangan designated approximately 37% (representing contiguous natural landscape) as ESA.',
        tag: 'Biodiversity & Conservation'
      }
    ]
  },

  // =========================================================================
  // 13. NATIONAL ACTION PLAN ON CLIMATE CHANGE (NAPCC)
  // =========================================================================
  'napcc-climate-action-plan': {
    id: 'napcc-climate-action-plan',
    title: 'National Action Plan on Climate Change (NAPCC — The 8 National Missions)',
    titleTelugu: 'వాతావరణ మార్పులపై జాతీయ కార్యాచరణ ప్రణాళిక (8 జాతీయ మిషన్లు)',
    issuingAuthority: 'Prime Minister’s Council on Climate Change, Government of India',
    dateOrYear: 'National Climate Framework Document',
    pages: '120 Pages Official Policy Document',
    summary: 'India’s overarching national policy document for sustainable development and climate mitigation/adaptation without compromising economic growth. Encompasses eight National Missions covering solar power, energy efficiency, sustainable habitat, water conservation, Himalayan ecology, Green India, agriculture, and strategic climate knowledge.',
    pdfFilename: 'national-action-plan-climate-change-napcc.pdf',
    sections: [
      {
        numberOrCode: 'The 8 National Missions',
        title: 'Core Architecture of India’s Climate Response',
        content: [
          '1. National Solar Mission: Scaled targets from 20 GW to 100 GW (now part of 500 GW non-fossil target by 2030).',
          '2. National Mission for Enhanced Energy Efficiency (NMEEE): Perform, Achieve and Trade (PAT) market mechanism for energy-intensive industries.',
          '3. National Mission on Sustainable Habitat: Energy Conservation Building Code (ECBC), urban green transit, and solid waste management.',
          '4. National Water Mission: 20% improvement in water use efficiency through recycling and river basin water audits.',
          '5. National Mission for Sustaining the Himalayan Ecosystem (NMSHE): Glacier monitoring, biodiversity protection, and mountain geological data.',
          '6. National Mission for a Green India (GIM): Afforestation and quality improvement of 10 million hectares of degraded forest/non-forest land.',
          '7. National Mission for Sustainable Agriculture (NMSA): Climate-resilient seeds, micro-irrigation (Per Drop More Crop), and soil health management.',
          '8. National Mission on Strategic Knowledge for Climate Change (NMSKCC): Research modeling, open-access climate data, and international partnerships.'
        ],
        keyHighlight: 'The foundational 8 Missions form the standard template for evaluating all domestic climate initiatives in India.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What is the "Perform, Achieve and Trade" (PAT) mechanism under the National Mission for Enhanced Energy Efficiency (NMEEE)?',
        answer: 'PAT is a market-based regulatory mechanism that sets mandatory Specific Energy Consumption (SEC) reduction targets for energy-intensive designated consumers (power, cement, steel). Facilities exceeding their targets are issued Energy Saving Certificates (ESCerts), which can be traded with underperforming industries to achieve compliance.',
        examTip: 'High-yield technical question in GS-3 Economy & Environment.'
      }
    ],
    testQuestions: [
      {
        id: 'nap-q1',
        question: 'Which of the following is NOT one of the official Eight National Missions under India’s National Action Plan on Climate Change (NAPCC)?',
        options: ['National Nuclear Energy Mission', 'National Solar Mission', 'National Water Mission', 'National Mission for a Green India'],
        correctIndex: 0,
        explanation: 'Nuclear Energy is not one of the 8 missions; the 8 missions focus on Solar, Energy Efficiency, Habitat, Water, Himalayan Ecology, Green India, Agriculture, and Strategic Knowledge.',
        tag: 'Climate Change'
      }
    ]
  },

  // =========================================================================
  // 14. NATIONAL GREEN HYDROGEN MISSION
  // =========================================================================
  'green-hydrogen-mission-document': {
    id: 'green-hydrogen-mission-document',
    title: 'National Green Hydrogen Mission: Strategic Interventions for Green Hydrogen Transition (SIGHT)',
    titleTelugu: 'జాతీయ గ్రీన్ హైడ్రోజన్ మిషన్: స్వచ్ఛ ఇంధన విప్లవం & సైట్ (SIGHT) పథకం',
    issuingAuthority: 'Ministry of New and Renewable Energy (MNRE), Govt of India',
    dateOrYear: 'January 2023 / ₹19,744 Crore Outlay',
    pages: '90 Pages Strategic Policy Document',
    summary: 'The flagship national program to make India a global hub for the production, utilization, and export of Green Hydrogen and its derivatives. Targets 5 MMT (Million Metric Tonnes) per annum green hydrogen production by 2030, supported by the SIGHT incentive program for domestic electrolyser manufacturing and hydrogen production.',
    pdfFilename: 'national-green-hydrogen-mission-document.pdf',
    sections: [
      {
        numberOrCode: 'Targets by 2030',
        title: '5 MMT Production & 125 GW Renewable Addition',
        content: [
          'Green Hydrogen Production: At least 5 MMT per annum by 2030 with associated renewable energy capacity addition of about 125 GW.',
          'Abatement of ~50 million metric tonnes (MMT) of annual greenhouse gas emissions.',
          'Reduction in fossil fuel imports by over ₹1 lakh crore; creation of over 6 lakh clean green jobs.'
        ],
        keyHighlight: 'Directly powers India’s journey toward Net Zero carbon emissions by 2070.'
      },
      {
        numberOrCode: 'SIGHT Program',
        title: 'Electrolyser Manufacturing & Production Subsidies',
        content: [
          'Strategic Interventions for Green Hydrogen Transition (SIGHT): ₹17,490 crore allocated across two financial incentive mechanisms:',
          'Component I: Financial incentives for domestic manufacturing of advanced electrolysers (PEM, Alkaline, Solid Oxide).',
          'Component II: Financial incentives for production of Green Hydrogen per kg over a 3-year tapering support schedule.',
          'Green Hydrogen Hubs: Developing port clusters (Kandla, Paradip, Tuticorin) for bunkering and international export to Europe and Japan.'
        ],
        keyHighlight: 'Incentivizes domestic electrolyser manufacturing to eliminate technological import reliance.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What is the definition of "Green Hydrogen" as notified by the Ministry of New and Renewable Energy in India?',
        answer: 'Green Hydrogen is defined as hydrogen produced through electrolysis of water using renewable energy (or biomass gasification), where the well-to-gate greenhouse gas emissions do not exceed 2 kg of CO2 equivalent per kg of H2 produced (averaged over a 12-month period).',
        examTip: 'Crucial definition tested in Prelims and Mains GS-3.'
      }
    ],
    testQuestions: [
      {
        id: 'ngh-q1',
        question: 'What is the annual Green Hydrogen production capacity target set by India for the year 2030 under the National Green Hydrogen Mission?',
        options: ['At least 5 MMT (Million Metric Tonnes)', 'At least 1 MMT', 'At least 10 MMT', 'At least 2.5 MMT'],
        correctIndex: 0,
        explanation: 'The Mission aims for at least 5 MMT of green hydrogen production per annum by 2030.',
        tag: 'Renewable Energy'
      }
    ]
  },

  // =========================================================================
  // 15. NATIONAL QUANTUM MISSION (NQM)
  // =========================================================================
  'national-quantum-mission-guidelines': {
    id: 'national-quantum-mission-guidelines',
    title: 'National Quantum Mission (NQM): Operational Framework & Thematic Hubs (T-Hubs)',
    titleTelugu: 'జాతీయ క్వాంటం మిషన్ (ఎన్‌క్యూఎం): వ్యూహాత్మక మార్గదర్శకాలు',
    issuingAuthority: 'Department of Science and Technology (DST), Govt of India',
    dateOrYear: 'Approved April 2023 / ₹6,003 Crore Outlay',
    pages: '75 Pages Technical Roadmap',
    summary: 'Approved with an outlay of ₹6,003 crore for 2023–2031 to seed, nurture, and scale scientific and industrial R&D in Quantum Technologies. India is the 6th nation globally to launch a dedicated quantum mission, targeting 50–1000 physical qubits quantum computers, quantum communication over 2,000 km, and atomic clocks.',
    pdfFilename: 'national-quantum-mission-guidelines.pdf',
    sections: [
      {
        numberOrCode: 'The Four Thematic Hubs (T-Hubs)',
        title: 'Decentralized Research & Innovation Ecosystem',
        content: [
          '1. Quantum Computing: Developing intermediate scale quantum computers with 50 to 1000 physical qubits in 8 years on superconducting and photonic platforms.',
          '2. Quantum Communication: Satellite-based secure quantum key distribution (QKD) across ground stations over 2,000 km range; quantum memory networks.',
          '3. Quantum Sensing & Metrology: Atomic clocks and ultra-sensitive magnetometers for precision defense navigation without GPS dependency.',
          '4. Quantum Materials & Devices: Synthesis of topological insulators and quantum dots for indigenous semiconductor and quantum chip design.'
        ],
        keyHighlight: 'Four T-Hubs established in leading academic and research institutions (IITs, IISc, TIFR).'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Why is Quantum Key Distribution (QKD) considered unhackable by conventional cyber warfare?',
        answer: 'QKD leverages the fundamental laws of quantum physics (Heisenberg’s Uncertainty Principle and the No-Cloning Theorem). Any attempt by an eavesdropper to measure or intercept a quantum key alters the polarization state of the photons, instantly alerting the communicating parties and rendering the intercepted key invalid.',
        examTip: 'High-scoring conceptual point for GS-3 Science & Tech and Cybersecurity.'
      }
    ],
    testQuestions: [
      {
        id: 'nqm-q1',
        question: 'The National Quantum Mission (NQM) is implemented under the aegis of which Union Ministry / Department?',
        options: ['Department of Science and Technology (DST)', 'Ministry of Electronics and IT (MeitY)', 'Department of Space (ISRO)', 'DRDO'],
        correctIndex: 0,
        explanation: 'The Mission is led and executed by the Department of Science and Technology (DST), Ministry of Science and Technology.',
        tag: 'Emerging Technologies'
      }
    ]
  },

  // =========================================================================
  // 16. RAGHURAM RAJAN COMMITTEE ON FINANCIAL SECTOR REFORMS
  // =========================================================================
  'raghuram-rajan-financial-reforms': {
    id: 'raghuram-rajan-financial-reforms',
    title: 'Committee on Financial Sector Reforms: A Hundred Small Steps (Raghuram Rajan Report)',
    titleTelugu: 'రఘురామ్ రాజన్ కమిటీ నివేదిక: ఆర్థిక రంగ సంస్కరణలు',
    issuingAuthority: 'Planning Commission of India',
    dateOrYear: 'September 2008',
    pages: '210 Pages Landmark Report',
    summary: 'The visionary report that outlined the architectural roadmap for modern financial inclusion, banking competition, bond market development, and macroprudential regulation in India. Pioneered differentiated banking licenses (Small Finance Banks & Payments Banks) and Aadhaar-based payments.',
    pdfFilename: 'raghuram-rajan-hundred-small-steps.pdf',
    sections: [
      {
        numberOrCode: 'Differentiated Banking',
        title: 'Small Finance Banks & Payments Banks Genesis',
        content: [
          'Proposed ending the rigid "one-size-fits-all" universal banking model by licensing niche, differentiated financial entities.',
          'Directly led to RBI guidelines creating Small Finance Banks (SFBs) focused on priority lending to micro-enterprises and Payments Banks focused on remittances.'
        ],
        keyHighlight: 'Originated the regulatory blueprint for Small Finance Banks and Payments Banks in India.'
      },
      {
        numberOrCode: 'Financial Inclusion & Technology',
        title: 'Aadhaar Stack & Open Financial Architecture',
        content: [
          'Advocated using unique biometric identification (Aadhaar) to revolutionize electronic Know Your Customer (e-KYC) and Direct Benefit Transfers.',
          'Promoted non-collateral, cash-flow-based lending using digital transaction footprints rather than physical immovable property mortgages.'
        ],
        keyHighlight: 'Layed the conceptual foundation for the India Stack (Aadhaar, UPI, Account Aggregator).'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What was the core recommendation of the Raghuram Rajan Committee regarding Priority Sector Lending (PSL)?',
        answer: 'The Committee recommended introducing tradeable Priority Sector Lending Certificates (PSLCs), allowing banks with surplus lending to minority sectors to sell certificates to banks with shortfalls, enabling market-driven specialization while preserving national priority sector goals.',
        examTip: 'High-value economy concept for RBI Grade B and UPSC GS-3.'
      }
    ],
    testQuestions: [
      {
        id: 'rr-q1',
        question: 'Which landmark report officially recommended creating niche and differentiated banking institutions (such as Small Finance Banks) in India?',
        options: ['A Hundred Small Steps (Raghuram Rajan)', 'Narasimham Committee I', 'Urjit Patel Committee', 'Deepak Parekh Committee'],
        correctIndex: 0,
        explanation: 'The 2008 report "A Hundred Small Steps" authored by Raghuram Rajan proposed differentiated banking licenses.',
        tag: 'Banking & Finance'
      }
    ]
  },

  // =========================================================================
  // 17. URJIT PATEL COMMITTEE REPORT (MONETARY POLICY)
  // =========================================================================
  'urjit-patel-committee-report': {
    id: 'urjit-patel-committee-report',
    title: 'Report of the Committee to Revise and Strengthen the Monetary Policy Framework (Urjit Patel Report)',
    titleTelugu: 'ఉర్జిత్ పటేల్ కమిటీ నివేదిక: ద్రవ్య విధాన ముసాయిదా సంస్కరణలు',
    issuingAuthority: 'Reserve Bank of India',
    dateOrYear: 'January 2014',
    pages: '130 Pages Official Report',
    summary: 'The single most transformative central banking report in post-reform India. Recommended adopting Consumer Price Index (CPI) over Wholesale Price Index (WPI) as the nominal anchor for monetary policy, establishing Flexible Inflation Targeting (4% ± 2%), and constituting a statutory Monetary Policy Committee.',
    pdfFilename: 'urjit-patel-committee-monetary-policy-2014.pdf',
    sections: [
      {
        numberOrCode: 'CPI as Nominal Anchor',
        title: 'Shifting from WPI to Headline CPI',
        content: [
          'Identified that WPI does not reflect the cost-of-living index of households because it excludes services and carries low weightage for food.',
          'Recommended headline CPI (Combined) as the definitive nominal anchor to guide household inflation expectations and preserve real interest rates.'
        ],
        keyHighlight: 'Replaced Wholesale Price Index (WPI) with Consumer Price Index (CPI) as India’s monetary anchor.'
      },
      {
        numberOrCode: 'Institutionalization of MPC',
        title: 'Flexible Inflation Targeting (FIT: 4% ± 2%)',
        content: [
          'Proposed a statutory 6-member Monetary Policy Committee to establish transparent, rule-based interest-rate setting.',
          'Adopted under the Monetary Policy Framework Agreement in 2015 and amended into the RBI Act in 2016.'
        ],
        keyHighlight: 'Established the Flexible Inflation Targeting (FIT) statutory regime in India.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Why did the Urjit Patel Committee advocate for Headline CPI instead of Core CPI as the inflation target anchor?',
        answer: 'Because food and fuel comprise nearly 50% of the average Indian consumer expenditure basket. High food inflation directly unanchors household inflation expectations and spills over into non-food wage demands. Targeting Core CPI (which excludes food and fuel) would disregard the real economic shocks experienced by vulnerable citizens.',
        examTip: 'Frequent economic debate tested in UPSC Mains GS-3.'
      }
    ],
    testQuestions: [
      {
        id: 'up-q1',
        question: 'The transition of RBI’s monetary policy from multiple indicators to Flexible Inflation Targeting based on CPI was recommended by:',
        options: ['Urjit Patel Committee (2014)', 'Bimal Jalan Committee (2019)', 'Tarapore Committee (1997)', 'Chakravarty Committee (1985)'],
        correctIndex: 0,
        explanation: 'The Urjit Patel Committee recommended adopting CPI-based Flexible Inflation Targeting (4% ± 2%).',
        tag: 'Macroeconomics'
      }
    ]
  },

  // =========================================================================
  // 18. KELKAR COMMITTEE ON PPP IN INFRASTRUCTURE
  // =========================================================================
  'kelkar-committee-ppp-infrastructure': {
    id: 'kelkar-committee-ppp-infrastructure',
    title: 'Report of the Committee on Revisiting & Revitalising the PPP Model of Infrastructure (Vijay Kelkar Committee)',
    titleTelugu: 'విజయ్ కేల్కర్ కమిటీ నివేదిక: పబ్లిక్-ప్రైవేట్ పార్టనర్‌షిప్ (పీపీపీ) సంస్కరణలు',
    issuingAuthority: 'Department of Economic Affairs, Ministry of Finance',
    dateOrYear: 'November 2015',
    pages: '115 Pages Infrastructure Report',
    summary: 'The authoritative policy assessment addressing stalled infrastructure projects in highways, ports, and power. Recommends equitable risk allocation between public and private sectors, renegotiation mechanisms for long-gestation contracts, transitioning to Hybrid Annuity Models (HAM), and setting up Infrastructure Dispute Review Boards.',
    pdfFilename: 'vijay-kelkar-committee-ppp-reforms.pdf',
    sections: [
      {
        numberOrCode: 'Risk Allocation & Contract Renegotiation',
        title: 'Equitable Risk Sharing vs Sovereign Transfer',
        content: [
          'Identified that past PPP contracts transferred unmanageable sovereign risks (land acquisition delays, environmental clearance hold-ups) entirely onto private developers.',
          'Recommended that risks should be allocated to the entity best suited to manage them: Union/State manages statutory clearances; private concessionaire manages construction and engineering risks.',
          'Allowed flexible contract renegotiation clauses in long-term contracts (20–30 years) to absorb macro shocks without stalling projects.'
        ],
        keyHighlight: 'Pioneered contract renegotiation frameworks for long-term concession agreements.'
      },
      {
        numberOrCode: 'Alternative Models: HAM & TOT',
        title: 'Hybrid Annuity & Toll-Operate-Transfer Models',
        content: [
          'Endorsed the Hybrid Annuity Model (HAM) where the government finances 40% of project cost upfront in milestone cash tranches, insulating developers from traffic risk.',
          'Endorsed the Toll-Operate-Transfer (TOT) model allowing NHAI to monetize operational highways to global institutional pension funds, recycling capital for new greenfield expressways.'
        ],
        keyHighlight: 'Replaced risky BOT-Toll models with the resilient Hybrid Annuity Model (HAM).'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'How does the Hybrid Annuity Model (HAM) reduce private developer risk compared to Build-Operate-Transfer (BOT-Toll)?',
        answer: 'In BOT-Toll, the private concessionaire bears 100% of upfront capital financing and 100% of traffic revenue risk. In HAM, the government pays 40% of the project cost during construction in five equal milestone annuities, while the concessionaire finances only 60%. The government collects tolls, paying fixed annuity plus interest to the developer, insulating the private partner from traffic fluctuations.',
        examTip: 'High-yield infrastructure question for GS-3.'
      }
    ],
    testQuestions: [
      {
        id: 'kel-q1',
        question: 'Under the Hybrid Annuity Model (HAM) recommended by the Kelkar Committee for highway development, what percentage of the project cost is provided by the government as milestone annuities during construction?',
        options: ['40%', '20%', '50%', '60%'],
        correctIndex: 0,
        explanation: 'Under HAM, the government finances 40% in cash milestone annuities, and the developer finances the remaining 60%.',
        tag: 'Infrastructure Development'
      }
    ]
  },

  // =========================================================================
  // 19. TELUGU AKADEMI: ANDHRA PRADESH ECONOMY & INDUSTRIAL CORRIDORS
  // =========================================================================
  'telugu-akademi-ap-economy': {
    id: 'telugu-akademi-ap-economy',
    title: 'Telugu Akademi: Andhra Pradesh Economy, Bifurcation Challenges & Industrial Corridors',
    titleTelugu: 'తెలుగు అకాడమీ: ఆంధ్రప్రదేశ్ ఆర్థిక వ్యవస్థ & విభజన సవాళ్లు',
    issuingAuthority: 'Telugu Akademi, Government of Andhra Pradesh',
    dateOrYear: 'Official Prescribed Paper-II & Paper-V Standard',
    pages: '410 Pages Comprehensive State Economy',
    summary: 'The prescribed textbook for APPSC Group 1 and Group 2 Economy papers. Provides in-depth analysis of AP’s Gross State Domestic Product (GSDP), agricultural shift to aquaculture and horticulture, major ports along the 974 km coastline, Visakhapatnam-Chennai Industrial Corridor (VCIC), Chennai-Bengaluru Industrial Corridor (CBIC), and post-bifurcation debt dynamics.',
    pdfFilename: 'telugu-akademi-ap-economy-corridors.pdf',
    sections: [
      {
        numberOrCode: 'Coastal Economy & Aquaculture',
        title: 'Blue Economy & Agricultural Diversification',
        content: [
          'AP possesses the second longest mainland coastline (974 km) with 6 major and non-major operational ports (Visakhapatnam, Krishnapatnam, Kakinada, Gangavaram, Machilipatnam, Bhavanapadu/Mulapeta).',
          'Andhra Pradesh is the undisputed leader in Indian aquaculture, producing over 70% of cultivated marine shrimp (Vannamei) and inland fisheries exports.',
          'Horticulture leadership: Highest national production in oil palm, chilli, cocoa, lime, and papaya.'
        ],
        keyHighlight: 'Aquaculture and coastal ports drive AP’s primary sector surplus.'
      },
      {
        numberOrCode: 'Industrial Corridors: VCIC & CBIC',
        title: 'Industrial Nodes & Port-Led Industrialization',
        content: [
          'Visakhapatnam-Chennai Industrial Corridor (VCIC): India’s first coastal industrial corridor developed with Asian Development Bank (ADB) assistance across 4 nodes: Visakhapatnam, Kakinada, Srikalahasti-Yerpedu, and Donakonda.',
          'Chennai-Bengaluru Industrial Corridor (CBIC): Krishnapatnam node developed under National Industrial Corridor Development Corporation (NICDC).'
        ],
        keyHighlight: 'VCIC and CBIC form the twin industrial growth backbones of Andhra Pradesh.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Which international multilateral agency is partnering with the Government of Andhra Pradesh for developing the Visakhapatnam-Chennai Industrial Corridor (VCIC)?',
        answer: 'The Asian Development Bank (ADB) is the primary multilateral partner providing loan and technical assistance for the VCIC project.',
        examTip: 'Frequent objective question in APPSC Group 1 and Group 2 Prelims.'
      }
    ],
    testQuestions: [
      {
        id: 'ape-q1',
        question: 'What is the length of the mainland coastline of Andhra Pradesh, which ranks second longest in India after Gujarat?',
        options: ['974 km', '1,050 km', '850 km', '720 km'],
        correctIndex: 0,
        explanation: 'Andhra Pradesh has a coastline of 974 km, making it the second longest mainland coastline in India.',
        tag: 'AP State Economy'
      }
    ]
  },

  // =========================================================================
  // 20. TELUGU AKADEMI: TELANGANA ARMED STRUGGLE & HYDERABAD ACCESSION
  // =========================================================================
  'telugu-akademi-telangana-armed-struggle': {
    id: 'telugu-akademi-telangana-armed-struggle',
    title: 'Telugu Akademi: Telangana Armed Struggle (1946–1951) & Hyderabad State Accession',
    titleTelugu: 'తెలుగు అకాడమీ: తెలంగాణ సాయుధ పోరాటం (1946-1951) & హైదరాబాద్ సంస్థాన విలీనం',
    issuingAuthority: 'Telugu Akademi, Government of Telangana',
    dateOrYear: 'Official Prescribed State History Text',
    pages: '440 Pages Definitive History',
    summary: 'The authoritative historical text prescribed by TSPSC for Paper-II and Paper-VI. Covers feudal atrocities under Nizam VII (Mir Osman Ali Khan) and Jagirdars/Dorala system, Vetti (forced labor), martyrdom of Doddi Komaraiah (4 July 1946) sparking the Armed Struggle, heroic resistance by Chakali Ilamma, Armed squads (Dalam), Operation Polo (Police Action 13–17 Sept 1948), and integration into the Indian Union.',
    pdfFilename: 'telugu-akademi-telangana-armed-struggle.pdf',
    sections: [
      {
        numberOrCode: 'Genesis & Vetti Chakiri Abolition',
        title: 'Doddi Komaraiah & Chakali Ilamma Resistance',
        content: [
          'Oppression under the Doras/Deshmukhs (e.g. Visnur Ramachandra Reddy) enforcing Vetti Chakiri (hereditary forced unpaid labor).',
          'Chakali Ilamma’s courageous land defense in Palakurthi against Visnur Deshmukh sparked mass peasant awakening.',
          'Doddi Komaraiah’s martyrdom on July 4, 1946 at Kadavendi village triggered the Telangana Peasant Armed Struggle led by Andhra Maha Sabha and the Communist Party.'
        ],
        keyHighlight: 'Doddi Komaraiah’s martyrdom is commemorated as the spark of the Telangana Armed Struggle.'
      },
      {
        numberOrCode: 'Operation Polo: Police Action',
        title: '13–17 September 1948 & Major General J.N. Chaudhuri',
        content: [
          'Nizam declared independence; Kasim Razvi formed the communal militia "Razakars" committing atrocities on the rural population.',
          'Standstill Agreement signed in November 1947, violated by Nizam purchasing weapons and funding Pakistan.',
          'Operation Polo launched on September 13, 1948 under Southern Command headed by Lt. Gen. Maharaj Rajendrasinhji and Maj. Gen. J.N. Chaudhuri.',
          'Nizam forces surrendered unconditionally on September 17, 1948; Maj. Gen. J.N. Chaudhuri appointed Military Governor of Hyderabad State.'
        ],
        keyHighlight: 'September 17 marks the liberation and integration of Hyderabad State into the Indian Union.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Who was the leader of the Razakar militia in Hyderabad State who violently resisted accession to India?',
        answer: 'Kasim Razvi, the president of the Majlis-e-Ittehadul Muslimeen (MIM), led the paramilitary Razakar militia that terrorized rural Telangana peasants before Operation Polo.',
        examTip: 'Compulsory question for TSPSC Group 1 Paper-II and Paper-VI.'
      }
    ],
    testQuestions: [
      {
        id: 'tas-q1',
        question: 'Who was appointed as the Military Governor of Hyderabad State immediately following the surrender of Nizam forces in Operation Polo on September 17, 1948?',
        options: ['Major General J.N. Chaudhuri', 'K.M. Munshi', 'M.K. Vellodi', 'General K.S. Thimayya'],
        correctIndex: 0,
        explanation: 'Major General J.N. Chaudhuri led the military operation and served as Military Governor until December 1949.',
        tag: 'Telangana History'
      }
    ]
  }
};
