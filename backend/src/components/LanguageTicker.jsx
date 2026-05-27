import React from 'react';
import './LanguageTicker.css';

const languages = [
  'अ', 'అ', 'അ', 'અ', 'অ', 'ਅ', 'ಕ', 'க', 'ଓ', 'ও'
];

export default function LanguageTicker() {
  return (
    <div className="language-ticker-container">
      <div className="ticker-column column-up">
        {[...languages, ...languages].map((lang, i) => (
          <div key={`up-${i}`} className="ticker-item">{lang}</div>
        ))}
      </div>
      <div className="ticker-column column-down">
        {[...languages, ...languages].map((lang, i) => (
          <div key={`down-${i}`} className="ticker-item">{lang}</div>
        ))}
      </div>
      <div className="ticker-column column-up">
        {[...languages, ...languages].map((lang, i) => (
          <div key={`up2-${i}`} className="ticker-item">{lang}</div>
        ))}
      </div>
      <div className="ticker-column column-down">
        {[...languages, ...languages].map((lang, i) => (
          <div key={`down2-${i}`} className="ticker-item">{lang}</div>
        ))}
      </div>
    </div>
  );
}
