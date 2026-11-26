"use client";

import { FaCheckCircle, FaUserCircle, FaBoxOpen } from 'react-icons/fa';

const phases = [
  {
    when: 'Weeks 1–2',
    title: 'Go live',
    weDo: ['Build your website', 'Upload your products', 'Set up payments and shipping', 'Launch your first ads'],
    youDo: 'Share photos, prices and GST details.',
  },
  {
    when: 'Weeks 3–8',
    title: 'Find what sells',
    weDo: ['Test ads and audiences', 'Back the winning products', 'Fix checkout drop-offs'],
    youDo: 'Approve ads, keep stock ready.',
  },
  {
    when: 'Weeks 9–12',
    title: 'Make it profitable',
    weDo: ['Get more orders to reach buyers', 'Cut returns', 'Review margins with you'],
    youDo: 'A short weekly call with your expert.',
  },
  {
    when: 'Month 4+',
    title: 'Scale your brand',
    weDo: ['Add more products', 'Grow your ads', 'Bring buyers back on WhatsApp'],
    youDo: 'Focus on product and supply.',
  },
];

export default function FirstNinetyDays() {
  return (
    <section
      id="first-90-days"
      aria-labelledby="first-90-days-title"
      className="relative w-full border-b border-line bg-paper py-16 md:py-24"
    >
      <div className="container-x">
        {/* Header (same pattern as OurModel / WhatsIncluded) */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            How it works
          </p>
          <h2
            id="first-90-days-title"
            className="h-display !font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.08] tracking-tight text-ink"
          >
            Your first 90 days with <span className="text-brand">scaloMATRIX.</span>
          </h2>
          <p className="mt-3 text-[15px] sm:text-[17px] text-muted">
            Exactly what we do, and the little you do, at every step.
          </p>
        </div>

        {/* Timeline (desktop): same 4-column grid + gap as the cards so dots sit centred over each card */}
        <div className="relative mb-5 hidden lg:grid lg:grid-cols-4 lg:gap-5" aria-hidden="true">
          <div className="absolute left-[12.5%] right-[12.5%] top-[7px] h-[2px] bg-gradient-to-r from-brand via-brand/50 to-line" />
          {phases.map((p, i) => (
            <div key={p.when} className="relative flex flex-col items-center">
              <span
                className={`h-4 w-4 rounded-full border-[3px] border-brand ${i === 0 ? 'bg-brand' : 'bg-paper'}`}
              />
              <span className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                {p.when}
              </span>
            </div>
          ))}
        </div>

        {/* Phase cards */}
        <ol className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {phases.map((p, i) => (
            <li
              key={p.title}
              className="flex flex-col rounded-[14px] border border-line bg-paper p-5 sm:p-6 transition-colors duration-300 hover:border-ink"
            >
              {/* Phase label shown inside the card on phones/tablets (timeline is desktop only) */}
              <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-brand-soft px-3 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-brand lg:hidden">
                <span className="text-ink/60">0{i + 1}</span> {p.when}
              </span>

              <h3 className="text-[19px] sm:text-[21px] font-bold leading-snug tracking-tight text-ink">{p.title}</h3>

              <p className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
                <FaCheckCircle className="h-4 w-4 text-brand" /> We do
              </p>
              <ul className="mt-2.5 space-y-2">
                {p.weDo.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] leading-snug text-ink">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* "You do" pinned to the bottom so all cards line up */}
              <div className="mt-auto pt-5">
                <div className="border-t border-line pt-4">
                  <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                    <FaUserCircle className="h-4 w-4 text-muted" /> You do
                  </p>
                  <p className="mt-2 text-[14px] leading-snug text-ink">{p.youDo}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Bottom bar */}
        <div className="mt-4 lg:mt-5 flex flex-col gap-4 rounded-[14px] border border-line bg-cream p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-brand-soft">
              <FaBoxOpen className="h-5 w-5 text-brand" />
            </span>
            <p className="text-[15px] sm:text-[17px] font-bold leading-snug text-ink">
              Your only job: <span className="font-medium text-muted">keep the product ready and hand it to the courier.</span>
            </p>
          </div>
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
