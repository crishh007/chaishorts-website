const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/Section1.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const baseClass = "text-[13px] font-semibold whitespace-nowrap text-[#1d1d1f] hover:text-[#0099ff] transition-colors";

// The new exact HTML with unified font styles matching the original Framer design 
const exactUserHtml = `<div className="flex flex-col items-start gap-3 mt-4">
  <a href="/" className="${baseClass}" data-framer-page-link-current="true">
    Home
  </a>

  <a href="/careers" className="${baseClass}">
    Careers
  </a>

  <a href="/privacy-policy" className="${baseClass}" target="_blank">
    Privacy Policy
  </a>

  <a href="/terms-conditions" className="${baseClass}" target="_blank">
    Terms and Conditions
  </a>

  <a href="/account-deletion" className="${baseClass}" target="_blank">
    Account Deletion
  </a>

  <button
    onClick={(e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('openCookieModal'));
    }}
    className="${baseClass} text-left"
  >
    Cookie Preferences
  </button>
</div>`;

// Regex to match the block we injected in the previous step
const regex = /<div className="flex flex-col items-start gap-3 mt-4">[\s\S]*?Cookie Preferences\s*<\/button>\s*<\/div>/g;

let matches = content.match(regex);
console.log('Found instances to replace: ', matches ? matches.length : 0);

if (matches) {
  content = content.replace(regex, exactUserHtml);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully unified font styling for all footer links.');
} else {
  console.log('No matches found. Please check the regex.');
}
