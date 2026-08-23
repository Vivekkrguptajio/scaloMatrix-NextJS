"use client";
import { useState, useEffect, useRef } from 'react';

const GuestCard = ({ brand, index, additionalClass = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stagger animation by column index in each row
  const delay = (index % 4) * 80;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 h-24 sm:h-32 border border-black -ml-[1px] -mt-[1px] bg-white flex items-center justify-center p-4 sm:p-5 transition-all duration-700 ease-out transform group hover:bg-black/[0.02] ${additionalClass} ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
    >
      <img
        src={brand.img}
        alt={brand.name}
        className="max-h-14 max-w-[140px] w-auto object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );
};

const GuestList = () => {
  const brandLogos = [
    { name: "Nutraphyll", img: "/logo/Nutraphyll.png" },
    { name: "Judex", img: "/logo/Judex.png" },
    { name: "Nada", img: "/logo/Nada.png" },
    { name: "Wayora", img: "/logo/Wayora.png" },
    { name: "Drapes", img: "/logo/drapes.png" },
    { name: "Velmukha", img: "/logo/velmukha.png" },
    { name: "WayoraN", img: "/logo/WayoraN.png" },
  ];

  return (
    <section id="brand" className="relative z-0 w-full py-8 md:py-12 lg:py-14 font-sans bg-white">
      <div className="max-w-[1024px] mx-auto flex flex-col items-center relative px-2.5 sm:px-5 md:px-16 xl:px-0 w-full">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-8 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.1] tracking-tight text-black lg:w-[60%]">
            The <span className="text-[#FD5800]">guest list.</span>
          </h2>
          <div className="w-full lg:w-[40%] flex lg:justify-end">
            <p className="text-gray-600 text-sm md:text-lg leading-tight lg:text-right">
              Brands we've shipped for. The kind of names that wouldn't sit still for mediocre work. Now you can be one of them.
            </p>
          </div>
        </div>

        {/* Brand Logos Grid */}
        <div className="relative w-full">
          <div className="flex flex-wrap justify-center pl-[1px] pt-[1px]">
            {brandLogos.map((brand, idx) => (
              <GuestCard key={idx} brand={brand} index={idx} additionalClass={idx >= 4 ? "hidden sm:flex" : ""} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GuestList;
