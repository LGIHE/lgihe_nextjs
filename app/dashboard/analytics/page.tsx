"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AlertCircle, 
  TrendingUp, 
  Users, 
  Activity,
  Clock,
  AlertTriangle,
  CheckCircle,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  Eye,
  BarChart3,
  PieChart,
  TrendingDown,
  Lock
} from "lucide-react";

interface ErrorLog {
  message: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp: string;
}

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

export default function AnalyticsDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<ErrorLog[]>([]);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [stats, setStats] = useState<DetailedStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'pages' | 'errors' | 'events'>('overview');

  useEffect(() => {
    // Check if already authenticated in session
    const auth = sessionStorage.getItem('analytics_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchAnalytics();
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAnalytics();
      // Refresh every 30 seconds
      const interval = setInterval(fetchAnalytics, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'cank') {
      setIsAuthenticated(true);
      sessionStorage.setItem('analytics_auth', 'true');
      fetchAnalytics();
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  const fetchAnalytics = async () => {
    try {
      const [errorsRes, eventsRes, statsRes] = await Promise.all([
        fetch('/api/analytics/error'),
        fetch('/api/analytics/event'),
        fetch('/api/analytics/stats'),
      ]);

      const errorsData = await errorsRes.json();
      const eventsData = await eventsRes.json();
      const statsData = await statsRes.json();

      setErrors(errorsData.errors || []);
      setEvents(eventsData.events || []);
      setStats(statsData);

      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50';
      case 'high': return 'text-orange-600 bg-orange-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getFlagEmoji = (countryCode: string) => {
    if (!countryCode || countryCode === 'XX') return '🌍';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#3d4d6f] to-[#2f3d57] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3d4d6f] rounded-full mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#3d4d6f] mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Enter password to access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3d4d6f] focus:border-transparent outline-none transition"
                placeholder="Enter password"
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3d4d6f] text-white py-3 rounded-lg font-medium hover:bg-[#2f3d57] transition-colors flex items-center justify-center gap-2"
            >
              <Lock className="w-5 h-5" />
              Access Analytics
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  if (loading || !stats) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Activity className="w-12 h-12 text-[#3d4d6f] animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#3d4d6f] mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Real-time website performance and insights</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Page Views</h3>
              <Eye className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-[#3d4d6f]">{stats.totalPageViews.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">Total page views</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Unique Visitors</h3>
              <Users className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-[#3d4d6f]">{stats.uniqueVisitors.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">{stats.realtimeVisitors} active now</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Avg Load Time</h3>
              <Zap className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-[#3d4d6f]">{(stats.avgLoadTime / 1000).toFixed(2)}s</p>
            <p className="text-xs text-gray-500 mt-1">Page load speed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Bounce Rate</h3>
              <TrendingDown className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-[#3d4d6f]">{stats.bounceRate}%</p>
            <p className="text-xs text-gray-500 mt-1">Single page visits</p>
          </motion.div>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Total Sessions</h3>
              <Activity className="w-5 h-5 text-indigo-500" />
            </div>
            <p className="text-2xl font-bold text-[#3d4d6f]">{stats.sessionStats.totalSessions.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">Avg {stats.sessionStats.avgPagesPerSession} pages/session</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Avg Session Duration</h3>
              <Clock className="w-5 h-5 text-teal-500" />
            </div>
            <p className="text-2xl font-bold text-[#3d4d6f]">{Math.floor(stats.sessionStats.avgSessionDuration / 60)}m {stats.sessionStats.avgSessionDuration % 60}s</p>
            <p className="text-xs text-gray-500 mt-1">Time on site</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600">Error Rate</h3>
              <AlertTriangle className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-[#3d4d6f]">{stats.errorRate}%</p>
            <p className="text-xs text-gray-500 mt-1">{stats.totalErrors} total errors</p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {(['overview', 'pages', 'errors', 'events'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium capitalize ${
                    activeTab === tab
                      ? 'border-b-2 border-[#3d4d6f] text-[#3d4d6f]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Device & Browser Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#3d4d6f] mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5" />
                      Device Breakdown
                    </h3>
                    <div className="space-y-2">
                      {Object.entries(stats.deviceBreakdown).map(([device, count]) => {
                        const total = Object.values(stats.deviceBreakdown).reduce((a, b) => a + b, 0);
                        const percentage = Math.round((count / total) * 100);
                        return (
                          <div key={device} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <div className="flex items-center gap-2">
                              {device === 'Mobile' && <Smartphone className="w-4 h-4 text-gray-600" />}
                              {device === 'Desktop' && <Monitor className="w-4 h-4 text-gray-600" />}
                              <span className="text-sm font-medium text-gray-700">{device}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-[#3d4d6f] h-2 rounded-full" 
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-bold text-[#3d4d6f] w-12 text-right">{percentage}%</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#3d4d6f] mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Browser Breakdown
                    </h3>
                    <div className="space-y-2">
                      {Object.entries(stats.browserBreakdown).map(([browser, count]) => {
                        const total = Object.values(stats.browserBreakdown).reduce((a, b) => a + b, 0);
                        const percentage = Math.round((count / total) * 100);
                        return (
                          <div key={browser} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <span className="text-sm font-medium text-gray-700">{browser}</span>
                            <div className="flex items-center gap-3">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-[#3d4d6f] h-2 rounded-full" 
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-bold text-[#3d4d6f] w-12 text-right">{percentage}%</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Top Referrers */}
                {stats.topReferrers.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-[#3d4d6f] mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Top Referrers
                    </h3>
                    <div className="space-y-2">
                      {stats.topReferrers.map((ref, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <span className="text-sm font-medium text-gray-700">{ref.referrer}</span>
                          <span className="text-sm font-bold text-[#3d4d6f]">{ref.count} visits</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Country Breakdown */}
                {stats.countryBreakdown.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-[#3d4d6f] mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Visitors by Country
                    </h3>
                    <div className="space-y-2">
                      {stats.countryBreakdown.map((country, index) => {
                        const total = stats.countryBreakdown.reduce((sum, c) => sum + c.count, 0);
                        const percentage = Math.round((country.count / total) * 100);
                        return (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{country.countryCode !== 'XX' ? getFlagEmoji(country.countryCode) : '🌍'}</span>
                              <span className="text-sm font-medium text-gray-700">{country.country}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-[#3d4d6f] h-2 rounded-full" 
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-bold text-[#3d4d6f] w-16 text-right">{country.count} ({percentage}%)</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Page Loads by Hour */}
                <div>
                  <h3 className="text-lg font-semibold text-[#3d4d6f] mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Traffic by Hour (24h)
                  </h3>
                  <div className="flex gap-1 overflow-x-auto pb-2">
                    {Array.from({ length: 24 }, (_, i) => {
                      const hour = `${i}:00`;
                      const count = stats.pageLoadsByHour[hour] || 0;
                      const maxCount = Math.max(...Object.values(stats.pageLoadsByHour), 1);
                      const height = Math.max((count / maxCount) * 100, 2);
                      return (
                        <div key={i} className="flex flex-col items-center gap-1 min-w-[20px]">
                          <div className="w-full bg-gray-200 rounded-t" style={{ height: '60px', display: 'flex', alignItems: 'flex-end' }}>
                            <div 
                              className="w-full bg-[#3d4d6f] rounded-t transition-all hover:bg-[#2f3d57]" 
                              style={{ height: `${height}%` }}
                              title={`${hour}: ${count} views`}
                            ></div>
                          </div>
                          <span className="text-[10px] text-gray-500">{i}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Page Loads by Day */}
                <div>
                  <h3 className="text-lg font-semibold text-[#3d4d6f] mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Traffic by Day (Last 30 Days)
                  </h3>
                  <div className="flex gap-1 overflow-x-auto pb-2">
                    {Object.entries(stats.pageLoadsByDay)
                      .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime())
                      .map(([date, count], index) => {
                        const maxCount = Math.max(...Object.values(stats.pageLoadsByDay), 1);
                        const height = Math.max((count / maxCount) * 100, 2);
                        return (
                          <div key={index} className="flex flex-col items-center gap-1 min-w-[20px]">
                            <div className="w-full bg-gray-200 rounded-t" style={{ height: '60px', display: 'flex', alignItems: 'flex-end' }}>
                              <div 
                                className="w-full bg-[#3d4d6f] rounded-t transition-all hover:bg-[#2f3d57]" 
                                style={{ height: `${height}%` }}
                                title={`${date}: ${count} views`}
                              ></div>
                            </div>
                            <span className="text-[9px] text-gray-500 transform -rotate-45 origin-top-left whitespace-nowrap mt-2">
                              {date}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}

            {/* Pages Tab */}
            {activeTab === 'pages' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#3d4d6f] mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Most Viewed Pages
                </h3>
                {stats.mostViewedPages.length === 0 ? (
                  <div className="text-center py-12">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No page views tracked yet</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {stats.mostViewedPages.map((page, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="flex items-center justify-center w-8 h-8 bg-[#3d4d6f] text-white rounded-full text-sm font-bold">
                                {index + 1}
                              </span>
                              <h4 className="text-sm font-semibold text-gray-900">{page.page}</h4>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-gray-600 ml-11">
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {page.views.toLocaleString()} views
                              </span>
                              {page.avgLoadTime > 0 && (
                                <span className="flex items-center gap-1">
                                  <Zap className="w-3 h-3" />
                                  {(page.avgLoadTime / 1000).toFixed(2)}s avg load
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="ml-11">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-[#3d4d6f] h-2 rounded-full transition-all" 
                              style={{ width: `${(page.views / stats.mostViewedPages[0].views) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Errors Tab */}
            {activeTab === 'errors' && (
              <div className="space-y-4">
                {errors.length === 0 ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-600">No errors logged yet!</p>
                  </div>
                ) : (
                  errors.slice().reverse().map((error, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(error.severity)}`}>
                              {error.severity}
                            </span>
                            <span className="text-xs text-gray-500">
                              {new Date(error.timestamp).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-gray-900 mb-1">{error.message}</p>
                          {error.url && (
                            <p className="text-xs text-gray-500 mb-1">URL: {error.url}</p>
                          )}
                          {error.stack && (
                            <details className="mt-2">
                              <summary className="text-xs text-gray-600 cursor-pointer hover:text-gray-900">
                                View stack trace
                              </summary>
                              <pre className="mt-2 text-xs bg-gray-50 p-2 rounded overflow-x-auto">
                                {error.stack}
                              </pre>
                            </details>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="space-y-4">
                {events.length === 0 ? (
                  <div className="text-center py-12">
                    <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No events tracked yet</p>
                  </div>
                ) : (
                  events.slice().reverse().slice(0, 50).map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#3d4d6f] capitalize">
                          {event.name.replace('_', ' ')}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(event.timestamp).toLocaleString()}
                        </span>
                      </div>
                      {event.properties && Object.keys(event.properties).length > 0 && (
                        <div className="text-xs text-gray-600">
                          {Object.entries(event.properties).map(([key, value]) => (
                            <div key={key} className="flex gap-2">
                              <span className="font-medium">{key}:</span>
                              <span>{String(value)}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
