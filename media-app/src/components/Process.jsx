"use client";
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    description: 'We deep-dive into your current campaigns, analytics, and competitive landscape. No guesswork — just data.',
    highlight: 'Week 1',
    img: '/images/1.jpg'
  },
  {
    num: '02',
    title: 'Strategy & Planning',
    description: 'Custom media plans with channel mix, budget allocation, audience segmentation, and KPI frameworks.',
    highlight: 'Week 2',
    img: '/images/2.png'
  },
  {
    num: '03',
    title: 'Creative Production',
    description: 'Scroll-stopping ad creatives, video assets, and landing pages — tested for maximum performance.',
    highlight: 'Week 2-3',
    img: '/images/3.png'
  },
  {
    num: '04',
    title: 'Launch & Optimize',
    description: 'Go live with precision targeting. Daily monitoring, bid optimization, and real-time budget pacing.',
    highlight: 'Week 3+',
    img: '/images/4.jpeg'
  },
  {
    num: '05',
    title: 'Scale & Report',
    description: 'Double down on winners, cut losers. Monthly performance reviews with actionable growth roadmaps.',
    highlight: 'Ongoing',
    img: '/images/5.png'
  },
]

// Separate component for each card to handle its specific scroll animation
function StackedCard({ step, i, scrollYProgress }) {
  // We have 5 cards. Card 0 is always visible. Cards 1-4 animate in sequentially.
  // We divide the scroll progress (0 to 1) into 4 segments.
  const start = (i - 1) * 0.25
  const end = i * 0.25
  
  // y animation: slides up from bottom of screen to 0
  const y = useTransform(scrollYProgress, [start, end], ["150vh", "0vh"])
  
  // Card 0 doesn't slide in, it's just there
  const finalY = i === 0 ? "0vh" : y
  
  // Calculate dynamic rotation or subtle movement based on entry
  const rotate = useTransform(scrollYProgress, [start, end], [i % 2 === 0 ? 5 : -5, 0])
  const finalRotate = i === 0 ? 0 : rotate

  // Offset each card to the right using percentage so it scales perfectly on all screens without causing overflow
  const xOffset = `calc(${i * 4}%)`
  
  // We can also make previous cards scale down slightly as new cards pile on
  // When card i+1 comes in (progress > end), card i scales down slightly
  const scaleStart = end
  const scaleEnd = end + 0.25
  const scale = useTransform(scrollYProgress, [scaleStart, scaleEnd], [1, 0.95])
  // Only apply scale-down if it's not the last card
  const finalScale = i === steps.length - 1 ? 1 : scale

  return (
    <motion.div 
      style={{ 
        y: finalY, 
        x: xOffset,
        rotate: finalRotate,
        scale: finalScale,
        zIndex: i 
      }}
      className="absolute top-0 left-0 w-[84%] h-full bg-white rounded-[30px] md:rounded-[40px] flex flex-col border border-gray-200 shadow-2xl overflow-hidden group transition-shadow duration-300 hover:shadow-3xl hover:border-[#FD5800]/30"
    >
      {/* Image Header */}
      <div className="relative w-full h-[45%] md:h-[50%] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
        <img 
          src={step.img} 
          alt={step.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
        />
        
        {/* Number Badge */}
        <div className="absolute top-6 left-6 z-20 flex justify-between items-start">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 flex items-center justify-center text-xl md:text-2xl font-black text-[#FD5800] shadow-sm group-hover:bg-[#FD5800] group-hover:text-white transition-all duration-500">
            {step.num}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center flex-1 bg-white relative z-20">
        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 md:mb-4 tracking-tight group-hover:text-[#FD5800] transition-colors duration-500">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Process() {
  const targetRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  
  // Extend height to 400vh for 4 animated steps
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  // Track scroll progress to determine active card for the week indicator
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.12) setActiveIndex(0)
    else if (latest >= 0.12 && latest < 0.37) setActiveIndex(1)
    else if (latest >= 0.37 && latest < 0.62) setActiveIndex(2)
    else if (latest >= 0.62 && latest < 0.87) setActiveIndex(3)
    else setActiveIndex(4)
  })

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 flex flex-col lg:flex-row h-screen items-center justify-center max-w-[1400px] mx-auto px-6 py-20 lg:py-0 gap-10 lg:gap-20 overflow-hidden">
        
        {/* Background glow for atmosphere */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#FD5800]/5 rounded-full blur-[120px] pointer-events-none z-0" />
        
        {/* Left Side: Title Section */}
        <div className="w-full lg:w-[40%] relative z-10 flex flex-col justify-center text-center lg:text-left">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]"
           >
             A process built <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-[#FF9066]">for velocity.</span>
           </motion.h2>
           <p className="mt-6 text-gray-600 text-base md:text-lg lg:text-xl font-medium max-w-sm mx-auto lg:mx-0">
             Scroll to see how we take your brand from discovery to exponential scale.
           </p>
        </div>

        {/* Right Side: Stacked Card Deck */}
        <div className="relative w-full lg:w-[60%] h-[55vh] md:h-[65vh] max-w-2xl lg:ml-10 z-10">
          {steps.map((step, i) => (
             <StackedCard key={step.num} step={step} i={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* Dynamic Timeline / Week Indicator at Bottom */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50">
          <AnimatePresence mode="wait">
            {activeIndex >= 0 && activeIndex < steps.length && (
              <motion.div
                key={steps[activeIndex].highlight}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white/90 backdrop-blur-xl px-6 md:px-8 py-3 md:py-4 rounded-full border border-[#FD5800]/20 shadow-2xl flex items-center gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#FD5800] animate-pulse" />
                <span className="text-[#FD5800] font-black tracking-[0.2em] uppercase text-xs md:text-sm whitespace-nowrap">
                  {steps[activeIndex].highlight}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
