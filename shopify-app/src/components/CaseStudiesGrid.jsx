"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AnimatedCounter } from './Hero';
import AutoMarquee from './AutoMarquee';

const DesktopMobileMockup = ({ src, mobileSrc, alt }) => (
  <div className="flex gap-2 sm:gap-4 h-full w-full items-end justify-center pt-2 sm:pt-4 px-2 sm:px-4 group-hover/link:scale-[1.03] transition-transform duration-500 overflow-hidden">
    {/* Desktop View */}
    <div className="flex-[2.5] bg-paper rounded-t-lg md:rounded-t-2xl shadow-[0_-4px_25px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col border-t border-l border-r border-gray-200 relative h-[95%] md:h-[98%]">
      <div className="w-full h-full relative overflow-hidden bg-gray-100 min-h-[140px] sm:min-h-[180px] md:min-h-[220px]">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width: 768px) 70vw, 50vw" />
      </div>
    </div>

    {/* Mobile View */}
    <div className="flex-[1] max-w-[90px] sm:max-w-[140px] bg-paper rounded-t-lg md:rounded-t-2xl shadow-[0_-4px_25px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col border-t border-l border-r border-gray-200 shrink-0 relative h-[82%] md:h-[88%]">
       <div className="w-full h-full relative overflow-hidden bg-gray-100 min-h-[120px] sm:min-h-[150px] md:min-h-[180px]">
         <Image src={mobileSrc || src} alt={`${alt} Mobile`} fill className="object-cover object-top" sizes="(max-width: 768px) 30vw, 25vw" />
       </div>
    </div>
  </div>
);

