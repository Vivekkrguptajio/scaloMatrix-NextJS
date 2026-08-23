"use client";
import { motion, useMotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function DefinesUs() {
  const arrowRef = useRef(null)
  const sectionRef = useRef(null)
  const rotation = useMotionValue(0)

  useEffect(() => {
    let animationFrameId;
    let isVisible = false;
    
    const handleMouseMove = (e) => {
      if (!isVisible) return;
      if (!arrowRef.current) return
      
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(() => {
        if (!arrowRef.current) return;
        const arrowRect = arrowRef.current.getBoundingClientRect()
        const arrowCenterX = arrowRect.left + arrowRect.width / 2
        const arrowCenterY = arrowRect.top + arrowRect.height / 2
        
        const angleRad = Math.atan2(e.clientY - arrowCenterY, e.clientX - arrowCenterX)
        const angleDeg = (angleRad * 180) / Math.PI
        
        rotation.set(angleDeg)
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [rotation])

  return (
    <section id="definesus" ref={sectionRef} className="relative w-full bg-white font-sans overflow-hidden border-t border-gray-100 min-h-[500px] flex flex-col justify-center py-8 md:py-24">
      
      {/* Background Peanut & Circle Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <div className="relative w-full h-[200px]">
          <svg className="w-full h-full absolute top-1/2 left-0 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="peanutPattern" width="600" height="200" patternUnits="userSpaceOnUse" x="50%" y="0">
                {/* Horizontal lines */}
                <line x1="0" y1="0" x2="600" y2="0" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="100" x2="600" y2="100" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="0" y1="200" x2="600" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                
                {/* Vertical lines */}
                <line x1="0" y1="0" x2="0" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="400" y1="0" x2="400" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                <line x1="600" y1="0" x2="600" y2="200" stroke="#e5e7eb" strokeWidth="1" />
                
                {/* Peanut Shape */}
                <path d="M 0 100 
                         A 100 100 0 0 1 100 0 
                         C 150 0, 150 60, 200 60 
                         C 250 60, 250 0, 300 0 
                         A 100 100 0 0 1 400 100 
                         A 100 100 0 0 1 300 200 
                         C 250 200, 250 140, 200 140 
                         C 150 140, 150 200, 100 200 
                         A 100 100 0 0 1 0 100 Z" 
                      stroke="#e5e7eb" strokeWidth="1" fill="none" />
                
                {/* Circle Shape */}
                <circle cx="500" cy="100" r="100" stroke="#e5e7eb" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#peanutPattern)" />
          </svg>
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row pb-6 lg:pb-8 w-full">
          {/* Left: What defines us */}
          <div className="lg:w-[35%] shrink-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-[48px] font-black tracking-tighter text-black leading-none"
            >
              What defines us
            </motion.h2>
          </div>

          {/* Right: Heading */}
          <div className="lg:w-[65%] flex items-end pt-8 lg:pt-0">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl lg:text-[32px] font-bold text-black leading-[1.2] tracking-tighter max-w-[900px]"
            >
              We're brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.
            </motion.h3>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row pt-6 lg:pt-8 w-full">
          {/* Left: Arrow */}
          <div className="lg:w-[35%] shrink-0 flex items-start lg:pl-4 pb-6 lg:pb-0 -mt-8 lg:-mt-16">
            {/* Cursor-Following Black Arrow (thick blocky style like the image) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="hidden md:flex w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] items-center justify-center text-[#FD5800]"
            >
              <motion.div 
                ref={arrowRef}
                style={{ rotate: rotation }}
                transition={{ ease: "linear", duration: 0 }}
                className="w-full h-full flex items-center justify-center will-change-transform"
              >
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" stroke="currentColor" strokeWidth="34">
                    {/* Tail is 40% longer backwards (M18) and slightly pulled back from the tip (L305) */}
                    <path d="M18 200 L305 200" strokeLinecap="square" />
                    {/* The V-shape arrow head with tip at X=320, wings 50% longer */}
                    <path d="M185 65 L320 200 L185 335" strokeLinecap="square" strokeLinejoin="miter" />
                  </g>
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Paragraph and Button */}
          <div className="lg:w-[65%] flex flex-col gap-8 md:gap-16 items-start">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-500 font-medium leading-[1.6] max-w-[950px]"
            >
              We're on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-0 md:mt-8"
            >
              <a href="#contact" style={{ fontFamily: "'Sora', sans-serif" }} className="inline-flex items-center justify-center px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold text-[13px] md:text-[16px] bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors tracking-wide">
                Dive Into Our Culture <span className="ml-2 md:ml-3 font-normal">&rarr;</span>
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
