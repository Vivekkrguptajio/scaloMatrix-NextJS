const fs = require('fs');
let content = fs.readFileSync('src/components/CaseStudiesGrid.jsx', 'utf8');

// Replacements
const replacements = [
  { from: 'src="/photsWork/Luxury.webp"', to: 'src="/lap_view/LuxuryWayora.webp"' },
  { from: 'src="/photsWork/wayoranatural.webp"', to: 'src="/lap_view/wayoranatural.webp"' },
  { from: 'src="/photsWork/Nutraphyll.webp"', to: 'src="/lap_view/Nutraphyll.webp"' },
  { from: 'src="/photsWork/Nada.webp"', to: 'src="/lap_view/Nada.webp"' },
  { from: 'src="/photsWork/Drapes.webp"', to: 'src="/lap_view/Drapes.webp"' },
  { from: 'src="/photsWork/Judex.webp"', to: 'src="/lap_view/Judex.webp"' },
];

replacements.forEach(rep => {
  content = content.replace(rep.from, rep.to);
});

fs.writeFileSync('src/components/CaseStudiesGrid.jsx', content);
