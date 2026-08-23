"use client";
import { motion } from 'framer-motion';
import { memo } from 'react';
import { insights } from '../data';

const InsightCard = memo(function InsightCard({ item, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
      className="group flex flex-col bg-white rounded-[24px] shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden cursor-pointer"
    >
      {/* Image Header */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={item.image} 
          alt={item.title} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
          <span className="text-[11px] font-bold tracking-widest text-black uppercase">{item.category}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.date}</span>
        </div>
        
        <h3 className="text-lg md:text-xl font-black mb-3 leading-tight text-gray-900 group-hover:text-[#FD5800] transition-colors">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6">
          {item.excerpt}
        </p>

        <div className="flex items-center mt-auto">
          <span className="text-sm font-bold text-black group-hover:text-[#FD5800] transition-colors flex items-center gap-2">
            Read Article
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
});

export default function Insights() {
  return (
    <section className="relative w-full bg-white text-black font-sans py-12 md:py-16">
      <div className="w-full flex flex-col justify-center">
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 lg:px-12">
          
          {/* Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 tracking-tight">
                <span className="text-[#FD5800]">Insights</span>
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base font-bold text-gray-400">
                <span className="text-gray-900">Articles.</span>
                <span className="text-gray-900">Growth breakdowns.</span>
                <span className="text-gray-900">Creative analysis.</span>
              </div>
            </div>
            <div>
              <button className="px-5 py-2.5 bg-white border border-gray-200 rounded-full font-bold text-sm hover:border-[#FD5800] hover:text-[#FD5800] transition-colors shadow-sm">
                Read Our Blog
              </button>
            </div>
          </div>

          {/* Grid Layout - 4 Cards Side by Side, animated by scroll */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((item, i) => (
              <div key={item.id} className={i >= 2 ? "hidden sm:block" : ""}>
                <InsightCard item={item} index={i} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
