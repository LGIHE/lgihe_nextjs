"use client";

import { useState, useEffect } from "react";
import { Shield, BarChart3, Zap, Globe, CheckCircle } from "lucide-react";
import { consentManager } from "@/lib/consent";
import PageTemplate from "@/components/PageTemplate";

export default function PrivacyPreferencesPage() {
  const [preferences, setPreferences] = useState({
    analytics: false,
    performance: false,
    geolocation: false,
  });
  const [saved, setSaved] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current = consentManager.getPreferences();
    if (current) {
      setPreferences({
        analytics: current.analytics,
        performance: current.performance,
        geolocation: current.geolocation,
      });
    }
  }, []);

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
    setSaved(false);
  };

  const handleSave = () => {
    consentManager.savePreferences(preferences);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAcceptAll = () => {
    setPreferences({
      analytics: true,
      performance: true,
      geolocation: true,
    });
    consentManager.acceptAll();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleRejectAll = () => {
    setPreferences({
      analytics: false,
      performance: false,
      geolocation: false,
    });
    consentManager.rejectAll();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <PageTemplate
      title="Privacy Preferences"
      subtitle="Manage your data collection preferences"
    >
      <div className="max-w-4xl mx-auto">
        {saved && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-800 font-medium">
              Your preferences have been saved successfully!
            </p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <p className="text-gray-600 mb-4">
            Control what data we collect about your visit. You can change these settings at any time. 
            Essential functionality is always enabled to ensure the website works properly.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {/* Essential (Always On) */}
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <Shield className="w-6 h-6 text-gray-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Essential
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Required for the website to function properly. These cannot be disabled as they are necessary 
                    for security, error handling, and basic functionality.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Includes:</strong> Security logs, error reports, session management
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <div className="px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                  Always On
                </div>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-white rounded-lg border-2 border-gray-200 hover:border-[#3d4d6f] transition-colors p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <BarChart3 className="w-6 h-6 text-[#3d4d6f] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Analytics
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Help us understand how visitors use our website so we can improve content, navigation, 
                    and overall user experience. All data is anonymous and aggregated.
                  </p>
                  <div className="text-sm text-gray-500 mb-3">
                    <strong>Collects:</strong> Page views, session duration, pages per visit, navigation patterns
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Does NOT collect:</strong> Personal information, names, email addresses
                  </div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => handleToggle('analytics')}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3d4d6f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#3d4d6f]"></div>
              </label>
            </div>
          </div>

          {/* Performance */}
          <div className="bg-white rounded-lg border-2 border-gray-200 hover:border-[#3d4d6f] transition-colors p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <Zap className="w-6 h-6 text-[#3d4d6f] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Performance Monitoring
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Monitor website performance and identify technical issues to ensure optimal speed, 
                    reliability, and user experience. Helps us fix problems quickly.
                  </p>
                  <div className="text-sm text-gray-500 mb-3">
                    <strong>Collects:</strong> Page load times, error logs, performance metrics, technical diagnostics
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Does NOT collect:</strong> Personal browsing history, passwords, form data
                  </div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input
                  type="checkbox"
                  checked={preferences.performance}
                  onChange={() => handleToggle('performance')}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3d4d6f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#3d4d6f]"></div>
              </label>
            </div>
          </div>

          {/* Geolocation */}
          <div className="bg-white rounded-lg border-2 border-gray-200 hover:border-[#3d4d6f] transition-colors p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <Globe className="w-6 h-6 text-[#3d4d6f] mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Geographic Location
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Understand where our visitors come from to better serve different regions and tailor 
                    content appropriately. Only country-level data is collected.
                  </p>
                  <div className="text-sm text-gray-500 mb-3">
                    <strong>Collects:</strong> Country, city (approximate)
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Does NOT collect:</strong> Precise location, GPS coordinates, full IP addresses
                  </div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input
                  type="checkbox"
                  checked={preferences.geolocation}
                  onChange={() => handleToggle('geolocation')}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3d4d6f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#3d4d6f]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={handleSave}
            className="flex-1 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg font-medium hover:bg-[#2f3d57] transition-colors"
          >
            Save Preferences
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={handleRejectAll}
            className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Reject All
          </button>
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#3d4d6f] mb-3">
            Your Privacy Rights
          </h3>
          <p className="text-gray-700 mb-4">
            You have the right to access, correct, or delete your data at any time. 
            For more information about how we handle your data, please read our{' '}
            <a href="/privacy" className="text-[#3d4d6f] hover:underline font-medium">
              Privacy Policy
            </a>.
          </p>
          <p className="text-gray-700">
            To exercise your privacy rights or if you have questions, contact us at:{' '}
            <a href="mailto:info@lgihe.ac.ug" className="text-[#3d4d6f] hover:underline font-medium">
              info@lgihe.ac.ug
            </a>
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
