"use client";

import { FaIndustry, FaBoxes, FaStore, FaMobileAlt, FaArrowRight } from 'react-icons/fa';

export default function IsThisForYou() {
  const segments = [
    {
      icon: FaIndustry,
      title: "Manufacturers & Factory Owners",
      badge: "Primary Focus",
      pain: "You manufacture high-quality goods at unbeatable costs, but middlemen, distributors, and marketplaces squeeze your margins down to single digits.",
      solution:
        "Launch your own direct brand. You supply the product from your factory; we design the Shopify store, run the Meta ads, and setup courier dispatch. You earn direct consumer margins.",
    },
    {
      icon: FaBoxes,
      title: "Amazon / Flipkart / Meesho Sellers",
      badge: "Marketplace Sellers",
      pain: "Trapped in brutal price matching, listing hijackers, fake returns (RTO), and 25%–35% platform fees that wipe out profitability.",
      solution:
        "Build a brand you own 100%. You own the customer phone numbers, get repeat orders, and never fear sudden account suspensions.",
    },
    {
      icon: FaStore,
      title: "Offline Shops & Wholesalers",
      badge: "Retailers & Traders",
      pain: "Local bazaar footfall is stagnant. You have real inventory and deep product expertise, but e-commerce tech and digital ads feel complex and risky.",
      solution:
        "Turn your existing inventory into a pan-India brand with automated courier pickups from your shop and instant UPI/bank settlements.",
    },
    {
      icon: FaMobileAlt,
      title: "Instagram & WhatsApp Sellers",
      badge: "Social Commerce",
      pain: "Wasting hours answering 'Price please?' in DMs, verifying manual UPI payment screenshots, and unable to scale past 10–20 orders a day.",
      solution:
        "A 1-click checkout Shopify store that handles payments, order confirmations, and dispatch notifications automatically so you can scale to hundreds of daily orders.",
    },
  ];

  return (
    <section id="is-this-for-you" className="relative w-full py-16 md:py-24 bg-cream font-sans border-b border-line">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="eyebrow mb-4">Audience Match</span>
            <h2 className="h-display h-section">
              Is D2C scaloMATRIX <span className="accent">for you?</span>
            </h2>
          </div>
          <p className="lead max-w-md">
            We partner with businesses who have great physical products and want their own profitable e-commerce channel without paying agency retainers.
          </p>
        </div>

        {/* 4 Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div
                key={idx}
                className="bg-paper border border-line p-6 sm:p-8 flex flex-col justify-between hover:border-brand/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-brand-soft text-brand flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1 bg-cream border border-line text-brand-text">
                      {seg.badge}
                    </span>
                  </div>

                  <h3 className="h-display text-[21px] sm:text-[23px] font-semibold text-ink mb-4">
                    {seg.title}
                  </h3>

                  {/* Pain */}
                  <div className="mb-4 pb-4 border-b border-line/60">
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-red-500 font-semibold mb-1">
                      The Pain
                    </p>
                    <p className="text-[13.5px] text-muted leading-relaxed">
                      {seg.pain}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand font-semibold mb-1">
                      The scaloMATRIX Solution
                    </p>
                    <p className="text-[14px] text-ink font-medium leading-relaxed">
                      {seg.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-line/60">
                  <a
                    href="#lead-form"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand hover:text-brand-deep transition-colors"
                  >
                    <span>Request call back for this plan</span>
                    <FaArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
