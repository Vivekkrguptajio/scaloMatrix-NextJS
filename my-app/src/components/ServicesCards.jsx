"use client";

import { motion } from 'framer-motion';

const cardsData = [
  {
    id: 1,
    titleTop: "SCALO",
    titleScript: "Brand",
    gradient: "from-[#FF4E6E] via-[#E93B55] to-[#801323]",
    heading: "We Build\nBrands",
    description: "We craft compelling brand identities and narratives that resonate with your target audience. From stunning visual design to comprehensive brand strategy, we ensure your brand stands out in a crowded market and builds lasting, meaningful connections.",
    link: "#"
  },
  {
    id: 2,
    titleTop: "SCALO",
    titleScript: "Commerce",
    gradient: "from-[#8B5CF6] via-[#6366F1] to-[#312E81]",
    heading: "We Build\nCommerce",
    description: "We engineer seamless, high-converting e-commerce experiences designed to drive sales and foster customer loyalty. Our solutions integrate cutting-edge technology with intuitive UI/UX to optimize the entire buyer's journey from discovery to checkout.",
    link: "#"
  },
  {
    id: 3,
    titleTop: "SCALO",
    titleScript: "Growth",
    gradient: "from-[#F97316] via-[#EA580C] to-[#7C2D12]",
    heading: "We Build\nGrowth",
    description: "We execute data-driven growth strategies that scale your business rapidly. By leveraging advanced analytics, performance marketing, and relentless conversion rate optimization, we maximize your ROI and accelerate your market penetration.",
    link: "#"
  }
];

export default function ServicesCards() {

  return (
    <section className="bg-white py-8 relative overflow-hidden" id="services">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center pb-8 pt-2">
          <span className="text-[#FD5800] uppercase tracking-[0.2em] text-[13px] font-bold mb-2">Ecosystem</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-sans font-black leading-none uppercase tracking-tight text-black">
            What We Build
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 pt-2 px-2">
          {cardsData.map((card) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: card.id * 0.1 }}
              className="bg-[#181818] text-white rounded-2xl border border-white/5 flex flex-col overflow-hidden shadow-2xl relative w-full"
            >
              {/* Top Gradient Image Area */}
              <div className="relative h-[140px] md:h-[200px] w-full p-3 md:p-4">
                 {/* The unique gradient shape */}
                 <div className="absolute inset-0 p-4 pb-0">
                    <div 
                      className={`w-full h-full bg-gradient-to-br ${card.gradient} relative overflow-hidden`}
                      style={{
                        borderRadius: '16px 16px 24px 16px',
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 75% 100%, 65% 75%, 0 75%)'
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20" style={{ mixBlendMode: 'overlay' }}></div>
                    </div>
                 </div>

                 {/* Text Overlay */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-[-10px] md:mt-[-20px]">
                   {card.titleTop === 'hooc' ? (
                      <h3 className="text-4xl md:text-5xl font-light tracking-wider text-white drop-shadow-xl" style={{ fontFamily: "'Comfortaa', sans-serif" }}>
                        h<span className="text-[1.1em] font-normal tracking-tighter">oo</span>c
                      </h3>
                   ) : (
                      <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-xl flex flex-col items-center font-sans">
                        {card.titleTop}
                        {card.titleScript && (
                          <span className="font-serif text-[#F3CD7A] text-3xl md:text-4xl font-normal -mt-3 md:-mt-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {card.titleScript}
                          </span>
                        )}
                      </h3>
                   )}
                 </div>
              </div>

              {/* Content Area */}
              <div className="p-4 pt-3 md:p-5 md:pt-4 flex-grow flex flex-col z-10">
                <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 whitespace-pre-line text-white leading-tight">
                  {card.heading}
                </h4>
                <p className="text-gray-200 text-[15px] md:text-base leading-relaxed flex-grow font-semibold line-clamp-2 md:line-clamp-none">
                  {card.description}
                </p>
                
                <div className="mt-4 md:mt-6 flex justify-end">
                  <a href={card.link} className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-xl bg-[#FD5800] text-white hover:bg-white hover:text-black transition-colors text-sm font-semibold group">
                    Explore {card.titleScript}
                    <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
