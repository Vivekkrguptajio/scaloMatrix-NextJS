"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/content';

export default function Hero({ onOpenModal }) {
  const [adSpend, setAdSpend] = useState(15000);

  // Dynamic calculations based on spend
  const wastedSavings = Math.round(adSpend * 0.34);
  const roasBefore = 1.8;
  const roasAfter = (3.4 + (adSpend / 25000) * 0.6).toFixed(1);
  const netProfitGrowth = Math.round(wastedSavings * 2.6);

  return (
    <section id="hero" className="relative pt-24 pb-14 md:pt-32 md:pb-16 overflow-hidden bg-white text-gray-900">
      {/* Premium Minimal Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[450px] bg-[radial-gradient(ellipse_at_top,_rgba(253,88,0,0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Main Headline */}
            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[64px] font-black tracking-tight leading-[1.05] text-black font-sans">
              {heroData.headline.line1} <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066] drop-shadow-sm">
                {heroData.headline.highlight}
              </span> <br className="hidden lg:block" />
              {heroData.headline.line2}
            </h1>
            
            <p className="text-[15px] sm:text-base md:text-lg text-[#222] font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: heroData.description }} />

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onOpenModal('strategy')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold text-xs sm:text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2.5 shadow-sm"
              >
                <span>Book a Free Strategy Session</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={() => onOpenModal('audit')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                Request Free PPC Audit
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 border-t border-gray-200 mt-6">
              {heroData.metrics.map((metric, index) => (
                <div key={index}>
                  <p className="text-2xl sm:text-3xl font-black text-black">
                    {metric.prefix && <span className="text-[#FD5800]">{metric.prefix}</span>}
                    {metric.value.replace('+', '')}<span className="text-[#FD5800]">{metric.value.includes('+') ? '+' : metric.value.includes('%') ? '%' : ''}</span>
                  </p>
                  <p className="text-[10px] text-gray-700 font-bold tracking-widest uppercase mt-1">{metric.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Interactive Card / Amazon PPC Calculator */}
          <div className="lg:col-span-5 relative max-w-[420px] mx-auto lg:mr-auto lg:ml-auto w-full mt-8 lg:mt-0">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-7 shadow-sm relative overflow-hidden text-gray-900"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1 tracking-tight">
                Calculate Impact
              </h3>
              <p className="text-xs text-gray-900 mb-5 font-normal">
                Drag the slider to your current monthly Amazon PPC spend:
              </p>

              {/* Slider Input */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-end border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-gray-700 tracking-widest uppercase">Monthly Spend:</span>
                  <span className="text-black text-2xl font-black">₹{adSpend.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="relative pt-1">
                  <input
                    type="range"
                    min={3000}
                    max={50000}
                    step={1000}
                    value={adSpend}
                    onChange={(e) => setAdSpend(Number(e.target.value))}
                    className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#FD5800]"
                  />
                  <div className="flex justify-between text-[10px] text-gray-700 font-semibold mt-2">
                    <span>₹3,000</span>
                    <span>₹25,000</span>
                    <span>₹50,000+</span>
                  </div>
                </div>
              </div>

              {/* Estimated Metrics Display */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white border border-gray-200 rounded-xl p-3.5">
                  <span className="text-[9px] text-gray-700 uppercase tracking-widest block font-bold mb-1">
                    Waste Cut
                  </span>
                  <span className="text-xl font-black text-black">
                    ₹{wastedSavings.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[9px] text-gray-600 font-medium block mt-1">saved / mo</span>
                </div>

                <div className="bg-[#FD5800]/5 border border-[#FD5800]/20 rounded-xl p-3.5">
                  <span className="text-[9px] text-[#FD5800] uppercase tracking-widest block font-bold mb-1">
                    Est. Profit Boost
                  </span>
                  <span className="text-xl font-black text-[#FD5800]">
                    +₹{netProfitGrowth.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[9px] text-orange-600 font-medium block mt-1">profit / mo</span>
                </div>
              </div>
              
              {/* Visual ROAS Growth Chart Bar Comparison */}
              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-gray-700 uppercase tracking-widest">
                    <span>Before scaloMATRIX</span>
                    <span className="text-gray-900 font-bold">{roasBefore}x ROAS</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 rounded-full" style={{ width: '35%' }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-gray-900 uppercase tracking-widest">
                    <span>With scaloMATRIX</span>
                    <span className="text-[#FD5800] font-bold">{roasAfter}x ROAS</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: '0%' }}
                      animate={{ width: `${Math.min(95, (roasAfter / 5) * 100)}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-[#FD5800] rounded-full" 
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenModal('audit')}
                className="w-full py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 font-semibold text-xs sm:text-sm transition-all text-center"
              >
                Get Custom Audit Report
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

