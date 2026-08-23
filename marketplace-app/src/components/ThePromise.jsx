"use client";
export default function ThePromise() {
  return (
    <section className="w-full bg-white text-black py-16 md:py-24 font-sans flex flex-col items-center justify-center px-6 text-center rounded-b-[40px] md:rounded-b-[60px]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h4 className="text-[#FD5800] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6">
          The Promise
        </h4>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-[1.1]">
          Pages that <span className="text-[#FD5800]">earn their keep</span><br className="hidden md:block" />
          <span className="opacity-90">— or we keep working.</span>
        </h2>
        
        <p className="text-gray-900 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          We build every page to beat your current one by at least
          <span className="text-[#FD5800] font-semibold"> 20%</span>. If it doesn't, we don't disappear — we keep iterating.
          That's the deal, in writing.
        </p>
        
        <a 
          href="#contact" 
          className="group inline-flex items-center justify-center gap-2 bg-[#FD5800] text-white font-bold py-4 px-8 rounded-full border border-transparent hover:scale-105 hover:bg-transparent hover:text-black hover:border-black transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Request your audit
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        
        <p className="text-gray-800 text-[10px] md:text-xs mt-8 tracking-wider uppercase font-semibold">
          Reply within 24 hours · free teardown if it's a fit · no pitch on call one
        </p>
      </div>
    </section>
  );
}

