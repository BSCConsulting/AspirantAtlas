import { DocumentDetail } from '../types';
import { ADDITIONAL_DOCUMENT_DETAILS } from './documentDetailsAdditional';
import { REPORTS_BATCH2_DETAILS } from './documentDetailsReportsBatch2';
import { NCERT_DOCUMENT_DETAILS } from './documentDetailsNcert';
import { BATCH_A_DOCUMENT_DETAILS } from './documentDetailsBatchA';
import { BATCH_B_DOCUMENT_DETAILS } from './documentDetailsBatchB';

export const DOCUMENT_DETAILS_MAP: Record<string, DocumentDetail> = {
  // =========================================================================
  // 1. JUSTICE SRI KRISHNA COMMITTEE REPORT (DECEMBER 2010)
  // =========================================================================
  'sri-krishna-committee-report': {
    id: 'sri-krishna-committee-report',
    title: 'Report of the Committee for Consultations on the Situation in Andhra Pradesh',
    titleTelugu: 'ఆంధ్రప్రదేశ్ పరిస్థితులపై సంప్రదింపుల కమిటీ నివేదిక (జస్టిస్ శ్రీకృష్ణ కమిటీ)',
    issuingAuthority: 'Ministry of Home Affairs (MHA), Government of India',
    dateOrYear: '30 December 2010',
    pages: '505 Pages (Chapters 1–8 & Annexures)',
    summary: 'Constituted on February 3, 2010 under the chairmanship of former Supreme Court Judge Justice B.N. Srikrishna to examine the demand for a separate State of Telangana as well as the demand for maintaining the unified State of Andhra Pradesh.',
    pdfFilename: 'sri-krishna-committee-report-2010.pdf',
    sections: [
      {
        numberOrCode: 'Genesis & Mandate',
        title: 'Appointment & Terms of Reference',
        content: [
          'Constituted by MHA following the political upheaval after K. Chandrashekar Rao (KCR) indefinite fast and the Union Home Minister statement on December 9, 2009.',
          'Five Member Committee: Justice B.N. Srikrishna (Chairman), Prof. (Dr.) Ranbir Singh, Dr. Abusaleh Shariff, Dr. Ravinder Kaur, and Vinod K. Duggal (Member Secretary).',
          'Mandate: To consult all political parties, socio-economic groups, students, and citizens, and evaluate regional growth disparities and governance alternatives.'
        ],
        keyHighlight: 'Submitted on 30 Dec 2010 after visiting all 23 districts and receiving over 60,000 representations.'
      },
      {
        numberOrCode: 'Chapters 1–4',
        title: 'Historical Background, Socio-Cultural Identity & Regional Disparities',
        content: [
          'Chapter 1: Mandate and methodology of consultations across all 23 districts.',
          'Chapter 2: Detailed historical evolution from Hyderabad State to the 1956 Gentlemen’s Agreement, 1969 Agitation, and post-1990 mobilizations.',
          'Chapter 3: In-depth economic growth analysis across Agriculture, Irrigation, Literacy, Employment, and Public Health.',
          'Chapter 4: Cultural identity, dialect, festivals (Bathukamma, Bonalu) and perceived psychological deprivation among the Telangana populace.'
        ],
        keyHighlight: 'Noted that while overall GDP growth was comparable across regions, Telangana suffered from severe sub-regional rural distress and employment deficits.'
      },
      {
        numberOrCode: 'Chapters 5–7',
        title: 'Hyderabad Metropolis, Water Resources & Security Dynamics',
        content: [
          'Chapter 6: Hyderabad Economic Engine: Hyderabad generated over 50% of unified AP revenue and hosted 80% of major IT/pharma corporations.',
          'Chapter 7: Water Resources: Examined Krishna and Godavari river basins, noting that lift irrigation was indispensable for Telangana due to plateau elevation.',
          'Chapter 5: Law and Order: Examined Maoist insurgent dynamics, student agitations, and potential security consequences.'
        ],
        keyHighlight: 'Hyderabad’s revenue generation and asset status was identified as the single most critical structural bottleneck in bifurcation.'
      },
      {
        numberOrCode: 'Chapter 8: The 6 Options',
        title: 'Evaluation of the Six Strategic Options for Resolution',
        content: [
          'Option 1: Maintaining Status Quo — Rejected as unviable due to deep regional alienation.',
          'Option 2: Bifurcation of State with Hyderabad as Union Territory — Rejected as unacceptable to all parties.',
          'Option 3: Bifurcation into Rayala-Telangana and Coastal Andhra — Rejected as lacking popular legitimacy.',
          'Option 4: Bifurcation into Seemandhra and Telangana with enlarged Hyderabad Capital Area — Rejected due to geographical incoherence.',
          'Option 5: Bifurcation of State into Telangana and Seemandhra as per existing boundaries with Hyderabad as capital of Telangana — Identified as the second most viable option with massive emotional demand.',
          'Option 6: Keeping the State united while creating a statutory empowered Telangana Regional Council — Recommended by the Committee as the optimal compromise (though subsequently overtaken by public political momentum).'
        ],
        keyHighlight: 'Option 5 ultimately became the legal foundation for the Andhra Pradesh Reorganisation Act, 2014.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Which of the six options was officially recommended by the Sri Krishna Committee?',
        answer: 'The Committee recommended Option 6: Keeping the state united while establishing a statutory, constitutionally-empowered Telangana Regional Council with independent legislative and financial powers for 10 Telangana districts.',
        examTip: 'Examiners frequently ask the difference between Option 5 (Separation with Hyderabad as capital of Telangana) and Option 6 (Empowered Regional Council).'
      },
      {
        question: 'What were the major findings of Chapter 6 regarding Hyderabad Metropolis?',
        answer: 'Chapter 6 documented that Hyderabad generated approximately 53% of commercial tax revenues and accounted for 70% of capital investments. It concluded that neither successor state could easily surrender claim over Hyderabad without massive fiscal compensation.',
        examTip: 'Use this 53% statistic in Mains GS-2 and TSPSC Paper-VI answers on regional economic friction.'
      },
      {
        question: 'What was the controversy regarding the "Secret Note" (Chapter 8 Appendix)?',
        answer: 'The Committee submitted an undisclosed confidential note to the MHA outlining internal security implications, public order, and media management strategies. In March 2011, the AP High Court ordered its public release, emphasizing democratic transparency.',
        examTip: 'Cite the AP High Court ruling (Justice L. Narasimha Reddy) directing the disclosure of the secret note.'
      }
    ],
    testQuestions: [
      {
        id: 'skc-q1',
        question: 'Who served as the Member-Secretary of the Justice Sri Krishna Committee appointed in February 2010?',
        options: ['Vinod K. Duggal', 'Prof. Ranbir Singh', 'Dr. Abusaleh Shariff', 'J.M. Lyngdoh'],
        correctIndex: 0,
        explanation: 'Former Union Home Secretary Vinod K. Duggal served as the Member-Secretary of the 5-member Committee.',
        tag: 'Sri Krishna Committee'
      },
      {
        id: 'skc-q2',
        question: 'Under Chapter 8 of the Sri Krishna Report, Option 5 proposed which of the following arrangements?',
        options: [
          'Hyderabad as Union Territory with coastal AP and TS separate',
          'Bifurcation of the State into Telangana and Seemandhra with Hyderabad as capital of Telangana',
          'Rayala-Telangana merger with Hyderabad as joint capital',
          'Maintaining status quo with autonomous hill councils'
        ],
        correctIndex: 1,
        explanation: 'Option 5 proposed the bifurcation of the state into two separate states as per existing boundaries, with Hyderabad serving as the capital of Telangana and Seemandhra developing a new capital.',
        tag: 'Chapter 8 Options'
      }
    ]
  },

  // =========================================================================
  // 2. ARTICLE 371-D & THE PRESIDENTIAL ORDER OF 1975
  // =========================================================================
  'article-371-d-presidential-order': {
    id: 'article-371-d-presidential-order',
    title: 'The Constitution (32nd Amendment) Act, 1973 & Presidential Order 1975 (Article 371-D)',
    titleTelugu: 'రాజ్యాంగ 32వ సవరణ & 1975 రాష్ట్రపతి ఉత్తర్వులు (ఆర్టికల్ 371-D)',
    issuingAuthority: 'Parliament of India / Ministry of Home Affairs',
    dateOrYear: 'Act 32 of 1973 (Order: 18 October 1975)',
    pages: '28 Pages Statutory Text',
    summary: 'Introduced following the 1973 Six-Point Formula to settle public employment and education disputes in Andhra Pradesh. Empowered the President to organize the state into 6 administrative zones and set reservation ratios for local candidates.',
    pdfFilename: 'article-371-d-presidential-order-1975.pdf',
    sections: [
      {
        numberOrCode: 'Constitutional Basis',
        title: 'Article 371-D Insertion (32nd Amendment)',
        content: [
          'Enacted by Parliament in 1973 under Prime Minister Indira Gandhi following the 1972 Jai Andhra and 1969 Telangana movements.',
          'Clause (1) & (2): Empowers the President to specify local areas and local cadres for direct recruitment and admissions to educational institutions.',
          'Clause (3): Mandated the constitution of the Andhra Pradesh Administrative Tribunal (APAT) to adjudicate disputes regarding appointments and seniority.'
        ],
        keyHighlight: 'Abolished traditional Mulki residency certificates and replaced them with a 6-zone institutional system.'
      },
      {
        numberOrCode: 'The 1975 Presidential Order',
        title: 'Organization of 6 Administrative Zones & Local Reservations',
        content: [
          'Divided the unified state into 6 Zones:',
          'Zone I: Srikakulam, Vizianagaram, Visakhapatnam (North Coastal)',
          'Zone II: East Godavari, West Godavari, Krishna (Central Coastal)',
          'Zone III: Guntur, Prakasam, Nellore (South Coastal)',
          'Zone IV: Chittoor, Cuddapah, Anantapur, Kurnool (Rayalaseema)',
          'Zone V: Adilabad, Karimnagar, Warangal, Khammam (Northern Telangana)',
          'Zone VI: Hyderabad, Rangareddy, Nizamabad, Medak, Mahabubnagar, Nalgonda (Southern Telangana)',
          'Reservation quotas: 80% of non-gazetted posts and 70% of initial gazetted posts reserved strictly for local candidates of that specific zone.'
        ],
        keyHighlight: 'Zones V and VI constituted the Telangana region.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What percentage of non-gazetted posts were reserved for local candidates under the 1975 Presidential Order?',
        answer: '80% of non-gazetted posts (such as Junior Assistants, Senior Assistants, and Sub-Inspectors) were reserved for local candidates of the respective zone, while 20% remained open to merit.',
        examTip: 'Remember the percentages: 80% for non-gazetted posts, 70% for gazetted category-IV posts, and 85% for educational admissions.'
      },
      {
        question: 'Which zones belonged to the Telangana region under the 1975 Presidential Order?',
        answer: 'Zone V (Northern Telangana: Adilabad, Karimnagar, Warangal, Khammam) and Zone VI (Southern Telangana: Hyderabad, Rangareddy, Nizamabad, Medak, Mahabubnagar, Nalgonda).',
        examTip: 'Crucial for prelims matching questions.'
      }
    ],
    testQuestions: [
      {
        id: 'pso-q1',
        question: 'Under the 1975 Presidential Order, which two zones comprised the Telangana districts?',
        options: ['Zone I and II', 'Zone III and IV', 'Zone V and VI', 'Zone IV and V'],
        correctIndex: 2,
        explanation: 'Zone V (Northern Telangana) and Zone VI (Southern Telangana including Hyderabad) comprised the 10 Telangana districts.',
        tag: 'Presidential Order 1975'
      }
    ]
  },

  // =========================================================================
  // 3. GOVERNMENT ORDER MS. NO. 610 (30 DECEMBER 1985)
  // =========================================================================
  'go-ms-610-1985': {
    id: 'go-ms-610-1985',
    title: 'Government Order Ms. No. 610 (G.O. 610) — Safeguards Implementation',
    titleTelugu: 'జీవో ఎంఎస్ నం. 610 (30 డిసెంబర్ 1985)',
    issuingAuthority: 'General Administration (SPF) Department, Govt of Andhra Pradesh',
    dateOrYear: '30 December 1985',
    pages: '14 Operative Directives',
    summary: 'Promulgated by the N.T. Rama Rao administration based on the Jayabharat Reddy Committee findings to redress widespread violations of the 1975 Presidential Order and repatriate irregular non-local appointees from Telangana posts.',
    pdfFilename: 'go-ms-610-dated-30-12-1985.pdf',
    sections: [
      {
        numberOrCode: 'Origin & Context',
        title: 'Jayabharat Reddy Committee Findings',
        content: [
          'In 1984–85, Telangana employee unions led by TNGOs protested that tens of thousands of non-locals had been illegally appointed into Zone V and VI posts through fake local-candidate claims.',
          'N.T. Rama Rao appointed a 3-member committee of senior IAS officers: K. Jayabharat Reddy, Kamal Kumar, and U.B. Raghavendra Rao.',
          'The Committee verified over 58,000 non-locals recruited in direct violation of the 1975 Presidential Order in Telangana departments.'
        ],
        keyHighlight: 'Confirmed institutional non-compliance in education, electricity board, police, and irrigation departments.'
      },
      {
        numberOrCode: 'Operative Directives',
        title: 'Key Mandates of G.O. 610',
        content: [
          'Directive 1: Repatriation of all non-locals recruited into Zone V and VI after 1975 back to their parent zones in Coastal Andhra / Rayalaseema by March 31, 1986.',
          'Directive 2: Immediate identification and nullification of bogus local-candidate certificates.',
          'Directive 3: Prohibition of transfers across zonal cadres under the guise of deputation.',
          'Directive 4: Ensuring 80% non-gazetted and 70% gazetted local cadre quota compliance in all future recruitments.'
        ],
        keyHighlight: 'Set an explicit deadline: March 31, 1986 for complete repatriation (which was never implemented, sparking the 2001 agitation).'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Why was G.O. 610 never implemented before the March 31, 1986 deadline?',
        answer: 'Successive governments stayed enforcement due to administrative litigation, stay orders from the High Court, and political resistance from non-local employee associations, leaving thousands of irregular appointments unresolved.',
        examTip: 'This non-implementation directly provoked the appointment of the J.M. Girglani Commission in 2001.'
      }
    ],
    testQuestions: [
      {
        id: 'go-q1',
        question: 'What was the original deadline prescribed in G.O. 610 for the repatriation of irregular non-local appointees?',
        options: ['31 December 1985', '31 March 1986', '15 August 1987', '31 December 1990'],
        correctIndex: 1,
        explanation: 'Clause 1 of G.O. 610 explicitly stipulated that all employees appointed in violation of the Presidential Order in Zones V and VI should be repatriated by March 31, 1986.',
        tag: 'G.O. 610'
      }
    ]
  },

  // =========================================================================
  // 4. J.M. GIRGLANI ONE-MAN COMMISSION REPORT (2001–2004)
  // =========================================================================
  'girglani-commission-report': {
    id: 'girglani-commission-report',
    title: 'Report of the One-Man Commission on Implementation of G.O. 610 (J.M. Girglani Commission)',
    titleTelugu: 'జీవో 610 అమలుపై జె.ఎం. గిర్‌గ్లానీ ఏకసభ్య కమిషన్ నివేదిక',
    issuingAuthority: 'Government of Andhra Pradesh',
    dateOrYear: 'Final Report: September 2004',
    pages: '35 Chapters • 126 Recommendations',
    summary: 'A forensic inquiry into 16 years of deliberate administrative distortions and deviations in implementing the Presidential Order and G.O. 610 across all government departments in Telangana.',
    pdfFilename: 'girglani-commission-final-report-2004.pdf',
    sections: [
      {
        numberOrCode: 'Appointment & Scope',
        title: 'Constitution of One-Man Commission',
        content: [
          'Appointed on June 25, 2001 by Chief Minister N. Chandrababu Naidu following renewed employee protests under K. Swamy Goud and KCR.',
          'Headed by retired IAS officer J.M. Girglani.',
          'Mandate: To investigate the reasons for non-implementation of G.O. 610 since 1985 and recommend time-bound remedies.'
        ],
        keyHighlight: 'Submitted Preliminary Report in Oct 2001 and Final Comprehensive Report in Sept 2004 with 35 chapters.'
      },
      {
        numberOrCode: 'Core Findings',
        title: '35 Chapters of Administrative Deviations',
        content: [
          'Identified 18 widespread modalities of circumvention (bogus certificates, conversion of zonal posts into state-wide cadres, fake medical transfers).',
          'Found over 58,000 non-locals serving in Telangana teacher cadres and police posts.',
          'Noted that Hyderabad city police had been illegally converted into a "Free Zone", disenfranchising local Telangana youths from police constable recruitments.'
        ],
        keyHighlight: 'Girglani noted: "Deviations have been committed with impunity and systemic neglect for over two decades."'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What did the Girglani Commission conclude regarding Hyderabad Police recruitment?',
        answer: 'The Commission affirmed that declaring Hyderabad as a "Free Zone" for police recruitments was unconstitutional under the 1975 Presidential Order, recommending that Hyderabad must remain strictly part of Zone VI.',
        examTip: 'The "Free Zone" issue became a major flashpoint during the 2009 Osmania University student agitations.'
      }
    ],
    testQuestions: [
      {
        id: 'gir-q1',
        question: 'How many total recommendations did the J.M. Girglani Commission submit in its final report in 2004?',
        options: ['52 Recommendations', '85 Recommendations', '126 Recommendations', '150 Recommendations'],
        correctIndex: 2,
        explanation: 'The Girglani Commission cataloged 35 chapters of departmental deviations and submitted 126 comprehensive remedial recommendations.',
        tag: 'Girglani Commission'
      }
    ]
  },

  // =========================================================================
  // 5. AP REORGANISATION ACT 2014 STATUTE
  // =========================================================================
  'ap-reorganisation-act-2014-statute': {
    id: 'ap-reorganisation-act-2014-statute',
    title: 'The Andhra Pradesh Reorganisation Act, 2014 (Act No. 6 of 2014)',
    titleTelugu: 'ఆంధ్రప్రదేశ్ పునర్వ్యవస్థీకరణ చట్టం, 2014 (చట్టం నం. 6)',
    issuingAuthority: 'Ministry of Law and Justice, Government of India',
    dateOrYear: '1 March 2014 (Assented by President Pranab Mukherjee)',
    pages: '72 Pages • 108 Sections • 13 Schedules',
    summary: 'The statutory enactment dividing the State of Andhra Pradesh into the successor State of Telangana and the residual State of Andhra Pradesh, governing territorial, fiscal, water, and institutional division.',
    pdfFilename: 'ap-reorganisation-act-2014-official.pdf',
    sections: [
      {
        numberOrCode: 'Part II (Sec 3–11)',
        title: 'Reorganisation of State Territory & Common Capital',
        content: [
          'Section 3: Formation of Telangana State comprising 10 erstwhile districts.',
          'Section 4: Residual State of Andhra Pradesh comprising 13 erstwhile districts.',
          'Section 5: Hyderabad as common capital for not exceeding 10 years (expired June 2, 2024).'
        ],
        keyHighlight: 'Hyderabad transitions exclusively to Telangana after 10-year transition window.'
      },
      {
        numberOrCode: 'Part VI (Sec 47–67)',
        title: 'Financial Assets, Liabilities & Public Debt Division',
        content: [
          'Cash balances, bank deposits, and loans apportioned strictly by 2011 Census population ratio (58.32% for AP : 41.68% for TS).',
          'Physical immovable assets vested on location principle.'
        ],
        keyHighlight: 'Population ratio 58.32 : 41.68 governed liquid assets and debt liabilities.'
      },
      {
        numberOrCode: 'Part IX (Sec 84–90)',
        title: 'Water Resources & River Management Boards',
        content: [
          'Section 84: Constitution of Apex Council chaired by Union Jal Shakti Minister.',
          'Section 85: Krishna River Management Board (KRMB) and Godavari River Management Board (GRMB).',
          'Section 90: Elevation of Indira Sagar (Polavaram) Project to National Project status.'
        ],
        keyHighlight: 'Central government assumed statutory responsibility for financing Polavaram.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What is the composition of the Apex Council under Section 84 of the Act?',
        answer: 'The Apex Council is chaired by the Union Minister of Water Resources (Jal Shakti) and comprises the Chief Ministers of both Andhra Pradesh and Telangana as members.',
        examTip: 'The Apex Council has statutory jurisdiction over KRMB and GRMB approvals.'
      }
    ],
    testQuestions: [
      {
        id: 'apr-stat-q1',
        question: 'Which section of the Act declared Polavaram as a project of national importance?',
        options: ['Section 80', 'Section 84', 'Section 90', 'Section 94'],
        correctIndex: 2,
        explanation: 'Section 90 formally declared Polavaram as a National Project of India.',
        tag: 'Statute Sections'
      }
    ]
  },

  // =========================================================================
  // 6. MODERN HISTORY OFFICIAL ARCHIVE
  // =========================================================================
  'modern-history-freedom-struggle-archive': {
    id: 'modern-history-freedom-struggle-archive',
    title: 'The Indian Independence Act, 1947 & National Freedom Movement Archive',
    titleTelugu: 'భారత స్వాతంత్ర్య చట్టం, 1947 & జాతీయోద్యమ చారిత్రక రికార్డులు',
    issuingAuthority: 'Parliament of the United Kingdom / National Archives of India',
    dateOrYear: '18 July 1947 (10 & 11 Geo. 6. c. 30)',
    pages: '24 Pages Primary Law',
    summary: 'The statutory enactment that partitioned British India into the independent Dominions of India and Pakistan, ending British suzerainty over 565 princely states.',
    pdfFilename: 'indian-independence-act-1947.pdf',
    sections: [
      {
        numberOrCode: 'Section 1 & 2',
        title: 'Creation of Two Independent Dominions',
        content: [
          'Declared that as from 15th August 1947, two independent Dominions, to be known as India and Pakistan, shall be set up.',
          'Defined territories and boundary commissions headed by Sir Cyril Radcliffe.'
        ],
        keyHighlight: 'Lapse of British paramountcy over Indian Princely States under Section 7.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What happened to British suzerainty over Princely States under Section 7 of the Act?',
        answer: 'Section 7(1)(b) declared that the suzerainty of His Majesty over the Indian States lapsed on 15 August 1947, returning sovereign freedom to rulers until Sardar Patel negotiated the Instrument of Accession.',
        examTip: 'High-yield for Modern History and Constitutional History.'
      }
    ],
    testQuestions: [
      {
        id: 'iia-q1',
        question: 'The Indian Independence Bill received Royal Assent on which date in 1947?',
        options: ['3 June 1947', '18 July 1947', '14 August 1947', '15 August 1947'],
        correctIndex: 1,
        explanation: 'The bill was introduced in the British Parliament on July 4, 1947 and received Royal Assent on July 18, 1947.',
        tag: 'Modern History'
      }
    ]
  },

  // =========================================================================
  // 7. CONSTITUTION OF INDIA (UPDATED BILINGUAL ARCHIVE)
  // =========================================================================
  'constitution-of-india-official': {
    id: 'constitution-of-india-official',
    title: 'The Constitution of India (Updated Official Text)',
    titleTelugu: 'భారత రాజ్యాంగం (అధికారిక పాఠం & సవరణలు)',
    issuingAuthority: 'Legislative Department, Ministry of Law and Justice, Government of India',
    dateOrYear: 'Adopted 26 Nov 1949 • In Force 26 Jan 1950 • Updated 2024',
    pages: '404 Articles • 12 Schedules • 106 Constitutional Amendments',
    summary: 'The supreme organic legal document of India framing fundamental political code, structure, procedures, powers, and duties of government institutions, and setting out fundamental rights, directive principles, and duties of citizens.',
    pdfFilename: 'constitution-of-india-official.pdf',
    sections: [
      {
        numberOrCode: 'Preamble',
        title: 'Sovereign Socialist Secular Democratic Republic',
        content: [
          'Declares India to be a Sovereign Socialist Secular Democratic Republic.',
          'Guarantees Justice (Social, Economic, Political), Liberty (Thought, Expression, Belief, Faith, Worship), Equality (Status and Opportunity), and Fraternity assuring dignity and unity.',
          '42nd Amendment Act 1976 added the terms Socialist, Secular, and Integrity.'
        ],
        keyHighlight: 'Preamble is an integral part of the Constitution and subject to amendment without altering Basic Structure (Kesavananda Bharati 1973).'
      },
      {
        numberOrCode: 'Part III (Articles 12–35)',
        title: 'Fundamental Rights & Constitutional Remedies',
        content: [
          'Right to Equality (Arts 14–18), Right to Freedom (Arts 19–22), Right against Exploitation (Arts 23–24).',
          'Right to Freedom of Religion (Arts 25–28), Cultural and Educational Rights (Arts 29–30).',
          'Article 32: Right to Constitutional Remedies (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto) — described by Dr. B.R. Ambedkar as the "Heart and Soul" of the Constitution.'
        ],
        keyHighlight: 'Articles 20 and 21 cannot be suspended even during a National Emergency under Article 359.'
      },
      {
        numberOrCode: 'Part IV (Articles 36–51)',
        title: 'Directive Principles of State Policy (DPSP)',
        content: [
          'Fundamental in the governance of the country (Article 37), though non-enforceable in courts.',
          'Key Provisions: Article 39(b) and (c) material resources distribution; Article 40 Gram Panchayats; Article 44 Uniform Civil Code; Article 45 early childhood care; Article 48A environmental protection.'
        ],
        keyHighlight: 'Minerva Mills (1980): The Indian Constitution is founded on the bedrock of the balance between Part III (FR) and Part IV (DPSP).'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Which Fundamental Rights are available exclusively to Indian citizens and not to foreigners?',
        answer: 'Articles 15, 16, 19, 29, and 30 are available exclusively to citizens of India. Other fundamental rights like Articles 14, 20, 21, 21A, 22, 25, 26, 27, and 28 are available to all persons.',
        examTip: 'High-frequency question in both UPSC and State PSC Prelims.'
      },
      {
        question: 'What is the doctrine of Basic Structure established in Kesavananda Bharati (1973)?',
        answer: 'The Supreme Court ruled that while Parliament has wide powers to amend the Constitution under Article 368, it cannot alter its "Basic Structure" (Judicial review, federalism, secularism, free elections, separation of powers).',
        examTip: 'Always quote the 13-judge bench and 7-6 majority verdict in Mains answers.'
      }
    ],
    testQuestions: [
      {
        id: 'coi-q1',
        question: 'Which Constitutional Amendment Act added the words "Socialist", "Secular", and "Integrity" to the Preamble?',
        options: ['42nd Amendment Act, 1976', '44th Amendment Act, 1978', '73rd Amendment Act, 1992', '86th Amendment Act, 2002'],
        correctIndex: 0,
        explanation: 'The 42nd Constitutional Amendment Act of 1976 amended the Preamble to introduce "Socialist", "Secular", and "and Integrity".',
        tag: 'Constitutional Law'
      }
    ]
  },

  // =========================================================================
  // 8. TELANGANA SOCIO-ECONOMIC OUTLOOK REPORT
  // =========================================================================
  'telangana-socio-economic-outlook-report': {
    id: 'telangana-socio-economic-outlook-report',
    title: 'Telangana Socio-Economic Outlook: Macro-Economic Overview & Growth Dynamics',
    titleTelugu: 'తెలంగాణ సామాజిక-ఆర్థిక ధోరణుల నివేదిక (ప్రణాళికా శాఖ)',
    issuingAuthority: 'Department of Planning, Government of Telangana',
    dateOrYear: 'Latest Annual Official Edition (2024)',
    pages: '320 Pages Official Data',
    summary: 'The primary annual economic document of the Telangana Government detailing Gross State Domestic Product (GSDP), per capita income, sector-wise growth trajectories, irrigation and infrastructure investments, and welfare expenditure.',
    pdfFilename: 'telangana-socio-economic-outlook-2024.pdf',
    sections: [
      {
        numberOrCode: 'Chapter 1 & 2',
        title: 'Macroeconomic Performance & Per Capita Income',
        content: [
          'Gross State Domestic Product (GSDP) grew at a compound annual rate outperforming the national average.',
          'Per Capita Income of Telangana reached ~₹3.12 lakh, standing significantly higher than the All-India average of ~₹1.72 lakh.',
          'Services sector accounts for over 62% of Gross State Value Added (GSVA), led by IT, real estate, and financial services.'
        ],
        keyHighlight: 'Telangana consistently ranks among the top 3 major states in per capita income.'
      },
      {
        numberOrCode: 'Chapter 3 & 4',
        title: 'Industrial Ecosystem & TS-iPASS Innovation',
        content: [
          'Genome Valley produces one-third of global vaccines; Medical Devices Park at Sultanpur is Asia’s largest.',
          'TS-iPASS single-window system has granted thousands of statutory approvals within the 15-day time frame.'
        ],
        keyHighlight: 'High ease of doing business and export dominance in life sciences and IT.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Which sector contributes the highest share to Telangana GSVA?',
        answer: 'The Services sector contributes approximately 62% to 64% of Gross State Value Added (GSVA), driven by Hyderabad’s IT exports.',
        examTip: 'Cite specific GSVA sectoral percentages in TSPSC Paper-V Mains answers.'
      }
    ],
    testQuestions: [
      {
        id: 'tseo-q1',
        question: 'According to the Telangana Socio-Economic Outlook, what share of global vaccine output is manufactured in Genome Valley, Hyderabad?',
        options: ['10%', '20%', '33% (One-third)', '50%'],
        correctIndex: 2,
        explanation: 'Genome Valley in Shamirpet accounts for one-third of the entire global supply of childhood vaccines.',
        tag: 'Telangana Economy'
      }
    ]
  },

  // =========================================================================
  // 9. SOCIO-ECONOMIC SURVEY OF ANDHRA PRADESH
  // =========================================================================
  'ap-socio-economic-survey-report': {
    id: 'ap-socio-economic-survey-report',
    title: 'Socio-Economic Survey of Andhra Pradesh: Strategic Overview',
    titleTelugu: 'ఆంధ్రప్రదేశ్ సామాజిక-ఆర్థిక సర్వే (ప్రణాళికా విభాగం)',
    issuingAuthority: 'Department of Planning, Government of Andhra Pradesh',
    dateOrYear: 'Latest Annual Official Survey (2024)',
    pages: '280 Pages Official Survey',
    summary: 'The authoritative official document published by the AP Planning Department detailing GSDP sectoral composition, agricultural and aquaculture dominance, ports and coastal corridor progress, and Direct Benefit Transfer welfare schemes.',
    pdfFilename: 'ap-socio-economic-survey-2024.pdf',
    sections: [
      {
        numberOrCode: 'Chapter 1',
        title: 'Macro Aggregates & Sectoral Contributions',
        content: [
          'Agriculture and Allied sector represents a substantially higher proportion of GSDP (~35-38%) compared to the national average (~18%).',
          'Andhra Pradesh ranks 1st in India in aquaculture production, contributing nearly 70% of farmed shrimp exports.'
        ],
        keyHighlight: 'Allied sectors (Fisheries, Horticulture, Livestock) drive state agricultural growth.'
      },
      {
        numberOrCode: 'Chapter 5',
        title: 'Maritime Sector & Industrial Corridors',
        content: [
          '974 km continental coastline provides the foundation for port-led industrial growth.',
          'VCIC and CBIC industrial corridors connecting deepwater ports with inland manufacturing zones.'
        ],
        keyHighlight: 'AP Maritime Board oversees development of non-major ports along the Bay of Bengal.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What is the length of Andhra Pradesh’s continental coastline?',
        answer: 'Andhra Pradesh has a continental coastline of 974 km, making it the second longest in mainland India after Gujarat (1,600 km).',
        examTip: 'High-yield for both APPSC Prelims and Mains Paper-V.'
      }
    ],
    testQuestions: [
      {
        id: 'aps-q1',
        question: 'Andhra Pradesh ranks first in India in which agricultural/allied export sector?',
        options: ['Wheat exports', 'Marine Aquaculture & Shrimp exports', 'Tea cultivation', 'Saffron production'],
        correctIndex: 1,
        explanation: 'Andhra Pradesh dominates India’s marine products export basket, accounting for ~70% of cultured Vannamei shrimp exports.',
        tag: 'AP Economy'
      }
    ]
  },

  // =========================================================================
  // 10. UNION ECONOMIC SURVEY & BUDGET HIGHLIGHTS
  // =========================================================================
  'union-economic-survey-budget-report': {
    id: 'union-economic-survey-budget-report',
    title: 'Union Economic Survey & Budget Strategic Highlights (Annual Compendium)',
    titleTelugu: 'కేంద్ర ఆర్థిక సర్వే & బడ్జెట్ సమగ్ర వ్యూహాత్మక సంకలనం',
    issuingAuthority: 'Economic Division, Department of Economic Affairs, Ministry of Finance',
    dateOrYear: 'Annual Central Government Survey & Union Budget',
    pages: '450 Pages Macro-Economic Analysis & Strategic Highlights',
    summary: 'The flagship economic report card of the Government of India presenting macro-economic trends, capital expenditure priorities, fiscal consolidation trajectories, monetary management, and structural supply-side transformations across all key sectors of the Indian economy.',
    pdfFilename: 'union-economic-survey-2024.pdf',
    sections: [
      {
        numberOrCode: 'Chapter 1: Macro Trends',
        title: 'State of the Economy: Growth Resilience & Capex Multiplier',
        content: [
          'Real GDP growth maintained above 7% for three consecutive fiscal years, cementing India as the fastest-growing major global economy.',
          'Public Capital Expenditure (Capex) surged over threefold from ₹3.36 lakh crore in FY20 to over ₹11.11 lakh crore (3.4% of GDP) in FY25, delivering an estimated economic multiplier of ~2.5x to 3.0x on private corporate investment.',
          'Post-pandemic recovery transitioning from government-funded infrastructure catalysts to private corporate investment and robust domestic consumption demand.',
          'Macroeconomic stability bolstered by healthy tax buoyancy with Gross Tax Revenue growing at a steady double-digit pace.'
        ],
        keyHighlight: 'Supply-side capacity enhancement under PM GatiShakti and National Infrastructure Pipeline (NIP) crowding in private sector investments.'
      },
      {
        numberOrCode: 'Chapter 2: Fiscal Policy',
        title: 'Fiscal Consolidation & Debt Trajectory (FRBM Matrix)',
        content: [
          'Fiscal deficit glide path: Successfully narrowed from 6.4% of GDP in FY23 to 5.6% in FY24, with a targeted consolidation below 4.5% by FY26.',
          'Quality of expenditure significantly upgraded: Revenue-to-Capital expenditure ratio improved from 5.4:1 in FY18 to nearly 2.9:1 in FY25, emphasizing asset-creating capital over pure revenue subsidies.',
          'Revised FRBM framework adherence: Rebalancing general government debt towards the recommended 60% of GDP benchmark (40% Central government, 20% States).'
        ],
        keyHighlight: 'Structural expenditure rationalization via Direct Benefit Transfer (DBT) has eliminated over ₹2.7 lakh crore in cumulative ghost leakages.'
      },
      {
        numberOrCode: 'Chapter 3: Monetary Policy',
        title: 'Monetary Management, Banking Health & Credit Growth',
        content: [
          'Reserve Bank of India (RBI) Monetary Policy Committee (MPC) maintained a calibrated headline policy repo rate to anchor inflation expectations while safeguarding growth momentum.',
          'Banking sector balance-sheet clean-up: Commercial banks Gross Non-Performing Assets (GNPA) ratio plummeted to a 12-year historical low of 2.8%, down from 11.2% in FY18.',
          'Capital to Risk-Weighted Assets Ratio (CRAR) of Scheduled Commercial Banks comfortably exceeded 16.8%, well above regulatory Basel-III requirements.',
          'Broad-based double-digit credit growth (>15%) sustained across retail, MSME, services, and industrial capital expenditure cycles.'
        ],
        keyHighlight: 'Twin Balance Sheet Advantage: Indian corporates and banking institutions now boast resilient, de-leveraged balance sheets primed for accelerated credit expansion.'
      },
      {
        numberOrCode: 'Chapter 4: Prices & Inflation',
        title: 'Inflation Dynamics: Core Moderation vs Food Price Volatility',
        content: [
          'Core inflation (Headline CPI excluding volatile food and fuel) moderated steadily to sub-3.5%, reflecting well-anchored aggregate demand and prudent monetary stance.',
          'Headline inflation remained predominantly influenced by weather-induced supply shocks affecting vegetables (tomatoes, onions, potatoes) and pulses.',
          'Supply-side government interventions: Targeted open-market sale schemes (OMSS), dynamic buffer stock releases (Bharat Dal, Bharat Atta, Bharat Rice), and rationalized export tariffs on critical cereals.'
        ],
        keyHighlight: 'Monetary-fiscal coordination successfully prevented domestic inflation contagion despite geopolitical supply-chain disruptions in the Red Sea corridor.'
      },
      {
        numberOrCode: 'Chapter 5: External Sector',
        title: 'External Sector: Robust Forex, Manageable CAD & Remittance Flows',
        content: [
          'Current Account Deficit (CAD) contained at a healthy, manageable level below 1.2% of GDP, buffered by booming software, business, and financial services exports.',
          'Foreign Exchange Reserves scaled past historic highs of $650+ Billion, covering over 11 months of projected merchandise imports.',
          'India retained its position as the top global remittance recipient with annual inflows crossing $125 Billion, reinforcing domestic income support in rural and semi-urban belts.',
          'External debt-to-GDP ratio dropped to ~18.7%, with short-term external debt remaining well within prudent safety limits.'
        ],
        keyHighlight: 'High import cover and low external debt ratio shield India against external currency depreciations and global interest-rate volatility.'
      },
      {
        numberOrCode: 'Chapter 6: Agriculture',
        title: 'Agriculture & Food Management: Allied Sectors & Tech Adoption',
        content: [
          'Agriculture and allied sectors clocked an average annual growth of over 4% over the last 6 years, with livestock, dairying, and fisheries expanding at 7%+, driving agricultural diversification.',
          'PM-KISAN has disbursed over ₹3 lakh crore directly to 11+ crore farmers without middleman friction.',
          'Promotion of millets (Shree Anna) and National Mission on Edible Oils to reduce import dependence and enhance climate resilience in semi-arid agrarian pockets.',
          'Expansion of Digital Public Infrastructure in agriculture via AgriStack, PM-KMY, and Kisan Credit Card digitization.'
        ],
        keyHighlight: 'Allied sectors now contribute over 30% of total agricultural output, decoupling farm household incomes from pure monsoon variability.'
      },
      {
        numberOrCode: 'Chapter 7: Industry & Infra',
        title: 'Industry & Infrastructure: PLI Schemes, Logistics & PM GatiShakti',
        content: [
          'Production Linked Incentive (PLI) schemes across 14 key sectors (electronics, pharmaceuticals, telecom, auto) have attracted over ₹1.28 lakh crore in actual investments and created 8.5+ lakh direct jobs.',
          'Smartphone manufacturing transformed India into the second-largest global producer, with smartphone exports exceeding ₹1.2 lakh crore annually.',
          'National Logistics Policy and PM GatiShakti National Master Plan integrating 16 central ministries to reduce logistics costs from 14% of GDP towards global benchmarks of ~8-9%.',
          'Dedicated Freight Corridors (Western & Eastern DFCs) operationalized, doubling freight train operational speeds and decongesting passenger trunk routes.'
        ],
        keyHighlight: 'Electronics manufacturing in India grew over 500% in the last decade, transitioning India from a net consumer to a global export hub.'
      },
      {
        numberOrCode: 'Chapter 8: Services & Energy',
        title: 'Services, Digital Public Infrastructure & Green Transition',
        content: [
          'Services sector continues to be the primary economic engine, contributing ~55% of Gross Value Added (GVA) and attracting over 65% of total Foreign Direct Investment (FDI) equity inflows.',
          'Digital Public Infrastructure (India Stack): Unified Payments Interface (UPI) handling over 13 billion monthly transactions worth ₹20+ lakh crore; Account Aggregator framework democratizing collateral-free credit.',
          'National Green Hydrogen Mission allocated ₹19,744 crore to establish 5 MMT annual production capacity by 2030, targeting net-zero carbon neutrality by 2070.',
          'Non-fossil fuel installed electricity capacity reached over 44% of total power mix, surpassing COP26 Nationally Determined Contribution (NDC) targets 7 years ahead of schedule.'
        ],
        keyHighlight: 'Global Capability Centres (GCCs) in India now employ over 1.9 million high-skilled professionals, evolving from cost-arbitrage back-offices to strategic innovation and AI hubs.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What is the "Twin Balance Sheet Advantage" highlighted in recent Economic Surveys?',
        answer: 'The Twin Balance Sheet Advantage refers to the simultaneous clean-up and financial strengthening of both Indian Commercial Banks (historically low NPAs < 2.8%, high CRAR > 16.8%) and Indian Corporates (significantly reduced debt-to-equity ratios and high interest coverage). This contrasts with the 2014-2018 "Twin Balance Sheet Problem" and positions the economy for sustained private capital expenditure.',
        examTip: 'High-yield analytical concept for UPSC GS-3 and State PSC economy papers.'
      },
      {
        question: 'How does Public Capital Expenditure (Capex) crowd-in private corporate investment?',
        answer: 'Public Capex in critical arterial infrastructure (highways, dedicated freight corridors, port connectivity, power grids) reduces systemic logistics costs and improves supply-chain turnaround times. This improves operational profit margins for private businesses, making their new capital investments financially viable and thereby "crowding-in" rather than displacing private credit.',
        examTip: 'Cite the 2.5x to 3.0x capex multiplier when answering questions on infrastructure-led growth.'
      },
      {
        question: 'What is the distinction between Headline CPI Inflation and Core CPI Inflation?',
        answer: 'Headline CPI measures total consumer inflation across all basket items including volatile food and fuel categories. Core CPI inflation strips out volatile food and fuel prices, reflecting underlying demand pressures and structural monetary trends. While Indian core inflation has remained comfortably below 3.5%, headline inflation is frequently skewed by weather-induced vegetable shocks.',
        examTip: 'Essential distinction for questions on the RBI Monetary Policy framework under the 4% (+/- 2%) mandate.'
      },
      {
        question: 'What institutional mechanisms ensure the credibility of India’s fiscal consolidation trajectory?',
        answer: 'Credibility is driven by: (1) Adherence to the statutory FRBM glide path targeting a central deficit under 4.5% of GDP by FY26, (2) Elimination of extra-budgetary borrowings by bringing food and fertilizer subsidies transparently onto the Union balance sheet, and (3) Systematic rationalization of revenue expenditure via Direct Benefit Transfers.',
        examTip: 'Mention expenditure quality metrics (Revenue to Capital outlay ratio) in Mains answers.'
      },
      {
        question: 'What are the strategic objectives of the National Logistics Policy (NLP) and PM GatiShakti?',
        answer: 'The NLP and PM GatiShakti aim to reduce India\'s logistics cost from ~13-14% of GDP to single digits (8-9%) by synchronizing multi-modal infrastructure across rail, road, shipping, and aviation, while digitalizing freight documentation through Unified Logistics Interface Platform (ULIP).',
        examTip: 'Connect PM GatiShakti with export competitiveness and manufacturing competitiveness under Make in India.'
      },
      {
        question: 'How has India’s Digital Public Infrastructure (DPI) contributed to formalization and financial inclusion?',
        answer: 'DPI (Aadhaar identity + UPI instant payments + Account Aggregator consent layer + ONDC e-commerce) has lowered customer onboarding costs by 90%+, facilitated direct benefit transfers to 11+ crore farmers, and enabled formal cash-flow-based micro-lending to millions of unbanked street vendors and MSMEs under schemes like PM SVANidhi.',
        examTip: 'Anchor GS-3 questions on inclusive growth with the India Stack framework.'
      }
    ],
    testQuestions: [
      {
        id: 'ues-q1',
        question: 'The Economic Survey of India is authored and presented by which official department?',
        options: ['Department of Revenue', 'Economics Division, Department of Economic Affairs', 'Reserve Bank of India', 'NITI Aayog Policy Division'],
        correctIndex: 1,
        explanation: 'The Economic Survey is authored annually by the Economics Division of the Department of Economic Affairs under the Ministry of Finance, guided by the Chief Economic Adviser (CEA).',
        tag: 'Institutional Structure'
      },
      {
        id: 'ues-q2',
        question: 'Under the revised FRBM framework, what is the targeted Central Government debt-to-GDP ratio benchmark?',
        options: ['30% of GDP', '40% of GDP', '50% of GDP', '60% of GDP'],
        correctIndex: 1,
        explanation: 'The N.K. Singh FRBM Committee recommended a general government debt limit of 60% of GDP, divided into 40% for the Central Government and 20% for State Governments.',
        tag: 'Fiscal Policy'
      },
      {
        id: 'ues-q3',
        question: 'The "Crowding-In Effect" of public capital expenditure primarily refers to:',
        options: [
          'High public borrowing forcing interest rates up and reducing private borrowing',
          'Strategic public infrastructure investment creating viable business conditions that induce private sector investment',
          'Replacing private banks with public sector financial institutions',
          'Direct nationalization of strategic industrial enterprises'
        ],
        correctIndex: 1,
        explanation: 'Crowding-in occurs when government capital expenditure on foundational infrastructure creates favorable market conditions and lower logistics costs, encouraging private enterprises to invest capital.',
        tag: 'Macroeconomic Concepts'
      },
      {
        id: 'ues-q4',
        question: 'Which of the following is excluded to calculate "Core Inflation"?',
        options: ['Housing and Education', 'Food and Energy/Fuel', 'Manufacturing and Transport', 'Personal Care and Health'],
        correctIndex: 1,
        explanation: 'Core inflation strips out the prices of Food and Energy/Fuel because their price fluctuations are predominantly driven by short-term supply shocks rather than persistent monetary demand.',
        tag: 'Inflation Dynamics'
      }
    ]
  },

  // =========================================================================
  // 11. NCERT CLASS 11: INDIAN CONSTITUTION AT WORK
  // =========================================================================
  'ncert-constitution-at-work': {
    id: 'ncert-constitution-at-work',
    title: 'NCERT Class 11: Indian Constitution at Work (Core Foundations)',
    titleTelugu: 'NCERT 11వ తరగతి: భారత రాజ్యాంగం పనితీరు',
    issuingAuthority: 'National Council of Educational Research and Training (NCERT)',
    dateOrYear: 'Official National Curriculum Text',
    pages: '240 Pages Conceptual Text',
    summary: 'The standard conceptual textbook for civil services aspirants explaining constitutional philosophy, rights, election machinery, the executive, legislature, judiciary, and federal balance.',
    pdfFilename: 'ncert-class-11-constitution-at-work.pdf',
    sections: [
      {
        numberOrCode: 'Chapters 1–4',
        title: 'Constitution as Living Document & Rights',
        content: [
          'Examines why we need a Constitution and how it limits the power of the state.',
          'Comprehensive breakdown of Fundamental Rights as shields against arbitrary executive power.'
        ],
        keyHighlight: 'Explains the dynamic balance between judicial independence and parliamentary democracy.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Why is the Indian Constitution described as a "Living Document"?',
        answer: 'Because through judicial interpretation, constitutional conventions, and Article 368 amendments, the Constitution continuously adapts to changing socio-political conditions without losing its basic identity.',
        examTip: 'High-yield analytical question in UPSC GS-2.'
      }
    ],
    testQuestions: [
      {
        id: 'nc-c1',
        question: 'Which chapter of the Indian Constitution is described by Granville Austin as the "Conscience of the Constitution"?',
        options: ['Fundamental Rights and Directive Principles', 'Preamble and Citizenship', 'Emergency Provisions', 'Schedules and Annexures'],
        correctIndex: 0,
        explanation: 'Granville Austin described Fundamental Rights (Part III) and Directive Principles (Part IV) together as the "Conscience of the Constitution".',
        tag: 'Constitutional Philosophy'
      }
    ]
  },

  // =========================================================================
  // 12. NCERT CLASS 11: THEMES IN INDIAN HISTORY
  // =========================================================================
  'ncert-themes-in-indian-history': {
    id: 'ncert-themes-in-indian-history',
    title: 'NCERT Themes in Indian History (Vols I, II, III)',
    titleTelugu: 'NCERT భారత చరిత్ర ఇతివృత్తాలు (భాగాలు 1, 2, 3)',
    issuingAuthority: 'National Council of Educational Research and Training (NCERT)',
    dateOrYear: 'Official National History Curriculum',
    pages: '3 Volumes • Ancient, Medieval & Modern',
    summary: 'The authoritative conceptual foundation for UPSC and State PSC history, covering the Harappan civilization, Mauryan and Gupta epigraphy, Bhakti-Sufi traditions, Vijayanagara architecture, and the freedom struggle.',
    pdfFilename: 'ncert-themes-in-indian-history.pdf',
    sections: [
      {
        numberOrCode: 'Themes 1–15',
        title: 'From Early Cities to Independence and Partition',
        content: [
          'Theme 1: Bricks, Beads and Bones (The Harappan Civilization).',
          'Theme 7: An Imperial Capital: Vijayanagara (Hampi).',
          'Theme 11: Rebels and the Raj (1857 Revolt and Representations).',
          'Theme 13: Mahatma Gandhi and the Nationalist Movement.'
        ],
        keyHighlight: 'Emphasizes primary archaeological and literary sources used by historians.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What was the unique architectural feature of the Vijayanagara urban core at Hampi?',
        answer: 'Vijayanagara employed sophisticated stone masonry without mortar, interlocking stones using wedge joints, and built monumental Gopurams (Raya Gopurams) and Mandapas (Kalyana Mandapa).',
        examTip: 'High-yield for Art & Architecture questions in GS-1.'
      }
    ],
    testQuestions: [
      {
        id: 'nth-q1',
        question: 'The ruins of the Vijayanagara Empire at Hampi were brought to light in 1800 by which British engineer and antiquarian?',
        options: ['Colonel Colin Mackenzie', 'Sir John Marshall', 'Alexander Cunningham', 'James Prinsep'],
        correctIndex: 0,
        explanation: 'Colonel Colin Mackenzie of the English East India Company discovered and prepared the first survey map of Hampi in 1800.',
        tag: 'Ancient & Medieval History'
      }
    ]
  },

  // =========================================================================
  // 13. TELUGU AKADEMI: HISTORY & CULTURE OF TELANGANA & ANDHRA
  // =========================================================================
  'telugu-akademi-history-culture': {
    id: 'telugu-akademi-history-culture',
    title: 'Telugu Akademi: History and Culture of Andhra Pradesh & Telangana',
    titleTelugu: 'తెలుగు అకాడమీ: తెలంగాణ & ఆంధ్రుల సమగ్ర చరిత్ర మరియు సంస్కృతి',
    issuingAuthority: 'Telugu Akademi, Government of Telangana & Andhra Pradesh',
    dateOrYear: 'Prescribed State Syllabus Text',
    pages: '520 Pages Standard Reference',
    summary: 'The prescribed textbook for APPSC and TSPSC Group-1 and Group-2 state history papers, detailing the Satavahanas, Ikshvakus, Eastern Chalukyas, Kakatiyas, Vijayanagara, Qutb Shahis, Asaf Jahis, the Telangana Movement, and the Andhra Movement.',
    pdfFilename: 'telugu-akademi-state-history.pdf',
    sections: [
      {
        numberOrCode: 'Ancient to Medieval',
        title: 'Satavahanas to Kakatiyas & Qutb Shahis',
        content: [
          'Detailed administrative, socio-cultural, and religious history of the Deccan dynasties.',
          'Epigraphical records, temple architecture, and literature in Prakrit, Telugu, and Sanskrit.'
        ],
        keyHighlight: 'The primary authority consulted by state public service commission question setters.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Why is the Telugu Akademi textbook considered the standard reference for state history disputes?',
        answer: 'High Courts and State PSCs officially accept Telugu Akademi publications as the authoritative reference benchmark for resolving key challenges and disputes in preliminary exams.',
        examTip: 'Direct source for dates, dynastic chronologies, and historical inscriptions.'
      }
    ],
    testQuestions: [
      {
        id: 'tah-q1',
        question: 'Who was the founder of the Satavahana dynasty according to the Puranas and epigraphical records?',
        options: ['Simuka', 'Satakarni I', 'Gautamiputra Satakarni', 'Hala'],
        correctIndex: 0,
        explanation: 'Simuka was the founder of the Satavahana dynasty after overthrowing the Kanva ruler Susarman.',
        tag: 'State History'
      }
    ]
  }
};

// Merge all additional official documents, batch-2 reports, and NCERT foundational textbooks
Object.assign(DOCUMENT_DETAILS_MAP, ADDITIONAL_DOCUMENT_DETAILS);
Object.assign(DOCUMENT_DETAILS_MAP, REPORTS_BATCH2_DETAILS);
Object.assign(DOCUMENT_DETAILS_MAP, NCERT_DOCUMENT_DETAILS);
Object.assign(DOCUMENT_DETAILS_MAP, BATCH_A_DOCUMENT_DETAILS);
Object.assign(DOCUMENT_DETAILS_MAP, BATCH_B_DOCUMENT_DETAILS);


