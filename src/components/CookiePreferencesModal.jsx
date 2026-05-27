import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 'general', label: 'Privacy Overview' },
  { id: 'essential', label: 'Strictly Necessary' },
  { id: 'firstParty', label: 'Performance' },
  { id: 'thirdParty', label: 'Analytics' },
  { id: 'advertising', label: 'Targeting' }
];

const tabContent = {
  general: "We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. We also share information about your use of our site with our social media, advertising and analytics partners. You can change your cookie settings at any time by clicking on the Cookie Preferences link in the footer.",
  essential: "These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our site functions.",
  firstParty: "These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.",
  thirdParty: "These cookies are set by our third-party partners (such as analytics providers) to help us understand how our website is being used and to improve the performance of our site.",
  advertising: "These cookies are used to make advertising messages more relevant to you and your interests. They also perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests."
};

const ToggleSwitch = ({ checked, onChange, disabled }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${
        checked ? 'bg-black' : 'bg-gray-300'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

const CookiePreferencesModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('general');
  const [preferences, setPreferences] = useState({
    essential: true,
    firstParty: true,
    thirdParty: false,
    advertising: false
  });

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setActiveTab('general');
      const saved = localStorage.getItem('cookiePreferences');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setPreferences(prev => ({ ...prev, ...parsed }));
        } catch (e) {
          console.error("Error loading preferences", e);
        }
      }
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
    return undefined;
  }, [isOpen]);

  const handleSave = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsent', 'accepted');
    onClose();
  };

  const handleToggle = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100000]"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
          />
          <div className="fixed inset-0 z-[100001] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.98, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-[760px] min-h-[560px] max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto"
              style={{ border: '1px solid rgba(0,0,0,0.06)' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between" style={{ padding: '28px 36px', borderBottom: '1px solid #E6E6E6' }}>
                <h2 style={{ margin: 0, fontSize: 30, fontWeight: 800, textTransform: 'uppercase', color: '#111' }}>PREFERENCE CENTER</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-2"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
                  <nav className="flex flex-col">
                    {tabs.map((tab) => {
                      const isActive = activeTab === tab.id;
                      return (
                         <button
                           key={tab.id}
                           onClick={() => setActiveTab(tab.id)}
                           className={`text-left p-5 text-base transition-colors border-l-4 ${
                             isActive 
                              ? 'bg-gray-100 border-black font-bold text-gray-900 shadow-sm' 
                              : 'border-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                           }`}
                         >
                           {tab.label}
                         </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Content Area */}
                <div className="w-full md:w-2/3 p-8 overflow-y-auto bg-white flex flex-col" style={{ minHeight: 0 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#111', marginBottom: 12 }}>{tabs.find(t => t.id === activeTab)?.label}</h3>
                  <p style={{ color: '#444', fontSize: 16, lineHeight: 1.8, marginBottom: 18 }}>{tabContent[activeTab]}</p>

                  {/* Toggles based on active tab */}
                  {activeTab === 'essential' && (
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="font-semibold text-gray-700">Status</span>
                      <span className="text-gray-900 font-bold text-sm uppercase tracking-wide">Always Active</span>
                    </div>
                  )}

                  {activeTab === 'firstParty' && (
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="font-semibold text-gray-700">Enable Performance Cookies</span>
                      <ToggleSwitch 
                        checked={preferences.firstParty} 
                        onChange={() => handleToggle('firstParty')} 
                      />
                    </div>
                  )}

                  {activeTab === 'thirdParty' && (
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="font-semibold text-gray-700">Enable Analytics Cookies</span>
                      <ToggleSwitch 
                        checked={preferences.thirdParty} 
                        onChange={() => handleToggle('thirdParty')} 
                      />
                    </div>
                  )}

                  {activeTab === 'advertising' && (
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="font-semibold text-gray-700">Enable Targeting Cookies</span>
                      <ToggleSwitch 
                        checked={preferences.advertising} 
                        onChange={() => handleToggle('advertising')} 
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Footer - buttons bottom-right */}
              <div className="bg-gray-50 p-4 md:p-6 border-t border-gray-200 flex items-center justify-end gap-4">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-white border border-gray-300 text-gray-800 font-semibold rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-black text-white font-semibold rounded-md"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CookiePreferencesModal;
