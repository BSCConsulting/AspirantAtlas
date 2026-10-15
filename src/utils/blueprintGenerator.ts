/**
 * Dynamic High-Yield Micro-Syllabus Blueprint & Formula Kit Generator
 * Generates an official, publication-quality printable civil services guide.
 */

import { ExamId } from '../types';

interface BlueprintData {
  examId: ExamId;
  examName: string;
  candidateName: string;
  issueDate: string;
}

const EXAM_DETAILS: Record<ExamId, {
  fullName: string;
  prelimsMarks: string;
  mainsPapers: string[];
  highYieldTopics: { subject: string; weight: string; topics: string[]; book: string }[];
  eliminationStrategies: string[];
}> = {
  appsc: {
    fullName: 'Andhra Pradesh Public Service Commission (Group 1 & 2)',
    prelimsMarks: 'Paper-I: General Studies & Mental Ability (150 Marks)',
    mainsPapers: [
      'Paper-I: General Essay (150 Marks)',
      'Paper-II: History & Cultural Heritage of India & AP (150 Marks)',
      'Paper-III: Indian Constitution, Polity & Governance (150 Marks)',
      'Paper-IV: Economy & Development of India & AP (150 Marks)',
      'Paper-V: Science, Technology & Environmental Issues (150 Marks)'
    ],
    highYieldTopics: [
      {
        subject: 'Indian Polity & Constitution',
        weight: '30-35 Marks',
        topics: ['Fundamental Rights & Writs', 'Preamble & Basic Structure', 'Governor vs Chief Minister Powers', 'Centre-State Relations', '73rd & 74th Amendments'],
        book: 'Indian Polity by M. Laxmikanth + AP Governance Gazette'
      },
      {
        subject: 'Economy & AP Reorganisation Act',
        weight: '35-40 Marks',
        topics: ['AP Reorganisation Act 2014 Sections 46, 90, 94', 'AP Socio-Economic Survey 2025-26', 'Fiscal Deficit & Navaratnalu Schemes', 'Polavaram Project & Capital Region Development'],
        book: 'Indian Economy by Ramesh Singh + AP Socio-Economic Survey'
      },
      {
        subject: 'History & AP Cultural Heritage',
        weight: '25-30 Marks',
        topics: ['Satavahanas, Ikshvakus, Eastern Chalukyas', 'Kakatiyas and Vijayanagara Empire Art', 'Andhra Movement & 1953 State Formation', 'Social Reformers: Veeresalingam & Gurajada'],
        book: 'History of Modern Andhra by P.R. Rao + Telugu Akademi'
      },
      {
        subject: 'Science, Tech & Environment',
        weight: '25-30 Marks',
        topics: ['Mangrove Ecosystems of Coringa', 'Krishna-Godavari River Basin Ecology', 'Disaster Management in Coastal Districts', 'ISRO Sriharikota Launch Milestones'],
        book: 'Environment by PMF IAS / Shankar IAS'
      }
    ],
    eliminationStrategies: [
      'Statutory Provisions vs Rules: Questions often substitute "Act" with "Notification" or "Cabinet Resolution". Look for legislative authority.',
      'Numerical Extremes: Exact budgetary numbers or scheme deadlines are common distractor traps.',
      'Constitutional Body Traps: Verify whether a commission is Constitutional (Art 280, 324) vs Statutory (CVC, NHRC).'
    ]
  },
  tspsc: {
    fullName: 'Telangana State Public Service Commission (Group 1 & 2)',
    prelimsMarks: 'General Studies & Mental Ability (150 Marks, 150 Questions)',
    mainsPapers: [
      'Paper-I: General Essay (150 Marks)',
      'Paper-II: History, Culture & Geography (150 Marks)',
      'Paper-III: Indian Society, Constitution & Governance (150 Marks)',
      'Paper-IV: Economy & Development (150 Marks)',
      'Paper-V: Science & Technology & Data Interpretation (150 Marks)',
      'Paper-VI: Telangana Movement & State Formation (150 Marks)'
    ],
    highYieldTopics: [
      {
        subject: 'Telangana Movement & State Formation',
        weight: 'Paper-VI Master',
        topics: ['1948 Police Action to 1952 Mulki Agitation', 'Gentlemen’s Agreement 1956 & Violations', '1969 Jai Telangana Movement', 'Prof. Jayashankar Philosophy & KCR Fast (2009)'],
        book: 'Telangana Movement by V. Prakash / Telugu Akademi'
      },
      {
        subject: 'Telangana Economy & State Schemes',
        weight: '30-35 Marks',
        topics: ['Telangana Socio-Economic Outlook 2025-26', 'Rythu Bandhu & Rythu Bima Evolution', 'Mission Kakatiya & Mission Bhagiratha', 'IT Sector Expansion in Hyderabad & Tier-2 Hubs'],
        book: 'Telangana State Economy by Telugu Akademi'
      },
      {
        subject: 'Indian Polity & Constitution',
        weight: '25-30 Marks',
        topics: ['Schedule 5 & 6 Tribal Governance', 'Supreme Court Landmark Judgments', 'Comptroller & Auditor General Audit Reports', 'Electoral Reforms & Anti-Defection Law'],
        book: 'M. Laxmikanth'
      }
    ],
    eliminationStrategies: [
      'Committee Names: Watch out for swapping Gentlemen’s Agreement clauses with Fazal Ali Commission recommendations.',
      'Year Swapping: Chronology of agreements (1956, 1969, 1972 Six-Point Formula) is frequently tested.'
    ]
  },
  upsc: {
    fullName: 'Union Public Service Commission Civil Services Examination (CSE)',
    prelimsMarks: 'GS Paper-I (200 Marks) + GS Paper-II CSAT (200 Marks, 33% Qualifying)',
    mainsPapers: [
      'Paper-I: Essay (250 Marks)',
      'GS-I: Indian Heritage, Culture, History & Geography (250 Marks)',
      'GS-II: Governance, Constitution, Polity, Social Justice & IR (250 Marks)',
      'GS-III: Technology, Economic Development, Biodiversity, Environment, Security (250 Marks)',
      'GS-IV: Ethics, Integrity & Aptitude (250 Marks)',
      'Optional Papers I & II (500 Marks)'
    ],
    highYieldTopics: [
      {
        subject: 'Polity & Constitutional Law',
        weight: '15-18 Questions (~35 Marks)',
        topics: ['Fundamental Rights vs DPSP Harmonization', 'Judicial Review & Due Process of Law', 'Parliamentary Privileges & Adjournment Motions', 'Money Bills vs Financial Bills'],
        book: 'Indian Polity by M. Laxmikanth + PRS Legislative Research'
      },
      {
        subject: 'Economy & Agriculture',
        weight: '18-22 Questions (~40 Marks)',
        topics: ['Monetary Policy Transmission & MPC Repo corridor', 'Inflation Indices (CPI vs WPI Basket)', 'External Sector & Capital Account Convertibility', 'MSP Pricing & Green Revolution 2.0'],
        book: 'Indian Economy by Vivek Singh / Ramesh Singh'
      },
      {
        subject: 'Environment, Biodiversity & Climate',
        weight: '16-20 Questions (~38 Marks)',
        topics: ['Ramsar Wetlands & National Parks', 'CITES, UNFCCC COP Decisions & Paris Agreement', 'Pollutants (PM2.5, Persistent Organic Pollutants)', 'Wildlife Protection Act 1972 Schedules (2022 Amendment)'],
        book: 'PMF IAS Environment / Shankar IAS'
      }
    ],
    eliminationStrategies: [
      'Extreme Word Inversion: Look out for words like "must", "exclusively", "cannot", "any". 85% of such statements are historically incorrect in UPSC.',
      'Department / Ministry Substitution: Statements attributing a scheme to the wrong Ministry (e.g. MoEFCC vs MoAFW).',
      'Pairs Matching: In "How many of the above pairs are correct" format, start by identifying the 1 definitely wrong pair to narrow down.'
    ]
  }
};

