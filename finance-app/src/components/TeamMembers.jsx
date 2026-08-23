"use client";
import { motion } from 'framer-motion'

const teamMembers = [
  {
    id: "01",
    name: "Adi",
    role: "Founder & Lead Strategist",
    image: "/team/adi.png",
    tagline: "CRO obsessed. Revenue driven.",
  },
  {
    id: "02",
    name: "Shreyas",
    role: "Design & Branding",
    image: "/team/shreyas.png",
    tagline: "Pixels with purpose.",
  },
  {
    id: "03",
    name: "Nayan",
    role: "Website Developer",
    image: "/team/nayan.png",
    tagline: "Code that converts.",
  },
  {
    id: "04",
    name: "Yadu",
    role: "Project Manager",
    image: "/team/yadu.png",
    tagline: "Ships on time. Every time.",
  },
];

export default function TeamMembers() {
  return (
    <section id="team" className="w-full py-20 md:py-28 bg-white text-black font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 xl:px-8 w-full">
        
        {/* Header Section */}
        <div className="w-full mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[1]">
              The Team
            </h2>
          </div>
          <p className="text-gray-500 font-medium text-base md:text-lg max-w-[400px] leading-relaxed">
            A small, senior team. No juniors. No layers. Just people who ship great work.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamMembers.map((item, index) => (
            <div 
              key={item.id}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="w-full aspect-[3/4] bg-gray-100 mb-5 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl md:text-2xl font-black text-black tracking-tight group-hover:text-[#FD5800] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-xs font-bold text-gray-400">{item.id}</span>
                </div>
                <p className="text-sm md:text-[15px] text-gray-500 font-medium border-b border-gray-200 pb-4 mb-4">
                  {item.role}
                </p>
                <p className="text-sm text-gray-800 font-serif italic">
                  "{item.tagline}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

