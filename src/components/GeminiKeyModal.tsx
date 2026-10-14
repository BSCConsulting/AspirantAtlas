import React, { useState } from 'react';
import { X, Sparkles, Key, CheckCircle2, AlertCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { getGeminiApiKey, setGeminiApiKey, testGeminiConnection } from '../services/geminiEvaluator';

interface GeminiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeyUpdated?: () => void;
}

export const GeminiKeyModal: React.FC<GeminiKeyModalProps> = ({ isOpen, onClose, onKeyUpdated }) => {
  const [apiKey, setApiKey] = useState<string>(() => getGeminiApiKey());
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);

  if (!isOpen) return null;

  const handleSave = () => {
    setGeminiApiKey(apiKey);
    if (onKeyUpdated) onKeyUpdated();
    onClose();
  };

  const handleTest = async () => {
    setIsTesting(true);
    setTestResult(null);
    const res = await testGeminiConnection(apiKey);
    setTestResult(res);
    setIsTesting(false);
  };

  const handleClear = () => {
    setApiKey('');
    setGeminiApiKey('');
    setTestResult(null);
    if (onKeyUpdated) onKeyUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-modal bg-white rounded-t-3xl sm:rounded-3xl border-t sm:border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6 animate-scaleUp max-h-[88vh] overflow-y-auto">
        {/* Mobile Grab Handle */}
        <div className="sm:hidden w-12 h-1 bg-slate-200 rounded-full mx-auto -mt-2 mb-2" />
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-elevation-1">
              <Sparkles className="w-5 h-5 text-sky-200" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-lg">Gemini AI Intelligence Engine</h3>
              <p className="text-xs text-slate-500 font-medium">UPSC / State PSC Mains Evaluation & Vision OCR</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Info Callout */}
        <div className="bg-sky-50/80 rounded-2xl p-4 border border-sky-200/80 space-y-2 text-xs text-sky-950">
          <div className="flex items-center space-x-2 font-black text-sky-900">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Client-Side Secure Key Storage</span>
          </div>
          <p className="leading-relaxed text-sky-800">
            Your key is saved exclusively in your browser’s local storage. It is never logged or transmitted to any third-party backend. It calls Google’s Gemini Flash API directly from your device.
          </p>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
            Google Gemini API Key
          </label>
          <div className="relative">
            <Key className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full pl-10 pr-4 py-2.5 text-xs font-mono rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50"
            />
          </div>
          <div className="flex items-center justify-between text-[11px] pt-1">
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
              className="text-sky-600 hover:text-sky-700 font-bold inline-flex items-center gap-1"
            >
              <span>Get Free Gemini API Key from Google AI Studio</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {apiKey && (
              <button
                type="button"
                onClick={handleClear}
                className="text-slate-400 hover:text-rose-600 font-medium"
              >
                Clear Key
              </button>
            )}
          </div>
        </div>

        {/* Test Result Message */}
        {testResult && (
          <div
            className={`p-3 rounded-xl border text-xs flex items-center space-x-2 ${
              testResult.success
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-rose-50 border-rose-300 text-rose-900'
            }`}
          >
            {testResult.success ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span className="font-semibold">{testResult.message}</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={handleTest}
            disabled={!apiKey || isTesting}
            className="btn-tactile px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 hover:bg-slate-100 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {isTesting ? 'Testing connection...' : 'Test Connection'}
          </button>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="btn-tactile px-5 py-2 rounded-xl text-xs font-black bg-slate-900 hover:bg-sky-600 text-white shadow-elevation-1 hover:shadow-glow-sky transition-all"
            >
              Save Key
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
