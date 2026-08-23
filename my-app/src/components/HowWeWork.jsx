"use client";
import { useRef, memo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const steps = [
  { 
    id: '01', 
    title: 'Audit', 
    desc: 'Analyzing your current landscape and uncovering hidden opportunities.',
    theme: { text: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200', shadow: 'hover:shadow-blue-500/20' }
  },
  { 
    id: '02', 
    title: 'Strategy', 
    desc: 'Crafting data-driven blueprints aligned with your business objectives.',
    theme: { text: 'text-[#FD5800]', bg: 'bg-orange-50', border: 'border-orange-200', shadow: 'hover:shadow-[#FD5800]/20' }
  },
  { 
    id: '03', 
    title: 'Execution', 
    desc: 'Turning strategy into reality with agile, precise implementation.',
    theme: { text: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-200', shadow: 'hover:shadow-purple-500/20' }
  },
  { 
    id: '04', 
    title: 'Scale', 
    desc: 'Continuous optimization and growth acceleration for maximum ROI.',
    theme: { text: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200', shadow: 'hover:shadow-emerald-500/20' }
  }
];

// Nodes positioned on SVG canvas
const nodes = [
  { x: 12.5, y: 75, isValley: true },
  { x: 37.5, y: 25, isValley: false },
  { x: 62.5, y: 75, isValley: true },
  { x: 87.5, y: 25, isValley: false },
];

const StepCard = memo(function StepCard({ step, index, scrollYProgress }) {
  const node = nodes[index];
  
  // Stagger the animation based on scroll progress (0 to 0.8)
  const triggerEnd = (index + 1) * 0.2; // 0.2, 0.4, 0.6, 0.8
  const triggerStart = triggerEnd - 0.15; // 0.05, 0.25, 0.45, 0.65
  
  // Explicitly map all the way to 1.0 to guarantee they stay visible!
  const opacity = useTransform(
    scrollYProgress, 
    [0, triggerStart, triggerEnd, 1], 
    [0, 0, 1, 1]
  );
  
  const yMove = useTransform(
    scrollYProgress, 
    [0, triggerStart, triggerEnd, 1], 
    [node.isValley ? 60 : -60, node.isValley ? 60 : -60, 0, 0]
  );
  
  const scale = useTransform(
    scrollYProgress, 
    [0, triggerStart, triggerEnd, 1], 
    [0, 0, 1, 1]
  );

  return (
    <div 
      className="absolute"
      style={{ 
        left: `${node.x}%`, 
        top: `${node.y}%`,
      }}
    >
      {/* Node Dot */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute w-10 h-10 rounded-full bg-white border-[3px] border-gray-200 shadow-md flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className={`w-4 h-4 rounded-full ${step.theme.bg.replace('50', '500')} ${step.theme.text.includes('#') ? 'bg-[#FD5800]' : ''}`} style={step.theme.text.includes('#') ? {} : { backgroundColor: 'currentColor' }} />
      </motion.div>

      {/* Card Container */}
      <motion.div 
        className="absolute z-10 -translate-x-1/2 flex flex-col items-center"
        style={{
          opacity, 
          scale,
          y: yMove,
          ...(node.isValley ? { top: '20px' } : { bottom: '20px' })
        }}
      >
        {/* Connector Line */}
        <div 
          className={`w-1 ${step.theme.bg.replace('50', '200')} ${step.theme.text.includes('#') ? 'bg-orange-200' : ''} ${node.isValley ? 'mb-2 h-8 md:h-12' : 'mt-2 h-8 md:h-12 order-2'}`} 
          style={step.theme.text.includes('#') ? {} : { backgroundColor: 'currentColor' }}
        />
        
        {/* Colorful Card with edge collision prevention */}
        <div className={`w-[240px] md:w-[280px] p-5 md:p-6 rounded-[24px] bg-white border-2 ${step.theme.border} shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${step.theme.shadow} hover:-translate-y-2 hover:shadow-2xl transition-shadow duration-300 ${node.isValley ? '' : 'order-1'} bg-gradient-to-br from-white to-${step.theme.bg.replace('bg-', '')} ${index === 0 ? 'translate-x-[25%] md:translate-x-0' : index === 3 ? '-translate-x-[25%] md:translate-x-0' : ''}`}>
          <div className="flex items-center gap-4 mb-3">
            <span className={`w-10 h-10 rounded-full ${step.theme.bg} ${step.theme.text} text-sm font-black flex items-center justify-center flex-shrink-0 border-2 ${step.theme.border}`}>
              {step.id}
            </span>
            <h3 className={`text-base md:text-lg font-extrabold text-black transition-colors`}>{step.title}</h3>
          </div>
          <p className="text-gray-600 text-[13px] md:text-sm font-medium leading-relaxed">{step.desc}</p>
        </div>
      </motion.div>
    </div>
  );
});

export default function HowWeWork() {
  const targetRef = useRef(null);

  // useScroll tracks the progress of the container's scroll
  const { scrollYProgress: rawScrollProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Apply ultra-smooth liquid spring physics ONLY to this section's scroll animation
  const scrollYProgress = useSpring(rawScrollProgress, {
    stiffness: 45,
    damping: 18,
    mass: 0.6,
    restDelta: 0.001
  });

  // Animated line draws from 0 to 1 based on 0 to 0.85 scroll progress
  // Finishing at 0.85 ensures the line completes as soon as the 4th card is fully visible!
  const pathLength = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  return (
    <section 
      ref={targetRef} 
      className="relative w-full h-[auto] md:h-[200vh] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] font-sans" 
      id="how-we-work"
    >
      {/* ── MOBILE VIEW (Vertical Stack) ── */}
      <div className="flex flex-col md:hidden py-16 px-6 relative w-full overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-0" />
        
        {/* Title */}
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-[12vw] font-black tracking-tighter text-gray-200 uppercase leading-none">
            How We Work
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative z-10 flex flex-col gap-8 max-w-sm mx-auto w-full">
          {/* Connecting Line behind */}
          <div className="absolute left-[28px] top-4 bottom-4 w-1 bg-gray-200 z-0"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.2 }}
              className="relative flex items-start gap-6 z-10"
            >
              {/* Dot */}
              <div className="w-14 h-14 rounded-full bg-white border-[3px] border-gray-200 shadow-md flex items-center justify-center flex-shrink-0 relative mt-1">
                <div className={`w-5 h-5 rounded-full ${step.theme.bg.replace('50', '500')} ${step.theme.text.includes('#') ? 'bg-[#FD5800]' : ''}`} style={step.theme.text.includes('#') ? {} : { backgroundColor: 'currentColor' }} />
              </div>

              {/* Card */}
              <div className={`flex-1 p-5 rounded-[20px] bg-white border-2 ${step.theme.border} shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-gradient-to-br from-white to-${step.theme.bg.replace('bg-', '')}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`w-8 h-8 rounded-full ${step.theme.bg} ${step.theme.text} text-xs font-black flex items-center justify-center flex-shrink-0 border-2 ${step.theme.border}`}>
                    {step.id}
                  </span>
                  <h3 className="text-[17px] font-extrabold text-black">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-[14px] font-medium leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP VIEW (Sticky Scroll) ── */}
      <div className="hidden md:flex sticky top-0 h-screen w-full flex-col justify-center overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

        {/* Giant Watermark Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[18vw] md:text-[220px] font-black tracking-tighter text-gray-200 uppercase whitespace-nowrap select-none leading-none"
          >
            How We Work
          </motion.h2>
        </div>

        {/* Small Label instead of large heading */}
        <div className="relative z-10 text-center mb-6 px-4 -translate-y-8 md:-translate-y-16">
          <span className="text-sm font-bold uppercase tracking-widest text-[#FD5800]"></span>
        </div>

        {/* ── TIMELINE CONTAINER ── */}
        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24 mt-12 md:mt-16">
          <div className="relative w-[150%] -left-[25%] md:w-full md:left-0 aspect-[2/1] md:aspect-[6/1] min-h-[200px]">
            
            {/* SVG Curve */}
            <svg
              viewBox="0 0 1000 200"
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              {/* Extended path to -100 and 1100 guarantees it shoots off the screen edges completely */}
              <path
                d="M -100,100 L 0,100 C 62.5,100 62.5,150 125,150 C 250,150 250,50 375,50 C 500,50 500,150 625,150 C 750,150 750,50 875,50 C 937.5,50 937.5,100 1000,100 L 1100,100"
                fill="none" stroke="#E5E7EB" strokeWidth="4" strokeDasharray="8 6" strokeLinecap="round"
              />
              <motion.path
                d="M -100,100 L 0,100 C 62.5,100 62.5,150 125,150 C 250,150 250,50 375,50 C 500,50 500,150 625,150 C 750,150 750,50 875,50 C 937.5,50 937.5,100 1000,100 L 1100,100"
                fill="none" stroke="#FD5800" strokeWidth="6" strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>

            {/* Nodes and Cards overlay driven by scroll progress */}
            {steps.map((step, i) => (
              <StepCard key={step.id} step={step} index={i} scrollYProgress={scrollYProgress} />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
