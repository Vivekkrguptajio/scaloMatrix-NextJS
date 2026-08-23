"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'

const videos = [
  {
    id: 1,
    title: "Imagine opening a...",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "What if Vineeta Singh's",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Kusha Kapila",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "What if McDonald's started",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Dhurandhar was already a hit",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop",
  }
]

export default function Testimonials() {
  return (
    <section className="w-full bg-[#18062B] py-24 overflow-hidden relative border-t border-violet-900/40">
      {/* Background Violet Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-black text-white tracking-tighter uppercase leading-none drop-shadow-lg"
          >
             <span className="text-white">CREATIVITY THAT</span> <span className="text-[#FD5800]">HITS.</span>
          </motion.h2>
        </div>

        {/* CSS for hiding scrollbar is injected inline via regular style object to avoid styled-jsx issues in pure React setups */}
        <div 
          className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory px-4 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative shrink-0 w-[280px] h-[480px] md:w-[320px] md:h-[560px] rounded-[30px] overflow-hidden snap-center group cursor-pointer border border-white/10 ${index % 2 === 0 ? 'hover:border-[#FD5800]/60 hover:shadow-[0_20px_40px_rgba(253,88,0,0.2)]' : 'hover:border-violet-500/60 hover:shadow-[0_20px_40px_rgba(139,92,246,0.2)]'} transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
            >
              <img 
                src={video.image} 
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/90"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-white font-serif italic text-lg md:text-xl font-bold mb-12 drop-shadow-md absolute top-20 px-6 leading-snug group-hover:text-[#FD5800] transition-colors">
                  {video.title}
                </p>
                
                <div className="w-16 h-16 rounded-full bg-[#FD5800] backdrop-blur-sm flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(253,88,0,0.5)]">
                  <FaPlay size={20} className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  )
}

