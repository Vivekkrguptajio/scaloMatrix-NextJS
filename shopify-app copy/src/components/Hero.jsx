"use client";

import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import HeroLeadForm from './HeroLeadForm';
import { heroData } from '../data/content';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col pt-[84px] md:pt-[10.5rem] pb-12 md:pb-20 bg-cream relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(253,88,0,0.08)_0%,transparent_70%)] pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(253,88,0,0.05)_0%,transparent_70%)] pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="container-x relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-10 xl:gap-16">
          
          {/* LEFT — Brand Positioning & Value Props */}
          <div className="flex-1 w-full lg:max-w-[55%] text-left">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6 hero-animate-1">
              <div
                className="partner-logo relative w-[147px] h-[28px] overflow-hidden"
                title={heroData.badge}
              >
                <Image
                  src="https://res.cloudinary.com/dqtzchlqj/image/upload/v1794639408/shopify-app/work/shopify-partners.png"
                  alt="Shopify Partners"
                  fill
                  sizes="147px"
                  className="object-cover"
                  priority
                />
              </div>
              <span className="inline-flex items-center gap-2 bg-brand-soft text-brand-text text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 font-mono">
                <span className="w-1.5 h-1.5 bg-brand animate-pulse" />
                {heroData.badge2}
              </span>
            </div>

            {/* Main H1 */}
            <h1 className="h-display !font-semibold !leading-[1.18] text-[clamp(2.1rem,4.2vw,50px)] mb-5 hero-animate-2">
              {heroData.headlineMain}{' '}
              <span className="accent relative inline-block">
                {heroData.headlineHighlight}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6C75 2 225 2 298 6"
                    stroke="#FD5800"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.45"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="lead text-[16px] sm:text-[18px] text-muted max-w-xl mb-7 hero-animate-3">
              {heroData.description}
            </p>

            {/* 3 Core Bullets */}
            <div className="flex flex-col gap-3.5 mb-8 hero-animate-4">
              {heroData.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0">
                    <FaCheckCircle className="w-3.5 h-3.5 text-brand" />
                  </div>
                  <span className="text-[14.5px] sm:text-[15.5px] font-medium text-ink">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* Mandatory Small Print Disclosure */}
            <div className="p-3.5 bg-paper border border-line max-w-xl text-[12px] text-muted/90 leading-relaxed hero-animate-5">
              <span className="font-semibold text-ink">Strict Transparency:</span>{' '}
              {heroData.smallPrint}
            </div>

            {/* Highlighted stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-line max-w-lg">
              {heroData.stats.map((st, i) => (
                <div key={i}>
                  <p className="font-display text-[22px] sm:text-[28px] font-semibold text-brand leading-none mb-1">
                    {st.prefix}{st.value}{st.suffix}
                  </p>
                  <p className="text-[11px] sm:text-[12px] font-mono uppercase text-muted tracking-wide">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — The 2-Step Lead Generation Form */}
          <div className="w-full lg:max-w-[45%] flex justify-center lg:justify-end">
            <HeroLeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
