"use client";
import { useState } from 'react';

const Calculator = () => {
  const [adSpend, setAdSpend] = useState(30); // in Lakhs
  const [roas, setRoas] = useState(5);
  const [lift, setLift] = useState(20); // in percentage

  // Calculations
  const beforeRevLakhs = adSpend * roas;
  const afterRevLakhs = beforeRevLakhs * (1 + lift / 100);
  const extraRevLakhs = afterRevLakhs - beforeRevLakhs;
  const yearlyNetGainLakhs = extraRevLakhs * 12;

  // Format helpers
  const formatMoney = (lakhs) => {
    if (lakhs >= 100) {
      return `₹${(lakhs / 100).toFixed(1).replace('.0', '')}Cr`;
    }
    return `₹${lakhs.toFixed(1).replace('.0', '')}L`;
  };

  const formatExtra = (lakhs) => {
    if (lakhs >= 100) {
      return `+₹${(lakhs / 100).toFixed(1)}Cr`;
    }
    return `+₹${lakhs.toFixed(1)}L`;
  };

  return (
    <section id="math" className="w-full py-5 md:py-8 lg:py-10 font-sans bg-white">
      <div className="max-w-[1360px] mx-auto flex flex-col items-center px-4 sm:px-6 md:px-12 xl:px-16 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-4 gap-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.1] text-black lg:w-[60%]">
            Do the <span className="text-[#FD5800]">math.</span>
          </h2>
          <div className="w-full lg:w-[40%] flex lg:justify-end">
            <p className="text-gray-600 text-sm md:text-base leading-snug lg:text-right">
              Move the sliders. The only section on this site that makes you do work. The numbers move. Your decision gets easier.
            </p>
          </div>
        </div>

        {/* Calculator Card */}
        <div className="w-full bg-[#f4ebd0] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200 flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left Side: Sliders */}
          <div className="w-full lg:w-[58%] p-6 md:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-black flex flex-col justify-center gap-6">
            
            {/* Slider 1: Ad Spend */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <label className="text-xs font-mono tracking-widest text-gray-500 uppercase">Monthly Ad Spend</label>
                <span className="text-lg md:text-xl font-bold text-[#FD5800]">{formatMoney(adSpend)}</span>
              </div>
              <div className="relative pt-1 pb-5">
                <input 
                  type="range" 
                  min="5" max="200" step="5"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="custom-slider"
                />
                <div className="flex justify-between absolute bottom-0 w-full text-[10px] font-mono text-gray-400">
                  <span>₹5L</span>
                  <span>₹2CR</span>
                </div>
              </div>
            </div>

            {/* Slider 2: ROAS */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <label className="text-xs font-mono tracking-widest text-gray-500 uppercase">ROAS</label>
                <span className="text-lg md:text-xl font-bold text-[#FD5800]">{roas}x</span>
              </div>
              <div className="relative pt-1 pb-5">
                <input 
                  type="range" 
                  min="1" max="20" step="0.5"
                  value={roas}
                  onChange={(e) => setRoas(Number(e.target.value))}
                  className="custom-slider"
                />
                <div className="flex justify-between absolute bottom-0 w-full text-[10px] font-mono text-gray-400">
                  <span>1X</span>
                  <span>20X</span>
                </div>
              </div>
            </div>

            {/* Slider 3: Lift */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <label className="text-xs font-mono tracking-widest text-gray-500 uppercase">Our Promise on Lift</label>
                <span className="text-lg md:text-xl font-bold text-[#FD5800]">+{lift}%</span>
              </div>
              <div className="relative pt-1 pb-5">
                <input 
                  type="range" 
                  min="20" max="120" step="5"
                  value={lift}
                  onChange={(e) => setLift(Number(e.target.value))}
                  className="custom-slider"
                />
                <div className="flex justify-between absolute bottom-0 w-full text-[10px] font-mono text-gray-400">
                  <span>+20%</span>
                  <span>+120%</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Results */}
          <div className="w-full lg:w-[42%] bg-[#f6f5ef] flex flex-col justify-between">
            <div className="p-6 md:p-8 lg:p-10 flex-1 flex flex-col justify-between gap-4">
              
              {/* Extra Revenue */}
              <div>
                <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase flex items-center gap-2 mb-1">
                  <span className="text-gray-400">↘</span> EXTRA REVENUE / MONTH
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FD5800] tracking-tight">
                  {formatExtra(extraRevLakhs)}
                </div>
              </div>

              {/* Before Revenue */}
              <div className="border-b border-gray-300 pb-3">
                <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-1">
                  BEFORE · REV / MONTH
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-black">
                  {formatMoney(beforeRevLakhs)}
                </div>
              </div>

              {/* After Revenue */}
              <div className="border-b border-gray-300 pb-3">
                <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-1">
                  AFTER · REV / MONTH
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-[#10b981]">
                  {formatMoney(afterRevLakhs)}
                </div>
              </div>

              {/* 12-Month Net Gain */}
              <div>
                <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase mb-1">
                  12-MONTH NET GAIN
                </div>
                <div className="text-2xl md:text-3xl font-semibold text-[#10b981]">
                  {formatMoney(yearlyNetGainLakhs)}
                </div>
              </div>

            </div>

            {/* Verdict Banner */}
            <div className="bg-[#FD5800] border-t border-[#FD5800] p-4 md:p-5 mt-auto rounded-b-lg">
              <p className="text-xs md:text-sm font-mono tracking-wide text-white font-semibold leading-snug">
                Verdict → Payback under a quarter. This is what we exist for. Book the call.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;