// ───────────── Phone: one card, case studies stacked inside ─────────────
// Auto-advances upward every few seconds; the visitor can also swipe inside the card,
// use the arrows, or pause. Auto-advance stops while they interact and when off-screen.
const PhoneCaseStudies = ({ studies, StudyCard }) => {
  const scroller = useRef(null);
  const slides = useRef([]);
  const active = useRef(0);
  const touching = useRef(false);
  const inView = useRef(false);
  const idleTimer = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = studies.length;

  const goTo = (i, smooth = true) => {
    const idx = (i + n) % n;
    const el = slides.current[idx];
    if (!el || !scroller.current) return;
    scroller.current.scrollTo({ top: el.offsetTop, behavior: smooth ? 'smooth' : 'auto' });
  };

  // the visitor touched / scrolled it: hold the auto-advance for a few seconds
  const poke = () => {
    touching.current = true;
    clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => { touching.current = false; }, 5000);
  };

  const onScroll = () => {
    const el = scroller.current;
    if (!el || n < 2) return;
    const step = slides.current[1].offsetTop - slides.current[0].offsetTop;
    const i = Math.min(n - 1, Math.max(0, Math.round(el.scrollTop / step)));
    active.current = i;
    setIndex(i);
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPaused(true);
    const io = new IntersectionObserver(([e]) => { inView.current = e.isIntersecting; }, { threshold: 0.4 });
    io.observe(scroller.current);
    return () => { io.disconnect(); clearTimeout(idleTimer.current); };
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      if (touching.current || !inView.current) return;
      const next = active.current + 1;
      goTo(next >= n ? 0 : next, next < n); // wrap back to the first one with a quiet jump
    }, 3200);
    return () => clearInterval(t);
  }, [paused, n]);

  const btn = 'w-9 h-9 rounded-full border border-line flex items-center justify-center text-ink active:bg-brand active:text-white active:border-brand transition-colors';

  return (
    <div className="rounded-[28px] bg-paper border border-line overflow-hidden">
      <div
        ref={scroller}
        onScroll={onScroll}
        onTouchStart={poke}
        onWheel={poke}
        role="region"
        aria-label="Case studies"
        tabIndex={0}
        className="relative h-[390px] sm:h-[440px] overflow-y-auto snap-y snap-mandatory scrollbar-hide"
      >
        {studies.map((study, i) => (
          <div
            key={study.id}
            ref={(el) => { slides.current[i] = el; }}
            className="snap-start h-[330px] sm:h-[380px] px-4 pt-4 pb-5 border-b border-line"
          >
            <StudyCard study={study} flat />
          </div>
        ))}
        <div className="h-[60px] shrink-0" aria-hidden="true" />
      </div>

      {/* controls: buttons on the left so the floating WhatsApp / scroll-to-top buttons never cover them */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-line bg-cream/60">
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Previous case study" className={btn} onClick={() => { poke(); goTo(index - 1); }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
          </button>
          <button type="button" aria-label="Next case study" className={btn} onClick={() => { poke(); goTo(index + 1); }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <button type="button" aria-label={paused ? 'Play' : 'Pause'} className={btn} onClick={() => setPaused((p) => !p)}>
            {paused ? (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            ) : (
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {studies.map((s, i) => (
              <span key={s.id} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-5 bg-brand' : 'w-1.5 bg-ink/20'}`} />
            ))}
          </div>
          <span className="font-mono text-xs tracking-[0.1em] text-muted tabular-nums whitespace-nowrap">
            <span className="text-ink font-medium">{String(index + 1).padStart(2, '0')}</span> / {String(n).padStart(2, '0')}
          </span>
        </div>
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
      link: 'https://www.wayoranatural.com'
    },
    {
      id: 'house-of-fett',
      mockup: <DesktopMobileMockup src="/work/house-of-fett-desktop.webp" mobileSrc="/work/house-of-fett-mobile.webp" alt="House of Fett" />,
      badge: <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-[#141210] whitespace-nowrap">HOUSE OF FETT</span>,
      link: 'https://www.houseoffett.com'
    },
    {
      id: 'veeyuu',
      mockup: <DesktopMobileMockup src="/work/veeyuu-desktop.webp" mobileSrc="/work/veeyuu-mobile.webp" alt="Veeyuu" />,
      badge: <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-[#141210]">VEEYUU</span>,
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
      aov: '+18%',
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
      aov: '+16%',
      rev: '+50%',
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
      aov: '+16%',
      rev: '+43%',
      link: 'https://www.judex.in'
    }
  ];

  const StudyCard = ({ study, flat = false }) => (
    <article className={flat
      ? 'w-full flex flex-col'
      : 'w-[300px] sm:w-[440px] lg:w-[520px] shrink-0 bg-paper border border-line rounded-[28px] p-4 sm:p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(20,18,16,0.4)]'}>
      <div className="bg-cream rounded-2xl p-2 sm:p-3 mb-5 w-full h-[220px] sm:h-[270px] lg:h-[300px] flex items-end justify-center relative overflow-hidden">
        {study.mockup}
      </div>
      <div className="flex items-end justify-between gap-4 px-1 mt-auto">
        <div className="shrink-0 bg-white rounded-lg px-2 py-1">{study.badge}</div>
        {study.aov && study.rev && (
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex flex-col items-end">
            <div className="h-display text-xl sm:text-2xl text-brand leading-none mb-1.5">
              <AnimatedCounter target={parseInt(study.aov)} prefix="+" suffix="%" />
            </div>
            <div className="font-mono text-[10px] text-muted uppercase tracking-[0.14em]">Avg. order</div>
          </div>
          <div className="w-px h-9 bg-line" />
          <div className="flex flex-col items-end">
            <div className="h-display text-xl sm:text-2xl text-brand leading-none mb-1.5">
              <AnimatedCounter target={parseInt(study.rev)} prefix="+" suffix="%" />
            </div>
            <div className="font-mono text-[10px] text-muted uppercase tracking-[0.14em]">Revenue</div>
          </div>
        </div>
        )}
      </div>
    </article>
  );

  return (
    <section id="case-studies" className="w-full py-16 md:py-24 bg-cream font-sans">
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
            Every store below is live. We built it, then measured it over 10,000+ visits. Same traffic, more sales.
          </p>
        </div>

      </div>

      {/* Phone: ONE card; case studies stack inside and move bottom → top */}
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
