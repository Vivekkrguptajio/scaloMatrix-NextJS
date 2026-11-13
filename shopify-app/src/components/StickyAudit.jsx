"use client";
import { useEffect, useState } from 'react';
import { scrollToId } from '../utils/smoothScroll';

// Small "Book a free audit" pill pinned to the bottom-centre of the screen.
// Appears once you scroll past the hero and tucks away while the contact form / footer is on screen.
export default function StickyAudit() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let atContact = false;
    let ticking = false;
    const update = () => { ticking = false; setShow(window.scrollY > 500 && !atContact); };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };

    const targets = ['contact', 'footer-spacer'].map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { e.target.__in = e.isIntersecting; });
      atContact = targets.some((t) => t.__in);
      onScroll();
    }, { threshold: 0.15 });
    targets.forEach((t) => io.observe(t));

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);

  return (
    <a
      href="#contact"
      onClick={(e) => { e.preventDefault(); scrollToId('contact'); }}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`sm:hidden btn-slide group fixed bottom-4 left-1/2 z-[90] -translate-x-1/2 flex items-center gap-1.5 h-[30px] px-3.5 bg-brand text-white border border-brand hover:border-ink text-[11px] font-semibold whitespace-nowrap transition-[opacity,transform] duration-300 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-3'}`}
    >
      <span>Book a free audit</span>
      <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  )
}
