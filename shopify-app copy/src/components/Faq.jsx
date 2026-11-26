"use client";

import { useState } from 'react';
import { faqs } from '../data/faq';
import FaqAskBox from './FaqAskBox';

// Native <details> accordion: works without JavaScript, is keyboard/screen-reader
// friendly, and every answer is in the server-rendered HTML for search engines.
// Only the first few questions show at first so the landing page stays short;
// the rest stay in the HTML (hidden) so search engines still read them.
const VISIBLE_AT_FIRST = 6;

export default function Faq() {
  const [showAll, setShowAll] = useState(false);
  const hiddenCount = faqs.length - VISIBLE_AT_FIRST;

  return (
    <section id="faq" aria-labelledby="faq-title" className="relative w-full py-16 md:py-24 bg-paper font-sans border-b border-line">
      <div className="container-x">
        {/* Header (same pattern as OurModel / FirstNinetyDays) */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="mb-2 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            FAQs
          </p>
          <h2 id="faq-title" className="h-display !font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.08] tracking-tight text-ink">
            Common questions, <span className="text-brand">answered.</span>
          </h2>
          <p className="mt-3 text-[15px] sm:text-[17px] text-muted">
            Honest answers about our setup fees, ad budgets, and how we work together.
          </p>
        </div>

        <div className="mx-auto max-w-[860px]">
          {/* Main accordion list */}
          <div className="border-t border-line">
            {faqs.map((item, idx) => (
              <details
                key={idx}
                className={`group border-b border-line ${!showAll && idx >= VISIBLE_AT_FIRST ? 'hidden' : ''}`}
              >
                <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[16px] md:text-[17.5px] leading-[24px] md:leading-[26px] font-medium text-ink group-hover:text-brand transition-colors">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl leading-none text-brand transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="faq-answer pb-6 pr-8 text-[14px] md:text-[15px] leading-[1.7] text-muted font-normal">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          {hiddenCount > 0 && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                aria-expanded={showAll}
                className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold"
              >
                {showAll ? 'Show fewer questions' : `Show all ${faqs.length} questions`}
                <span aria-hidden="true" className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>↓</span>
              </button>
            </div>
          )}

          <FaqAskBox />
        </div>
      </div>
    </section>
  );
}
