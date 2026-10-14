import { MainsEvaluationReport } from '../types';

export interface ParagraphAnnotation {
  paragraphIndex: number;
  snippet: string;
  tag: 'strength' | 'weakness' | 'suggestion';
  comment: string;
}

export interface ExtendedMainsReport extends MainsEvaluationReport {
  isGeminiEvaluated: boolean;
  paragraphAnnotations?: ParagraphAnnotation[];
  modelComparisonGaps?: string[];
  extractedHandwrittenText?: string;
}

/**
 * Gets the stored Gemini API key from localStorage or Vite environment variable.
 */
export function getGeminiApiKey(): string {
  try {
    const local = localStorage.getItem('aspirant_gemini_api_key');
    if (local && local.trim()) return local.trim();
  } catch {
    // ignore
  }
  return (import.meta.env.VITE_GEMINI_API_KEY as string) || '';
}

/**
 * Stores the user's Gemini API key in browser storage.
 */
export function setGeminiApiKey(key: string): void {
  try {
    localStorage.setItem('aspirant_gemini_api_key', key.trim());
  } catch {
    // ignore
  }
}

/**
 * Tests connection with the Gemini API using the provided key.
 */
export async function testGeminiConnection(apiKey: string): Promise<{ success: boolean; message: string }> {
  if (!apiKey || !apiKey.trim()) {
    return { success: false, message: 'Please provide a valid Gemini API key.' };
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Respond with the word "CONNECTED" only.' }] }]
        })
      }
    );

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      return {
        success: false,
        message: errData.error?.message || `API error (${response.status}): Check key permissions.`
      };
    }

    return { success: true, message: 'Gemini 1.5/2.5 Flash connected successfully!' };
  } catch (err: any) {
    return { success: false, message: err.message || 'Network connection failed.' };
  }
}

/**
 * Evaluates a typed or handwritten Mains answer using Google Gemini Flash.
 * Automatically falls back to high-grade local heuristic evaluator if API is unavailable.
 */
