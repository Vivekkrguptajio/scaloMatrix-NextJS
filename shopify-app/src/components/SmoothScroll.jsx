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
        lerp: 0.085,
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
      setLenis(null);
      if (lenis) lenis.destroy();
    };
  }, []);

  return children;
}
