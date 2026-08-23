"use client";
import React from 'react';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl font-black text-white tracking-tight">
                <span className="text-[#FD5800]">scalo</span><span className="text-white">MATRIX</span>
              </span>
              <span className="text-[10px] font-bold text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full bg-amber-500/10 uppercase tracking-wider">
                MARKETPLACE
              </span>
            </div>

            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Helping Amazon Sellers Build Profitable & Scalable Businesses with PPC. Cut through ad spend waste with data-driven advertising strategies engineered for consistent, long-term growth.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenModal('strategy')}
                className="px-5 py-2.5 rounded-full bg-[#FD5800] hover:bg-orange-600 text-white font-bold text-xs transition-all shadow-md"
              >
                Book a free strategy session →
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-[#FD5800] uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li><a href="#hero" className="hover:text-[#FD5800] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#FD5800] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#FD5800] transition-colors">Services</a></li>
              <li><a href="#services" className="hover:text-[#FD5800] transition-colors">Amazon Ad Management</a></li>
              <li><a href="#masterclass" className="hover:text-[#FD5800] transition-colors">Masterclass</a></li>
              <li><a href="#case-studies" className="hover:text-[#FD5800] transition-colors">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-[#FD5800] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Access */}
          <div>
            <h4 className="text-xs font-bold text-[#FD5800] uppercase tracking-widest mb-4">
              Legal & Access
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li><a href="#contact" className="hover:text-[#FD5800] transition-colors">Client Login</a></li>
              <li><a href="#" className="hover:text-[#FD5800] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#FD5800] transition-colors">Terms Of Service</a></li>
              <li><a href="#" className="hover:text-[#FD5800] transition-colors">Refund Policy</a></li>
              <li><a href="#audit" onClick={(e) => { e.preventDefault(); onOpenModal('audit'); }} className="hover:text-[#FD5800] transition-colors">Brand Audit Request</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div>
            <h4 className="text-xs font-bold text-[#FD5800] uppercase tracking-widest mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div>
                <span className="text-[10px] text-gray-400 block font-semibold uppercase">Email</span>
                <a href="mailto:hello@scalomatrix.com" className="font-bold text-white hover:text-[#FD5800] transition-colors">
                  hello@scalomatrix.com
                </a>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block font-semibold uppercase">Call Us</span>
                <a href="tel:+919699917214" className="font-bold text-white hover:text-[#FD5800] transition-colors">
                  +91-9699917214
                </a>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block font-semibold uppercase">Headoffice</span>
                <p className="text-[11px] text-gray-400 leading-snug mt-0.5">
                  scaloMATRIX HQ, Tech Tower, Bhayandar West, Thane, Maharastra 401101
                </p>
                <span className="text-[10px] font-mono text-[#FD5800] mt-1 block">
                  GST : 27AAACS1234F1Z5
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© Copyright scaloMATRIX. All Rights Reserved – 2026</p>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">
              Powered & Designed by <span className="font-bold text-[#FD5800]">scaloMATRIX</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

