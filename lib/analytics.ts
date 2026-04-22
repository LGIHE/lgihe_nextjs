// Custom analytics and error tracking utilities
import { consentManager } from './consent';

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: Date;
  sessionId?: string;
  userAgent?: string;
  referrer?: string;
  screenResolution?: string;
  country?: string;
  countryCode?: string;
  city?: string;
}

export interface ErrorLog {
  message: string;
  stack?: string;
  url?: string;
  userAgent?: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface PageLoadMetrics {
  url: string;
  loadTime: number;
  timestamp: Date;
  userAgent?: string;
  sessionId?: string;
  country?: string;
  countryCode?: string;
  city?: string;
}

class AnalyticsService {
  private static instance: AnalyticsService;
  private errorLogs: ErrorLog[] = [];
  private events: AnalyticsEvent[] = [];
  private sessionId: string;
  private geoData: { country?: string; countryCode?: string; city?: string } = {};

  private constructor() {
    this.sessionId = this.generateSessionId();
    if (typeof window !== 'undefined') {
      this.initErrorTracking();
      this.initPerformanceTracking();
      this.fetchGeoData();
    }
  }

  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private async fetchGeoData() {
    // Only fetch geo data if user has consented
    if (!consentManager.hasGeolocationConsent()) {
      return;
    }

    try {
      const response = await fetch('/api/analytics/geo');
      if (response.ok) {
        const data = await response.json();
        this.geoData = {
          country: data.country,
          countryCode: data.countryCode,
          city: data.city,
        };
      }
    } catch (error) {
      console.error('Failed to fetch geo data:', error);
    }
  }

  private shouldTrackRoute(url: string): boolean {
    // Exclude dashboard routes from analytics
    return !url.startsWith('/dashboard');
  }

  private initPerformanceTracking() {
    // Only track performance if user has consented
    if (!consentManager.hasPerformanceConsent()) {
      return;
    }

    // Track page load performance
    if (typeof window !== 'undefined' && window.performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const url = window.location.pathname;
          
          // Skip dashboard routes
          if (!this.shouldTrackRoute(url)) {
            return;
          }

          const perfData = window.performance.timing;
          const loadTime = perfData.loadEventEnd - perfData.navigationStart;
          
          this.trackPageLoad({
            url,
            loadTime,
            timestamp: new Date(),
            userAgent: navigator.userAgent,
            sessionId: this.sessionId,
            ...this.geoData,
          });
        }, 0);
      });
    }
  }

  private trackPageLoad(metrics: PageLoadMetrics) {
    if (typeof window !== 'undefined') {
      // Send to both local API (for immediate dashboard) and backend
      const backendUrl = process.env.NEXT_PUBLIC_API_URL;
      
      // Send to local API
      fetch('/api/analytics/pageload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metrics),
      }).catch(console.error);

      // Send to backend if configured
      if (backendUrl) {
        fetch(`${backendUrl}/analytics/pageload`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(metrics),
        }).catch(console.error);
      }
    }
  }

  private initErrorTracking() {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      this.logError({
        message: event.message,
        stack: event.error?.stack,
        url: event.filename,
        timestamp: new Date(),
        severity: 'high',
      });
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        timestamp: new Date(),
        severity: 'high',
      });
    });
  }

  logError(error: ErrorLog) {
    this.errorLogs.push(error);
    
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;
    
    // Send to API endpoint
    if (typeof window !== 'undefined') {
      const errorData = {
        ...error,
        userAgent: navigator.userAgent,
        url: window.location.href,
      };

      // Send to local API
      fetch('/api/analytics/error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorData),
      }).catch(console.error);

      // Send to backend if configured
      if (backendUrl) {
        fetch(`${backendUrl}/analytics/error`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(errorData),
        }).catch(console.error);
      }
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', error);
    }
  }

  trackEvent(event: AnalyticsEvent) {
    // Check if user has consented to analytics
    if (!consentManager.hasAnalyticsConsent()) {
      return;
    }

    // Skip dashboard routes
    if (typeof window !== 'undefined' && !this.shouldTrackRoute(window.location.pathname)) {
      return;
    }

    const eventWithTimestamp = {
      ...event,
      timestamp: event.timestamp || new Date(),
      sessionId: this.sessionId,
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
      referrer: typeof window !== 'undefined' ? document.referrer : undefined,
      screenResolution: typeof window !== 'undefined' 
        ? `${window.screen.width}x${window.screen.height}` 
        : undefined,
      // Only include geo data if user has consented
      ...(consentManager.hasGeolocationConsent() ? this.geoData : {}),
    };
    
    this.events.push(eventWithTimestamp);

    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    // Send to API endpoint
    if (typeof window !== 'undefined') {
      // Send to local API
      fetch('/api/analytics/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventWithTimestamp),
      }).catch(console.error);

      // Send to backend if configured
      if (backendUrl) {
        fetch(`${backendUrl}/analytics/event`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(eventWithTimestamp),
        }).catch(console.error);
      }
    }
  }

  getErrors(): ErrorLog[] {
    return [...this.errorLogs];
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  clearErrors() {
    this.errorLogs = [];
  }

  clearEvents() {
    this.events = [];
  }
}

export const analytics = AnalyticsService.getInstance();

// Helper functions for common tracking scenarios
export const trackPageView = (pageName: string) => {
  analytics.trackEvent({
    name: 'page_view',
    properties: { page: pageName },
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  analytics.trackEvent({
    name: 'button_click',
    properties: { button: buttonName, location },
  });
};

export const trackFormSubmission = (formName: string, success: boolean) => {
  analytics.trackEvent({
    name: 'form_submission',
    properties: { form: formName, success },
  });
};

export const logCustomError = (message: string, severity: ErrorLog['severity'] = 'medium') => {
  analytics.logError({
    message,
    timestamp: new Date(),
    severity,
  });
};