/**
 * Dynamically builds and opens a styled, printable micro-syllabus blueprint.
 */
export function generateAndPrintBlueprint(examId: ExamId, candidateName: string = 'Aspirant'): void {
  const meta: BlueprintData = {
    examId,
    examName: EXAM_DETAILS[examId]?.fullName || examId.toUpperCase(),
    candidateName: candidateName || 'Civil Services Aspirant',
    issueDate: new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  };

  const details = EXAM_DETAILS[examId] || EXAM_DETAILS.appsc;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AspirantAtlas 2026 Blueprint - ${examId.toUpperCase()}</title>
  <style>
    @page {
      size: A4;
      margin: 1.5cm 1.5cm 1.5cm 1.5cm;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      line-height: 1.5;
      font-size: 11pt;
      margin: 0;
      padding: 20px;
      background: #ffffff;
    }
    .header {
      border-bottom: 3px double #0284c7;
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .title {
      font-size: 20pt;
      font-weight: 800;
      color: #1e1b4b;
      margin: 0;
      letter-spacing: -0.5px;
    }
    .subtitle {
      font-size: 11pt;
      color: #0284c7;
      font-weight: 700;
      margin: 4px 0 0 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .candidate-badge {
      text-align: right;
      font-size: 9pt;
      color: #475569;
    }
    .candidate-badge strong {
      color: #0f172a;
      font-size: 10pt;
    }
    .section-title {
      font-size: 13pt;
      font-weight: 800;
      color: #1e1b4b;
      border-left: 4px solid #0284c7;
      padding-left: 8px;
      margin: 22px 0 10px 0;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    .pattern-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 16px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0 18px 0;
      font-size: 10pt;
    }
    th, td {
      border: 1px solid #cbd5e1;
      padding: 8px 10px;
      text-align: left;
    }
    th {
      background-color: #f1f5f9;
      font-weight: 700;
      color: #1e293b;
    }
    .weight-badge {
      display: inline-block;
      background: #e0f2fe;
      color: #0369a1;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 8.5pt;
    }
    .strategy-item {
      background: #fffbeb;
      border: 1px solid #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 8px 12px;
      margin-bottom: 8px;
      border-radius: 4px;
      font-size: 9.5pt;
    }
    .footer {
      margin-top: 35px;
      border-top: 1px solid #e2e8f0;
      padding-top: 10px;
      font-size: 8.5pt;
      color: #64748b;
      text-align: center;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
      .page-break { page-break-after: always; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="background: #1e1b4b; color: white; padding: 12px 18px; border-radius: 8px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
    <div>
      <strong>Official AspirantAtlas 2026 Blueprint Generated</strong>
      <div style="font-size: 9pt; color: #93c5fd;">Ready for download. Click the button to save as PDF or print.</div>
    </div>
    <button onclick="window.print()" style="background: #0284c7; color: white; border: none; padding: 8px 18px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 10pt;">
      🖨️ Save as PDF / Print
    </button>
  </div>

  <div class="header">
    <div>
      <h1 class="title">AspirantAtlas Civil Services Blueprint 2026</h1>
      <div class="subtitle">${details.fullName}</div>
    </div>
    <div class="candidate-badge">
      Issued to: <strong>${meta.candidateName}</strong><br>
      Date: <strong>${meta.issueDate}</strong><br>
      Status: <span style="color: #16a34a; font-weight: bold;">Verified Official Kit</span>
    </div>
  </div>

  <div class="pattern-box">
    <strong>📋 Examination Scheme:</strong> ${details.prelimsMarks}<br>
    <span style="font-size: 9.5pt; color: #475569;">Includes full negative marking rules (0.33 deduction per incorrect attempt). Speed target: 45–55 seconds per question.</span>
  </div>

  <div class="section-title">1. High-Yield Micro-Syllabus Priority Matrix</div>
  <table>
    <thead>
      <tr>
        <th style="width: 25%;">Subject Domain</th>
        <th style="width: 18%;">Prelims Weight</th>
        <th style="width: 32%;">Core Micro-Topics</th>
        <th style="width: 25%;">Prescribed Authority</th>
      </tr>
    </thead>
    <tbody>
      ${details.highYieldTopics.map(item => `
        <tr>
          <td><strong>${item.subject}</strong></td>
          <td><span class="weight-badge">${item.weight}</span></td>
          <td>${item.topics.join(' • ')}</td>
          <td><em style="font-size: 9pt;">${item.book}</em></td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <div class="section-title">2. Option Elimination & Marks Optimization Strategies</div>
  ${details.eliminationStrategies.map(strat => `
    <div class="strategy-item">
      <strong>🎯 Strategic Rule:</strong> ${strat}
    </div>
  `).join('')}

  <div class="section-title">3. Mains Structured Answer Scaffold</div>
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; font-size: 9.5pt;">
    <strong>Standard 150/250-Word Civil Services Answer Blueprint:</strong>
    <ol style="margin: 6px 0 0 16px; padding: 0;">
      <li><strong>Introduction (15-20 words):</strong> Define the primary constitutional term, statistic, or statutory act directly from the prompt.</li>
      <li><strong>Body Pillar 1 (Constitutional & Legal Framework):</strong> Cite relevant Articles, Supreme Court precedents (e.g. Kesavananda Bharati, Puttaswamy).</li>
      <li><strong>Body Pillar 2 (Socio-Economic & Administrative Reality):</strong> Provide empirical ground challenges, regional disparity, or budgetary execution gaps.</li>
      <li><strong>Way Forward & Conclusion (25-30 words):</strong> Constructive, reform-oriented synthesis citing NITI Aayog or Law Commission recommendations.</li>
    </ol>
  </div>

  <div class="footer">
    AspirantAtlas Educational Open Initiative • Empowering Civil Services Aspirants across Andhra Pradesh, Telangana & Pan-India.<br>
    For daily telegram capsules, join <strong>@AspirantAtlasOfficial</strong>
  </div>

  <script>
    // Automatically trigger print dialog on launch
    window.addEventListener('load', () => {
      setTimeout(() => {
        window.print();
      }, 500);
    });
  </script>
</body>
</html>`;

  // Open in a new clean window for seamless printing
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  } else {
    // Fallback: create blob download
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${examId.toUpperCase()}_Micro_Syllabus_Blueprint_2026.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
