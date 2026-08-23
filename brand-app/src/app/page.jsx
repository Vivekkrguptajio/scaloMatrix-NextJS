"use client";
import React, { useEffect, Suspense, lazy } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MarketingNeeds from '@/components/MarketingNeeds'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const Testimonials = lazy(() => import('@/components/Testimonials'))
const ServicesGrid = lazy(() => import('@/components/ServicesGrid'))
const Process = lazy(() => import('@/components/Process'))
const TeamMembers = lazy(() => import('@/components/TeamMembers'))
const ContactUs = lazy(() => import('@/components/ContactUs'))
const ThePromise = lazy(() => import('@/components/ThePromise'))
const FoundersBrands = lazy(() => import('@/components/FoundersBrands'))
const GoodFitChecklist = lazy(() => import('@/components/GoodFitChecklist'))
const Contact = lazy(() => import('@/components/Contact'))
const ScrollReveal = lazy(() => import('@/components/ScrollReveal'))
const CustomCursor = lazy(() => import('@/components/CustomCursor'))
const ScrollToTop = lazy(() => import('@/components/ScrollToTop'))

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.8,
      infinite: false,
      syncTouch: true,
      syncTouchLerp: 0.04,
    })

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
  
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      <Suspense fallback={null}>
        <CustomCursor />
        <ScrollToTop />
      </Suspense>
      <Navbar />
      
      <main className="relative z-20 bg-[#f2efe9] rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <MarketingNeeds />
        
        <Suspense fallback={<div className="w-full h-[50vh] flex items-center justify-center bg-[#f2efe9]"><div className="w-8 h-8 border-4 border-[#FD5800] border-t-transparent rounded-full animate-spin"></div></div>}>
          <ScrollReveal><Testimonials /></ScrollReveal>
          <ScrollReveal><ServicesGrid /></ScrollReveal>
          <ScrollReveal><Process /></ScrollReveal>
          <ScrollReveal><TeamMembers /></ScrollReveal>
          <ScrollReveal><FoundersBrands /></ScrollReveal>
          <ScrollReveal><GoodFitChecklist /></ScrollReveal>
          <ContactUs />
          <ScrollReveal><ThePromise /></ScrollReveal>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Contact reveal={true} />
      </Suspense>
    </div>
  )
}




