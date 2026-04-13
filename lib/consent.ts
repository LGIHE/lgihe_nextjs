// Consent management utility

export interface ConsentPreferences {
  analytics: boolean;
  performance: boolean;
  geolocation: boolean;
  timestamp: number;
  version: string;
}

const CONSENT_KEY = 'lgihe_consent_preferences';
const CONSENT_VERSION = '1.0';

export class ConsentManager {
  private static instance: ConsentManager;
  private preferences: ConsentPreferences | null = null;

  private constructor() {
    if (typeof window !== 'undefined') {
      this.loadPreferences();
    }
  }

  static getInstance(): ConsentManager {
    if (!ConsentManager.instance) {
      ConsentManager.instance = new ConsentManager();
    }
    return ConsentManager.instance;
  }

  private loadPreferences(): void {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        this.preferences = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load consent preferences:', error);
    }
  }

  savePreferences(preferences: Omit<ConsentPreferences, 'timestamp' | 'version'>): void {
    this.preferences = {
      ...preferences,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };

    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(this.preferences));
      // Trigger storage event for other tabs
      window.dispatchEvent(new Event('consentChanged'));
    } catch (error) {
      console.error('Failed to save consent preferences:', error);
    }
  }

  getPreferences(): ConsentPreferences | null {
    return this.preferences;
  }

  hasConsent(): boolean {
    return this.preferences !== null;
  }

  hasAnalyticsConsent(): boolean {
    return this.preferences?.analytics ?? false;
  }

  hasPerformanceConsent(): boolean {
    return this.preferences?.performance ?? false;
  }

  hasGeolocationConsent(): boolean {
    return this.preferences?.geolocation ?? false;
  }

  acceptAll(): void {
    this.savePreferences({
      analytics: true,
      performance: true,
      geolocation: true,
    });
  }

  rejectAll(): void {
    this.savePreferences({
      analytics: false,
      performance: false,
      geolocation: false,
    });
  }

  clearPreferences(): void {
    this.preferences = null;
    try {
      localStorage.removeItem(CONSENT_KEY);
      window.dispatchEvent(new Event('consentChanged'));
    } catch (error) {
      console.error('Failed to clear consent preferences:', error);
    }
  }

  // Check if consent needs to be re-requested (e.g., after policy update)
  needsConsentUpdate(): boolean {
    if (!this.preferences) return true;
    
    // Check if consent is older than 12 months
    const twelveMonthsAgo = Date.now() - (365 * 24 * 60 * 60 * 1000);
    if (this.preferences.timestamp < twelveMonthsAgo) return true;

    // Check if consent version has changed
    if (this.preferences.version !== CONSENT_VERSION) return true;

    return false;
  }
}

export const consentManager = ConsentManager.getInstance();
