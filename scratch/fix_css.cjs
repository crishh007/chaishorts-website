const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../src/styles/index.css');
let content = fs.readFileSync(cssPath, 'utf8');

// 1. Fix Tailwind v4 imports
content = content.replace('@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;', '@import "tailwindcss";');
content = content.replace('@tailwind base;\n@tailwind components;\n@tailwind utilities;', '@import "tailwindcss";');

// 2. Remove corner-shape properties to fix IDE warnings
content = content.replace(/^[ \t]*corner-shape:.*$\r?\n?/gm, '');

fs.writeFileSync(cssPath, content, 'utf8');
console.log('Successfully fixed index.css errors!');
