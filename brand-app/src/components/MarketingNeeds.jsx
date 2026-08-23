"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaCheck } from 'react-icons/fa'

const tabData = [
  {
    id: '01',
    title: 'BRAND &\nCOMMUNICATION',
    heading: 'BRAND & COMMUNICATION STRATEGY',
    subtitle: 'A comprehensive strategic foundation for brands.',
    bullets: [
      'Category and competitive landscape analysis',
      'Brand audit and research',
      'Brand identity strategy',
      'Brand positioning strategy',
      'Brand community strategy',
      'Brand voice and tone',
      'Tagline and key communication development'
    ]
  },
  {
    id: '02',
    title: 'CONTENT',
    heading: 'CONTENT STRATEGY & CREATION',
    subtitle: 'Engaging content that connects and converts.',
    bullets: [
      'Content audits and gap analysis',
      'Content planning and calendaring',
      'Social media strategy and execution',
      'SEO and organic growth strategy',
      'Video and multimedia production',
      'Copywriting and storytelling'
    ]
  },
  {
    id: '03',
    title: 'CAMPAIGN',
    heading: 'CAMPAIGN DESIGN & EXECUTION',
    subtitle: 'High-impact campaigns that drive measurable results.',
    bullets: [
      'Campaign ideation and conceptualization',
      'Go-to-market strategy',
      'Media planning and buying',
      'Performance marketing and paid ads',
      'Influencer and partnership marketing',
      'Campaign analytics and optimization'
    ]
  },
  {
    id: '04',
    title: 'D2C GROWTH\nCONSULTING',
    heading: 'D2C GROWTH CONSULTING',
    subtitle: 'Scaling your direct-to-consumer business sustainably.',
    bullets: [
      'Customer acquisition cost (CAC) optimization',
      'Lifetime value (LTV) maximization',
      'Conversion rate optimization (CRO)',
      'Retention and loyalty programs',
      'Tech stack and automation consulting',
      'Subscription model strategy'
    ]
  }
];

export default function MarketingNeeds() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#FAFAFA] py-24 px-6 lg:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight uppercase text-[#0A0A0A]">
            <span className="text-[#0A0A0A]">ALL YOUR</span> <span className="bg-[#FD5800] text-white px-4 py-1.5 inline-block -rotate-2 transform shadow-[0_10px_20px_rgba(253,88,0,0.3)]">MARKETING</span><br/><span className="text-[#0A0A0A]">NEEDS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Tabs */}
          <div className="flex flex-col space-y-4">
            {tabData.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left rounded-[20px] p-6 flex items-center justify-between transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#0A0A0A] text-white shadow-xl shadow-black/20 scale-[1.02]' 
                      : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className={`text-2xl font-black ${isActive ? 'text-[#FD5800]' : 'text-gray-400'}`}>
                      {tab.id}
                    </span>
                    <span className={`text-lg font-black tracking-wide whitespace-pre-line leading-tight ${isActive ? 'text-white' : 'text-gray-700'}`}>
                      {tab.title}
                    </span>
                  </div>
                  {isActive && (
                    <div className="w-8 h-8 rounded-full bg-[#FD5800] text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_#FD5800]">
                      <FaArrowRight size={12} />
                    </div>
                  )}
                </button>
              )
            })}

            <div className="mt-8 pl-4">
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium max-w-[280px]">
                We design the strategy and the systems. Your team runs day-to-day. We make sure it actually takes your brand from zero to one.
              </p>
              <button className="flex items-center gap-3 bg-[#FD5800] hover:bg-[#0A0A0A] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(253,88,0,0.3)]">
                Book a discovery call
                <div className="bg-white text-[#FD5800] rounded-full p-1.5 flex items-center justify-center">
                  <FaArrowRight size={10} />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Card Content */}
          <div className="bg-white rounded-[30px] shadow-2xl shadow-violet-500/5 overflow-hidden border border-violet-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Header (Black) */}
                <div className="bg-[#0A0A0A] text-white p-12 relative overflow-hidden min-h-[260px] flex flex-col justify-center">
                  <span className="absolute top-8 right-10 text-[6rem] font-black opacity-[0.03] leading-none text-white">
                    {tabData[activeTab].id}
                  </span>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-500 rounded-full opacity-20 blur-[50px] pointer-events-none"></div>
                  
                  <h3 className="text-4xl md:text-5xl font-black mb-4 uppercase max-w-[80%] leading-[1.1] relative z-10">
                    {tabData[activeTab].heading}
                  </h3>
                  <p className="text-gray-400 text-lg relative z-10">
                    {tabData[activeTab].subtitle}
                  </p>
                </div>

                {/* Card Body (Light) */}
                <div className="p-10 md:p-12 bg-white">
                  <div className="flex items-center gap-4 mb-8">
                    <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#FD5800] uppercase">
                      What you get
                    </h4>
                    <div className="h-[1px] flex-grow bg-gray-100"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                    {tabData[activeTab].bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="w-5 h-5 rounded-full bg-[#FD5800]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#FD5800] transition-colors duration-300">
                          <FaCheck size={10} className="text-[#FD5800] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-gray-700 text-sm font-medium leading-relaxed group-hover:text-black transition-colors duration-300">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}

