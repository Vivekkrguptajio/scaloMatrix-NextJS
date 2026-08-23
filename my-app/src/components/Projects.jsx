"use client";
import { useRef, useEffect, useState, useContext } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { PortfolioContext } from '../context/PortfolioContext'

export default function Projects() {
  const { projects } = useContext(PortfolioContext)
  const targetRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Use Framer Motion for buttery smooth zero-render scrolling
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Spring physics for smoother catch-up
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-80%"]);
  
  // For the progress bar indicator
  const barWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  // Simple integer tracker for the counter
  const [activeIdx, setActiveIdx] = useState(1);
  
  // Update counter occasionally (throttled by effect)
  useEffect(() => {
    return smoothProgress.onChange((latest) => {
      const idx = Math.min(Math.max(Math.ceil(latest * projects.length), 1), projects.length);
      setActiveIdx(idx);
    });
  }, [smoothProgress, projects.length]);

  return (
    <section
      ref={targetRef}
      id="projects"
      style={{ height: isMobile ? 'auto' : '500vh' }}
      className={`relative w-full bg-white ${isMobile ? 'py-20' : ''}`}
    >
      {/* Container */}
      <div className={`${isMobile ? 'relative flex flex-col w-full' : 'sticky top-0 h-screen flex flex-col justify-center pt-20 md:pt-24 overflow-hidden w-full'}`}>
        
        <div className="w-full px-5 md:px-20 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center h-full gap-10">
          {/* Left Side: Section Header */}
          <div className="w-full md:w-[40%] flex-shrink-0 z-10 pt-20 md:pt-0">
            <div className="mb-8 md:mb-10">
              <h2 className="text-4xl sm:text-5xl md:text-[5rem] font-neuebit leading-none tracking-wide">
                <span className="text-gray-700">Featured </span><br className="hidden md:block" />
                <span>Projects</span>
              </h2>
            </div>
            
            {/* Scroll Progress Indicator */}
            <div className="mt-12 flex items-center gap-4">
              <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gray-900 rounded-full"
                  style={{ width: barWidth }}
                />
              </div>
              <span className="text-sm text-gray-400 font-bold tracking-widest">
                {activeIdx} / {projects.length}
              </span>
            </div>
          </div>

          {/* Right Side: Horizontal scrolling track */}
          <div className={`w-full md:w-[60%] relative flex items-center ${isMobile ? 'overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide' : 'h-full overflow-visible'}`}>
            <motion.div
              className={`flex gap-6 md:gap-10 ${isMobile ? 'w-max px-5' : 'w-max absolute left-0'}`}
              style={{ x: isMobile ? 0 : x }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 flex-shrink-0 mt-4 md:mt-6 w-[85vw] md:w-[600px] ${isMobile ? 'snap-center' : ''}`}
                >
                  {/* Card Image Area */}
                  <div className={`w-full bg-gradient-to-br ${project.bgGradient} relative flex items-center justify-center ${project.image ? '' : 'p-8'} overflow-hidden`} style={{ height: '360px' }}>
                    {project.image ? (
                      <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-out" />
                    ) : project.isDark ? (
                      <div className="w-10/12 h-4/5 bg-neutral-900 rounded-xl shadow-md p-5 transform group-hover:scale-105 transition-all duration-500 flex flex-col justify-between border border-neutral-800 text-white">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold tracking-widest text-neutral-400">DENOTATION</span>
                          <div className="w-4 h-4 rounded-full bg-white"></div>
                        </div>
                        <div className="space-y-2 mt-auto">
                          <div className="w-full h-3 bg-neutral-800 rounded"></div>
                          <div className="w-1/2 h-3 bg-neutral-800 rounded"></div>
                          <div className="h-6 bg-white/10 rounded mt-2 border border-white/20"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-10/12 h-4/5 bg-white rounded-xl shadow-md p-5 transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 flex flex-col justify-between border border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 ${project.iconLetter === 'H' ? 'rounded-lg' : 'rounded-full'} ${project.iconBg} flex items-center justify-center font-bold text-xs`}>
                            {project.iconLetter}
                          </div>
                          <span className="text-sm font-bold text-gray-800">{project.brandName}</span>
                        </div>
                        <div className="space-y-2 mt-auto">
                          {project.barColors?.map((color, i) => (
                            <div key={i} className={`${i === 0 ? 'w-full' : 'w-3/4'} h-3 ${color} rounded`}></div>
                          ))}
                          <div className={`${project.gridColors?.length === 1 ? '' : 'grid grid-cols-' + (project.gridColors?.length || 3)} gap-2 mt-2`}>
                            {project.gridColors?.map((color, i) => (
                              <div key={i} className={`h-${project.gridColors.length === 1 ? '16' : project.gridColors.length === 2 ? '14' : '12'} ${color} rounded`}></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className="p-6 md:p-8">
                    <span className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1 ${project.tagBg} rounded-full`}>
                      {project.category}
                    </span>
                    <h3 className={`text-xl font-bold text-gray-900 mt-4 ${project.hoverColor} transition-colors`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
