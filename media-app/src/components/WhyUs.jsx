"use client";
import { motion } from 'framer-motion'

const whyItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
    ),
    title: 'Speed to Market',
    stat: '72h',
    statLabel: 'Campaign Launch',
    description: 'While others are in "discovery," we\'re already running ads. Our process gets campaigns live faster.',
    colSpan: 'md:col-span-2',
    bg: 'bg-blue-50',
    borderColor: 'border-blue-100 hover:border-blue-300',
    iconText: 'text-blue-600',
    iconBg: 'bg-blue-100/50 border-blue-200',
    statColor: 'text-blue-600',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
    ),
    title: 'Data-First',
    stat: '100%',
    statLabel: 'Data Backed',
    description: 'Every rupee is tracked. We don\'t do "brand awareness" without hard metrics.',
    colSpan: 'md:col-span-1',
    bg: 'bg-pink-50',
    borderColor: 'border-pink-100 hover:border-pink-300',
    iconText: 'text-pink-600',
    iconBg: 'bg-pink-100/50 border-pink-200',
    statColor: 'text-pink-600',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
    ),
    title: 'No Juniors',
    stat: '8yr+',
    statLabel: 'Avg Experience',
    description: 'Handled by senior strategists who\'ve scaled 100+ brands. No training on your budget.',
    colSpan: 'md:col-span-1',
    bg: 'bg-emerald-50',
    borderColor: 'border-emerald-100 hover:border-emerald-300',
    iconText: 'text-emerald-600',
    iconBg: 'bg-emerald-100/50 border-emerald-200',
    statColor: 'text-emerald-600',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
    ),
    title: 'Growth Guarantee',
    stat: '20%+',
    statLabel: 'Performance Lift',
    description: 'If we don\'t beat your current performance by 20%, we keep iterating at no extra cost. That\'s our promise.',
    colSpan: 'md:col-span-2',
    bg: 'bg-orange-50',
    borderColor: 'border-orange-100 hover:border-orange-300',
    iconText: 'text-orange-600',
    iconBg: 'bg-orange-100/50 border-orange-200',
    statColor: 'text-orange-600',
  },
]

export default function WhyUs() {
  return (
    <section id="cro" className="relative py-12 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 relative overflow-hidden">
        
        {/* Header */}
        <div className="max-w-2xl mb-8 relative z-10 text-center mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tighter leading-[1.1]"
          >
            Not another <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066] italic pr-4">agency pitch.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-gray-600 text-sm md:text-base max-w-lg mx-auto font-medium"
          >
            We don't do fluff. We build systems engineered for scale, backed by hard data and a relentless focus on ROAS.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 relative z-10">
          {whyItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-5 md:p-6 rounded-2xl ${item.bg} border ${item.borderColor} overflow-hidden transition-all duration-300 hover:shadow-sm hover:-translate-y-1 ${item.colSpan}`}
            >
              <div className={`flex flex-col ${item.colSpan === 'md:col-span-2' ? 'md:flex-row md:items-end justify-between' : 'justify-between'} h-full gap-4 relative z-10`}>
                
                {/* Content */}
                <div className="flex-1 max-w-sm">
                  <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center ${item.iconText} mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm border`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[13px] md:text-sm font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Stat */}
                <div className={`${item.colSpan === 'md:col-span-2' ? 'text-left md:text-right' : 'text-left mt-auto pt-4'}`}>
                  <div className={`text-3xl md:text-4xl lg:text-5xl font-black ${item.statColor} tracking-tighter leading-none`}>
                    {item.stat}
                  </div>
                  <div className={`text-gray-500 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase mt-2`}>
                    {item.statLabel}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

