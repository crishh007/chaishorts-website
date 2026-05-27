import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './styles/index.css';
import './styles/App.css';
import './styles/career.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Chatbot from './components/Chatbot';
import CookieConsentBanner from './components/CookieConsentBanner';
import CookiePreferencesModal from './components/CookiePreferencesModal';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EpisodesPage from './pages/EpisodesPage';
import Careers from './pages/Careers';
import JobDetails from './pages/JobDetails';
import FAQPage from './pages/FAQPage';
import AccountDeletion from './pages/AccountDeletion';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div id="main" className="framer-1gpdsst">
      <Section1 />
      <Section2 />
      <Chatbot />
    </div>
  );
};

export default function App() {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOpenPreferences = () => setIsCookieModalOpen(true);
    window.addEventListener('openCookieModal', handleOpenPreferences);
    return () => window.removeEventListener('openCookieModal', handleOpenPreferences);
  }, []);

  useEffect(() => {
    if (location.pathname === '/cookie-preferences') {
      setIsCookieModalOpen(true);
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:slug" element={<JobDetails />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/termsand conditions" element={<Navigate to="/terms-conditions" replace />} />
        <Route path="/termsandconditions" element={<Navigate to="/terms-conditions" replace />} />
        <Route path="/termandconditions" element={<Navigate to="/terms-conditions" replace />} />
        <Route path="/termandconditons" element={<Navigate to="/terms-conditions" replace />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-preferences" element={<HomePage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
      <CookieConsentBanner />
      <CookiePreferencesModal isOpen={isCookieModalOpen} onClose={() => setIsCookieModalOpen(false)} />
      {['/privacy-policy', '/terms-conditions'].includes(location.pathname) && <Footer />}
    </>
  );
}
