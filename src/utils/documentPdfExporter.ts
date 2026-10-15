import { DocumentDetail } from '../types';

/**
 * Generates and triggers an official, publication-grade multi-page print/PDF document.
 * Aspirants can save as a clean PDF directly via the browser's native Print dialog (Cmd+P / Ctrl+P).
 */
export function exportDocumentPdfPrint(document: DocumentDetail, showTelugu: boolean = false): void {
  const printWindow = window.open('', '_blank', 'width=960,height=850');
  if (!printWindow) {
    alert('Please allow popups to generate the official document PDF.');
    return;
  }

  const title = showTelugu && document.titleTelugu ? `${document.titleTelugu} (${document.title})` : document.title;

  const sectionsHtml = document.sections.map((section) => `
    <div class="section-card">
      <div class="section-header">
        <span class="section-code">[${section.numberOrCode}]</span>
        <h3 class="section-title">${section.title}</h3>
      </div>
      ${section.keyHighlight ? `
        <div class="highlight-callout">
          <strong>Key Statutory / Analytical Highlight:</strong> ${section.keyHighlight}
        </div>
      ` : ''}
      <ul class="content-list">
        ${section.content.map(pt => `<li>${pt}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const queriesHtml = document.queriesAndAnswers.map((qa, idx) => `
    <div class="qa-card">
      <div class="qa-q">Q${idx + 1}: ${qa.question}</div>
      <div class="qa-a"><strong>Official Finding / Provision:</strong> ${qa.answer}</div>
      ${qa.examTip ? `<div class="qa-tip"><strong>Civil Services Exam Tip:</strong> ${qa.examTip}</div>` : ''}
    </div>
  `).join('');

  const testHtml = document.testQuestions && document.testQuestions.length > 0 ? `
    <div class="page-break"></div>
    <div class="test-container">
      <div class="badge-title">OFFICIAL GAZETTE / ACT COMPLIANCE TEST PAPER</div>
      <p class="subtitle" style="margin-top: 4px; font-size: 12px; color: #64748b;">Practice high-yield MCQ formulations derived directly from this statutory enactment.</p>
      ${document.testQuestions.map((q, idx) => `
        <div class="mcq-card">
          <div class="mcq-q">Q${idx + 1}. ${q.question}</div>
          <div class="mcq-opts">
            ${q.options.map((opt, oIdx) => `
              <div class="mcq-opt ${oIdx === q.correctIndex ? 'mcq-opt-correct' : ''}">
                (${String.fromCharCode(65 + oIdx)}) ${opt}
              </div>
            `).join('')}
          </div>
          <div class="mcq-exp"><strong>Statutory Explanation:</strong> ${q.explanation}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${document.title} - AspirantAtlas Official Archive</title>
  <style>
    @media print {
      body { margin: 0; padding: 0; background: #fff !important; }
      .no-print { display: none !important; }
      .page-break { page-break-before: always; }
      .section-card, .qa-card, .mcq-card { page-break-inside: avoid; }
    }

    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      color: #0f172a;
      background: #f8fafc;
      margin: 0;
      padding: 30px;
    }

    .container {
      max-width: 860px;
      margin: 0 auto;
      background: #ffffff;
      padding: 40px;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }

    .official-header {
      text-align: center;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 20px;
      margin-bottom: 25px;
    }

    .emblem-title {
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-weight: 800;
      color: #047857;
      margin-bottom: 6px;
    }

    .doc-main-title {
      font-size: 24px;
      font-weight: 900;
      color: #0f172a;
      margin: 0 0 10px 0;
      line-height: 1.25;
    }

    .meta-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      font-size: 12px;
      color: #475569;
      font-weight: 600;
      background: #f1f5f9;
      padding: 8px 16px;
      border-radius: 8px;
    }

    .summary-box {
      background: #f8fafc;
      border-left: 4px solid #0284c7;
      padding: 16px 20px;
      margin-bottom: 30px;
      border-radius: 0 8px 8px 0;
      font-size: 13.5px;
      color: #334155;
      line-height: 1.65;
    }

    .summary-box strong {
      color: #0369a1;
      display: block;
      margin-bottom: 4px;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 1px;
    }

    .section-heading {
      font-size: 16px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #0f172a;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 8px;
      margin: 30px 0 16px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 18px 20px;
      margin-bottom: 16px;
    }

    .section-header {
      display: flex;
      align-items: baseline;
      gap: 8px;
      margin-bottom: 10px;
    }

    .section-code {
      font-size: 11px;
      font-weight: 800;
      color: #0284c7;
      background: #e0f2fe;
      padding: 2px 8px;
      border-radius: 4px;
      font-family: monospace;
    }

    .section-title {
      font-size: 15px;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }

    .highlight-callout {
      background: #fffbeb;
      border: 1px solid #fef3c7;
      border-radius: 6px;
      padding: 8px 12px;
      font-size: 12px;
      color: #92400e;
      margin-bottom: 12px;
    }

    .content-list {
      margin: 0;
      padding-left: 20px;
      font-size: 12.5px;
      color: #334155;
    }

    .content-list li {
      margin-bottom: 6px;
      line-height: 1.6;
    }

    .qa-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px 18px;
      margin-bottom: 12px;
    }

    .qa-q {
      font-weight: 700;
      font-size: 13px;
      color: #0f172a;
      margin-bottom: 6px;
    }

    .qa-a {
      font-size: 12.5px;
      color: #334155;
      line-height: 1.55;
      margin-bottom: 6px;
    }

    .qa-tip {
      font-size: 11.5px;
      color: #4338ca;
      background: #e0e7ff;
      padding: 4px 10px;
      border-radius: 4px;
      display: inline-block;
    }

    .test-container {
      margin-top: 30px;
    }

    .badge-title {
      font-size: 14px;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .mcq-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px 18px;
      margin-top: 12px;
      page-break-inside: avoid;
    }

    .mcq-q {
      font-weight: 700;
      font-size: 13px;
      color: #0f172a;
      margin-bottom: 8px;
    }

    .mcq-opts {
      margin-left: 12px;
      font-size: 12px;
      color: #475569;
    }

    .mcq-opt {
      padding: 2px 0;
    }

    .mcq-opt-correct {
      font-weight: 700;
      color: #15803d;
    }

    .mcq-exp {
      font-size: 11.5px;
      color: #64748b;
      margin-top: 8px;
      padding-top: 6px;
      border-top: 1px dashed #cbd5e1;
    }

    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #cbd5e1;
      text-align: center;
      font-size: 11px;
      color: #64748b;
    }

    .print-bar {
      margin-bottom: 20px;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }

    .btn-print {
      background: #0f172a;
      color: #fff;
      border: none;
      padding: 10px 20px;
      font-size: 13px;
      font-weight: 700;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>

  <div class="no-print print-bar">
    <button class="btn-print" onclick="window.print()">🖨️ Save as PDF / Print Document</button>
  </div>

  <div class="container">
    <div class="official-header">
      <div class="emblem-title">ASPIRANTATLAS OFFICIAL STATUTORY & ECONOMIC REPOSITORY</div>
      <h1 class="doc-main-title">${title}</h1>
      <div class="meta-bar">
        <span>🏛️ Authority: ${document.issuingAuthority}</span>
        <span>📅 Date/Year: ${document.dateOrYear}</span>
        <span>📑 Archive Scope: ${document.pages}</span>
      </div>
    </div>

    <div class="summary-box">
      <strong>Executive Legislative / Economic Summary</strong>
      ${document.summary}
    </div>

    <div class="section-heading">
      <span>📖 Document Sections, Statutory Clauses & Strategic Findings</span>
    </div>

    ${sectionsHtml}

    <div class="section-heading">
      <span>💡 Civil Services Exam Model Q&A & Analysis</span>
    </div>

    ${queriesHtml}

    ${testHtml}

    <div class="footer">
      Digitized and archived for UPSC CSE, APPSC Group 1/2, and TSPSC Group 1/2 Civil Services aspirants.<br/>
      Preserved under the zero-redirect AspirantAtlas Public Document Framework.
    </div>
  </div>

  <script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        window.print();
      }, 400);
    });
  </script>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
}
