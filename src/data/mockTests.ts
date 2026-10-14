import { MockTest, MockTestQuestion } from '../types';
import { POLITY_MCQS } from './questions/polityMCQs';
import { HISTORY_MCQS } from './questions/historyMCQs';
import { ECONOMY_MCQS } from './questions/economyMCQs';
import { ENVIRONMENT_MCQS } from './questions/environmentMCQs';
import { STATE_SPECIAL_MCQS } from './questions/stateSpecialMCQs';

export const MOCK_TESTS: MockTest[] = [
  // ==========================================
  // SECTIONAL TEST 1: POLITY & CONSTITUTION
  // ==========================================
  {
    id: 'mock-polity-sectional',
    title: 'Polity Sectional: Constitutional Framework, Rights & Executive',
    titleTelugu: 'పాలిటీ సెక్షనల్ టెస్ట్: రాజ్యాంగ నిర్మాణం, హక్కులు & కార్యనిర్వాహక శాఖ',
    exam: 'all',
    type: 'sectional',
    subject: 'Indian Polity & Governance',
    durationMinutes: 30,
    totalMarks: 50,
    negativeMarkingRatio: 0.33,
    questions: [
      {
        id: 'mps-q1',
        question: 'Under which Article of the Constitution can the Supreme Court issue writs for the enforcement of Fundamental Rights?',
        questionTelugu: 'ప్రాథమిక హక్కుల అమలు కోసం సుప్రీంకోర్టు ఏ అధికరణం ప్రకారం రిట్లను జారీ చేయగలదు?',
        options: ['Article 32', 'Article 131', 'Article 226', 'Article 136'],
        correctIndex: 0,
        explanation: 'Article 32 guarantees the right to move the Supreme Court for enforcement of Fundamental Rights. Dr. B.R. Ambedkar called it the heart and soul of the Constitution.',
        tag: 'Fundamental Rights',
        difficulty: 'Easy',
        topicId: 'polity-constitution-framework'
      },
      {
        id: 'mps-q2',
        question: 'Which of the following constitutional amendments made it mandatory for the President to act in accordance with the advice of the Council of Ministers?',
        questionTelugu: 'మంత్రుల మండలి సలహా మేరకు రాష్ట్రపతి వ్యవహరించడాన్ని తప్పనిసరి చేసిన రాజ్యాంగ సవరణ ఏది?',
        options: ['42nd Amendment Act, 1976', '44th Amendment Act, 1978', '52nd Amendment Act, 1985', '91st Amendment Act, 2003'],
        correctIndex: 0,
        explanation: 'The 42nd Amendment Act 1976 made the advice of the Council of Ministers binding on the President. The 44th Amendment 1978 added that the President may require reconsideration once.',
        tag: 'Union Executive',
        difficulty: 'Medium',
        topicId: 'polity-executive-legislature'
      },
      {
        id: 'mps-q3',
        question: 'In which landmark judgment did the Supreme Court lay down guidelines against the arbitrary imposition of President’s Rule under Article 356?',
        questionTelugu: 'ఆర్టికల్ 356 కింద రాష్ట్రపతి పాలనను ఏకపక్షంగా విధించకుండా సుప్రీంకోర్టు మార్గదర్శకాలను జారీ చేసిన చారిత్రక తీర్పు ఏది?',
        options: ['S.R. Bommai v. Union of India (1994)', 'Minerva Mills v. Union of India (1980)', 'Shankari Prasad Case (1951)', 'Golaknath Case (1967)'],
        correctIndex: 0,
        explanation: 'In the S.R. Bommai case (1994), the Supreme Court ruled that Article 356 proclamation is subject to judicial review and floor test is the only legitimate test of legislative majority.',
        tag: 'Federal Dynamics',
        difficulty: 'Medium',
        topicId: 'polity-executive-legislature'
      },
      {
        id: 'mps-q4',
        question: 'The Tenth Schedule (Anti-Defection Law) was added to the Constitution by which Amendment Act?',
        questionTelugu: 'పార్టీ ఫిరాయింపుల నిరోధక చట్టం (10వ షెడ్యూల్) ఏ సవరణ ద్వారా రాజ్యాంగంలో చేర్చబడింది?',
        options: ['44th Amendment Act', '52nd Amendment Act, 1985', '61st Amendment Act', '86th Amendment Act'],
        correctIndex: 1,
        explanation: 'The 52nd Constitutional Amendment Act of 1985 added the Tenth Schedule, laying down disqualification criteria for defection.',
        tag: 'Parliamentary System',
        difficulty: 'Easy',
        topicId: 'polity-executive-legislature'
      },
      {
        id: 'mps-q5',
        question: 'Which committee recommended the establishment of a permanent Inter-State Council under Article 263 of the Constitution?',
        questionTelugu: 'రాజ్యాంగంలోని 263 అధికరణం ప్రకారం శాశ్వత అంతర్-రాష్ట్ర మండలిని ఏర్పాటు చేయాలని సిఫార్సు చేసిన కమిషన్ ఏది?',
        options: ['Sarkaria Commission', 'Punchhi Commission', 'First ARC', 'Rajamannar Committee'],
        correctIndex: 0,
        explanation: 'The Sarkaria Commission on Centre-State Relations (1988) strongly recommended setting up an Inter-State Council, which was established by Presidential Order in 1990.',
        tag: 'Centre-State Relations',
        difficulty: 'Medium',
        topicId: 'polity-executive-legislature'
      },
      {
        id: 'mps-q6',
        question: 'Which of the following is NOT a part of the "Basic Structure" of the Indian Constitution as evolved by the Supreme Court?',
        questionTelugu: 'సుప్రీంకోర్టు తీర్పుల ప్రకారం కింది వాటిలో భారత రాజ్యాంగ "ప్రాథమిక స్వరూపం" లో భాగం కానిది ఏది?',
        options: ['Judicial Review', 'Secularism', 'Parliamentary System', 'Unchecked Parliamentary Supremacy'],
        correctIndex: 3,
        explanation: 'Parliamentary supremacy in India is limited by a written constitution and fundamental rights; unrestricted parliamentary supremacy is not part of basic structure.',
        tag: 'Basic Structure',
        difficulty: 'Medium',
        topicId: 'polity-constitution-framework'
      },
      {
        id: 'mps-q7',
        question: 'Right to Education was inserted into Part III as Article 21A by which Constitutional Amendment?',
        questionTelugu: 'విద్యా హక్కును ఆర్టికల్ 21A గా ఏ రాజ్యాంగ సవరణ ద్వారా ప్రాథమిక హక్కులలో చేర్చారు?',
        options: ['86th Amendment Act, 2002', '91st Amendment Act, 2003', '73rd Amendment Act, 1992', '44th Amendment Act, 1978'],
        correctIndex: 0,
        explanation: 'The 86th Amendment Act 2002 inserted Article 21A providing free and compulsory education to all children of 6 to 14 years.',
        tag: 'Fundamental Rights',
        difficulty: 'Easy',
        topicId: 'polity-constitution-framework'
      },
      {
        id: 'mps-q8',
        question: 'An ordinance promulgated by the President under Article 123 must be approved by Parliament within how much time from its reassembly?',
        questionTelugu: 'ఆర్టికల్ 123 ప్రకారం రాష్ట్రపతి జారీ చేసిన ఆర్డినెన్స్ పార్లమెంట్ తిరిగి సమావేశమైన తర్వాత ఎంత సమయంలోగా ఆమోదం పొందాలి?',
        options: ['6 weeks', '6 months', '30 days', '3 months'],
        correctIndex: 0,
        explanation: 'Under Article 123(2), an ordinance ceases to operate at the expiration of 6 weeks from the reassembly of Parliament unless disapproved earlier.',
        tag: 'Presidential Powers',
        difficulty: 'Medium',
        topicId: 'polity-executive-legislature'
      },
      {
        id: 'mps-q9',
        question: 'Who certifies a Bill as a "Money Bill" before transmitting it to the Rajya Sabha?',
        questionTelugu: 'ఒక బిల్లును "ద్రవ్య బిల్లు" (Money Bill) గా రాజ్యసభకు పంపే ముందు ఎవరు ధృవీకరిస్తారు?',
        options: ['President of India', 'Speaker of the Lok Sabha', 'Finance Minister', 'Chairman of the Rajya Sabha'],
        correctIndex: 1,
        explanation: 'Under Article 110(3), if any question arises whether a Bill is a Money Bill or not, the decision of the Speaker of the House of the People (Lok Sabha) thereon is final.',
        tag: 'Legislative Procedure',
        difficulty: 'Easy',
        topicId: 'polity-executive-legislature'
      },
      {
        id: 'mps-q10',
        question: 'The Pardoning Power of the Governor under Article 161 differs from that of the President under Article 72 because the Governor CANNOT:',
        questionTelugu: 'ఆర్టికల్ 161 కింద గవర్నర్‌కు గల క్షమాభిక్ష అధికారం రాష్ట్రపతి కంటే ఎలా భిన్నంగా ఉంటుంది?',
        options: [
          'Suspend any prison sentence',
          'Pardon a sentence inflicted by a Court Martial (Military Court)',
          'Remit punishment for state law offenses',
          'Commute death sentence to life imprisonment'
        ],
        correctIndex: 1,
        explanation: 'The Governor has no power to pardon sentences inflicted by a Court Martial, nor can the Governor grant absolute pardon for a death sentence (only suspend, remit, or commute).',
        tag: 'Governor Powers',
        difficulty: 'Hard',
        topicId: 'polity-executive-legislature'
      }
    ]
  },

  // ==========================================
  // SECTIONAL TEST 2: MODERN HISTORY & FREEDOM
  // ==========================================
  {
    id: 'mock-history-sectional',
    title: 'Modern History Sectional: 1857 Revolt to 1947 Partition',
    titleTelugu: 'ఆధునిక చరిత్ర సెక్షనల్ టెస్ట్: 1857 తిరుగుబాటు నుండి 1947 స్వాతంత్ర్యం వరకు',
    exam: 'all',
    type: 'sectional',
    subject: 'Modern History',
    durationMinutes: 30,
    totalMarks: 50,
    negativeMarkingRatio: 0.33,
    questions: [
      {
        id: 'mhs-q1',
        question: 'Who coined the "Drain of Wealth" theory exposing the systematic economic exploitation of India under British rule?',
        questionTelugu: 'బ్రిటిష్ పాలనలో భారతదేశ ఆర్థిక దోపిడీని ఎండగడుతూ "సంపద తరలింపు సిద్ధాంతాన్ని" (Drain of Wealth) ప్రతిపాదించినది ఎవరు?',
        options: ['R.C. Dutt', 'Dadabhai Naoroji', 'Gopal Krishna Gokhale', 'M.G. Ranade'],
        correctIndex: 1,
        explanation: 'Dadabhai Naoroji, the Grand Old Man of India, published "Poverty and Un-British Rule in India" formulating the Drain of Wealth thesis.',
        tag: 'Moderate Phase',
        difficulty: 'Easy',
        topicId: 'history-modern-freedom-struggle'
      },
      {
        id: 'mhs-q2',
        question: 'The historic "Surat Split" of the Indian National Congress took place in which year?',
        questionTelugu: 'భారత జాతీయ కాంగ్రెస్ అతివాదులు మరియు మితవాదులుగా చీలిపోయిన చారిత్రక "సూరత్ చీలిక" ఏ సంవత్సరంలో జరిగింది?',
        options: ['1905', '1906', '1907', '1911'],
        correctIndex: 2,
        explanation: 'At the Surat Session in 1907 presided over by Rash Behari Ghosh, ideological differences between Moderates and Extremists culminated in a split.',
        tag: 'Extremist Phase',
        difficulty: 'Easy',
        topicId: 'history-modern-freedom-struggle'
      },
      {
        id: 'mhs-q3',
        question: 'Who was the Viceroy of India when the Partition of Bengal was announced in 1905?',
        questionTelugu: '1905 లో బెంగాల్ విభజన ప్రకటించినప్పుడు భారత వైస్రాయ్ ఎవరు?',
        options: ['Lord Curzon', 'Lord Minto', 'Lord Hardinge', 'Lord Chelmsford'],
        correctIndex: 0,
        explanation: 'Lord Curzon partitioned Bengal on 16 October 1905 under the pretext of administrative efficiency, sparking the Swadeshi movement.',
        tag: 'Swadeshi Movement',
        difficulty: 'Easy',
        topicId: 'history-modern-freedom-struggle'
      },
      {
        id: 'mhs-q4',
        question: 'Which agreement led to the calling off of the Civil Disobedience Movement and participation of Congress in the Second Round Table Conference?',
        questionTelugu: 'శాసనోల్లంఘన ఉద్యమాన్ని తాత్కాలికంగా విరమించి, రెండవ రౌండ్ టేబుల్ సమావేశంలో కాంగ్రెస్ పాల్గొనడానికి దారితీసిన ఒప్పందం ఏది?',
        options: ['Poona Pact', 'Gandhi-Irwin Pact (Delhi Pact, 1931)', 'Lucknow Pact', 'Shimla Deputation'],
        correctIndex: 1,
        explanation: 'The Gandhi-Irwin Pact signed on March 5, 1931 provided for the withdrawal of the movement, release of political prisoners, and participation in the 2nd RTC.',
        tag: 'Gandhian Era',
        difficulty: 'Medium',
        topicId: 'history-modern-freedom-struggle'
      },
      {
        id: 'mhs-q5',
        question: 'During the Quit India Movement in 1942, who operated the famous underground clandestine radio station in Bombay?',
        questionTelugu: '1942 క్విట్ ఇండియా ఉద్యమంలో బొంబాయిలో రహస్య రేడియో కేంద్రాన్ని విజయవంతంగా నిర్వహించిన స్వాతంత్ర్య సమరయోధురాలు ఎవరు?',
        options: ['Aruna Asaf Ali', 'Usha Mehta', 'Sarojini Naidu', 'Sucheta Kripalani'],
        correctIndex: 1,
        explanation: 'Usha Mehta played a pioneering role by establishing the underground Congress Radio that broadcasted patriotic speeches and news throughout the 1942 movement.',
        tag: 'Quit India Movement',
        difficulty: 'Hard',
        topicId: 'history-modern-freedom-struggle'
      },
      {
        id: 'mhs-q6',
        question: 'The Indian National Army (INA) trials were held at which historic venue in 1945–46?',
        questionTelugu: '1945-46 లో ఆజాద్ హింద్ ఫౌజ్ (INA) సైనికుల చారిత్రక విచారణ ఏ ప్రదేశంలో జరిగింది?',
        options: ['Fort William, Calcutta', 'Red Fort, Delhi', 'Aga Khan Palace, Pune', 'Cellular Jail, Andaman'],
        correctIndex: 1,
        explanation: 'The INA trials of Prem Sahgal, Gurbaksh Singh Dhillon, and Shahnawaz Khan were held at the Red Fort in Delhi, triggering massive nationwide nationalist demonstrations.',
        tag: 'INA & Resistance',
        difficulty: 'Medium',
        topicId: 'history-modern-freedom-struggle'
      },
      {
        id: 'mhs-q7',
        question: 'Which commission was appointed to investigate the atrocities of the Jallianwala Bagh massacre of 13 April 1919?',
        questionTelugu: '1919 ఏప్రిల్ 13 నాటి జలియన్‌వాలా బాగ్ దురంతంపై దర్యాప్తు చేయడానికి బ్రిటిష్ ప్రభుత్వం నియమించిన కమిషన్ ఏది?',
        options: ['Hunter Commission', 'Simon Commission', 'Rowlatt Committee', 'Butler Committee'],
        correctIndex: 0,
        explanation: 'The Disorders Inquiry Committee, commonly known as the Hunter Commission, was appointed by the British government to investigate the Jallianwala Bagh massacre.',
        tag: 'Punjab Atrocities',
        difficulty: 'Easy',
        topicId: 'history-modern-freedom-struggle'
      },
      {
        id: 'mhs-q8',
        question: 'Who founded the "Abhinav Bharat" secret revolutionary society in Maharashtra in 1904?',
        questionTelugu: '1904 లో మహారాష్ట్రలో "అభినవ్ భారత్" రహస్య విప్లవ సంస్థను స్థాపించినది ఎవరు?',
        options: ['Vinayak Damodar Savarkar and Ganesh Savarkar', 'Bhagat Singh', 'Sachindra Nath Sanyal', 'Chapekar Brothers'],
        correctIndex: 0,
        explanation: 'V.D. Savarkar and his brother Ganesh Savarkar founded Abhinav Bharat (Young India Society) in 1904, evolving from the Mitra Mela.',
        tag: 'Revolutionary Movement',
        difficulty: 'Medium',
        topicId: 'history-modern-freedom-struggle'
      },
      {
        id: 'mhs-q9',
        question: 'Which mission sent by the British War Cabinet in 1942 proposed "Dominion Status" to India after the end of World War II?',
        questionTelugu: 'రెండవ ప్రపంచ యుద్ధం ముగిసిన తర్వాత భారతదేశానికి "డొమినియన్ హోదా" ఇస్తామని 1942 లో ప్రతిపాదించిన బ్రిటిష్ రాయబార బృందం ఏది?',
        options: ['Cabinet Mission', 'Cripps Mission', 'Simon Commission', 'Wavell Plan'],
        correctIndex: 1,
        explanation: 'Sir Stafford Cripps headed the Cripps Mission in March 1942, whose proposals were rejected by Gandhi as a "post-dated cheque on a crashing bank".',
        tag: 'Constitutional Negotiations',
        difficulty: 'Easy',
        topicId: 'history-modern-freedom-struggle'
      },
      {
        id: 'mhs-q10',
        question: 'The Royal Indian Navy (RIN) Mutiny of February 1946 commenced aboard which naval ratings training ship in Bombay?',
        questionTelugu: 'ఫిబ్రవరి 1946 లో రాయల్ ఇండియన్ నేవీ (RIN) తిరుగుబాటు బొంబాయిలోని ఏ నౌకలో ప్రారంభమైంది?',
        options: ['HMIS Talwar', 'HMIS Vikrant', 'HMIS Mysore', 'HMIS Delhi'],
        correctIndex: 0,
        explanation: 'On February 18, 1946, ratings aboard HMIS Talwar went on a hunger strike protesting against racial discrimination and poor food, snowballing into a massive mutiny.',
        tag: 'Final Phase 1946',
        difficulty: 'Hard',
        topicId: 'history-modern-freedom-struggle'
      }
    ]
  },

  // ==========================================
  // SECTIONAL TEST 3: AP STATE SPECIFIC (APPSC)
  // ==========================================
  {
    id: 'mock-appsc-sectional',
    title: 'APPSC Specialization: AP Reorganisation Act, History & Economy',
    titleTelugu: 'APPSC సెక్షనల్ టెస్ట్: పునర్వ్యవస్థీకరణ చట్టం, ఆంధ్రుల చరిత్ర & ఆర్థిక సర్వే',
    exam: 'appsc',
    type: 'sectional',
    subject: 'AP State Specific',
    durationMinutes: 30,
    totalMarks: 50,
    negativeMarkingRatio: 0.33,
    questions: [
      {
        id: 'aps-q1',
        question: 'Under Section 5 of the AP Reorganisation Act 2014, Hyderabad was designated as the common capital for a period not exceeding how many years?',
        questionTelugu: 'ఏపీ పునర్వ్యవస్థీకరణ చట్టం సెక్షన్ 5 ప్రకారం హైదరాబాదును ఉమ్మడి రాజధానిగా గరిష్టంగా ఎన్ని సంవత్సరాలు నిర్ణయించారు?',
        options: ['5 years', '10 years', '15 years', '20 years'],
        correctIndex: 1,
        explanation: 'Section 5 provided that Hyderabad would be the common capital for both states for a period not exceeding 10 years (which expired on June 2, 2024).',
        tag: 'AP Reorganisation Act',
        difficulty: 'Easy',
        topicId: 'appsc-reorganisation-act-2014'
      },
      {
        id: 'aps-q2',
        question: 'Under Part VI of the AP Reorganisation Act, what is the exact population ratio used for the distribution of public debt and liquid cash balances?',
        questionTelugu: 'ఏపీ పునర్వ్యవస్థీకరణ చట్టం ప్రకారం పబ్లిక్ డెట్ మరియు నగదు నిల్వల విభజనకు ఉపయోగించిన ఖచ్చితమైన జనాభా నిష్పత్తి ఎంత?',
        options: ['50.00% : 50.00%', '58.32% (AP) : 41.68% (TS)', '55.00% (AP) : 45.00% (TS)', '60.00% (AP) : 40.00% (TS)'],
        correctIndex: 1,
        explanation: 'Based on the 2011 Census figures, financial assets and debt obligations were divided strictly in the ratio of 58.32% for Andhra Pradesh and 41.68% for Telangana.',
        tag: 'Financial Division',
        difficulty: 'Easy',
        topicId: 'appsc-reorganisation-act-2014'
      },
      {
        id: 'aps-q3',
        question: 'Which Section of the AP Reorganisation Act 2014 declared the Polavaram Irrigation Project as a National Project?',
        questionTelugu: 'ఏపీ పునర్వ్యవస్థీకరణ చట్టం, 2014 లోని ఏ సెక్షన్ పోలవరం ప్రాజెక్టును జాతీయ ప్రాజెక్టుగా ప్రకటించింది?',
        options: ['Section 84', 'Section 85', 'Section 90', 'Section 108'],
        correctIndex: 2,
        explanation: 'Section 90 of the Act elevated Polavaram to the status of a National Project with statutory funding guarantees from the Central Government.',
        tag: 'Irrigation & Statute',
        difficulty: 'Easy',
        topicId: 'appsc-reorganisation-act-2014'
      },
      {
        id: 'aps-q4',
        question: 'The historic "Sri Bagh Pact" signed on 15 November 1937 was an agreement between the leaders of which two regions?',
        questionTelugu: '15 నవంబర్ 1937 న సంతకం చేయబడిన చారిత్రక "శ్రీ బాగ్ ఒప్పందం" ఏ రెండు ప్రాంతాల నాయకుల మధ్య కుదిరింది?',
        options: ['Coastal Andhra and Rayalaseema', 'Telangana and Coastal Andhra', 'Rayalaseema and Hyderabad', 'Madras and Andhra'],
        correctIndex: 0,
        explanation: 'The Sri Bagh Pact was forged at K. Koti Reddy’s residence (Sri Bagh) in Madras between leaders of Coastal Andhra and Rayalaseema to ensure regional equity in university, capital, and irrigation.',
        tag: 'Andhra Movement',
        difficulty: 'Medium',
        topicId: 'appsc-history-andhra-movement'
      },
      {
        id: 'aps-q5',
        question: 'Potti Sreeramulu began his historic fast-unto-death demanding a separate Andhra State on 19 October 1952 at whose house in Madras?',
        questionTelugu: 'ప్రత్యేక ఆంధ్ర రాష్ట్రం కోసం పొట్టి శ్రీరాములు 19 అక్టోబర్ 1952 న మద్రాసులో ఎవరి నివాసంలో ఆమరణ నిరాహార దీక్ష ప్రారంభించారు?',
        options: ['Tanguturi Prakasam Pantulu', 'Bulusu Sambamurthy', 'Vavilala Gopalakrishnayya', 'Kandukuri Veeresalingam'],
        correctIndex: 1,
        explanation: 'Potti Sreeramulu commenced his 58-day fast unto death at the residence of Bulusu Sambamurthy in Madras, sacrificing his life on 15 December 1952.',
        tag: 'State Formation',
        difficulty: 'Medium',
        topicId: 'appsc-history-andhra-movement'
      },
      {
        id: 'aps-q6',
        question: 'What is the total length of the coastline of Andhra Pradesh along the Bay of Bengal?',
        questionTelugu: 'బంగాళాఖాతం తీరంలో ఆంధ్రప్రదేశ్ రాష్ట్ర తీరరేఖ మొత్తం పొడవు ఎంత?',
        options: ['850 km', '974 km', '1,050 km', '1,200 km'],
        correctIndex: 1,
        explanation: 'Andhra Pradesh has the second-longest coastline in mainland India at 974 km, after Gujarat.',
        tag: 'AP Geography',
        difficulty: 'Easy',
        topicId: 'appsc-economy-welfare-schemes'
      },
      {
        id: 'aps-q7',
        question: 'The Visakhapatnam-Chennai Industrial Corridor (VCIC) is financially supported by which multilateral institution?',
        questionTelugu: 'విశాఖపట్నం-చెన్నై పారిశ్రామిక కారిడార్ (VCIC) కు ఏ అంతర్జాతీయ సంస్థ ఆర్థిక సహాయం అందిస్తుంది?',
        options: ['World Bank', 'Asian Development Bank (ADB)', 'Asian Infrastructure Investment Bank (AIIB)', 'New Development Bank (NDB)'],
        correctIndex: 1,
        explanation: 'The Asian Development Bank (ADB) is the lead partner financing the nodes of VCIC under the East Coast Economic Corridor.',
        tag: 'Industrial Corridors',
        difficulty: 'Medium',
        topicId: 'appsc-economy-welfare-schemes'
      },
      {
        id: 'aps-q8',
        question: 'Which social reformer founded the "Hithakarini Samajam" in Rajahmundry in 1906 for social and educational welfare?',
        questionTelugu: '1906 లో రాజమండ్రిలో సాంఘిక మరియు విద్యా సంక్షేమం కోసం "హితకారిణి సమాజం" స్థాపించిన సంస్కర్త ఎవరు?',
        options: ['Kandukuri Veeresalingam', 'Gurazada Apparao', 'Raghupathi Venkataratnam Naidu', 'Tripuraneni Ramaswamy'],
        correctIndex: 0,
        explanation: 'Rao Bahadur Kandukuri Veeresalingam donated all his properties to establish the Hithakarini Samajam to sustain his schools, widow remarriage homes, and orphanages.',
        tag: 'Social Reform',
        difficulty: 'Medium',
        topicId: 'appsc-history-andhra-movement'
      },
      {
        id: 'aps-q9',
        question: 'Which district of Andhra Pradesh is universally recognized as the "Shrimp Capital of India"?',
        questionTelugu: 'భారతదేశంలో "రొయ్యల రాజధాని" గా గుర్తింపు పొందిన ఆంధ్రప్రదేశ్ జిల్లా ఏది?',
        options: ['West Godavari', 'Nellore (SPSR Nellore)', 'Krishna', 'Visakhapatnam'],
        correctIndex: 0,
        explanation: 'West Godavari (along with adjoining Bapatla and Krishna deltas) is the hub of intensive Vannamei shrimp aquaculture production in India.',
        tag: 'Blue Economy',
        difficulty: 'Medium',
        topicId: 'appsc-economy-welfare-schemes'
      },
      {
        id: 'aps-q10',
        question: 'In the Amaravati School of Art, which building material was distinctively utilized for stupa carvings and medallions?',
        questionTelugu: 'అమరావతి శిల్పకళా రీతిలో స్తూప శిల్పాలు మరియు పలకాల కోసం ఏ రకమైన రాయిని ప్రత్యేకంగా ఉపయోగించారు?',
        options: ['Red sandstone', 'White marble limestone (Palnad limestone)', 'Black basalt', 'Grey schist'],
        correctIndex: 1,
        explanation: 'The sculptors of the Amaravati school made extensive and masterful use of white marble limestone quarried from the Palnad region.',
        tag: 'Art & Culture',
        difficulty: 'Hard',
        topicId: 'appsc-history-andhra-movement'
      }
    ]
  },

  // ==========================================
  // SECTIONAL TEST 4: TELANGANA STATE SPECIFIC (TSPSC)
  // ==========================================
  {
    id: 'mock-tspsc-sectional',
    title: 'TSPSC Specialization: Movement (1948–2014), Kakatiya Heritage & Economy',
    titleTelugu: 'TSPSC సెక్షనల్ టెస్ట్: ఉద్యమం (1948–2014), కాకతీయుల వారసత్వం & ఆర్థిక ధోరణులు',
    exam: 'tspsc',
    type: 'sectional',
    subject: 'Telangana State Specific',
    durationMinutes: 30,
    totalMarks: 50,
    negativeMarkingRatio: 0.33,
    questions: [
      {
        id: 'tss-q1',
        question: 'The historic "Gentlemen’s Agreement" that facilitated the formation of Andhra Pradesh was signed on 20 February 1956 at which venue?',
        questionTelugu: 'ఆంధ్రప్రదేశ్ రాష్ట్ర అవతరణకు మార్గం సుగమం చేసిన "పెద్దమనుషుల ఒప్పందం" 20 ఫిబ్రవరి 1956 న ఎక్కడ కుదిరింది?',
        options: ['Hyderabad House, New Delhi', 'Rashtrapati Bhavan', 'Jubilee Hall, Hyderabad', 'Sri Bagh, Madras'],
        correctIndex: 0,
        explanation: 'The Gentlemen’s Agreement was signed at Hyderabad House in New Delhi by 4 Andhra leaders (Bezawada Gopala Reddy, Sanjeeva Reddy, G. Latchanna, Alluri Satyanarayana Raju) and 4 Telangana leaders (Burgula, K.V. Ranga Reddy, Marri Channa Reddy, J.V. Narsing Rao).',
        tag: 'Telangana Movement',
        difficulty: 'Easy',
        topicId: 'tspsc-movement-state-formation'
      },
      {
        id: 'tss-q2',
        question: 'Under the 1975 Presidential Order issued in pursuance of Article 371-D, which two administrative zones were allocated exclusively to the Telangana region?',
        questionTelugu: 'ఆర్టికల్ 371-D ప్రకారం 1975 నాటి రాష్ట్రపతి ఉత్తర్వులలో తెలంగాణ ప్రాంతానికి ఏ రెండు జోన్లను కేటాయించారు?',
        options: ['Zones I and II', 'Zones III and IV', 'Zones V and VI', 'Zones VI and VII'],
        correctIndex: 2,
        explanation: 'Under the 6-zone arrangement, Zone V and Zone VI comprised the 10 districts of the Telangana region.',
        tag: 'Article 371-D',
        difficulty: 'Medium',
        topicId: 'tspsc-movement-state-formation'
      },
      {
        id: 'tss-q3',
        question: 'G.O. Ms. No. 610 was issued on 30 December 1985 during the tenure of which Chief Minister of unified Andhra Pradesh?',
        questionTelugu: 'జీవో 610 ను 30 డిసెంబర్ 1985 న ఏ ముఖ్యమంత్రి హయాంలో జారీ చేశారు?',
        options: ['Marri Channa Reddy', 'N.T. Rama Rao', 'Jalagam Vengala Rao', 'Kotla Vijaya Bhaskara Reddy'],
        correctIndex: 1,
        explanation: 'N.T. Rama Rao’s Telugu Desam government issued G.O. 610 following the recommendations of the Jayabharat Reddy Committee to repatriate non-local employees.',
        tag: 'G.O. 610',
        difficulty: 'Easy',
        topicId: 'tspsc-movement-state-formation'
      },
      {
        id: 'tss-q4',
        question: 'Which option was recommended by the Justice Sri Krishna Committee (2010) as the "optimal solution" for the Andhra Pradesh crisis?',
        questionTelugu: 'జస్టిస్ శ్రీకృష్ణ కమిటీ (2010) తన నివేదికలో ఏ ఆప్షన్‌ను ఉత్తమమైన పరిష్కారంగా సిఫార్సు చేసింది?',
        options: [
          'Option 1: Maintaining Status Quo',
          'Option 5: Bifurcation into Telangana and Seemandhra',
          'Option 6: Keeping the State united with an empowered statutory Telangana Regional Council',
          'Option 2: Telangana with Hyderabad as Union Territory'
        ],
        correctIndex: 2,
        explanation: 'Option 6 was the Committee’s officially recommended option, though public and political sentiment overwhelmingly rallied behind Option 5.',
        tag: 'Sri Krishna Committee',
        difficulty: 'Medium',
        topicId: 'tspsc-movement-state-formation'
      },
      {
        id: 'tss-q5',
        question: 'Who coined the immortal slogan "Jal, Jangal, Zameen" during his heroic uprising against the Nizam at Jodeghat?',
        questionTelugu: 'జోడేఘాట్ వద్ద నిజాం సైన్యానికి వ్యతిరేకంగా పోరాడుతూ "జల్, జంగల్, జమీన్" అనే నినాదాన్ని ఇచ్చింది ఎవరు?',
        options: ['Komaram Bheem', 'Birsa Munda', 'Ramji Gond', 'Doddi Komaraiah'],
        correctIndex: 0,
        explanation: 'Komaram Bheem led the Gond rebellion asserting tribal sovereignty over land, forest, and water, attaining martyrdom on September 1, 1940.',
        tag: 'Tribal Resistance',
        difficulty: 'Easy',
        topicId: 'tspsc-history-culture-heritage'
      },
      {
        id: 'tss-q6',
        question: 'The UNESCO World Heritage Ramappa Temple at Palampet was constructed using which innovative lightweight structural material for its shikhara?',
        questionTelugu: 'యునెస్కో ప్రపంచ వారసత్వ సంపద రామప్ప దేవాలయం యొక్క శిఖర నిర్మాణం కోసం ఏ వినూత్న పదార్థాన్ని ఉపయోగించారు?',
        options: ['Carved Teak wood', 'Porous floating bricks that float on water', 'Hollow bronze plates', 'Soapstone'],
        correctIndex: 1,
        explanation: 'The bricks of Ramappa temple roof were made of spongy clay that floats on water (density < 1 g/cm³), drastically reducing the vertical dead load on granite columns.',
        tag: 'Kakatiya Architecture',
        difficulty: 'Medium',
        topicId: 'tspsc-history-culture-heritage'
      },
      {
        id: 'tss-q7',
        question: 'Under the TS-iPASS Act of 2014, within how many days must clearances be statutorily granted to mega industrial investment projects?',
        questionTelugu: 'TS-iPASS చట్టం, 2014 ప్రకారం మెగా పారిశ్రామిక ప్రాజెక్టులకు అనుమతులు ఎన్ని రోజులలోపు చట్టబద్ధంగా మంజూరు చేయాలి?',
        options: ['10 days', '15 days', '30 days', '45 days'],
        correctIndex: 1,
        explanation: 'Under TS-iPASS, mega projects receive deemed clearances within 15 days, with penalties on officials failing to adhere to statutory timelines.',
        tag: 'Industrial Policy',
        difficulty: 'Easy',
        topicId: 'tspsc-economy-socio-economic-outlook'
      },
      {
        id: 'tss-q8',
        question: 'The famous floral festival of Telangana, "Bathukamma", is celebrated primarily during which Hindu festive period?',
        questionTelugu: 'తెలంగాణ పూల పండుగ "బతుకమ్మ" ప్రధానంగా ఏ పండుగ సమయంలో జరుపుకుంటారు?',
        options: ['Sankranti', 'Sharad Navaratri / Durga Navaratri', 'Holi', 'Deepavali'],
        correctIndex: 1,
        explanation: 'Bathukamma is celebrated for nine days culminating on Saddula Bathukamma, coinciding with the Sharad Navaratri festival.',
        tag: 'Folk Traditions',
        difficulty: 'Easy',
        topicId: 'tspsc-history-culture-heritage'
      },
      {
        id: 'tss-q9',
        question: 'Genome Valley, the premier life-sciences and vaccine manufacturing cluster responsible for one-third of the world’s vaccines, is situated at:',
        questionTelugu: 'ప్రపంచంలోని మూడవ వంతు వ్యాక్సిన్లను తయారుచేసే జీనోమ్ వ్యాలీ క్లస్టర్ ఎక్కడ ఉంది?',
        options: ['HITEC City', 'Shamirpet, Medchal-Malkajgiri', 'Gachibowli', 'Patancheru'],
        correctIndex: 1,
        explanation: 'Genome Valley is located at Shamirpet in Medchal-Malkajgiri district, hosting global vaccine giants like Bharat Biotech and Biological E.',
        tag: 'State Economy',
        difficulty: 'Medium',
        topicId: 'tspsc-economy-socio-economic-outlook'
      },
      {
        id: 'tss-q10',
        question: 'Under the 2018 New Zonal System of Telangana (Article 371-D), how many total zones and multi-zones were created?',
        questionTelugu: '2018 నాటి నూతన జోనల్ వ్యవస్థ ప్రకారం తెలంగాణలో మొత్తం ఎన్ని జోన్లు మరియు మల్టీ జోన్లు ఏర్పడ్డాయి?',
        options: ['4 Zones & 2 Multi-Zones', '7 Zones & 2 Multi-Zones', '6 Zones & 3 Multi-Zones', '8 Zones & 4 Multi-Zones'],
        correctIndex: 1,
        explanation: 'The 2018 Presidential Order created 7 Zones (Kaleshwaram, Basara, Rajanna, Bhadradri, Yadadri, Charminar, Jogulamba) and 2 Multi-Zones (Multi-Zone I and Multi-Zone II) with 95% local reservation.',
        tag: 'New Zonal System',
        difficulty: 'Hard',
        topicId: 'tspsc-movement-state-formation'
      }
    ]
  },

  // ==========================================
  // SECTIONAL TEST 5: INDIAN ECONOMY & BUDGET
  // ==========================================
  {
    id: 'mock-economy-sectional',
    title: 'Indian Economy Sectional: Monetary Policy, Fiscal Deficits & Inflation',
    titleTelugu: 'ఇండియన్ ఎకానమీ సెక్షనల్ టెస్ట్: ద్రవ్య విధానం, బడ్జెట్ లోటు & ద్రవ్యోల్బణం',
    exam: 'all',
    type: 'sectional',
    subject: 'Indian Economy & Budget',
    durationMinutes: 25,
    totalMarks: 30,
    negativeMarkingRatio: 0.33,
    questions: ECONOMY_MCQS
  },

  // ==========================================
  // SECTIONAL TEST 6: ENVIRONMENT, ECOLOGY & BIODIVERSITY
  // ==========================================
  {
    id: 'mock-environment-sectional',
    title: 'Environment & Biodiversity Sectional: Wildlife Acts, Wetlands & COP Treaties',
    titleTelugu: 'పర్యావరణం & జీవవైవిధ్యం సెక్షనల్: వన్యప్రాణి చట్టాలు, చిత్తడి నేలలు & వాతావరణ ఒప్పందాలు',
    exam: 'all',
    type: 'sectional',
    subject: 'Environment & Ecology',
    durationMinutes: 20,
    totalMarks: 20,
    negativeMarkingRatio: 0.33,
    questions: ENVIRONMENT_MCQS
  },

  // ==========================================
  // FULL LENGTH GRAND MOCK 1: UPSC PRELIMS GS-1
  // ==========================================
  {
    id: 'mock-upsc-prelims-grand',
    title: 'UPSC CSE Prelims GS-1 Grand Mock Simulation (High-Yield Multi-Subject)',
    titleTelugu: 'యూపీఎస్సీ ప్రిలిమ్స్ జీఎస్-1 గ్రాండ్ మాక్ సిమ్యులేషన్ (మల్టీ-సబ్జెక్ట్ టెస్ట్)',
    exam: 'upsc',
    type: 'full_length',
    subject: 'All-India General Studies Paper 1',
    durationMinutes: 45,
    totalMarks: 60,
    negativeMarkingRatio: 0.33,
    questions: [
      ...POLITY_MCQS.slice(0, 8),
      ...HISTORY_MCQS.slice(0, 8),
      ...ECONOMY_MCQS.slice(0, 8),
      ...ENVIRONMENT_MCQS.slice(0, 6)
    ]
  },

  // ==========================================
  // FULL LENGTH GRAND MOCK 2: APPSC GROUP 1 PRELIMS
  // ==========================================
  {
    id: 'mock-appsc-group1-grand',
    title: 'APPSC Group 1 Prelims Grand Simulation (General Studies & AP Specialization)',
    titleTelugu: 'ఏపీపీఎస్సీ గ్రూప్ 1 ప్రిలిమ్స్ గ్రాండ్ టెస్ట్ (జనరల్ స్టడీస్ & ఏపీ విభజన చట్టం)',
    exam: 'appsc',
    type: 'full_length',
    subject: 'General Studies & AP Specialization',
    durationMinutes: 40,
    totalMarks: 50,
    negativeMarkingRatio: 0.33,
    questions: [
      ...STATE_SPECIAL_MCQS.filter(q => q.tag.includes('AP') || q.tag.includes('Constitutional')),
      ...POLITY_MCQS.slice(0, 8),
      ...HISTORY_MCQS.slice(0, 6),
      ...ECONOMY_MCQS.slice(0, 6)
    ]
  },

  // ==========================================
  // FULL LENGTH GRAND MOCK 3: TSPSC GROUP 1 PRELIMS
  // ==========================================
  {
    id: 'mock-tspsc-group1-grand',
    title: 'TSPSC Group 1 Prelims Grand Simulation (Telangana Movement & General Studies)',
    titleTelugu: 'టీఎస్‌పీఎస్సీ గ్రూప్ 1 ప్రిలిమ్స్ గ్రాండ్ టెస్ట్ (తెలంగాణ ఉద్యమం & జనరల్ స్టడీస్)',
    exam: 'tspsc',
    type: 'full_length',
    subject: 'General Studies & Telangana Specialization',
    durationMinutes: 40,
    totalMarks: 50,
    negativeMarkingRatio: 0.33,
    questions: [
      ...STATE_SPECIAL_MCQS.filter(q => q.tag.includes('Telangana')),
      ...POLITY_MCQS.slice(8, 16),
      ...HISTORY_MCQS.slice(6, 12),
      ...ECONOMY_MCQS.slice(6, 12)
    ]
  }
];

