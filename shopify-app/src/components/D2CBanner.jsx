"use client";

export default function D2CBanner() {
  return (
    <section className="relative w-full bg-panel text-white overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Decorative rings */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-[300px] h-[300px] md:w-[460px] md:h-[460px] rounded-full border-[50px] md:border-[70px] border-white/[0.04] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-full border-[44px] md:border-[60px] border-brand/[0.12] pointer-events-none" />

      <div className="relative z-10 max-w-[920px] mx-auto px-6 text-center flex flex-col items-center gap-6 md:gap-8">
        <span className="eyebrow !text-brand">Who we build for</span>

        <h2 className="h-display h-section text-white">
          Shopify stores for <span className="accent">D2C brands</span> that want to scale.
        </h2>

        <p className="text-white/65 text-base md:text-lg max-w-[680px] leading-relaxed">
          We help D2C fashion brands grow from ₹0 to ₹1 Cr+ with conversion-focused stores, sharper brand positioning and performance-minded design.
        </p>

        <a href="#contact" className="btn-primary mt-2">
          Let&apos;s scale your brand
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
