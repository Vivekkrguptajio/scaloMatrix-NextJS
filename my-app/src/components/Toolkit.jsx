"use client";
import { motion } from 'framer-motion'
import { useState } from 'react'

const industries = [
  {
    num: '01',
    name: 'Fashion Brands',
    description: 'Crafting immersive digital experiences and high-converting storefronts that reflect your unique aesthetic and style.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    hoverColor: 'bg-pink-600',
  },
  {
    num: '02',
    name: 'Beauty',
    description: 'Designing elegant, high-performance platforms that build trust and drive conversions for premium beauty products.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    hoverColor: 'bg-rose-600',
  },
  {
    num: '03',
    name: 'Lifestyle',
    description: 'Creating lifestyle-focused digital touchpoints that connect with audiences on a deeper, more personal level.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    hoverColor: 'bg-[#FD5800]',
  },
  {
    num: '04',
    name: 'Premium D2C',
    description: 'Scaling direct-to-consumer brands with data-driven design, seamless user journeys, and robust technical foundations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    hoverColor: 'bg-blue-600',
  }
];

export default function Toolkit() {
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden border-t border-gray-100 font-sans relative">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(253,88,0,0.02)_0%,transparent_70%)] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <motion.div 
        className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black tracking-tight text-gray-900 leading-[1.1]">
            Who We <span className="text-[#FD5800]">Work With</span>
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-base md:text-lg text-gray-500 font-medium">
            Partnering with ambitious brands across specialized industries to drive growth, innovation, and uncompromising digital excellence.
          </p>
        </div>
      </motion.div>

      {/* Wireframe Grid Layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-200">
          
          {industries.map((item, index) => {
            const isActive = activeCardId === index;
            return (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col h-[300px] md:h-[400px] border-r border-b border-gray-200 bg-white overflow-hidden cursor-pointer"
            >
              
              {/* Color Flood Fill Animation */}
              <div className={`absolute bottom-0 left-0 w-full transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0 ${item.hoverColor} ${
                isActive ? 'h-full' : 'h-0 md:group-hover:h-full'
              }`}></div>

              {/* Massive Background Number */}
              <div className={`absolute -bottom-8 -right-4 text-[180px] leading-none font-black transition-colors duration-500 z-0 pointer-events-none select-none ${
                isActive ? 'text-white/10' : 'text-gray-100 md:group-hover:text-white/10'
              }`}>
                {item.num}
              </div>

              {/* Viewport Tracker & Content */}
              <motion.div 
                onViewportEnter={() => {
                  if (window.innerWidth < 768) {
                    setActiveCardId(index);
                  }
                }}
                onViewportLeave={() => {
                  if (window.innerWidth < 768 && activeCardId === index) {
                    setActiveCardId(null);
                  }
                }}
                viewport={{ margin: "-30% 0px -30% 0px", amount: "some" }}
                className="relative z-10 flex flex-col h-full p-6 md:p-10"
              >
                
                {/* Icon */}
                <div className={`w-14 h-14 mb-8 transition-all duration-500 transform ease-out ${
                  isActive ? 'text-white scale-110 -rotate-3' : 'text-gray-900 md:group-hover:text-white md:group-hover:scale-110 md:group-hover:-rotate-3'
                }`}>
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className={`font-extrabold text-2xl lg:text-[28px] mb-4 tracking-tight transition-colors duration-500 leading-tight ${
                  isActive ? 'text-white' : 'text-gray-900 md:group-hover:text-white'
                }`}>
                  {item.name}
                </h3>
                
                {/* Description */}
                <p className={`font-medium leading-relaxed text-[15px] transition-colors duration-500 flex-grow ${
                  isActive ? 'text-white/90' : 'text-gray-500 md:group-hover:text-white/90'
                }`}>
                  {item.description}
                </p>

                {/* Arrow / CTA */}
                <div className={`mt-auto pt-6 flex items-center gap-3 text-sm font-bold transition-colors duration-500 ${
                  isActive ? 'text-white' : 'text-gray-900 md:group-hover:text-white'
                }`}>
                  <span className="uppercase tracking-widest text-[11px]">Explore</span>
                  <div className={`h-[1px] transition-all duration-500 transform origin-left ${
                    isActive ? 'w-12 bg-white scale-x-150' : 'w-8 bg-gray-900 md:group-hover:bg-white md:group-hover:scale-x-150'
                  }`}></div>
                  <svg className={`w-4 h-4 transform transition-transform duration-500 ${
                    isActive ? 'translate-x-2' : 'md:group-hover:translate-x-2'
                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

              </motion.div>
            </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  )
}
