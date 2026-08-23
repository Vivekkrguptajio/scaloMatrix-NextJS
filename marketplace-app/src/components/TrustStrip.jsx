"use client";
import React, { memo } from 'react';

const topRowLogos = [
  { name: 'Nutraphyll', img: '/logo/Nutraphyll.png', color: '#10B981' },
  { name: 'Judex', img: '/logo/Judex.png', color: '#3B82F6' },
  { name: 'Nada', img: '/logo/Nada.png', color: '#FD5800' },
  { name: 'Wayora', img: '/logo/Wayora.png', color: '#EC4899' },
  { name: 'drapes', img: '/logo/drapes.png', color: '#EAB308' },
  { name: 'velmukha', img: '/logo/velmukha.png', color: '#8B5CF6' },
  { name: 'WayoraN', img: '/logo/WayoraN.png', color: '#14B8A6' },
];

const bottomRowLogos = [
  { name: 'Wayora', img: '/logo/Wayora.png', color: '#EC4899' },
  { name: 'drapes', img: '/logo/drapes.png', color: '#EAB308' },
  { name: 'Nutraphyll', img: '/logo/Nutraphyll.png', color: '#10B981' },
  { name: 'velmukha', img: '/logo/velmukha.png', color: '#8B5CF6' },
  { name: 'Judex', img: '/logo/Judex.png', color: '#3B82F6' },
  { name: 'WayoraN', img: '/logo/WayoraN.png', color: '#14B8A6' },
  { name: 'Nada', img: '/logo/Nada.png', color: '#FD5800' },
];

const BrandCard = ({ brand }) => (
  <div 
    className="bg-white border border-gray-200 hover:border-[#FD5800] rounded-xl h-14 sm:h-16 w-48 sm:w-56 flex items-center justify-center relative overflow-hidden flex-shrink-0 mx-3 px-6 shadow-2xs transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer group"
    style={{ borderLeft: `4px solid ${brand.color}` }}
  >
    <img 
      src={brand.img} 
      alt={brand.name} 
      className="h-8 sm:h-9 max-w-[140px] sm:max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-110" 
    />
  </div>
);

const TrustStrip = memo(function TrustStrip() {
  return (
    <section className="w-full bg-[#F8FAFC] py-8 md:py-10 border-y border-gray-200 text-gray-900 overflow-hidden relative font-sans">
      <div className="flex flex-col gap-4 relative">
        {/* Top Marquee Row */}
        <div className="relative flex overflow-x-hidden group w-full py-1">
          <div className="absolute top-0 left-0 w-24 md:w-36 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 md:w-36 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex whitespace-nowrap items-center">
            {[...topRowLogos, ...topRowLogos, ...topRowLogos, ...topRowLogos].map((brand, index) => (
              <BrandCard key={`top-${index}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* Bottom Reverse Marquee Row */}
        <div className="relative flex overflow-x-hidden group w-full py-1">
          <div className="absolute top-0 left-0 w-24 md:w-36 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 md:w-36 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-reverse flex whitespace-nowrap items-center ml-10">
            {[...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos].map((brand, index) => (
              <BrandCard key={`bottom-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default TrustStrip;

