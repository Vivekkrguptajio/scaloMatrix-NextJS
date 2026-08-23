"use client";
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { ScrollProgressBar } from '../components/ScrollReveal'
import SkeletonLoader from '../components/SkeletonLoader'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

import FeaturedCaseStudy from '../components/FeaturedCaseStudy'
import HappyClients from '../components/HappyClients'
import HeroVCards from '../components/HeroVCards'
import CaseStudiesGrid from '../components/CaseStudiesGrid'
import Calculator from '../components/Calculator'
import AiManifesto from '../components/AiManifesto'
import CroBrandExercise from '../components/CroBrandExercise'

import HiringPhilosophy from '../components/HiringPhilosophy'
import WhoWeDontWorkWith from '../components/WhoWeDontWorkWith'
import TeamMembers from '../components/TeamMembers'
import ContactUs from '../components/ContactUs'
import ThePromise from '../components/ThePromise'
import Offers from '../components/Offers'
import Contact from '../components/Contact'
import ScrollReveal from '../components/ScrollReveal'
import CustomCursor from '../components/CustomCursor'
import ScrollToTop from '../components/ScrollToTop'

function App() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    
    // On mobile, native scrolling is perfectly hardware-accelerated and smooth.
    // Hijacking it with JS often causes jank. So we disable Lenis on mobile.
    if (isMobile) {
      document.documentElement.classList.add('mobile-native-scroll');
      return;
    }

    const lenis = new Lenis({
      lerp: 0.06,
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
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
      <ScrollProgressBar />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <HeroVCards />
        
        <ScrollReveal><FeaturedCaseStudy /></ScrollReveal>
        <ScrollReveal variant="scaleUp"><HappyClients /></ScrollReveal>

        <ScrollReveal variant="scaleUp"><CaseStudiesGrid /></ScrollReveal>
        <ScrollReveal><Calculator /></ScrollReveal>
        <ScrollReveal variant="scaleUp"><Offers /></ScrollReveal>
        <ScrollReveal><AiManifesto /></ScrollReveal>
        <ScrollReveal variant="blur"><CroBrandExercise /></ScrollReveal>

        <ScrollReveal><HiringPhilosophy /></ScrollReveal>
        <ScrollReveal><WhoWeDontWorkWith /></ScrollReveal>
        <ScrollReveal><TeamMembers /></ScrollReveal>
        <ContactUs />
        <ScrollReveal variant="blur"><ThePromise /></ScrollReveal>
      </main>

      <Contact reveal={true} />
    </div>
  )
}

export default function Page() { return <App /> }