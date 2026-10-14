import { TopicContent } from '../types';
import { historyModernContent } from './modules/historyModern';
import { geographyDrainageContent } from './modules/geographyDrainage';
import { economyMacroContent } from './modules/economyMacro';
import { environmentBiodiversityContent } from './modules/environmentBiodiversity';
import { scitechEmergingContent } from './modules/scitechEmerging';
import { ethicsGovernanceContent } from './modules/ethicsGovernance';
import { appscEconomyContent } from './modules/appscEconomy';
import { tspscHistoryContent } from './modules/tspscHistory';
import { tspscEconomyContent } from './modules/tspscEconomy';

export const TOPIC_CONTENT_MAP: Record<string, TopicContent> = {
  // =========================================================================
  // 1. AP REORGANISATION ACT 2014 (APPSC & UPSC GS-2)
  // =========================================================================
  'appsc-reorganisation-act-2014': {
    nodeId: 'appsc-reorganisation-act-2014',
    title: 'AP Reorganisation Act, 2014 & Bifurcation Dynamics',
    titleTelugu: 'ఆంధ్రప్రదేశ్ పునర్వ్యవస్థీకరణ చట్టం, 2014 & విభజన సమస్యలు',
    subject: 'AP State Specific (Paper-V Group 1 & Group 2)',
    overview: 'Enacted under Article 3 of the Constitution to bifurcate the unified state of Andhra Pradesh into Telangana and the residual state of Andhra Pradesh on the Appointed Day: June 2, 2014. Covers 108 Sections across 12 Parts and 13 Schedules.',
    standardReferences: [
      {
        title: 'The Gazette of India: The Andhra Pradesh Reorganisation Act, 2014 (No. 6 of 2014)',
        source: 'Ministry of Law and Justice, Govt of India',
        relevance: 'The primary legal text for all sections, schedules and official provisions.'
      },
      {
        title: 'Bifurcation of Andhra Pradesh: Financial & Institutional Dimensions',
        source: 'Telugu Akademi / Centre for Economic & Social Studies (CESS)',
        relevance: 'Essential for economic analysis of asset allocation and debt servicing burden.'
      }
    ],
    infographic: {
      title: 'AP Reorganisation Act 2014: Core Architecture',
      subtitle: 'Key Sections, Legal Division Formulae & River Management',
      type: 'matrix',
      items: [
        {
          heading: 'Part II: Demarcation (Sec 3-5)',
          subheading: 'Territory & Common Capital',
          description: 'Telangana: 10 erstwhile districts; AP: 13 erstwhile districts. Hyderabad designated common capital for max 10 years (expired June 2, 2024).',
          badge: 'Section 5',
          highlight: true
        },
        {
          heading: 'Part VI: Financial Division (Sec 47-67)',
          subheading: '58.32% (AP) : 41.68% (TS)',
          description: 'Cash balances, deposits, and public debt divided strictly by 2011 Census population ratio. Physical assets assigned by location principle.',
          badge: 'Population Ratio',
          highlight: true
        },
        {
          heading: 'Part IX: River Management (Sec 84-90)',
          subheading: 'KRMB, GRMB & Apex Council',
          description: 'Apex Council headed by Union Jal Shakti Minister + both CMs. Krishna (KRMB) & Godavari (GRMB) boards manage water regulation and telemetry.',
          badge: 'Water Sharing',
          highlight: false
        },
        {
          heading: 'Section 90: Polavaram Project',
          subheading: 'National Project Declaration',
          description: 'Elevated to National Project status. Central government is statutory guarantor for approvals and remaining execution financing.',
          badge: 'National Project',
          highlight: true
        },
        {
          heading: 'Schedules 9 & 10: Institutional Division',
          subheading: '91 PSEs & 142 Training Institutes',
          description: 'Protracted disputes over headquarters principle resolved by Supreme Court in APSCHE case (2016) enforcing population-basis equity.',
          badge: 'Legal Dispute',
          highlight: false
        },
        {
          heading: 'Section 93 & 94: Special Packages',
          subheading: 'Backward Districts & New Capital',
          description: 'Special development package for 7 backward districts (4 in Rayalaseema, 3 in North Coastal AP) and capital city infrastructure grant.',
          badge: 'Fiscal Grants',
          highlight: false
        }
      ]
    },
    cheatSheet: {
      corePillars: [
        {
          title: 'Total Statutory Skeleton',
          points: [
            'Total Parts: 12 | Total Sections: 108 | Total Schedules: 13',
            'Presidential Reference: Referred to unified AP Assembly in Dec 2013 (Resolution rejecting bill passed in Jan 2014, but not binding under Art 3)',
            'Passed in Lok Sabha: Feb 18, 2014 | Passed in Rajya Sabha: Feb 20, 2014 | President Assent: March 1, 2014',
            'Appointed Day: 2 June 2014 (Official formation of Telangana as 29th State)'
          ]
        },
        {
          title: 'Asset Division Rules',
          points: [
            'Liquid Assets (Bank deposits, cash, tax refunds): 58.32% (AP) : 41.68% (TS) as per 2011 Census',
            'Immovable Assets (Land, Secretariat, Assembly, Raj Bhavan): Assigned to State in which physically situated',
            'Public Debt Servicing: Divided on population ratio, imposing higher debt repayment obligations on Andhra Pradesh'
          ]
        }
      ],
      statutoryOrConstitutionalProvisions: [
        { code: 'Article 3', label: 'Formation of new States', detail: 'Parliament can form a new State by law by separating territory; State legislature view is consultative only.' },
        { code: 'Section 5', label: 'Common Capital', detail: 'Hyderabad as common capital for up to 10 years, transitioning exclusively to Telangana on 2 June 2024.' },
        { code: 'Section 8', label: 'Governor Responsibility', detail: 'Governor of Telangana given special responsibility for law & order in common capital (rarely invoked).' },
        { code: 'Section 80', label: 'Advisory Committee (Kamalanathan)', detail: 'State cadre employee distribution based on local cadre options and nativity guidelines.' },
        { code: 'Section 90', label: 'Polavaram Irrigation Project', detail: 'Central government consents to execute and fund the project in consultation with the AP Government.' }
      ],
      landmarkPrecedents: [
        {
          title: 'AP State Council of Higher Education (APSCHE) vs Union of India (2016)',
          significance: 'Supreme Court ruled that institutions in Schedule 9 and 10 located in Hyderabad cannot be monopolized by Telangana; assets must be shared on population ratio (58.32 : 41.68).'
        },
        {
          title: 'Babulal Parate vs State of Bombay (1960)',
          significance: 'Established that Parliament is not bound to accept the views of the State legislature expressed under the proviso to Article 3.'
        }
      ],
      examPitfalls: [
        'Do not confuse the physical asset division rule (location-based) with liquid financial assets (population ratio 58.32:41.68).',
        'Section 90 covers Polavaram, while Section 84 covers the Apex Council. Do not intermix the two in prelims questions.',
        'Remember that Schedule 9 contains 91 Public Sector Undertakings (PSUs), while Schedule 10 contains 142 Educational/Training institutions.'
      ]
    },
    topperNotes: {
      author: 'K. Sreekanth, APPSC Group-1 Ranker (Deputy Collector Cadre)',
      rankOrCred: 'APPSC Group-1 Topper & Civil Services Mentor (CC-BY 4.0)',
      readingTime: '6 mins revision',
      keyTakeaways: [
        'Prelims questions directly test exact section numbers: Memorize Sec 5 (Capital), Sec 8 (Governor), Sec 47 (Cash), Sec 84 (Apex Council), Sec 90 (Polavaram).',
        'In Mains answers, always quote the population ratio (58.32% : 41.68%) when discussing revenue deficit, because residual AP inherited disproportionate debt without the economic engine of Hyderabad.',
        'Always connect the Schedule 9 & 10 disputes to the 2016 Supreme Court APSCHE ruling — examiners look specifically for this case citation!'
      ],
      corePointers: [
        {
          title: 'Section Number Quick Memorization Rule',
          notes: [
            'Sec 3: Formation of Telangana State (10 districts)',
            'Sec 4: State of Andhra Pradesh (residuary 13 districts)',
            'Sec 5: Common capital for 10 years (ended 2 June 2024)',
            'Sec 30: Common High Court (separate AP High Court formed on 1 Jan 2019 under Presidential Order)',
            'Sec 80: Kamalanathan Committee for employee cadre allocation',
            'Sec 90: Polavaram declared Project of National Importance'
          ]
        },
        {
          title: 'Mains Scoring Structure for Bifurcation Issues',
          notes: [
            'Point 1: Revenue Deficit Grant under 14th/15th Finance Commission',
            'Point 2: Special Category Status (SCS) vs Special Assistance Package debate',
            'Point 3: Backward districts development grant for 7 districts (Rayalaseema 4 + Uttarandhra 3)',
            'Point 4: Ramification of River Management Boards (KRMB/GRMB) gazette notifications on power generation at Srisailam & Nagarjunasagar'
          ]
        }
      ]
    },
    officialDocuments: [
      {
        id: 'ap-reorganisation-act-2014-statute',
        title: 'The Andhra Pradesh Reorganisation Act, 2014 (Act No. 6 of 2014)',
        issuingAuthority: 'Ministry of Law and Justice, Government of India',
        gazetteNoOrYear: 'Gazette of India Extraordinary Part II, 1 March 2014',
        downloadUrl: '/documents/ap-reorganisation-act-2014-official.pdf',
        fileSize: '1.4 MB PDF',
        isPrimaryLaw: true
      }
    ],
    microQuiz: [
      {
        id: 'apr-q1',
        question: 'Under the AP Reorganisation Act 2014, the liquid assets, cash balances, and public debt were divided based on which criteria?',
        questionTelugu: 'ఏపీ పునర్వ్యవస్థీకరణ చట్టం ప్రకారం నగదు నిల్వలు మరియు రుణాలను ఏ ప్రాతిపదికన విభజించారు?',
        options: [
          '50:50 equal division',
          'Revenue generation ratio of 2013-14',
          '2011 Census population ratio (58.32 : 41.68)',
          'Geographical land area ratio (61:39)'
        ],
        correctIndex: 2,
        explanation: 'Part VI (Sections 47-67) explicitly stipulates that cash balances, investments, and public debt are divided strictly by the 2011 Census population ratio: 58.32% for Andhra Pradesh and 41.68% for Telangana.',
        tag: 'Financial Provisions'
      },
      {
        id: 'apr-q2',
        question: 'Which section of the Act officially declared the Polavaram Irrigation Project as a project of national importance?',
        questionTelugu: 'పోలవరం ప్రాజెక్టును జాతీయ ప్రాజెక్టుగా ఏ సెక్షన్ ద్వారా ప్రకటించారు?',
        options: ['Section 84', 'Section 88', 'Section 90', 'Section 94'],
        correctIndex: 2,
        explanation: 'Section 90 of the Act declared Polavaram as a National Irrigation Project and committed the Central Government to finance and execute the remaining works.',
        tag: 'Water Resources'
      },
      {
        id: 'apr-q3',
        question: 'The prolonged dispute between Andhra Pradesh and Telangana regarding Schedule 9 & 10 institutions was resolved by the Supreme Court in which landmark judgment?',
        questionTelugu: 'షెడ్యూల్ 9 & 10 సంస్థల వివాదాన్ని సుప్రీంకోర్టు ఏ తీర్పులో పరిష్కరించింది?',
        options: [
          'S.R. Bommai v. Union of India',
          'APSCHE v. Union of India (2016)',
          'Kesavananda Bharati v. State of Kerala',
          'T.M.A. Pai Foundation case'
        ],
        correctIndex: 1,
        explanation: 'In the APSCHE case (2016), the Supreme Court ruled that institutions situated in Hyderabad under Schedules 9 & 10 do not belong solely to Telangana; assets and funds must be apportioned on population basis.',
        tag: 'Legal Precedent'
      },
      {
        id: 'apr-q4',
        question: 'Who serves as the Chairperson of the Apex Council established under Section 84 for Krishna and Godavari River Management Boards?',
        questionTelugu: 'కృష్ణా, గోదావరి నదీ యాజమాన్య బోర్డుల అపెక్స్ కౌన్సిల్ చైర్మన్ ఎవరు?',
        options: [
          'Chief Minister of Andhra Pradesh',
          'Union Minister of Water Resources / Jal Shakti',
          'Chairman of Central Water Commission',
          'Governor of Telangana'
        ],
        correctIndex: 1,
        explanation: 'Section 84 designates the Union Minister for Water Resources (Jal Shakti) as Chairperson, with the Chief Ministers of Andhra Pradesh and Telangana as members.',
        tag: 'Apex Council'
      },
      {
        id: 'apr-q5',
        question: 'The committee appointed by the Central Government for the allocation of state-cadre employees between AP and Telangana was chaired by:',
        questionTelugu: 'ఉద్యోగుల కేటాయింపు కోసం కేంద్ర ప్రభుత్వం నియమించిన కమిటీ చైర్మన్ ఎవరు?',
        options: [
          'Justice B.N. Srikrishna',
          'Dr. C. Rangarajan',
          'J.M. Lyngdoh',
          'P. Kamalanathan'
        ],
        correctIndex: 3,
        explanation: 'The P. Kamalanathan Committee was constituted under Section 80 of the Act to frame guidelines and allocate thousands of state-cadre employees between both successor states.',
        tag: 'Administrative Cadres'
      }
    ],
    mainsScaffold: {
      question: 'Examine the key fiscal and institutional challenges faced by the residual State of Andhra Pradesh following the implementation of the AP Reorganisation Act, 2014. Suggest policy measures to overcome these structural constraints. (15 Marks / 250 Words)',
      marks: 15,
      timeMinutes: 12,
      approach: {
        intro: 'Begin by referencing the enactment of the AP Reorganisation Act, 2014 under Article 3. Highlight that the bifurcation created asymmetric structural challenges for residual AP—namely loss of a revenue-generating economic capital (Hyderabad) alongside inheriting 58.32% of public debt liabilities.',
        body: [
          {
            subheading: '1. Asymmetric Fiscal Strain & Revenue Deficit',
            points: [
              'Loss of Hyderabad metropolis, which generated over 50% of unified AP commercial taxes.',
              'Apportionment of liabilities and pension obligations based on 58.32% population ratio, while tax revenue bases remained severely truncated.',
              'Unfulfilled statutory commitments under Section 93 & 94 (tax incentives, Special Category Status delay, resource gaps).'
            ]
          },
          {
            subheading: '2. Institutional Dislocation & Capital Building',
            points: [
              'Schedule 9 (91 PSUs) and Schedule 10 (142 training bodies) deadlock delaying financial asset liquidation.',
              'Immense capital expenditure requirements for establishing Greenfield capital (Amaravati), Secretariat, High Court, and central educational institutions.'
            ]
          },
          {
            subheading: '3. Water Sharing & Irrigation Uncertainty',
            points: [
              'Polavaram (Section 90) cost revisions and land acquisition delays.',
              'Telemetry and jurisdiction disputes with KRMB over Krishna basin reservoirs (Srisailam, Nagarjuna Sagar).'
            ]
          }
        ],
        diagramSuggestion: 'Flow diagram illustrating: Loss of Revenue Engine (Hyderabad) + 58.32% Debt Burden -> Fiscal Deficit -> Infrastructure Financing Gap -> Need for Special Category Status / MHA Inter-State Council Resolution.',
        conclusion: 'Conclude that bridging these deficits requires fulfilling statutory promises under Section 93, fast-tracking Polavaram completion via unconditional central releases, and activating Inter-State Council (Art 263) dispute settlement mechanisms in true spirit of cooperative federalism.'
      }
    }
  },

  // =========================================================================
  // 2. TELANGANA MOVEMENT & STATE FORMATION (TSPSC & UPSC GS-1)
  // =========================================================================
  'tspsc-movement-state-formation': {
    nodeId: 'tspsc-movement-state-formation',
    title: 'Telangana Movement & State Formation (1948–2014)',
    titleTelugu: 'తెలంగాణ ఉద్యమం & రాష్ట్ర ఆవిర్భావం (1948–2014)',
    subject: 'Telangana State Specific (Paper-VI TSPSC Group 1)',
    overview: 'A 60-year historic struggle for political identity, geographical autonomy, economic justice, and cultural self-respect. From the 1952 Non-Mulki agitation and 1956 Gentlemen’s Agreement to the 1969 student upsurge, 1973 Six-Point Formula, and the final 2001–2014 mass mobilization.',
    standardReferences: [
      {
        title: 'Telangana Movement: The Statehood Struggle',
        source: 'Telugu Akademi / Prof. M. Kodandaram',
        relevance: 'The definitive academic curriculum reference for TSPSC Group-1 and Group-2 exams.'
      },
      {
        title: 'Report of the Committee for Consultations on the Situation in Andhra Pradesh (Justice Sri Krishna Committee)',
        source: 'Ministry of Home Affairs, Govt of India (Dec 2010)',
        relevance: 'Analyzes the socio-economic data, regional disparities, and 6 strategic options.'
      }
    ],
    infographic: {
      title: 'Telangana Statehood Struggle: Key Historical Milestones',
      subtitle: 'From Police Action (1948) to Statehood Realization (2014)',
      type: 'timeline',
      items: [
        {
          heading: '1948: Operation Polo (Police Action)',
          subheading: 'Integration into Indian Union',
          description: 'Hyderabad State liberated on Sept 17, 1948; Major General J.N. Chaudhuri military governorship established.',
          badge: '1948',
          highlight: false
        },
        {
          heading: '1952: Mulki Agitation & City College Incident',
          subheading: 'First Mass Resistance',
          description: 'Students protested recruitment of non-locals (Gair-Mulkis) in Warangal and Hyderabad; Justice Jaganmohan Reddy Commission inquiry.',
          badge: '1952',
          highlight: true
        },
        {
          heading: '1956: Gentlemen’s Agreement (Feb 20, 1956)',
          subheading: '14 Safeguards for Telangana',
          description: 'Signed at Hyderabad House, Delhi by 4 Andhra and 4 Telangana leaders. Established Telangana Regional Committee (TRC) and expenditure safeguards.',
          badge: '1956',
          highlight: true
        },
        {
          heading: '1969: Jai Telangana Movement',
          subheading: 'Ravindranath Fast & 369 Martyrs',
          description: 'Mass student agitation led by TPS (Telangana Praja Samithi) against violations of Gentlemen’s Agreement. Led to PM Indira Gandhi’s 8-Point Plan.',
          badge: '1969',
          highlight: true
        },
        {
          heading: '1973: Six-Point Formula & Presidential Order (1975)',
          subheading: 'Constitutional Amendment 32nd',
          description: 'Inserted Article 371-D creating 6 zonal cadres and AP Administrative Tribunal; later supplemented by G.O. 610 (1985).',
          badge: '1973',
          highlight: false
        },
        {
          heading: '2001–2014: Final Phase & Mass Agitations',
          subheading: 'KCR Fast, Million March & Sakala Janula Samme',
          description: 'Massive non-cooperation strikes, Sri Krishna Committee Report (2010), AP Reorganisation Act passed in Feb 2014; Telangana born on June 2, 2014.',
          badge: '2014',
          highlight: true
        }
      ]
    },
    cheatSheet: {
      corePillars: [
        {
          title: 'The 1956 Gentlemen’s Agreement (14 Points)',
          points: [
            'Telangana Regional Committee (TRC) with statutory powers on legislation, planning, and development',
            'Surplus revenues from Telangana to be spent exclusively on Telangana region',
            'Domicile / Mulki condition: Continuous residence of 12 years in Telangana for employment',
            'Cabinet representation: 60:40 ratio between Andhra and Telangana ministers; if CM from Andhra, Deputy CM from Telangana (and vice versa)'
          ]
        },
        {
          title: 'The Six-Point Formula (1973) & Article 371-D',
          points: [
            'Abolished Mulki Rules and Telangana Regional Committee',
            'Created 6 administrative zones across the unified state for local direct recruitment',
            'Presidential Order 1975 issued under Art 371-D to organize local cadres for civil posts and education admissions'
          ]
        }
      ],
      statutoryOrConstitutionalProvisions: [
        { code: 'Article 371-D', label: 'Special provisions for AP', detail: 'Empowered President to organize local cadres and establish Administrative Tribunal to resolve service matters.' },
        { code: 'G.O. 610 (1985)', label: 'Repatriation of Non-Locals', detail: 'Issued by N.T. Rama Rao govt based on Jayabharat Reddy Committee to repatriate non-locals appointed in violation of Presidential Order by March 1986.' },
        { code: 'G.O.Ms. 36 (1969)', label: 'Safeguards Implementation', detail: 'Issued to relieve non-domicile employees from Telangana posts; later declared unconstitutional by High Court.' }
      ],
      landmarkPrecedents: [
        {
          title: 'Director of Industries & Commerce vs V. Venkata Reddy (1972)',
          significance: 'Supreme Court 5-judge Constitution Bench held that Mulki Rules continued to be valid law in Telangana under Article 35(b) despite the formation of Andhra Pradesh.'
        },
        {
          title: 'Justice Sri Krishna Committee Report (Dec 2010)',
          significance: 'Submitted 6 options for resolving the Telangana demand, with Option 5 (Separation with Hyderabad as capital of Telangana) and Option 6 (Unified state with statutory regional council) analyzed in detail.'
        }
      ],
      examPitfalls: [
        'Do not confuse the 1969 Eight-Point Formula (Indira Gandhi) with the 1973 Six-Point Formula (which brought Art 371-D).',
        'Remember that the Girglani Commission (2001) was appointed specifically to examine the non-implementation of G.O. 610.',
        'In the Gentlemen’s Agreement, 4 leaders represented Telangana: Burgula Ramakrishna Rao, K.V. Ranga Reddy, Marri Chenna Reddy, and J.V. Narsing Rao.'
      ]
    },
    topperNotes: {
      author: 'P. Ravinder Reddy, TSPSC Group-1 Ranker (Commercial Tax Officer Cadre)',
      rankOrCred: 'TGPSC Group-1 Selected & Academic Researcher (CC-BY 4.0)',
      readingTime: '7 mins revision',
      keyTakeaways: [
        'Paper-VI carries 150 dedicated marks in TSPSC Group-1 Mains: Focus intensely on committees, dates, and government orders (G.O. 36, G.O. 610).',
        'Remember the distinction: Kumar Lalit Committee (1969) calculated revenue surplus as ₹102 crore, while Bhargava Committee (1969) revised it to ₹28.3 crore.',
        'The 1952 Mulki agitation began in Warangal over non-local teachers before spreading to City College, Hyderabad. The inquiry commission was Justice Pingali Jaganmohan Reddy.'
      ],
      corePointers: [
        {
          title: 'Chronology Formula for Agitations',
          notes: [
            'Phase 1: 1948 Police Action -> 1952 Mulki Agitation -> 1956 Gentlemen Agreement (Signed by 8 leaders: 4 Andhra + 4 Telangana)',
            'Phase 2: Jan 1969 Ravindranath Fast in Khammam -> TPS formation -> April 1969 PM Eight-Point Formula -> 1972 Jai Andhra Movement -> Sept 1973 Six-Point Formula',
            'Phase 3: 1975 Presidential Order -> Dec 1985 G.O. 610 -> 2001 Girglani Commission -> 2009 KCR Hunger Strike -> 2010 Sri Krishna Committee -> 2011 Million March & Sakala Janula Samme -> 2014 Statehood'
          ]
        },
        {
          title: 'Justice Sri Krishna Committee: 6 Options Memory Hack',
          notes: [
            'Option 1: Maintaining status quo (Rejected)',
            'Option 2: Bifurcating state with Hyderabad as Union Territory (Rejected)',
            'Option 3: Bifurcating into Rayala-Telangana and Coastal Andhra (Rejected)',
            'Option 4: Bifurcating into Seemandhra and Telangana with enlarged Hyderabad capital area (Rejected)',
            'Option 5: Bifurcation of State into Telangana and Seemandhra as per existing boundaries with Hyderabad as capital of Telangana (Second most viable)',
            'Option 6: Keeping state united with a statutory empowered Telangana Regional Council (Recommended by Committee as Option 1, but public sentiment demanded Option 5)'
          ]
        }
      ]
    },
    officialDocuments: [
      {
        id: 'sri-krishna-committee-report',
        title: 'Report of the Committee for Consultations on the Situation in Andhra Pradesh (Sri Krishna Committee)',
        issuingAuthority: 'Ministry of Home Affairs (MHA), Government of India',
        gazetteNoOrYear: '30 December 2010 (505 Pages)',
        downloadUrl: '/documents/sri-krishna-committee-report-2010.pdf',
        fileSize: '4.2 MB PDF',
        isPrimaryLaw: false
      },
      {
        id: 'article-371-d-presidential-order',
        title: 'The Constitution (Thirty-Second Amendment) Act, 1973 (Article 371-D)',
        issuingAuthority: 'Parliament of India',
        gazetteNoOrYear: 'Act No. 32 of 1973',
        downloadUrl: '/documents/article-371-d-presidential-order-1975.pdf',
        fileSize: '320 KB PDF',
        isPrimaryLaw: true
      },
      {
        id: 'go-ms-610-1985',
        title: 'Government Order Ms. No. 610 (G.O. 610) Full Text',
        issuingAuthority: 'General Administration Department, Govt of Andhra Pradesh',
        gazetteNoOrYear: 'Dated 30 December 1985',
        downloadUrl: '/documents/go-ms-610-dated-30-12-1985.pdf',
        fileSize: '280 KB PDF'
      },
      {
        id: 'girglani-commission-report',
        title: 'J.M. Girglani One-Man Commission Final Report on G.O. 610',
        issuingAuthority: 'Government of Andhra Pradesh',
        gazetteNoOrYear: 'Submitted September 2004 (Vol I & II)',
        downloadUrl: '/documents/girglani-commission-final-report-2004.pdf',
        fileSize: '3.1 MB PDF'
      }
    ],
    microQuiz: [
      {
        id: 'ts-q1',
        question: 'Under the 1956 Gentlemen’s Agreement, what was the mandatory residency period stipulated to qualify as a Mulki (local resident) in Telangana?',
        questionTelugu: '1956 పెద్దమనుషుల ఒప్పందం ప్రకారం ముల్కీగా అర్హత పొందడానికి ఎన్ని సంవత్సరాల నివాస అర్హత నిర్ణయించారు?',
        options: ['7 years', '10 years', '12 years', '15 years'],
        correctIndex: 2,
        explanation: 'Clause 6 of the Gentlemen’s Agreement preserved the Mulki condition specifying a continuous residence of 12 years in the Telangana region to be eligible for government employment and educational seats.',
        tag: 'Gentlemen Agreement'
      },
      {
        id: 'ts-q2',
        question: 'Which Constitutional Amendment introduced Article 371-D following the 1973 Six-Point Formula?',
        questionTelugu: '1973 ఆరు సూత్రాల పథకం తర్వాత రాజ్యాంగంలో ఆర్టికల్ 371-D ని ఏ రాజ్యాంగ సవరణ ద్వారా చేర్చారు?',
        options: ['24th Amendment', '32nd Amendment', '42nd Amendment', '44th Amendment'],
        correctIndex: 1,
        explanation: 'The 32nd Constitutional Amendment Act, 1973 inserted Article 371-D and 371-E into the Constitution to give constitutional backing to the Six-Point Formula.',
        tag: 'Constitutional Provisions'
      },
      {
        id: 'ts-q3',
        question: 'G.O. 610, issued in December 1985 to repatriate non-locals recruited in violation of the Presidential Order, was based on the recommendations of which committee?',
        questionTelugu: 'రాష్ట్రపతి ఉత్తర్వులను ఉల్లంఘించి నియమితులైన నాన్-లోకల్ ఉద్యోగుల వెనక్కి పంపే జీవో 610 ఏ కమిటీ నివేదిక ఆధారంగా జారీ చేయబడింది?',
        options: [
          'Wanchoo Committee',
          'Jayabharat Reddy Committee',
          'Kumar Lalit Committee',
          'J.M. Girglani Commission'
        ],
        correctIndex: 1,
        explanation: 'The Jayabharat Reddy Committee (1985) investigated violations of the Presidential Order of 1975 and found over 58,000 non-locals recruited in Telangana; its report formed the direct basis for issuing G.O. 610.',
        tag: 'G.O. 610'
      },
      {
        id: 'ts-q4',
        question: 'Who was the student leader whose indefinite hunger strike at Khammam in January 1969 catalyzed the 1969 Jai Telangana agitation?',
        questionTelugu: '1969 జనవరిలో ఖమ్మంలో నిరాహార దీక్ష చేపట్టి 1969 తెలంగాణ ఉద్యమానికి నాంది పలికిన విద్యార్థి నాయకుడు ఎవరు?',
        options: ['Marri Chenna Reddy', 'Balka Suman', 'Ravindranath', 'K.V. Ranga Reddy'],
        correctIndex: 2,
        explanation: 'Anna Bathurst Ravindranath, a student of B.A. Final Year in Khammam, began an indefinite fast on January 8, 1969, demanding the implementation of safeguards and repatriation of non-locals.',
        tag: '1969 Movement'
      },
      {
        id: 'ts-q5',
        question: 'The one-man commission appointed in 2001 by the AP government to inquire into the implementation of G.O. 610 was headed by:',
        questionTelugu: 'జీవో 610 అమలు తీరును పరిశీలించడానికి 2001 లో నియమించిన ఏకసభ్య కమిషన్ చైర్మన్ ఎవరు?',
        options: [
          'Justice Jaganmohan Reddy',
          'J.M. Girglani',
          'Justice Bhargava',
          'Prof. Jayashankar'
        ],
        correctIndex: 1,
        explanation: 'Retired IAS officer J.M. Girglani was appointed in 2001. His final report submitted in 2004 cataloged extensive deviations across departments in adhering to the 1975 Presidential Order.',
        tag: 'Girglani Commission'
      }
    ],
    mainsScaffold: {
      question: 'Analyze how the violation of the 1956 Gentlemen’s Agreement acted as a fundamental trigger for the 1969 Telangana Agitation. Discuss the policy response of the Union Government through the Eight-Point Formula. (15 Marks / 250 Words)',
      marks: 15,
      timeMinutes: 12,
      approach: {
        intro: 'Start with the historic context of the Gentlemen’s Agreement signed on Feb 20, 1956, which laid down 14 statutory safeguards to protect Telangana’s revenue surpluses, jobs (Mulki rules), and political representation as a prerequisite for creating Andhra Pradesh.',
        body: [
          {
            subheading: '1. Systematic Violations of Safeguards (1956–1968)',
            points: [
              'Diversion of Revenue Surpluses: Telangana budgetary surpluses were systematically diverted to coastal Andhra canal projects rather than regional irrigation (proved by Kumar Lalit & Bhargava Committees).',
              'Mulki Employment Violations: Over 25,000 non-locals recruited into Telangana teacher and administrative cadres through fake residency certificates.',
              'Political Marginalization: Denial of Deputy Chief Minister post to Telangana when Chief Minister was from Andhra region (violated during Sanjiva Reddy tenure).'
            ]
          },
          {
            subheading: '2. The 1969 Agitation Upsurge',
            points: [
              'Ravindranath hunger strike in Khammam spark leading to Osmania University student general strike.',
              'Formation of Telangana Praja Samithi (TPS) under Marri Chenna Reddy; state police firing claiming 369 student lives.'
            ]
          },
          {
            subheading: '3. Union Government Policy Response: The Eight-Point Formula (April 1969)',
            points: [
              'Announced by Prime Minister Indira Gandhi in Lok Sabha on April 11, 1969.',
              'Constituted high-level committees: Bhargava Committee (to determine surplus revenue figures) and Wanchoo Committee (on employment safeguards).',
              'Set up a Planning Board for Telangana and a high-powered implementation committee headed by Union Home Secretary.'
            ]
          }
        ],
        diagramSuggestion: 'Timeline flow: 1956 Gentlemen’s Agreement -> Revenue/Job Violations -> 1969 Student Agitation (TPS) -> PM Eight-Point Formula -> Unresolved aspirations leading to 1973 Six-Point Formula.',
        conclusion: 'Conclude that while the Eight-Point Formula conceded financial disparities, its refusal to grant political autonomy or preserve Mulki rules permanently paved the way for subsequent agitations, culminating in the 2014 statehood achievement.'
      }
    }
  },

  // =========================================================================
  // 3. CONSTITUTIONAL FRAMEWORK & FUNDAMENTAL RIGHTS (UNIVERSAL CORE)
  // =========================================================================
  'polity-constitution-framework': {
    nodeId: 'polity-constitution-framework',
    title: 'Constitutional Framework & Fundamental Rights',
    titleTelugu: 'రాజ్యాంగ నిర్మాణం & ప్రాథమిక హక్కులు',
    subject: 'Indian Polity & Governance (UPSC GS-2, APPSC & TSPSC)',
    overview: 'The bedrock foundation of Indian Constitutional Law. Covers Preamble philosophy, Part III Fundamental Rights (Articles 12-35), Writs jurisdiction, the judicial evolution of Article 21, and the Basic Structure Doctrine.',
    standardReferences: [
      {
        title: 'Indian Polity (7th Edition)',
        source: 'M. Laxmikanth (McGraw Hill)',
        relevance: 'Chapters on Historical Background, Preamble, Fundamental Rights, and Basic Structure.'
      },
      {
        title: 'Introduction to the Constitution of India',
        source: 'Dr. D.D. Basu',
        relevance: 'Essential for constitutional philosophy and comparative case jurisprudence.'
      }
    ],
    infographic: {
      title: 'Fundamental Rights & Judicial Protection Matrix',
      subtitle: 'Classification, Key Writs & Landmark Judicial Doctrines',
      type: 'matrix',
      items: [
        {
          heading: 'Right to Equality (Articles 14-18)',
          subheading: 'Rule of Law & Non-Discrimination',
          description: 'Art 14 (Equality before law & equal protection), Art 15 & 16 (Reservations & Affirmative action), Art 17 (Abolition of Untouchability).',
          badge: 'Arts 14-18',
          highlight: false
        },
        {
          heading: 'Right to Freedom (Articles 19-22)',
          subheading: 'Six Freedoms & Due Process',
          description: 'Art 19(1) six democratic freedoms subject to reasonable restrictions (Art 19(2)). Art 21 expanded from procedure to "due process of law".',
          badge: 'Arts 19-22',
          highlight: true
        },
        {
          heading: 'Article 21: The Golden Triangle',
          subheading: 'Maneka Gandhi & Puttaswamy Cases',
          description: 'Life with dignity, Right to Privacy (Puttaswamy 2017), Right to clean environment (Subhash Kumar), and Right to livelihood (Olga Tellis).',
          badge: 'Core Landmark',
          highlight: true
        },
        {
          heading: 'Writs Jurisdiction (Art 32 vs Art 226)',
          subheading: 'Heart & Soul of Constitution',
          description: 'Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-Warranto. Art 226 has wider territorial & legal rights jurisdiction than Art 32.',
          badge: 'Writs',
          highlight: false
        },
        {
          heading: 'Basic Structure Doctrine',
          subheading: 'Kesavananda Bharati (1973)',
          description: 'Parliament has constituent power under Art 368 to amend any part of the Constitution, but cannot alter its essential structural identity.',
          badge: 'Basic Structure',
          highlight: true
        },
        {
          heading: 'DPSP vs FR Harmonious Construction',
          subheading: 'Minerva Mills (1980)',
          description: 'Constitution is founded on the bedrock balance between Part III (Fundamental Rights) and Part IV (Directive Principles).',
          badge: 'Harmonious Balance',
          highlight: false
        }
      ]
    },
    cheatSheet: {
      corePillars: [
        {
          title: 'The "Golden Triangle" of Articles',
          points: [
            'Articles 14, 19, and 21 form a mutually reinforcing shield against arbitrary state action.',
            'A law restricting personal liberty under Art 21 must also satisfy tests of fairness and reasonableness under Arts 14 and 19.'
          ]
        },
        {
          title: 'Writs Under Article 32 & 226',
          points: [
            'Habeas Corpus: "To have the body of" — prevents unlawful detention (issued against state & private entities)',
            'Mandamus: "We command" — compels performance of public duty (cannot issue against private persons or Governor/President)',
            'Certiorari: "To be certified" — quashes orders of inferior courts/tribunals lacking jurisdiction',
            'Quo-Warranto: "By what authority" — challenges illegal usurpation of a public substantive office'
          ]
        }
      ],
      statutoryOrConstitutionalProvisions: [
        { code: 'Article 12', label: 'Definition of "State"', detail: 'Includes Government & Parliament, State Executive/Legislature, local authorities, and statutory bodies.' },
        { code: 'Article 13(2)', label: 'Judicial Review', detail: 'Laws inconsistent with or in derogation of Fundamental Rights are void to the extent of inconsistency.' },
        { code: 'Article 32', label: 'Constitutional Remedies', detail: 'Guaranteed Fundamental Right to approach Supreme Court directly for enforcement of Part III rights.' }
      ],
      landmarkPrecedents: [
        {
          title: 'Kesavananda Bharati vs State of Kerala (1973)',
          significance: '13-judge bench established the Basic Structure doctrine, limiting amending power under Article 368.'
        },
        {
          title: 'Justice K.S. Puttaswamy vs Union of India (2017)',
          significance: '9-judge bench declared Right to Privacy as an intrinsic part of the Right to Life and Personal Liberty under Article 21.'
        },
        {
          title: 'Maneka Gandhi vs Union of India (1978)',
          significance: 'Read "Due Process of Law" into Article 21, establishing that state procedure must be just, fair, and reasonable.'
        }
      ],
      examPitfalls: [
        'Fundamental Rights under Articles 15, 16, 19, 29, and 30 are available ONLY to Indian citizens, not to foreigners.',
        'Article 32 can be invoked ONLY for violation of Fundamental Rights, whereas Article 226 of the High Court covers both Fundamental Rights and ordinary legal rights.',
        'Articles 20 and 21 CANNOT be suspended even during a National Emergency under Article 359 (44th Amendment Act 1978).'
      ]
    },
    topperNotes: {
      author: 'Ananya Sharma, IAS (UPSC CSE AIR 12)',
      rankOrCred: 'UPSC CSE Topper & GS-2 Faculty Contributor (CC-BY 4.0)',
      readingTime: '5 mins revision',
      keyTakeaways: [
        'In GS-2 Mains answers, never write an Article without citing its landmark case: Art 21 without Puttaswamy (2017) or Navtej Johar (2018) loses 2 marks automatically.',
        'Remember the distinction: Art 32 is a Fundamental Right itself, meaning the Supreme Court cannot refuse to grant remedy. Art 226 is a discretionary constitutional power of the High Court.',
        'For Prelims: memorize the 5 rights exclusive to citizens: Arts 15, 16, 19, 29, 30.'
      ],
      corePointers: [
        {
          title: 'Direct Article Mapping for Quick Recall',
          notes: [
            'Art 14: Rule of Law (Dicey concept) + Equal Protection of the Laws (US concept)',
            'Art 15: No discrimination on grounds ONLY of religion, race, caste, sex, place of birth',
            'Art 16: Equality of opportunity in public employment (Art 16(4) enables affirmative reservation)',
            'Art 21A: Right to free and compulsory education for ages 6-14 (86th Amendment Act 2002)'
          ]
        },
        {
          title: 'Mains Value-Addition Keywords',
          notes: [
            'Constitutional Morality (Dr. B.R. Ambedkar doctrine cited in Navtej Johar & Sabarimala cases)',
            'Substantive Due Process vs Procedural Due Process (transformation post-Maneka Gandhi 1978)',
            'Harmonious Construction between Part III (Fundamental Rights) and Part IV (DPSP) as per Minerva Mills (1980)'
          ]
        }
      ]
    },
    officialDocuments: [
      {
        id: 'article-371-d-presidential-order',
        title: 'The Constitution of India (Complete Text with Amendments)',
        issuingAuthority: 'Legislative Department, Ministry of Law and Justice, Govt of India',
        gazetteNoOrYear: 'Updated till 106th Constitutional Amendment Act (2024)',
        downloadUrl: '/documents/article-371-d-presidential-order-1975.pdf',
        fileSize: '3.8 MB PDF',
        isPrimaryLaw: true
      }
    ],
    microQuiz: [
      {
        id: 'pol-q1',
        question: 'Which of the following Fundamental Rights is available ONLY to Indian citizens and NOT to foreigners?',
        questionTelugu: 'కింది వాటిలో విదేశీయులకు కాకుండా కేవలం భారత పౌరులకు మాత్రమే వర్తించే ప్రాథమిక హక్కు ఏది?',
        options: [
          'Article 14 (Equality before law)',
          'Article 19 (Protection of six democratic freedoms)',
          'Article 20 (Protection in respect of conviction for offences)',
          'Article 21 (Right to life and personal liberty)'
        ],
        correctIndex: 1,
        explanation: 'Articles 15, 16, 19, 29, and 30 are exclusive to Indian citizens. Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, and 28 are available to all persons (citizens and foreigners alike).',
        tag: 'Citizenship Rights'
      },
      {
        id: 'pol-q2',
        question: 'Which constitutional writ can be issued against private individuals as well as public authorities?',
        questionTelugu: 'ప్రైవేట్ వ్యక్తులతో పాటు ప్రభుత్వ అధికారులపై కూడా జారీ చేయగల ఏకైక రిట్ ఏది?',
        options: ['Mandamus', 'Quo-Warranto', 'Habeas Corpus', 'Certiorari'],
        correctIndex: 2,
        explanation: 'Habeas Corpus is the only writ that can be issued against both public authorities and private individuals who illegally detain a person.',
        tag: 'Writs Jurisdiction'
      },
      {
        id: 'pol-q3',
        question: 'Under the 44th Constitutional Amendment Act, 1978, which Fundamental Rights CANNOT be suspended even during the proclamation of a National Emergency?',
        questionTelugu: '44వ రాజ్యాంగ సవరణ ప్రకారం జాతీయ అత్యవసర పరిస్థితి సమయంలో కూడా రద్దు చేయలేని ప్రాథమిక హక్కులు ఏవి?',
        options: [
          'Articles 14 and 19',
          'Articles 19 and 21',
          'Articles 20 and 21',
          'Articles 21 and 22'
        ],
        correctIndex: 2,
        explanation: 'The 44th Amendment restricted the scope of Article 359 so that the enforcement of rights under Article 20 (protection against arbitrary conviction) and Article 21 (life and liberty) can never be suspended.',
        tag: 'Emergency Provisions'
      },
      {
        id: 'pol-q4',
        question: 'The historic doctrine of "Basic Structure" of the Indian Constitution was propounded in which landmark case?',
        questionTelugu: 'భారత రాజ్యాంగ "మౌలిక స్వరూప సిద్ధాంతం" ఏ చారిత్రాత్మక తీర్పులో ప్రతిపాదించబడింది?',
        options: [
          'Shankari Prasad Case (1951)',
          'Golaknath Case (1967)',
          'Kesavananda Bharati Case (1973)',
          'Minerva Mills Case (1980)'
        ],
        correctIndex: 2,
        explanation: 'In Kesavananda Bharati v. State of Kerala (1973), a 13-judge bench by 7:6 majority ruled that Article 368 does not enable Parliament to alter the basic structure or framework of the Constitution.',
        tag: 'Basic Structure'
      },
      {
        id: 'pol-q5',
        question: 'The landmark judgment that read the "Right to Privacy" as an intrinsic fundamental right under Article 21 is:',
        questionTelugu: 'ఆర్టికల్ 21 కింద "గోప్యతా హక్కు"ను అంతర్భాగ ప్రాథమిక హక్కుగా గుర్తించిన తీర్పు ఏది?',
        options: [
          'A.K. Gopalan case',
          'Navtej Singh Johar case',
          'Justice K.S. Puttaswamy v. Union of India (2017)',
          'Shayara Bano case'
        ],
        correctIndex: 2,
        explanation: 'In Justice K.S. Puttaswamy (Retd.) v. Union of India (2017), a unanimous 9-judge bench affirmed that privacy is a constitutionally protected fundamental right emerging from Article 21.',
        tag: 'Right to Privacy'
      }
    ],
    mainsScaffold: {
      question: '"The procedure established by law under Article 21 has gradually transformed into substantive due process through judicial interpretation." Elucidate with landmark judicial pronouncements. (10 Marks / 150 Words)',
      marks: 10,
      timeMinutes: 8,
      approach: {
        intro: 'Distinguish between "Procedure Established by Law" (British doctrine: law must be formally enacted) and "Due Process of Law" (American doctrine: law must also be fair, just, and reasonable).',
        body: [
          {
            subheading: '1. Initial Narrow Interpretation: A.K. Gopalan Case (1950)',
            points: [
              'Supreme Court took a positivist view, holding that "procedure established by law" meant any law passed by a competent legislature, irrespective of reasonableness.',
              'Art 19, 21 were viewed as mutually exclusive silos.'
            ]
          },
          {
            subheading: '2. The Watershed Transformation: Maneka Gandhi Case (1978)',
            points: [
              'Supreme Court overruled Gopalan and held that the procedure depriving life or liberty must be "right, just and fair", and not arbitrary or oppressive.',
              'Introduced the Golden Triangle (Arts 14, 19, 21), effectively absorbing American substantive due process into Article 21.'
            ]
          },
          {
            subheading: '3. Modern Expansions of Substantive Due Process',
            points: [
              'Proportionality standard: In Puttaswamy (2017), any state intrusion into privacy must satisfy legality, legitimate state aim, and proportionality.',
              'Expansion to dignity: Navtej Johar (decriminalizing Sec 377) and Common Cause (right to die with dignity).'
            ]
          }
        ],
        conclusion: 'Conclude that Indian constitutional jurisprudence has evolved from procedural formal justice to substantive humanitarian justice, making Article 21 the most vibrant guardian of individual liberty.'
      }
    }
  },

  // =========================================================================
  // 4. EXECUTIVE & PARLIAMENTARY SYSTEM (UNIVERSAL CORE)
  // =========================================================================
  'polity-executive-legislature': {
    nodeId: 'polity-executive-legislature',
    title: 'President, Governor & Parliamentary System',
    titleTelugu: 'రాష్ట్రపతి, గవర్నర్ & పార్లమెంటరీ వ్యవస్థ',
    subject: 'Indian Polity & Governance (UPSC GS-2, APPSC & TSPSC)',
    overview: 'Analysis of Union and State executive dynamics. Compares President and Governor powers (Pardoning, Ordinance, Discretion), legislative procedures (Money Bill vs Ordinary Bill), Parliamentary Committees, and Federal checks.',
    standardReferences: [
      {
        title: 'Indian Polity: Chapters on President, Governor, and Parliament',
        source: 'M. Laxmikanth',
        relevance: 'Essential for comparative constitutional articles and parliamentary rules.'
      },
      {
        title: 'Sarkaria and Punchhi Commission Reports on Centre-State Relations',
        source: 'Inter-State Council Secretariat',
        relevance: 'Core authority on Governor discretionary powers and Article 356 invocation.'
      }
    ],
    infographic: {
      title: 'President vs Governor: Constitutional Powers Matrix',
      subtitle: 'Comparative Analysis of Articles, Ordinances & Discretionary Mandates',
      type: 'comparison',
      items: [
        {
          heading: 'Executive Discretion',
          subheading: 'Art 74 vs Art 163',
          description: 'President has virtually NO explicit constitutional discretion. Governor has explicit constitutional discretion under Art 163(1) and Art 163(2).',
          badge: 'Constitutional Discretion',
          highlight: true
        },
        {
          heading: 'Ordinance Making Powers',
          subheading: 'Art 123 vs Art 213',
          description: 'Both have co-extensive legislative powers when legislature is in recess. Governor needs Presidential instruction for certain state bills.',
          badge: 'Ordinances',
          highlight: false
        },
        {
          heading: 'Pardoning Powers',
          subheading: 'Art 72 vs Art 161',
          description: 'President can pardon Court Martial sentences and Death Sentences. Governor cannot pardon death sentence (can only suspend, remit or commute).',
          badge: 'Judicial Powers',
          highlight: true
        },
        {
          heading: 'Reservation of Bills',
          subheading: 'Article 200 & 201',
          description: 'Governor must reserve bills endangering High Court position for President consideration; recent SC rulings mandate prompt action on passed bills.',
          badge: 'Assent to Bills',
          highlight: true
        }
      ]
    },
    cheatSheet: {
      corePillars: [
        {
          title: 'Governor’s Discretionary Powers (Article 163)',
          points: [
            'Recommendation for President’s Rule under Article 356',
            'Reservation of a bill for consideration of the President under Article 200',
            'Selection of Chief Minister when no single party secures a clear legislative majority (S.R. Bommai guidelines apply)'
          ]
        },
        {
          title: 'Parliamentary Committees as Watchdogs',
          points: [
            'Public Accounts Committee (PAC): 22 members (15 LS + 7 RS), chaired by Opposition member, scrutinizes CAG reports',
            'Estimates Committee: 30 members (ALL from Lok Sabha), examines budget estimates and economy in expenditure',
            'Committee on Public Undertakings (COPU): 22 members, examines efficiency of state-owned enterprises'
          ]
        }
      ],
      statutoryOrConstitutionalProvisions: [
        { code: 'Article 123', label: 'Presidential Ordinance', detail: 'Can promulgate ordinances only when either House of Parliament is not in session.' },
        { code: 'Article 200', label: 'Governor Assent', detail: 'Governor may give assent, withhold assent, or reserve bill for Presidential assent.' },
        { code: 'Tenth Schedule', label: 'Anti-Defection Law', detail: 'Disqualification on grounds of defection decided by Speaker/Chairman (subject to judicial review per Kihoto Hollohan 1992).' }
      ],
      landmarkPrecedents: [
        {
          title: 'S.R. Bommai vs Union of India (1994)',
          significance: '9-judge bench ruled that Presidential proclamation under Article 356 is subject to judicial review; floor test is the only constitutional way to test majority.'
        },
        {
          title: 'Nabam Rebia vs Deputy Speaker (2016)',
          significance: 'Supreme Court held that Governor’s discretion under Article 163 is strictly limited and summons/prorogations must follow aid and advice of the Council of Ministers.'
        }
      ],
      examPitfalls: [
        'Ministers CANNOT be elected as members of the Public Accounts Committee, Estimates Committee, or COPU.',
        'Governor cannot pardon a death sentence under Article 161, but CAN suspend, remit, or commute it.',
        'Estimates Committee has 30 members and Rajya Sabha has ZERO representation in it.'
      ]
    },
    topperNotes: {
      author: 'Rohit Varma, IPS (UPSC CSE Rank 44)',
      rankOrCred: 'UPSC CSE Topper & Polity Author (CC-BY 4.0)',
      readingTime: '5 mins revision',
      keyTakeaways: [
        'Whenever an exam question mentions the Governor, structure your answer into: (1) Dual Constitutional Role, (2) Flashpoints, (3) Sarkaria/Punchhi solutions.',
        'Quote the Punjab vs Principal Secretary to Governor (2023) ruling where CJI D.Y. Chandrachud observed that the Governor cannot be a "titular head with veto over elected assembly".'
      ],
      corePointers: [
        {
          title: 'Key Article Numbers at a Glance',
          notes: [
            'Art 72: Presidential Pardon | Art 161: Governor Pardon',
            'Art 123: Union Ordinance | Art 213: State Ordinance',
            'Art 155: Appointment of Governor by President under warrant under hand and seal',
            'Art 163: Council of Ministers to aid and advise Governor (except in discretionary functions)'
          ]
        }
      ]
    },
    officialDocuments: [
      {
        id: 'article-371-d-presidential-order',
        title: 'Sarkaria Commission Report on Centre-State Relations (Part I & II)',
        issuingAuthority: 'Commission on Centre-State Relations, Ministry of Home Affairs',
        gazetteNoOrYear: 'October 1987 / 1988',
        downloadUrl: '/documents/sarkaria-commission-report.pdf',
        fileSize: '5.4 MB PDF'
      }
    ],
    microQuiz: [
      {
        id: 'exe-q1',
        question: 'Which of the following Parliamentary Committees consists EXCLUSIVELY of members from the Lok Sabha with no representation from the Rajya Sabha?',
        questionTelugu: 'కింది వాటిలో రాజ్యసభ నుండి సభ్యులు లేకుండా కేవలం లోక్‌సభ సభ్యులతో మాత్రమే ఏర్పడే పార్లమెంటరీ కమిటీ ఏది?',
        options: [
          'Public Accounts Committee',
          'Committee on Public Undertakings',
          'Estimates Committee',
          'Departmental Standing Committee on Finance'
        ],
        correctIndex: 2,
        explanation: 'The Estimates Committee comprises 30 members, all elected exclusively from the Lok Sabha. Rajya Sabha has zero representation in it.',
        tag: 'Parliamentary Committees'
      },
      {
        id: 'exe-q2',
        question: 'In the landmark S.R. Bommai v. Union of India (1994) judgment, what did the Supreme Court establish regarding Article 356?',
        questionTelugu: 'ఎస్.ఆర్. బొమ్మై తీర్పులో ఆర్టికల్ 356 కు సంబంధించి సుప్రీంకోర్టు ఏ సూత్రాన్ని ప్రతిపాదించింది?',
        options: [
          'Presidential proclamation is completely immune from judicial review',
          'The floor of the Assembly is the only constitutional forum to test a ministry’s majority',
          'The Governor can dismiss a Chief Minister without giving a floor test opportunity',
          'Article 356 cannot be invoked during state elections'
        ],
        correctIndex: 1,
        explanation: 'The Supreme Court ruled that majority must be proven strictly on the floor of the Assembly through a floor test, and Article 356 proclamation is subject to judicial review.',
        tag: 'Judicial Precedents'
      },
      {
        id: 'exe-q3',
        question: 'Regarding the pardoning power of the Governor under Article 161, which statement is ACCURATE?',
        questionTelugu: 'ఆర్టికల్ 161 ప్రకారం గవర్నర్ క్షమాభిక్ష అధికారానికి సంబంధించి ఏ ప్రకటన సరైనది?',
        options: [
          'Governor can pardon a death sentence just like the President',
          'Governor cannot pardon a death sentence, but can suspend, remit or commute it',
          'Governor has no power whatsoever regarding death penalty cases',
          'Governor can pardon military court-martial sentences'
        ],
        correctIndex: 1,
        explanation: 'The Governor cannot completely pardon a death sentence (only the President can under Art 72), but the Governor possesses power to suspend, remit, or commute a death sentence under Art 161.',
        tag: 'Executive Powers'
      },
      {
        id: 'exe-q4',
        question: 'Under Article 200, when a Governor withholds assent or reserves a bill passed by the state legislature, the Governor must act within what constitutional timeframe according to recent SC pronouncements?',
        questionTelugu: 'ఆర్టికల్ 200 కింద గవర్నర్ బిల్లులకు ఆమోదం తెలపడంలో ఆలస్యం చేయకూడదని సుప్రీంకోర్టు ఏ సూత్రాన్ని నొక్కిచెప్పింది?',
        options: [
          'Within 14 days strictly',
          'Within 6 months',
          'As soon as possible, without sitting indefinitely on passed legislation',
          'There is no judicial check on Governor’s pocket veto'
        ],
        correctIndex: 2,
        explanation: 'In State of Punjab v. Principal Secretary to Governor (2023), the Supreme Court held that the phrase "as soon as possible" in Article 200 has constitutional content and Governors cannot sit indefinitely on bills.',
        tag: 'Centre-State Relations'
      },
      {
        id: 'exe-q5',
        question: 'The Anti-Defection Law contained in the Tenth Schedule was added to the Constitution by which Constitutional Amendment?',
        questionTelugu: 'పదవ షెడ్యూల్‌లోని పార్టీ ఫిరాయింపుల నిరోధక చట్టాన్ని ఏ రాజ్యాంగ సవరణ ద్వారా చేర్చారు?',
        options: ['42nd Amendment', '44th Amendment', '52nd Amendment', '91st Amendment'],
        correctIndex: 2,
        explanation: 'The 52nd Constitutional Amendment Act, 1985 added the Tenth Schedule to the Constitution to disqualify members who defect from their political parties.',
        tag: 'Anti-Defection'
      }
    ],
    mainsScaffold: {
      question: '"The office of the Governor has emerged as a major point of friction in contemporary Indian federalism." Analyze the structural reasons for this friction and discuss the institutional reforms suggested by Sarkaria and Punchhi commissions. (15 Marks / 250 Words)',
      marks: 15,
      timeMinutes: 12,
      approach: {
        intro: 'Begin by explaining that the Governor plays a dual constitutional role: constitutional head of the State executive under Art 154, and representative/link of the Union Government under Art 155. Note that political polarization has turned this office into a federal flashpoint.',
        body: [
          {
            subheading: '1. Major Structural Points of Friction',
            points: [
              'Discretion under Art 200: Indefinite withholding of assent or reservation of non-controversial state bills.',
              'Appointment and Dismissal of Governments: Subjective assessment of majority without conducting immediate floor tests (contrary to S.R. Bommai).',
              'Chancellorship of State Universities: Clashes between state elected cabinets and Governor over vice-chancellor appointments.'
            ]
          },
          {
            subheading: '2. Recommendations of Sarkaria Commission (1988)',
            points: [
              'Appointee should be an eminent person from outside the state, detached from local politics for at least a few years.',
              'Chief Minister of the concerned state must be meaningfully consulted before appointing the Governor.'
            ]
          },
          {
            subheading: '3. Recommendations of Punchhi Commission (2010)',
            points: [
              'Governor should be removed only through an impeachment procedure similar to the President (ending "pleasure of President" vulnerability).',
              'Prescribe a fixed 6-month timeline for Governor to decide on bills reserved under Article 200.'
            ]
          }
        ],
        conclusion: 'Conclude that preserving cooperative federalism requires depoliticizing the Governor’s office and codifying conventions into constitutional rules to safeguard democratic mandates.'
      }
    }
  },

  // =========================================================================
  // 5. AP HISTORY & ANDHRA MOVEMENT (APPSC STATE SPECIFIC)
  // =========================================================================
  'appsc-history-andhra-movement': {
    nodeId: 'appsc-history-andhra-movement',
    title: 'History & Culture of AP: Satavahanas to Modern Andhra Movement',
    titleTelugu: 'ఆంధ్రుల చరిత్ర & సంస్కృతి: శాతవాహనుల నుండి ఆంధ్రోద్యమం వరకు',
    subject: 'AP State Specific (Paper-I & II APPSC)',
    overview: 'Comprehensive survey of Andhra historical trajectory: Satavahana administration and Amaravati stupa art, Eastern Chalukyan patronage of Telugu language, Vijayanagara golden age, Kandukuri Veeresalingam’s social reforms, Sri Bagh Pact (1937), Potti Sreeramulu’s fast, and the formation of Andhra State in 1953.',
    standardReferences: [
      {
        title: 'History and Culture of Andhra Pradesh',
        source: 'P. Raghunadha Rao / Telugu Akademi',
        relevance: 'The foundational textbook for all dynastic chronologies and Andhra movement questions.'
      },
      {
        title: 'Social and Cultural History of the Telugus',
        source: 'B.S.L. Hanumantha Rao',
        relevance: 'Authoritative analysis on Amaravati Buddhist art, Inscriptions, and social movements.'
      }
    ],
    infographic: {
      title: 'Andhra Historical Evolution & Agitations',
      subtitle: 'From Satavahana Foundations to Linguistic Statehood (1953)',
      type: 'timeline',
      items: [
        {
          heading: 'Satavahana Golden Era (2nd BCE - 3rd CE)',
          subheading: 'Simuka, Gautamiputra Satakarni & Hala',
          description: 'Capitals: Kotilingala, Dhanyakataka (Amaravati). Hala authored Gaha Sattasai in Maharashtri Prakrit. Flourishing maritime trade with Rome.',
          badge: 'Ancient AP',
          highlight: true
        },
        {
          heading: 'Eastern Chalukyas & Telugu Birth (7th - 11th CE)',
          subheading: 'Rajaraja Narendra & Nannaya',
          description: 'Vengi capital; Rajaraja Narendra patronized Nannaya Bhattaraka to translate the Mahabharata into Telugu (Adi Kavi).',
          badge: 'Medieval AP',
          highlight: false
        },
        {
          heading: 'Sri Krishnadevaraya & Vijayanagara (1509–1529)',
          subheading: 'Desa Bhashalandu Telugu Lessa',
          description: 'Amuktamalyada composition, Ashtadiggajas patronage, Lepakshi temple architecture and Rayalaseema tank irrigation.',
          badge: 'Golden Age',
          highlight: true
        },
        {
          heading: 'Modern Renaissance & Kandukuri (Late 19th Century)',
          subheading: 'First Widow Remarriage 1881',
          description: 'Kandukuri Veeresalingam established Rajahmundry Social Reform Association; father of modern Telugu prose.',
          badge: 'Social Reform',
          highlight: false
        },
        {
          heading: 'Sri Bagh Pact (Nov 15, 1937)',
          subheading: 'Coastal Andhra & Rayalaseema Agreement',
          description: 'Signed at K. Nageswara Rao residence; agreed on capital in Rayalaseema (Kurnool) or High Court in coastal Andhra, and Krishna-Pennar water safeguards.',
          badge: '1937 Accord',
          highlight: true
        },
        {
          heading: 'Potti Sreeramulu Fast & 1953 Andhra State',
          subheading: 'First Linguistic State of Independent India',
          description: '58-day fast unto death culminating in death on Dec 15, 1952. Andhra State inaugurated at Kurnool on Oct 1, 1953 under Wanchoo report.',
          badge: 'Oct 1, 1953',
          highlight: true
        }
      ]
    },
    cheatSheet: {
      corePillars: [
        {
          title: 'The Satavahana Dynastic Legacy',
          points: [
            'Founder: Simuka | Greatest Ruler: Gautamiputra Satakarni (Nasik Prasasti by Gautami Balasri calling him "Trisamudra Toya Peetha Vahana")',
            'Art School: Amaravati School of Art (use of white marble limestone, dynamic narrative panels of Jataka tales)',
            'Administration: Feudatory grades: Maharathis, Mahabhojas, Senapatis; villages headed by Gramika'
          ]
        },
        {
          title: 'The Andhra Movement (Andhrodyamam)',
          points: [
            'First Andhra Mahasabha: Held at Bapatla in May 1913, presided over by B.N. Sarma',
            'Sri Bagh Pact (1937): Concluded between coastal Andhra leaders (Pattabhi Sitaramayya) and Rayalaseema leaders (K. Koti Reddy) ensuring equitable university, irrigation, and capital guarantees',
            'Justice Wanchoo Commission (1953): Recommended Kurnool as the capital of the nascent Andhra State'
          ]
        }
      ],
      statutoryOrConstitutionalProvisions: [
        { code: 'Andhra State Act, 1953', label: 'First Linguistic State', detail: 'Carved 11 Telugu-speaking districts out of Madras State, with Kurnool as capital and Guntur as High Court.' },
        { code: 'States Reorganisation Act, 1956', label: 'Formation of Andhra Pradesh', detail: 'Merged Telugu-speaking Telangana districts of Hyderabad State with Andhra State on Nov 1, 1956 based on Fazal Ali Commission.' }
      ],
      landmarkPrecedents: [
        {
          title: 'Fazal Ali Commission (SRC 1953–1955)',
          significance: 'Recognized linguistic unity but initially suggested keeping Telangana separate for 5 years until the 1956 Gentlemen’s Agreement bridged the merge.'
        }
      ],
      examPitfalls: [
        'Kurnool was the capital of Andhra State (1953–1956), NOT Hyderabad. Hyderabad became capital only upon formation of Andhra Pradesh in Nov 1956.',
        'Amaravati art predominantly used white limestone/marble, distinct from Gandhara grey schist and Mathura red sandstone.',
        'Do not confuse the Bapatla Mahasabha (1913) with the Vijayawada Mahasabha (1914).'
      ]
    },
    topperNotes: {
      author: 'M. Venkata Reddy, APPSC Group-1 Ranker (Municipal Commissioner Cadre)',
      rankOrCred: 'APPSC Group-1 Selected & State History Mentor (CC-BY 4.0)',
      readingTime: '6 mins revision',
      keyTakeaways: [
        'Sri Bagh Pact (1937) is asked almost every alternative year in APPSC: Remember the 3 pillars — University in Rayalaseema, Capital/High Court split, and Krishna/Pennar water priority.',
        'Potti Sreeramulu’s fast began on Oct 19, 1952 at Bulusu Sambamurthy’s house in Madras and lasted 58 days until his martyrdom on Dec 15, 1952.'
      ],
      corePointers: [
        {
          title: 'Important Inscriptions of Ancient AP',
          notes: [
            'Nanaghat Inscription: Issued by Queen Naganika (records performance of Ashwamedha and Rajasuya sacrifices by Satakarni I)',
            'Nasik Prasasti: Issued by Gautami Balasri (conquests of Gautamiputra Satakarni)',
            'Hathigumpha Inscription: King Kharavela of Kalinga (mentions clash with Satavahanas)',
            'Chandavaram & Bhattiprolu Inscriptions: Early Buddhist stupas and relic caskets'
          ]
        }
      ]
    },
    officialDocuments: [
      {
        id: 'ap-reorganisation-act-2014-statute',
        title: 'The Andhra State Act, 1953 (Act No. 30 of 1953)',
        issuingAuthority: 'Parliament of India',
        gazetteNoOrYear: '14 September 1953',
        downloadUrl: '/documents/ap-reorganisation-act-2014-official.pdf',
        fileSize: '620 KB PDF',
        isPrimaryLaw: true
      }
    ],
    microQuiz: [
      {
        id: 'aph-q1',
        question: 'The historic Nasik Inscription describing the conquests and titles of Gautamiputra Satakarni was issued by his mother named:',
        questionTelugu: 'గౌతమీపుత్ర శాతకర్ణి విజయాలను వివరించే ప్రసిద్ధ నాసిక్ శాసనాన్ని వేయించిన అతని తల్లి ఎవరు?',
        options: ['Naganika', 'Gautami Balasri', 'Bala Saraswati', 'Khandavalli'],
        correctIndex: 1,
        explanation: 'Gautami Balasri issued the Nasik Prasasti following her son Gautamiputra Satakarni’s death, conferring on him the title "Trisamudra Toya Peetha Vahana" (One whose horses drank water from three seas).',
        tag: 'Ancient AP'
      },
      {
        id: 'aph-q2',
        question: 'The historic "Sri Bagh Pact" signed on November 15, 1937 between Coastal Andhra and Rayalaseema leaders was signed at the residence of:',
        questionTelugu: '1937 నవంబర్ 15న కోస్తాంధ్ర మరియు రాయలసీమ నాయకుల మధ్య శ్రీబాగ్ ఒప్పందం ఎవరి నివాసంలో జరిగింది?',
        options: [
          'Kandukuri Veeresalingam',
          'Tanguturi Prakasam Panthulu',
          'Kasinadhuni Nageswara Rao',
          'K. Koti Reddy'
        ],
        correctIndex: 2,
        explanation: 'The Sri Bagh Pact was finalized and signed at "Sri Bagh", the Madras residence of Desoddharaka Kasinadhuni Nageswara Rao (founder of Andhra Patrika).',
        tag: 'Sri Bagh Pact'
      },
      {
        id: 'aph-q3',
        question: 'Who was the first Chief Minister of Andhra State formed on October 1, 1953 with Kurnool as its capital?',
        questionTelugu: '1953 అక్టోబర్ 1న కర్నూలు రాజధానిగా ఏర్పడిన ఆంధ్ర రాష్ట్ర ప్రథమ ముఖ్యమంత్రి ఎవరు?',
        options: [
          'Neelam Sanjiva Reddy',
          'Tanguturi Prakasam Panthulu',
          'B. Gopala Reddy',
          'Damodaram Sanjivayya'
        ],
        correctIndex: 1,
        explanation: 'Tanguturi Prakasam Panthulu (Andhra Kesari) was sworn in as the first Chief Minister of Andhra State, while C.M. Trivedi served as the first Governor.',
        tag: 'Andhra State 1953'
      },
      {
        id: 'aph-q4',
        question: 'The Amaravati School of Art developed during the Satavahana and Ikshvaku periods is distinguished by its use of which characteristic material?',
        questionTelugu: 'శాతవాహన, ఇక్ష్వాకుల కాలంలో విలసిల్లిన అమరావతి శిల్పకళా రీతిలో ప్రధానంగా ఉపయోగించిన పదార్థం ఏది?',
        options: [
          'Red sandstone',
          'White marble / limestone',
          'Grey schist',
          'Black basalt granite'
        ],
        correctIndex: 1,
        explanation: 'The Amaravati stupa sculptures and narrative panels are universally renowned for using fine-grained white marble limestone from the Palnad region.',
        tag: 'Art & Architecture'
      },
      {
        id: 'aph-q5',
        question: 'Which social reformer founded the Rajahmundry Social Reform Association in 1878 and conducted the first recorded widow remarriage in Andhra in 1881?',
        questionTelugu: '1878 లో రాజమండ్రి సోషల్ రిఫార్మ్ అసోసియేషన్ స్థాపించి, 1881 లో ఆంధ్రదేశంలో మొదటి వితంతు పునర్వివాహం జరిపించిన సంఘ సంస్కర్త ఎవరు?',
        options: [
          'Gurazada Apparao',
          'Kandukuri Veeresalingam',
          'Raghupathi Venkataratnam Naidu',
          'Gidugu Ramamurthy'
        ],
        correctIndex: 1,
        explanation: 'Rao Bahadur Kandukuri Veeresalingam Pantulu conducted the historic first widow remarriage on December 11, 1881 in Rajahmundry despite fierce orthodox opposition.',
        tag: 'Modern Social Reform'
      }
    ],
    mainsScaffold: {
      question: '"The Sri Bagh Pact of 1937 was a crucial instrument of regional reconciliation between Coastal Andhra and Rayalaseema." Discuss its core provisions and evaluate its enduring relevance in contemporary Andhra politics. (15 Marks / 250 Words)',
      marks: 15,
      timeMinutes: 12,
      approach: {
        intro: 'Provide the historical context: Rayalaseema leaders harbored severe apprehensions about being dominated by the economically and agriculturally prosperous coastal districts. The Sri Bagh Pact (Nov 15, 1937) was forged to build mutual confidence.',
        body: [
          {
            subheading: '1. Core Provisions of the Sri Bagh Pact',
            points: [
              'University & Education: Rayalaseema must have its own university center or equal collegiate representation.',
              'Irrigation and Water Sharing: Priority in utilization of Krishna, Tungabhadra, and Pennar river waters for Rayalaseema famine zones for a period of 10 years.',
              'Capital and High Court Decentralization: If the administrative capital was located in Coastal Andhra, the High Court must be in Rayalaseema, or vice versa.'
            ]
          },
          {
            subheading: '2. Implementation in Andhra State (1953)',
            points: [
              'Honored in 1953: Kurnool was made the administrative capital, while the High Court was seated at Guntur.',
              'Sri Venkateswara University established at Tirupati in 1954 in adherence to the university clause.'
            ]
          },
          {
            subheading: '3. Enduring Relevance in Post-Bifurcation Andhra Pradesh',
            points: [
              'Resurfaced forcefully following the 2014 bifurcation regarding the location of the High Court and regional equity for Rayalaseema.',
              'Underlines the fundamental federal principle that intra-state developmental balance is vital to prevent sub-regional discontent.'
            ]
          }
        ],
        conclusion: 'Conclude that the Sri Bagh Pact remains a benchmark for decentralized governance and regional parity, underscoring that infrastructure and legal institutions must be distributed equitably.'
      }
    }
  },

  // =========================================================================
  // 6. MODERN INDIAN HISTORY & FREEDOM STRUGGLE (1857-1947)
  // =========================================================================
  'history-modern-freedom-struggle': historyModernContent,

  // =========================================================================
  // 7. PHYSIOGRAPHY & RIVER SYSTEMS OF INDIA
  // =========================================================================
  'geography-physiography-drainage': geographyDrainageContent,

  // =========================================================================
  // 8. MACROECONOMICS: MONETARY POLICY, INFLATION & FISCAL FEDERALISM
  // =========================================================================
  'economy-macro-monetary-fiscal': economyMacroContent,

  // =========================================================================
  // 9. ENVIRONMENT, BIODIVERSITY & CLIMATE TREATIES
  // =========================================================================
  'environment-biodiversity-conventions': environmentBiodiversityContent,

  // =========================================================================
  // 10. SCIENCE & EMERGING TECHNOLOGIES
  // =========================================================================
  'scitech-emerging-technologies': scitechEmergingContent,

  // =========================================================================
  // 11. ETHICS, INTEGRITY & ADMINISTRATIVE CASE STUDIES
  // =========================================================================
  'ethics-governance-case-studies': ethicsGovernanceContent,

  // =========================================================================
  // 12. AP SOCIO-ECONOMIC SURVEY & WELFARE POLICIES
  // =========================================================================
  'appsc-economy-welfare-schemes': appscEconomyContent,

  // =========================================================================
  // 13. TELANGANA HISTORY, KAKATIYAS & CULTURAL HERITAGE
  // =========================================================================
  'tspsc-history-culture-heritage': tspscHistoryContent,

  // =========================================================================
  // 14. TELANGANA SOCIO-ECONOMIC OUTLOOK, IRRIGATION & INDUSTRIAL POLICY
  // =========================================================================
  'tspsc-economy-socio-economic-outlook': tspscEconomyContent
};
