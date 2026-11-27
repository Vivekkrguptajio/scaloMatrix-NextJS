"use client";
import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { scrollToId } from '../utils/smoothScroll';
import { whatsappUrl } from './WhatsAppButton';

const PHONE = '919217728977';

// Mobile sticky bar pinned to the bottom of the screen: Book my free call, Call and WhatsApp.
// Appears once you scroll past the hero and tucks away while the contact form/footer is visible.
export default function StickyAudit() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let atContact = false;
    let ticking = false;
    const update = () => { ticking = false; setShow(window.scrollY > 400 && !atContact); };
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
    <div
      role="region"
      aria-label="Quick contact"
      aria-hidden={!show}
      className={`sm:hidden fixed inset-x-0 bottom-0 z-[90] border-t border-ink/15 bg-paper/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(20,18,16,0.10)] backdrop-blur-md transition-[opacity,transform] duration-300 ${
        show ? 'opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-[480px] items-center gap-2">
        <a
          href="#lead-form"
          onClick={(e) => { e.preventDefault(); scrollToId('lead-form'); }}
          tabIndex={show ? 0 : -1}
          className="btn-primary inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-[10px] px-3 text-[13.5px] font-semibold text-white"
        >
          Book my free call
        </a>
        <a
          href={`tel:+${PHONE}`}
          data-track-location="mobile-bar"
          tabIndex={show ? 0 : -1}
          aria-label="Call us"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-ink bg-paper text-ink transition-colors hover:bg-cream"
        >
          <FaPhoneAlt className="h-4 w-4" />
        </a>
        <a
          href={whatsappUrl}
          data-track-location="mobile-bar"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          aria-label="Chat with us on WhatsApp"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-[#25D366] text-white transition-[filter] hover:brightness-105"
        >
          <FaWhatsapp className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
