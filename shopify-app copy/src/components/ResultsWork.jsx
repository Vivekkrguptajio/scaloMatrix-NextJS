"use client";

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { clients } from '../data/work';

// Horizontal carousel (swipe, drag-free scroll, or use the arrows) so this section stays short
// on a landing page. Cards keep the original look: screenshot on top, store name, two results.
export default function ResultsWork() {
  const displayClients = clients.slice(0, 6);
  const scroller = useRef(null);
  const [progress, setProgress] = useState(0); // 0 → 1
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scrollByCard = (dir) => {
    const el = scroller.current;
    if (!el || !el.firstElementChild) return;
    const card = el.firstElementChild;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: 'smooth' });
  };

  const arrow =
    'flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink transition-colors hover:border-ink disabled:opacity-30 disabled:hover:border-line';

  return (
    <section id="results" aria-labelledby="results-title" className="relative w-full py-16 md:py-24 bg-cream font-sans border-b border-line">
      <div className="container-x">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            Our work
          </p>
          <h2
            id="results-title"
            className="h-display !font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.08] tracking-tight text-ink"
          >
            Real stores. <span className="text-brand">Real brands.</span>
          </h2>
          <p className="mt-3 text-[15px] sm:text-[17px] text-muted">
            Stores built and optimized on Shopify for Indian entrepreneurs. Every metric verified with clients.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={scroller}
          onScroll={update}
          role="region"
          aria-label="Real stores we built"
          tabIndex={0}
          className="flex snap-x snap-mandatory gap-3.5 overflow-x-auto scroll-smooth pb-1 scrollbar-hide lg:gap-5"
        >
          {displayClients.map((client) => (
            <div
              key={client.name}
              className="group flex w-[84%] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[10px] border border-line bg-paper transition-colors duration-300 hover:border-brand/50 sm:w-[calc((100%-14px)/2)] lg:w-[calc((100%-40px)/3)]"
            >
              <div>
                {/* Store image preview (no zoom / blur effects: they made the section flicker) */}
                <div className="relative h-48 w-full overflow-hidden bg-cream sm:h-52">
                  <Image
                    src={client.img}
                    alt={`${client.name} Shopify store`}
                    fill
                    sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute left-3 top-3 rounded-[6px] border border-line bg-paper px-2.5 py-1 font-mono text-[11px] font-medium text-ink">
                    {client.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-[17px] sm:text-[18px] font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                      {client.name}
                    </h3>
                    {client.url && (
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted transition-colors hover:text-brand"
                        aria-label={`Visit ${client.name}`}
                      >
                        <FaExternalLinkAlt className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-6 border-t border-line/60 pt-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">Revenue Growth</p>
                      <p className="font-display text-[17px] font-bold text-brand">{client.revenue}</p>
                    </div>
                    {client.aov && (
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-muted">AOV Lift</p>
                        <p className="font-display text-[17px] font-bold text-ink">{client.aov}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls: arrows + progress bar */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous stores" disabled={!canPrev} onClick={() => scrollByCard(-1)} className={arrow}>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button type="button" aria-label="Next stores" disabled={!canNext} onClick={() => scrollByCard(1)} className={arrow}>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="relative h-px flex-1 bg-line" aria-hidden="true">
            <div className="absolute -top-px left-0 h-[3px] rounded-full bg-brand transition-all duration-300" style={{ width: `${Math.max(12, progress * 100)}%` }} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex flex-col gap-4 rounded-[14px] border border-line bg-paper p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-[15px] sm:text-[17px] font-bold leading-snug text-ink">
            Want to see how your product would look as a brand?
          </p>
          <a
            href="#lead-form"
            className="btn-primary inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold text-white"
          >
            Book my free call <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
