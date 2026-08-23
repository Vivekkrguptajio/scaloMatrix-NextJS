"use client";
import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 'audit',
    lane: 'ORANGE LANE',
    titleLine1: 'PPC AUDIT &',
    titleLine2: 'STRATEGY',
    desc: 'Identify gaps, wasted spend, and low-ROI areas with a professional 90-point review of your ad account.',
    features: [
      'Search term waste & negative keyword audit',
      'ACoS & TACOS benchmark analysis',
      'Listing conversion & placement review',
      'Custom 90-day action roadmap'
    ],
    cta: 'Book PPC Audit',
    theme: {
      cardBg: 'bg-white',
      border: 'border-[#FD5800]/20',
      hoverBorder: 'hover:border-[#FD5800]/60',
      titleColor: 'text-gray-900',
      glow: 'bg-[#FD5800]',
      iconBg: 'bg-[#FD5800]/10 text-[#FD5800]',
      checkBg: 'text-[#FD5800]',
      btnBg: 'bg-transparent border border-[#FD5800] text-[#FD5800] hover:bg-[#FD5800] hover:text-white',
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 'management',
    lane: 'BLUE LANE',
    tag: 'MOST POPULAR',
    titleLine1: 'FULL-FUNNEL',
    titleLine2: 'MANAGEMENT',
    desc: 'End-to-end setup, optimization, bid strategies, and reporting—managed directly by senior agency strategists.',
    features: [
      'Sponsored Products, Brands & Display Ads',
      'Daily bid adjustments & dayparting',
      'Product launch & keyword ranking pushes',
      'Weekly transparent video reports'
    ],
    cta: 'Explore Management',
    featured: true,
    theme: {
      cardBg: 'bg-white',
      border: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-500/80',
      titleColor: 'text-gray-900',
      glow: 'bg-blue-500',
      iconBg: 'bg-blue-500/10 text-blue-500',
      checkBg: 'text-blue-500',
      btnBg: 'bg-blue-600 border border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700',
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'coaching',
    lane: 'GREEN LANE',
    titleLine1: '1-ON-1',
    titleLine2: 'MENTORSHIP',
    desc: 'Ideal for DIY sellers. Learn to run, analyze, and scale campaigns through personalized private sessions.',
    features: [
      'Direct 1-on-1 private mentorship',
      'Step-by-step account teardowns',
      'Bid optimization templates & SOPs',
      'Private Q&A support line'
    ],
    cta: 'Apply for Coaching',
    theme: {
      cardBg: 'bg-white',
      border: 'border-emerald-500/20',
      hoverBorder: 'hover:border-emerald-500/60',
      titleColor: 'text-gray-900',
      glow: 'bg-emerald-500',
      iconBg: 'bg-emerald-500/10 text-emerald-500',
      checkBg: 'text-emerald-500',
      btnBg: 'bg-transparent border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white',
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

export default function ServicesSection({ onOpenModal }) {
  return (
    <section id="services" className="py-20 md:py-28 bg-white text-gray-900 relative overflow-hidden font-sans border-t border-gray-100">
      
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(253,88,0,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-900 font-semibold text-xs uppercase tracking-widest">
            STRUGGLING TO SCALE ON AMAZON?
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight uppercase leading-tight">
            Choose Your <span className="font-bold text-[#FD5800]">Growth Lane</span>
          </h2>

          <p className="text-gray-900 text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you need hands-off full management, a diagnostic audit, or <span className="text-[#FD5800] font-semibold">1-on-1 coaching</span> — choose the premium strategy tailored for your brand.
          </p>
        </div>

        {/* 3 Premium Growth Lane Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {servicesData.map((srv, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={srv.id}
              className={`relative rounded-3xl ${srv.theme.cardBg} border ${srv.theme.border} ${srv.theme.hoverBorder} p-8 flex flex-col justify-between transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] shadow-sm`}
            >
              {/* Background Glow Effect on Hover */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 ${srv.theme.glow} opacity-0 group-hover:opacity-[0.03] blur-[80px] transition-opacity duration-700 pointer-events-none`} />

              {/* Featured Top Ribbon Badge */}
              {srv.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-1.5 rounded-full shadow-lg border border-blue-400/30 z-20 whitespace-nowrap">
                  {srv.tag}
                </div>
              )}

              <div className="relative z-10">
                {/* Header Icon & Title */}
                <div className="flex flex-col gap-5 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${srv.theme.iconBg} flex items-center justify-center flex-shrink-0 transition-transform`}>
                    {srv.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-gray-700 mb-2 block">{srv.lane}</span>
                    <h3 className={`text-2xl font-semibold leading-tight tracking-tight uppercase ${srv.theme.titleColor}`}>
                      {srv.titleLine1} <br />
                      {srv.titleLine2}
                    </h3>
                  </div>
                </div>

                {/* Subtitle Description */}
                <p className="text-gray-900 text-sm leading-relaxed mb-8 font-normal min-h-[60px]">
                  {srv.desc}
                </p>

                {/* Divider Line */}
                <div className="w-full h-px bg-gray-200 mb-8" />

                {/* Features Checkmark List */}
                <div className="space-y-4 mb-10">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-4 text-sm text-gray-900 font-normal">
                      <div className={`mt-0.5 ${srv.theme.checkBg}`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA Button */}
              <div className="relative z-10 mt-auto pt-4">
                <button
                  onClick={() => onOpenModal(srv.id === 'audit' ? 'audit' : 'strategy')}
                  className={`w-full py-4 rounded-xl font-semibold text-sm uppercase tracking-wide transition-all duration-300 text-center flex items-center justify-center gap-2 ${srv.theme.btnBg}`}
                >
                  <span>{srv.cta}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

