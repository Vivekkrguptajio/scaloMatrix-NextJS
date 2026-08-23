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
      lerp: 0.08, 
      wheelMultiplier: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])
  
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        <Hero />
        <div className="pt-20">
          <ScrollReveal><ServicesGrid /></ScrollReveal>
          <ScrollReveal><Process /></ScrollReveal>
          <ScrollReveal><TeamMembers /></ScrollReveal>
          <ContactUs />
          <ScrollReveal><ThePromise /></ScrollReveal>
        </div>
      </main>

      <Contact reveal={true} />
    </div>
  )
}
