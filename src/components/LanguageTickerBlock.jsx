import React from 'react';
import './LanguageTicker.css';

const teluguLetters = ["అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఎ", "ఏ", "ఐ", "ఒ", "ఓ", "ఔ"];
const hindiLetters = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ए", "ऐ", "ओ", "औ", "अं", "अः"];
const tamilLetters = ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"];

export default function LanguageTickerBlock() {
  return (
    <div className="language-ticker-container">
      <div className="language-ticker-left">
        <h2>Now streaming in <span>Telugu</span>.</h2>
        <p>Coming soon in 10 more Indian languages</p>
      </div>
      
      <div className="language-ticker-right">
        {/* Column 1: Telugu (Moving Up) */}
        <div className="ticker-column ticker-up">
          {[...teluguLetters, ...teluguLetters].map((letter, i) => (
            <div key={`te-${i}`}>{letter}</div>
          ))}
        </div>
        
        {/* Column 2: Hindi (Moving Down) */}
        <div className="ticker-column ticker-down">
          {[...hindiLetters, ...hindiLetters].map((letter, i) => (
            <div key={`hi-${i}`}>{letter}</div>
          ))}
        </div>

        {/* Column 3: Tamil (Moving Up) */}
        <div className="ticker-column ticker-up" style={{ animationDuration: '14s' }}>
          {[...tamilLetters, ...tamilLetters].map((letter, i) => (
            <div key={`ta-${i}`}>{letter}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
