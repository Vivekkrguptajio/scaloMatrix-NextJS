"use client";
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import Process from '@/components/Process'
import TeamMembers from '@/components/TeamMembers'
import ContactUs from '@/components/ContactUs'
import ThePromise from '@/components/ThePromise'
import Contact from '@/components/Contact'
import ScrollReveal from '@/components/ScrollReveal'
import CustomCursor from '@/components/CustomCursor'
import ScrollToTop from '@/components/ScrollToTop'
import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
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
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] pt-24">
        <Hero />
        <ScrollReveal><ServicesGrid /></ScrollReveal>
        <ScrollReveal><Process /></ScrollReveal>
        <ScrollReveal><TeamMembers /></ScrollReveal>
        <ContactUs />
        <ScrollReveal><ThePromise /></ScrollReveal>
      </main>

      <Contact reveal={true} />
    </div>
  )
}
