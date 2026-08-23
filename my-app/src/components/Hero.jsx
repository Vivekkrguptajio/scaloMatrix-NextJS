"use client";
import { motion } from 'framer-motion'
import Marquee from './Marquee'

export default function Hero({ startAnimation }) {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-24 pb-16 md:pb-24 px-6 md:px-16 lg:px-24 bg-white relative"
    >
      {/* (Orange glow removed) */}

      <div className="max-w-[1400px] mx-auto w-full relative z-10 mt-16 md:mt-24">
        <motion.h1 
          className="text-[28px] sm:text-4xl md:text-5xl lg:text-[74px] font-black font-sans text-black leading-[1.15] md:leading-[0.95] tracking-tight mb-6 md:mb-8 text-center md:text-left break-words"
          initial={{ opacity: 0, y: 20 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your Creative, Media & Technology <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066] drop-shadow-sm">Transformation Growth Partner</span>
        </motion.h1>

        <motion.p 
          className="text-[15px] sm:text-base md:text-lg text-[#222] font-medium max-w-[800px] leading-relaxed mb-8 md:mb-10 text-center md:text-left mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We're a team of 1200+ Specialists delivering award-winning work for 350+ brands worldwide, 11 years and counting!
        </motion.p>

        <motion.div 
          className="flex flex-col gap-4 lg:gap-5 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Main Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-3 sm:gap-4">
            <a 
              href="#contact" 
              className="group flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-full font-bold text-[13px] sm:text-[14px] bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors tracking-wide"
            >
              Book a free growth audit
              <svg className="w-4 h-4 sm:w-[16px] sm:h-[16px] transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a 
              href="#work" 
              className="flex w-full sm:w-auto items-center justify-center px-6 py-3 sm:py-2.5 rounded-full font-bold text-[13px] sm:text-[14px] text-gray-700 border border-black/10 hover:border-black/20 hover:bg-black/5 transition-all duration-300"
            >
              Explore what we do
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mt-2">
            <div className="text-[13px] sm:text-[14px] font-semibold text-gray-600">
              <span className="text-[#FD5800]">Brand</span> creates demand
            </div>
            <div className="text-[13px] sm:text-[14px] font-semibold text-gray-600">
              <span className="text-[#FD5800]">Commerce</span> converts it
            </div>
            <div className="text-[13px] sm:text-[14px] font-semibold text-gray-600">
              <span className="text-[#FD5800]">Growth</span> scales it
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Marquee at the bottom of the hero section */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full z-30"
        initial={{ opacity: 0, y: 50 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <Marquee />
      </motion.div>
    </section>
  )
}
