"use client";
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white px-6">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#FD5800] text-sm font-bold tracking-wide mb-6 uppercase"
        >
          B2B Lead Generation
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8"
        >
          High-converting <br/>
          <span className="text-[#FD5800]">inbound funnels.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Build highly converting systems to capture and nurture quality inbound leads at scale.
        </motion.p>
      </div>
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl mix-blend-multiply opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl mix-blend-multiply opacity-50 pointer-events-none"></div>
    </section>
  )
}
