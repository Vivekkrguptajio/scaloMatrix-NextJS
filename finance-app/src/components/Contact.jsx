"use client";
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    return () => window.removeEventListener('resize', updateHeight);
  }, [reveal]);

  const footerContent = (
    <footer 
      id={reveal ? "contact-footer" : "contact"}
      ref={footerRef}
      className={`w-full bg-[#0a0a0a] text-white pt-24 pb-12 min-h-[70vh] flex flex-col justify-between font-sans ${reveal ? 'fixed bottom-0 left-0 z-0' : 'relative scroll-mt-24'}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col h-full flex-grow">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 flex-grow">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
              scalo<span className="text-[#FD5800]">MATRIX</span>
            </h2>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              We engineer financial growth through precise design, data, and strategy.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors font-medium">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors font-medium">Capabilities</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-white transition-colors font-medium">Case Studies</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Connect</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">LinkedIn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">Instagram</a></li>
              <li><a href="mailto:hello@scalo.com" className="text-gray-300 hover:text-white transition-colors font-medium">hello@scalo.com</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="w-full mt-auto">
          <div className="w-full h-px bg-white/20 mb-8"></div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} ScaloMatrix. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );

  if (reveal) {
    return (
      <>
        <div id="contact" style={{ height: footerHeight ? footerHeight : '70vh' }} className="w-full relative z-0 pointer-events-none" />
        {footerContent}
      </>
    );
  }

  return footerContent;
}

