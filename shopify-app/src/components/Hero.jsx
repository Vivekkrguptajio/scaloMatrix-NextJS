"use client";

import { FaShopify } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import { heroData } from '../data/content'

export function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let animationFrameId
    let startTime = null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0)
          startTime = null
          const animate = (now) => {
            if (!startTime) startTime = now
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const currentVal = Math.floor(eased * target)
            setCount(currentVal)
            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }
          animationFrameId = requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.disconnect()
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [target, duration])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

const rotatingWords = heroData.rotatingWords

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
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-block text-[#FD5800] py-1 px-1">
      <span 
        className={`inline-block transition-all duration-400 ${
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
  const storeImages = [
    'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509485/shopify-app/photsWork/Drapes.webp',
    'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509488/shopify-app/photsWork/Nada.webp',
    'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509487/shopify-app/photsWork/Luxury.webp'
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % storeImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [storeImages.length])

  return (
    <section 
      id="hero" 
      className="min-h-[75vh] md:min-h-screen flex flex-col justify-between pt-20 md:pt-28 pb-4 md:pb-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden"
    >
      {/* CSS Animations */}
      <style>{`
        @keyframes float1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(2deg); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(-1.5deg); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(1.5deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 20px rgba(253, 88, 0, 0.15); } 50% { box-shadow: 0 0 40px rgba(253, 88, 0, 0.3); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .hero-animate-1 { animation: slideInLeft 0.8s ease-out both; }
        .hero-animate-2 { animation: slideInLeft 0.8s ease-out 0.15s both; }
        .hero-animate-3 { animation: slideInUp 0.8s ease-out 0.3s both; }
        .hero-animate-4 { animation: slideInUp 0.8s ease-out 0.45s both; }
        .hero-animate-5 { animation: slideInUp 0.8s ease-out 0.6s both; }
        .hero-cards-animate { animation: slideInRight 1s ease-out 0.5s both; }
      `}</style>

      {/* Animated gradient orbs background — hidden on mobile via CSS */}
      <div className="hidden md:block absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#FD5800]/[0.04] to-[#FF9066]/[0.02] blur-3xl pointer-events-none [transform:translateZ(0)] will-change-transform" />
      <div className="hidden md:block absolute bottom-20 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#95BF47]/[0.04] to-[#5a8a00]/[0.02] blur-3xl pointer-events-none [transform:translateZ(0)] will-change-transform" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      {/* Main Content - Two Column Layout on Desktop */}
      <div className="max-w-[1400px] mx-auto w-full relative z-10 mt-4 md:mt-14 md:-translate-y-[15px]">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8 xl:gap-12">
          
          {/* LEFT COLUMN - Text Content */}
          <div className="flex-1 w-full lg:max-w-[58%] xl:max-w-[55%]">
            
            {/* Top Badges */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-5 hero-animate-1">
              <div className="inline-flex items-center gap-2.5 bg-[#f0fdf4] border border-[#95BF47]/30 text-[#5a8a00] text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
                <FaShopify className="w-4 h-4 text-[#95BF47]" />
                <span>{heroData.badge}</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 bg-orange-50 border border-[#FD5800]/20 text-[#FD5800] text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
                <span className="w-2 h-2 rounded-full bg-[#FD5800] animate-pulse" />
                <span>{heroData.badge2}</span>
              </div>
            </div>

            {/* Main Heading with Rotating Text */}
            <h1 
              className="text-[18px] sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[42px] font-black font-sans text-black leading-[1.25] md:leading-[1.15] tracking-tight mb-3 md:mb-5 text-center md:text-left hero-animate-2"
            >
              We build <RotatingText />
              <span className="block mt-1 md:mt-2" />
              <span className="text-black">{heroData.headlineSuffix}</span>
            </h1>

            {/* Sub Heading */}
            <p 
              className="text-[13px] sm:text-[15px] md:text-base text-[#555] font-medium max-w-[620px] leading-relaxed mb-4 md:mb-7 text-center md:text-left mx-auto md:mx-0 hero-animate-3"
              dangerouslySetInnerHTML={{ __html: heroData.description }}
            />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-3 mb-7 hero-animate-4">
              <a 
                href="#contact" 
                className="group relative flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 sm:py-2 rounded-full font-bold text-[12px] sm:text-[13px] bg-[#FD5800] text-white border-2 border-transparent hover:shadow-[0_0_30px_rgba(253,88,0,0.3)] hover:scale-105 transition-all duration-300 tracking-wide overflow-hidden"
                style={{ animation: 'pulseGlow 3s ease infinite' }}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <FaShopify className="w-5 h-5" />
                  Get your Shopify store
                  <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="#math" 
                className="group flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 sm:py-2 rounded-full font-bold text-[12px] sm:text-[13px] text-gray-700 border-2 border-black/10 hover:border-[#FD5800]/40 hover:text-[#FD5800] hover:bg-orange-50/50 hover:scale-105 hover:shadow-md transition-all duration-300"
              >
                <span>See our work</span>
                <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 lg:gap-7 hero-animate-5">
              {heroData.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start group cursor-default">
                  <span className="text-[#FD5800] text-2xl md:text-3xl font-black tracking-tighter group-hover:scale-110 transition-transform duration-300">
                    {stat.prefix}<AnimatedCounter target={stat.value} />{stat.suffix}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-500 tracking-wide uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Floating Store Previews (Coverflow Carousel) */}
          <div className="flex-1 w-full lg:max-w-[45%] xl:max-w-[48%] relative hidden lg:flex items-center justify-center hero-cards-animate overflow-visible p-2" style={{ minHeight: '440px' }}>
            
            {storeImages.map((src, idx) => {
              // Calculate position based on activeIndex
              // activeIndex is front (0), (activeIndex + 1)%3 is right (1), (activeIndex + 2)%3 is left (2)
              // We want to move right to left, so if active changes 0->1, 1 moves from right to center.
              const position = (idx - activeIndex + 3) % 3;
              
              let translateX = '0%';
              let scale = 1;
              let zIndex = 20;
              let opacity = 1;
              let rotate = '0deg';

              if (position === 0) {
                // Center
                translateX = '0%';
                scale = 1;
                zIndex = 30;
                opacity = 1;
                rotate = '0deg';
              } else if (position === 1) {
                // Right
                translateX = '45%';
                scale = 0.85;
                zIndex = 10;
                opacity = 0.7;
                rotate = '4deg';
              } else if (position === 2) {
                // Left
                translateX = '-45%';
                scale = 0.85;
                zIndex = 10;
                opacity = 0.7;
                rotate = '-4deg';
              }

              return (
                <div 
                  key={idx}
                  className="absolute w-[280px] xl:w-[340px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${translateX}) scale(${scale}) rotate(${rotate})`,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                >
                  <div className="relative">
                    <img src={src} alt="Shopify Store Preview" className="w-full h-[380px] xl:h-[460px] object-cover object-top" />
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#95BF47] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                        <FaShopify className="w-3 h-3" />
                        Shopify Store
                      </div>
                    </div>
                    {position === 0 && (
                      <div className="absolute bottom-3 right-3 animate-pulse">
                        <div className="bg-[#FD5800] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg">
                          +44% CVR ↑
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

          </div>

        </div>


      </div>
    </section>
  )
}
