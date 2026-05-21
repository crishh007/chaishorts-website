const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/Section1.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// The new exact HTML the user requested
const exactUserHtml = `<div className="flex flex-col items-start gap-3 mt-4">
  <a href="/" className="text-sm hover:opacity-80 transition" data-framer-page-link-current="true">
    Home
  </a>

  <a href="/careers" className="text-sm hover:opacity-80 transition">
    Careers
  </a>

  <a href="/privacy-policy" className="text-sm hover:opacity-80 transition" target="_blank">
    Privacy Policy
  </a>

  <a href="/terms-conditions" className="text-sm hover:opacity-80 transition" target="_blank">
    Terms and Conditions
  </a>

  <a href="/account-deletion" className="text-sm hover:opacity-80 transition" target="_blank">
    Account Deletion
  </a>

  <button
    onClick={(e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('openCookieModal'));
    }}
    className="text-sm text-left hover:opacity-80 transition"
  >
    Cookie Preferences
  </button>
</div>`;

// Regex to match the block we injected in the previous step
// It starts with <div className="flex flex-col gap-2 mt-3"> and ends with </div>
const regex = /<div className="flex flex-col gap-2 mt-3">[\s\S]*?Cookie Preferences\s*<\/button>\s*<\/div>/g;

let matches = content.match(regex);
console.log('Found instances to replace: ', matches ? matches.length : 0);

if (matches) {
  content = content.replace(regex, exactUserHtml);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully applied the exact JSX requested by the user.');
} else {
  console.log('No matches found. Please check the regex.');
}
