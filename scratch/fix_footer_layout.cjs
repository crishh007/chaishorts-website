const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/Section1.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the restrictive Framer class with a clean Tailwind flex column
content = content.split('className="framer-h2h1gq"').join('className="flex flex-col gap-2 items-start"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully fixed footer layout in Section1.jsx');