// Aggregated 200+ Question Vault for Custom Practice Drills
export const ALL_PRELIMS_QUESTIONS: MockTestQuestion[] = (() => {
  const map = new Map<string, MockTestQuestion>();
  MOCK_TESTS.forEach(test => {
    test.questions.forEach(q => {
      map.set(q.id, q);
    });
  });
  // Add all modular banks
  POLITY_MCQS.forEach(q => map.set(q.id, q));
  HISTORY_MCQS.forEach(q => map.set(q.id, q));
  ECONOMY_MCQS.forEach(q => map.set(q.id, q));
  ENVIRONMENT_MCQS.forEach(q => map.set(q.id, q));
  STATE_SPECIAL_MCQS.forEach(q => map.set(q.id, q));
  return Array.from(map.values());
})();

/**
 * Generates a dynamic custom mock drill filtered by subject, count, and difficulty
 */
export function generateCustomDrill(params: {
  subject?: string;
  count?: number;
  difficulty?: 'All' | 'Easy' | 'Medium' | 'Hard';
  title?: string;
}): MockTest {
  const targetSubject = params.subject || 'all';
  const targetCount = params.count || 10;
  const targetDifficulty = params.difficulty || 'All';
  let pool = ALL_PRELIMS_QUESTIONS;

  if (targetSubject.toLowerCase() !== 'all') {
    pool = pool.filter(q => {
      const qSub = (q.tag || '').toLowerCase();
      const qTop = (q.topicId || '').toLowerCase();
      const target = targetSubject.toLowerCase();
      return qSub.includes(target) || qTop.includes(target);
    });
  }

  if (targetDifficulty !== 'All') {
    const diffMatch = pool.filter(q => q.difficulty === targetDifficulty);
    if (diffMatch.length >= 5) {
      pool = diffMatch;
    }
  }

  // Shuffle pool randomly
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  const selectedQuestions = shuffled.slice(0, Math.min(targetCount, pool.length));

  return {
    id: `custom-drill-${Date.now()}`,
    title: params.title || `Custom Practice Drill: ${targetSubject.toUpperCase()} (${selectedQuestions.length} Qs)`,
    titleTelugu: `కస్టమ్ ప్రాక్టీస్ డ్రిల్: ${targetSubject.toUpperCase()} (${selectedQuestions.length} ప్రశ్నలు)`,
    exam: 'all',
    type: 'sectional',
    subject: targetSubject === 'all' ? 'Multi-Disciplinary Speed Drill' : targetSubject,
    durationMinutes: Math.max(5, Math.round(selectedQuestions.length * 1.2)),
    totalMarks: selectedQuestions.length * 2,
    negativeMarkingRatio: 0.33,
    questions: selectedQuestions
  };
}
