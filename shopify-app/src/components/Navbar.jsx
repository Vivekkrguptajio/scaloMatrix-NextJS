"use client";
import { useState, useCallback, useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'
import { scrollToId } from '../utils/smoothScroll'

// On other pages (e.g. /answer) the section isn't there: go to the home page section instead
const goTo = (id) => {
  if (document.getElementById(id)) scrollToId(id)
  else window.location.href = `/#${id}`
}
import { motion, useMotionValue } from 'framer-motion'

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const navRef = useRef(null)
  const [hidden, setHidden] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light')
  }, [])

  const toggleTheme = (e) => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    const apply = () => {
      flushSync(() => setTheme(next))
      if (next === 'dark') root.setAttribute('data-theme', 'dark')
      else root.removeAttribute('data-theme')
      try { localStorage.setItem('theme-v3', next) } catch (err) {}
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduce) {
      // No circular-reveal support: switch in one go
      root.classList.add('theme-switching')
      apply()
      void root.offsetHeight
      requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switching')))
      return
    }

    // New theme spreads out as a growing circle from the toggle button
    const r = e.currentTarget.getBoundingClientRect()
    const x = r.left + r.width / 2
    const y = r.top + r.height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    root.classList.add('theme-switching') // keep per-element fades off so the reveal edge is clean
    const t = document.startViewTransition(apply)
    t.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 600, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' }
      )
    }).catch(() => {})
    t.finished.finally(() => root.classList.remove('theme-switching'))
  }

  const ThemeToggle = (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`w-[40px] h-[40px] shrink-0 border flex items-center justify-center transition-colors hover:border-[#FD5800] hover:text-[#FD5800] ${isDark ? 'border-white/20 text-white' : 'border-line text-ink'}`}
    >
      {theme === 'dark' ? (
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
      ) : (
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
      )}
    </button>
  )
  const logoX = useMotionValue(0)
  const logoY = useMotionValue(0)

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Why CRO', href: '#why-cro' },
    { name: 'Our approach', href: '#approach' },
    { name: 'Brand', href: '#case-studies' },   // "Real stores. Real numbers."
    { name: 'Pricing', href: '#services' },
  ]

  // Scroll-spy: the orange square follows the section that is on screen.
  // Every section on the page maps to the nav link it belongs to (Brand = Real stores. Real numbers.).
  useEffect(() => {
    const map = [
      ['work', 'Work'], ['case-studies', 'Brand'],
      ['why-cro', 'Why CRO'], ['approach', 'Our approach'],
      ['services', 'Pricing'],
    ]
    let ticking = false
    const update = () => {
      ticking = false
      const line = window.innerHeight * 0.35
      let found = null
      for (const [id, name] of map) {
        const el = document.getElementById(id)
        if (!el) continue
        const r = el.getBoundingClientRect()
        if (r.top <= line && r.bottom > line) { found = name; break }
      }
      setActiveLink(found)
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

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

  // Detect if navbar is over the dark footer section — high performance, 0 layout thrashing
  useEffect(() => {
    let ticking = false;
    const checkDark = () => {
      const mainEl = document.querySelector('main');
      if (!mainEl) return;
      const mainBottom = mainEl.getBoundingClientRect().bottom;
      // If the white main section has scrolled above the navbar height (~80px)
      setIsDark(mainBottom <= 80);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(checkDark);
      }
    };

    checkDark();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Phone: hide the bar while scrolling down, bring it back on scroll up
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const dy = y - lastY
      if (y < 80) setHidden(false)
      else if (dy > 6) setHidden(true)
      else if (dy < -6) setHidden(false)
      if (Math.abs(dy) > 6) lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseMove = useCallback((e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    logoX.set((e.clientX - (left + width / 2)) * 0.2)
    logoY.set((e.clientY - (top + height / 2)) * 0.2)
  }, [logoX, logoY])

  const handleMouseLeave = useCallback(() => {
    logoX.set(0)
    logoY.set(0)
  }, [logoX, logoY])

  return (
    <>
    <header className={`fixed left-[var(--m)] right-[var(--m)] z-50 flex justify-center transition-[opacity,transform] duration-300 ease-out top-0 ${hidden && !mobileMenu ? '-translate-y-[140%] lg:translate-y-0' : 'translate-y-0'}`}>
      <nav
        ref={navRef}
        className={`relative z-10 w-full flex flex-col transition-all duration-300 backdrop-blur-md backdrop-saturate-200 border-b ${
          isDark
            ? 'bg-paper/5 border-white/10'
            : 'bg-paper/70 border-line'
        }`}
      >
        {/* Main Navbar Row */}
        <div className="w-full flex items-center justify-between py-[12.5px] px-[10px] sm:px-[24px]">
        {/* Logo */}
        <motion.a 
          href="/"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: logoX, y: logoY }}
          className={`group flex items-center gap-3 font-semibold tracking-tight select-none whitespace-nowrap z-10 ${isDark ? 'text-white' : 'text-ink'}`}
        >
          <span className="text-[1.65rem] md:text-[1.85rem] font-display font-extrabold transition-colors duration-300 tracking-tight">
            <span className="text-[#FD5800]">scalo</span>
            <span className={isDark ? 'text-white' : 'text-ink'}>MATRIX</span>
          </span>
        </motion.a>
        
        {/* Contact Button (Right Side) */}
        <div className="hidden lg:flex items-center gap-3 z-10">
          {/* Desktop Nav Links (right side, next to the theme toggle + CTA) */}
          <div className="flex items-center gap-1 h-full mr-3">
            {navLinks.map((link) => (
              <div key={link.name} className="relative h-full flex items-center">
                <a 
                  href={link.href} 
                  onClick={(e) => {
                    setActiveLink(link.name)
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      goTo(link.href.substring(1));
                    }
                  }}
                  className={`nav-link flex items-center gap-1.5 text-[16px] font-medium font-sans transition-colors duration-300 ease-out relative px-3 py-2 ${
                    isDark ? 'text-white hover:text-[#FD5800]' : 'text-ink hover:text-[#FD5800]'
                  }`}
                >
                  {link.name}
                  {/* orange square under the link that was clicked */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-1/2 -bottom-[3px] w-[6px] h-[6px] -translate-x-1/2 bg-[#FD5800] transition-all duration-300 ${activeLink === link.name ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                  />
                </a>
              </div>
            ))}
          </div>
          {ThemeToggle}
          <a 
            href="#contact" 
            className="btn-slide group flex items-center gap-2 text-[14px] font-semibold px-5 h-[40px] text-white bg-brand border border-brand hover:border-ink"
          >
            <span>Book a free audit</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        {/* Mobile: theme + menu */}
        <div className="lg:hidden flex items-center gap-1 z-20">
        {ThemeToggle}
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex flex-col gap-1.5 p-3 z-20 min-w-[44px] min-h-[44px] items-center justify-center active:scale-90 transition-transform duration-150"
        >
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
        </button>
        </div>

        </div> {/* End Main Navbar Row */}

      </nav>

    </header>

      {/* Mobile menu — full-screen sheet. Lives OUTSIDE <header>: the header carries a
          transform (hide-on-scroll), which would turn this fixed layer into a header-sized box. */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-paper transition-opacity duration-300 ${
          mobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenu}
      >
        <div className="absolute -top-24 -right-24 w-[272px] h-[272px] bg-brand/[0.12] blur-3xl pointer-events-none" />

        <div data-lenis-prevent className="relative h-full flex flex-col px-6 pt-28 pb-8 overflow-y-auto">
          <p className="eyebrow mb-4">Menu</p>

          <nav className="flex flex-col">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenu(false);
                  setTimeout(() => {
                    goTo(link.href.substring(1));
                  }, 150);
                }}
                style={{ transitionDelay: mobileMenu ? `${100 + i * 70}ms` : '0ms' }}
                className={`group flex items-center gap-4 py-5 border-b border-line transition-all duration-500 ${
                  mobileMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="font-mono text-xs text-brand-text w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="h-display text-[2rem] flex-1 group-active:text-brand">{link.name}</span>
                <svg className="w-5 h-5 text-muted group-active:text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            ))}
          </nav>

          <div
            style={{ transitionDelay: mobileMenu ? `${100 + navLinks.length * 70}ms` : '0ms' }}
            className={`mt-auto pt-8 flex flex-col gap-5 transition-all duration-500 ${
              mobileMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenu(false);
                setTimeout(() => {
                  goTo('contact');
                }, 150);
              }}
              className="btn-primary w-full !py-4 !text-base"
            >
              Book a free audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <div className="flex flex-col gap-1.5 text-sm">
              <a href="mailto:info@krafficgroup.com" className="text-muted">info@krafficgroup.com</a>
              <a href="tel:+919217728977" className="text-muted">+91 92177 28977</a>
              <a href="https://wa.me/919217728977" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium">WhatsApp us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
