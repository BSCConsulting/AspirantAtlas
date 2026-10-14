import { CurrentAffairsItem } from '../types';

export const CURRENT_AFFAIRS_ITEMS: CurrentAffairsItem[] = [
  {
    id: 'ca-sub-classification-sc-st',
    title: 'Supreme Court 7-Judge Bench Verdict on Sub-Classification of SCs and STs',
    titleTelugu: 'ఎస్సీ, ఎస్టీ ఉపవర్గీకరణపై సుప్రీంకోర్టు 7-న్యాయమూర్తుల రాజ్యాంగ ధర్మాసనం తీర్పు',
    date: 'August 2024 / Updated 2025',
    source: 'The Hindu & LiveLaw Analysis',
    linkedNodeId: 'polity-constitution-framework',
    linkedTopicTitle: 'Constitutional Framework & Fundamental Rights',
    examScope: ['upsc', 'appsc', 'tspsc'],
    summary: 'A 7-judge Constitution Bench overruled the 2004 E.V. Chinnaiah judgment, holding that state governments are constitutionally empowered to create sub-classifications within Scheduled Castes and Scheduled Tribes for granting targeted reservation quotas, provided there is quantifiable empirical data.',
    highYieldPoints: [
      'Overruled 5-judge bench decision in E.V. Chinnaiah v. State of Andhra Pradesh (2004).',
      'Held that Article 341 does not create an indivisible "homogenous monolith" incapable of inner classification.',
      'Affirmed that Article 15(4) and 16(4) allow preferential affirmative action within reserved categories.',
      'Mandatory caveat: States cannot allocate 100% quota to any single sub-caste or act arbitrarily without empirical socio-economic data.'
    ],
    prelimsPointer: 'Under Article 341, the President notifies the list of Scheduled Castes; however, states can sub-classify within that list without modifying the presidential notification itself.',
    mainsQuestionHook: '"Sub-classification within backward classes is an extension of substantive equality rather than a compromise with it." Critically evaluate in the light of recent constitutional jurisprudence.'
  },
  {
    id: 'ca-delimitation-finance-commission',
    title: '16th Finance Commission Terms of Reference and the 2026 Delimitation Dilemma',
    titleTelugu: '16వ ఆర్థిక సంఘం నిబంధనలు & 2026 నియోజకవర్గాల పునర్విభజన సవాళ్లు',
    date: 'January 2025',
    source: 'Indian Express & PIB',
    linkedNodeId: 'polity-executive-legislature',
    linkedTopicTitle: 'Parliament, Federal Dynamics & State Executives',
    examScope: ['upsc', 'appsc', 'tspsc'],
    summary: 'The prospective end of the seat-freeze after the 84th Constitutional Amendment (2026) has sparked intense federal debates between southern states (which achieved population stabilization through progressive policy) and high-fertility northern states over parliamentary representation and horizontal revenue devolution.',
    highYieldPoints: [
      '84th Constitutional Amendment froze the total Lok Sabha and Rajya Sabha seats based on 1971 Census until after 2026.',
      'Southern states (AP, Telangana, Tamil Nadu, Kerala, Karnataka) fear a significant drop in their proportional political leverage in Parliament.',
      '16th Finance Commission headed by Dr. Arvind Panagariya must balance demographic performance weightage with equity and income distance criteria.',
      'Possible solutions discussed: Strengthening Rajya Sabha parity, raising the weight of demographic performance in devolution formula.'
    ],
    prelimsPointer: 'Under Article 82 and Article 170, Parliament enacts a Delimitation Act after every census, setting up a Delimitation Commission whose orders cannot be called into question in any court of law.',
    mainsQuestionHook: '"The impending post-2026 delimitation poses a structural test for Indian cooperative federalism." Discuss institutional safeguards that can balance democratic proportionality with demographic justice.'
  },
  {
    id: 'ca-ap-reorganization-polavaram-capital',
    title: 'AP Reorganisation Act Special Financial Package: Polavaram & Amaravati Reconstruction',
    titleTelugu: 'ఏపీ పునర్విభజన చట్టం ప్రత్యేక ఆర్థిక ప్యాకేజీ: పోలవరం & అమరావతి పునర్నిర్మాణం',
    date: 'Union Budget & Cabinet Approvals',
    source: 'Andhra Pradesh Socio-Economic Survey & Union Budget Documents',
    linkedNodeId: 'appsc-bifurcation-act',
    linkedTopicTitle: 'AP Reorganisation Act 2014 & Bifurcation Challenges',
    examScope: ['appsc'],
    summary: 'The Union Cabinet sanctioned key revised cost estimates for the Polavaram National Irrigation Project and facilitated multilateral funding support (World Bank & ADB) for the development of Amaravati Greenfield Capital city under Section 46 and 90 of the AP Reorganisation Act 2014.',
    highYieldPoints: [
      'Section 90 of AP Reorganisation Act 2014 declares Polavaram as a National Irrigation Project executed by the Centre.',
      'Phase-1 revised cost estimate of ₹12,157 crore approved for completing diaphragm wall and spillway works up to 41.15m contour.',
      'Section 46(2) and Section 46(3) mandates Central assistance to backward areas (Rayalaseema & North Coastal AP).',
      'Section 94 guarantees tax incentives and assistance for greenfield capital development.'
    ],
    prelimsPointer: 'Polavaram Project is built on River Godavari, located near Ramayyapeta village in Eluru district, Andhra Pradesh.',
    mainsQuestionHook: '"Even after a decade, the core socio-economic and infrastructural commitments of the AP Reorganisation Act 2014 remain pivotal to the state\'s fiscal revival." Critically analyze.'
  },
  {
    id: 'ca-telangana-caste-survey-kaleshwaram',
    title: 'Telangana Comprehensive Socio-Economic, Employment, Political and Caste Survey (SEEPCS)',
    titleTelugu: 'తెలంగాణ సమగ్ర సామాజిక, ఆర్థిక, ఉపాధి, రాజకీయ మరియు కుల సర్వే (SEEPCS)',
    date: 'November 2024 - February 2025',
    source: 'Telangana State Planning Board & Deccan Chronicle',
    linkedNodeId: 'tspsc-telangana-movement',
    linkedTopicTitle: 'Telangana Movement, State Formation & Telangana Economy',
    examScope: ['tspsc'],
    summary: 'The Government of Telangana executed a historic door-to-door socio-economic survey covering over 1.15 crore households to build an empirical database for targeted welfare, local body reservations, and equitable resource allocation.',
    highYieldPoints: [
      'Administered through 80,000+ enumerators covering 56 specific indicators across household finances, education, landholdings, and occupation.',
      'Addresses Supreme Court\'s "triple test" condition mandated in Vikas Kishanrao Gawali v. State of Maharashtra for OBC political quotas.',
      'Feeds into the Telangana State Commission for Backward Classes (BC Commission) mandate.',
      'Aims to calibrate affirmative action and state resource allocation based on verifiable socio-economic backwardness.'
    ],
    prelimsPointer: 'The "Triple Test" for local body quotas requires: (1) dedicated commission for empirical inquiry, (2) specification of reservation proportion, (3) aggregate quota not exceeding 50% ceiling.',
    mainsQuestionHook: '"Empirical caste surveys serve as vital governance instruments for evidence-based policymaking rather than mere political exercises." Discuss in the context of Telangana.'
  },
  {
    id: 'ca-governor-assent-timeline',
    title: 'Supreme Court Ruling on Governor’s Power to Withhold Assent to Bills (Article 200)',
    titleTelugu: 'ఆర్టికల్ 200 కింద బిల్లుల ఆమోదంపై గవర్నర్ అధికార పరిధి - సుప్రీంకోర్టు మార్గదర్శకాలు',
    date: 'Supreme Court Constitutional Bench Verdict',
    source: 'The Hindu & Supreme Court Reports',
    linkedNodeId: 'polity-executive-legislature',
    linkedTopicTitle: 'Parliament, Federal Dynamics & State Executives',
    examScope: ['upsc', 'appsc', 'tspsc'],
    summary: 'In petitions filed by Punjab, Tamil Nadu, and Kerala, the Supreme Court ruled that a Governor cannot sit indefinitely on bills passed by elected state legislatures. If a Governor withholds assent, the bill must be returned "as soon as possible" to the Assembly for reconsideration.',
    highYieldPoints: [
      'Article 200 gives the Governor 4 options: (1) grant assent, (2) withhold assent, (3) reserve for President, (4) return for reconsideration.',
      'Court clarified: Withholding assent without returning the bill to the legislature is unconstitutional and subverts parliamentary democracy.',
      'Once a reconsidered bill is passed again by the legislature (with or without amendments), the Governor has no discretion and MUST grant assent.',
      'Reiterated Shamsher Singh (1974) doctrine: Governor is a constitutional figurehead who must act on aid and advice of the Council of Ministers.'
    ],
    prelimsPointer: 'A Money Bill cannot be returned by the Governor to the State Legislature for reconsideration under Article 200.',
    mainsQuestionHook: '"The office of the Governor was envisioned as an institutional bridge of federal harmony, but has frequently become a friction point in Union-State relations." Analyze recent judicial directives.'
  },
  {
    id: 'ca-rbi-monetary-policy-inflation-framework',
    title: 'RBI Flexible Inflation Targeting Framework: Food Volatility vs Core CPI Debate',
    titleTelugu: 'ఆర్బీఐ ద్రవ్యోల్బణ నియంత్రణ ముసాయిదా: ఆహార ద్రవ్యోల్బణం vs కోర్ సిపిఐ సమీక్ష',
    date: 'Economic Survey & RBI Bulletins',
    source: 'RBI Monetary Policy Report & Ministry of Finance',
    linkedNodeId: 'econ-macro-fiscal',
    linkedTopicTitle: 'Macroeconomics, Fiscal & Monetary Policies',
    examScope: ['upsc', 'appsc', 'tspsc'],
    summary: 'The Economic Survey prompted a nationwide debate proposing whether India’s inflation targeting framework (4% +/- 2%) should exclude volatile food prices and focus solely on Core CPI, while RBI cautioned that high food inflation unanchors household inflation expectations.',
    highYieldPoints: [
      'Flexible Inflation Targeting (FIT) adopted under RBI Act Section 45ZB in 2016 targeting headline CPI (4% +/- 2%).',
      'Food and beverages comprise ~45.86% of the current CPI basket, making monetary policy sensitive to supply-side climate shocks.',
      'Headline CPI captures the actual cost-of-living shock felt by vulnerable populations, whereas Core CPI excludes food and fuel.',
      'RBI highlighted that persistent food price spikes spill over into generalized inflation via wage demands and input costs.'
    ],
    prelimsPointer: 'The Monetary Policy Committee (MPC) consists of 6 members: 3 from RBI and 3 appointed by the Central Government, with the RBI Governor holding a casting vote in case of a tie.',
    mainsQuestionHook: '"Is the current CPI-based inflation targeting framework adequate to address supply-chain disruptions in an emerging agrarian economy like India?" Critically evaluate.'
  }
];
