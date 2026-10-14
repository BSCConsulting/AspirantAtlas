import { MockTestQuestion } from '../../types';

export const ECONOMY_MCQS: MockTestQuestion[] = [
  {
    id: 'econ-q1',
    question: 'The Monetary Policy Committee (MPC) of the Reserve Bank of India consists of how many members, and who acts as its ex-officio Chairperson?',
    questionTelugu: 'ఆర్బీఐ ద్రవ్య విధాన కమిటీ (MPC) లో ఎంతమంది సభ్యులు ఉంటారు, దానికి ఎక్స్-అఫీషియో ఛైర్మన్‌గా ఎవరు వ్యవహరిస్తారు?',
    options: [
      '6 members, Governor of RBI',
      '5 members, Union Finance Minister',
      '7 members, Chief Economic Adviser',
      '4 members, Deputy Governor of RBI'
    ],
    correctIndex: 0,
    explanation: 'Under Section 45ZB of the RBI Act 1934, the MPC comprises 6 members (3 from RBI and 3 external members appointed by Union Government). The RBI Governor is the ex-officio Chairperson with a casting vote.',
    tag: 'Monetary Policy',
    difficulty: 'Easy',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q2',
    question: 'The "Standing Deposit Facility" (SDF) introduced by the RBI in April 2022 allows the absorption of surplus liquidity from banks without:',
    questionTelugu: 'ఏప్రిల్ 2022లో ఆర్బీఐ ప్రవేశపెట్టిన స్టాండింగ్ డిపాజిట్ ఫెసిలిటీ (SDF) ద్వారా బ్యాంకుల నుంచి ద్రవ్యతను దేని అవసరం లేకుండా గ్రహిస్తారు?',
    options: [
      'Collateral of government securities',
      'Paying any interest rate',
      'Reporting to the MPC',
      'Cash Reserve Ratio compliance'
    ],
    correctIndex: 0,
    explanation: 'Unlike the traditional reverse repo window which requires government securities as collateral, the SDF is an uncollateralized liquidity absorption window operating at 25 bps below the repo rate.',
    tag: 'Banking & Liquidity',
    difficulty: 'Hard',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q3',
    question: 'What is the inflation target assigned to the Reserve Bank of India under the flexible inflation targeting (FIT) framework?',
    questionTelugu: 'ఫ్లెక్సిబుల్ ద్రవ్యోల్బణ లక్ష్య (FIT) చట్రం కింద ఆర్బీఐకి నిర్దేశించిన లక్ష్యం ఎంత?',
    options: ['4% with a tolerance band of +/- 2%', '5% with a band of +/- 1%', '3% with a band of +/- 2%', '6% fixed rate'],
    correctIndex: 0,
    explanation: 'The headline CPI inflation target is set at 4% with an upper tolerance level of 6% and lower tolerance level of 2% (4% +/- 2%).',
    tag: 'Inflation',
    difficulty: 'Easy',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q4',
    question: 'The difference between Fiscal Deficit and Interest Payments in the Union Budget is technically termed as:',
    questionTelugu: 'కేంద్ర బడ్జెట్‌లో ద్రవ్య లోటు (Fiscal Deficit) మరియు వడ్డీ చెల్లింపుల మధ్య వ్యత్యాసాన్ని ఏమంటారు?',
    options: ['Primary Deficit', 'Revenue Deficit', 'Effective Revenue Deficit', 'Monetized Deficit'],
    correctIndex: 0,
    explanation: 'Primary Deficit = Fiscal Deficit - Interest Payments. It indicates the government borrowing requirements excluding the burden of past accumulated debt.',
    tag: 'Fiscal Policy',
    difficulty: 'Easy',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q5',
    question: 'Which of the following items constitutes the largest component of India’s foreign exchange reserves?',
    questionTelugu: 'భారతదేశ విదేశీ మారక ద్రవ్య నిల్వల్లో (ఫారెక్స్) అతిపెద్ద భాగం ఏది?',
    options: ['Foreign Currency Assets (FCA)', 'Gold Reserves', 'Special Drawing Rights (SDRs)', 'Reserve Tranche Position (RTP) in IMF'],
    correctIndex: 0,
    explanation: 'Foreign Currency Assets (held in multi-currency assets like US dollars, Euros, Yen, and sovereign bonds) consistently account for over 85% of India’s total forex reserves.',
    tag: 'External Sector',
    difficulty: 'Medium',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q6',
    question: 'Under the Minimum Support Price (MSP) regime, the Commission for Agricultural Costs and Prices (CACP) recommends prices taking into account which baseline production cost formula?',
    questionTelugu: 'కనీస మద్దతు ధర (MSP) సిఫార్సుల్లో CACP పరిగణనలోకి తీసుకునే ఉత్పత్తి వ్యయ సూత్రం ఏది?',
    options: ['At least 1.5 times the cost of A2 + FL', '1.5 times the comprehensive C2 cost', 'Purely market demand price', 'Wholesale export price'],
    correctIndex: 0,
    explanation: 'The Union Budget 2018–19 mandated that MSPs must be set at a minimum of 150% (1.5 times) of production cost calculated as A2 (paid-out costs) + FL (imputed value of family labor).',
    tag: 'Agriculture',
    difficulty: 'Medium',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q7',
    question: 'The concept of "Core Inflation" differs from "Headline CPI Inflation" because Core Inflation strictly excludes:',
    questionTelugu: '"కోర్ ఇన్‌ఫ్లేషన్" మరియు "హెడ్‌లైన్ సీపీఐ ఇన్‌ఫ్లేషన్" మధ్య ప్రధాన వ్యత్యాసం ఏమిటి? కోర్ ఇన్‌ఫ్లేషన్‌లో దేనిని మినహాయిస్తారు?',
    options: ['Food and Fuel commodities', 'Manufactured goods', 'Housing rent and electricity', 'Service sector charges'],
    correctIndex: 0,
    explanation: 'Core Inflation excludes volatile components—namely food and fuel/energy products—to capture underlying long-term price pressures in the economy.',
    tag: 'Inflation',
    difficulty: 'Easy',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q8',
    question: 'Which index was officially adopted by the Reserve Bank of India in 2014 on the recommendation of the Urjit Patel Committee as its key measure of headline inflation?',
    questionTelugu: '2014లో ఉర్జిత్ పటేల్ కమిటీ సిఫార్సుల మేరకు ఆర్బీఐ ద్రవ్యోల్బణ ప్రధాన కొలమానంగా ఏ సూచీని ఎంపిక చేసుకుంది?',
    options: ['Consumer Price Index (Combined)', 'Wholesale Price Index (WPI)', 'Gross Domestic Product Deflator', 'Index of Industrial Production (IIP)'],
    correctIndex: 0,
    explanation: 'Before 2014, RBI used WPI as its policy anchor. Following the Urjit Patel Committee report, RBI shifted to CPI-Combined (Base 2012=100) because it directly reflects consumer purchasing power and services.',
    tag: 'Inflation',
    difficulty: 'Medium',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q9',
    question: 'The Fiscal Responsibility and Budget Management (FRBM) Act was passed in which year to ensure inter-generational fiscal equity?',
    questionTelugu: 'ఆర్థిక బాధ్యత మరియు బడ్జెట్ నిర్వహణ (FRBM) చట్టం ఏ సంవత్సరంలో ఆమోదించబడింది?',
    options: ['2003', '1991', '2008', '2016'],
    correctIndex: 0,
    explanation: 'The FRBM Act was enacted in 2003 during the Vajpayee government to institutionalize fiscal discipline, reduce fiscal deficits, and eliminate revenue deficit.',
    tag: 'Fiscal Policy',
    difficulty: 'Easy',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q10',
    question: 'Which of the following is considered part of the "Capital Account" of India’s Balance of Payments (BoP)?',
    questionTelugu: 'భారతదేశ బ్యాలెన్స్ ఆఫ్ పేమెంట్స్ (BoP) లోని "క్యాపిటల్ అకౌంట్" లో భాగమైనది ఏది?',
    options: ['Foreign Direct Investment (FDI) inflows', 'Merchandise goods export receipts', 'Remittances sent by non-resident Indians (NRIs)', 'Software export earnings'],
    correctIndex: 0,
    explanation: 'FDI and FPI involve change in ownership of foreign assets/liabilities, falling under the Capital Account. Merchandise exports, remittances, and software services are in the Current Account.',
    tag: 'External Sector',
    difficulty: 'Medium',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q11',
    question: 'What happens to the bond yield when the market price of a sovereign government bond increases?',
    questionTelugu: 'ప్రభుత్వ బాండ్ మార్కెట్ ధర పెరిగినప్పుడు దాని బాండ్ ఈల్డ్ (Bond Yield) ఏమవుతుంది?',
    options: ['Bond yield decreases', 'Bond yield increases proportionally', 'Bond yield remains unchanged', 'Bond coupon rate doubles'],
    correctIndex: 0,
    explanation: 'Bond prices and bond yields have an inverse mathematical relationship. As bond price rises, the fixed coupon payment yields a smaller percentage return, causing yield to fall.',
    tag: 'Financial Markets',
    difficulty: 'Hard',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q12',
    question: 'The Gini Coefficient is an economic metric widely utilized by international bodies to measure:',
    questionTelugu: 'గిని కోఎఫీషియంట్ (Gini Coefficient) దేనిని కొలవడానికి ఉపయోగిస్తారు?',
    options: ['Income inequality or wealth distribution', 'Rate of industrial growth', 'Poverty line consumption basket', 'Current account deficit'],
    correctIndex: 0,
    explanation: 'The Gini Coefficient ranges from 0 (perfect equality) to 1 (perfect inequality), measuring income or consumption distribution from the Lorenz curve.',
    tag: 'Poverty & Inclusion',
    difficulty: 'Easy',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q13',
    question: 'Priority Sector Lending (PSL) guidelines issued by the RBI require domestic commercial banks to allocate what minimum percentage of their Adjusted Net Bank Credit (ANBC) to priority sectors?',
    questionTelugu: 'ఆర్బీఐ నిబంధనల ప్రకారం వాణిజ్య బ్యాంకులు తమ రుణాలు (ANBC) లో కనీసం ఎంత శాతం ప్రాధాన్యతా రంగానికి (PSL) కేటాయించాలి?',
    options: ['40%', '25%', '50%', '30%'],
    correctIndex: 0,
    explanation: 'Domestic commercial banks and foreign banks with 20+ branches are mandated to allocate 40% of their ANBC or Credit Equivalent of Off-Balance Sheet Exposure (CEOBE) to priority sectors.',
    tag: 'Banking',
    difficulty: 'Medium',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q14',
    question: 'The "Phillips Curve" in macroeconomic theory hypothesizes an inverse relationship between:',
    questionTelugu: 'ఫిలిప్స్ కర్వ్ (Phillips Curve) ఏ రెండు ఆర్థిక వేరియబుల్స్ మధ్య విలోమ సంబంధాన్ని తెలుపుతుంది?',
    options: ['Rate of inflation and rate of unemployment', 'GDP growth and tax collection', 'Poverty rate and interest rate', 'Exports and currency depreciation'],
    correctIndex: 0,
    explanation: 'The Phillips Curve posits an inverse short-run trade-off between inflation and unemployment: lower unemployment is associated with higher wages and demand-pull inflation.',
    tag: 'Economic Theory',
    difficulty: 'Medium',
    topicId: 'economy-macro-indicators'
  },
  {
    id: 'econ-q15',
    question: 'Which of the following constitutes an "Indirect Tax" subsumed under the Goods and Services Tax (GST)?',
    questionTelugu: 'జీఎస్టీలో విలీనమైన పరోక్ష పన్ను ఏది?',
    options: ['Central Excise Duty', 'Corporation Tax', 'Securities Transaction Tax (STT)', 'Capital Gains Tax'],
    correctIndex: 0,
    explanation: 'Central Excise Duty, Service Tax, State VAT, and Octroi were subsumed under GST. Corporation Tax, STT, and Capital Gains are Direct Taxes.',
    tag: 'Taxation',
    difficulty: 'Easy',
    topicId: 'economy-macro-indicators'
  }
];
