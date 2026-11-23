"use client";
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
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
    const ro = new ResizeObserver(updateHeight);
    if (footerRef.current) ro.observe(footerRef.current);
    return () => {
      window.removeEventListener('resize', updateHeight);
      ro.disconnect();
    };
  }, [reveal]);

  const footerContent = (
    <footer 
      id={reveal ? "contact-footer" : "footer"}
      ref={footerRef}
      className={`w-full bg-panel text-white pt-12 md:pt-16 pb-8 md:pb-10 flex flex-col justify-between overflow-hidden font-sans ${
        reveal ? 'fixed bottom-0 left-0 z-0' : 'relative scroll-mt-24'
      }`}
    >
      <div className="container-x flex flex-col items-center h-full flex-grow">
        
        {/* Large Typography Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col justify-center items-center flex-grow mt-4 md:mt-8 mb-8 md:mb-12"
        >
          <h2 className="text-[11vw] sm:text-[13vw] md:text-[min(14.5vw,13.5rem)] font-display font-extrabold tracking-[-0.05em] leading-none select-none whitespace-nowrap">
            <span className="text-[#FD5800]">scalo</span>
            <span className="text-white">MATRIX</span>
          </h2>
          <p className="font-mono text-[12px] sm:text-[13px] tracking-[0.16em] uppercase text-white/60 mt-2">
            D2C Brand Building For Manufacturers &amp; Sellers
          </p>
        </motion.div>

        {/* Dedicated Shopify Development link banner */}
        <div className="w-full mb-8 py-3.5 px-4 bg-white/5 border border-white/10 text-center">
          <p className="text-xs sm:text-sm text-white/80">
            Looking for custom Shopify store coding or theme redesign?{' '}
            <a
              href="https://shopify.scalomatrix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FD5800] font-semibold underline hover:text-white transition-colors ml-1"
            >
              Custom Shopify development → shopify.scalomatrix.com
            </a>
          </p>
        </div>

        {/* Bottom Section Wrapper */}
        <div className="w-full mt-auto">
          {/* Divider */}
          <div className="w-full h-px bg-white/15 mb-8"></div>

          {/* Social Icons & Contact Links */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 text-sm font-medium mb-6">
            <div className="flex items-center gap-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#25D366] transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/scalomatrix/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-brand transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@scalomatrix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-brand transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>

            {/* Legal Navigation Links */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-white/80 text-xs md:text-sm">
              <Link href="/terms" className="hover:text-brand transition-colors">
                Terms &amp; Conditions
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/refund-policy" className="hover:text-brand transition-colors">
                Refund &amp; Cancellation
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/privacy" className="hover:text-brand transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/legal" className="hover:text-brand transition-colors">
                Legal &amp; Policies
              </Link>
            </div>
          </div>

          {/* Business & Operator attribution */}
          <div className="w-full pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60 text-center sm:text-left">
            <p>
              Operated by <strong className="text-white/90">Kraffic Enterprises</strong> · Patel Nagar, Delhi 110008 ·{' '}
              <a href="mailto:info@krafficgroup.com" className="hover:text-white transition-colors">
                info@krafficgroup.com
              </a>{' '}
              ·{' '}
              <a href="tel:+919217728977" className="hover:text-white transition-colors">
                +91 92177 28977
              </a>
            </p>
            <p>© {new Date().getFullYear()} scaloMATRIX. Proudly created in India.</p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <>
      {reveal && (
        <div 
          id="footer-spacer"
          style={{ height: footerHeight ? `${footerHeight}px` : 'auto' }} 
          className="w-full pointer-events-none transition-[height] duration-150"
          aria-hidden="true" 
        />
      )}
      {footerContent}
    </>
  );
}
