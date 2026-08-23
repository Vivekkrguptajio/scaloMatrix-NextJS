"use client";
import { memo } from 'react';

const logoImages = [
  { name: "Nutraphyll", img: "/logo/Nutraphyll.png" },
  { name: "Judex", img: "/logo/Judex.png" },
  { name: "Nada", img: "/logo/Nada.png" },
  { name: "Wayora", img: "/logo/Wayora.png" },
  { name: "drapes", img: "/logo/drapes.png" },
  { name: "velmukha", img: "/logo/velmukha.png" },
  { name: "WayoraN", img: "/logo/WayoraN.png" },
];

const ClientLogos = memo(function ClientLogos() {
  return (
    <section className="w-full bg-white py-10 md:py-14 border-b border-gray-100 overflow-hidden font-sans">
      
      {/* Top Row */}
      <div className="relative flex overflow-x-hidden group mb-8 md:mb-10">
        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex whitespace-nowrap py-2 items-center gap-12 sm:gap-16 md:gap-20 px-8">
          {[...logoImages, ...logoImages, ...logoImages, ...logoImages].map((brand, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[140px] md:min-w-[180px] h-16 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
              <img src={brand.img} alt={brand.name} className="h-10 md:h-12 max-w-[160px] object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Reverse Row */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse flex whitespace-nowrap py-2 items-center gap-12 sm:gap-16 md:gap-20 px-8 ml-10">
          {[...logoImages, ...logoImages, ...logoImages, ...logoImages].reverse().map((brand, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center min-w-[140px] md:min-w-[180px] h-16 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
              <img src={brand.img} alt={brand.name} className="h-10 md:h-12 max-w-[160px] object-contain" />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
});

export default ClientLogos;
