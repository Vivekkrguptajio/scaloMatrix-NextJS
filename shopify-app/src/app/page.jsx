"use client";
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { ScrollProgressBar } from '../components/ScrollReveal'
import HeroVCards from '../components/HeroVCards'
import ScrollReveal from '../components/ScrollReveal'
import CustomCursor from '../components/CustomCursor'
import ScrollToTop from '../components/ScrollToTop'

// Dynamic imports for below-the-fold components — reduces initial JS bundle by ~60-70%
const HappyClients = dynamic(() => import('../components/HappyClients'), { ssr: false })
const CaseStudiesGrid = dynamic(() => import('../components/CaseStudiesGrid'), { ssr: false })
const Calculator = dynamic(() => import('../components/Calculator'), { ssr: false })
const AiManifesto = dynamic(() => import('../components/AiManifesto'), { ssr: false })
const CroBrandExercise = dynamic(() => import('../components/CroBrandExercise'), { ssr: false })
const HiringPhilosophy = dynamic(() => import('../components/HiringPhilosophy'), { ssr: false })
const WhoWeDontWorkWith = dynamic(() => import('../components/WhoWeDontWorkWith'), { ssr: false })
const TeamMembers = dynamic(() => import('../components/TeamMembers'), { ssr: false })
const ContactUs = dynamic(() => import('../components/ContactUs'), { ssr: false })
const ThePromise = dynamic(() => import('../components/ThePromise'), { ssr: false })
const Offers = dynamic(() => import('../components/Offers'), { ssr: false })
const Contact = dynamic(() => import('../components/Contact'), { ssr: false })

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      <ScrollProgressBar />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <HeroVCards />
        
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