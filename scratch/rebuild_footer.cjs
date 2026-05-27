const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/Section1.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// The new clean HTML the user requested
const cleanFooterHtml = `<div className="flex flex-col gap-2 mt-3">
  <a href="/" className="block text-[#1d1d1f] hover:text-[#0099ff] font-semibold text-[13px] transition-colors">
    Home
  </a>

  <a href="/careers" className="block text-[#1d1d1f] hover:text-[#0099ff] font-semibold text-[13px] transition-colors">
    Careers
  </a>

  <a href="/privacy-policy" className="block text-[#1d1d1f] hover:text-[#0099ff] font-semibold text-[13px] transition-colors" target="_blank">
    Privacy Policy
  </a>

  <a href="/terms-conditions" className="block text-[#1d1d1f] hover:text-[#0099ff] font-semibold text-[13px] transition-colors" target="_blank">
    Terms and Conditions
  </a>

  <a href="/account-deletion" className="block text-[#1d1d1f] hover:text-[#0099ff] font-semibold text-[13px] transition-colors" target="_blank">
    Account Deletion
  </a>

  <button
    onClick={(e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('openCookieModal'));
    }}
    className="block text-left text-[#1d1d1f] hover:text-[#0099ff] font-semibold text-[13px] transition-colors"
  >
    Cookie Preferences
  </button>
</div>`;

// We need to match the start of the block to the end of the block.
// Since the user is complaining about the layout collapsing, we need to completely rip out the old container and all its absolute positioned children.

// Match from `<div className="flex flex-col gap-2 items-start">` up until `</div>\n                  </div>\n                  <div className="framer-1yrm9lh" data-framer-name="Install">`
// Wait, the "Install" column might not be exactly next to it in all 3 variants. Let's look at the structure.
// Actually, it's safer to just match `<div className="flex flex-col gap-2 items-start">` and the next ~200 lines up to `Cookie Preferences\n                          </a>\n                        </p>\n                      </div>\n                    </div>`

const regex = /<div className="flex flex-col gap-2 items-start">[\s\S]*?Cookie Preferences[\s\S]*?<\/div>\s*<\/div>/g;

let matches = content.match(regex);
console.log('Found instances to replace: ', matches ? matches.length : 0);

if (matches) {
  content = content.replace(regex, cleanFooterHtml);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully replaced all broken footer containers with clean HTML.');
} else {
  console.log('No matches found. Please check the regex.');
}
