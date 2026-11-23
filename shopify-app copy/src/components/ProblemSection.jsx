"use client";

import { FaStoreSlash, FaMoneyBillWave, FaUserSecret } from 'react-icons/fa';

export default function ProblemSection() {
  const problems = [
    {
      icon: FaStoreSlash,
      tag: "Marketplace Trap",
      title: "15%–35% Commissions & Brutal Price Wars",
      description:
        "Amazon, Flipkart, and Meesho take 15% to 35% of every sale you make. On top of that, copycats undercut your prices by ₹20, and ad auction costs eat the little profit you had left.",
      impact: "High sales on paper, zero bank balance at month end.",
    },
    {
      icon: FaMoneyBillWave,
      tag: "Agency Black Hole",
      title: "₹50k–₹1L+ Monthly Fees Before You Sell Anything",
      description:
        "Traditional digital marketing agencies demand hefty retainers upfront. If campaigns fail or sales don't come, they still demand their monthly retainer with zero skin in the game.",
      impact: "You take 100% of the risk; they take your hard-earned cash.",
    },
    {
      icon: FaUserSecret,
      tag: "Zero Customer Ownership",
      title: "You Never Own the Customer Data",
      description:
        "Marketplaces conceal customer phone numbers, emails, and addresses. You cannot retarget buyers, get repeat orders, or build genuine brand recall. If they suspend your seller account, your business vanishes overnight.",
      impact: "You are building their platform, not your brand.",
    },
  ];

  return (
    <section id="problem" className="relative w-full py-16 md:py-24 bg-cream font-sans border-b border-line">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="eyebrow mb-4">The Real Problem</span>
          <h2 className="h-display h-section mb-5">
            Why selling only on marketplaces or hiring agencies is <span className="accent">broken.</span>
          </h2>
          <p className="lead">
            Most manufacturers and sellers are trapped between marketplace cuts and agency retainers. Here is what is draining your profits:
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-paper border border-line p-6 sm:p-8 flex flex-col justify-between hover:border-brand/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 bg-brand-soft text-brand flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-text mb-2 block">
                    {prob.tag}
                  </span>
                  <h3 className="h-display text-[20px] sm:text-[22px] font-semibold text-ink leading-snug mb-3">
                    {prob.title}
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed mb-6">
                    {prob.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-line/60">
                  <p className="text-[12.5px] font-medium text-ink flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span>{prob.impact}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition statement */}
        <div className="mt-12 p-6 sm:p-8 bg-panel text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-[18px] sm:text-[21px] font-semibold mb-1 text-white">
              There is a better way: Your Own Brand.
            </h4>
            <p className="text-[13.5px] text-white/70 max-w-xl">
              Pay once to build your store, run ads, and launch operations. After that, we earn only when you get orders.
            </p>
          </div>
          <a
            href="#lead-form"
            className="btn-primary whitespace-nowrap text-[13.5px] py-3 px-6"
          >
            See If You Qualify
          </a>
        </div>
      </div>
    </section>
  );
}
