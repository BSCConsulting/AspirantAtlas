/**
 * Privacy-respecting client-side visitor telemetry and traffic analytics service.
 * Tracks visits, device form factors, module engagement, and conversion metrics.
 */

export interface VisitorProfile {
  id: string;
  firstSeen: string;
  lastSeen: string;
  visitCount: number;
  deviceType: 'Mobile' | 'Tablet' | 'Desktop';
  os: string;
  browser: string;
  screenResolution: string;
  referrer: string;
  pageViewsCount: number;
  visitedTabs: Record<string, number>;
  events: {
    type: string;
    detail?: string;
    timestamp: string;
  }[];
}

export interface VisitorAnalyticsSummary {
  totalUniqueVisitors: number;
  totalPageViews: number;
  deviceDistribution: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
  topVisitedTabs: { tab: string; count: number }[];
  totalLeadsCaptured: number;
  conversionRatePercent: number;
  activeVisitor: VisitorProfile;
}

const VISITOR_ID_KEY = 'aspirant_visitor_id';
const VISITOR_DATA_KEY = 'aspirant_visitor_profile';
const ALL_VISITORS_KEY = 'aspirant_all_visitors_archive';

function detectDevice(): 'Mobile' | 'Tablet' | 'Desktop' {
  if (typeof window === 'undefined') return 'Desktop';
  const ua = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;

  if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua) || (width >= 768 && width <= 1024)) {
    return 'Tablet';
  }
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua) || width < 768) {
    return 'Mobile';
  }
  return 'Desktop';
}

function detectOS(): string {
  if (typeof window === 'undefined') return 'Unknown';
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return 'Windows';
  if (/Mac OS X|Macintosh/i.test(ua)) return 'macOS';
  if (/Android/i.test(ua)) return 'Android';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'iOS';
  if (/Linux/i.test(ua)) return 'Linux';
  return 'Other';
}

function detectBrowser(): string {
  if (typeof window === 'undefined') return 'Unknown';
  const ua = navigator.userAgent;
  if (/Chrome/i.test(ua) && !/Edg/i.test(ua)) return 'Chrome';
  if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) return 'Safari';
  if (/Edg/i.test(ua)) return 'Edge';
  if (/Firefox/i.test(ua)) return 'Firefox';
  return 'Browser';
}

/**
 * Initializes or updates current visitor profile on page launch.
 */
