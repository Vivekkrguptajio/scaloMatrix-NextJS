"use client";
export default function Marquee() {
  const repetitions = 4;
  
  return (
    <section className="w-full bg-[#FD5800] overflow-hidden py-2 md:py-2.5 flex items-center transform -rotate-2 scale-105 z-20 relative shadow-xl">
      <div className="relative flex whitespace-nowrap w-full">
        <div className="animate-marquee-reverse inline-block whitespace-nowrap flex items-center">
          {Array(repetitions).fill(0).map((_, i) => (
            <div key={i} className="inline-flex items-center text-xl md:text-2xl lg:text-4xl font-black font-sans tracking-tighter uppercase text-white">
              <span className="px-6">Brand</span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
              <span className="px-6">Commerce</span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
              <span className="px-6">Growth</span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
              <span className="px-6">Strategy</span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
              <span className="px-6">Design</span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
              <span className="px-6">scaloMATRIX</span>
              <span className="text-black opacity-50 text-xl md:text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
