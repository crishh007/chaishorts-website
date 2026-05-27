import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        padding: '40px 24px 30px',
        marginTop: '40px',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        <div style={{ minWidth: '220px', flex: '1 1 220px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                backgroundColor: '#ffcc00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '14px',
                color: '#000',
              }}
            >
              CS
            </div>
            <span style={{ fontSize: '18px', fontWeight: 700, color: '#111' }}>
              ChaiShots
            </span>
          </div>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '13px', lineHeight: 1.7 }}>
            Made with ❤️ in Hyderabad.
          </p>
        </div>

        <div style={{ minWidth: '180px', flex: '1 1 180px' }}>
          <p style={{ margin: '0 0 12px', fontWeight: 700, color: '#111' }}>Pages</p>
          <div style={{ display: 'grid', gap: '8px' }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/privacy-policy" style={linkStyle}>Privacy Policy</Link>
            <Link to="/terms-conditions" style={linkStyle}>Terms & Conditions</Link>
            <Link to="/account-deletion" style={linkStyle}>Account Deletion</Link>
          </div>
        </div>

        <div style={{ minWidth: '180px', flex: '1 1 180px' }}>
          <p style={{ margin: '0 0 12px', fontWeight: 700, color: '#111' }}>Contact</p>
          <div style={{ display: 'grid', gap: '8px' }}>
            <a href="mailto:support@chaishots.in" style={linkStyle}>support@chaishots.in</a>
            <a href="https://apps.apple.com/in/app/chai-shots/id6741884665" target="_blank" rel="noopener noreferrer" style={linkStyle}>App Store</a>
            <a href="https://play.google.com/store/apps/details?id=com.chaiShots" target="_blank" rel="noopener noreferrer" style={linkStyle}>Google Play</a>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1120px',
          margin: '24px auto 0',
          paddingTop: '24px',
          borderTop: '1px solid #e5e7eb',
          color: '#6b7280',
          fontSize: '13px',
          textAlign: 'center',
        }}
      >
        © 2026 Chai Shots Private Limited. All rights reserved.
      </div>
    </footer>
  );
};

const linkStyle = {
  color: '#374151',
  textDecoration: 'none',
  fontSize: '14px',
};

export default Footer;