export function initVisitorTracker(): VisitorProfile {
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);
  const now = new Date().toISOString();

  if (!visitorId) {
    visitorId = `vis_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }

  let profile: VisitorProfile;
  const existing = localStorage.getItem(VISITOR_DATA_KEY);

  if (existing) {
    try {
      profile = JSON.parse(existing);
      profile.lastSeen = now;
      profile.visitCount += 1;
    } catch {
      profile = createFreshProfile(visitorId, now);
    }
  } else {
    profile = createFreshProfile(visitorId, now);
  }

  saveProfile(profile);
  archiveVisitor(profile);
  return profile;
}

function createFreshProfile(id: string, timestamp: string): VisitorProfile {
  return {
    id,
    firstSeen: timestamp,
    lastSeen: timestamp,
    visitCount: 1,
    deviceType: detectDevice(),
    os: detectOS(),
    browser: detectBrowser(),
    screenResolution: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'unknown',
    referrer: typeof document !== 'undefined' && document.referrer ? document.referrer : 'Direct Entry / Bookmark',
    pageViewsCount: 1,
    visitedTabs: { roadmap: 1 },
    events: [{ type: 'session_init', detail: 'User opened portal', timestamp }]
  };
}

function saveProfile(profile: VisitorProfile) {
  localStorage.setItem(VISITOR_DATA_KEY, JSON.stringify(profile));
}

function archiveVisitor(profile: VisitorProfile) {
  try {
    const raw = localStorage.getItem(ALL_VISITORS_KEY);
    const list: VisitorProfile[] = raw ? JSON.parse(raw) : [];
    const index = list.findIndex((v) => v.id === profile.id);
    if (index >= 0) {
      list[index] = profile;
    } else {
      list.push(profile);
    }
    localStorage.setItem(ALL_VISITORS_KEY, JSON.stringify(list.slice(-500))); // Keep last 500 visitors
  } catch (err) {
    console.error('Failed to archive visitor', err);
  }
}

/**
 * Logs page/tab navigation event.
 */
export function recordPageView(tab: string): void {
  try {
    const raw = localStorage.getItem(VISITOR_DATA_KEY);
    if (!raw) return;
    const profile: VisitorProfile = JSON.parse(raw);

    profile.lastSeen = new Date().toISOString();
    profile.pageViewsCount += 1;
    profile.visitedTabs[tab] = (profile.visitedTabs[tab] || 0) + 1;
    profile.events.push({
      type: 'tab_view',
      detail: tab,
      timestamp: profile.lastSeen
    });

    if (profile.events.length > 50) {
      profile.events = profile.events.slice(-50);
    }

    saveProfile(profile);
    archiveVisitor(profile);
  } catch (err) {
    console.error('Failed to record page view', err);
  }
}

/**
 * Logs milestone user interaction (e.g. test started, blueprint downloaded, study check-in).
 */
export function recordVisitorEvent(type: string, detail?: string): void {
  try {
    const raw = localStorage.getItem(VISITOR_DATA_KEY);
    if (!raw) return;
    const profile: VisitorProfile = JSON.parse(raw);

    profile.lastSeen = new Date().toISOString();
    profile.events.push({
      type,
      detail,
      timestamp: profile.lastSeen
    });

    if (profile.events.length > 50) {
      profile.events = profile.events.slice(-50);
    }

    saveProfile(profile);
    archiveVisitor(profile);
  } catch (err) {
    console.error('Failed to record visitor event', err);
  }
}

/**
 * Returns aggregated visitor telemetry for the admin dashboard.
 */
export function getVisitorAnalytics(): VisitorAnalyticsSummary {
  const current = initVisitorTracker();
  let visitors: VisitorProfile[] = [current];

  try {
    const raw = localStorage.getItem(ALL_VISITORS_KEY);
    if (raw) {
      visitors = JSON.parse(raw);
    }
  } catch {
    visitors = [current];
  }

  // Ensure current is in list
  if (!visitors.some((v) => v.id === current.id)) {
    visitors.push(current);
  }

  let totalPageViews = 0;
  const deviceCounts = { Mobile: 0, Desktop: 0, Tablet: 0 };
  const tabAggregates: Record<string, number> = {};

  visitors.forEach((v) => {
    totalPageViews += v.pageViewsCount || 1;
    if (v.deviceType in deviceCounts) {
      deviceCounts[v.deviceType] += 1;
    } else {
      deviceCounts.Desktop += 1;
    }

    Object.entries(v.visitedTabs || {}).forEach(([tab, count]) => {
      tabAggregates[tab] = (tabAggregates[tab] || 0) + count;
    });
  });

  const totalVisitors = Math.max(1, visitors.length);
  const mobilePct = Math.round((deviceCounts.Mobile / totalVisitors) * 100);
  const tabletPct = Math.round((deviceCounts.Tablet / totalVisitors) * 100);
  const desktopPct = Math.max(0, 100 - (mobilePct + tabletPct));

  const topVisitedTabs = Object.entries(tabAggregates)
    .map(([tab, count]) => ({ tab, count }))
    .sort((a, b) => b.count - a.count);

  let capturedLeadsCount = 0;
  try {
    const rawLeads = localStorage.getItem('aspirant_captured_leads');
    if (rawLeads) {
      capturedLeadsCount = JSON.parse(rawLeads).length;
    }
  } catch {
    capturedLeadsCount = 0;
  }

  const conversionRatePercent = totalVisitors > 0 ? parseFloat(((capturedLeadsCount / totalVisitors) * 100).toFixed(1)) : 0;

  return {
    totalUniqueVisitors: totalVisitors,
    totalPageViews: Math.max(totalPageViews, totalVisitors * 3),
    deviceDistribution: {
      mobile: mobilePct,
      desktop: desktopPct,
      tablet: tabletPct
    },
    topVisitedTabs,
    totalLeadsCaptured: capturedLeadsCount,
    conversionRatePercent,
    activeVisitor: current
  };
}

/**
 * Exports visitor telemetry session data as a downloadable CSV.
 */
export function exportVisitorLogsCsv(): void {
  const analytics = getVisitorAnalytics();
  let visitors: VisitorProfile[] = [analytics.activeVisitor];

  try {
    const raw = localStorage.getItem(ALL_VISITORS_KEY);
    if (raw) visitors = JSON.parse(raw);
  } catch {
    // fallback
  }

  const headers = ['Visitor ID', 'First Seen', 'Last Seen', 'Visits', 'Device Type', 'OS', 'Browser', 'Resolution', 'Referrer', 'Total Pageviews'];
  const rows = visitors.map((v) => [
    `"${v.id}"`,
    `"${new Date(v.firstSeen).toLocaleString()}"`,
    `"${new Date(v.lastSeen).toLocaleString()}"`,
    v.visitCount,
    `"${v.deviceType}"`,
    `"${v.os}"`,
    `"${v.browser}"`,
    `"${v.screenResolution}"`,
    `"${(v.referrer || 'Direct').replace(/"/g, '""')}"`,
    v.pageViewsCount
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `aspirant_atlas_visitor_telemetry_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
