import { ExamId } from '../types';

export interface AspirantUser {
  id: string;
  name: string;
  email: string;
  mobile?: string;
  prepMode?: 'full-time' | 'working-pro';
  stateDistrict?: string;
  targetExam: ExamId;
  prepHorizonDays: number;
  dailyGoalHours: number;
  joinedDate: string;
  isCloudSynced: boolean;
  lastSyncedAt: string;
  isPro?: boolean;
  plan?: 'free' | 'sprint' | 'topper';
  subscriptionExpiresAt?: string;
  invoiceId?: string;
}

export const DEMO_PROFILES: AspirantUser[] = [
  {
    id: 'demo-upsc',
    name: 'Ananya Sharma',
    email: 'ananya.air14@aspirantatlas.org',
    mobile: '+91 98765 43210',
    targetExam: 'upsc',
    prepHorizonDays: 150,
    dailyGoalHours: 8,
    joinedDate: 'Oct 2026',
    isCloudSynced: true,
    lastSyncedAt: 'Just now',
    isPro: true,
    plan: 'topper',
    subscriptionExpiresAt: '2027-10-15',
    invoiceId: 'INV-2026-AA001'
  },
  {
    id: 'demo-appsc',
    name: 'Rajesh Varma',
    email: 'rajesh.appsc@aspirantatlas.org',
    mobile: '+91 98765 12345',
    targetExam: 'appsc',
    prepHorizonDays: 90,
    dailyGoalHours: 6,
    joinedDate: 'Oct 2026',
    isCloudSynced: true,
    lastSyncedAt: 'Just now',
    isPro: false,
    plan: 'free'
  },
  {
    id: 'demo-tspsc',
    name: 'Kavitha Rao',
    email: 'kavitha.tspsc@aspirantatlas.org',
    targetExam: 'tspsc',
    prepHorizonDays: 90,
    dailyGoalHours: 7,
    joinedDate: 'Oct 2026',
    isCloudSynced: true,
    lastSyncedAt: 'Just now'
  }
];

const STORAGE_KEY_USER = 'aspirant_user_profile';

export function getCurrentUser(): AspirantUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return null;
}

export function saveUser(user: AspirantUser): void {
  try {
    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
  } catch {
    // ignore
  }
}

export function loginWithDemo(profileId: string): AspirantUser {
  const profile = DEMO_PROFILES.find(p => p.id === profileId) || DEMO_PROFILES[0];
  const user = {
    ...profile,
    lastSyncedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  saveUser(user);
  return user;
}

export function loginWithEmail(name: string, email: string, targetExam: ExamId, mobile?: string): AspirantUser {
  const user: AspirantUser = {
    id: `user-${Date.now()}`,
    name: name.trim() || 'Aspirant',
    email: email.trim() || 'user@aspirantatlas.org',
    mobile: mobile?.trim() || undefined,
    targetExam,
    prepHorizonDays: 90,
    dailyGoalHours: 6,
    joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    isCloudSynced: true,
    lastSyncedAt: 'Just now'
  };
  saveUser(user);
  return user;
}

export function updateUserProfile(updates: Partial<AspirantUser>): AspirantUser | null {
  const current = getCurrentUser();
  if (!current) return null;
  const updated = { ...current, ...updates };
  saveUser(updated);
  return updated;
}

export function upgradeUserToPro(
  planId: 'sprint' | 'topper',
  durationDays: number,
  invoiceId: string
): AspirantUser {
  const current = getCurrentUser();
  const expiryDate = new Date(Date.now() + durationDays * 86400000).toISOString().split('T')[0];

  const baseUser: AspirantUser = current || {
    id: `user-${Date.now()}`,
    name: 'Pro Aspirant',
    email: 'subscriber@aspirantatlas.org',
    targetExam: 'upsc',
    prepHorizonDays: 90,
    dailyGoalHours: 8,
    joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    isCloudSynced: true,
    lastSyncedAt: 'Just now'
  };

  const upgraded: AspirantUser = {
    ...baseUser,
    isPro: true,
    plan: planId,
    subscriptionExpiresAt: expiryDate,
    invoiceId
  };

  saveUser(upgraded);
  return upgraded;
}

export function logout(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_USER);
  } catch {
    // ignore
  }
}

