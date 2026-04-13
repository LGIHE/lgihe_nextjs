import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const LOG_DIR = path.join(process.cwd(), 'logs');

interface DetailedStats {
  totalPageViews: number;
  uniqueVisitors: number;
  totalEvents: number;
  totalErrors: number;
  avgLoadTime: number;
  mostViewedPages: Array<{ page: string; views: number; avgLoadTime: number }>;
  pageLoadsByHour: Record<string, number>;
  pageLoadsByDay: Record<string, number>;
  deviceBreakdown: Record<string, number>;
  browserBreakdown: Record<string, number>;
  countryBreakdown: Array<{ country: string; countryCode: string; count: number }>;
  topReferrers: Array<{ referrer: string; count: number }>;
  sessionStats: {
    totalSessions: number;
    avgSessionDuration: number;
    avgPagesPerSession: number;
  };
  realtimeVisitors: number;
  errorRate: number;
  bounceRate: number;
}

async function readJsonFile(filename: string): Promise<any[]> {
  try {
    const filePath = path.join(LOG_DIR, filename);
    if (!existsSync(filePath)) {
      return [];
    }
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function parseUserAgent(ua: string): { device: string; browser: string } {
  const device = /mobile/i.test(ua) ? 'Mobile' : /tablet/i.test(ua) ? 'Tablet' : 'Desktop';
  
  let browser = 'Other';
  if (/chrome/i.test(ua) && !/edg/i.test(ua)) browser = 'Chrome';
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari';
  else if (/firefox/i.test(ua)) browser = 'Firefox';
  else if (/edg/i.test(ua)) browser = 'Edge';
  
  return { device, browser };
}

export async function GET() {
  try {
    const [events, pageloads, errors] = await Promise.all([
      readJsonFile('events.json'),
      readJsonFile('pageloads.json'),
      readJsonFile('errors.json'),
    ]);

    // Calculate stats
    const pageViews = events.filter((e: any) => e.name === 'page_view');
    const uniqueSessions = new Set(events.map((e: any) => e.sessionId).filter(Boolean));
    
    // Most viewed pages
    const pageViewCounts: Record<string, { count: number; loadTimes: number[] }> = {};
    pageViews.forEach((pv: any) => {
      const page = pv.properties?.page || 'Unknown';
      if (!pageViewCounts[page]) {
        pageViewCounts[page] = { count: 0, loadTimes: [] };
      }
      pageViewCounts[page].count++;
    });
    
    // Add load times
    pageloads.forEach((pl: any) => {
      const page = pl.url;
      if (pageViewCounts[page]) {
        pageViewCounts[page].loadTimes.push(pl.loadTime);
      }
    });
    
    const mostViewedPages = Object.entries(pageViewCounts)
      .map(([page, data]) => ({
        page,
        views: data.count,
        avgLoadTime: data.loadTimes.length > 0
          ? Math.round(data.loadTimes.reduce((a, b) => a + b, 0) / data.loadTimes.length)
          : 0,
      }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    // Page loads by hour
    const pageLoadsByHour: Record<string, number> = {};
    pageViews.forEach((pv: any) => {
      const hour = new Date(pv.timestamp).getHours();
      const key = `${hour}:00`;
      pageLoadsByHour[key] = (pageLoadsByHour[key] || 0) + 1;
    });

    // Page loads by day (last 30 days)
    const pageLoadsByDay: Record<string, number> = {};
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    pageViews.forEach((pv: any) => {
      const timestamp = new Date(pv.timestamp).getTime();
      if (timestamp > thirtyDaysAgo) {
        const date = new Date(pv.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        pageLoadsByDay[date] = (pageLoadsByDay[date] || 0) + 1;
      }
    });

    // Device and browser breakdown
    const deviceBreakdown: Record<string, number> = {};
    const browserBreakdown: Record<string, number> = {};
    events.forEach((e: any) => {
      if (e.userAgent) {
        const { device, browser } = parseUserAgent(e.userAgent);
        deviceBreakdown[device] = (deviceBreakdown[device] || 0) + 1;
        browserBreakdown[browser] = (browserBreakdown[browser] || 0) + 1;
      }
    });

    // Top referrers
    const referrerCounts: Record<string, number> = {};
    events.forEach((e: any) => {
      if (e.referrer && e.referrer !== '') {
        const referrer = new URL(e.referrer).hostname || 'Direct';
        referrerCounts[referrer] = (referrerCounts[referrer] || 0) + 1;
      }
    });
    const topReferrers = Object.entries(referrerCounts)
      .map(([referrer, count]) => ({ referrer, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Country breakdown
    const countryCounts: Record<string, { country: string; countryCode: string; count: number }> = {};
    events.forEach((e: any) => {
      if (e.country && e.country !== 'Unknown') {
        const key = e.countryCode || e.country;
        if (!countryCounts[key]) {
          countryCounts[key] = {
            country: e.country,
            countryCode: e.countryCode || 'XX',
            count: 0,
          };
        }
        countryCounts[key].count++;
      }
    });
    const countryBreakdown = Object.values(countryCounts)
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Session stats
    const sessionEvents: Record<string, any[]> = {};
    events.forEach((e: any) => {
      if (e.sessionId) {
        if (!sessionEvents[e.sessionId]) {
          sessionEvents[e.sessionId] = [];
        }
        sessionEvents[e.sessionId].push(e);
      }
    });

    const sessionDurations: number[] = [];
    const pagesPerSession: number[] = [];
    Object.values(sessionEvents).forEach((sessionEvts: any[]) => {
      if (sessionEvts.length > 0) {
        const times = sessionEvts.map(e => new Date(e.timestamp).getTime());
        const duration = Math.max(...times) - Math.min(...times);
        sessionDurations.push(duration);
        pagesPerSession.push(sessionEvts.filter(e => e.name === 'page_view').length);
      }
    });

    const avgSessionDuration = sessionDurations.length > 0
      ? Math.round(sessionDurations.reduce((a, b) => a + b, 0) / sessionDurations.length / 1000)
      : 0;
    
    const avgPagesPerSession = pagesPerSession.length > 0
      ? Math.round((pagesPerSession.reduce((a, b) => a + b, 0) / pagesPerSession.length) * 10) / 10
      : 0;

    // Realtime visitors (last 5 minutes)
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    const recentSessions = new Set(
      events
        .filter((e: any) => new Date(e.timestamp).getTime() > fiveMinutesAgo)
        .map((e: any) => e.sessionId)
        .filter(Boolean)
    );

    // Average load time
    const avgLoadTime = pageloads.length > 0
      ? Math.round(pageloads.reduce((sum: number, pl: any) => sum + pl.loadTime, 0) / pageloads.length)
      : 0;

    // Error rate
    const errorRate = events.length > 0
      ? Math.round((errors.length / events.length) * 100 * 100) / 100
      : 0;

    // Bounce rate (sessions with only 1 page view)
    const singlePageSessions = pagesPerSession.filter(p => p === 1).length;
    const bounceRate = pagesPerSession.length > 0
      ? Math.round((singlePageSessions / pagesPerSession.length) * 100 * 100) / 100
      : 0;

    const stats: DetailedStats = {
      totalPageViews: pageViews.length,
      uniqueVisitors: uniqueSessions.size,
      totalEvents: events.length,
      totalErrors: errors.length,
      avgLoadTime,
      mostViewedPages,
      pageLoadsByHour,
      pageLoadsByDay,
      deviceBreakdown,
      browserBreakdown,
      countryBreakdown,
      topReferrers,
      sessionStats: {
        totalSessions: Object.keys(sessionEvents).length,
        avgSessionDuration,
        avgPagesPerSession,
      },
      realtimeVisitors: recentSessions.size,
      errorRate,
      bounceRate,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Failed to calculate stats:', error);
    return NextResponse.json(
      { error: 'Failed to calculate stats' },
      { status: 500 }
    );
  }
}
