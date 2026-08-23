"use client";
import { motion } from 'framer-motion';
import { memo, useState } from 'react';
import { testimonials } from '../data';

const Testimonials = memo(function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-12 md:py-16 bg-white font-sans border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] md:leading-[0.9]">
              Don't just take <br />
              <span className="text-gray-400">our word for it.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 font-medium max-w-sm"
          >
            We've partnered with industry leaders to deliver digital experiences that drive real, measurable results.
          </motion.p>
        </div>

        {/* Infinite Scroll Carousel */}
        <div className="relative overflow-x-hidden flex group">
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div 
            className="animate-marquee flex gap-6 md:gap-8 items-stretch py-8"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onTouchCancel={() => setIsPaused(false)}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div 
                key={`${t.id}-${i}`}
                className="group/card w-[280px] sm:w-[400px] md:w-[480px] shrink-0 whitespace-normal relative bg-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_-12px_rgba(253,88,0,0.15)] hover:border-[#FD5800]/30 transition-[shadow,border-color] duration-500 flex flex-col justify-between overflow-hidden"
              >
                {/* Giant Background Quote Mark */}
                <span className="absolute top-0 right-6 text-[100px] md:text-[140px] leading-none font-serif text-[#FD5800]/[0.04] group-hover/card:text-[#FD5800]/10 transition-colors duration-500 select-none pointer-events-none font-black">
                  "
                </span>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6 md:mb-8">
                    {[...Array(t.rating)].map((_, idx) => (
                      <svg 
                        key={idx} 
                        className="w-4 h-4 md:w-5 md:h-5 text-[#FD5800] drop-shadow-sm group-hover/card:scale-110 transition-transform duration-300" 
                        style={{ transitionDelay: `${idx * 50}ms` }} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Elegant Quote Text */}
                  <p className="text-[15px] md:text-[19px] font-sans font-medium leading-[1.6] text-gray-600 group-hover/card:text-gray-900 transition-colors mb-8 md:mb-12 relative z-10">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 relative z-10 pt-4 md:pt-6 border-t border-gray-100 group-hover/card:border-[#FD5800]/20 transition-colors">
                  {/* Gradient Avatar */}
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#FD5800] to-[#FF9066] flex items-center justify-center text-white font-black text-lg md:text-xl shadow-md group-hover/card:scale-110 group-hover/card:rotate-6 transition-transform duration-500">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-[15px] md:text-[17px] tracking-tight">{t.name}</h4>
                    <p className="text-[13px] md:text-sm font-bold text-[#FD5800]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
});

export default Testimonials;
