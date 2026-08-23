"use client";
import React from 'react';

export default function AboutPrachi({ onOpenModal }) {
  return (
    <section id="about" className="py-24 bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Bold Editorial Statement */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-gray-900 text-xs font-bold tracking-[0.2em] uppercase rounded border border-gray-200">
              The Agency Difference
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[1.1]">
              We build <span className="font-semibold text-[#FD5800]">Amazon engines</span> that actually scale.
            </h2>
            
            <div className="w-20 h-1 bg-[#FD5800]" />
            
            <p className="text-xl text-gray-900 font-normal leading-relaxed">
              No guesswork. No vanity metrics. Just <span className="text-[#FD5800] font-semibold">rigorous data analysis</span>, strategic bid optimization, and an obsession with lowering your ACoS while driving top-line revenue.
            </p>
          </div>

          {/* Right Column: Details & Metrics */}
          <div className="bg-gray-50/50 rounded-[2rem] p-8 sm:p-12 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 tracking-tight">
              scalo<span className="font-black text-black">MATRIX</span>
            </h3>
            
            <p className="text-gray-900 leading-relaxed mb-10 font-normal">
              For over a decade, we have been the silent growth partners behind 7-figure Amazon brands across the US, UK, and India. Our senior team doesn't just manage ads; we architect full-funnel scaling strategies that dominate market share.
            </p>

            {/* Clean Metrics Grid */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">$10M+</div>
                <div className="text-xs font-bold text-gray-700 uppercase tracking-widest">Ad Spend Managed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-xs font-bold text-gray-700 uppercase tracking-widest">Brands Scaled</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">10<span className="text-[#FD5800] text-3xl">yr</span></div>
                <div className="text-xs font-bold text-gray-700 uppercase tracking-widest">Platform Expertise</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-xs font-bold text-gray-700 uppercase tracking-widest">Client Retention</div>
              </div>
            </div>

            <button
              onClick={() => onOpenModal('strategy')}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-[#FD5800] transition-colors duration-300 w-full sm:w-auto justify-center"
            >
              <span>Work With Our Senior Team</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

