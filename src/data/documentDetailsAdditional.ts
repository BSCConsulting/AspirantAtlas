import { DocumentDetail } from '../types';

export const ADDITIONAL_DOCUMENT_DETAILS: Record<string, DocumentDetail> = {
  // =========================================================================
  // 1. REPRESENTATION OF THE PEOPLE ACTS (1950 & 1951)
  // =========================================================================
  'rpa-1950-1951-acts': {
    id: 'rpa-1950-1951-acts',
    title: 'Representation of the People Acts (1950 & 1951) & Electoral Reforms',
    titleTelugu: 'ప్రజాప్రాతినిధ్య చట్టాలు (1950 & 1951) & ఎన్నికల సంస్కరణలు',
    issuingAuthority: 'Legislative Department, Ministry of Law and Justice, Govt of India',
    dateOrYear: 'Acts No. 43 of 1950 & 43 of 1951',
    pages: 'Statutory Bare Text & Landmark Amendments (142 Sections)',
    summary: 'The bedrock statutory framework for democratic elections in India. RPA 1950 covers allocation of seats in Parliament and State Legislatures, delimitation of constituencies, and qualifications of voters. RPA 1951 governs conduct of elections, qualifications/disqualifications for membership (Section 8), corrupt practices, and election disputes.',
    pdfFilename: 'representation-of-people-acts-1950-1951.pdf',
    sections: [
      {
        numberOrCode: 'RPA 1950: Part II & III',
        title: 'Allocation of Seats, Delimitation & Electoral Rolls',
        content: [
          'Section 3 & 4: Allocation of seats in Lok Sabha and delimitation of parliamentary and assembly constituencies by the Delimitation Commission.',
          'Section 14-25: Preparation of electoral rolls; qualifying age (18 years as on qualifying date); single electoral roll for every constituency (Art 325/326).',
          'Registration of Electors: Disqualification for non-citizens, persons of unsound mind, or those disqualified for corrupt practices.'
        ],
        keyHighlight: 'RPA 1950 deals with preliminary election infrastructure: seats, boundaries, and who can vote.'
      },
      {
        numberOrCode: 'RPA 1951: Section 8',
        title: 'Disqualification of Convicted Legislators (Lily Thomas Jurisprudence)',
        content: [
          'Section 8(1) to 8(3): Automatic disqualification upon conviction for specific offenses (promoting enmity, rape, corruption) or sentences of 2+ years imprisonment.',
          'Disqualification period: Duration of imprisonment plus a mandatory 6-year period post-release.',
          'Supreme Court in Lily Thomas v. Union of India (2013) struck down Section 8(4) (which allowed a 3-month protection window during appeal), establishing instant disqualification upon conviction.'
        ],
        keyHighlight: 'Lily Thomas (2013) made disqualification immediate upon conviction without waiting for appellate review.'
      },
      {
        numberOrCode: 'RPA 1951: Section 29A & 123',
        title: 'Political Party Registration & Corrupt Electoral Practices',
        content: [
          'Section 29A: Registration of political parties with the Election Commission of India (ECI); mandatory adherence to socialist, secular, and democratic principles of the Constitution.',
          'Section 123: Definitions of corrupt practices: bribery, undue influence, appeal to religion/caste/race (Abhiram Singh v. C.D. Commachen 2017), booth capturing, and promoting communal hatred.',
          'Section 126: Prohibition of public meetings and election campaign propaganda during the 48-hour silent period before poll conclusion.'
        ],
        keyHighlight: 'Abhiram Singh (2017) ruled that "his religion" in Sec 123(3) includes the religion of candidate, voters, and campaign agents.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What is the precise constitutional distinction between RPA 1950 and RPA 1951?',
        answer: 'RPA 1950 governs the architecture prior to elections (seats allocation, voter rolls, constituency delimitation), whereas RPA 1951 regulates the actual electoral process (candidate nominations, conduct of polls, disqualifications, corrupt practices, and election petitions).',
        examTip: 'Always contrast RPA 1950 (Voter/Constituency focus) with RPA 1951 (Candidate/Process focus) in Mains answers.'
      },
      {
        question: 'What was the landmark significance of Lily Thomas v. Union of India (2013) on Section 8(4)?',
        answer: 'The Supreme Court held Section 8(4) unconstitutional, ruling that Parliament lacked legislative competence to create a deferred disqualification timeline for sitting members while disqualifying ordinary candidates immediately.',
        examTip: 'Cite Article 102(1)(e) and Article 191(1)(e) alongside Lily Thomas in GS-2.'
      }
    ],
    testQuestions: [
      {
        id: 'rpa-q1',
        question: 'Under Section 8(3) of the Representation of the People Act, 1951, a person convicted of any offense and sentenced to imprisonment for not less than two years is disqualified from the date of conviction and shall continue to be disqualified for a further period of:',
        options: ['6 years since release', '5 years since release', '3 years since release', 'Lifetime'],
        correctIndex: 0,
        explanation: 'Section 8(3) mandates that the disqualification continues during the sentence and for a further period of 6 years since release.',
        tag: 'Electoral Law'
      }
    ]
  },

  // =========================================================================
  // 2. SECOND ADMINISTRATIVE REFORMS COMMISSION (4TH REPORT): ETHICS IN GOVERNANCE
  // =========================================================================
  'arc2-ethics-in-governance': {
    id: 'arc2-ethics-in-governance',
    title: 'Second ARC 4th Report: Ethics in Governance',
    titleTelugu: 'రెండవ పరిపాలనా సంస్కరణల కమిషన్ 4వ నివేదిక: పరిపాలనలో నీతిశాస్త్రం',
    issuingAuthority: 'Department of Administrative Reforms & Public Grievances (DARPG), Govt of India',
    dateOrYear: 'January 2007',
    pages: '312 Pages Official Report',
    summary: 'The definitive policy benchmark for integrity, anti-corruption frameworks, and institutional ethics in Indian civil administration. Authored by the Commission headed by M. Veerappa Moily, covering Lokpal & Lokayuktas, civil service values, whistleblower protection, and systemic procurement reforms.',
    pdfFilename: 'second-arc-4th-report-ethics.pdf',
    sections: [
      {
        numberOrCode: 'Chapter 2 & 3',
        title: 'Reform of Political Funding & Criminalization of Politics',
        content: [
          'Recommended partial state funding of elections to eliminate black money dependence and crony capitalism.',
          'Recommended disqualification of candidates facing trial for serious heinous crimes where charges have been framed by a competent magistrate.',
          'Enforcement of internal democracy, auditable asset declarations, and financial transparency within political parties.'
        ],
        keyHighlight: 'Identified unregulated election spending as the genesis of administrative corruption in India.'
      },
      {
        numberOrCode: 'Chapter 4',
        title: 'Statutory Ombudsman: Lokpal & Lokayuktas Architecture',
        content: [
          'Advocated an independent constitutional/statutory Lokpal with its own dedicated inquiry wing and prosecution directorate.',
          'Recommended strengthening State Lokayuktas across all States with uniform investigative jurisdiction over Chief Ministers, Ministers, and senior bureaucrats.',
          'Abolition of prior government sanction under Section 197 of CrPC for prosecuting public servants caught red-handed accepting bribes.'
        ],
        keyHighlight: 'Paved the statutory pathway for the Lokpal and Lokayuktas Act, 2013.'
      },
      {
        numberOrCode: 'Chapter 5 & 6',
        title: 'Code of Ethics & Whistleblower Institutional Protection',
        content: [
          'Proposed a statutory Code of Ethics for Ministers and a Public Service Code for civil servants emphasizing: Empathy, Integrity, Impartiality, and Dedication to Public Service.',
          'Comprehensive protection for bona fide whistleblowers with punitive penalties against frivolous or malicious harassment.',
          'Confiscation of illegally acquired property of corrupt public servants through fast-track statutory tribunals.'
        ],
        keyHighlight: 'Distinguished between a "Code of Conduct" (negative prohibitions) and a "Code of Ethics" (positive moral imperatives).'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'How did 2nd ARC differentiate between a Code of Conduct and a Code of Ethics?',
        answer: 'A Code of Conduct specifies what a public servant MUST NOT do (e.g. accepting gifts, joining political rallies), acting as a punitive compliance rulebook. A Code of Ethics specifies what a public servant ASPIRES to do (integrity, empathy, objectivity, compassion), guiding ethical discretion in ambiguous situations.',
        examTip: 'Essential conceptual distinction for UPSC GS-4 Ethics theory questions.'
      }
    ],
    testQuestions: [
      {
        id: 'arc-q1',
        question: 'Which Administrative Reforms Commission report is officially entitled "Ethics in Governance"?',
        options: ['Fourth Report', 'First Report', 'Sixth Report', 'Twelfth Report'],
        correctIndex: 0,
        explanation: 'The Fourth Report of the Second Administrative Reforms Commission (2007) is titled "Ethics in Governance".',
        tag: 'Administrative Ethics'
      }
    ]
  },

  // =========================================================================
  // 3. SARKARIA & PUNCHHI COMMISSIONS: INTER-STATE COUNCIL DIGEST
  // =========================================================================
  'sarkaria-punchhi-commissions': {
    id: 'sarkaria-punchhi-commissions',
    title: 'Inter-State Council Digest: Sarkaria & Punchhi Commissions on Federalism',
    titleTelugu: 'సమాఖ్య వ్యవస్థపై సర్కారియా & పుంఛీ కమిషన్ల సమగ్ర నివేదిక',
    issuingAuthority: 'Inter-State Council Secretariat, Ministry of Home Affairs',
    dateOrYear: 'Sarkaria (1988) & Punchhi (2010)',
    pages: 'Comparative Federal Digest (380 Pages)',
    summary: 'The two most authoritative commissions on Centre-State relations in independent India. Sarkaria (Justice R.S. Sarkaria) established cooperative federalism principles, while Punchhi (Justice M.M. Punchhi) modernized them for contemporary coalition and multi-party dynamics.',
    pdfFilename: 'sarkaria-punchhi-commissions-federalism.pdf',
    sections: [
      {
        numberOrCode: 'Article 356 & State Emergency',
        title: 'Safeguards Against Misuse of President’s Rule',
        content: [
          'Sarkaria Commission: Article 356 should be used strictly as a "measure of last resort" (ultimum remedium) only after issuing a formal warning under Article 355.',
          'State Assembly should not be dissolved until Parliament approves the Presidential Proclamation.',
          'Principles subsequently affirmed by the Supreme Court 9-judge Constitution Bench in S.R. Bommai v. Union of India (1994).'
        ],
        keyHighlight: 'Bommai (1994) made Article 356 subject to judicial review, enforcing Sarkaria Commission guidelines.'
      },
      {
        numberOrCode: 'Office of the Governor',
        title: 'Appointment, Tenure & Discretionary Powers',
        content: [
          'Punchhi Commission: Governor should be an eminent person from outside the State, detached from active politics for at least 2 years prior to appointment.',
          'Mandatory consultation with the State Chief Minister before appointment.',
          'Security of tenure: Fixed 5-year tenure with removal only through an impeachment process by the State Legislature (akin to the President).',
          'Articles 200 & 201: Governor must decide on State legislative bills within a maximum time frame of 6 months instead of indefinite withholding.'
        ],
        keyHighlight: 'Punchhi recommended removing the "pleasure of the President" doctrine for Governor removals.'
      },
      {
        numberOrCode: 'Inter-State Council (Art 263)',
        title: 'Institutionalizing Cooperative & Consultative Federalism',
        content: [
          'Article 263: Inter-State Council established by Presidential Order in 1990 based on Sarkaria Commission recommendations.',
          'Mandatory consultation with States prior to introducing bills on Concurrent List (List III) subjects in Parliament.',
          'Strengthening Zonal Councils to resolve interstate water disputes and border security friction points.'
        ],
        keyHighlight: 'Recommended that the Inter-State Council meet at least three times a year with an independent permanent secretariat.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What did the Punchhi Commission recommend regarding the removal of Governors?',
        answer: 'The Punchhi Commission recommended that Governors should be granted a fixed 5-year tenure and should not be removed at the arbitrary pleasure of the Union Government. It proposed that removal should be conducted via a legislative impeachment process in the State Legislature on grounds of dignity and constitutional breach.',
        examTip: 'Cite alongside B.P. Singhal v. Union of India (2010) in GS-2.'
      }
    ],
    testQuestions: [
      {
        id: 'spc-q1',
        question: 'Under Article 263 of the Constitution, the Inter-State Council was formally established in 1990 upon the recommendation of which Commission?',
        options: ['Sarkaria Commission', 'Punchhi Commission', 'Kothari Commission', 'Shah Commission'],
        correctIndex: 0,
        explanation: 'The Inter-State Council was constituted on May 28, 1990 following the recommendations of the Sarkaria Commission (1988).',
        tag: 'Indian Federalism'
      }
    ]
  },

  // =========================================================================
  // 4. REPORT OF THE 15TH FINANCE COMMISSION (2021–2026)
  // =========================================================================
  'finance-commission-15-report': {
    id: 'finance-commission-15-report',
    title: 'Report of the 15th Finance Commission (2021–2026): Finance Commission in COVID Times',
    titleTelugu: '15వ ఆర్థిక సంఘం తుది నివేదిక (2021-2026)',
    issuingAuthority: 'Finance Commission of India (N.K. Singh Committee)',
    dateOrYear: 'November 2020 / Valid 2021–2026',
    pages: '4 Volumes (Vol I: Report, Vol II: Union, Vol III & IV: States)',
    summary: 'The statutory blueprint under Article 280 determining vertical devolution of tax revenues between the Union and States and the horizontal distribution formula across States for the period 2021-22 to 2025-26.',
    pdfFilename: 'fifteenth-finance-commission-report.pdf',
    sections: [
      {
        numberOrCode: 'Vertical Devolution: 41%',
        title: 'Divisible Pool Allocation & J&K Adjustment',
        content: [
          'Recommended 41% share of the divisible pool of taxes to States.',
          'Retained the 42% benchmark established by the 14th FC, adjusting 1% downward to 41% to finance the newly created Union Territories of Jammu & Kashmir and Ladakh from the Central pool.',
          'Noted concern over the proliferation of cesses and surcharges which are not part of the divisible pool under Article 270.'
        ],
        keyHighlight: '41% to States + 1% adjustment for J&K and Ladakh from Union resources.'
      },
      {
        numberOrCode: 'Horizontal Formula',
        title: 'The Six Criteria Devolution Matrix',
        content: [
          'Income Distance (45%): Rewards poorer states to bridge revenue disparities with the highest per capita income state (Haryana).',
          'Population 2011 (15%): Used 2011 Census exclusively, replacing 1971 data.',
          'Area (15%): Compensates larger geographical states for administrative overheads.',
          'Forest & Ecology (10%): Compensates states preserving dense and moderately dense forest cover.',
          'Demographic Performance (12.5%): Introduced specifically to reward states (especially Southern states) that lowered Total Fertility Rate (TFR) below replacement level (2.1).',
          'Tax and Fiscal Effort (2.5%): Rewards states demonstrating higher tax collection efficiency relative to GSDP.'
        ],
        keyHighlight: 'Demographic Performance (12.5%) was created to balance the transition from 1971 to 2011 Census population.'
      },
      {
        numberOrCode: 'Grants-in-Aid Architecture',
        title: 'Sectoral, Revenue Deficit & Local Body Grants',
        content: [
          'Post-Devolution Revenue Deficit Grants (PDRDG): ₹2.94 lakh crore allocated to 17 deficit states (including Andhra Pradesh) over the 5-year award period.',
          'Local Body Grants: ₹4.36 lakh crore divided between rural (60%) and urban (40%) local bodies with strict conditions for basic water supply and sanitation.',
          'Modernisation Fund for Defence and Internal Security (MFDIS): Proposed non-lapsable fund funded partly from the Consolidated Fund of India and disinvestment.'
        ],
        keyHighlight: 'Substantial PDRDG assistance granted to Andhra Pradesh to offset post-bifurcation revenue deficit.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Why did the 15th Finance Commission introduce the "Demographic Performance" criterion?',
        answer: 'Because the Terms of Reference mandated using the 2011 Census instead of the 1971 Census. Southern states that successfully implemented family planning policies feared losing revenue shares to high-population states. The 12.5% Demographic Performance criterion rewards states with low fertility rates, restoring equity.',
        examTip: 'Crucial for Mains GS-2 and GS-3 federal finance questions.'
      }
    ],
    testQuestions: [
      {
        id: 'fc15-q1',
        question: 'In the horizontal tax devolution formula of the 15th Finance Commission, which criterion carries the highest weightage?',
        options: ['Income Distance (45%)', 'Population 2011 (25%)', 'Area (20%)', 'Forest & Ecology (15%)'],
        correctIndex: 0,
        explanation: 'Income Distance carries the highest weightage at 45% to promote horizontal fiscal equalization among states.',
        tag: 'Fiscal Federalism'
      }
    ]
  },

  // =========================================================================
  // 5. FRBM ACT 2003 & FISCAL TARGETS
  // =========================================================================
  'frbm-act-targets-rules': {
    id: 'frbm-act-targets-rules',
    title: 'Fiscal Responsibility & Budget Management (FRBM) Act, 2003 & Debt Sustainability Rules',
    titleTelugu: 'ద్రవ్య బాధ్యత & బడ్జెట్ నిర్వహణ చట్టం (ఎఫ్‌ఆర్‌బీఎం), 2003',
    issuingAuthority: 'Department of Economic Affairs, Ministry of Finance, Govt of India',
    dateOrYear: 'Enacted 2003 / N.K. Singh Review 2017',
    pages: 'Statutory Act & Fiscal Framework (85 Pages)',
    summary: 'The statutory anchor for macroeconomic stability and fiscal consolidation in India. Mandates reduction of fiscal deficit, elimination of revenue deficit, inter-generational equity, and macro fiscal projections presented alongside the Union Budget.',
    pdfFilename: 'frbm-act-fiscal-targets.pdf',
    sections: [
      {
        numberOrCode: 'Core Statutory Mandate',
        title: 'Fiscal Deficit Ceilings & Mandatory Budget Statements',
        content: [
          'Mandates the Central Government to reduce the fiscal deficit to 3% of GDP and eliminate the revenue deficit.',
          'Requires laying 3 statutory statements with the Union Budget: (1) Medium-Term Fiscal Policy Statement, (2) Fiscal Policy Strategy Statement, (3) Macroeconomic Framework Statement.',
          'Prohibits direct borrowing by the Central Government from the Reserve Bank of India (RBI) via primary market monetisation.'
        ],
        keyHighlight: 'Ended the historic practice of ad-hoc Treasury bills monetization of fiscal deficit by RBI.'
      },
      {
        numberOrCode: 'Escape Clauses & Shock Absorbers',
        title: 'Section 4(2): Operational Flexibility in Crises',
        content: [
          'Escape clause allows the Union Government to breach the fiscal deficit target by up to 0.5% of GDP under exceptional circumstances: national security, war, severe agricultural distress, structural economic reforms, or sharp economic slowdown.',
          'Invoked during major disruptions and during the COVID-19 pandemic to allow counter-cyclical capital expenditure stimulus.'
        ],
        keyHighlight: 'Permits 0.5% fiscal relaxation under specified macro shocks.'
      },
      {
        numberOrCode: 'N.K. Singh Committee (2017)',
        title: 'Transition from Deficit to Debt-to-GDP Anchor',
        content: [
          'Recommended shifting focus from annual deficits to general government Debt-to-GDP ratio: 60% combined ceiling (40% Union, 20% States) by 2023.',
          'Recommended establishing an autonomous Fiscal Council to provide independent verification of budget estimates and escape clause triggers.'
        ],
        keyHighlight: 'Debt-to-GDP ratio of 60% proposed as the primary anchor of fiscal health.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What are the three mandatory fiscal policy statements required to be laid before Parliament under the FRBM Act?',
        answer: 'The three statements are: (1) Medium-Term Fiscal Policy Statement, (2) Fiscal Policy Strategy Statement, and (3) Macroeconomic Framework Statement. Additionally, the Medium-Term Expenditure Framework Statement is presented in the monsoon session.',
        examTip: 'Frequently tested in Prelims and useful for structuring Mains budget answers.'
      }
    ],
    testQuestions: [
      {
        id: 'frbm-q1',
        question: 'The N.K. Singh Committee on FRBM review recommended targeting a combined General Government Debt-to-GDP ratio of:',
        options: ['60% (40% Union, 20% States)', '50% (30% Union, 20% States)', '70% (50% Union, 20% States)', '40% (25% Union, 15% States)'],
        correctIndex: 0,
        explanation: 'The N.K. Singh Committee recommended targeting a combined Debt-to-GDP ratio of 60% (40% for the Centre and 20% for the States).',
        tag: 'Public Finance'
      }
    ]
  },

  // =========================================================================
  // 6. RBI MONETARY POLICY FRAMEWORK & BANKING REFORMS
  // =========================================================================
  'rbi-mpc-banking-reforms': {
    id: 'rbi-mpc-banking-reforms',
    title: 'RBI Monetary Policy Framework & Banking Stability Architecture',
    titleTelugu: 'ఆర్బీఐ ద్రవ్య విధాన ముసాయిదా & బ్యాంకింగ్ సుస్థిరత నివేదిక',
    issuingAuthority: 'Reserve Bank of India (Monetary Policy Department)',
    dateOrYear: 'Monetary Policy Framework Agreement & RBI Act Sec 45ZB',
    pages: 'Statutory Banking Blueprint (120 Pages)',
    summary: 'The legal and operational architecture governing price stability and monetary transmission in India. Codifies the 6-member Monetary Policy Committee (MPC), Flexible Inflation Targeting (4% ± 2%), LAF corridor tools, and Insolvency and Bankruptcy Code (IBC) banking cleanup.',
    pdfFilename: 'rbi-monetary-policy-banking-reforms.pdf',
    sections: [
      {
        numberOrCode: 'Section 45ZB: The MPC',
        title: 'Composition, Quorum & Casting Vote',
        content: [
          '6-member committee: 3 members from RBI (Governor as ex-officio Chair, Deputy Governor in charge of monetary policy, and one RBI official) + 3 external members appointed by Central Government for a 4-year non-renewable term.',
          'Meets at least 4 times a year; decision by majority vote, with the RBI Governor having a second or casting vote in case of a tie.',
          'Each member publishes their individual statement and vote rationale in the bimonthly minutes.'
        ],
        keyHighlight: 'Democratized interest-rate setting from individual Governor discretion to a collegiate 6-member body.'
      },
      {
        numberOrCode: 'Inflation Target & Failure',
        title: 'CPI Target (4% ± 2%) & Accountability Reports',
        content: [
          'Inflation target set once every 5 years by Central Government in consultation with RBI (Headline CPI 4% with tolerance band of 2% to 6%).',
          'Statutory Failure Clause: If inflation remains above 6% or below 2% for three consecutive quarters, RBI must submit a confidential report to GoI explaining: (1) causes, (2) remedial actions, and (3) estimated time to restore target.'
        ],
        keyHighlight: 'Accountability report triggered if target breached for 3 consecutive quarters.'
      },
      {
        numberOrCode: 'Liquidity Tools & LAF Corridor',
        title: 'Standing Deposit Facility, Repo & MSF',
        content: [
          'Policy Repo Rate acts as the primary anchor rate.',
          'Floor: Standing Deposit Facility (SDF, 25 bps below repo rate) absorbs excess liquidity without requiring government securities collateral.',
          'Ceiling: Marginal Standing Facility (MSF, 25 bps above repo rate) provides emergency overnight liquidity against SLR securities.'
        ],
        keyHighlight: 'SDF eliminated collateral constraints for RBI liquidity absorption.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'How is the Standing Deposit Facility (SDF) fundamentally different from the Reverse Repo Rate?',
        answer: 'Under Reverse Repo, RBI must pledge Government Securities (G-Secs) as collateral to banks when borrowing cash. Under the Standing Deposit Facility (SDF), no collateral securities are pledged, enabling RBI to absorb unlimited surplus liquidity without balance sheet collateral constraints.',
        examTip: 'High-probability technical question for Prelims and Economy GS-3.'
      }
    ],
    testQuestions: [
      {
        id: 'rbi-q1',
        question: 'Under the amended RBI Act, the Monetary Policy Committee is deemed to have failed in meeting its inflation target if headline CPI inflation remains outside the tolerance band (2% to 6%) for:',
        options: ['Three consecutive quarters', 'Two consecutive quarters', 'Four consecutive quarters', 'Six consecutive months'],
        correctIndex: 0,
        explanation: 'Failure is defined as inflation breaching the 2%-6% tolerance band for three consecutive quarters.',
        tag: 'Monetary Policy'
      }
    ]
  },

  // =========================================================================
  // 7. GOVERNMENT OF INDIA ACTS COMPENDIUM (1909, 1919, 1935)
  // =========================================================================
  'constitutional-acts-1909-1919-1935': {
    id: 'constitutional-acts-1909-1919-1935',
    title: 'Government of India Acts Compendium (1909, 1919, 1935)',
    titleTelugu: 'భారత ప్రభుత్వ చట్టాల సంకలనం (1909, 1919, 1935)',
    issuingAuthority: 'National Archives of India / Gazette Records',
    dateOrYear: 'Historical Statutory Archive (1909–1935)',
    pages: 'Comparative Legislative Texts (215 Pages)',
    summary: 'The colonial legislative stepping stones that shaped the institutional architecture of the modern Indian Constitution. From separate communal electorates (Morley-Minto 1909) and provincial dyarchy (Montagu-Chelmsford 1919) to provincial autonomy and federal distribution of legislative lists (GoI Act 1935).',
    pdfFilename: 'goi-acts-1909-1919-1935-compendium.pdf',
    sections: [
      {
        numberOrCode: 'Act of 1909 (Morley-Minto)',
        title: 'Communal Representation & Council Expansion',
        content: [
          'Introduced separate electorates for Muslims, introducing communalism into legal statute.',
          'Increased size of Central and Provincial Legislative Councils; allowed members to ask supplementary questions and move budget resolutions.',
          'Satyendra Prasad Sinha became the first Indian appointed to the Viceroy’s Executive Council (as Law Member).'
        ],
        keyHighlight: 'Lord Minto described as the "Father of Communal Electorates".'
      },
      {
        numberOrCode: 'Act of 1919 (Montagu-Chelmsford)',
        title: 'Provincial Dyarchy & Bicameralism at Centre',
        content: [
          'Introduced Dyarchy in Provinces: divided provincial subjects into "Transferred" (administered by Governor on aid of Indian ministers) and "Reserved" (police, justice, finance retained by Governor and executive council).',
          'Introduced bicameral legislature at the Centre (Council of State and Legislative Assembly).',
          'Provided for establishing a Public Service Commission (Central PSC established in 1926) and separated provincial budgets from Central budget.'
        ],
        keyHighlight: 'Dyarchy divided provincial governance into Transferred vs Reserved portfolios.'
      },
      {
        numberOrCode: 'Act of 1935: Blueprint of Constitution',
        title: 'All-India Federation, Provincial Autonomy & 3 Lists',
        content: [
          'Abolished provincial dyarchy and introduced Provincial Autonomy: responsible governments formed in 11 provinces.',
          'Established three legislative lists: Federal List (59 items), Provincial List (54 items), and Concurrent List (36 items); residuary powers vested with the Viceroy.',
          'Provided for establishing a Federal Court (1937), Reserve Bank of India, Federal PSC, and Provincial PSCs.',
          'Over 70% of administrative and institutional structures in the 1950 Indian Constitution were directly adapted from the GoI Act 1935.'
        ],
        keyHighlight: 'The 1935 Act is the structural, administrative, and federal skeleton of the Indian Constitution.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Under the Government of India Act, 1935, where were the residuary legislative powers vested?',
        answer: 'Residuary legislative powers under the 1935 Act were neither given to the Federal Legislature nor to the Provincial Legislatures; they were vested in the discretionary authority of the Governor-General (Viceroy). Under the modern 1950 Constitution, Article 248 vests residuary powers in Parliament.',
        examTip: 'Frequent trap in Prelims comparing 1935 Viceroy power with 1950 Parliament power.'
      }
    ],
    testQuestions: [
      {
        id: 'goi-q1',
        question: 'Which colonial enactment introduced for the first time the system of "Dyarchy" in the provincial governments of British India?',
        options: ['Government of India Act 1919', 'Government of India Act 1909', 'Government of India Act 1935', 'Indian Councils Act 1892'],
        correctIndex: 0,
        explanation: 'The Government of India Act, 1919 (Montagu-Chelmsford Reforms) introduced dyarchy in the provinces.',
        tag: 'Modern History'
      }
    ]
  },

  // =========================================================================
  // 8. THE INDIAN INDEPENDENCE ACT, 1947
  // =========================================================================
  'indian-independence-act-1947': {
    id: 'indian-independence-act-1947',
    title: 'The Indian Independence Act, 1947 (10 & 11 Geo. 6. c. 30)',
    titleTelugu: 'భారత స్వాతంత్ర్య చట్టం, 1947',
    issuingAuthority: 'Parliament of the United Kingdom / Gazette of India Archive',
    dateOrYear: 'Royal Assent: 18 July 1947 / Effective: 15 August 1947',
    pages: '20 Sections Statutory Instrument',
    summary: 'The historic legal instrument that ended British rule in the subcontinent. Enacted the partition of British India into two independent dominions (India and Pakistan), abolished Crown paramountcy over princely states, and empowered the Constituent Assembly to frame a sovereign constitution.',
    pdfFilename: 'indian-independence-act-1947.pdf',
    sections: [
      {
        numberOrCode: 'Section 1–5: Two Dominions',
        title: 'Partition & Creation of Independent Dominions',
        content: [
          'Declared that from 15th August 1947, two independent Dominions to be known respectively as India and Pakistan shall be established.',
          'Defined territorial boundaries: Bengal and Punjab partitioned via Boundary Commissions headed by Sir Cyril Radcliffe.',
          'Each Dominion to have a Governor-General appointed by the British Crown on the advice of the respective Dominion cabinet.'
        ],
        keyHighlight: 'Established the legal sovereignty of India and Pakistan from midnight of 14-15 August 1947.'
      },
      {
        numberOrCode: 'Section 7: Lapse of Paramountcy',
        title: 'Status of Princely States & Tribal Treaties',
        content: [
          'Declared the complete lapse of suzerainty (paramountcy) of the British Crown over 565 Indian princely states.',
          'Princely states were freed from all treaties and granted freedom to either join India, join Pakistan, or remain independent.',
          'Sardar Vallabhbhai Patel and V.P. Menon leveraged Instruments of Accession (Defense, External Affairs, Communications) to integrate 562 states into the Indian Union.'
        ],
        keyHighlight: 'Lapse of paramountcy created the geopolitical crisis of princely integration (Junagadh, Hyderabad, Kashmir).'
      },
      {
        numberOrCode: 'Section 6 & 8',
        title: 'Sovereign Constituent Assemblies & Interim Governance',
        content: [
          'Empowered the Constituent Assembly of each Dominion to legislate without any British parliamentary oversight or veto.',
          'Repealed the British Government of India Act 1935 as a colonial master statute, but adopted its provisions as an interim constitutional framework until a new constitution was drafted.',
          'Abolished the office of the Secretary of State for India and transferred powers to the Secretary of State for Commonwealth Relations.'
        ],
        keyHighlight: 'The Constituent Assembly functioned simultaneously as the sovereign Constitution-making body and the first interim Parliament.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Under the Indian Independence Act 1947, how were the dominions governed between 15 August 1947 and 26 January 1950?',
        answer: 'They were governed under the Government of India Act 1935, adapted with necessary modifications (such as deleting all discretionary and special responsibilities of the Governor-General) by orders of the Governor-General under Section 9 of the 1947 Act.',
        examTip: 'Cite the dual role of Constituent Assembly (headed by Dr. Rajendra Prasad for Constitution, and G.V. Mavalankar as Speaker for interim parliament).'
      }
    ],
    testQuestions: [
      {
        id: 'iia-q1',
        question: 'Under the Indian Independence Act, 1947, who was empowered to repeal or amend any Act of the British Parliament, including the 1947 Act itself?',
        options: ['The Constituent Assembly of the Dominion', 'The Governor-General exclusively', 'The Supreme Court of India', 'The British Parliament'],
        correctIndex: 0,
        explanation: 'Section 6(2) empowered the Constituent Assembly of each dominion to make laws having extra-territorial operation and to repeal any British statute.',
        tag: 'Constitutional History'
      }
    ]
  },

  // =========================================================================
  // 9. INDIA STATE OF FOREST REPORT (ISFR)
  // =========================================================================
  'isfr-forest-report-latest': {
    id: 'isfr-forest-report-latest',
    title: 'India State of Forest Report (ISFR) & Mangrove / Wetland Atlas',
    titleTelugu: 'భారత అటవీ విస్తీర్ణ నివేదిక (ఐఎస్‌ఎఫ్‌ఆర్)',
    issuingAuthority: 'Forest Survey of India (FSI), Ministry of Environment, Forest and Climate Change',
    dateOrYear: 'Biennial Assessment Publication',
    pages: '2 Volumes (National Overview & State-Wise Profiles - 450 Pages)',
    summary: 'The definitive national assessment of forest cover, tree cover, mangrove habitats, growing stock, carbon stocks, and forest fire vulnerabilities across all 28 States and 8 Union Territories using IRS ResourceSat satellite data.',
    pdfFilename: 'india-state-of-forest-report-isfr.pdf',
    sections: [
      {
        numberOrCode: 'National Forest & Tree Cover',
        title: 'Macro Indicators (24.62% Total Green Cover)',
        content: [
          'Total Forest Cover: 7,13,789 sq km, which constitutes 21.71% of the total geographical area of India.',
          'Total Tree Cover: 95,748 sq km, constituting 2.91% of geographical area.',
          'Total Combined Forest & Tree Cover: 8,09,537 sq km (24.62% of geographical area), against the National Forest Policy (1988) target of 33%.',
          'Classification: Very Dense Forest (canopy > 70%), Moderately Dense Forest (canopy 40–70%), Open Forest (canopy 10–40%), Scrub (canopy < 10%).'
        ],
        keyHighlight: 'Current combined green cover is 24.62% against the 33% national policy target.'
      },
      {
        numberOrCode: 'State-Wise Rankings & Gains',
        title: 'Madhya Pradesh & Andhra Pradesh Leadership',
        content: [
          'Largest Forest Cover by Area: Madhya Pradesh (77,493 sq km), followed by Arunachal Pradesh, Chhattisgarh, Odisha, and Maharashtra.',
          'Highest Forest Cover as % of Geographical Area: Mizoram (84.53%), followed by Arunachal Pradesh (79.33%), Meghalaya, Manipur, and Nagaland.',
          'States Showing Maximum Gain in Forest Cover: Andhra Pradesh (+647 sq km), followed by Telangana (+632 sq km) and Odisha (+537 sq km).'
        ],
        keyHighlight: 'Andhra Pradesh and Telangana ranked #1 and #2 nationally in net forest cover addition.'
      },
      {
        numberOrCode: 'Mangroves & Carbon Stocks',
        title: 'Coastal Protection & Paris Pledge (2.5–3 Gt CO2e)',
        content: [
          'Total Mangrove Cover: 4,992 sq km (0.15% of geographical area); Sunderbans (WB) is largest, followed by Gujarat and Andaman & Nicobar.',
          'National Forest Carbon Stock: Estimated at 7,204 million tonnes; annual increase of ~40 million tonnes.',
          'Vital for fulfilling India’s NDC pledge under the Paris Agreement to create an additional carbon sink of 2.5 to 3.0 billion tonnes of CO2 equivalent by 2030.'
        ],
        keyHighlight: 'India’s total forest carbon stock stands at 7.2 billion tonnes.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Which Indian states recorded the highest net increase in forest cover in recent FSI assessments?',
        answer: 'Andhra Pradesh recorded the highest gain (+647 sq km), followed closely by Telangana (+632 sq km), driven by agroforestry expansion, plantation drives (e.g. Telangana Ku Haritha Haram), and watershed management.',
        examTip: 'High-yield statistical pointer for APPSC, TSPSC, and UPSC Prelims.'
      }
    ],
    testQuestions: [
      {
        id: 'isfr-q1',
        question: 'According to the Forest Survey of India, what canopy density defines a "Very Dense Forest" (VDF)?',
        options: ['Canopy density of 70% and above', 'Canopy density between 40% and 70%', 'Canopy density between 10% and 40%', 'Canopy density below 10%'],
        correctIndex: 0,
        explanation: 'Very Dense Forest is characterized by tree canopy density of 70% and above.',
        tag: 'Environment & Ecology'
      }
    ]
  },

  // =========================================================================
  // 10. CENTRAL WATER COMMISSION: KRISHNA & GODAVARI BASIN HYDROLOGY
  // =========================================================================
  'cwc-river-basins-interlinking': {
    id: 'cwc-river-basins-interlinking',
    title: 'Central Water Commission: Krishna & Godavari Basin Hydrology & River Inter-linking',
    titleTelugu: 'గోదావరి, కృష్ణా నదీ పరీవాహక ప్రాంతాల హైడ్రాలజీ & నదుల అనుసంధానం',
    issuingAuthority: 'Central Water Commission (CWC), Ministry of Jal Shakti, Govt of India',
    dateOrYear: 'CWC Basin Hydrology Reports & NWDA Feasibility Studies',
    pages: 'Technical Water Resources Assessment (280 Pages)',
    summary: 'The primary technical hydrological documentation for the two major river basins of peninsular India. Details 75% dependable water yields, allocation under the Bachawat (KWDT-I) and Brijesh Kumar (KWDT-II) Tribunals, the Godavari Water Disputes Tribunal (GWDT), and National Water Development Agency (NWDA) peninsular interlinking links.',
    pdfFilename: 'cwc-godavari-krishna-hydrology-interlinking.pdf',
    sections: [
      {
        numberOrCode: 'Godavari River Basin',
        title: 'India’s Second Largest Basin (3,12,812 sq km)',
        content: [
          'Originates at Trimbakeshwar (Nashik, Maharashtra); flows 1,465 km into Bay of Bengal through Maharashtra, Telangana, and Andhra Pradesh.',
          'Major tributaries: Pranhita (largest tributary formed by Wardha, Penganga, Wainganga), Indravati, Sabari, Manjira, and Kadam.',
          'Sub-basins and water surplus: Characterized as a water-surplus basin with significant monsoon runoff flowing unutilized into the sea (~3,000 TMC in flood years).'
        ],
        keyHighlight: 'Pranhita carries nearly 34% of the total water volume of the Godavari river.'
      },
      {
        numberOrCode: 'Krishna River Basin',
        title: 'Water-Deficit Basin & Tribunal Allocations',
        content: [
          'Originates near Mahabaleshwar (Maharashtra); flows 1,400 km through Maharashtra, Karnataka, Telangana, and Andhra Pradesh.',
          'Major tributaries: Tungabhadra (largest tributary), Bhima, Ghataprabha, Malaprabha, Musi, and Munneru.',
          'Bachawat Tribunal (KWDT-I 1976): Allocated 2,060 TMC at 75% dependability: Maharashtra (560 TMC), Karnataka (700 TMC), and Unified AP (800 TMC).',
          'Post-2014 Section 89 dispute: AP and Telangana share the 811 TMC undivided quota under ongoing adjudication before KWDT-II.'
        ],
        keyHighlight: 'Krishna basin is highly stressed and water-deficit compared to the surplus Godavari basin.'
      },
      {
        numberOrCode: 'National River Interlinking',
        title: 'Pattiseema, Polavaram & NWDA Peninsular Links',
        content: [
          'Pattiseema Lift Irrigation: Diverts 80 TMC of Godavari flood water into the Krishna delta via the Polavaram Right Main Canal, achieving the first operational river interlink in Southern India.',
          'Polavaram Project (Section 90 of 2014 Act): Provides 80 TMC diversion to Krishna basin, enabling upper riparian states (Karnataka & Maharashtra) to claim corresponding upstream quotas under KWDT.',
          'NWDA Peninsular Links: Godavari (Inchampalli) – Krishna (Nagarjunasagar), Godavari (Polavaram) – Krishna (Vijayawada), and Krishna (Almatti) – Pennar.'
        ],
        keyHighlight: 'Polavaram enables inter-basin transfer of 80 TMC from Godavari to Krishna.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What is the strategic rationale behind transferring surplus Godavari waters into the Krishna basin?',
        answer: 'The Godavari basin has surplus monsoon discharge that discharges into the sea, whereas the Krishna basin is severely water-deficit and drought-prone in its middle and lower reaches (Rayalaseema and South Telangana). Interlinking diverts surplus Godavari water to stabilize the Krishna delta, freeing upstream Krishna water for drought-affected uplands.',
        examTip: 'High-yield conceptual hook for APPSC Paper-V, TSPSC Paper-IV, and UPSC GS-1/GS-3.'
      }
    ],
    testQuestions: [
      {
        id: 'cwc-q1',
        question: 'Which is the largest tributary of the Godavari river by discharge volume?',
        options: ['Pranhita River', 'Indravati River', 'Manjira River', 'Sabari River'],
        correctIndex: 0,
        explanation: 'The Pranhita River (combining Penganga, Wardha, and Wainganga) is the largest tributary of the Godavari, contributing approximately 34% of its discharge.',
        tag: 'Indian Geography'
      }
    ]
  },

  // =========================================================================
  // 11. WILDLIFE (PROTECTION) AMENDMENT ACT, 2022
  // =========================================================================
  'wildlife-protection-act-2022': {
    id: 'wildlife-protection-act-2022',
    title: 'Wildlife (Protection) Amendment Act, 2022',
    titleTelugu: 'వన్యప్రాణి (సంరక్షణ) సవరణ చట్టం, 2022',
    issuingAuthority: 'Ministry of Environment, Forest and Climate Change / Gazette of India',
    dateOrYear: 'Act No. 18 of 2022 / Effective April 2023',
    pages: '45 Sections Statutory Amendment',
    summary: 'The most comprehensive structural amendment to India’s wildlife protection architecture in fifty years. Rationalized the schedules from VI to IV, operationalized domestic legal enforcement of CITES (Convention on International Trade in Endangered Species), regulated invasive alien species, and elevated penal sanctions.',
    pdfFilename: 'wildlife-protection-amendment-act-2022.pdf',
    sections: [
      {
        numberOrCode: 'Schedule Rationalization',
        title: 'Reduction from 6 Schedules to 4 Schedules',
        content: [
          'Schedule I: Highest level of statutory protection for endangered animal species (Tiger, Elephant, Lion, Great Indian Bustard, Gangetic Dolphin).',
          'Schedule II: Animal species requiring general protection (less endangered mammals, reptiles, birds).',
          'Schedule III: Protected plant species (Blue Vanda, Pitcher Plant, Red Vanda, Ladies Slipper Orchid).',
          'Schedule IV: Specimens of flora and fauna listed in Appendices of CITES (new statutory enforcement schedule).',
          'Abolished the separate "Vermin" schedule (Schedule V); Central Government now directly notifies vermin species for specified areas and durations under Section 62.'
        ],
        keyHighlight: 'Eliminated Schedule V (Vermin) and Schedule VI, establishing a streamlined 4-schedule system.'
      },
      {
        numberOrCode: 'CITES Compliance (Chapter VB)',
        title: 'Management Authority & Scientific Authority',
        content: [
          'Designates the Management Authority (empowered to issue export/import permits for CITES species) and the Scientific Authority (monitors international trade impact on wildlife populations).',
          'Every person possessing a live animal species listed in Schedule IV (CITES Appendix) must obtain a registration certificate from the Chief Wildlife Warden.'
        ],
        keyHighlight: 'Provides domestic legal teeth to India’s obligations under the CITES treaty.'
      },
      {
        numberOrCode: 'Invasive Alien Species & Penalties',
        title: 'Section 62A & Enhanced Penal Sanctions',
        content: [
          'Section 62A: Empowers Central Government to prohibit or regulate the import, trade, and possession of invasive alien species that threaten native biodiversity.',
          'Substantial increase in general penalties: General fine increased from ₹25,000 to ₹1,00,000; fine for offenses related to Schedule I species increased from ₹10,000 to minimum ₹25,000.'
        ],
        keyHighlight: 'First explicit statutory recognition and regulation of invasive alien species in Indian law.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'How did the Wildlife (Protection) Amendment Act, 2022 restructure the legal regime governing "Vermin" animals?',
        answer: 'The 2022 Amendment completely deleted the erstwhile Schedule V (which specifically listed vermin species like common crows, fruit bats, and rats). Instead, under amended Section 62, the Central Government is empowered to declare any wild animal (other than Schedule I species) as vermin for a specified area and time period via notification.',
        examTip: 'High-probability question for UPSC Environment and State PSCs.'
      }
    ],
    testQuestions: [
      {
        id: 'wpa-q1',
        question: 'Under the Wildlife (Protection) Amendment Act 2022, which schedule is dedicated exclusively to specimens of wild animal and plant species listed in CITES appendices?',
        options: ['Schedule IV', 'Schedule I', 'Schedule II', 'Schedule III'],
        correctIndex: 0,
        explanation: 'Schedule IV was newly dedicated to species listed in the Appendices of CITES.',
        tag: 'Environmental Law'
      }
    ]
  },

  // =========================================================================
  // 12. ISRO SPACE MISSIONS & EXPLORATION DOSSIER
  // =========================================================================
  'isro-space-missions-roadmap': {
    id: 'isro-space-missions-roadmap',
    title: 'ISRO Space Exploration Dossier (Gaganyaan, Chandrayaan & SSLV)',
    titleTelugu: 'ఇస్రో అంతరిక్ష యాత్రల సమగ్ర నివేదిక (గగన్‌యాన్, చంద్రయాన్ & ఎస్ఎస్ఎల్వీ)',
    issuingAuthority: 'Department of Space, Government of India / ISRO',
    dateOrYear: 'National Space Policy 2023 & Mission Briefs',
    pages: 'Official Space Exploration Dossier (180 Pages)',
    summary: 'The technical and strategic dossier covering India’s flagship space exploration programs: Gaganyaan human spaceflight, Chandrayaan-3 lunar south pole landing, Aditya-L1 solar observation, Small Satellite Launch Vehicle (SSLV), and privatization under IN-SPACe.',
    pdfFilename: 'isro-space-missions-dossier.pdf',
    sections: [
      {
        numberOrCode: 'Gaganyaan Programme',
        title: 'India’s Maiden Human Spaceflight (400 km LEO)',
        content: [
          'Objective: Demonstrate indigenous human spaceflight capability by launching a 3-member crew to a 400 km Low Earth Orbit (LEO) for a 3-day mission and returning safely to Indian waters.',
          'Launch Vehicle: Human-Rated LVM3 (HLVM3) equipped with Crew Escape System (CES) for emergency crew extraction.',
          'Critical Technologies: Environmental Control & Life Support System (ECLSS), crew module re-entry heat shield (1,600°C), and humanoid robot "Vyommitra" for uncrewed qualification flights.'
        ],
        keyHighlight: 'India will become the 4th nation (after USSR/Russia, USA, and China) to send humans into space indigenously.'
      },
      {
        numberOrCode: 'Chandrayaan & Aditya-L1',
        title: 'Lunar South Pole & Sun-Earth L1 Halo Orbit',
        content: [
          'Chandrayaan-3 (August 23, 2023): Historic landing near the lunar south pole (Shiv Shakti Point); Vikram lander and Pragyan rover confirmed sulfur presence and lunar soil thermophysical properties.',
          'National Space Day: August 23 declared National Space Day to commemorate the soft-landing.',
          'Aditya-L1 (January 2024): Placed in a halo orbit around the Sun-Earth Lagrange Point 1 (L1, 1.5 million km away) with 7 payloads (VELC, SUIT) to continuously observe the solar corona, solar flares, and space weather without eclipse.'
        ],
        keyHighlight: 'First nation to achieve soft-landing in the lunar south polar region.'
      },
      {
        numberOrCode: 'Launch Vehicle Fleet & IN-SPACe',
        title: 'SSLV, LVM3 & Indian Space Policy 2023',
        content: [
          'Small Satellite Launch Vehicle (SSLV): 3-stage all-solid rocket carrying up to 500 kg into 500 km planar orbit; rapid integration within 72 hours with minimal launch pad infrastructure.',
          'Indian Space Policy 2023: Delineated roles: (1) IN-SPACe (autonomous single-window regulator for private entities), (2) NewSpace India Limited (NSIL - commercial production arm), (3) ISRO (focused on advanced R&D and exploration missions).'
        ],
        keyHighlight: 'IN-SPACe opened space manufacturing, satellite constellations, and private launch pads to Indian space startups.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What is the unique strategic advantage of placing the Aditya-L1 satellite in a Halo Orbit around Lagrange Point 1 (L1)?',
        answer: 'At Lagrange Point 1 (L1), the gravitational pull of the Sun and the Earth equals the centripetal force required for a small body to move with them. This allows the satellite to hover in a stable position with minimal fuel consumption and provides an uninterrupted view of the Sun without any occultation or eclipses.',
        examTip: 'High-scoring conceptual point in GS-3 Science & Technology.'
      }
    ],
    testQuestions: [
      {
        id: 'isro-q1',
        question: 'Which humanoid robot was developed by ISRO to perform test flights simulating human parameters prior to the crewed Gaganyaan mission?',
        options: ['Vyommitra', 'Pragyan', 'Mitra', 'Vyomanaut'],
        correctIndex: 0,
        explanation: 'Vyommitra is the female humanoid robot developed by ISRO for uncrewed Gaganyaan test missions.',
        tag: 'Science & Technology'
      }
    ]
  },

  // =========================================================================
  // 13. INDIA SEMICONDUCTOR MISSION (ISM) & CRITICAL MINERALS
  // =========================================================================
  'india-semiconductor-mission-ism': {
    id: 'india-semiconductor-mission-ism',
    title: 'India Semiconductor Mission (ISM) & Critical Minerals Strategy',
    titleTelugu: 'భారత సెమీకండక్టర్ మిషన్ & కీలక ఖనిజాల వ్యూహం',
    issuingAuthority: 'Ministry of Electronics and Information Technology (MeitY), Govt of India',
    dateOrYear: 'National Semicon Program (₹76,000 Crore)',
    pages: 'Policy Framework & Guidelines (110 Pages)',
    summary: 'The strategic initiative to establish a self-reliant semiconductor wafer fabrication, packaging (ATMP/OSAT), and chip design ecosystem in India, coupled with the Ministry of Mines Critical Minerals Strategy to secure rare earth elements and lithium supply chains.',
    pdfFilename: 'india-semiconductor-mission-strategy.pdf',
    sections: [
      {
        numberOrCode: 'ISM Fiscal Incentive Architecture',
        title: '50% Fiscal Support Across All Segments',
        content: [
          'Uniform 50% capital subsidy from Central Government on pari-passu basis for: (1) Silicon Semiconductor Fabs, (2) Display Fabs, (3) Compound Semiconductors & Silicon Photonics, (4) Assembly, Testing, Marking and Packaging (ATMP) / OSAT facilities.',
          'Complementary state government capital incentives (typically 20% to 25%), bringing total public capital support to ~70%.',
          'Approved projects: Micron ATMP plant (Sanand, Gujarat), Tata Electronics-PSMC wafer fab (Dholera, Gujarat), Tata OSAT facility (Jagiroad, Assam), and CG Power-Renesas OSAT (Sanand).'
        ],
        keyHighlight: '₹76,000 crore budgetary outlay providing 50% direct central capital subsidy.'
      },
      {
        numberOrCode: 'Design Linked Incentive (DLI)',
        title: 'Nurturing Indigenous Fabless Startups',
        content: [
          'Provides financial reimbursement of up to 50% of eligible expenditure (subject to ₹15 crore ceiling) for chip design infrastructure (EDA tools, IP cores, prototyping).',
          'Aims to nurture 100 domestic fabless chip design startups and graduate them into global chip intellectual property developers.'
        ],
        keyHighlight: 'Targets high-value chip design intellectual property rather than pure contract manufacturing.'
      },
      {
        numberOrCode: 'Critical Minerals Strategy',
        title: 'Securing Lithium, Cobalt & Rare Earths',
        content: [
          'Ministry of Mines identified 30 Critical Minerals essential for semiconductors, EV batteries, solar PV, and defense electronics.',
          'Offshore Areas Mineral (Development and Regulation) Amendment Act 2023 & Mines and Minerals (MMDR) Amendment Act 2023: De-listed 6 atomic minerals (including Lithium, Beryllium, Titanium) to allow private commercial mining auctions.',
          'KABIL (Khanij Bidesh India Ltd): Joint venture securing lithium brine exploration blocks in Argentina and critical mineral assets in Australia.'
        ],
        keyHighlight: 'Legalized commercial private auction of lithium and critical battery mineral blocks in India.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'Why did the Government of India amend the MMDR Act in 2023 to de-list Lithium from the atomic minerals schedule?',
        answer: 'Previously, Lithium was classified as an atomic mineral under Part B of the First Schedule of the MMDR Act, which legally prohibited private mining and restricted exploration exclusively to government PSUs. De-listing lithium allowed the Ministry of Mines to auction commercial mining concessions to private entities, accelerating extraction of domestic lithium reserves discovered in Reasi (J&K) and Chhattisgarh.',
        examTip: 'High-yield intersection of GS-3 Economy and Science & Tech.'
      }
    ],
    testQuestions: [
      {
        id: 'ism-q1',
        question: 'What percentage of fiscal support on capital expenditure is provided by the Central Government under the India Semiconductor Mission (ISM) across all fab and ATMP/OSAT categories?',
        options: ['50% on pari-passu basis', '25% on pari-passu basis', '75% on pari-passu basis', '30% on pari-passu basis'],
        correctIndex: 0,
        explanation: 'Under the modified Semicon India Programme, the Union Government provides 50% fiscal support on a pari-passu basis for all technology nodes and packaging categories.',
        tag: 'Industrial Policy'
      }
    ]
  },

  // =========================================================================
  // 14. DIGITAL PERSONAL DATA PROTECTION ACT, 2023
  // =========================================================================
  'dpdp-act-2023-statute': {
    id: 'dpdp-act-2023-statute',
    title: 'Digital Personal Data Protection (DPDP) Act, 2023',
    titleTelugu: 'డిజిటల్ వ్యక్తిగత డేటా రక్షణ చట్టం, 2023',
    issuingAuthority: 'Ministry of Law and Justice / MeitY, Govt of India',
    dateOrYear: 'Act No. 22 of 2023 / Enacted August 2023',
    pages: '44 Sections Statutory Bare Text',
    summary: 'India’s first comprehensive dedicated privacy legislation, enacted following the landmark Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) judgment establishing privacy as a fundamental right under Article 21. Regulates digital personal data processing, consumer consent, cross-border flows, and establishment of the Data Protection Board of India.',
    pdfFilename: 'digital-personal-data-protection-act-2023.pdf',
    sections: [
      {
        numberOrCode: 'Core Taxonomy & Scope',
        title: 'Data Principal, Data Fiduciary & Consent',
        content: [
          'Applies strictly to digital personal data collected online or digitised subsequently. Does not apply to non-personal data or analog paper records.',
          'Data Principal: The individual to whom the personal data relates.',
          'Data Fiduciary: The entity that determines the purpose and means of processing personal data.',
          'Mandatory Notice and Consent: Processing permitted only upon free, specific, informed, unconditional, and unambiguous consent with the option to withdraw consent at any time.'
        ],
        keyHighlight: 'Strictly governs digital personal data processing based on explicit consent notices.'
      },
      {
        numberOrCode: 'Rights & Children Data',
        title: 'Right to Erasure, Correction & Children Safeguards',
        content: [
          'Rights of Data Principals: Right to access information about processed data, right to correction and erasure, right of grievance redressal, and right to nominate an heir.',
          'Children’s Data (Section 9): Mandatory verifiable parental consent before processing data of individuals under 18 years; absolute statutory ban on behavioral tracking, targeted advertisements, or harm to children.'
        ],
        keyHighlight: 'Absolute prohibition on behavioral profiling and targeted ads directed at children.'
      },
      {
        numberOrCode: 'Data Protection Board & Fines',
        title: 'Regulatory Board & Fines up to ₹250 Crore',
        content: [
          'Data Protection Board of India (DPB): Digital quasi-judicial adjudicatory body empowered to investigate data breaches, summon witnesses, and levy financial penalties.',
          'No criminal imprisonment penalties; enforces civil monetary penalties up to ₹250 crore per breach (e.g. failure to implement reasonable security safeguards).',
          'Cross-border Data Transfers: Data can transfer to all jurisdictions except countries specifically blacklisted by Central Government notification (negative-list approach).'
        ],
        keyHighlight: 'Replaced data localization mandates with a flexible negative-list approach for international data transfers.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'How does the DPDP Act 2023 regulate cross-border transfer of digital personal data?',
        answer: 'Unlike earlier drafts that mandated strict physical data localization (storing a copy inside India), the DPDP Act 2023 adopts a "negative-list" or blacklisting approach. Data fiduciaries can transfer personal data outside India to any foreign territory unless the Central Government explicitly notifies that country on a restricted transfer blacklist.',
        examTip: 'High-yield comparison point with European Union GDPR.'
      }
    ],
    testQuestions: [
      {
        id: 'dpdp-q1',
        question: 'Under the Digital Personal Data Protection Act, 2023, what is the maximum financial penalty that can be levied by the Data Protection Board for failure to prevent a personal data breach?',
        options: ['Up to ₹250 Crore', 'Up to ₹100 Crore', 'Up to ₹500 Crore', 'Up to ₹50 Crore'],
        correctIndex: 0,
        explanation: 'Section 33 and the Schedule of the DPDP Act specify a maximum penalty of up to ₹250 crore for failure to take reasonable security safeguards to prevent data breaches.',
        tag: 'Data Privacy'
      }
    ]
  },

  // =========================================================================
  // 15. SECOND ARC (12TH REPORT): CITIZEN CENTRIC ADMINISTRATION
  // =========================================================================
  'arc2-citizen-centric-admin': {
    id: 'arc2-citizen-centric-admin',
    title: '2nd ARC 12th Report: Citizen Centric Administration & Sevottam Framework',
    titleTelugu: 'రెండవ పరిపాలనా సంస్కరణల కమిషన్ 12వ నివేదిక: పౌర కేంద్ర పరిపాలన & సేవోత్తమ్ నమూనా',
    issuingAuthority: 'Department of Administrative Reforms and Public Grievances (DARPG), Govt of India',
    dateOrYear: 'February 2009',
    pages: '260 Pages Official Report',
    summary: 'The administrative master-document on participatory governance, public grievance mechanisms, statutory citizen charters, and service quality benchmarking through the Sevottam framework.',
    pdfFilename: 'second-arc-12th-report-citizen-centric.pdf',
    sections: [
      {
        numberOrCode: 'Citizen’s Charters',
        title: 'From Decorative Planks to Statutory Enforceability',
        content: [
          'Evaluated why Citizen’s Charters in India failed: lack of consultation with civil society, unrealistic timelines, no compensatory penalty for failure, and absence of grievance redressal backing.',
          'Recommended making Citizen’s Charters legally enforceable with independent audit by third-party civil society institutions.',
          'Mandatory compensatory penalty paid to the citizen for unjustified administrative delays in service delivery.'
        ],
        keyHighlight: 'Recommended that Citizen Charters must specify compensatory penalties for bureaucratic delays.'
      },
      {
        numberOrCode: 'Sevottam Model',
        title: 'The 3 Pillars of Public Service Delivery Excellence',
        content: [
          'Pillar 1: Citizen’s Charter Implementation (clear service standards and delivery metrics).',
          'Pillar 2: Public Grievance Redressal (accessible single-window grievance receipt, systemic root-cause analysis, and time-bound disposal).',
          'Pillar 3: Service Delivery Capability (training, institutional infrastructure, and continuous process optimization).'
        ],
        keyHighlight: 'Sevottam serves as the Bureau of Indian Standards (IS 15700) assessment tool for public offices.'
      },
      {
        numberOrCode: 'Social Audit & Consumer Redressal',
        title: 'Institutionalizing Social Accountability Tools',
        content: [
          'Mandatory social audits for all flagship developmental programs and welfare schemes (pioneered in MGNREGA).',
          'Establishment of independent Ombudsmen at the district level for service complaints.',
          'Application of modern ICT tools (e-Governance, CPGRAMS portal) for end-to-end transparent tracking of citizen requests.'
        ],
        keyHighlight: 'Pioneered institutionalization of social audits across all government expenditure.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What are the three core structural pillars of the "Sevottam" model of public service delivery?',
        answer: 'The three pillars are: (1) Effective Implementation of Citizen’s Charters, (2) Public Grievance Redress Mechanism, and (3) Service Delivery Capability and Infrastructure.',
        examTip: 'Essential answer structure for UPSC GS-2 Governance and GS-4 Ethics questions.'
      }
    ],
    testQuestions: [
      {
        id: 'arc12-q1',
        question: 'Which assessment framework was formulated by DARPG to benchmark public service delivery quality across three pillars (Citizen’s Charter, Grievance Redress, and Capability)?',
        options: ['Sevottam Model', 'Karmayogi Framework', 'CPGRAMS Protocol', 'PRAGATI Platform'],
        correctIndex: 0,
        explanation: 'The Sevottam model is the service quality assessment framework designed by the 2nd ARC and DARPG.',
        tag: 'Governance'
      }
    ]
  },

  // =========================================================================
  // 16. NOLAN COMMITTEE SEVEN PRINCIPLES OF PUBLIC LIFE
  // =========================================================================
  'nolan-committee-principles': {
    id: 'nolan-committee-principles',
    title: 'Nolan Committee Seven Principles of Public Life & Civil Service Conduct Standards',
    titleTelugu: 'నోలన్ కమిటీ ప్రజా జీవన 7 సూత్రాలు & సివిల్ సర్వీస్ ప్రవర్తనా నియమావళి',
    issuingAuthority: 'UK Committee on Standards in Public Life / DoPT Benchmark',
    dateOrYear: 'First Report (Lord Nolan) & Central Civil Services Rules 1964',
    pages: 'Ethical Standards Digest (95 Pages)',
    summary: 'The universal ethical benchmark for public servants and holders of public office worldwide. Chaired by Lord Nolan in 1995, formulating the seven cardinal principles synthesized with India’s Central Civil Services (Conduct) Rules 1964 and All India Services (Conduct) Rules 1968.',
    pdfFilename: 'nolan-committee-ethical-standards.pdf',
    sections: [
      {
        numberOrCode: 'The 7 Cardinal Principles',
        title: 'Selflessness, Integrity, Objectivity & Accountability',
        content: [
          '1. Selflessness: Holders of public office should act solely in terms of the public interest; never for financial or material gains for themselves, family, or friends.',
          '2. Integrity: Must avoid placing themselves under any financial or other obligation to outside individuals or organizations that might seek to influence them.',
          '3. Objectivity: In carrying out public business, including public appointments, awarding contracts, or recommending rewards, decisions must be made strictly on merit and verifiable evidence.',
          '4. Accountability: Holders of public office are accountable for their decisions and actions to the public and must submit themselves to whatever scrutiny is appropriate to their office.'
        ],
        keyHighlight: 'Defines the foundational ethical compass for discretionary administrative authority.'
      },
      {
        numberOrCode: 'Principles 5–7',
        title: 'Openness, Honesty & Leadership',
        content: [
          '5. Openness: Decisions should be transparent; reasons should be given for actions, and information should be restricted only when the wider public interest clearly demands.',
          '6. Honesty: Public servants have a duty to declare any private interests relating to their public duties and take steps to resolve conflicts of interest to protect the public interest.',
          '7. Leadership: Holders of public office should promote and support these principles by leadership and example.'
        ],
        keyHighlight: 'Integrates conflict of interest disclosures with personal leadership by example.'
      },
      {
        numberOrCode: 'Application in Civil Services',
        title: 'AIS Rules 1968 (Amended 2014)',
        content: [
          'Department of Personnel and Training (DoPT) amended All India Services Conduct Rules in 2014 to formally codify these principles: High ethical standards, integrity, political neutrality, empathy towards weaker sections, and responsiveness to citizens.'
        ],
        keyHighlight: 'Formally codified into Rule 3 of All India Services (Conduct) Rules in 2014.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'How is the principle of "Objectivity" tested in discretionary administrative decision-making?',
        answer: 'Objectivity demands that public officials make choices based entirely on verifiable empirical data, legal statutes, and professional merit, completely detached from subjective bias, political prejudice, nepotism, or communal affiliations.',
        examTip: 'Quote the Nolan principle of Objectivity when resolving GS-4 procurement and recruitment case studies.'
      }
    ],
    testQuestions: [
      {
        id: 'nolan-q1',
        question: 'Which of the following is NOT one of the official Seven Principles of Public Life formulated by the Nolan Committee?',
        options: ['Profitability', 'Selflessness', 'Objectivity', 'Leadership'],
        correctIndex: 0,
        explanation: 'Profitability is not a principle; the seven principles are Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty, and Leadership.',
        tag: 'Ethics & Integrity'
      }
    ]
  },

  // =========================================================================
  // 17. TELUGU AKADEMI: HISTORY OF ANDHRA & SRI BAGH PACT 1937
  // =========================================================================
  'ap-history-telugu-akademi': {
    id: 'ap-history-telugu-akademi',
    title: 'Telugu Akademi: History & Culture of Andhra Pradesh & Sri Bagh Pact 1937',
    titleTelugu: 'తెలుగు అకాడమీ: ఆంధ్రుల సమగ్ర చరిత్ర & శ్రీభాగ్ ఒప్పందం 1937',
    issuingAuthority: 'Telugu Akademi, Government of Andhra Pradesh',
    dateOrYear: 'Official Prescribed Academic Standard',
    pages: '480 Pages State Syllabus Masterwork',
    summary: 'The authoritative academic text prescribed by APPSC for General Studies and State History papers. Covers dynastic chronologies (Satavahanas, Ikshvakus, Eastern Chalukyas, Kakatiyas, Reddi kingdoms, Vijayanagara), socio-religious reform awakening (Kandukuri Veeresalingam), Sri Bagh Pact 1937, Potti Sreeramulu martyrdom, and 1953 Andhra State formation.',
    pdfFilename: 'telugu-akademi-andhra-history-sribagh.pdf',
    sections: [
      {
        numberOrCode: 'Satavahanas to Vijayanagara',
        title: 'Dynastic Chronology & Cultural Golden Age',
        content: [
          'Satavahana administration: Kotilingala and Dhanyakataka (Amaravati) capitals; maritime trade via Motupalli and Ghantasala ports; patronage of Prakrit (Gathasaptasati by King Hala).',
          'Eastern Chalukyas of Vengi: Gunaga Vijayaditya; Raja Raja Narendra’s patronage of Nannaya Bhattaraka (Adikavi) initiating the Telugu Mahabharata translation.',
          'Vijayanagara Empire: Sri Krishnadevaraya (1509–1529); author of Amuktamalyada; Ashtadiggajas in Bhuvana Vijayam; Rayalaseema hydraulic tank networks.'
        ],
        keyHighlight: 'The primary text cited by APPSC for establishing historical facts and epigraphical dates.'
      },
      {
        numberOrCode: 'Modern Andhra Awakening',
        title: 'Kandukuri, Vande Mataram & Freedom Movement',
        content: [
          'Kandukuri Veeresalingam Pantulu (Father of Modern Andhra Awakening): First widow remarriage in Rajahmundry (1881), girls schools, and literary reform through journal "Viveka Vardhani".',
          'Vande Mataram Movement in Andhra (1907): Bipin Chandra Pal’s tour of Coastal Andhra; Rajahmundry College incident involving Mark Hunter and students; Andhra National Council of Education.',
          'Alluri Sitarama Raju: Rampa Rebellion (1922–1924) against Madras Forest Act 1882; guerrilla warfare in Visakhapatnam and Godavari agency tracts.'
        ],
        keyHighlight: 'Kandukuri’s socio-religious reforms initiated modern public consciousness in Telugu speaking areas.'
      },
      {
        numberOrCode: 'Sri Bagh Pact (16 Nov 1937)',
        title: 'Historic Inter-Regional Accord for Rayalaseema Parity',
        content: [
          'Signed at "Sri Bagh" (residence of Kasinathuni Nageswara Rao in Madras) between leaders of Coastal Andhra and Rayalaseema (K. Koti Reddy, Kalluri Subba Rao, Kadapa Koti Reddy).',
          'University Clause: Demanded equal educational facilities and establishment of a University centre in Rayalaseema (led to Sri Venkateswara University 1954).',
          'Irrigation Clause: Demanded priority allocation of Krishna and Tungabhadra waters for Rayalaseema famine mitigation for 10 years before Coastal Andhra canal extensions.',
          'Capital & High Court Choice: Rayalaseema granted the choice to select either the Capital City or the High Court (Kurnool became capital in 1953, Guntur got High Court).'
        ],
        keyHighlight: 'The Sri Bagh Pact remains the seminal constitutional benchmark for regional equity within Andhra Pradesh.'
      }
    ],
    queriesAndAnswers: [
      {
        question: 'What were the four primary clauses agreed upon in the historic Sri Bagh Pact of 1937?',
        answer: 'The four clauses were: (1) University and Education parity in Rayalaseema, (2) Priority for Irrigation and famine mitigation in Rayalaseema (Krishna/Tungabhadra waters), (3) Legislative representation parity, and (4) Decentralization of power granting Rayalaseema the choice between the Capital City and the High Court.',
        examTip: 'Compulsory question for APPSC Mains Paper-I and Paper-V.'
      }
    ],
    testQuestions: [
      {
        id: 'sbp-q1',
        question: 'At whose residence in Madras was the historic Sri Bagh Pact signed on 16 November 1937 between leaders of Coastal Andhra and Rayalaseema?',
        options: ['Kasinathuni Nageswara Rao', 'Tanguturi Prakasam Pantulu', 'Kalluri Subba Rao', 'Potti Sreeramulu'],
        correctIndex: 0,
        explanation: 'The pact was signed at "Sri Bagh", the Madras residence of Kasinathuni Nageswara Rao (founder of Andhra Patrika and Amrutanjan).',
        tag: 'Andhra History'
      }
    ]
  }
};
