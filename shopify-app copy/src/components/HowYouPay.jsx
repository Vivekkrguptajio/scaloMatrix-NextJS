"use client";

import { FaHandHoldingUsd, FaTimesCircle, FaCheckCircle, FaLock } from 'react-icons/fa';

export default function HowYouPay() {
  const points = [
    {
      title: "One Small Setup Fee",
      desc: "Covers the custom design of your Shopify store, payment gateway integrations, shipping setup, and initial Meta ad creative production.",
      badge: "Pay Once to Start",
    },
    {
      title: "Zero Monthly Retainers",
      desc: "Unlike traditional agencies that bill you ₹50,000–₹1,00,000 every single month regardless of performance, we charge ₹0 monthly retainer.",
      badge: "₹0 Monthly Agency Fees",
    },
    {
      title: "Zero Marketing Management Fee",
      desc: "We don't charge management percentages on your ad budget. Our time and expertise in ad management are fully bundled.",
      badge: "No Ad Cut",
    },
    {
      title: "We Earn Only When You Sell",
      desc: "Our ongoing earnings come from a small fee per order or a minor percentage of net delivered sales. When your brand succeeds, we succeed.",
      badge: "100% Skin in the Game",
    },
  ];

  return (
    <section id="how-you-pay" className="relative w-full py-16 md:py-24 bg-paper font-sans border-b border-line">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="eyebrow mb-4">Transparent Pricing Model</span>
          <h2 className="h-display h-section mb-4">
            How you pay: <span className="accent">Zero surprises.</span>
          </h2>
          <p className="lead">
            We built our commercial model around one simple truth: you shouldn&apos;t pay an agency a fortune before you make a single sale.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-cream border border-line p-6 flex flex-col justify-between hover:border-brand/50 transition-colors"
            >
              <div>
                <span className="inline-block px-2.5 py-1 bg-paper border border-line text-[11px] font-mono text-brand font-semibold mb-4">
                  {pt.badge}
                </span>
                <h3 className="h-display text-[18px] sm:text-[19px] font-semibold text-ink mb-3 leading-snug">
                  {pt.title}
                </h3>
                <p className="text-[13.5px] text-muted leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-line/60 flex items-center gap-2">
                <FaCheckCircle className="w-3.5 h-3.5 text-brand" />
                <span className="text-[11.5px] font-mono text-ink">Aligned With You</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Box with Small Print Disclosure & CTA */}
        <div className="p-8 bg-cream border border-line flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h4 className="text-[18px] sm:text-[20px] font-semibold text-ink mb-2 flex items-center gap-2">
              <FaLock className="w-4 h-4 text-brand" />
              <span>Strict Transparency Disclosure</span>
            </h4>
            <p className="text-[13px] text-muted leading-relaxed">
              Ad budget and Shopify plan are paid directly by you to Meta and Shopify. We never touch or markup your ad budget. Every rupee spent on ads is visible in your own Meta Ads Manager.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href="#lead-form"
              className="btn-primary py-4 px-8 text-[14.5px] font-semibold text-center w-full sm:w-auto"
            >
              Get Your Exact Price on a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
