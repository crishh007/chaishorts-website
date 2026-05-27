const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/Section1.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetString = `                            Account Deletion
                          </a>
                        </p>
                      </div>`;

const injection = `                            Account Deletion
                          </a>
                        </p>
                      </div>
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

content = content.split(targetString).join(injection);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully injected Cookie Preferences. Total occurrences replaced: ', content.split('Cookie Preferences').length - 1);
