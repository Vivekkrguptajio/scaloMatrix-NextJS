"use client";
import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    num: '01',
    category: 'team',
    metric: '15+ Experts',
    desc: 'Specialized account strategists, ad analysts & reporting experts for fast-growing brands.',
    btnText: 'Explore Team',
    bg: 'bg-white',
    badge: 'Unified Support'
  },
  {
    num: '02',
    category: 'global',
    metric: '3 Markets',
    desc: 'Proven ad funnels and scaling strategies across US, UK & India marketplaces.',
    btnText: 'View Regions',
    bg: 'bg-white',
    badge: 'Cross-Border'
  },
  {
    num: '03',
    category: 'data',
    metric: '0% Guesswork',
    desc: 'Precision bid optimization, search term waste elimination, and transparent weekly ROI.',
    btnText: 'See Analytics',
    bg: 'bg-white',
    badge: 'ROAS Focus'
  },
  {
    num: '04',
    category: 'mastery',
    metric: '10+ Years',
    desc: 'Led by senior Amazon advertising specialists trusted by over 100+ global sellers.',
    btnText: 'Book Strategy',
    bg: 'bg-white',
    badge: 'Senior Led'
  }
];

export default function WhyChoosePrachi({ onOpenModal }) {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-900 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-gray-900 text-xs font-bold tracking-[0.2em] uppercase rounded border border-gray-200">
            Agency Difference
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.1]">
            Why Amazon Sellers Choose <br />
            <span className="font-semibold">scalo<span className="text-[#FD5800]">MATRIX</span></span>
          </h2>

          <p className="text-lg text-gray-900 font-normal max-w-2xl mx-auto leading-relaxed">
            We aren't freelancers or outsourced consultants. We're a specialized Amazon advertising engine built strictly for <span className="text-[#FD5800] font-semibold">scale and profitability</span>.
          </p>
        </div>

        {/* 4 Cards: White bg, Orange border, Black text, Orange headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cardData.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[32px] p-8 sm:p-9 text-gray-900 relative overflow-hidden shadow-lg hover:shadow-2xl border-2 border-[#FD5800] flex flex-col justify-between min-h-[460px] group transition-all duration-300"
            >
              {/* Rotating Fan / Propeller Geometric Watermark Element */}
              <div className="absolute -top-12 -right-12 pointer-events-none select-none opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-64 h-64 text-[#FD5800] animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100" fill="currentColor">
                  {/* Rotating Fan Blades */}
                  <path d="M50 50 L50 5 L62 25 Z" />
                  <path d="M50 50 L95 50 L75 62 Z" />
                  <path d="M50 50 L50 95 L38 75 Z" />
                  <path d="M50 50 L5 50 L25 38 Z" />
                  <path d="M50 50 L82 18 L70 38 Z" />
                  <path d="M50 50 L82 82 L62 70 Z" />
                  <path d="M50 50 L18 82 L30 62 Z" />
                  <path d="M50 50 L18 18 L38 30 Z" />
                  <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="6" />
                </svg>
              </div>

              {/* Bottom Secondary Rotating Fan Accent */}
              <div className="absolute -bottom-16 -left-16 pointer-events-none select-none opacity-10 group-hover:opacity-15 transition-opacity">
                <svg className="w-56 h-56 text-[#FD5800] animate-[spin_25s_linear_infinite_reverse]" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                </svg>
              </div>

              {/* Card Content Top */}
              <div className="relative z-10">
                {/* Category Header */}
                <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-[#FD5800] lowercase mb-6">
                  {item.category}
                </h3>

                {/* Big Metric Highlight */}
                <div className="space-y-1 mb-5">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FD5800] bg-[#FD5800]/10 px-3.5 py-1.5 rounded-full border border-[#FD5800]/25">
                    {item.badge}
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight pt-1">
                    {item.metric}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-900 text-sm font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Action Button */}
              <div className="relative z-10 pt-6 mt-4">
                <button
                  onClick={() => onOpenModal('strategy')}
                  className="w-full py-4 px-5 bg-gray-900 hover:bg-[#FD5800] text-white rounded-2xl font-black text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 hover:shadow-xl group/btn"
                >
                  <span>{item.btnText}</span>
                  <svg className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Action Banner Strip - Premium Redesign */}
        <div className="mt-20 bg-gray-50 border border-gray-200 rounded-[2rem] p-10 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FD5800]/5 blur-[80px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-3xl font-black text-black tracking-tight mb-2">
              Ready to stop <span className="font-semibold text-[#FD5800]">burning</span> ad budget?
            </h4>
            <p className="text-gray-900 text-base font-normal">
              Get a comprehensive account audit & customized growth plan within 24 hours.
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenModal('audit')}
            className="relative z-10 whitespace-nowrap px-8 py-4 rounded-xl bg-[#FD5800] hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-md"
          >
            Claim Free Account Audit
          </motion.button>
        </div>

      </div>
    </section>
  );
}

