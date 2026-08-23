"use client";
import { motion } from 'framer-motion'
import { getIkUrl } from '../utils/imagekit'

const teamMembers = [
  {
    id: "01",
    name: "KAANYA",
    role: "CO-FOUNDER & BRAND STRATEGIST",
    image: "/team/adi.png", 
    description: "She builds brands by turning audiences into communities. Her own Instagram climbed from 2K to 100K in six months, the same playbook she now runs for the brands she partners with.",
  },
  {
    id: "02",
    name: "SAMARTH",
    role: "CO-FOUNDER & D2C GROWTH STRATEGIST",
    image: "/team/shreyas.png",
    description: "7 years building and scaling D2C brands from the ground up. He sharpens positioning, storytelling, and customer experience until the message earns attention and converts.",
  },
  {
    id: "03",
    name: "NAYAN",
    role: "WEBSITE DEVELOPER",
    image: "/team/nayan.png",
    description: "Turns strategic vision into pixel-perfect digital experiences. Fast, responsive, and designed to convert visitors into loyal customers.",
  },
  {
    id: "04",
    name: "YADU",
    role: "PROJECT MANAGER",
    image: "/team/yadu.png",
    description: "The glue that holds everything together. Ensures campaigns ship on time, workflows are seamless, and quality never drops.",
  },
];

export default function TeamMembers() {
  return (
    <section id="team" className="w-full py-24 bg-white text-black font-sans overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Header Section */}
        <div className="w-full mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight leading-[1.1] uppercase">
              <span className="text-black">We don't hand over decks.</span><br/>
              <span className="text-[#FD5800]">We build Direction.</span>
            </h2>
            <div className="max-w-xl space-y-5 text-left md:text-right">
              <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
                We partner with brands beyond strategy: bringing clarity, guiding teams, and staying close enough to ensure every idea is implemented as intended.
              </p>
              <p className="text-gray-600 font-medium text-base md:text-lg leading-relaxed">
                We're not your agency. And we're not just consultants. We're your fractional CMO, helping your team turn good ideas into meaningful progress.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-16">
          {teamMembers.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] relative overflow-hidden mb-6 rounded-[24px] border border-gray-100 group-hover:border-[#FD5800]/50 transition-all duration-500 shadow-md group-hover:shadow-[0_20px_40px_rgba(253,88,0,0.15)]">
                <img 
                  src={getIkUrl(item.image)} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay for text legibility at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                {/* Name & Role Badge Overlay */}
                <div className="absolute bottom-6 left-6 pr-6">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase mb-3 drop-shadow-md">
                    {item.name}
                  </h3>
                  <div className="inline-block bg-[#FD5800] text-white text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(253,88,0,0.5)]">
                    {item.role}
                  </div>
                </div>
              </div>

              {/* Bottom Description */}
              <div className="flex flex-col">
                <div className="w-8 h-[3px] bg-[#FD5800] mb-5 group-hover:w-16 transition-all duration-300"></div>
                <p className="text-gray-600 text-sm md:text-[15px] font-medium leading-relaxed pr-4 group-hover:text-black transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

