"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatedCounter } from './Hero';
import AutoMarquee from './AutoMarquee';

const DesktopMobileMockup = ({ src, mobileSrc, alt }) => (
  <div className="flex gap-2 sm:gap-4 h-full w-full items-end justify-center group-hover/link:scale-[1.03] transition-transform duration-500 overflow-hidden">
    {/* Desktop View */}
    <div className="flex-[2.5] bg-paper shadow-[0_-4px_25px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col border-t border-l border-r border-gray-200 relative h-[95%] md:h-[98%]">
      <div className="w-full h-full relative overflow-hidden bg-gray-100 min-h-[119px] sm:min-h-[153px] md:min-h-[187px]">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width: 768px) 70vw, 50vw" />
      </div>
    </div>

    {/* Mobile View */}
    <div className="flex-[1] max-w-[90px] sm:max-w-[119px] bg-paper shadow-[0_-4px_25px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col border-t border-l border-r border-gray-200 shrink-0 relative h-[82%] md:h-[88%]">
       <div className="w-full h-full relative overflow-hidden bg-gray-100 min-h-[102px] sm:min-h-[127px] md:min-h-[153px]">
         <Image src={mobileSrc || src} alt={`${alt} Mobile`} fill className="object-cover object-top" sizes="(max-width: 768px) 30vw, 25vw" />
       </div>
    </div>
  </div>
);

