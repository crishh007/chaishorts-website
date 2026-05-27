const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/Section1.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// The HTML block we want to inject. We use generic styling matching the other links.
const cookieLink = `
                      <div
                        data-framer-name="Cookie Preferences"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          "-ExtractedR6o4lv":
                            "var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31))",
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text"
                          style={{
                            "-FontSelector": "SW50ZXItU2VtaUJvbGQ=",
                            "-FramerFontFamily": "&quot",
                            "-FramerFontSize": "13px",
                            "-FramerFontWeight": "600",
                            "-FramerLetterSpacing": "-0.03em",
                            "-FramerTextAlignment": "center",
                            "-FramerTextColor":
                              "var(--extracted-r6o4lv, var(--token-4da5a6b8-0988-4de4-b536-2545a7e0ca93, rgb(29, 29, 31)))",
                          }}
                        >
                          <a
                            className="framer-text framer-styles-preset-auc3bu"
                            data-styles-preset="yydM5u4eT"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              window.dispatchEvent(new CustomEvent('openCookieModal'));
                            }}
                          >
                            Cookie Preferences
                          </a>
                        </p>
                      </div>`;

// Find the blocks of Account Deletion and insert after the closing </div>
// Account deletion block ends with </a></p></div>
const regex = /(<div[^>]*data-framer-name="Account Deletion"[\s\S]*?<\/a>\s*<\/p>\s*<\/div>)/g;

content = content.replace(regex, `$1\n${cookieLink}`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully injected Cookie Preferences links into Section1.jsx');
