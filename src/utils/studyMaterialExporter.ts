import { TopicContent } from '../types';

/**
 * Generates and triggers a print-friendly study document in a new window/tab.
 * Aspirants can save as PDF directly from the browser's print dialog (Cmd+P / Ctrl+P).
 */
export function exportStudyMaterialPrint(content: TopicContent, showTelugu: boolean = false): void {
  const printWindow = window.open('', '_blank', 'width=900,height=800');
  if (!printWindow) {
    alert('Please allow popups to generate the printable study notes.');
    return;
  }

  const title = showTelugu && content.titleTelugu ? `${content.titleTelugu} (${content.title})` : content.title;
  const pillarsHtml = content.cheatSheet?.corePillars
    ?.map(
      (pillar) => `
      <div style="margin-bottom: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px 14px;">
        <h4 style="margin: 0 0 6px 0; font-size: 13px; color: #0f172a; font-weight: bold;">${pillar.title}</h4>
        <ul style="margin: 0; padding-left: 20px; font-size: 12px; color: #334155;">
          ${pillar.points.map((pt) => `<li style="margin-bottom: 4px;">${pt}</li>`).join('')}
        </ul>
      </div>
    `
    )
    .join('') || '';

  const provisionsHtml = content.cheatSheet?.statutoryOrConstitutionalProvisions
    ?.map(
      (prov) => `
      <tr>
        <td style="padding: 6px 10px; border: 1px solid #cbd5e1; font-weight: bold; color: #1e293b; font-size: 12px; width: 25%;">${prov.code}</td>
        <td style="padding: 6px 10px; border: 1px solid #cbd5e1; font-weight: 600; color: #0f172a; font-size: 12px; width: 35%;">${prov.label}</td>
        <td style="padding: 6px 10px; border: 1px solid #cbd5e1; color: #334155; font-size: 12px;">${prov.detail}</td>
      </tr>
    `
    )
    .join('') || '';

  const precedentsHtml = content.cheatSheet?.landmarkPrecedents
    ?.map(
      (prec) => `
      <li style="margin-bottom: 6px; font-size: 12px; color: #1e293b;">
        <strong>${prec.title}</strong>: <span style="color: #475569;">${prec.significance}</span>
      </li>
    `
    )
    .join('') || '';

  const referencesHtml = content.standardReferences
    ?.map(
      (ref) => `
      <li style="margin-bottom: 6px; font-size: 12px; color: #1e293b;">
        <strong>${ref.title}</strong> — <span style="color: #64748b;">${ref.source}</span>
        <div style="font-size: 11px; color: #0369a1;">Relevance: ${ref.relevance}</div>
      </li>
    `
    )
    .join('') || '';

  const mcqsHtml = content.microQuiz
    ?.slice(0, 5)
    .map(
      (q, idx) => `
      <div style="margin-bottom: 12px; padding: 10px; border-left: 3px solid #3b82f6; background: #f0f9ff; border-radius: 4px;">
        <div style="font-weight: bold; font-size: 12px; color: #0c4a6e;">Q${idx + 1}. ${q.question}</div>
        <div style="margin: 6px 0 0 10px; font-size: 11px; color: #334155;">
          ${q.options.map((opt, oIdx) => `<div style="${oIdx === q.correctIndex ? 'font-weight: bold; color: #15803d;' : ''}">(${String.fromCharCode(65 + oIdx)}) ${opt}</div>`).join('')}
        </div>
        <div style="font-size: 11px; color: #475569; margin-top: 6px;"><em>Explanation:</em> ${q.explanation}</div>
      </div>
    `
    )
    .join('') || '';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${content.title} - AspirantAtlas Study Notes</title>
  <style>
    @page { margin: 15mm 15mm 15mm 15mm; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      line-height: 1.5;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 12px;
      margin-bottom: 20px;
    }
    .badge {
      display: inline-block;
      padding: 3px 8px;
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
      background: #e0f2fe;
      color: #0369a1;
      border-radius: 4px;
      margin-bottom: 6px;
    }
    h1 {
      font-size: 20px;
      margin: 4px 0 8px 0;
      color: #0f172a;
    }
    h2 {
      font-size: 14px;
      margin: 20px 0 10px 0;
      color: #1e293b;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    p { font-size: 12px; color: #334155; margin: 0 0 10px 0; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; }
    .footer {
      margin-top: 30px;
      padding-top: 10px;
      border-top: 1px dashed #cbd5e1;
      font-size: 10px;
      color: #64748b;
      display: flex;
      justify-content: space-between;
    }
    .no-print {
      margin-bottom: 20px;
      padding: 10px 14px;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .btn-print {
      background: #2563eb;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      font-weight: bold;
      font-size: 12px;
      cursor: pointer;
    }
    @media print {
      .no-print { display: none !important; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="no-print">
    <span style="font-size: 12px; color: #1e3a8a; font-weight: 600;">
      📄 AspirantAtlas High-Yield Study Notes — Print or Save as PDF (Cmd+P / Ctrl+P)
    </span>
    <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
  </div>

  <div class="header">
    <span class="badge">${content.subject}</span>
    <h1>${title}</h1>
    <p style="font-size: 12px; color: #475569; font-style: italic; margin-bottom: 0;">
      AspirantAtlas Official Civil Services Curriculum Archive (Zero External Paywalls)
    </p>
  </div>

  <h2>1. Module Overview & Strategic Context</h2>
  <p>${content.overview}</p>

  ${
    referencesHtml
      ? `
    <h2>2. Standard Prescribed References</h2>
    <ul style="padding-left: 20px; margin: 0;">
      ${referencesHtml}
    </ul>
  `
      : ''
  }

  ${
    provisionsHtml
      ? `
    <h2>3. Constitutional & Statutory Clauses</h2>
    <table>
      <thead>
        <tr style="background: #f1f5f9;">
          <th style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: left; font-size: 11px;">Provision</th>
          <th style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: left; font-size: 11px;">Subject</th>
          <th style="padding: 6px 10px; border: 1px solid #cbd5e1; text-align: left; font-size: 11px;">Statutory Details</th>
        </tr>
      </thead>
      <tbody>
        ${provisionsHtml}
      </tbody>
    </table>
  `
      : ''
  }

  ${
    pillarsHtml
      ? `
    <h2>4. Core Pillars & Conceptual Framework</h2>
    ${pillarsHtml}
  `
      : ''
  }

  ${
    precedentsHtml
      ? `
    <h2>5. Landmark Precedents & Judgments</h2>
    <ul style="padding-left: 20px; margin: 0;">
      ${precedentsHtml}
    </ul>
  `
      : ''
  }

  ${
    mcqsHtml
      ? `
    <h2>6. High-Yield Prelims Micro-Drill</h2>
    ${mcqsHtml}
  `
      : ''
  }

  ${
    content.mainsScaffold
      ? `
    <h2>7. Mains Answer Scaffold (${content.mainsScaffold.marks} Marks • ${content.mainsScaffold.timeMinutes} Mins)</h2>
    <div style="background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 6px; padding: 12px; margin-bottom: 12px;">
      <div style="font-weight: bold; font-size: 12px; color: #292524; margin-bottom: 8px;">
        Question: ${content.mainsScaffold.question}
      </div>
      <div style="font-size: 11px; color: #44403c;">
        <p><strong>Introduction:</strong> ${content.mainsScaffold.approach.intro}</p>
        <p><strong>Body Structuring:</strong></p>
        <ul style="padding-left: 18px; margin: 4px 0;">
          ${content.mainsScaffold.approach.body.map((b) => `<li><strong>${b.subheading}:</strong> ${b.points.join('; ')}</li>`).join('')}
        </ul>
        <p><strong>Conclusion:</strong> ${content.mainsScaffold.approach.conclusion}</p>
      </div>
    </div>
  `
      : ''
  }

  <div class="footer">
    <span>AspirantAtlas • https://aspirant-atlas.pages.dev</span>
    <span>Generated: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
  </div>

  <script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        window.print();
      }, 500);
    });
  </script>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
}
