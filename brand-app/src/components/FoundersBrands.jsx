"use client";
import React, { memo, useRef } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

const topRowBrands = [
  { name: 'BURBERRY', borderColor: '#EAB308', logo: null, type: 'text', fontStyle: 'font-serif tracking-widest text-sm sm:text-base font-semibold' },
  { name: 'MONTE CARLO', borderColor: '#1D4ED8', logo: null, type: 'text', fontStyle: 'font-sans font-bold text-sm sm:text-base' },
  { name: 'perfora', borderColor: '#22D3EE', logo: null, type: 'text', fontStyle: 'font-serif font-bold text-base sm:text-lg tracking-tight' },
  { name: 'HAVELLS', borderColor: '#DC2626', logo: 'H', type: 'icon-text', fontStyle: 'font-sans font-black text-orange-600 text-base sm:text-lg tracking-tighter' },
  { name: 'SELECT CITYWALK', borderColor: '#F59E0B', logo: '*', type: 'icon-text', fontStyle: 'font-serif text-[10px] sm:text-xs text-center leading-tight' },
  { name: 'Canon', borderColor: '#DC2626', logo: null, type: 'text', fontStyle: 'font-serif font-black text-lg sm:text-xl italic' },
];

const bottomRowBrands = [
  { name: 'Canon', borderColor: '#DC2626', logo: null, type: 'text', fontStyle: 'font-serif font-black text-lg sm:text-xl italic' },
  { name: 'LLOYD', borderColor: '#1E3A8A', logo: 'L', type: 'circle-icon', fontStyle: '' },
  { name: 'BLUE TEA', borderColor: '#1D4ED8', logo: 'B', type: 'icon-text', fontStyle: 'font-sans font-bold text-violet-800 text-base sm:text-lg' },
  { name: 'one8', subtext: 'BY VIRAT KOHLI', borderColor: '#1F2937', logo: null, type: 'text-subtext', fontStyle: 'font-sans font-light text-lg sm:text-xl' },
];

const BrandCard = ({ brand }) => {
  return (
    <div 
      className="bg-white rounded-md sm:rounded-lg shadow-sm h-11 sm:h-13 w-40 sm:w-48 flex items-center justify-center relative overflow-hidden flex-shrink-0 mx-2.5 sm:mx-3.5 px-3 py-1.5"
      style={{ borderLeft: `4px solid ${brand.borderColor}` }}
    >
      {brand.type === 'text' && (
        <span className={brand.fontStyle}>{brand.name}</span>
      )}
      
      {brand.type === 'icon-text' && (
        <div className="flex items-center gap-1.5 sm:gap-2">
          {brand.logo && (
            <span className={`text-base sm:text-lg font-black ${brand.name === 'HAVELLS' ? 'text-orange-600' : 'text-violet-800'}`}>
              {brand.name === 'HAVELLS' ? '⚡' : '❀'}
            </span>
          )}
          <div className={brand.fontStyle}>
            {brand.name === 'SELECT CITYWALK' ? (
              <div className="flex flex-col items-center">
                <span className="text-orange-600 text-[8px] sm:text-[9px] leading-none">SELECT</span>
                <span className="font-bold text-[11px] sm:text-xs leading-none">CITYWALK</span>
                <span className="text-[7px] sm:text-[8px] italic leading-none">New Delhi</span>
              </div>
            ) : brand.name}
          </div>
        </div>
      )}

      {brand.type === 'circle-icon' && (
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-violet-400 to-violet-900 flex items-center justify-center shadow-inner">
          <span className="text-white text-[8px] sm:text-[9px] font-bold tracking-widest">LLOYD</span>
        </div>
      )}

      {brand.type === 'text-subtext' && (
        <div className="flex flex-col items-center leading-tight">
          <span className={brand.fontStyle}>{brand.name}</span>
          <span className="text-[7px] sm:text-[8px] tracking-widest text-gray-500">{brand.subtext}</span>
        </div>
      )}
    </div>
  );
};

const FoundersBrands = memo(function FoundersBrands() {
  const containerRef = useRef(null);

  // Track window scroll velocity
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth out velocity with spring physics for seamless tilt transitions
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 300,
  });

  // Track section scroll progress for horizontal parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // 1. Tilt angle: 0deg when stationary, tilts down on scroll down, tilts up on scroll up
  const tiltAngle = useTransform(smoothVelocity, [-1800, 0, 1800], [4, 0, -4]);

  // 2. Subtle skew for fluid movement: 0deg when stationary
  const skewX = useTransform(smoothVelocity, [-1800, 0, 1800], [2, 0, -2]);

  // 3. Horizontal position shift based on scroll progress
  const topRowX = useTransform(scrollYProgress, [0, 1], [60, -100]);
  const bottomRowX = useTransform(scrollYProgress, [0, 1], [-100, 60]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-violet-100 pt-24 md:pt-36 pb-28 md:pb-40 min-h-[600px] md:min-h-[750px] flex flex-col justify-between overflow-hidden relative"
    >
      {/* Title Header */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-16 md:mb-28 lg:mb-32 z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight uppercase max-w-3xl font-sans">
          <span className="text-[#FD5800]">Brands our founders</span> <br className="hidden md:block" />
          <span className="text-gray-900">have helped grow.</span>
        </h2>
      </div>

      {/* Marquee Wrapper - Normal (0deg) at rest, tilts dynamically on scroll up/down */}
      <motion.div 
        style={{ rotate: tiltAngle, skewX: skewX }}
        className="flex flex-col gap-5 sm:gap-6 md:gap-8 relative w-[115%] -left-[7.5%] py-6 scale-105 origin-center select-none mt-auto transition-transform duration-75"
      >
        {/* Top Row - Moves Left + Parallax */}
        <motion.div style={{ x: topRowX }} className="relative flex overflow-x-hidden group w-full py-1">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 w-20 md:w-44 h-full bg-gradient-to-r from-violet-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 md:w-44 h-full bg-gradient-to-l from-violet-100 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex whitespace-nowrap items-center">
            {[...topRowBrands, ...topRowBrands, ...topRowBrands, ...topRowBrands, ...topRowBrands].map((brand, index) => (
              <BrandCard key={`top-${index}`} brand={brand} />
            ))}
          </div>
        </motion.div>

        {/* Bottom Row - Moves Right + Parallax */}
        <motion.div style={{ x: bottomRowX }} className="relative flex overflow-x-hidden group w-full py-1">
          <div className="absolute top-0 left-0 w-20 md:w-44 h-full bg-gradient-to-r from-violet-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 md:w-44 h-full bg-gradient-to-l from-violet-100 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-reverse flex whitespace-nowrap items-center ml-12">
            {[...bottomRowBrands, ...bottomRowBrands, ...bottomRowBrands, ...bottomRowBrands, ...bottomRowBrands].map((brand, index) => (
              <BrandCard key={`bottom-${index}`} brand={brand} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default FoundersBrands;

