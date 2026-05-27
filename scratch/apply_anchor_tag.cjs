const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/Section1.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the button tag with an anchor tag so it perfectly inherits link styles
const buttonHtml = `<button
    onClick={(e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('openCookieModal'));
    }}
    className="text-[13px] font-semibold whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors text-left"
  >
    Cookie Preferences
  </button>`;

const anchorHtml = `<a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('openCookieModal'));
    }}
    className="text-[13px] font-semibold whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors text-left"
  >
    Cookie Preferences
  </a>`;

content = content.split(buttonHtml).join(anchorHtml);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully changed button to anchor tag for styling parity.');
