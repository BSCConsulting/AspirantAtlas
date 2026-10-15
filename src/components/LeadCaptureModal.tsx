import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  Mail, 
  User, 
  BookOpen, 
  ExternalLink,
  AlertCircle,
  Printer
} from 'lucide-react';
import { ExamId } from '../types';
import { saveCapturedLead } from '../services/authService';
import { validateIndianMobile, sanitizePhoneInput } from '../utils/phoneValidator';
import { generateAndPrintBlueprint } from '../utils/blueprintGenerator';
import { playChime, playClick } from '../services/soundService';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedExam: ExamId;
  defaultEmail?: string;
  defaultName?: string;
  defaultMobile?: string;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  selectedExam,
  defaultEmail = '',
  defaultName = '',
  defaultMobile = ''
}) => {
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState<string | null>(null);
  const [isMobileValid, setIsMobileValid] = useState(false);
  const [registeredPhone, setRegisteredPhone] = useState('');
  const [targetExam, setTargetExam] = useState<ExamId>(selectedExam);
  const [timeline, setTimeline] = useState('90-Day Standard Sprint');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize and validate default mobile if provided
  useEffect(() => {
    if (defaultMobile) {
      const sanitized = sanitizePhoneInput(defaultMobile);
      setMobile(sanitized);
      const res = validateIndianMobile(sanitized);
      setIsMobileValid(res.isValid);
      setMobileError(res.isValid ? null : res.errorMessage || null);
    }
  }, [defaultMobile]);

  if (!isOpen) return null;

  const handleMobileChange = (val: string) => {
    const sanitized = sanitizePhoneInput(val);
    setMobile(sanitized);

    if (!sanitized) {
      setMobileError(null);
      setIsMobileValid(false);
      return;
    }

    const res = validateIndianMobile(sanitized);
    if (res.isValid) {
      setMobileError(null);
      setIsMobileValid(true);
    } else {
      setMobileError(res.errorMessage || 'Invalid phone number');
      setIsMobileValid(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();

    const valResult = validateIndianMobile(mobile);
    if (!valResult.isValid) {
      setMobileError(valResult.errorMessage || 'Please enter a valid 10-digit Indian mobile number');
      setIsMobileValid(false);
      return;
    }

    if (!name.trim() || !email.trim()) return;

    saveCapturedLead({
      name: name.trim(),
      email: email.trim(),
      mobile: valResult.formatted,
      targetExam,
      timeline,
      source: 'blueprint_modal'
    });

    setRegisteredPhone(valResult.formatted);
    setIsSubmitted(true);
    playChime();
  };

  const handleDownloadBlueprint = () => {
    playChime();
    generateAndPrintBlueprint(targetExam, name.trim() || 'Aspirant');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-elevation-3 border border-slate-200/90 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Ribbon */}
        <div className="relative p-6 sm:p-7 bg-gradient-to-br from-indigo-950 via-slate-900 to-sky-950 text-white shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative z-10 space-y-2">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>High-Yield Aspirant Kit 2026</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
              Download Free Civil Services Blueprint & Daily Dose
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Get the 2026 Micro-Topic Syllabus Matrix, Elimination Formula Sheets, and access to our Daily WhatsApp & Telegram Infographic broadcast.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. Venkat Raman"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Gmail Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="venkat@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Mobile <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={mobile}
                      onChange={(e) => handleMobileChange(e.target.value)}
                      maxLength={14}
                      className={`w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 border text-slate-900 focus:bg-white focus:outline-none focus:ring-2 ${
                        mobileError
                          ? 'border-rose-400 focus:ring-rose-500/20 focus:border-rose-500 bg-rose-50/20'
                          : isMobileValid
                          ? 'border-emerald-400 focus:ring-emerald-500/20 focus:border-emerald-500'
                          : 'border-slate-200 focus:ring-indigo-500/20 focus:border-indigo-500'
                      }`}
                    />
                  </div>
                  {/* Validation Feedback */}
                  {mobileError && (
                    <div className="flex items-center space-x-1 text-[11px] text-rose-600 font-semibold mt-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{mobileError}</span>
                    </div>
                  )}
                  {isMobileValid && (
                    <div className="flex items-center space-x-1 text-[11px] text-emerald-600 font-semibold mt-1">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      <span>Verified 10-digit Indian WhatsApp Number</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Target Competitive Exam
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['upsc', 'appsc', 'tspsc'] as ExamId[]).map((e) => (
                    <button
                      key={e}
                      type="button"
                      onClick={() => setTargetExam(e)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                        targetExam === e
                          ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {e.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preparation Horizon / Pace
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium cursor-pointer"
                >
                  <option value="30-Day Sprint (Crash Revision)">30-Day Crash Sprint (Rapid Elimination Focus)</option>
                  <option value="90-Day Standard Sprint">90-Day Standard Sprint (Core + Mock Drills)</option>
                  <option value="150-Day Foundation (Zero to Rank)">150-Day Comprehensive Foundation</option>
                  <option value="Working Professional (3-4 hrs/day)">Working Professional Track (Evenings & Weekends)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!isMobileValid || !name.trim() || !email.trim()}
                  className={`btn-tactile w-full py-3 px-4 rounded-xl text-xs font-black transition-all flex items-center justify-center space-x-2 ${
                    isMobileValid && name.trim() && email.trim()
                      ? 'bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white shadow-elevation-1 hover:shadow-glow-indigo cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>Instant Download Blueprint & Join Broadcast</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero spam guarantee. 100% free educational resources.</span>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-5 py-4 animate-scaleUp">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-black text-slate-900">Your Access Kit is Ready!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>! We have registered your WhatsApp number (<strong>{registeredPhone}</strong>) for our daily current affairs capsule.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={handleDownloadBlueprint}
                  className="btn-tactile w-full py-3 px-4 rounded-xl text-xs font-black bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 text-white shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-white" />
                  <span>Download / Print {targetExam.toUpperCase()} PDF Blueprint</span>
                </button>

                <a
                  href="https://t.me/AspirantAtlasOfficial"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-tactile w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200/80 flex items-center justify-center space-x-2 transition-all"
                >
                  <Send className="w-4 h-4 text-sky-600" />
                  <span>Join Official Telegram Channel (@AspirantAtlas)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-sky-500" />
                </a>

                <button
                  onClick={onClose}
                  className="btn-tactile w-full py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Return to Preparation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
