import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageSwitcher from '../components/LanguageSwitcher'

const TermsConditions = () => {
  const { t } = useTranslation('termsConditions')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', color: '#1f2937', paddingTop: '3rem', paddingBottom: '8rem', WebkitFontSmoothing: 'antialiased' }}>
      <style>{`
        .legal-page-container {
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          padding: 100px 24px 60px;
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
        .legal-page-container h3 {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 16px 0 8px 0;
          text-align: left;
        }
        .legal-page-container p {
          font-size: 14px;
          line-height: 1.8;
          font-weight: 400;
          color: #444;
          margin-bottom: 14px;
          text-align: left;
        }
        .legal-page-container strong {
          font-weight: 600;
          color: #222;
        }
        .legal-page-container em {
          font-style: italic;
        }
        .legal-page-container a {
          color: #000;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .legal-page-container table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
          color: #444;
          margin: 16px 0;
        }
        .legal-page-container th, .legal-page-container td {
          border: 1px solid #eee;
          padding: 10px;
          text-align: left;
        }
        .legal-page-container th {
          background-color: #f9f9f9;
          font-weight: 600;
          color: #111;
        }
        @media (max-width: 768px) {
          .legal-page-container {
            padding: 80px 20px 40px;
          }
          .legal-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .legal-header h1 {
            font-size: 28px;
          }
        }
      `}</style>

      <div className='legal-page-container'>
        <div className='legal-header'>
          <h1>{t('title')}</h1>
          <LanguageSwitcher />
        </div>

        <section>
          <h2>{t('intro_title')}</h2>
          <p>{t('intro_p1')}</p>
          <p>{t('intro_p2')}</p>
          <p>{t('intro_p3')}</p>
          <p><strong>{t('intro_p4')}</strong></p>
          <p>{t('intro_p5')}</p>
        </section>

        <section>
          <h2>{t('eligibility_title')}</h2>
          <h3>{t('eligibility_sub1_title')}</h3>
          <p>{t('eligibility_sub1_p1')}</p>
          <p><em>{t('eligibility_sub1_p2')}</em></p>
          <h3>{t('eligibility_sub2_title')}</h3>
          <p>{t('eligibility_sub2_p1')}</p>
          <p>{t('eligibility_sub2_p2')}</p>
        </section>

        <section>
          <h2>{t('access_title')}</h2>
          <p>{t('access_p1')}</p>
        </section>

        <section>
          <h2>{t('features_title')}</h2>
          <p>{t('features_p1')}</p>
          <h3>{t('features_sub1_title')}</h3>
          <p>{t('features_sub1_p1')}</p>
          <h3>{t('features_sub2_title')}</h3>
          <p>{t('features_sub2_p1')}</p>
          <h3>{t('features_sub3_title')}</h3>
          <p>{t('features_sub3_p1')}</p>
        </section>

        <section>
          <h2>{t('plans_title')}</h2>
          <p>{t('plans_p1')}</p>
          <p>{t('plans_sub1_p1')}</p>
          <p>{t('plans_sub2_p1')}</p>
          <p>{t('plans_sub2_p2')}</p>
          <p>{t('plans_sub2_p3')}</p>
        </section>

        <section>
          <h2>{t('payment_title')}</h2>
          <p>{t('payment_p1')}</p>
          <p>{t('payment_p2')}</p>
        </section>

        <section>
          <h2>{t('refund_title')}</h2>
          <p>{t('refund_p1')}</p>
        </section>

        <section>
          <h2>{t('restrictions_title')}</h2>
          <p>{t('restrictions_p1')}</p>
          <p>{t('restrictions_p2')}</p>
        </section>

        <section>
          <h2>{t('ownership_title')}</h2>
          <p>{t('ownership_p1')}</p>
          <p>{t('ownership_p2')}</p>
          <p>{t('ownership_p3')}</p>
        </section>

        <section>
          <h2>{t('support_title')}</h2>
          <p>{t('support_p1')}</p>
          <p><strong>{t('support_p2')}</strong></p>
          <p>{t('support_p3')}</p>
          <p>{t('support_p4')}</p>
          <p>{t('support_p5')}</p>
          <table>
            <thead>
              <tr>
                <th>{t('table_cat_label')}</th>
                <th>{t('table_rec_label')}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>{t('table_row1')}</td><td>-</td></tr>
              <tr><td>{t('table_row2')}</td><td>-</td></tr>
              <tr><td>{t('table_row3')}</td><td>-</td></tr>
              <tr><td>{t('table_row4')}</td><td>-</td></tr>
              <tr><td>{t('table_row5')}</td><td>-</td></tr>
              <tr><td>{t('table_row6')}</td><td>-</td></tr>
              <tr><td>{t('table_row7')}</td><td>-</td></tr>
              <tr><td>{t('table_row8')}</td><td>-</td></tr>
              <tr><td>{t('table_row9')}</td><td>-</td></tr>
              <tr><td>{t('table_row10')}</td><td>-</td></tr>
              <tr><td>{t('table_row11')}</td><td>-</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>{t('links_title')}</h2>
          <p>{t('links_p1')}</p>
        </section>

        <section>
          <h2>{t('disclaimer_title')}</h2>
          <h3>{t('disclaimer_sub1_title')}</h3>
          <p>{t('disclaimer_sub1_p1')}</p>
          <h3>{t('disclaimer_sub2_title')}</h3>
          <p>{t('disclaimer_sub2_p1')}</p>
          <h3>{t('disclaimer_sub3_title')}</h3>
          <p>{t('disclaimer_sub3_p1')}</p>
          <p>{t('disclaimer_sub3_p2')}</p>
          <h3>{t('disclaimer_sub4_title')}</h3>
          <p>{t('disclaimer_sub4_p1')}</p>
          <h3>{t('disclaimer_sub5_title')}</h3>
          <p>{t('disclaimer_sub5_p1')}</p>
          <h3>{t('disclaimer_sub6_title')}</h3>
          <p>{t('disclaimer_sub6_p1')}</p>
          <h3>{t('disclaimer_sub7_title')}</h3>
          <p>{t('disclaimer_sub7_p1')}</p>
        </section>

        <section>
          <h2>{t('notice_title')}</h2>
          <p>{t('notice_p1')}</p>
          <p>{t('notice_p2')}</p>
        </section>

        <section>
          <h2>{t('indemnity_title')}</h2>
          <p>{t('indemnity_p1')}</p>
        </section>

        <section>
          <h2>{t('modifications_title')}</h2>
          <p>{t('modifications_p1')}</p>
        </section>

        <section>
          <h2>{t('misc_title')}</h2>
          <p>{t('misc_p1')}</p>
        </section>

        <section>
          <h2>Cookie Preferences</h2>
          <p>
            To manage your cookie settings, please click here:{' '}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                window.dispatchEvent(new Event('openCookieModal'));
              }}
              style={{ color: '#000', textDecoration: 'underline', fontWeight: 600 }}
            >
              Cookie Preferences
            </a>
          </p>
        </section>

        <div style={{ height: '40px' }}></div>
      </div>
    </div>
  )
}

export default TermsConditions