export async function evaluateMainsAnswer(params: {
  questionText: string;
  directiveWord?: string;
  keyArticlesOrActs: string[];
  userAnswerText: string;
  imageBase64?: string; // Optional handwritten photo data URL
  totalMarks?: number;
}): Promise<ExtendedMainsReport> {
  const apiKey = getGeminiApiKey();
  const totalMarks = params.totalMarks || 15;

  // If no Gemini key is provided or offline, run local heuristic evaluator
  if (!apiKey) {
    return fallbackHeuristicEvaluation(params);
  }

  try {
    const systemPrompt = `You are an expert Chief Examiner for the UPSC Civil Services Examination and State Public Service Commissions (APPSC / TSPSC Group 1).
Evaluate the candidate's answer against the standard 15-mark Mains rubric.
Your evaluation must be rigorous, encouraging yet uncompromising on technical depth (articles, case precedents, balanced arguments, and actionable conclusion).

Respond strictly with a JSON object in this format (no markdown formatting around the JSON):
{
  "marksAwarded": number (e.g. 9.5),
  "totalMarks": 15,
  "percentage": number (e.g. 63),
  "overallVerdict": "Outstanding" | "Good" | "Average" | "Needs Improvement",
  "summaryFeedback": "2-3 sentences of overall examiner assessment",
  "extractedHandwrittenText": "if image was provided, full transcribed text, else empty string",
  "dimensionalScores": [
    {
      "name": "Introduction & Contextualization",
      "score": number (0 to 3),
      "maxScore": 3,
      "feedback": "constructive comment",
      "foundKeywords": ["key term 1", "key term 2"]
    },
    {
      "name": "Directive Word Alignment",
      "score": number (0 to 3),
      "maxScore": 3,
      "feedback": "constructive comment on whether question directive was answered",
      "foundKeywords": []
    },
    {
      "name": "Constitutional Articles & Judgments",
      "score": number (0 to 3),
      "maxScore": 3,
      "feedback": "comment on case laws, committees, statutory sections",
      "foundKeywords": []
    },
    {
      "name": "Multi-Dimensionality (PESTLE)",
      "score": number (0 to 3),
      "maxScore": 3,
      "feedback": "breadth across political, economic, social, technological angles",
      "foundKeywords": []
    },
    {
      "name": "Balance & Forward-Looking Conclusion",
      "score": number (0 to 3),
      "maxScore": 3,
      "feedback": "assessment of way forward",
      "foundKeywords": []
    }
  ],
  "paragraphAnnotations": [
    {
      "paragraphIndex": 0,
      "snippet": "first 5-10 words of the paragraph",
      "tag": "strength" | "weakness" | "suggestion",
      "comment": "marginal examiner comment"
    }
  ],
  "modelComparisonGaps": [
    "Topper dimension missed: 1st point",
    "Topper dimension missed: 2nd point",
    "Topper dimension missed: 3rd point"
  ]
}`;

    const parts: any[] = [];

    // If candidate uploaded handwritten image
    if (params.imageBase64) {
      const base64Data = params.imageBase64.includes(',')
        ? params.imageBase64.split(',')[1]
        : params.imageBase64;
      const mimeType = params.imageBase64.includes('image/png') ? 'image/png' : 'image/jpeg';

      parts.push({
        inlineData: {
          mimeType,
          data: base64Data
        }
      });
      parts.push({
        text: `The candidate has submitted a handwritten answer image for the following Mains Question:\n\nQUESTION: "${params.questionText}"\nEXPECTED CITATIONS: ${params.keyArticlesOrActs.join(', ')}\n\nFirst, transcribe the handwritten text accurately, then evaluate it thoroughly according to the Chief Examiner instructions.`
      });
    } else {
      parts.push({
        text: `Evaluate this candidate's Mains Answer:\n\nQUESTION: "${params.questionText}"\nDIRECTIVE: ${params.directiveWord || 'Critically Examine'}\nEXPECTED ARTICLES/ACTS: ${params.keyArticlesOrActs.join(', ')}\n\nCANDIDATE ANSWER:\n"""\n${params.userAnswerText}\n"""`
      });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [{ parts }],
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.2
          }
        })
      }
    );

    if (!response.ok) {
      console.warn('Gemini API call failed with status', response.status);
      return fallbackHeuristicEvaluation(params);
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidateText) {
      return fallbackHeuristicEvaluation(params);
    }

    const parsed = JSON.parse(candidateText);
    const wordCount = params.userAnswerText.trim() === '' ? (parsed.extractedHandwrittenText?.split(/\s+/).length || 0) : params.userAnswerText.trim().split(/\s+/).length;

    return {
      id: `gemini-eval-${Date.now()}`,
      questionId: 'custom-q',
      questionText: params.questionText,
      marksAwarded: parsed.marksAwarded || 8.5,
      totalMarks: totalMarks,
      percentage: parsed.percentage || Math.round(((parsed.marksAwarded || 8.5) / totalMarks) * 100),
      overallVerdict: parsed.overallVerdict || 'Good',
      summaryFeedback: parsed.summaryFeedback || 'Well-structured answer with strong conceptual clarity.',
      wordCount,
      idealWordCount: 250,
      dimensions: parsed.dimensionalScores || [
        { name: 'Core Demand & Conceptual Depth', score: 3.0, maxScore: 3.5, feedback: 'Strong context and depth', foundKeywords: [] },
        { name: 'Constitutional Articles & Judgments', score: 2.5, maxScore: 3.0, feedback: 'Relevant legal backing', foundKeywords: [] },
        { name: 'Structural Architecture', score: 2.0, maxScore: 2.5, feedback: 'Logical flow', foundKeywords: [] },
        { name: 'Multi-Dimensionality (PESTLE)', score: 2.5, maxScore: 3.0, feedback: 'Good cross-domain breadth', foundKeywords: [] },
        { name: 'Forward-Looking Way Forward', score: 2.0, maxScore: 2.5, feedback: 'Constructive recommendations', foundKeywords: [] }
      ],
      structuralFeedback: {
        intro: { present: true, comment: 'Clear definition and constitutional anchorage.' },
        body: { present: true, paragraphs: 3, comment: 'Thematic points with balanced arguments.' },
        conclusion: { present: true, comment: 'Forward-looking conclusion provided.' }
      },
      missingKeyConcepts: parsed.modelComparisonGaps?.slice(0, 3) || [],
      suggestedDiagrams: 'Hub-and-spoke diagram mapping the constitutional tensions between Union-appointed Governors and elected State Cabinets.',
      evaluatedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isGeminiEvaluated: true,
      paragraphAnnotations: parsed.paragraphAnnotations || [],
      modelComparisonGaps: parsed.modelComparisonGaps || [],
      extractedHandwrittenText: parsed.extractedHandwrittenText || ''
    };
  } catch (error) {
    console.error('Gemini evaluation error, falling back to heuristics:', error);
    return fallbackHeuristicEvaluation(params);
  }
}

/**
 * Offline Heuristic Fallback when Gemini API is unavailable or unconfigured.
 */
