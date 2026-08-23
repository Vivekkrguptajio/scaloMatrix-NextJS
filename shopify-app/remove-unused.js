const fs = require('fs');
let content = fs.readFileSync('src/components/CaseStudiesGrid.jsx', 'utf8');
const lines = content.split('\n');

// We want to remove lines from 19 to 332 (0-indexed: 18 to 331).
// Let's verify line 18 is `const SuperYouMockup = () => (` and line 331 is `);`
if (lines[18].includes('const SuperYouMockup') && lines[331] === ');') {
  lines.splice(18, 314);
  fs.writeFileSync('src/components/CaseStudiesGrid.jsx', lines.join('\n'));
  console.log('Removed unused mockups successfully.');
} else {
  console.log('Lines do not match expected boundaries. Exiting.');
}