export async function syncCloudData(): Promise<{ success: boolean; syncedAt: string }> {
  // Simulate network latency for cloud sync
  await new Promise(r => setTimeout(r, 600));
  const user = getCurrentUser();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  if (user) {
    user.isCloudSynced = true;
    user.lastSyncedAt = time;
    saveUser(user);
  }
  return { success: true, syncedAt: time };
}

/**
 * Exports complete browser state as a portable JSON backup file.
 */
export function exportFullCloudBackupJson(): string {
  const user = getCurrentUser();
  const userId = user?.id || 'default-aspirant';
  const payload = {
    version: '1.3.0',
    exportedAt: new Date().toISOString(),
    user,
    testAttempts: JSON.parse(localStorage.getItem('aspirant_test_attempts') || '[]'),
    mainsReports: JSON.parse(localStorage.getItem('aspirant_mains_reports') || '[]'),
    userProgress: JSON.parse(localStorage.getItem('aspirant_atlas_progress') || '{}'),
    studyPlan: JSON.parse(localStorage.getItem('aspirant_study_plan') || '{}'),
    userLedger: JSON.parse(localStorage.getItem(`aspirant_user_ledger_${userId}`) || 'null'),
    activeSession: JSON.parse(localStorage.getItem(`aspirant_active_session_${userId}`) || 'null')
  };
  return JSON.stringify(payload, null, 2);
}

/**
 * Restores full browser state from a JSON backup file.
 */
export function importCloudBackupJson(jsonString: string): boolean {
  try {
    const data = JSON.parse(jsonString);
    if (data.user) localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(data.user));
    if (data.testAttempts) localStorage.setItem('aspirant_test_attempts', JSON.stringify(data.testAttempts));
    if (data.mainsReports) localStorage.setItem('aspirant_mains_reports', JSON.stringify(data.mainsReports));
    if (data.userProgress) localStorage.setItem('aspirant_atlas_progress', JSON.stringify(data.userProgress));
    if (data.studyPlan) localStorage.setItem('aspirant_study_plan', JSON.stringify(data.studyPlan));
    const userId = data.user?.id || 'default-aspirant';
    if (data.userLedger) localStorage.setItem(`aspirant_user_ledger_${userId}`, JSON.stringify(data.userLedger));
    if (data.activeSession) localStorage.setItem(`aspirant_active_session_${userId}`, JSON.stringify(data.activeSession));
    return true;
  } catch (err) {
    console.error('Failed to import cloud backup:', err);
    return false;
  }
}

// ==========================================
// VISITOR & STUDENT LEAD CAPTURE ENGINE
// ==========================================

export interface CapturedLead {
  id: string;
  name: string;
  email: string;
  mobile: string;
  targetExam: ExamId;
  timeline: string;
  source: string;
  capturedAt: string;
}

const STORAGE_KEY_LEADS = 'aspirant_captured_leads';

export function getCapturedLeads(): CapturedLead[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_LEADS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCapturedLead(lead: Omit<CapturedLead, 'id' | 'capturedAt'>): CapturedLead {
  const existing = getCapturedLeads();
  const newLead: CapturedLead = {
    ...lead,
    id: `lead-${Date.now()}`,
    capturedAt: new Date().toISOString()
  };
  const updated = [newLead, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY_LEADS, JSON.stringify(updated));
  } catch {
    // ignore
  }
  return newLead;
}

export function exportLeadsCsv(): string {
  const leads = getCapturedLeads();
  if (leads.length === 0) return 'ID,Name,Email,Mobile,Target Exam,Timeline,Source,Captured At';
  const headers = ['ID', 'Name', 'Email', 'Mobile', 'Target Exam', 'Timeline', 'Source', 'Captured At'];
  const rows = leads.map(l => [
    l.id,
    `"${l.name.replace(/"/g, '""')}"`,
    l.email,
    l.mobile,
    l.targetExam,
    `"${l.timeline.replace(/"/g, '""')}"`,
    `"${l.source.replace(/"/g, '""')}"`,
    l.capturedAt
  ]);
  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}
