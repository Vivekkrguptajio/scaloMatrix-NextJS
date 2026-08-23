"use client";
import { motion } from 'framer-motion'
import { FaArrowRight, FaPlay } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#fbf9ff] px-6 pt-32 pb-20 lg:px-12">
      {/* Subtle background gradients - Clean and Professional */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] bg-violet-200/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] bg-[#FD5800]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start pr-4 relative z-20"
        >
          {/* Clean Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-violet-100 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FD5800] animate-pulse"></span>
            <span className="text-gray-700 text-xs font-bold tracking-widest uppercase">Premier Creative Agency</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] mb-6 text-gray-900">
            Build brands <br />
            that refuse to <br />
            <span className="text-[#FD5800]">blend in.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            Strategic branding, identity design, and digital experiences engineered for growth and built to dominate the market.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-3 bg-[#FD5800] hover:bg-[#e04e00] text-white font-bold text-base py-4 px-8 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(253,88,0,0.25)] hover:shadow-[0_10px_40px_rgba(253,88,0,0.4)] hover:-translate-y-1">
              Start The Evolution
              <FaArrowRight size={14} />
            </button>
            <button className="flex items-center gap-3 bg-white hover:bg-violet-50 text-gray-900 border border-violet-200 font-bold text-base py-4 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
              <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-700">
                <FaPlay size={10} />
              </div>
              View Showreel
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-14 flex items-center gap-4 border-t border-violet-200/60 pt-8 w-full max-w-md">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-violet-200 overflow-hidden"><img src="https://i.pravatar.cc/100?img=12" alt="Client" className="w-full h-full object-cover" /></div>
              <div className="w-12 h-12 rounded-full border-2 border-white bg-violet-300 overflow-hidden"><img src="https://i.pravatar.cc/100?img=32" alt="Client" className="w-full h-full object-cover" /></div>
              <div className="w-12 h-12 rounded-full border-2 border-white bg-violet-400 overflow-hidden"><img src="https://i.pravatar.cc/100?img=42" alt="Client" className="w-full h-full object-cover" /></div>
              <div className="w-12 h-12 rounded-full border-2 border-white bg-[#FD5800] flex items-center justify-center text-white text-xs font-bold">+99</div>
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-[#FD5800] mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-600 font-medium">Trusted by 100+ global brands</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean Imagery Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[650px] w-full hidden lg:flex justify-end items-center"
        >
          {/* Main Clean Card */}
          <div className="relative w-[85%] h-[85%] bg-white rounded-[2rem] shadow-[0_20px_80px_rgba(139,92,246,0.12)] border border-violet-100 overflow-hidden flex flex-col group">
            {/* Top Bar */}
            <div className="h-14 w-full bg-violet-50/50 border-b border-violet-100 flex items-center px-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            
            {/* Content Area */}
            <div className="p-10 flex-1 flex flex-col relative overflow-hidden">
              <div className="w-20 h-20 rounded-2xl bg-violet-50 flex items-center justify-center mb-8 border border-violet-100">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-violet-400"></div>
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Brand Identity System</h3>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-sm">
                Comprehensive design systems that scale across every digital touchpoint and marketing channel.
              </p>
              
              <div className="space-y-4 mt-auto w-full">
                <div className="h-4 bg-violet-50 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-violet-200 w-3/4 rounded-full"></div>
                </div>
                <div className="h-4 bg-violet-50 rounded-full w-4/5 overflow-hidden">
                  <div className="h-full bg-violet-200 w-1/2 rounded-full"></div>
                </div>
              </div>

              {/* Decorative Circle in background of card */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border-[30px] border-violet-50 rounded-full"></div>
            </div>

            {/* Overlapping Stats Card */}
            <div className="absolute bottom-8 -left-12 bg-[#FD5800] w-56 h-56 rounded-3xl shadow-2xl p-8 flex flex-col justify-between text-white transform group-hover:scale-105 transition-transform duration-500">
              <div className="flex justify-between items-start">
                <div className="text-white/80 text-sm font-bold uppercase tracking-wider">Metrics</div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">+240%</div>
                <div className="text-base font-medium text-white/90">Revenue increase</div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
