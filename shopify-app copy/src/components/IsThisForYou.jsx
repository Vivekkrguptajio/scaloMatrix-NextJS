"use client";

import { FaIndustry, FaShoppingCart, FaStore, FaSyncAlt, FaCheckCircle } from 'react-icons/fa';

const segments = [
  {
    icon: FaIndustry,
    title: 'Manufacturers',
    subtitle: 'Factories, makers, private-label suppliers',
    challenge: 'You make great products, but others sell them under their name and keep the margin.',
    helps: ['Your own brand, live in 15 days', 'No ₹1 lakh agency bill to start'],
  },
  {
    icon: FaShoppingCart,
    title: 'Marketplace sellers',
    subtitle: 'Amazon, Flipkart, Meesho',
    challenge: 'High commissions, price wars and no access to your own customers.',
    helps: ['Your own store and customer list', 'Keep selling on marketplaces too'],
  },
  {
    icon: FaStore,
    title: 'Offline shops and wholesalers',
    subtitle: 'Shops, traders, distributors, Instagram sellers',
    challenge: 'Strong local business or DM orders, but no proper online store.',
    helps: ['Website, payments and shipping, done for you', 'Manage orders from your phone'],
  },
  {
    icon: FaSyncAlt,
    title: 'Tried an agency before',
    subtitle: 'Burned by retainers and fees',
    challenge: 'Paid monthly retainers and marketing fees, saw little return.',
    helps: ['₹0 retainer, ₹0 marketing fee', 'We earn only when your orders come'],
  },
];

export default function IsThisForYou() {
  return (
    <section id="is-this-for-you" className="relative w-full py-16 md:py-24 bg-cream font-sans border-b border-line">
      <div className="container-x">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            Is this for you?
          </p>
          <h2 className="h-display !font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.08] tracking-tight text-ink">
            Is scaloMATRIX <span className="text-brand">right for you?</span>
          </h2>
          <p className="mt-3 text-[15px] sm:text-[17px] text-muted">
            If you&apos;re one of these sellers, the answer is a definite yes.
          </p>
        </div>

        {/* 4 cards in one row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {segments.map((seg) => {
            const Icon = seg.icon;
            return (
              <div
                key={seg.title}
                className="flex flex-col rounded-[14px] border border-line bg-paper p-5 sm:p-6 transition-colors duration-300 hover:border-ink"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand-soft">
                  <Icon className="h-5 w-5 text-brand" />
                </div>

                <h3 className="text-[17px] sm:text-[18px] font-bold leading-snug text-ink">{seg.title}</h3>
                <p className="mt-1 text-[13px] sm:text-[14px] leading-snug text-muted">{seg.subtitle}</p>

                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">Your challenge</p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink">{seg.challenge}</p>

                {/* Pushes the "helps" block to the bottom so all 4 cards line up */}
                <div className="mt-auto pt-5">
                  <div className="border-t border-line pt-5">
                    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
                      <FaCheckCircle className="h-4 w-4 text-brand" />
                      How scaloMATRIX helps
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {seg.helps.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-[14px] leading-snug text-ink">
                          <span className="mt-[1px] text-brand font-bold">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="#lead-form"
          className="btn-primary mt-8 md:mt-10 inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold text-white"
        >
          Book my free call <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
