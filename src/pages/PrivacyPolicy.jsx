import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const PrivacyPolicy = () => {
  const { t } = useTranslation('privacyPolicy');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', color: '#1f2937', paddingTop: '3rem', paddingBottom: '8rem', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        .legal-page-container {
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
          padding: 100px 24px 60px 24px;
        }
        .legal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          gap: 20px;
        }
        .legal-header h1 {
          font-size: 36px;
          font-weight: 700;
          color: #111;
          margin: 0;
          line-height: 1.1;
          text-align: left;
        }
        .last-updated {
          font-size: 13px;
          color: #888;
          margin-bottom: 30px;
          font-weight: 400;
          text-align: left;
        }
        .legal-page-container section {
          margin-bottom: 20px;
          text-align: left;
        }
        .legal-page-container h2 {
          font-size: 18px;
          font-weight: 600;
          color: #111;
          margin: 0 0 10px 0;
          text-align: left;
        }
        .legal-page-container p {
          font-size: 14px;
          line-height: 1.6;
          font-weight: 400;
          color: #444;
          margin-bottom: 14px;
          text-align: left;
        }
        .legal-page-container strong {
          font-weight: 600;
          color: #222;
        }
        .legal-page-container a {
          color: #000;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .grievance-box {
          background-color: #f7f7f7;
          padding: 16px;
          border-radius: 6px;
          border: 1px solid #eee;
          margin-top: 8px;
          max-width: 100%;
        }
        .grievance-box p {
          margin-bottom: 8px !important;
        }
        @media (max-width: 768px) {
          .legal-page-container {
            padding: 80px 20px 40px 20px;
          }
          .legal-header {
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
            gap: 20px;
          }
          .legal-header h1 {
            font-size: 28px;
          }
        }
      `}</style>

      <div className="legal-page-container">
        <div className="legal-header">
          <h1>{t('title')}</h1>
          <LanguageSwitcher />
        </div>
        <p className="last-updated">{t('lastUpdated')}</p>

        <section>
          <p>{t('intro')}</p>
        </section>

        <section>
          <h2>{t('consent_title')}</h2>
          <p>{t('consent_text')}</p>
        </section>

        <section>
          <h2>{t('info_collect_title')}</h2>
          <p>{t('info_collect_intro')}</p>

          <p><strong>{t('info_collect_a_title')}</strong> {t('info_collect_a_text')}</p>

          <p><strong>{t('info_collect_b_title')}</strong> {t('info_collect_b_text')}</p>
        </section>

        <section>
          <h2>{t('use_info_title')}</h2>
          <p>{t('use_info_text')}</p>
        </section>

        <section>
          <h2>{t('data_sharing_title')}</h2>
          <p>{t('data_sharing_text')}</p>
          <p>
            <strong>{t('data_sharing_corp_title')}</strong> {t('data_sharing_corp_text')}
          </p>
          <p>
            <strong>{t('data_sharing_affiliates_title')}</strong> {t('data_sharing_affiliates_text')}
          </p>
        </section>

        <section>
          <h2>{t('legal_basis_title')}</h2>
          <p>{t('legal_basis_text')}</p>
        </section>

        <section>
          <h2>{t('user_rights_title')}</h2>
          <p>{t('user_rights_text')}</p>
        </section>

        <section>
          <h2>{t('data_retention_title')}</h2>
          <p>{t('data_retention_text')}</p>
        </section>

        <section>
          <h2>{t('security_title')}</h2>
          <p>{t('security_text')}</p>
        </section>

        <section style={{ borderTop: '1px solid #f0f0f0', paddingTop: '20px' }}>
          <h2 style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>{t('grievance_title')}</h2>
          <p>{t('grievance_intro')}</p>
          <div className="grievance-box">
            <p><strong>{t('grievance_name_label')}</strong> Ms. Nairmalya Suryadevara</p>
            <p><strong>Email:</strong> <a href="mailto:nairmalya@chaishots.in">nairmalya@chaishots.in</a></p>
            <p><strong>Address:</strong> Plot no. 206, House No.3, Kavuri Hills, Hyderabad, Telangana, India - 500033 IN</p>
          </div>
        </section>

        <section>
          <h2>{t('updates_title')}</h2>
          <p>{t('updates_text')}</p>
        </section>

        <section>
          <h2>{t('governing_law_title')}</h2>
          <p>{t('governing_law_text')}</p>
        </section>

        <div style={{ height: '40px' }}></div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

