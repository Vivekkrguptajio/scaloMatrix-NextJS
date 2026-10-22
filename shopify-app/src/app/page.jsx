"use client";
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { ScrollProgressBar } from '../components/ScrollReveal'
import HeroVCards from '../components/HeroVCards'
import ScrollReveal from '../components/ScrollReveal'
import CustomCursor from '../components/CustomCursor'
import ScrollToTop from '../components/ScrollToTop'
import WhatsAppButton from '../components/WhatsAppButton'
import SmoothScroll from '../components/SmoothScroll'
import Faq from '../components/Faq'
import Loader from '../components/Loader'

// Dynamic imports for below-the-fold components — reduces initial JS bundle by ~60-70%
const HappyClients = dynamic(() => import('../components/HappyClients'))
const CaseStudiesGrid = dynamic(() => import('../components/CaseStudiesGrid'))
const Calculator = dynamic(() => import('../components/Calculator'))
const CroBrandExercise = dynamic(() => import('../components/CroBrandExercise'))
const WhoWeDontWorkWith = dynamic(() => import('../components/WhoWeDontWorkWith'))
const ContactUs = dynamic(() => import('../components/ContactUs'))
const ThePromise = dynamic(() => import('../components/ThePromise'))
const Contact = dynamic(() => import('../components/Contact'))
const ServicesAndPricing = dynamic(() => import('../components/ServicesAndPricing'))

function App() {
  return (
    <SmoothScroll>
    <Loader />
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      <ScrollProgressBar />
      <CustomCursor />
      <ScrollToTop />
      <WhatsAppButton />
      <Navbar />
      
      <main className="relative z-20 bg-cream rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <HeroVCards />

        <ScrollReveal variant="scaleUp"><HappyClients /></ScrollReveal>
        <ScrollReveal variant="scaleUp"><CaseStudiesGrid /></ScrollReveal>
        <ScrollReveal><Calculator /></ScrollReveal>
        <ScrollReveal variant="blur"><CroBrandExercise /></ScrollReveal>
        <ScrollReveal><WhoWeDontWorkWith /></ScrollReveal>
        <ScrollReveal variant="scaleUp"><ServicesAndPricing /></ScrollReveal>
        <ScrollReveal variant="blur"><ThePromise /></ScrollReveal>
        <ContactUs />
        <Faq />
      </main>

      <Contact reveal={true} />
    </div>
    </SmoothScroll>
  )
}

export default function Page() { return <App /> }