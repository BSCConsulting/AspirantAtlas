export interface SessionActivity {
  nodesRead: string[];
  mcqsAttempted: number;
  mcqsCorrect: number;
  mainsEvaluationsCount: number;
  mainsTotalScore: number;
}

export interface StudySession {
  sessionId: string;
  userId: string;
  checkInTime: string; // ISO string
  checkOutTime?: string; // ISO string
  durationMinutes: number;
  sessionGoal: string;
  productivityRating?: number; // 1-5
  notes?: string;
  activities: SessionActivity;
}

export interface UserStudyLedger {
  userId: string;
  totalStudyMinutes: number;
  currentStreakDays: number;
  lastCheckInDate?: string;
  sessions: StudySession[];
}

const STORAGE_KEY_PREFIX_ACTIVE = 'aspirant_active_session_';
const STORAGE_KEY_PREFIX_LEDGER = 'aspirant_user_ledger_';

/**
 * Returns initial sample sessions for demo profiles so they have realistic historical logs.
 */
function getInitialSampleSessions(userId: string): StudySession[] {
  const now = new Date();
  const sampleGoals = [
    'Constitutional Framework & Articles 14-32 In-depth',
    'GS-2 Federalism PYQ Analysis & Answer Practice',
    'Modern History Freedom Struggle 1919-1947 Revision',
    'Daily Editorial Notes & Current Affairs Speed Drill',
    'Macroeconomics National Income & Inflation MCQs',
    'AP/TS Reorganisation Act & State Core Provisions'
  ];

  const sessions: StudySession[] = [];
  // Generate past days of realistic study sessions
  for (let i = 10; i >= 1; i--) {
    const sessionDate = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    sessionDate.setHours(9 + (i % 3) * 2, 15, 0, 0);
    const checkIn = sessionDate.toISOString();
    const duration = 120 + (i * 15) % 150; // 2 to 4.5 hours
    const checkOutDate = new Date(sessionDate.getTime() + duration * 60 * 1000);
    
    sessions.push({
      sessionId: `sess-seed-${userId}-${i}`,
      userId,
      checkInTime: checkIn,
      checkOutTime: checkOutDate.toISOString(),
      durationMinutes: duration,
      sessionGoal: sampleGoals[i % sampleGoals.length],
      productivityRating: (4 + (i % 2)) as 4 | 5,
      notes: i % 2 === 0 ? 'High concentration, completed PYQ answers with good citations.' : 'Reviewed key articles and solved topic quiz.',
      activities: {
        nodesRead: [`node-sample-${i}`],
        mcqsAttempted: 15 + (i * 3) % 15,
        mcqsCorrect: 12 + (i * 3) % 12,
        mainsEvaluationsCount: i % 3 === 0 ? 1 : 0,
        mainsTotalScore: i % 3 === 0 ? 6.5 : 0
      }
    });
  }
  return sessions;
}

/**
 * Retrieves the user's study ledger from storage.
 */
export function getUserLedger(userId: string): UserStudyLedger {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX_LEDGER}${userId}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Failed to read ledger:', err);
  }

  // If first time, seed initial data for demo users or empty for new users
  const isDemo = userId.startsWith('demo-') || userId === 'default-aspirant';
  const initialSessions = isDemo ? getInitialSampleSessions(userId) : [];
  const totalMinutes = initialSessions.reduce((acc, s) => acc + s.durationMinutes, 0);

  const initialLedger: UserStudyLedger = {
    userId,
    totalStudyMinutes: totalMinutes,
    currentStreakDays: initialSessions.length > 0 ? 7 : 0,
    lastCheckInDate: initialSessions.length > 0 ? initialSessions[initialSessions.length - 1].checkInTime : undefined,
    sessions: initialSessions
  };

  saveUserLedger(initialLedger);
  return initialLedger;
}

/**
 * Saves user study ledger to storage.
 */
export function saveUserLedger(ledger: UserStudyLedger): void {
  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX_LEDGER}${ledger.userId}`, JSON.stringify(ledger));
  } catch (err) {
    console.error('Failed to save ledger:', err);
  }
}

/**
 * Gets the active session for the given user, or null if not checked in.
 */
export function getActiveSession(userId: string): StudySession | null {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX_ACTIVE}${userId}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Failed to read active session:', err);
  }
  return null;
}

/**
 * Starts a new check-in session for the user.
 */
export function startCheckIn(userId: string, sessionGoal?: string): StudySession {
  const existing = getActiveSession(userId);
  if (existing) {
    return existing;
  }

  const newSession: StudySession = {
    sessionId: `sess-${Date.now()}`,
    userId,
    checkInTime: new Date().toISOString(),
    durationMinutes: 0,
    sessionGoal: (sessionGoal && sessionGoal.trim()) || 'Daily General Studies Revision & PYQ Practice',
    activities: {
      nodesRead: [],
      mcqsAttempted: 0,
      mcqsCorrect: 0,
      mainsEvaluationsCount: 0,
      mainsTotalScore: 0
    }
  };

  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX_ACTIVE}${userId}`, JSON.stringify(newSession));
  } catch (err) {
    console.error('Failed to save active session:', err);
  }

  return newSession;
}