// ───────────── Phone: swipeable cards ─────────────
// One case study per screen, the next one peeking in from the right. Swipe, or use the arrows;
// the counter and bar show where you are.
const PhoneCaseStudies = ({ studies, StudyCard }) => {
  const scroller = useRef(null);
  const slides = useRef([]);
  const [index, setIndex] = useState(0);
  const n = studies.length;

  const goTo = (i) => {
    const idx = Math.min(n - 1, Math.max(0, i));
    const el = slides.current[idx];
    if (!el || !scroller.current) return;
    scroller.current.scrollTo({ left: el.offsetLeft - scroller.current.offsetLeft - 20, behavior: 'smooth' });
  };

  const onScroll = () => {
    const el = scroller.current;
    if (!el || n < 2) return;
    const step = slides.current[1].offsetLeft - slides.current[0].offsetLeft;
    setIndex(Math.min(n - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  };

  const btn = 'w-11 h-11 border border-ink flex items-center justify-center text-ink disabled:opacity-30 active:bg-brand active:text-white active:border-brand transition-colors';

  return (
    <div>
      <div
        ref={scroller}
        onScroll={onScroll}
        role="region"
        aria-label="Case studies"
        tabIndex={0}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 pb-1"
      >
        {studies.map((study, i) => (
          <div
            key={study.id}
            ref={(el) => { slides.current[i] = el; }}
            className="snap-start shrink-0 w-[86%] border border-ink bg-paper p-4"
          >
            <StudyCard study={study} flat />
          </div>
        ))}
        <div className="shrink-0 w-2" aria-hidden="true" />
      </div>

      {/* controls */}
      <div className="mt-5 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Previous case study" disabled={index === 0} className={btn} onClick={() => goTo(index - 1)}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button type="button" aria-label="Next case study" disabled={index === n - 1} className={btn} onClick={() => goTo(index + 1)}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        {/* progress bar */}
        <div className="flex-1 h-px bg-line relative" aria-hidden="true">
          <div className="absolute left-0 -top-px h-[3px] bg-brand transition-all duration-300" style={{ width: `${((index + 1) / n) * 100}%` }} />
        </div>
        <span className="font-mono tracking-[0.1em] text-muted tabular-nums whitespace-nowrap text-sm">
          <span className="text-ink font-medium">{String(index + 1).padStart(2, '0')}</span> / {String(n).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

const CaseStudiesGrid = () => {
  const allStudies = [
    {
      id: 'wayora',
      mockup: <DesktopMobileMockup src="/work/wayora-desktop.webp" mobileSrc="/work/wayora-mobile.webp" alt="Wayora" />,
      badge: <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-[#141210] whitespace-nowrap">WAYORA</span>,
      aov: '+23%',
      rev: '+33%',
      link: 'https://www.wayoranatural.com'
    },
    {
      id: 'veeyuu',
      mockup: <DesktopMobileMockup src="/work/veeyuu-desktop.webp" mobileSrc="/work/veeyuu-mobile.webp" alt="Veeyuu" />,
      badge: <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-[#141210]">VEEYUU</span>,
      aov: '+21%',
      rev: '+24%',
      link: 'https://veeyuu.com'
    },
    {
      id: 'nutraphyll',
      mockup: <DesktopMobileMockup src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509467/shopify-app/lap_view/Nutraphyll.webp" mobileSrc="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509483/shopify-app/phoneView/Nutraphyll_phone_view.webp" alt="Nutraphyll" />,
      badge: (
        <div className="relative h-7 md:h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509472/shopify-app/logo/Nutraphyll.png" alt="Nutraphyll" fill className="object-contain object-left" sizes="96px" />
        </div>
      ),
      aov: '+22%',
      rev: '+20%',
      link: 'https://www.nutraphyll.com'
    },
    {
      id: 'houseofnada',
      mockup: <DesktopMobileMockup src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509466/shopify-app/lap_view/Nada.webp" mobileSrc="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509482/shopify-app/phoneView/Nada%20_phone_view.webp" alt="House of Nada" />,
      badge: (
        <div className="relative h-7 md:h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509471/shopify-app/logo/Nada.png" alt="House of Nada" fill className="object-contain object-left" sizes="96px" />
        </div>
      ),
      aov: '+27%',
      rev: '+44%',
      link: 'https://www.houseofnada.com'
    },
    {
      id: 'drapescorner',
      mockup: <DesktopMobileMockup src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509463/shopify-app/lap_view/Drapes.webp" mobileSrc="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509479/shopify-app/phoneView/Drapes_phone_view.webp" alt="Drapes Corner" />,
      badge: (
        <div className="relative h-7 md:h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509469/shopify-app/logo/drapes.png" alt="Drapes Corner" fill className="object-contain object-left" sizes="96px" />
        </div>
      ),
      aov: '+24%',
      rev: '+38%',
      link: 'https://www.drapescorner.com'
    },
    {
      id: 'judex',
      mockup: <DesktopMobileMockup src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509464/shopify-app/lap_view/Judex.webp" mobileSrc="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509480/shopify-app/phoneView/judex_phone_view.webp" alt="Judex" />,
      badge: (
        <div className="relative h-7 md:h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509470/shopify-app/logo/Judex.png" alt="Judex" fill className="object-contain object-left" sizes="96px" />
        </div>
      ),
      aov: '+21%',
      rev: '+43%',
      link: 'https://www.judex.in'
    },
    {
      id: 'velmukha',
      mockup: (
        <div className="relative w-full h-full overflow-hidden bg-paper border-t border-l border-r border-gray-200">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509490/shopify-app/photsWork/Velmukha.webp" alt="Velmukha" fill className="object-cover object-top" sizes="(max-width: 768px) 80vw, 440px" />
        </div>
      ),
      badge: <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-[#141210] whitespace-nowrap">VELMUKHA</span>,
      aov: '+25%',
      rev: '+34%',
      link: 'https://www.velmukha.com/'
    }
  ];

  const StudyCard = ({ study, flat = false }) => (
    <article className={flat
      ? 'w-full flex flex-col'
      : 'w-[255px] sm:w-[374px] lg:w-[442px] shrink-0 bg-paper border border-ink p-4 sm:p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(20,18,16,0.4)]'}>
      <div className={`case-shot border border-ink px-3 sm:px-5 pt-3 sm:pt-5 pb-0 mb-5 w-full flex items-end justify-center relative overflow-hidden ${flat ? 'h-[229px] sm:h-[272px]' : 'h-[187px] sm:h-[229px] lg:h-[255px]'}`}>
        {study.mockup}
      </div>
      <div className="flex items-end justify-between gap-4 px-1 mt-auto">
        <div className={`shrink-0 bg-white px-2 py-1 `}>{study.badge}</div>
        {study.rev && (
        <div className={`flex items-center ${flat ? 'gap-3.5' : 'gap-4 sm:gap-6'}`}>
          {study.aov && (<>
          <div className="flex flex-col items-end">
            <div className={`h-display text-up leading-none mb-1.5 ${flat ? 'text-[1.6rem] sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
              <AnimatedCounter target={parseInt(study.aov)} prefix="+" suffix="%" />
            </div>
            <div className={`font-mono text-muted uppercase tracking-[0.14em] ${flat ? 'text-[10.5px] whitespace-nowrap' : 'text-[10px]'}`}>Avg. order</div>
          </div>
          <div className={`w-px bg-line ${flat ? 'h-10' : 'h-9'}`} />
          </>)}
          <div className="flex flex-col items-end">
            <div className={`h-display text-up leading-none mb-1.5 ${flat ? 'text-[1.6rem] sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
              <AnimatedCounter target={parseInt(study.rev)} prefix="+" suffix="%" />
            </div>
            <div className={`font-mono text-muted uppercase tracking-[0.14em] ${flat ? 'text-[10.5px] whitespace-nowrap' : 'text-[10px]'}`}>Revenue</div>
          </div>
        </div>
        )}
      </div>
    </article>
  );

  return (
    <section id="case-studies" className="relative w-full py-16 md:py-24 bg-cream font-sans scroll-mt-16">
      <div className="container-x flex flex-col">

        {/* Header */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-10 md:mb-14 gap-6">
          <div className="lg:w-[58%]">
            <span className="eyebrow mb-4">Results</span>
            <h2 className="h-display h-section">
              Real stores. <span className="accent">Real</span> numbers.
            </h2>
          </div>
          <p className="lead lg:w-[34%]">
            Every store below is live. We built it, then measured it over 10,000+ visits. Results are from past client projects and will differ for your business (<a href="/terms#s12" className="underline underline-offset-2">see Terms</a>).
          </p>
        </div>

      </div>

      {/* Phone: swipeable cards, one case study per screen */}
      <div className="md:hidden container-x">
        <PhoneCaseStudies studies={allStudies} StudyCard={StudyCard} />
      </div>

      {/* Tablet / desktop: moves left → right; touch/drag to swipe */}
      <AutoMarquee speed={40} direction="right" className="hidden md:block py-2">
        <div className="flex gap-4 md:gap-6 w-max ps-[max(1.25rem,calc((100vw-1280px)/2))] sm:ps-[max(2rem,calc((100vw-1280px)/2))] pe-5">
          {[...allStudies, ...allStudies].map((study, idx) => (
            <StudyCard key={`${study.id}-${idx}`} study={study} />
          ))}
        </div>
      </AutoMarquee>
    </section>
  );
};

export default CaseStudiesGrid;
