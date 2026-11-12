"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';
import { scrollToId, setLenis } from '../utils/smoothScroll';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Apple-style inertial scrolling: the page glides toward the wheel position and
    // eases to a stop, instead of jumping in steps. Touch keeps native momentum.
    let lenis = null;
    let raf = 0;
    if (!reduce) {
      lenis = new Lenis({
        lerp: 0.12,
        wheelMultiplier: 0.95,
        smoothWheel: true,
      });
      setLenis(lenis);
      const loop = (time) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    // Scroll-in effect: headings, intro text and cards fade up one after another as they
    // enter the screen. Anything already on screen (or inside a marquee) is left alone.
    const SEL = [
      '.page-frame h2', '.page-frame .lead', '.page-frame article', '.page-frame details',
      '.page-frame .partner-cell', '.page-frame dl > div', '.page-frame section figure',
    ].join(',');
    const seen = new WeakSet();
    let io = null;
    if (!reduce && 'IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target;
          io.unobserve(el);
          const sibs = el.parentElement ? [...el.parentElement.children].filter((c) => c.classList.contains('rv')) : [];
          const i = Math.max(0, sibs.indexOf(el));
          el.style.transitionDelay = `${Math.min(i, 6) * 130}ms`;
          requestAnimationFrame(() => el.classList.add('rv-in'));
          setTimeout(() => {
            el.classList.remove('rv', 'rv-in');
            el.style.transitionDelay = '';
          }, 2000 + Math.min(i, 6) * 130);
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    }
    const scan = () => {
      if (!io) return;
      document.querySelectorAll(SEL).forEach((el) => {
        if (seen.has(el) || el.closest('.scrollbar-hide, #hero')) return;
        seen.add(el);
        if (el.getBoundingClientRect().top < window.innerHeight) return; // already visible
        el.classList.add('rv');
        io.observe(el);
      });
    };
    scan();
    const mo = new MutationObserver(() => { clearTimeout(mo.t); mo.t = setTimeout(scan, 120); });
    mo.observe(document.body, { childList: true, subtree: true });

    // Anchor links (#id) glide to their section
    const handleAnchorClick = (e) => {
      if (e.defaultPrevented) return; // a component already handled this click
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href').substring(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      scrollToId(id);
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(raf);
      mo.disconnect();
      if (io) io.disconnect();
      setLenis(null);
      if (lenis) lenis.destroy();
    };
  }, []);

  return children;
}
