const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/Section1.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// We just need to replace font-semibold with font-normal inside the block we created.
// To do this safely, we will extract the exact footer block using the regex we used before,
// do the string replacement within that match, and then replace it back into the content.

const regex = /<div className="flex flex-col items-start gap-3 mt-4">[\s\S]*?Cookie Preferences\s*<\/a>\s*<\/div>/g;

let matches = content.match(regex);
console.log('Found instances to update: ', matches ? matches.length : 0);

if (matches) {
  content = content.replace(regex, (match) => {
    return match.replace(/font-semibold/g, 'font-normal');
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully changed font-semibold to font-normal.');
} else {
  console.log('No matches found. Please check the regex.');
}
