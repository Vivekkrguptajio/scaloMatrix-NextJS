"use client";
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const services = [
  {
    id: '01',
    title: 'Brand Strategy',
    tagline: 'The foundation',
    description: 'We define your core positioning, messaging architecture, and competitive edge — so every move you make is intentional.',
    deliverables: ['Brand Audit', 'Positioning Framework', 'Messaging Pillars', 'Competitive Analysis'],
  },
  {
    id: '02',
    title: 'Visual Identity',
    tagline: 'The look & feel',
    description: 'Logos, typography, colour systems, and assets — crafted so your brand is impossible to ignore and impossible to forget.',
    deliverables: ['Logo System', 'Typography', 'Colour Palette', 'Brand Guidelines'],
  },
  {
    id: '03',
    title: 'Content & Social',
    tagline: 'The voice',
    description: 'Content strategy, social media execution, and storytelling that turns attention into trust, and trust into revenue.',
    deliverables: ['Content Strategy', 'Social Calendar', 'Copywriting', 'Video Production'],
  },
  {
    id: '04',
    title: 'UI/UX Design',
    tagline: 'The experience',
    description: 'Seamless digital products that convert — websites, apps, and funnels designed with obsessive attention to every pixel.',
    deliverables: ['Web Design', 'App Design', 'Wireframing', 'Prototyping'],
  },
  {
    id: '05',
    title: 'Campaign Design',
    tagline: 'The impact',
    description: 'High-impact campaigns — from ideation to media buying — that drive measurable results and real growth.',
    deliverables: ['Campaign Ideation', 'Media Planning', 'Performance Ads', 'Analytics'],
  },
  {
    id: '06',
    title: 'D2C Growth',
    tagline: 'The scale engine',
    description: 'CAC optimization, LTV maximization, CRO, and retention systems that turn your D2C brand into a compounding machine.',
    deliverables: ['CAC Optimization', 'CRO', 'Retention Programs', 'Tech Stack Audit'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export default function ServicesGrid() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 md:mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] uppercase">
            <span className="text-[#FD5800]">Our</span> <span className="text-gray-900">Services</span>
          </h2>
        </div>

        {/* Unified Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative bg-white rounded-[24px] p-6 md:p-7 border border-gray-200/80 hover:border-[#FD5800]/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(253,88,0,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
            >
              <div>
                {/* Top Row: Tagline Badge + ID */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    {service.tagline}
                  </span>
                  <span className="text-sm font-black tracking-widest text-gray-400 group-hover:text-[#FD5800] transition-colors">
                    /{service.id}
                  </span>
                </div>

                {/* Split Row: Left Content | Light Violet Line | Right Keywords */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch mb-6">
                  {/* Left: Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 tracking-tight group-hover:text-[#FD5800] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  {/* Middle: Thin Light Violet Divider Line */}
                  <div className="hidden sm:block w-[1px] bg-violet-200/80 self-stretch my-1 rounded-full shrink-0" />

                  {/* Right: Keywords Stacked Vertically */}
                  <div className="flex flex-col items-start sm:items-end gap-1.5 justify-center shrink-0">
                    {service.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] md:text-[11px] font-semibold text-gray-700 bg-violet-50/60 border border-violet-100/80 rounded-full px-2.5 py-1 text-left sm:text-right group-hover:border-orange-200 group-hover:bg-orange-50/60 group-hover:text-[#FD5800] transition-colors whitespace-nowrap"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA Row */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                <span className="text-xs font-bold text-gray-400 group-hover:text-gray-900 transition-colors uppercase tracking-wider">
                  Explore Service
                </span>
                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 group-hover:bg-[#FD5800] group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                  <FaArrowRight size={11} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
