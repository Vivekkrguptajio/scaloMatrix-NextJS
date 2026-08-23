"use client";
import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

export default function Navbar({ onOpenModal }) {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const navRef = useRef(null)
  const logoX = useMotionValue(0)
  const logoY = useMotionValue(0)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About', href: '#about' },
    { name: 'Growth Lanes', href: '#services' },
    { name: 'Blueprint', href: '#roadmap' },
    { name: 'Masterclass', href: '#masterclass' },
  ]

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenu])

  // Detect if navbar is over a dark section
  useEffect(() => {
    const checkBackground = () => {
      if (!navRef.current) return
      const navRect = navRef.current.getBoundingClientRect()
      const sampleY = navRect.bottom + 2
      const sampleX = navRect.left + navRect.width / 2

      const elements = document.elementsFromPoint(sampleX, sampleY)

      let dark = false
      for (const el of elements) {
        if (navRef.current.contains(el) || el.closest('header')?.contains(navRef.current)) continue

        const bg = getComputedStyle(el).backgroundColor
        
        const rgbaMatch = bg.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/)
        if (rgbaMatch) {
          const alpha = parseFloat(rgbaMatch[4])
          if (alpha < 0.1) continue
          const [, r, g, b] = rgbaMatch.map(Number)
          if (r < 60 && g < 60 && b < 60) {
            dark = true
            break
          }
          if (alpha > 0.5 && (r > 200 || g > 200 || b > 200)) {
            dark = false
            break
          }
          continue
        }

        const rgbMatch = bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
        if (rgbMatch) {
          const [, r, g, b] = rgbMatch.map(Number)
          if (r < 60 && g < 60 && b < 60) {
            dark = true
            break
          }
          if (r > 200 || g > 200 || b > 200) {
            dark = false
            break
          }
        }
      }
      setIsDark(dark)
    }

    checkBackground()
    window.addEventListener('scroll', checkBackground, { passive: true })
    window.addEventListener('resize', checkBackground, { passive: true })
    return () => {
      window.removeEventListener('scroll', checkBackground)
      window.removeEventListener('resize', checkBackground)
    }
  }, [])

  const handleMouseMove = useCallback((e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    logoX.set((e.clientX - (left + width / 2)) * 0.15)
    logoY.set((e.clientY - (top + height / 2)) * 0.15)
  }, [logoX, logoY])

  const handleMouseLeave = useCallback(() => {
    logoX.set(0)
    logoY.set(0)
  }, [logoX, logoY])

  return (
    <header className="fixed left-0 right-0 z-50 flex justify-center transition-[opacity,transform] duration-700 ease-in-out top-4 px-4">
      <nav
        ref={navRef}
        className={`relative w-full flex flex-col transition-all duration-300 backdrop-blur-2xl backdrop-saturate-200 max-w-7xl border rounded-[32px] ${
          isDark
            ? 'bg-white/5 border-white/10'
            : 'bg-white/20 border-white/30'
        } shadow-[0_10px_30px_rgba(253,88,0,0.15)]`}
      >
        {/* Main Navbar Row */}
        <div className="w-full flex items-center justify-between py-2.5 px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <motion.a 
            href="#hero" 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: logoX, y: logoY }}
            className={`group flex items-center gap-3 font-semibold tracking-tight select-none whitespace-nowrap z-10 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            <span className="text-xl sm:text-2xl font-sans font-black tracking-tight transition-colors duration-300">
              <span className="text-[#FD5800]">scalo</span><span className={isDark ? 'text-white' : 'text-black'}>MATRIX</span>
            </span>
          </motion.a>
          
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-0.5 xl:gap-1 h-full max-w-[50%] overflow-hidden justify-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative h-full flex items-center">
                <a 
                  href={link.href} 
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`flex items-center gap-1.5 text-[12px] xl:text-[13px] font-semibold font-sans tracking-wide transition-colors duration-300 ease-out relative px-2.5 xl:px-3 py-2 rounded-full whitespace-nowrap ${
                    isDark ? 'text-gray-300 hover:bg-[#FD5800]/10 hover:text-[#FD5800]' : 'text-gray-700 hover:bg-[#FD5800]/10 hover:text-[#FD5800]'
                  }`}
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3 z-10">
            <button
              onClick={() => onOpenModal('strategy')}
              className="group flex items-center gap-2 text-xs md:text-sm font-bold px-5 py-2 rounded-full bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors tracking-wide shadow-md shadow-[#FD5800]/20"
            >
              <span>Book Strategy Session</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden flex flex-col gap-1.5 p-2 z-20"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-[calc(100%+12px)] left-4 right-4 rounded-2xl bg-white border border-gray-100 overflow-y-auto overflow-x-hidden transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.15)] origin-top ${
        mobileMenu ? 'max-h-[80vh] opacity-100 py-2 pointer-events-auto scale-y-100' : 'max-h-0 opacity-0 py-0 border-transparent shadow-none pointer-events-none scale-y-95'
      }`}>
        <div className="flex flex-col px-4 py-2 gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  setMobileMenu(false);
                  setTimeout(() => {
                    document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  setMobileMenu(false);
                }
              }}
              className="flex items-center justify-between text-base font-bold px-4 py-2.5 transition-all rounded-xl text-[#FD5800]/80 hover:text-[#FD5800] hover:bg-orange-50/50"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenu(false);
              onOpenModal('strategy');
            }}
            className="w-full mt-3 py-3 rounded-xl bg-[#FD5800] text-white font-bold text-sm text-center shadow-md shadow-[#FD5800]/20 hover:bg-orange-600 transition-colors"
          >
            Book a free strategy session
          </button>
        </div>
      </div>
    </header>
  )
}

