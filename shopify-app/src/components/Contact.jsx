"use client";
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappUrl } from './WhatsAppButton';

export default function Contact({ reveal = false }) {
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (!reveal) return;
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    // fonts/layout can change the footer height after first paint
    const ro = new ResizeObserver(updateHeight);
    if (footerRef.current) ro.observe(footerRef.current);
    return () => {
      window.removeEventListener('resize', updateHeight);
      ro.disconnect();
    };
  }, [reveal]);

  const footerContent = (
    <footer 
      id={reveal ? "contact-footer" : "contact"}
      ref={footerRef}
      className={`w-full bg-panel text-white pt-12 md:pt-16 pb-6 md:pb-8 flex flex-col justify-between overflow-hidden font-sans ${reveal ? 'fixed bottom-0 left-0 z-0' : 'relative scroll-mt-24'}`}
    >
      <div className="container-x flex flex-col items-center h-full flex-grow">
        
        {/* Large Typography Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col justify-center items-center flex-grow mt-4 md:mt-8 mb-10 md:mb-14"
        >
          <h2 className="text-[11vw] sm:text-[13vw] md:text-[min(14.5vw,13.5rem)] font-display font-extrabold tracking-[-0.05em] leading-none select-none whitespace-nowrap">
            <span className="text-[#FD5800]">scalo</span>
            <span className="text-white">MATRIX</span>
          </h2>
        </motion.div>

        {/* Bottom Section Wrapper */}
        <div className="w-full mt-auto">
          {/* Divider */}
          <div className="w-full h-px bg-white/20 mb-8 md:mb-10"></div>

        {/* Bottom Row */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 text-sm font-medium">
          
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-[#25D366] transition-colors">
              <FaWhatsapp className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/scalomatrix/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.youtube.com/@scalomatrix" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-brand transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.582 6.186a2.63 2.63 0 0 0-1.854-1.854C18.09 4 12 4 12 4s-6.09 0-7.728.332A2.63 2.63 0 0 0 2.418 6.186C2.086 7.824 2 12 2 12s.086 4.176.418 5.814a2.63 2.63 0 0 0 1.854 1.854C5.91 20 12 20 12 20s6.09 0 7.728-.332a2.63 2.63 0 0 0 1.854-1.854C21.914 16.176 22 12 22 12s-.086-4.176-.418-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-white text-xs md:text-sm">
            <Link href="/terms" className="hover:text-brand transition-colors">Terms &amp; Conditions</Link>
            <span className="text-white/40">•</span>
            <Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link>
            <span className="text-white/40">•</span>
            <Link href="/legal" className="hover:text-brand transition-colors">Legal &amp; Policies</Link>
          </div>

          {/* Copyright text */}
          <div className="text-center lg:text-right lg:pr-16 text-white/80 leading-relaxed text-xs md:text-sm">
            <p>Proudly created in India.</p>
            <p>All Right Reserved, All Wrong Reversed.</p>
            <p className="mt-2 text-white/50">Powered by <span className="text-white/70 font-semibold">Kraffic Enterprises</span></p>
          </div>

        </div>

        </div>

      </div>
    </footer>
  );

  if (reveal) {
    return (
      <>
        <div id="footer-spacer" style={{ height: footerHeight || '100vh' }} className="w-full relative z-0 pointer-events-none" />
        {footerContent}
      </>
    );
  }

  return footerContent;
}
