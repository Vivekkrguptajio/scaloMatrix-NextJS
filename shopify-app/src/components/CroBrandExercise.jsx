"use client";

const CroBrandExercise = () => {
  return (
    <section id="cro" className="w-full py-8 md:py-12 lg:py-14 bg-white text-black font-sans">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-12 xl:px-16 flex flex-col gap-6 lg:gap-8">
        
        {/* Top Row: Large Headline & Subtext */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end gap-6">
          {/* Left Side: Large Headline */}
          <div className="lg:w-[60%]">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.1] text-[#111111] tracking-tight">
              CRO is a brand exercise.<br />
              The % is <a 
                href="#case-studies"
                className="text-[#FD5800] hover:underline cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                the receipt.
              </a>
            </h2>
          </div>

          {/* Right Side: Paragraph */}
          <div className="w-full lg:w-[40%] flex lg:justify-end">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed lg:text-right">
              A "+30% lift" on the wrong audience attracts more of the wrong customer. They churn in six weeks. The number looked great on Tuesday, awful at quarterly close. We optimise the thing that moves the number, story, audience, trust. Not the button colour.
            </p>
          </div>
        </div>

        {/* Bottom Card Grid: The Re-frame */}
        <div className="bg-white border border-black rounded-3xl overflow-hidden w-full flex flex-col lg:flex-row shadow-sm">
          
          {/* Left Column: The Re-frame Hero */}
          <div className="w-full lg:w-5/12 p-5 sm:p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-8">
                THE RE-FRAME
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.15] text-black mb-8">
                CRO is <span className="line-through text-gray-400 font-normal">a button-colour war.</span>{" "}
                <span className="bg-[#FD5800] text-white px-2 py-0.5 inline-block">who walks in the door.</span>
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                A landing page is the first thing your brand says out loud. Say it wrong and the test still "wins" — with people who were never going to stay. Say it right and the % compounds over twelve months, not twelve hours.
              </p>
            </div>

            <div className="mt-16 pt-6 border-t border-gray-200">
              <span className="text-[11px] font-mono text-[#FD5800] tracking-widest uppercase">
                — 247 PAGES OF LEARNING, COMPRESSED.
              </span>
            </div>
          </div>

          {/* Right Column: Factors 1, 2 & 3 Grid */}
          <div className="w-full lg:w-7/12 flex flex-col">
            
            {/* Upper Factors 1 & 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-black">
              
              {/* Factor 01: Audience */}
              <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-6">
                    <span>⊕ FACTOR · 01 · AUDIENCE</span>
                    <span className="text-[#FD5800] font-bold">LTV · 12-MO</span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4">
                    The page <span className="text-[#FD5800]">chooses your</span> customer.
                  </h4>

                  <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                    Discount-forward hero → discount-forward buyers. They convert <strong className="text-black">+18%</strong> faster and churn <strong className="text-black">3×</strong> harder. Brand-forward page → slower on day one, <strong className="text-black">compounds</strong> over year one. We pick for LTV, not Monday.
                  </p>
                </div>

                <div className="pt-4 border-t border-dashed border-gray-300 flex justify-between items-center text-[10px] font-mono uppercase tracking-wider">
                  <span className="text-[#FD5800]">DISCOUNT LTV · ₹1.8k</span>
                  <span className="text-[#FD5800]">BRAND LTV · ₹5.4k</span>
                </div>
              </div>

              {/* Factor 02: Language */}
              <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-6">
                    <span>⊕ FACTOR · 02 · LANGUAGE</span>
                    <span className="text-[#FD5800] font-bold">n≥5 INTERVIEWS</span>
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4">
                    Resonance is a <span className="text-[#FD5800]">metric</span>, it just hides.
                  </h4>

                  <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                    Pages that convert don't describe the product — they <strong className="text-black">sound like the customer already thinking about it.</strong> "Bloated after lunch" beats "gut health optimisation." We interview real buyers and steal their exact words.
                  </p>
                </div>

                <div className="pt-4 border-t border-dashed border-gray-300 flex justify-between items-center text-[10px] font-mono uppercase tracking-wider">
                  <span className="text-gray-400">AGENCY COPY</span>
                  <span className="text-[#FD5800]">CUSTOMER'S OWN WORDS · ✓</span>
                </div>
              </div>

            </div>

            {/* Bottom Factor 3: Trust */}
            <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-6">
                  <span>⊕ FACTOR · 03 · TRUST</span>
                  <span className="text-[#FD5800] font-bold">BRAND ≠ VIBES</span>
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-black leading-tight mb-4">
                  Brand is <span className="text-[#FD5800]">the floor</span> CVR bounces off.
                </h4>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-6">
                  Two pages, identical copy, identical CTAs. Page A looks like it'll still exist in 2027. Page B doesn't. Page A wins +27%. Design and trust are the same fight — and neither shows up in a heatmap.
                </p>
              </div>

              <div className="pt-4 border-t border-dashed border-gray-300 flex justify-between items-center text-[10px] font-mono uppercase tracking-wider">
                <span className="text-gray-400">TRUST</span>
                <span className="text-[#FD5800]">CONVERSION</span>
              </div>
            </div>

          </div>

        </div>

        {/* Dark Comparison Card: The "Win" Nobody Should Want */}
        <div className="bg-[#111111] text-white border border-black w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
          
          {/* Left Comparison (Killed Variant) */}
          <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-800">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-4">
                ⊕ THE "WIN" NOBODY SHOULD WANT
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                Variant lifted CVR <span className="text-[#FD5800]">+34%</span> week one.
              </h4>

              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#ff6b6b] my-4">
                +34%
              </div>
            </div>

            <div className="pt-4 border-t border-dashed border-gray-800 text-[11px] font-mono text-gray-400 leading-relaxed">
              Discount-led. Returns up <span className="text-[#ff6b6b]">+61%</span>. LTV fell to <span className="text-[#ff6b6b]">₹1.8k</span>. Losing money faster.
            </div>
          </div>

          {/* Center Divider Badge */}
          <div className="p-6 lg:px-8 border-b lg:border-b-0 lg:border-r border-gray-800 border-dashed flex flex-col items-center justify-center text-center bg-[#161616]">
            <div className="text-[11px] font-mono tracking-widest text-[#FD5800] uppercase font-bold flex flex-col items-center gap-1">
              <span>→ WE KILLED IT</span>
              <span>WEEK 2 →</span>
            </div>
          </div>

          {/* Right Comparison (Compound Winner) */}
          <div className="p-5 sm:p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-4">
                ⊕ THE "WIN" NOBODY SHOULD WANT
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                Brand-led hero, compounding by month three.
              </h4>

              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FD5800] my-4">
                +22%
              </div>
            </div>

            <div className="pt-4 border-t border-dashed border-gray-800 text-[11px] font-mono text-gray-400 leading-relaxed">
              Day-one CVR +22%. 90-day LTV ₹5.4k. Repeat rate <span className="text-[#FD5800]">+41%</span>. This is the casestudy.
            </div>
          </div>

        </div>

        {/* Bottom TL;DR & Audit Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-4">
          <div className="text-[11px] font-mono tracking-widest text-gray-500 uppercase">
            ⊕ TL;DR · THE % IS THE SCORE. THE BRAND IS THE GAME.
          </div>

          <a href="#" className="bg-[#FD5800] text-white font-bold py-3 px-6 rounded-full hover:bg-black transition-colors text-xs tracking-wider uppercase">
            GET THE REAL AUDIT →
          </a>
        </div>

      </div>
    </section>
  );
};

export default CroBrandExercise;