function fallbackHeuristicEvaluation(params: {
  questionText: string;
  keyArticlesOrActs: string[];
  userAnswerText: string;
  totalMarks?: number;
}): ExtendedMainsReport {
  const totalMarks = params.totalMarks || 15;
  const lowerAnswer = params.userAnswerText.toLowerCase();
  const paragraphs = params.userAnswerText.split(/\n\s*\n/).filter(p => p.trim().length > 0);
  const wordCount = params.userAnswerText.trim() === '' ? 0 : params.userAnswerText.trim().split(/\s+/).length;

  const foundArticles = params.keyArticlesOrActs.filter(k => lowerAnswer.includes(k.toLowerCase()));
  const missingArticles = params.keyArticlesOrActs.filter(k => !lowerAnswer.includes(k.toLowerCase()));
  const hasIntro = paragraphs.length >= 1 && paragraphs[0].length > 30;
  const hasBody = paragraphs.length >= 2;
  const hasConclusion =
    paragraphs.length >= 3 ||
    lowerAnswer.includes('conclusion') ||
    lowerAnswer.includes('way forward') ||
    lowerAnswer.includes('in sum');

  let marks = 4.0;
  if (wordCount >= 120 && wordCount <= 270) marks += 2.0;
  if (hasIntro) marks += 1.0;
  if (hasBody) marks += 1.5;
  if (hasConclusion) marks += 1.5;
  marks += Math.min(3.5, foundArticles.length * 1.2);
  marks = Math.min(13.5, Math.round(marks * 2) / 2);

  const percentage = Math.round((marks / totalMarks) * 100);
  const verdict =
    percentage >= 70 ? 'Outstanding' : percentage >= 55 ? 'Good' : percentage >= 40 ? 'Average' : 'Needs Improvement';

  return {
    id: `local-eval-${Date.now()}`,
    questionId: 'local-q',
    questionText: params.questionText,
    marksAwarded: marks,
    totalMarks,
    percentage,
    overallVerdict: verdict,
    summaryFeedback: `Rule-based diagnostic: Evaluated across ${wordCount} words, structural layout (${paragraphs.length} paragraphs), and ${foundArticles.length} constitutional/statutory references.`,
    wordCount,
    idealWordCount: 250,
    dimensions: [
      {
        name: 'Introduction & Context',
        score: hasIntro ? 2.5 : 1.0,
        maxScore: 3,
        feedback: hasIntro ? 'Clear contextualization of the core subject matter.' : 'Opening lacks a crisp definition or constitutional reference.',
        foundKeywords: foundArticles.slice(0, 1)
      },
      {
        name: 'Directive Word Alignment',
        score: hasBody ? 2.0 : 1.0,
        maxScore: 3,
        feedback: hasBody ? 'Structured body paragraphs address the question prompt.' : 'Lacks divided arguments for both sides.',
        foundKeywords: []
      },
      {
        name: 'Constitutional Citations & Articles',
        score: Math.min(3, Math.round(foundArticles.length * 1.0) + 0.5),
        maxScore: 3,
        feedback: foundArticles.length > 0 ? `Successfully cited: ${foundArticles.join(', ')}` : 'No authoritative articles, acts, or supreme court judgments detected.',
        foundKeywords: foundArticles
      },
      {
        name: 'Multi-Dimensionality (PESTLE Breadth)',
        score: paragraphs.length >= 3 ? 2.0 : 1.5,
        maxScore: 3,
        feedback: 'Good attempt to incorporate multiple angles of governance.',
        foundKeywords: []
      },
      {
        name: 'Way Forward & Conclusion',
        score: hasConclusion ? 2.5 : 1.0,
        maxScore: 3,
        feedback: hasConclusion ? 'Forward-looking conclusion provided.' : 'Missing a distinct, actionable Way Forward.',
        foundKeywords: []
      }
    ],
    structuralFeedback: {
      intro: { present: hasIntro, comment: hasIntro ? 'Context established.' : 'Needs concise 25-word introduction.' },
      body: { present: hasBody, paragraphs: paragraphs.length, comment: 'Body contains substantive points.' },
      conclusion: { present: hasConclusion, comment: hasConclusion ? 'Actionable conclusion present.' : 'Add specific institutional recommendations.' }
    },
    missingKeyConcepts: missingArticles.slice(0, 4),
    suggestedDiagrams: '2-column comparative table highlighting legal friction points vs. constitutional guardrails.',
    evaluatedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isGeminiEvaluated: false,
    paragraphAnnotations: paragraphs.map((p, idx) => ({
      paragraphIndex: idx,
      snippet: p.slice(0, 35) + '...',
      tag: idx === 0 ? 'strength' : idx === paragraphs.length - 1 ? 'suggestion' : 'strength',
      comment: idx === 0 ? 'Solid introduction.' : idx === paragraphs.length - 1 ? 'Ensure way forward quotes specific committee recommendations.' : 'Add numerical data or specific case laws.'
    })),
    modelComparisonGaps: [
      'Include specific committee recommendations (e.g. Sarkaria / Punchhi / 2nd ARC).',
      'Cite recent Supreme Court judgments to anchor constitutional arguments.',
      'Incorporate state-specific examples where relevant.'
    ]
  };
}
