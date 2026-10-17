"use client";

export default function ThePromise() {
  return (
    <section className="w-full bg-paper px-5 sm:px-8 md:px-12 xl:px-16 pb-16 md:pb-24">
      <div className="max-w-[1280px] mx-auto relative overflow-hidden bg-gradient-to-br from-brand to-brand-deep text-white rounded-[36px] px-6 sm:px-12 lg:px-20 py-14 md:py-20 flex flex-col items-center text-center font-sans">
        {/* Decorative rings */}
        <div className="absolute -top-24 -left-24 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full border-[44px] md:border-[64px] border-white/[0.08] pointer-events-none" />
        <div className="absolute -bottom-28 -right-20 w-[240px] h-[240px] md:w-[380px] md:h-[380px] rounded-full border-[40px] md:border-[58px] border-black/[0.07] pointer-events-none" />

        <div className="relative max-w-3xl flex flex-col items-center">
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-white/90 mb-6">The promise</span>

          <h2 className="h-display h-section text-white mb-6">
            Pages that earn their keep —{' '}
            <span className="text-black/80">or we keep working.</span>
          </h2>

          <p className="text-white text-sm md:text-base max-w-xl leading-relaxed mb-10">
            We build every page to beat your current one by at least 20%. If it doesn&apos;t, we don&apos;t disappear — we keep iterating. That&apos;s the deal, in writing.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 bg-white text-[#141210] font-semibold py-4 px-8 rounded-full hover:bg-[#141210] hover:text-white transition-colors duration-300"
          >
            Request your free audit
            <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
          </a>

          <p className="font-mono text-white/90 text-[10px] md:text-[11px] mt-8 tracking-[0.14em] uppercase">
            Reply within 24 hours · free teardown if it&apos;s a fit · no pitch on call one
          </p>
        </div>
      </div>
    </section>
  );
}
