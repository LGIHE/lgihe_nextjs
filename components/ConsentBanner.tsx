"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Settings, Shield, BarChart3, Zap, Globe } from "lucide-react";
import { consentManager, ConsentPreferences } from "@/lib/consent";

export default function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: true,
    performance: true,
    geolocation: true,
  });

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = consentManager.hasConsent();
    const needsUpdate = consentManager.needsConsentUpdate();
    
    if (!hasConsent || needsUpdate) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    consentManager.acceptAll();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    consentManager.rejectAll();
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    consentManager.savePreferences(preferences);
    setShowBanner(false);
  };

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200">
          {!showDetails ? (
            // Simple Banner
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-[#3d4d6f] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#3d4d6f] mb-2">
                    Your Privacy Matters
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    We use analytics and performance tracking to improve your experience. 
                    You can customize your preferences or accept all to continue. 
                    Read our <a href="/privacy" className="text-[#3d4d6f] hover:underline font-medium">Privacy Policy</a> for more details.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg font-medium hover:bg-[#2f3d57] transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#3d4d6f] text-[#3d4d6f] rounded-lg font-medium hover:bg-[#3d4d6f] hover:text-white transition-colors"
                >
                  <Settings className="w-5 h-5" />
                  Customize
                </button>
              </div>
            </div>
          ) : (
            // Detailed Preferences
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-[#3d4d6f]" />
                  <h3 className="text-xl font-bold text-[#3d4d6f]">
                    Privacy Preferences
                  </h3>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <p className="text-gray-600 text-sm mb-6">
                Choose which types of data collection you're comfortable with. 
                You can change these preferences at any time.
              </p>

              <div className="space-y-4 mb-6">
                {/* Essential (Always On) */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <Shield className="w-5 h-5 text-gray-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Essential
                        </h4>
                        <p className="text-sm text-gray-600">
                          Required for the website to function properly. Cannot be disabled.
                        </p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Always On
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#3d4d6f] transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <BarChart3 className="w-5 h-5 text-[#3d4d6f] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Analytics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Help us understand how visitors use our website to improve content and user experience.
                        </p>
                        <p className="text-xs text-gray-500">
                          Collects: Page views, session duration, device type, browser type
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handleToggle('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3d4d6f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3d4d6f]"></div>
                    </label>
                  </div>
                </div>

                {/* Performance */}
                <div className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#3d4d6f] transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <Zap className="w-5 h-5 text-[#3d4d6f] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Performance
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Monitor website performance and identify technical issues to ensure optimal speed and reliability.
                        </p>
                        <p className="text-xs text-gray-500">
                          Collects: Page load times, error logs, performance metrics
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.performance}
                        onChange={() => handleToggle('performance')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3d4d6f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3d4d6f]"></div>
                    </label>
                  </div>
                </div>

                {/* Geolocation */}
                <div className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#3d4d6f] transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <Globe className="w-5 h-5 text-[#3d4d6f] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Geolocation
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Understand where our visitors come from to better serve different regions. Only country-level data is collected.
                        </p>
                        <p className="text-xs text-gray-500">
                          Collects: Country, city (no precise location or IP address stored)
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-4">
                      <input
                        type="checkbox"
                        checked={preferences.geolocation}
                        onChange={() => handleToggle('geolocation')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3d4d6f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3d4d6f]"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-6 py-3 bg-[#3d4d6f] text-white rounded-lg font-medium hover:bg-[#2f3d57] transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Accept All
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Read our <a href="/privacy" className="text-[#3d4d6f] hover:underline">Privacy Policy</a> for more information
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
