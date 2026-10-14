import { TopicContent } from '../../types';

export const economyMacroContent: TopicContent = {
  nodeId: 'economy-macro-monetary-fiscal',
  title: 'Macroeconomics: Monetary Policy, Inflation & Fiscal Federalism',
  titleTelugu: 'స్థూల ఆర్థిక శాస్త్రం: ద్రవ్య విధానం, ద్రవ్యోల్బణం & ఆర్థిక సమాఖ్యవాదం',
  subject: 'Indian Economy (UPSC GS-3, APPSC Paper-II, TSPSC Paper-IV)',
  overview: 'Foundational macroeconomic architecture of India: RBI Monetary Policy Committee (MPC) framework, inflation dynamics (CPI vs WPI), fiscal policy & FRBM targets, 15th Finance Commission devolution formula, and GST Council dynamics.',
  standardReferences: [
    {
      title: 'Economic Survey of India (Annual)',
      source: 'Department of Economic Affairs, Ministry of Finance',
      relevance: 'Primary government document for macroeconomic growth projections, inflation drivers, and external sector.'
    },
    {
      title: 'Report of the 15th Finance Commission (2021-26)',
      source: 'Finance Commission of India (N.K. Singh Committee)',
      relevance: 'Statutory basis for vertical (41%) and horizontal tax devolution criteria across states.'
    },
    {
      title: 'Reserve Bank of India Act, 1934 (Amended 2016)',
      source: 'Ministry of Law and Justice / Reserve Bank of India',
      relevance: 'Statutory basis for the Monetary Policy Committee (MPC) and Flexible Inflation Targeting (4% ± 2%).'
    }
  ],
  infographic: {
    title: 'Monetary Policy Framework & Fiscal Devolution Architecture',
    subtitle: 'RBI Policy Transmission & 15th Finance Commission Formula',
    type: 'matrix',
    items: [
      {
        heading: 'Monetary Policy Committee (Sec 45ZB)',
        subheading: '6 Members (3 RBI + 3 GoI)',
        description: 'Meets at least 4 times a year. Fixes the policy Repo rate to maintain price stability while keeping in mind the objective of growth. Governor has casting vote in tie.',
        badge: 'FIT: 4% ± 2%',
        highlight: true
      },
      {
        heading: 'Liquidity Adjustment Facility (LAF)',
        subheading: 'Repo, SDF & MSF Corridor',
        description: 'Repo Rate is the anchor rate; Standing Deposit Facility (SDF, 25 bps below repo, uncollateralized) forms the floor; Marginal Standing Facility (MSF, 25 bps above repo) forms the ceiling.',
        badge: 'LAF Corridor',
        highlight: false
      },
      {
        heading: 'Vertical Tax Devolution: 41%',
        subheading: 'Center to States Share',
        description: '15th FC maintained the 42% level recommended by 14th FC, adjusting 1% downward to 41% to accommodate the newly created Union Territories of J&K and Ladakh.',
        badge: '41% Net Divisible Pool',
        highlight: true
      },
      {
        heading: 'Horizontal Devolution Formula',
        subheading: '6 Formulaic Criteria',
        description: 'Income Distance (45%), Population 2011 (15%), Area (15%), Forest & Ecology (10%), Demographic Performance (12.5% rewarding fertility reduction), Tax & Fiscal Effort (2.5%).',
        badge: 'Horizontal Equity',
        highlight: true
      }
    ]
  },
  cheatSheet: {
    corePillars: [
      {
        title: 'CPI vs WPI: Crucial Differences for Prelims',
        points: [
          'Consumer Price Index (CPI-Combined): Released by NSO (MoSPI), base year 2012. Measures prices at retail consumer level. Covers both Goods (Food & Beverages 45.86%) and Services (Housing, Education, Health, Transport). Used by RBI for Inflation Targeting.',
          'Wholesale Price Index (WPI): Released by Office of Economic Adviser (DPIIT, Ministry of Commerce), base year 2011-12. Measures prices at wholesale transaction level. Covers ONLY Goods (Manufactured Products 64.23%, Primary Articles 22.62%, Fuel & Power 13.15%). Excludes Services entirely.',
          'Headline vs Core Inflation: Headline includes all basket items (volatile Food and Fuel). Core Inflation excludes volatile Food and Fuel to capture underlying persistent price pressures.'
        ]
      },
      {
        title: 'Fiscal Deficit & FRBM Framework',
        points: [
          'Fiscal Deficit = Total Expenditure - Total Non-Debt Receipts (Revenue Receipts + Non-Debt Capital Receipts like recovery of loans and disinvestment). It equals total borrowing requirements of the government.',
          'Revenue Deficit = Revenue Expenditure - Revenue Receipts. Indicates borrowing to fund daily consumption rather than asset creation.',
          'FRBM Act 2003 (N.K. Singh Review 2017): Recommended targeting Debt-to-GDP ratio (60% combined: 40% Centre, 20% States) and Central Fiscal Deficit target of 3.0% of GDP. Escape clauses permitted for war, national calamity, collapse of agriculture, or structural reforms.'
        ]
      },
      {
        title: 'GST Council (Article 279A) & Cooperative Federalism',
        points: [
          'Constitutional Body chaired by Union Finance Minister; members are State Finance Ministers.',
          'Voting Weightage: Central Government has 1/3rd (33.33%) weightage; all States combined have 2/3rds (66.67%) weightage. Decisions require a 3/4th (75%) supermajority of weighted votes cast, mandating consensus between Centre and States.'
        ]
      }
    ],
    statutoryOrConstitutionalProvisions: [
      {
        code: 'Article 280',
        label: 'Finance Commission of India',
        detail: 'Quasi-judicial body constituted by the President every 5th year to recommend distribution of net proceeds of taxes between Centre and States.'
      },
      {
        code: 'Article 279A',
        label: 'GST Council',
        detail: 'Inserted via the 101st Constitutional Amendment Act 2016 to create a joint forum for deciding tax rates, exemptions, and threshold limits.'
      },
      {
        code: 'Section 45ZB, RBI Act',
        label: 'Monetary Policy Committee',
        detail: 'Statutory basis for the 6-member MPC entrusted with determining the policy interest rate required to achieve the inflation target.'
      }
    ],
    landmarkPrecedents: [
      {
        title: 'Mohit Minerals Case (Supreme Court 2022)',
        significance: 'Held that recommendations of the GST Council are not binding on Parliament and State Legislatures, emphasizing cooperative federalism as an unwritten constitutional norm.'
      },
      {
        title: 'Flexible Inflation Targeting Review (2021)',
        significance: 'Government retained the 4% inflation target with an tolerance band of ±2% (2% to 6%) for the period April 1, 2021 to March 31, 2026.'
      }
    ],
    examPitfalls: [
      'WPI does NOT include services; CPI includes services. Never forget this distinction in Prelims questions.',
      'RBI uses CPI-Combined (not WPI) as its key nominal anchor for setting policy interest rates under the Flexible Inflation Targeting framework.',
      'The 15th Finance Commission used the 2011 Census population data for the first time, introducing the "Demographic Performance" criterion (12.5% weight) to reward southern states that successfully brought down Total Fertility Rate (TFR).',
      'Standing Deposit Facility (SDF) does NOT require collateral of government securities, unlike Reverse Repo which requires G-Secs.'
    ]
  },
  topperNotes: {
    author: 'AspirantAtlas Topper Editorial Board',
    rankOrCred: 'Curated by UPSC Economy Rankers & RBI Grade-B Scholars',
    readingTime: '11 min core revision',
    keyTakeaways: [
      'Understand the monetary transmission lag: when RBI cuts the repo rate, commercial banks often delay reducing lending rates due to high cost of deposits and NPA burdens.',
      'In fiscal questions, always distinguish between "Capital Expenditure" (capex: roads, railways, multi-modal logistics which have high multiplier effect ~2.5x) and "Revenue Expenditure" (salaries, subsidies, pensions ~0.9x multiplier).',
      'Finance Commission horizontal devolution is designed to balance "Need" (population, area), "Equity" (income distance), and "Efficiency" (tax effort, demographic discipline).'
    ],
    corePointers: [
      {
        title: 'Monetary Policy Instruments: Direct vs Indirect',
        notes: [
          'Direct Instruments: Cash Reserve Ratio (CRR - percentage of NDTL that banks must maintain as liquid cash balance with RBI; no interest paid), Statutory Liquidity Ratio (SLR - percentage of NDTL in approved liquid assets: gold, cash, G-Secs).',
          'Indirect Instruments: Repo Rate (rate at which RBI lends short-term against G-Sec collateral), Standing Deposit Facility (SDF - absorbs surplus liquidity without collateral), Open Market Operations (OMO - outright purchase or sale of government securities).'
        ]
      },
      {
        title: '15th Finance Commission Criteria Breakdown (Weights)',
        notes: [
          'Income Distance: 45% (Measures distance of a State’s per capita GSDP from the highest per capita GSDP state, promoting equalization).',
          'Population (2011 Census): 15% (Reflects expenditure needs of large populations).',
          'Area: 15% (Compensates for cost disability in serving large geographic landmasses).',
          'Forest & Ecology: 10% (Compensates states maintaining carbon sinks at the cost of commercial exploitation).',
          'Demographic Performance: 12.5% (Rewards states achieving lower TFR; counter-balances southern concerns over 2011 census).',
          'Tax & Fiscal Effort: 2.5% (Incentivizes states improving tax-to-GSDP efficiency).'
        ]
      }
    ]
  },
  officialDocuments: [
    {
      id: 'rbi-act-monetary-policy-framework',
      title: 'Monetary Policy Framework Agreement & RBI Act Gazette Amendments',
      issuingAuthority: 'Ministry of Finance & Reserve Bank of India',
      gazetteNoOrYear: 'Gazette of India Extraordinary No. 28, 2016',
      downloadUrl: '/documents/rbi-monetary-policy-framework.pdf',
      r2StorageKey: 'gazettes/rbi-monetary-policy-framework.pdf',
      fileSize: '1.6 MB',
      isPrimaryLaw: true
    }
  ],
  microQuiz: [
    {
      id: 'eco-q1',
      question: 'Which index is officially utilized by the Reserve Bank of India (RBI) as the key headline metric for its Flexible Inflation Targeting framework?',
      questionTelugu: 'ఆర్బీఐ తన ద్రవ్యోల్బణ లక్ష్య నిర్ధారణ (FIT) కోసం అధికారికంగా ఏ సూచికను ఉపయోగిస్తుంది?',
      options: [
        'Wholesale Price Index (WPI)',
        'Consumer Price Index (CPI - Combined)',
        'Index of Industrial Production (IIP)',
        'GDP Deflator'
      ],
      correctIndex: 1,
      explanation: 'Under Section 45ZA of the RBI Act, 1934, the Central Government, in consultation with the RBI, specified CPI-Combined as the nominal anchor for inflation targeting.',
      tag: 'Monetary Policy'
    },
    {
      id: 'eco-q2',
      question: 'What is the horizontal devolution weight assigned to the "Income Distance" criterion by the 15th Finance Commission?',
      questionTelugu: '15వ ఆర్థిక సంఘం సిఫార్సులలో "ఆదాయ దూరం" (Income Distance) ప్రాతిపదికకు కేటాయించిన వెయిటేజీ ఎంత?',
      options: ['30%', '40%', '45%', '50%'],
      correctIndex: 2,
      explanation: 'The 15th Finance Commission assigned a weight of 45% to Income Distance, which measures the gap between a state’s per capita GSDP and that of the benchmark state (Goa/Haryana).',
      tag: 'Fiscal Federalism'
    },
    {
      id: 'eco-q3',
      question: 'In the GST Council established under Article 279A, what proportion of total voting weight is held by the Central Government?',
      questionTelugu: 'రాజ్యాంగంలోని 279A అధికరణం ప్రకారం ఏర్పాటైన జీఎస్టీ కౌన్సిల్‌లో కేంద్ర ప్రభుత్వానికి ఉన్న ఓటింగ్ వాటా ఎంత?',
      options: ['One-fourth (25%)', 'One-third (33.33%)', 'One-half (50%)', 'Two-thirds (66.67%)'],
      correctIndex: 1,
      explanation: 'Under Article 279A(9), the vote of the Central Government has a weight of one-third (33.33%) of total votes cast, while votes of all State Governments combined have a weight of two-thirds (66.67%).',
      tag: 'GST & Federalism'
    },
    {
      id: 'eco-q4',
      question: 'How does the Standing Deposit Facility (SDF) introduced by RBI differ fundamentally from the Reverse Repo facility?',
      questionTelugu: 'ఆర్బీఐ ప్రవేశపెట్టిన స్టాండింగ్ డిపాజిట్ ఫెసిలిటీ (SDF) రివర్స్ రెపో నుండి ఎలా భిన్నంగా ఉంటుంది?',
      options: [
        'SDF requires double collateral in the form of gold',
        'SDF allows RBI to absorb liquidity without providing government securities as collateral',
        'SDF is only available to foreign institutional investors',
        'SDF rate is determined by commercial banks rather than RBI'
      ],
      correctIndex: 1,
      explanation: 'Unlike Reverse Repo which requires collateral of government securities (G-Secs), the SDF empowers RBI to drain excess liquidity from commercial banks without pledging any G-Sec collateral.',
      tag: 'Banking Operations'
    },
    {
      id: 'eco-q5',
      question: 'Which committee recommended targeting a combined Debt-to-GDP ratio of 60% (40% Centre and 20% States) in its review of the FRBM Act?',
      questionTelugu: 'FRBM చట్టం సమీక్షలో సంయుక్త అప్పు-జీడీపీ నిష్పత్తిని 60% (కేంద్రం 40%, రాష్ట్రాలు 20%) గా నిర్దేశించాలని సిఫార్సు చేసిన కమిటీ ఏది?',
      options: ['Y.V. Reddy Committee', 'N.K. Singh Committee', 'Urjit Patel Committee', 'Bimal Jalan Committee'],
      correctIndex: 1,
      explanation: 'The N.K. Singh Committee on FRBM Review (2017) recommended replacing annual deficit targeting with a general government debt-to-GDP target of 60% by 2023.',
      tag: 'Fiscal Policy'
    }
  ],
  mainsScaffold: {
    question: 'Examine the structural bottlenecks that hinder the effective transmission of the Reserve Bank of India’s monetary policy rate cuts to the real economy. Suggest measures to improve transmission efficiency. (15 Marks / 250 Words)',
    marks: 15,
    timeMinutes: 12,
    approach: {
      intro: 'Define monetary transmission as the process through which changes in RBI’s policy Repo rate impact commercial bank lending and deposit rates, investment, consumption, and aggregate economic activity.',
      body: [
        {
          subheading: '1. Structural Impediments to Monetary Transmission',
          points: [
            'Rigid Deposit Base: Indian commercial banks rely heavily on retail fixed deposits locked in at high fixed interest rates. Banks cannot cut lending rates without cutting deposit rates, fearing loss of deposits.',
            'Competition from Small Savings Schemes: Administered interest rates on Public Provident Fund (PPF), National Savings Certificates (NSC), and Sukanya Samriddhi are sticky and higher than bank deposit rates, preventing downward revision.',
            'High Non-Performing Assets (NPAs) & Risk Aversion: Bad debt burdens force banks to keep credit risk premiums elevated, preventing rate cuts from reaching borrowers.',
            'Underdeveloped Corporate Bond Market: Over-reliance of corporate India on bank loans rather than market debt instruments limits market-driven pricing of credit.'
          ]
        },
        {
          subheading: '2. Policy Interventions Introduced by RBI',
          points: [
            'Transition to EBLR (External Benchmark Lending Rate): Mandatory linkage of all new floating rate retail and MSME loans to external benchmarks like the Repo rate or 91-day T-Bill yield since Oct 2019.',
            'SDF Deployment: Strengthening the liquidity corridor to eliminate liquidity traps.'
          ]
        },
        {
          subheading: '3. Strategic Recommendations for Enhanced Transmission',
          points: [
            'Align Small Savings Rates with Market Yields: Formulaic adjustment of small savings rates as per Shyamala Gopinath committee guidelines.',
            'Deepen Corporate Bond Markets: Encourage secondary market liquidity and credit default swaps (CDS).',
            'Bank Capitalization and Bad Bank (NARCL): Clean balance sheets enable healthier loan pricing.'
          ]
        }
      ],
      conclusion: 'Conclude that monetary policy alone cannot ignite investment without symmetric fiscal incentives, structural banking efficiency, and predictable business confidence.'
    }
  }
};
