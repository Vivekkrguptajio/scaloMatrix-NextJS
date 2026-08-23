"use client";
export default function ThePromise() {
  return (
    <section className="w-full bg-[#f8f8f8] text-black py-20 md:py-32 font-sans flex flex-col items-center justify-center px-6 text-center border-t border-gray-200">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h4 className="text-black text-xs font-bold tracking-[0.2em] uppercase mb-8">
          The Guarantee
        </h4>
        
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 leading-[1.2]">
          Pages that earn their keep<br className="hidden md:block" />
          <span className="text-gray-400">— or we keep working.</span>
        </h2>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          We build every page to beat your current one by at least
          20%. If it doesn't, we don't disappear — we keep iterating.
          That's the deal, in writing.
        </p>
        
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center px-10 py-4 font-bold text-sm uppercase tracking-widest bg-black text-white hover:bg-[#FD5800] transition-colors"
        >
          Request your audit
        </a>
        
        <p className="text-gray-500 text-xs mt-10 tracking-widest uppercase font-bold">
          Reply within 24 hours · free teardown · no pitch on call one
        </p>
      </div>
    </section>
  );
}

