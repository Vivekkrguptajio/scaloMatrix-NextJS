"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const clients = [
  {
    id: 1,
    name: 'Albee Razak',
    market: 'US',
    marketLabel: 'Amazon US',
    metric: '3.4x',
    metricLabel: 'ROAS',
    highlight: '$140K+ Monthly Revenue',
    quote: 'The scaloMATRIX team completely transformed our ad structure. Our TACOS dropped to 11% while top line doubled.',
    tags: ['Sponsored Products', 'Keyword Isolation', 'Bid Automation'],
    accent: 'from-[#FD5800] to-orange-500'
  },
  {
    id: 2,
    name: 'Shantanu',
    market: 'IN',
    marketLabel: 'Amazon India',
    metric: '42%',
    metricLabel: 'Waste Cut',
    highlight: '#1 Best Seller Rank',
    quote: 'We were bleeding ad budget on non-converting search terms. Within 45 days, scaloMATRIX eliminated our wasted ad spend.',
    tags: ['ACoS Optimization', 'Organic Rank Push', 'Negative Targeting'],
    accent: 'from-emerald-500 to-teal-500'
  },
  {
    id: 3,
    name: 'Halsey',
    market: 'US & UK',
    marketLabel: 'Amazon US & UK',
    metric: '240%',
    metricLabel: 'Growth',
    highlight: 'Scaled 7-Figure Portfolio',
    quote: 'The level of reporting and transparent communication is unmatched. You are dealing with true Amazon ad scientists.',
    tags: ['Global Expansion', 'DSP Advertising', 'Video Ads'],
    accent: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    name: 'Saurabh Pandey',
    market: 'IN & US',
    marketLabel: 'Global Market',
    metric: '38%→14%',
    metricLabel: 'ACoS Drop',
    highlight: '3.8x Net Profit Boost',
    quote: 'Working 1-on-1 with scaloMATRIX gave us full clarity over our campaign analytics and keyword funnel.',
    tags: ['Coaching & Strategy', 'Full-Funnel Ads', 'Listing CRO'],
    accent: 'from-purple-500 to-pink-500'
  }
];

export default function ClientSuccess({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredClients = clients.filter(c => {
    if (activeFilter === 'ALL') return true;
    return c.market.includes(activeFilter);
  });

  return (
    <section id="case-studies" className="py-14 md:py-16 bg-white text-gray-900 relative overflow-hidden border-t border-gray-100">
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-gray-900 text-xs font-bold tracking-[0.2em] uppercase rounded border border-gray-200">
              Proven Performance
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-black">
              Impact & <span className="font-semibold text-[#FD5800]">Outcomes.</span>
            </h2>
            <p className="text-gray-900 text-base max-w-xl font-normal leading-relaxed">
              We engineer scalable growth architectures for ambitious Amazon brands. No fluff, just <span className="text-[#FD5800] font-semibold">data-driven profitability</span>.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'ALL', label: 'All Regions' },
              { id: 'US', label: 'US Market' },
              { id: 'UK', label: 'UK Market' },
              { id: 'IN', label: 'India Market' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100 hover:text-black border border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Client Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          <AnimatePresence>
            {filteredClients.map((client) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-7 hover:border-gray-300 transition-all duration-500 overflow-hidden shadow-2xs hover:shadow-md"
              >
                {/* Hover Glow */}
                <div className={`absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br ${client.accent} opacity-0 group-hover:opacity-5 blur-[80px] transition-opacity duration-700 pointer-events-none`} />

                <div className="flex flex-col h-full justify-between relative z-10">
                  
                  {/* Top Section */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center font-bold text-base text-gray-900 group-hover:bg-gray-200 transition-colors">
                        {client.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 tracking-tight">{client.name}</h3>
                        <p className="text-[10px] text-gray-700 font-bold uppercase tracking-widest">{client.marketLabel}</p>
                      </div>
                    </div>
                  </div>

                  {/* Main Metric */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2.5 mb-1.5">
                      <span className={`text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${client.accent} tracking-tighter`}>
                        {client.metric}
                      </span>
                      <span className="text-gray-700 font-bold uppercase tracking-widest text-xs">{client.metricLabel}</span>
                    </div>
                    <span className="inline-flex px-2.5 py-1 bg-gray-100 border border-gray-200 rounded font-semibold text-xs text-gray-900">
                      {client.highlight}
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-2 border-gray-300 pl-4 mb-6">
                    <p className="text-gray-900 text-sm leading-relaxed font-normal">
                      "{client.quote}"
                    </p>
                  </blockquote>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {client.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white text-gray-900 border border-gray-200 shadow-2xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenModal('strategy')}
            className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold text-xs sm:text-sm hover:bg-gray-800 transition-all flex items-center gap-2.5 shadow-sm"
          >
            <span>View Detailed Case Studies</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>

      </div>
    </section>
  );
}

