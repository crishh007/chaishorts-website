import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CookiePreferences = () => {
  const { t } = useTranslation('cookiePreferences');
  const [activeTab, setActiveTab] = useState('general');
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    essential: true,
    performance: true,
    analytics: true,
    advertising: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const stored = localStorage.getItem('cookiePreferences');
    if (stored) {
      try {
        setPreferences(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse cookie preferences', e);
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsent', 'accepted');
    navigate(-1);
  };

  const togglePref = (key) => {
    if (key === 'essential') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const Toggle = ({ active, onClick, disabled = false }) => (
    <div
      onClick={disabled ? null : onClick}
      style={{
        width: '52px',
        height: '28px',
        borderRadius: '9999px',
        backgroundColor: active ? '#111111' : '#E5E7EB',
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.25s ease',
        opacity: disabled ? 0.6 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px'
      }}
    >
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '9999px',
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          top: '4px',
          left: active ? '28px' : '4px',
          transition: 'left 0.25s ease'
        }}
      />
    </div>
  );

  const tabs = [
    { id: 'general', label: t('general') },
    { id: 'essential', label: t('essential') },
    { id: 'performance', label: t('performance') },
    { id: 'analytics', label: t('analytics') },
    { id: 'advertising', label: t('advertising') }
  ];

  const sectionContent = {
    general: {
      heading: t('preferenceHeading'),
      paragraphs: [t('generalParagraph1'), t('generalParagraph2')]
    },
    essential: {
      heading: t('essentialHeading'),
      paragraphs: [t('essentialParagraph')]
    },
    performance: {
      heading: t('performanceHeading'),
      paragraphs: [t('performanceParagraph')]
    },
    analytics: {
      heading: t('analyticsHeading'),
      paragraphs: [t('analyticsParagraph')]
    },
    advertising: {
      heading: t('advertisingHeading'),
      paragraphs: [t('advertisingParagraph')]
    }
  };

  return (
    <div style={{ minHeight: '100vh', width: '100vw', backgroundColor: '#f4f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', boxSizing: 'border-box' }}>
      <div style={{ width: '100%', maxWidth: '760px', maxHeight: '92vh', backgroundColor: '#ffffff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 24px 60px rgba(15, 23, 42, 0.14)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '34px 36px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ margin: 0, fontSize: '30px', fontWeight: 900, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#111111' }}>
            {t('title')}
          </h1>
          <button onClick={() => navigate(-1)} style={{ border: 'none', background: 'transparent', color: '#718096', cursor: 'pointer', fontSize: '28px', lineHeight: 1 }} aria-label="Close">
            ×
          </button>
        </div>

        <div style={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
          <aside style={{ width: '250px', minWidth: '250px', backgroundColor: '#f8f9fa', borderRight: '1px solid #e2e8f0', overflowY: 'auto' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', padding: '22px 0' }}>
              {tabs.map(tab => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      textAlign: 'left',
                      padding: '18px 24px',
                      fontSize: '15px',
                      lineHeight: 1.5,
                      fontWeight: active ? 700 : 500,
                      color: active ? '#111111' : '#475569',
                      backgroundColor: active ? '#ffffff' : '#f8f9fa',
                      border: 'none',
                      borderLeft: active ? '4px solid #111111' : '4px solid transparent',
                      cursor: 'pointer',
                      marginBottom: '4px'
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          <main style={{ flex: 1, overflowY: 'auto', padding: '32px 36px' }}>
            <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111111', marginBottom: '22px' }}>
              {sectionContent[activeTab].heading}
            </h2>
            <div style={{ display: 'grid', gap: '18px' }}>
              {sectionContent[activeTab].paragraphs.map((paragraph, index) => (
                <p key={index} style={{ margin: 0, fontSize: '16px', lineHeight: 1.8, color: '#334155' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {activeTab === 'general' && (
              <p style={{ marginTop: '24px', fontSize: '16px', lineHeight: 1.8, color: '#334155' }}>
                {t('findOutMore')} <Link to="/privacy-policy" style={{ color: '#111111', fontWeight: 700, textDecoration: 'underline' }}>{t('privacyPolicy')}</Link> {t('and')} <Link to="/terms-conditions" style={{ color: '#111111', fontWeight: 700, textDecoration: 'underline' }}>{t('termsOfUse')}</Link>.
              </p>
            )}

            {activeTab === 'essential' && (
              <div style={{ marginTop: '28px', padding: '22px', borderRadius: '20px', backgroundColor: '#f8f9fa', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                <div>
                  <p style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#111111' }}>{t('essentialItemTitle')}</p>
                  <p style={{ margin: '10px 0 0', fontSize: '14px', lineHeight: 1.7, color: '#475569' }}>{t('essentialItemDescription')}</p>
                </div>
                <Toggle active disabled />
              </div>
            )}

            {activeTab !== 'general' && activeTab !== 'essential' && (
              <div style={{ marginTop: '28px', padding: '22px', borderRadius: '20px', backgroundColor: '#f8f9fa', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                <div>
                  <p style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#111111' }}>{sectionContent[activeTab].heading}</p>
                  <p style={{ margin: '10px 0 0', fontSize: '14px', lineHeight: 1.7, color: '#475569' }}>{t(`${activeTab}ItemDescription`)}</p>
                </div>
                <Toggle active={preferences[activeTab]} onClick={() => togglePref(activeTab)} />
              </div>
            )}
          </main>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', padding: '24px 36px', borderTop: '1px solid #e5e7eb', backgroundColor: '#ffffff' }}>
          <button
            onClick={() => navigate(-1)}
            style={{ minWidth: '132px', borderRadius: '12px', padding: '14px 20px', backgroundColor: '#ffffff', color: '#111111', border: '1px solid #cbd5e1', fontWeight: 700, cursor: 'pointer' }}
          >
            {t('cancel')}
          </button>
          <button
            onClick={handleSave}
            style={{ minWidth: '180px', borderRadius: '12px', padding: '14px 20px', backgroundColor: '#111111', color: '#ffffff', border: 'none', fontWeight: 700, cursor: 'pointer' }}
          >
            {t('savePreferences')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;
