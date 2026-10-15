import React, { useState, useEffect } from 'react';
import { 
  X, 
  Users, 
  Eye, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Download, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  Compass, 
  FileText,
  Activity
} from 'lucide-react';
import { 
  getVisitorAnalytics, 
  exportVisitorLogsCsv, 
  VisitorAnalyticsSummary 
} from '../services/visitorTracker';
import { exportLeadsCsv } from '../services/authService';

interface AdminVisitorInsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminVisitorInsightsModal: React.FC<AdminVisitorInsightsModalProps> = ({
  isOpen,
  onClose
}) => {
  const [data, setData] = useState<VisitorAnalyticsSummary | null>(null);

  useEffect(() => {
    if (isOpen) {
      setData(getVisitorAnalytics());
    }
  }, [isOpen]);

  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <Users className="w-5 h-5 text-indigo-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-extrabold text-white">
                  Visitor Traffic & Lead Analytics
                </h3>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black uppercase px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Telemetry
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Anonymous client-side session telemetry, device breakdown & conversion tracking
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Metric Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center space-x-1.5 text-slate-500 text-xs font-semibold">
                <Users className="w-3.5 h-3.5 text-indigo-600" />
                <span>Unique Visitors</span>
              </div>
              <div className="text-2xl font-black text-slate-900 mt-1">
                {data.totalUniqueVisitors}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Identified sessions</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center space-x-1.5 text-slate-500 text-xs font-semibold">
                <Eye className="w-3.5 h-3.5 text-sky-600" />
                <span>Page Views</span>
              </div>
              <div className="text-2xl font-black text-slate-900 mt-1">
                {data.totalPageViews}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Screen transitions</div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
              <div className="flex items-center space-x-1.5 text-emerald-700 text-xs font-semibold">
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                <span>Leads Captured</span>
              </div>
              <div className="text-2xl font-black text-emerald-900 mt-1">
                {data.totalLeadsCaptured}
              </div>
              <div className="text-[10px] text-emerald-600 font-medium mt-0.5">Blueprint downloads</div>
            </div>

            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/80">
              <div className="flex items-center space-x-1.5 text-indigo-700 text-xs font-semibold">
                <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                <span>Conversion Rate</span>
              </div>
              <div className="text-2xl font-black text-indigo-900 mt-1">
                {data.conversionRatePercent}%
              </div>
              <div className="text-[10px] text-indigo-600 font-medium mt-0.5">Visitor-to-lead</div>
            </div>
          </div>

          {/* Device & Form Factor Breakdown */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center justify-between">
              <span>Device Form Factor Distribution</span>
              <span className="text-indigo-600 font-bold lowercase">mobile-first index</span>
            </h4>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                  Mobile Smartphones
                </span>
                <span>{data.deviceDistribution.mobile}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full rounded-full transition-all"
                  style={{ width: `${data.deviceDistribution.mobile}%` }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Monitor className="w-3.5 h-3.5 text-sky-600" />
                  Desktop & Laptops
                </span>
                <span>{data.deviceDistribution.desktop}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-sky-500 h-full rounded-full transition-all"
                  style={{ width: `${data.deviceDistribution.desktop}%` }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Tablet className="w-3.5 h-3.5 text-amber-600" />
                  Tablets & iPads
                </span>
                <span>{data.deviceDistribution.tablet}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-500 h-full rounded-full transition-all"
                  style={{ width: `${data.deviceDistribution.tablet}%` }}
                />
              </div>
            </div>
          </div>

          {/* Current Visitor Session Metadata */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="flex items-center justify-between font-bold text-slate-800">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-indigo-600" />
                Active Session Telemetry
              </span>
              <span className="font-mono text-[11px] text-slate-500">{data.activeVisitor.id}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-slate-600 text-[11px]">
              <div><strong>OS:</strong> {data.activeVisitor.os}</div>
              <div><strong>Browser:</strong> {data.activeVisitor.browser}</div>
              <div><strong>Resolution:</strong> {data.activeVisitor.screenResolution}</div>
              <div><strong>Referrer:</strong> {data.activeVisitor.referrer}</div>
            </div>
          </div>

          {/* CRM & Telemetry Download Actions */}
          <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-indigo-900">
              Data Portability & Commercial CRM Extraction
            </h4>
            <p className="text-xs text-indigo-800/80">
              Export all accumulated visitor telemetry and opt-in contact leads for WhatsApp marketing, CRM import, or audit logs.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <button
                onClick={() => exportLeadsCsv()}
                className="w-full sm:w-auto btn-tactile px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Captured Leads CSV ({data.totalLeadsCaptured})</span>
              </button>

              <button
                onClick={() => exportVisitorLogsCsv()}
                className="w-full sm:w-auto btn-tactile px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs flex items-center justify-center space-x-2 shadow-2xs transition-all"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Export Visitor Telemetry CSV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>AspirantAtlas Telemetry • Client-Side Zero Tracker Cookie Architecture</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 font-bold text-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
