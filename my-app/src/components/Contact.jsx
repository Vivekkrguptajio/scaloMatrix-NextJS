"use client";
import { useContext, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PortfolioContext } from '../context/PortfolioContext';

export default function Contact({ reveal = false }) {
  const { profileDetails } = useContext(PortfolioContext);
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
    return () => window.removeEventListener('resize', updateHeight);
  }, [reveal]);

  const footerContent = (
    <footer 
      id={reveal ? "contact-footer" : "contact"}
      ref={footerRef}
      className={`w-full bg-[#0a0a0a] text-white pt-24 pb-8 min-h-[90vh] flex flex-col justify-between overflow-hidden font-sans ${reveal ? 'fixed bottom-0 left-0 z-0' : 'relative scroll-mt-24'}`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center h-full w-full flex-grow">
        
        {/* Large Typography Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col justify-center items-center flex-grow mt-10 md:mt-20"
        >
          <h2 className="text-[13vw] md:text-[14.5vw] font-sans font-black tracking-tighter leading-none select-none whitespace-nowrap">
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
            <a href={profileDetails?.socialLinks?.linkedin || '#'} target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href={profileDetails?.socialLinks?.instagram || '#'} target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href={profileDetails?.socialLinks?.youtube || '#'} target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.582 6.186a2.63 2.63 0 0 0-1.854-1.854C18.09 4 12 4 12 4s-6.09 0-7.728.332A2.63 2.63 0 0 0 2.418 6.186C2.086 7.824 2 12 2 12s.086 4.176.418 5.814a2.63 2.63 0 0 0 1.854 1.854C5.91 20 12 20 12 20s6.09 0 7.728-.332a2.63 2.63 0 0 0 1.854-1.854C21.914 16.176 22 12 22 12s-.086-4.176-.418-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href={profileDetails?.socialLinks?.facebook || '#'} target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white">
            <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
            <a href="#work" className="hover:text-gray-400 transition-colors">Case Studies</a>
            <a href="#blog" className="hover:text-gray-400 transition-colors">Blog</a>
            <a href="#privacy" className="hover:text-gray-400 transition-colors">Privacy</a>
          </div>

          {/* Copyright text */}
          <div className="text-center lg:text-right text-white/80 leading-relaxed text-xs md:text-sm">
            <p>Proudly created in India.</p>
            <p>All Right Reserved, All Wrong Reversed.</p>
          </div>

        </div>

        </div>

      </div>
    </footer>
  );

  if (reveal) {
    return (
      <>
        <div id="contact" style={{ height: footerHeight ? footerHeight * 0.8 : '100vh' }} className="w-full relative z-0 pointer-events-none" />
        {footerContent}
      </>
    );
  }

  return footerContent;
}
