import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CookieConsentBanner = () => {
  const { t } = useTranslation('cookieBanner');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('cookieConsent');
    if (status !== 'accepted' && status !== 'rejected') {
      setIsVisible(true);
    }
  }, []);

  const savePreferences = (preferences, consentValue) => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsent', consentValue);
    setIsVisible(false);
  };

  const handleAccept = () => {
    savePreferences({ essential: true, firstParty: true, thirdParty: true, advertising: true }, 'accepted');
  };

  const handleRejectOptional = () => {
    savePreferences({ essential: true, firstParty: false, thirdParty: false, advertising: false }, 'rejected');
  };

  const handleCookiePreferences = () => {
    window.dispatchEvent(new Event('openCookieModal'));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-[9999] border-t border-slate-200 bg-white shadow-[0_-8px_30px_-12px_rgba(15,23,42,0.18)]"
        >
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6 md:py-5">
            <div className="min-w-0 flex-1">
              <p className="text-sm md:text-base leading-[1.7] text-slate-700">
                {t('bannerTextBeforeLink')}
                <a href="/privacy-policy" className="font-semibold text-slate-900 underline">
                  {t('privacyPolicy')}
                </a>
                {t('bannerTextAfterLink')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCookiePreferences}
                className="rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                {t('cookiePreferences')}
              </button>
              <button
                onClick={handleRejectOptional}
                className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                {t('rejectOptional')}
              </button>
              <button
                onClick={handleAccept}
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                {t('accept')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
