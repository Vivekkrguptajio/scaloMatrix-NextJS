"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Showreel() {
  const [loadIframe, setLoadIframe] = useState(false);
  const videoId = 'L9V2lbljBa4';

  return (
    <section id="showreel" className="w-full bg-white relative z-20 pt-2 pb-10 md:py-[5%] mt-4 md:mt-24">
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 mb-2 md:mb-10 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight">
          Streamline Business with our <span className="text-[#FD5800]">Flexible options</span>
        </h2>
      </div>

      <motion.div 
        className="w-full md:w-[70%] mx-auto relative aspect-video md:aspect-[2/1] bg-black overflow-hidden shadow-[0_0_40px_rgba(253,88,0,0.4)] border-y-2 md:border-2 border-[#FD5800]/60 rounded-none md:rounded-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {loadIframe ? (
          <iframe 
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
            title="scaloMATRIX Showreel" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        ) : (
          <button 
            onClick={() => setLoadIframe(true)}
            className="absolute inset-0 w-full h-full cursor-pointer group"
          >
            <img 
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Play Showreel"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#FD5800] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(253,88,0,0.5)] group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </motion.div>
    </section>
  );
}
