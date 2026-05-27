import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/account-deletion.css';

const AccountDeletion = () => {
  const { t } = useTranslation('accountDeletion');

  useEffect(() => {
    // Add a subtle page reveal effect on load.
    document.body.style.opacity = '0';
    const timer = setTimeout(() => {
      document.body.style.transition = 'opacity 260ms ease-out';
      document.body.style.opacity = '1';
    }, 20);

    return () => {
      clearTimeout(timer);
      document.body.style.opacity = '1';
      document.body.style.transition = '';
    };
  }, []);

  const handleRequestClick = () => {
    window.location.href =
      'mailto:support@chaishots.com?subject=ChaiShots%20Account%20Deletion%20Request&body=I%20would%20like%20to%20request%20the%20deletion%20of%20my%20ChaiShots%20account.%20Please%20send%20me%20the%20next%20steps.';
  };

  return (
    <div className="account-deletion-page">
      <main className="content">
        {/* Section 1: Top left aligned text */}
        <section className="text-section">
          <h1>{t('title')}</h1>
          <p>{t('intro_p1')}</p>
          <p>{t('intro_p2')}</p>
          <p>{t('intro_p3')}</p>
        </section>

        <hr className="divider" />

        {/* Section 2: Centered CTA block */}
        <section className="cta-section">
          <h2>{t('cta_title')}</h2>
          <p className="cta-subtext">{t('cta_subtext')}</p>
          <button id="requestBtn" className="button-primary" type="button" onClick={handleRequestClick}>
            {t('cta_button')}
          </button>
        </section>

        <hr className="divider" />

        {/* Section 3: Bottom left aligned */}
        <section className="text-section">
          <h2>{t('info_title')}</h2>
          <ul className="bullet-list">
            <li>{t('bullet1')}</li>
            <li>{t('bullet2')}</li>
            <li>{t('bullet3')}</li>
            <li>{t('bullet4_prefix')}<a href="/privacy-policy">{t('bullet4_link')}</a>.</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="page-footer">
          <div className="footer-content">
            <div className="footer-left">
              <span className="footer-logo">{t('footer_logo')}</span>
            </div>
            <div className="footer-right">
              <div className="footer-column">
                <h4>{t('footer_support')}</h4>
                <a href="#">{t('footer_contact')}</a>
                <a href="#">{t('footer_help')}</a>
                <a href="/privacy-policy">{t('footer_privacy')}</a>
              </div>
              <div className="footer-column">
                <h4>{t('footer_resources')}</h4>
                <a href="/terms-conditions">{t('footer_terms')}</a>
                <a href="/faqs">{t('footer_faq')}</a>
                <a href="/">{t('footer_home')}</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AccountDeletion;
