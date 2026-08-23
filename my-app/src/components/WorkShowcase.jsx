"use client";
import { useRef, useState, useEffect, useContext } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { PortfolioContext } from '../context/PortfolioContext'

export default function WorkShowcase() {
  const { workShowcaseGif } = useContext(PortfolioContext)
  const containerRef = useRef(null)
  
  // Use state to track window size for dynamic width/height calculations
  const [windowSize, setWindowSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1000, 
    height: typeof window !== 'undefined' ? window.innerHeight : 800 
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Start with a perfect square (540px on desktop, 85vw on mobile)
  const initialSize = windowSize.width < 768 ? windowSize.width * 0.85 : 540
  
  // Target a wide rectangle (95vw width, 80vh height)
  const targetWidth = windowSize.width * 0.95
  const targetHeight = windowSize.height * 0.80

  // Animate width and height independently
  const width = useTransform(scrollYProgress, [0, 1], [initialSize, targetWidth])
  const height = useTransform(scrollYProgress, [0, 1], [initialSize, targetHeight])
  
  // Inner image zoom effect
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  // Border radius transition
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["30px", "16px"])

  // Animate background color from white to black
  const backgroundColor = useTransform(scrollYProgress, [0, 0.4], ["#ffffff", "#000000"])

  return (
    <motion.section id="work-showcase" ref={containerRef} style={{ backgroundColor }} className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ width, height, borderRadius }} 
          className="overflow-hidden flex items-center justify-center bg-transparent shadow-xl"
        >
          <motion.img 
            style={{ scale: imageScale }}
            src={workShowcaseGif || ""}
            alt="Work Showcase" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
