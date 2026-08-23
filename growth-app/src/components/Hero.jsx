"use client";
import { useState, useEffect, useRef } from 'react'

const col1Images = [
  '/images/6.png',
  '/images/7.png',
  '/images/8.jpg',
  '/images/9.jpg',
  '/images/10.avif',
  '/images/11.png',
  '/images/12.png',
  '/images/13.png',
  '/images/14.png',
  '/images/15.png',
]

const col2Images = [
  '/images/16.png',
  '/images/17.png',
  '/images/6470329994a07b3f73a75acf_PRALHAD STUDY-01 (Large).png',
  '/images/647725f396c6376edf86be43_DOMINOS WEBSITE CASE STUDY m text-01 (Large).png',
  '/images/6477260dbbb4647b0057f061_SWIGGY CASE STUDY M TEXT-01 (Large).png',
  '/images/6477262de0f4dc148b14b786_WE DELIVER CS-01 (Large).png',
  '/images/6477266468810cea11c95a7e_JUST ONE HEAD CASE STUDY M TEXT-01 (Large).png',
  '/images/647726b6bbb4647b00589d78_FEVICOL WEBSITE CASE STUDY M TEXT (Large).png',
  '/images/6477272c5e9047a330a89ba3_SWITCH MOBILITY STUDY M TEXT-01 (Large).png',
  '/images/64774cb69983a2137ad4433e_IMAGINE MEATS CASE  STUDY M TEXT-01 (Large).png',
  '/images/64774eb8a0df3323433e2e83_J&J WEBSITE CASE STUDY M TEXT-01 (Large).png',
]

const rotatingWords = ['Google Ads', 'Meta Ads', 'YouTube', 'Programmatic', 'LinkedIn']

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const ref = useRef(null)

  useEffect(() => {
    let animationFrameId
    let startTime = null
    let hasAnimated = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true
          startTime = null
          const animate = (now) => {
            if (!startTime) startTime = now
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const isDecimal = String(target).includes('.')
            const currentVal = isDecimal
              ? (eased * target).toFixed(1)
              : Math.floor(eased * target)
            
            if (ref.current) {
              ref.current.textContent = `${currentVal}${suffix}`
            }

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate)
            } else {
              if (ref.current) ref.current.textContent = `${target}${suffix}`
            }
          }
          animationFrameId = requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [target, duration, suffix])

  return <span ref={ref}>0{suffix}</span>
}

function RotatingText() {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setIndex(prev => (prev + 1) % rotatingWords.length)
        setIsVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-block text-[#FD5800] py-1 px-1 min-w-[200px] md:min-w-[280px]">
      <span
        className={`inline-block w-full transition-all duration-400 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-3'
        }`}
      >
        {rotatingWords[index]}
      </span>
      <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
        <path d="M2 6C75 2 225 2 298 6" stroke="#FD5800" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      </svg>
    </span>
  )
}

export default function Hero() {


  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-between pt-24 md:pt-28 pb-6 md:pb-10 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden"
    >
      {/* CSS Animations */}
      <style>{`
        @keyframes float1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(-2deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 20px rgba(253, 88, 0, 0.15); } 50% { box-shadow: 0 0 40px rgba(253, 88, 0, 0.3); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .hero-animate-1 { animation: slideInLeft 0.8s ease-out both; }
        .hero-animate-2 { animation: slideInLeft 0.8s ease-out 0.15s both; }
        .hero-animate-3 { animation: slideInUp 0.8s ease-out 0.3s both; }
        .hero-animate-4 { animation: slideInUp 0.8s ease-out 0.45s both; }
        .hero-animate-5 { animation: slideInUp 0.8s ease-out 0.6s both; }
        .hero-cards-animate { animation: slideInRight 1s ease-out 0.5s both; }
        @keyframes marqueeVertical { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        @keyframes marqueeVerticalReverse { 0% { transform: translateY(-50%); } 100% { transform: translateY(0); } }
        .animate-marquee-vertical { animation: marqueeVertical 18s linear infinite; }
        .animate-marquee-vertical-reverse { animation: marqueeVerticalReverse 18s linear infinite; }
      `}</style>

      {/* Ambient gradient orbs background (Optimized: Removed heavy animation) */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FD5800]/[0.04] to-[#FF9066]/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FD5800]/[0.03] to-[#FF6B35]/[0.02] blur-3xl pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      {/* LEFT COLUMN - Moving Up */}
      <div className="absolute top-0 left-0 w-[18%] xl:w-[20%] h-full hidden md:flex justify-center hero-cards-animate overflow-hidden px-4 pointer-events-none z-0">
        <div className="flex flex-col gap-4 animate-marquee-vertical w-full h-max pt-[200px]">
          {[...col1Images, ...col1Images].map((src, idx) => (
            <div key={`col1-${idx}`} className="w-full h-[220px] xl:h-[260px] flex-shrink-0 rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-lg pointer-events-auto">
              <img src={src} alt="Campaign" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT COLUMN - Moving Down */}
      <div className="absolute top-0 right-0 w-[18%] xl:w-[20%] h-full hidden md:flex justify-center hero-cards-animate overflow-hidden px-4 pointer-events-none z-0">
        <div className="flex flex-col gap-4 animate-marquee-vertical-reverse w-full h-max">
          {[...col2Images, ...col2Images].map((src, idx) => (
            <div key={`col2-${idx}`} className="w-full h-[220px] xl:h-[260px] flex-shrink-0 rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-lg pointer-events-auto">
              <img src={src} alt="Campaign" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content - Centered Layout */}
      <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-center justify-center mt-12 md:mt-20">
        
        {/* CENTER CONTENT */}
        <div className="w-full lg:max-w-[50%] xl:max-w-[48%] flex flex-col items-center">

          <h1
            className="text-[28px] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-black font-sans text-black leading-[1.15] md:leading-[1.1] tracking-tight mb-8 text-center hero-animate-2"
          >
            We scale brands via <br />
            <RotatingText /> <br />
            <span className="text-black inline-block mt-2">with precision media buying.</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 hero-animate-4 w-full">
            <a
              href="#contact"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full font-bold text-[13px] sm:text-[14px] bg-[#FD5800] text-white border-2 border-transparent hover:shadow-[0_0_30px_rgba(253,88,0,0.3)] hover:scale-105 transition-all duration-300 tracking-wide overflow-hidden"
              style={{ animation: 'pulseGlow 3s ease infinite' }}
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Your Campaign
                <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            <a
              href="#case-studies"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full font-bold text-[13px] sm:text-[14px] text-gray-700 border-2 border-black/10 hover:border-[#FD5800]/40 hover:text-[#FD5800] hover:bg-orange-50/50 hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <span>View Case Studies</span>
              <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12 hero-animate-5 w-full">
            {[
              { value: 500, suffix: 'Cr+', label: 'Ad Spend Managed' },
              { value: 120, suffix: '+', label: 'Brands Scaled' },
              { value: 98, suffix: '%', label: 'Client Retention' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group cursor-default">
                <span className="text-[#FD5800] text-3xl md:text-4xl font-black tracking-tighter group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter target={stat.value} />{stat.suffix}
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-gray-500 tracking-wide uppercase mt-1.5">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