/**
 * Records an activity (syllabus read, MCQ drill, Mains answer) into the active session.
 */
export function recordSessionActivity(
  userId: string,
  type: 'node_read' | 'mcq' | 'mains',
  payload: {
    nodeId?: string;
    attempted?: number;
    correct?: number;
    mainsScore?: number;
  }
): void {
  const session = getActiveSession(userId);
  if (!session) return; // No active session to attach to

  if (type === 'node_read' && payload.nodeId) {
    if (!session.activities.nodesRead.includes(payload.nodeId)) {
      session.activities.nodesRead.push(payload.nodeId);
    }
  } else if (type === 'mcq') {
    session.activities.mcqsAttempted += payload.attempted || 0;
    session.activities.mcqsCorrect += payload.correct || 0;
  } else if (type === 'mains') {
    session.activities.mainsEvaluationsCount += 1;
    session.activities.mainsTotalScore += payload.mainsScore || 0;
  }

  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX_ACTIVE}${userId}`, JSON.stringify(session));
  } catch (err) {
    console.error('Failed to update active session activity:', err);
  }
}

/**
 * Checks out the current active session, computes duration, updates ledger, and returns the finished session.
 */
export function endCheckOut(
  userId: string,
  productivityRating: number = 5,
  notes?: string
): StudySession | null {
  const session = getActiveSession(userId);
  if (!session) return null;

  const checkOutDate = new Date();
  const checkInDate = new Date(session.checkInTime);
  const diffMinutes = Math.max(1, Math.round((checkOutDate.getTime() - checkInDate.getTime()) / 60000));

  session.checkOutTime = checkOutDate.toISOString();
  session.durationMinutes = diffMinutes;
  session.productivityRating = productivityRating;
  session.notes = notes?.trim() || '';

  // Append to user ledger
  const ledger = getUserLedger(userId);
  ledger.sessions.unshift(session);
  ledger.totalStudyMinutes += diffMinutes;
  ledger.lastCheckInDate = session.checkInTime;

  // Recalculate streak
  ledger.currentStreakDays = Math.max(1, ledger.currentStreakDays);

  saveUserLedger(ledger);

  // Clear active session
  try {
    localStorage.removeItem(`${STORAGE_KEY_PREFIX_ACTIVE}${userId}`);
  } catch (err) {
    console.error('Failed to clear active session:', err);
  }

  return session;
}

/**
 * Aggregates study data into daily buckets for the past `days` count (default 30).
 */
export function getDailyHeatmapData(
  userId: string,
  days: number = 30
): { dateStr: string; dateLabel: string; minutes: number; sessionCount: number; isToday: boolean }[] {
  const ledger = getUserLedger(userId);
  const result: { dateStr: string; dateLabel: string; minutes: number; sessionCount: number; isToday: boolean }[] = [];
  const today = new Date();

  // Create date lookup
  const map: Record<string, { minutes: number; count: number }> = {};
  ledger.sessions.forEach(s => {
    const dateKey = new Date(s.checkInTime).toISOString().split('T')[0];
    if (!map[dateKey]) map[dateKey] = { minutes: 0, count: 0 };
    map[dateKey].minutes += s.durationMinutes;
    map[dateKey].count += 1;
  });

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
    const dateKey = d.toISOString().split('T')[0];
    const item = map[dateKey] || { minutes: 0, count: 0 };
    result.push({
      dateStr: dateKey,
      dateLabel: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      minutes: item.minutes,
      sessionCount: item.count,
      isToday: i === 0
    });
  }

  return result;
}

/**
 * Formats minutes into human readable string (e.g., 2h 45m or 45m).
 */
export function formatMinutes(totalMinutes: number): string {
  if (totalMinutes <= 0) return '0m';
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (hours === 0) return `${mins}m`;
  if (mins === 0) return `${hours}h`;
  return `${hours}h ${mins}m`;
}
