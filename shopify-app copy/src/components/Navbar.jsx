"use client";
import { useState, useCallback, useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'
import { scrollToId } from '../utils/smoothScroll'

// On other pages the section isn't there: go to the home page section instead
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
      root.classList.add('theme-switching')
      apply()
      void root.offsetHeight
      requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switching')))
      return
    }

    const r = e.currentTarget.getBoundingClientRect()
    const x = r.left + r.width / 2
    const y = r.top + r.height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    root.classList.add('theme-switching')
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
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Results', href: '#results' },
    { name: 'FAQ', href: '#faq' },
  ]

  useEffect(() => {
    const map = [
      ['how-it-works', 'How it works'],
      ['results', 'Results'],
      ['faq', 'FAQ'],
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

  useEffect(() => {
    let ticking = false;
    const checkDark = () => {
      const mainEl = document.querySelector('main');
      if (!mainEl) return;
      const mainBottom = mainEl.getBoundingClientRect().bottom;
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

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const curY = window.scrollY
      if (curY > 100) {
        setHidden(curY > lastY && curY - lastY > 4)
      } else {
        setHidden(false)
      }
      lastY = curY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 sm:px-6 md:px-8 pt-4 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav 
        aria-label="Main"
        className={`w-full max-w-7xl h-[64px] border px-4 sm:px-6 flex items-center justify-between transition-colors duration-500 ${
          isDark 
            ? 'bg-[#141210]/90 border-white/10 text-white backdrop-blur-md' 
            : 'bg-[#FAF8F5]/90 border-[#E7E0D4] text-[#141210] backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          
        {/* Brand Wordmark with magnetic bounce */}
        <motion.a 
          href="/" 
          style={{ x: logoX, y: logoY }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect()
            logoX.set((e.clientX - (r.left + r.width / 2)) * 0.15)
            logoY.set((e.clientY - (r.top + r.height / 2)) * 0.15)
          }}
          onMouseLeave={() => { logoX.set(0); logoY.set(0) }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="relative z-20 flex items-center group cursor-pointer"
        >
          <span className="font-display font-black text-[22px] tracking-[-0.03em] uppercase transition-colors">
            <span className="text-[#FD5800]">scalo</span>
            <span className={isDark ? 'text-white' : 'text-ink'}>MATRIX</span>
          </span>
          <span className="hidden sm:inline-block ml-2 text-[10px] font-mono tracking-wider px-1.5 py-0.5 bg-brand-soft text-brand-text font-bold">
            D2C
          </span>
        </motion.a>

        {/* Desktop Links with active indicator */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  goTo(link.href.substring(1))
                }}
                className={`relative px-4 py-2 text-[13.5px] font-medium tracking-[-0.01em] transition-colors ${
                  isDark ? 'hover:text-white' : 'hover:text-ink'
                } ${isActive ? 'text-[#FD5800]' : isDark ? 'text-white/70' : 'text-muted'}`}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavSquare" 
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FD5800]" 
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }} 
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          {ThemeToggle}
          
          <a 
            href="#lead-form" 
            onClick={(e) => {
              e.preventDefault()
              goTo('lead-form')
            }}
            className="btn-slide group flex items-center gap-2 text-[13.5px] font-semibold px-5 h-[40px] text-white bg-brand border border-brand hover:border-ink"
          >
            <span>Get a call back</span>
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        {/* Mobile: theme + menu */}
        <div className="lg:hidden flex items-center gap-1 z-20">
          {ThemeToggle}
          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-3 z-20 min-w-[44px] min-h-[44px] items-center justify-center active:scale-90 transition-transform duration-150"
          >
            <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
            <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
          </button>
        </div>

        </div>
      </nav>
    </header>

    {/* Mobile menu sheet */}
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
            href="#lead-form"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenu(false);
              setTimeout(() => {
                goTo('lead-form');
              }, 150);
            }}
            className="btn-primary w-full !py-4 !text-base"
          >
            Get a call back
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
