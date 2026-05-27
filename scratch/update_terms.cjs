const fs = require('fs');
const path = require('path');

const srcFolder = 'c:\\Users\\sadan\\OneDrive\\Desktop\\chai_shots_website (2)\\termsand conditions\\src\\pages';
const destFolder = path.join(__dirname, '../src/pages');

// 1. Copy and patch TermsConditions.jsx
const newTermsPath = path.join(srcFolder, 'TermsConditions.jsx');
let newTermsContent = fs.readFileSync(newTermsPath, 'utf8');

// Patch LanguageSelector to LanguageSwitcher
newTermsContent = newTermsContent.replace(
  "import LanguageSelector from '../components/LanguageSelector';",
  "import LanguageSwitcher from '../components/LanguageSwitcher';"
);
newTermsContent = newTermsContent.replace(
  "<LanguageSelector />",
  "<LanguageSwitcher />"
);

// The user also mentioned adding cookie preferences inside terms and conditions. 
// I will add a link to open the Cookie Preferences modal at the bottom of the Terms page, just in case.
const cookieLinkHtml = `
        <section>
          <h2>Cookie Preferences</h2>
          <p>
            To manage your cookie settings, please click here: 
            <button 
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('openCookieModal'));
              }}
              style={{ background: 'none', border: 'none', color: '#000', textDecoration: 'underline', cursor: 'pointer', padding: 0, font: 'inherit', fontWeight: 600 }}
            >
              Cookie Preferences
            </button>
          </p>
        </section>
`;
newTermsContent = newTermsContent.replace('<h2>P) Miscellaneous</h2>', cookieLinkHtml + '\n        <h2>P) Miscellaneous</h2>');

fs.writeFileSync(path.join(destFolder, 'TermsConditions.jsx'), newTermsContent, 'utf8');
console.log('Replaced TermsConditions.jsx');

// 2. The user said: "the cookie perference need to be add where the code realted to that is present in the termsand conditions file"
// I will also copy CookiePreferences.jsx just in case they want the actual page.
const newCookiePath = path.join(srcFolder, 'CookiePreferences.jsx');
if (fs.existsSync(newCookiePath)) {
  const cookieContent = fs.readFileSync(newCookiePath, 'utf8');
  fs.writeFileSync(path.join(destFolder, 'CookiePreferencesPage.jsx'), cookieContent, 'utf8');
  console.log('Copied CookiePreferences.jsx as CookiePreferencesPage.jsx');
}
