"use client";
import { useState, useRef, useEffect } from 'react'
import { solutions } from '../data'

export default function About() {
  const [activeCardId, setActiveCardId] = useState(null);
  const scrollRef = useRef(null);
  const targetScroll = useRef(0);
  const currentScroll = useRef(0);
  const animFrameId = useRef(null);
  const isHovering = useRef(false);

  const handleMouseEnter = () => {
    isHovering.current = true;
    if (scrollRef.current) {
      currentScroll.current = scrollRef.current.scrollLeft;
      targetScroll.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
  };

  const handleMouseMove = (e) => {
    if (!scrollRef.current) return;
    const rect = scrollRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, mouseX / rect.width));
    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    targetScroll.current = maxScroll * percentage;
  };

  useEffect(() => {
    let running = false;
    const animate = () => {
      if (scrollRef.current && isHovering.current) {
        const diff = targetScroll.current - currentScroll.current;
        if (Math.abs(diff) > 0.2) {
          currentScroll.current += diff * 0.1;
          scrollRef.current.scrollLeft = currentScroll.current;
          animFrameId.current = requestAnimationFrame(animate);
          return;
        }
      }
      running = false;
    };
    // Start loop only on mouseenter, stop when mouse leaves
    const startLoop = () => { if (!running) { running = true; animFrameId.current = requestAnimationFrame(animate); } };
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('mouseenter', startLoop, { passive: true });
      el.addEventListener('mousemove', startLoop, { passive: true });
    }
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      if (el) {
        el.removeEventListener('mouseenter', startLoop);
        el.removeEventListener('mousemove', startLoop);
      }
    };
  }, []);

  return (
    <section id="about" className="relative w-full h-[auto] md:h-screen min-h-[100vh] flex flex-col pt-0 bg-white font-sans overflow-x-clip">
      
      {/* ─── Background Ambient Waves ─── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#FD5800]/[0.03] to-transparent rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FD5800]/[0.03] to-transparent rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="w-full h-full flex flex-col relative z-10">

        {/* ─── Horizontal Scroll Grid ─── */}
        <div 
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className="w-full h-full md:min-h-screen flex flex-col md:flex-row shadow-2xl overflow-x-clip md:overflow-x-auto md:overflow-y-hidden rounded-none border-t border-gray-200 cursor-auto md:cursor-ew-resize select-none" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {solutions.map((item, index) => {
            
            const isActive = activeCardId === item.id;
            const activeColors = [
              'hover:bg-blue-600',    // Vibrant Blue
              'hover:bg-rose-500',    // Vibrant Rose
              'hover:bg-emerald-500', // Vibrant Green
              'hover:bg-purple-600',  // Vibrant Purple
              'hover:bg-[#FD5800]',   // Brand Orange
              'hover:bg-indigo-500',  // Vibrant Indigo
              'hover:bg-fuchsia-600'  // Vibrant Fuchsia
            ];
            const activeBgColors = [
              'bg-blue-600',
              'bg-rose-500',
              'bg-emerald-500',
              'bg-purple-600',
              'bg-[#FD5800]',
              'bg-indigo-500',
              'bg-fuchsia-600'
            ];
            const activeBg = activeColors[index % activeColors.length];
            const forceBg = activeBgColors[index % activeBgColors.length];

            return (
              <div 
                key={item.id}
                onClick={() => setActiveCardId(isActive ? null : item.id)}
                className={`sticky md:static flex flex-col justify-between border-b md:border-b-0 md:border-r border-black/5 hover:border-black/10 last:border-0 md:last:border-r-0 relative overflow-hidden group w-full md:w-[380px] lg:w-[420px] shrink-0 md:snap-center py-5 md:py-12 px-6 md:px-10 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] md:shadow-none ${isActive ? forceBg : 'bg-white'} ${activeBg}`}
                style={{ top: `calc(10vh + ${index * 15}px)` }}
              >
                {/* Large Background Card Number */}
                <div className={`absolute top-4 right-6 font-black text-6xl md:text-8xl select-none pointer-events-none group-hover:opacity-[0.08] transition-opacity 
                  ${isActive ? 'opacity-[0.08] text-black/10' : 'opacity-100 text-black/5'}`}>
                  {item.id}
                </div>

                <div className="w-full h-full flex flex-col justify-center relative z-10">
                  
                  {/* CARD COVER / TITLE SECTION */}
                  <div className="flex flex-col items-center text-center transition-all duration-500">
                    <div className={`hidden md:flex w-16 h-16 rounded-2xl backdrop-blur-md items-center justify-center mb-6 shadow-sm group-hover:text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 
                      ${isActive ? 'text-white scale-110 bg-white/20' : 'text-gray-500 bg-black/5'}`}>
                      {item.icon}
                    </div>

                    <h3 className={`text-[32px] md:text-[38px] lg:text-[44px] font-black leading-[1.1] group-hover:text-white transition-colors duration-500 tracking-tight 
                      ${isActive ? 'text-white' : 'text-gray-500'}`}>
                      {item.title} <br className="hidden md:inline"/>Solution
                    </h3>

                    {/* Permanent Circle Arrow Link */}
                    <a 
                      href={item.link || "#"} 
                      target={item.link ? "_blank" : "_self"}
                      rel={item.link ? "noopener noreferrer" : ""}
                      onClick={(e) => e.stopPropagation()} 
                      className={`mt-4 md:mt-8 w-12 h-12 rounded-full flex items-center justify-center group/btn hover:scale-105 transition-all duration-300 shadow-md shrink-0 border border-transparent
                        ${isActive ? 'bg-white text-gray-900' : 'bg-gray-100 text-gray-800 hover:bg-gray-900 hover:text-white group-hover:bg-white group-hover:text-gray-900'}`}
                    >
                      <svg className={`w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>

                  {/* HOVER DETAILS SECTION (Collapsed by default, revealed on hover) */}
                  <div className={`group-hover:opacity-100 group-hover:max-h-[500px] transition-all duration-500 ease-out overflow-hidden flex flex-col items-center text-center pt-4 md:pt-8 
                    ${isActive ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}`}>
                    
                    <p className={`text-[15px] md:text-[17px] font-semibold leading-relaxed mb-4 md:mb-6 max-w-sm drop-shadow-sm transition-all duration-500 transform delay-75 group-hover:text-white group-hover:translate-y-0 group-hover:opacity-100 
                      ${isActive ? 'text-white translate-y-0 opacity-100' : 'text-gray-700 translate-y-8 opacity-0'}`}>
                      {item.desc}
                    </p>
                    
                    {/* Services Checklist */}
                    <ul className={`grid gap-x-4 gap-y-2.5 mb-4 md:mb-8 w-full max-w-md ${item.list.length > 3 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} transition-all duration-500 transform delay-150 group-hover:translate-y-0 group-hover:opacity-100 
                      ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      {item.list.map((listItem, i) => (
                        <li key={i} className="flex items-start gap-2 text-left">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-[3px] transition-colors duration-500 group-hover:bg-white/20 
                            ${isActive ? 'bg-white/20' : 'bg-[#FD5800]/20'}`}>
                            <svg className={`w-2.5 h-2.5 group-hover:text-white transition-colors duration-500 
                              ${isActive ? 'text-white' : 'text-[#FD5800]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className={`font-bold text-[13px] md:text-[15px] transition-colors duration-500 group-hover:text-white 
                            ${isActive ? 'text-white' : 'text-gray-800'}`}>{listItem}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
