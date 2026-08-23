"use client";
import { motion } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'Media Planning & Buying',
    description: 'Omni-channel media strategies across Google, Meta, YouTube, LinkedIn, and programmatic networks — optimized for ROAS, not vanity metrics.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5L12 12.75l3-1.5V15" />
      </svg>
    ),
    tags: ['Google Ads', 'Meta', 'Programmatic'],
  },
  {
    id: '02',
    title: 'Content Production',
    description: 'Scroll-stopping creatives, UGC, motion graphics, and studio-quality video — all built to perform in the feed and drive action.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    tags: ['Video', 'UGC', 'Motion Design'],
  },
  {
    id: '03',
    title: 'Performance Marketing',
    description: 'Full-funnel campaign architecture with conversion tracking, attribution modeling, and relentless A/B testing to compound growth.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    tags: ['CPA', 'ROAS', 'Attribution'],
  },
  {
    id: '04',
    title: 'Influencer & KOL',
    description: 'End-to-end influencer partnerships — from discovery and vetting to contract, content approval, and performance tracking.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    tags: ['KOL', 'UGC', 'Partnerships'],
  },
  {
    id: '05',
    title: 'Social Media Management',
    description: 'Platform-native strategy and daily execution across Instagram, LinkedIn, Twitter/X, and YouTube — from calendars to community management.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    tags: ['Instagram', 'LinkedIn', 'YouTube'],
  },
  {
    id: '06',
    title: 'SEO & Content Strategy',
    description: 'Technical SEO audits, high-intent keyword strategy, and long-form content that ranks — bringing you organic traffic that compounds over time.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    tags: ['Technical SEO', 'Content', 'Organic'],
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-12 md:py-16 px-6 bg-white relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(253,88,0,0.04)_0%,transparent_70%)] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]"
          >
            Services engineered{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066]">for growth.</span>
          </motion.h2>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative w-full h-full flex flex-col justify-between p-6 md:p-8 rounded-[32px] border border-[#FD5800]/20 bg-white overflow-hidden transition-all duration-500 shadow-[0_4px_10px_rgba(253,88,0,0.05)] hover:shadow-[0_20px_40px_rgba(253,88,0,0.2)] hover:border-[#FD5800]/60 hover:rounded-none hover:scale-[1.05] hover:z-50"
            >
              <div className="relative z-10">
                {/* Number */}
                <span className="absolute top-0 right-0 text-[60px] font-black text-[#FD5800]/10 leading-none select-none group-hover:text-[#FD5800]/20 transition-colors duration-500">{service.id}</span>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#FD5800]/10 border border-[#FD5800]/20 flex items-center justify-center text-[#FD5800] mb-8 shadow-sm group-hover:bg-[#FD5800] group-hover:text-white transition-colors duration-500">
                  <div className="origin-center flex items-center justify-center w-full h-full">
                    {service.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl md:text-2xl font-black text-[#FD5800] mb-3 tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-medium leading-relaxed mb-6 text-sm md:text-base group-hover:text-gray-900 transition-colors duration-500">
                  {service.description}
                </p>
              </div>
              
              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-2 pt-4 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-bold tracking-wide text-[#FD5800] bg-[#FD5800]/10 rounded-full border border-[#FD5800]/20 group-hover:bg-[#FD5800] group-hover:text-white transition-colors duration-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
