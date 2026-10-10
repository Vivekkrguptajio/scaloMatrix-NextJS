"use client";

export default function D2CBanner() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20 md:py-28 lg:py-36">
      {/* Decorative circles */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-20 md:-left-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border-[40px] md:border-[60px] border-[#f0e6d0] opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-20 w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full bg-[#f0e6d0] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-16 md:-right-6 w-[200px] h-[200px] md:w-[350px] md:h-[350px] pointer-events-none">
        <div className="absolute inset-0 rounded-full border-[35px] md:border-[55px] border-gray-100 opacity-80" />
        <div className="absolute top-8 right-8 md:top-12 md:right-12 w-[100px] h-[100px] md:w-[160px] md:h-[160px] rounded-full border-[25px] md:border-[40px] border-[#f0e6d0] opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center flex flex-col items-center gap-6 md:gap-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-black leading-[1.15] tracking-tight">
          A D2C fashion focused{' '}
          <span className="relative inline-block">
            <span className="relative z-10">performance marketing</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#C5A028] via-[#E8C84A] to-[#C5A028] opacity-30 -skew-x-1 rounded-sm" />
          </span>{' '}
          and brand building Agency.
        </h2>

        <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-[700px] leading-relaxed">
          We Help Fashion D2C Brands Scale From ₹0 To ₹1 Cr+ Through Performance Marketing, Brand Positioning And Conversion-Focused Growth.
        </p>

        <a
          href="#contact"
          className="mt-2 inline-block px-8 py-3.5 border border-black text-black text-sm md:text-base font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          Let's Scale Your Brand
        </a>
      </div>
    </section>
  );
}
