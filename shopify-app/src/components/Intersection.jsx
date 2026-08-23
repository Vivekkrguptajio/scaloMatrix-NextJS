"use client";

const Intersection = () => {
  return (
    <section id="intersection" className="w-full py-8 md:py-12 lg:py-14 font-sans bg-white">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center px-6 md:px-12 xl:px-16 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-6 gap-6">
          <div className="text-[28px] sm:text-3xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.2] text-black flex-1 flex flex-col">
            <span>Brand <span className="text-[#FD5800] font-light">∩</span> Tech <span className="text-[#FD5800] font-light">∩</span> Marketing.</span>
            <span>Most agencies <span className="text-[#FD5800]">pick two.</span></span>
          </div>
          <div className="w-full lg:w-[35%] flex lg:justify-end">
            <p className="text-gray-600 text-sm md:text-base leading-snug lg:text-right">
              The ones that convert live in the centre. Narrative that means something. Code
              that ships fast. Funnels that respect a rupee. We're allergic to handoffs.
            </p>
          </div>
        </div>

        {/* The Card Container */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-3xl overflow-hidden w-full flex flex-col lg:flex-row p-8 md:p-10 lg:p-12 gap-8 lg:gap-12">
          
          {/* Left Side: Venn Diagram */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            {/* Aspect ratio container for SVG */}
            <div className="relative w-full max-w-[380px] aspect-square">
              
              {/* SVG Venn Diagram */}
              <svg viewBox="0 0 500 500" className="w-full h-full absolute inset-0 transform scale-110">
                <defs>
                  {/* Diagonal Hatch Pattern */}
                  <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="8" stroke="#d1d5db" strokeWidth="1" />
                  </pattern>
                  
                  {/* Clip Paths for Intersections */}
                  <clipPath id="clipBrand">
                    <circle cx="180" cy="180" r="155" />
                  </clipPath>
                  <clipPath id="clipTech">
                    <circle cx="320" cy="180" r="155" />
                  </clipPath>
                  <clipPath id="clipMarketing">
                    <circle cx="250" cy="300" r="155" />
                  </clipPath>
                </defs>

                {/* Base Circles (White Fill) */}
                <circle cx="180" cy="180" r="155" fill="white" />
                <circle cx="320" cy="180" r="155" fill="white" />
                <circle cx="250" cy="300" r="155" fill="white" />

                {/* 2-Way Intersections (Hatched Fill) */}
                {/* Brand & Tech */}
                <circle cx="320" cy="180" r="155" fill="url(#diagonalHatch)" clipPath="url(#clipBrand)" />
                {/* Brand & Marketing */}
                <circle cx="250" cy="300" r="155" fill="url(#diagonalHatch)" clipPath="url(#clipBrand)" />
                {/* Tech & Marketing */}
                <circle cx="250" cy="300" r="155" fill="url(#diagonalHatch)" clipPath="url(#clipTech)" />

                {/* Center Intersection (Yellow Fill) */}
                <g clipPath="url(#clipBrand)">
                  <g clipPath="url(#clipTech)">
                    <circle cx="250" cy="300" r="155" fill="#FD5800" />
                  </g>
                </g>

                {/* Circle Strokes (Drawn last to be on top) */}
                <circle cx="180" cy="180" r="155" fill="none" stroke="#FD5800" strokeWidth="1.5" />
                <circle cx="320" cy="180" r="155" fill="none" stroke="#10b981" strokeWidth="1.5" />
                <circle cx="250" cy="300" r="155" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
              </svg>

              {/* Text Overlays */}
              {/* Brand (Top Left) */}
              <div className="absolute top-[28%] left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
                <div className="w-6 h-6 rounded-full bg-orange-50 border border-[#FD5800] flex items-center justify-center mb-1.5">
                  <span className="text-[#FD5800] text-[10px]">✎</span>
                </div>
                <h4 className="font-bold text-sm mb-1 text-black">BRAND</h4>
                <div className="bg-[#FD5800] text-white text-[8px] font-bold px-2 py-0.5 rounded-full mb-1">NARRATIVE</div>
                <p className="text-[10px] text-gray-500 leading-tight">Story. Positioning.<br/>Identity.</p>
              </div>

              {/* Tech (Top Right) */}
              <div className="absolute top-[28%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
                <div className="w-6 h-6 rounded-full bg-green-50 border border-[#10b981] flex items-center justify-center mb-1.5">
                  <span className="text-[#10b981] text-[10px] font-mono">{"</>"}</span>
                </div>
                <h4 className="font-bold text-sm mb-1 text-black">TECH</h4>
                <div className="bg-[#10b981] text-white text-[8px] font-bold px-2 py-0.5 rounded-full mb-1">SPEED-UX</div>
                <p className="text-[10px] text-gray-500 leading-tight">Code. Product.<br/>Performance.</p>
              </div>

              {/* Marketing (Bottom Center) */}
              <div className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
                <div className="w-6 h-6 rounded-full bg-purple-50 border border-[#8b5cf6] flex items-center justify-center mb-1.5">
                  <span className="text-[#8b5cf6] text-[10px]">📈</span>
                </div>
                <h4 className="font-bold text-sm mb-1 text-black">MARKETING</h4>
                <div className="bg-[#8b5cf6] text-white text-[8px] font-bold px-2 py-0.5 rounded-full mb-1">CAC-FUNNELS</div>
                <p className="text-[10px] text-gray-500 leading-tight">Growth. Funnels.<br/>Efficiency.</p>
              </div>

              {/* Center Overlay (TLPC) */}
              <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center z-10">
                <div className="w-4 h-4 border border-black flex items-center justify-center mb-1 bg-white/20">
                  <span className="text-[8px] font-bold text-black">L</span>
                </div>
                <h4 className="font-bold text-sm text-black">TLPC</h4>
              </div>

            </div>
          </div>

          {/* Right Side: Text List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            {/* Item 1 */}
            <div className="mb-5 border-b border-gray-300 pb-5">
              <div className="flex items-center gap-3 mb-1 text-gray-400 font-mono text-[11px]">
                <span>01</span>
                <div className="w-[1px] h-2.5 bg-black"></div>
              </div>
              <h3 className="text-lg font-bold mb-1 text-black">Brand without tech</h3>
              <p className="text-xs text-gray-500">
                Looks like a Pinterest board. Loads in 8 seconds. Converts at 0.9%.
              </p>
            </div>

            {/* Item 2 */}
            <div className="mb-5 border-b border-gray-300 pb-5">
              <div className="flex items-center gap-3 mb-1 text-gray-400 font-mono text-[11px]">
                <span>02</span>
              </div>
              <h3 className="text-lg font-bold mb-1 text-black">Tech without brand</h3>
              <p className="text-xs text-gray-500">
                Ships in 3 days. Says nothing. Gets ignored in 4 seconds.
              </p>
            </div>

            {/* Item 3 */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-1 text-gray-400 font-mono text-[11px]">
                <span>03</span>
              </div>
              <h3 className="text-lg font-bold mb-1 text-black">Marketing without either</h3>
              <p className="text-xs text-gray-500">
                Great targeting. Lands people on a wall. CAC goes up. ROAS goes down.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="bg-[#FD5800] border border-[#FD5800] p-4 rounded-xl">
              <h4 className="font-bold text-base mb-1 text-white">The overlap.</h4>
              <div className="flex items-start gap-2">
                <span className="text-[10px] mt-0.5 text-white/80">⊕</span>
                <p className="text-[10px] font-mono tracking-widest uppercase text-white font-semibold">
                  WHERE WE LIVE. WHERE PAGES CONVERT +20% BETTER ON DAY ONE.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Intersection;

