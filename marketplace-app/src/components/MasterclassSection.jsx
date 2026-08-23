"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const chapters = [
  { time: '02:15', title: 'Finding & Eliminating Search Term Waste' },
  { time: '14:30', title: 'Top-of-Search Bid Architecture Strategy' },
  { time: '28:10', title: 'TACOS Reduction & Profitability Balancing' },
  { time: '39:45', title: 'Live Amazon Account Teardown Case Study' },
];

export default function MasterclassSection({ onOpenModal }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="masterclass" className="py-24 bg-white text-gray-900 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 text-gray-900 text-xs font-bold tracking-[0.2em] uppercase rounded border border-gray-200">
              Free Access Masterclass
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.1]">
              Advanced <span className="text-[#FD5800]">Amazon Ads</span> Masterclass <br />
              <span className="font-semibold">
                scalo<span className="text-[#FD5800]">MATRIX</span> Edition
              </span>
            </h2>

            <p className="text-lg text-gray-900 font-normal leading-relaxed">
              Learn how our agency <span className="text-[#FD5800] font-semibold">scales Amazon stores</span> using the exact PPC frameworks we deploy for 6- and 7-figure brands.
            </p>

            {/* Premium Chapters list */}
            <div className="space-y-0 pt-4">
              <span className="text-xs font-bold text-gray-900 uppercase tracking-widest block mb-4">
                Video Chapters Covered
              </span>
              <div className="border-t border-gray-200">
                {chapters.map((chap, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-gray-200 group transition-colors hover:bg-gray-50 px-2 -mx-2 rounded-lg">
                    <span className="text-gray-900 font-normal text-sm">{chap.title}</span>
                    <span className="font-mono text-xs text-gray-900 font-semibold group-hover:text-[#FD5800] transition-colors">
                      {chap.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <button
                onClick={() => onOpenModal('strategy')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900 text-white hover:bg-gray-800 font-semibold text-sm transition-all text-center"
              >
                Book a Free Strategy Session
              </button>

              <a
                href="https://www.youtube.com/@scalomatrix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold text-sm transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4 fill-current text-gray-900" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
                </svg>
                <span>Watch on YouTube</span>
              </a>
            </div>
          </div>

          {/* Right Video Mockup */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[2rem] overflow-hidden border border-gray-200 bg-white p-2 shadow-2xl shadow-gray-200/50 group"
            >
              <div className="relative aspect-video rounded-[1.5rem] overflow-hidden bg-gray-900 flex items-center justify-center">
                
                {!isPlaying ? (
                  <>
                    {/* Cinematic Thumbnail graphic */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-8 text-center opacity-90 group-hover:opacity-75 transition-opacity duration-500">
                      <span className="text-gray-300 font-mono text-xs font-bold uppercase tracking-widest mb-4">
                        scaloMATRIX Masterclass
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-black text-white max-w-sm leading-tight">
                        Amazon Ads Scaling Framework 2026
                      </h4>
                      <p className="text-xs text-gray-400 mt-4 tracking-widest uppercase">45 Mins • Teardown</p>
                    </div>

                    {/* Premium Play button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-2xl transition-all hover:bg-white/30"
                    >
                      <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.button>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full rounded-[1.5rem]"
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Amazon Ads Masterclass"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </motion.div>
            
            {/* Subtle under-glow for video */}
            <div className="absolute -inset-4 bg-gray-100 blur-3xl -z-10 rounded-[3rem]" />
          </div>

        </div>
      </div>
    </section>
  );
}

