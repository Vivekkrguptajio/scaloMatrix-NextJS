"use client";

import { FaCheckCircle } from 'react-icons/fa';
import HeroLeadForm from './HeroLeadForm';
import { heroData } from '../data/content';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col pt-[80px] md:pt-[9.5rem] lg:pt-[10rem] pb-14 md:pb-20 bg-cream relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(253,88,0,0.08)_0%,transparent_70%)] pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(253,88,0,0.05)_0%,transparent_70%)] pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="container-x relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-start gap-8 lg:gap-10 xl:gap-10">
          
          {/* LEFT — Brand Positioning & Value Props */}
          <div className="flex-1 w-full lg:max-w-[490px] xl:max-w-[530px] text-left">
            {/* Eyebrow Badge */}
            <div className="flex items-center gap-2 mb-6 hero-animate-1">
              <span className="inline-flex items-center gap-2 bg-brand-soft text-brand-text text-[11.5px] sm:text-[12px] font-semibold tracking-[0.08em] uppercase px-3.5 py-1.5 font-mono border border-brand/20 rounded-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                Full-stack D2C partner for Indian sellers
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
            <p className="lead text-[16px] sm:text-[18px] text-muted max-w-[580px] mb-6 hero-animate-3">
              {heroData.description}
            </p>

            {/* Core Bullets */}
            <div className="flex flex-col gap-3.5 mb-6 hero-animate-4">
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
            <div className="p-3 bg-paper border border-line rounded-[10px] max-w-[580px] text-[13px] text-muted/90 leading-relaxed hero-animate-5">
              <span className="font-semibold text-ink">Strict Transparency:</span>{' '}
              {heroData.smallPrint}
            </div>

            {/* Two Action Buttons in place of stats */}
            <div className="flex flex-wrap items-center gap-4 pt-7 mt-7">
              <a
                href="#lead-form"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold text-white bg-brand rounded-[10px] hover:brightness-105 transition-all shadow-[0_4px_14px_rgba(253,88,0,0.25)]"
              >
                <span>Book my free call</span>
              </a>
              <a
                href="#first-90-days"
                className="btn-ghost inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14.5px] font-semibold text-ink border border-ink/30 rounded-[10px] hover:border-ink hover:bg-ink/5 transition-all"
              >
                <span>See how it works</span>
              </a>
            </div>
          </div>

          {/* RIGHT — The 2-Step Lead Generation Form */}
          <div className="w-full lg:w-[min(480px,42vw)] lg:max-w-[480px] lg:ml-auto flex-shrink-0 flex justify-center lg:justify-end">
            <HeroLeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
