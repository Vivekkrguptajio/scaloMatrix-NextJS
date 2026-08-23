"use client";
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false)
  const activeSection = 'about'

  // Monitor Scroll
  useEffect(() => {
    window.scrollTo(0, 0);
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-white overflow-x-clip font-sans">
      
      {/* ═══════ NAVBAR ═══════ */}
      <Navbar scrolled={scrolled} activeSection={activeSection} loading={false} />

      {/* ═══════ MAIN CONTENT ═══════ */}
      <main className="relative z-10 bg-white pt-[2.2%]">
        {/* Image removed because asset is missing */}
        <Contact reveal={true} />
      </main>
    </div>
  )
}
