const fs = require('fs');
let content = fs.readFileSync('src/components/CaseStudiesGrid.jsx', 'utf8');

// Mobile wrapper
content = content.replace(
  'className="bg-white border-[0.5px] border-black w-full flex flex-col hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(253,88,0,0.2)] transition-all duration-300"',
  'className="bg-white border-[0.5px] border-black rounded-2xl overflow-hidden w-full flex flex-col hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(253,88,0,0.2)] transition-all duration-300"'
);

// Desktop Row 1
content = content.replace(
  'className="bg-white border border-black w-full grid grid-cols-3 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(253,88,0,0.2)] transition-all duration-300"',
  'className="bg-white border border-black rounded-3xl overflow-hidden w-full grid grid-cols-3 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(253,88,0,0.2)] transition-all duration-300"'
);

// Desktop Row 2
content = content.replace(
  'className="bg-white border border-black w-full grid grid-cols-3 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(253,88,0,0.2)] transition-all duration-300"',
  'className="bg-white border border-black rounded-3xl overflow-hidden w-full grid grid-cols-3 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(253,88,0,0.2)] transition-all duration-300"'
);

// Inner image links (Mobile)
content = content.replace(
  'className="bg-[#f1f1f1] border border-black p-2 sm:p-3 mb-4 flex-1 flex items-center justify-center min-h-[170px] sm:min-h-[240px] cursor-pointer hover:shadow-lg transition-shadow group relative block"',
  'className="bg-[#f1f1f1] border border-black rounded-xl p-2 sm:p-3 mb-4 flex-1 flex items-center justify-center min-h-[170px] sm:min-h-[240px] cursor-pointer hover:shadow-lg transition-shadow group relative block"'
);

// Inner image links (Desktop)
// Needs a global replace because there are two of them (one for row 1, one for row 2)
content = content.replace(
  /className="bg-\[#f1f1f1\] border border-black p-3 md:p-4 mb-5 flex-1 flex items-center justify-center min-h-\[280px\] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group relative block"/g,
  'className="bg-[#f1f1f1] border border-black rounded-2xl p-3 md:p-4 mb-5 flex-1 flex items-center justify-center min-h-[280px] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group relative block"'
);

fs.writeFileSync('src/components/CaseStudiesGrid.jsx', content);
