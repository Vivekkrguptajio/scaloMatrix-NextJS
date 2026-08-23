"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative w-full py-16 md:py-24 bg-white font-sans">
      
      {/* ─── Background Ambient Waves (GPU-free radial gradients) ─── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(253,88,0,0.1)_0%,transparent_70%)] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(253,88,0,0.05)_0%,transparent_70%)] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Side: Header */}
          <div className="lg:sticky lg:top-40 h-fit">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-[75px] font-black tracking-tighter leading-[1.05] mb-6 text-black"
            >
              Got questions? <br />
              <span className="text-[#FD5800]">We have answers.</span>
            </motion.h2>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-1 pt-4 lg:pt-0 pr-2 md:pr-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className="border-b border-black/10 pb-3"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex justify-between items-center py-6 md:py-8 text-left focus:outline-none group"
                >
                  <h3 className={`text-lg md:text-xl lg:text-2xl font-black tracking-tight leading-snug transition-colors duration-300 ${isOpen ? 'text-[#FD5800]' : 'text-black group-hover:text-[#FD5800]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`ml-6 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#FD5800] text-[#FD5800] rotate-45' : 'border-black/20 text-gray-400 group-hover:border-[#FD5800] group-hover:text-[#FD5800]'}`}>
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path>
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed pb-8 pr-8 lg:pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          </div>
        </div>

      </div>
    </section>
  );
}
