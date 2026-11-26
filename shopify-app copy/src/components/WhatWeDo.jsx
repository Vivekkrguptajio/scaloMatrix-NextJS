"use client";

import {
  FaLaptopCode,
  FaBullhorn,
  FaShippingFast,
  FaCreditCard,
  FaWhatsapp,
  FaChartLine,
} from 'react-icons/fa';

export default function WhatWeDo() {
  const pillars = [
    {
      icon: FaLaptopCode,
      number: "01",
      title: "High-Converting Shopify Website",
      desc: "Fast, mobile-optimized custom store built with clean navigation, high-converting product pages, trust badges, and frictionless 1-click checkout.",
    },
    {
      icon: FaBullhorn,
      number: "02",
      title: "Meta & Instagram Ads (Done For You)",
      desc: "End-to-end campaign creation, video/image ad creatives, precise audience targeting, and daily ROAS optimization. You pay ad budget directly to Meta.",
    },
    {
      icon: FaShippingFast,
      number: "03",
      title: "Shipping & Automated RTO Control",
      desc: "Complete courier setup (Shiprocket / Nimbus) with automated WhatsApp OTP address verification for COD orders to drastically reduce fake return losses.",
    },
    {
      icon: FaCreditCard,
      number: "04",
      title: "Payment Gateways & Direct Settlements",
      desc: "Integration with top Indian gateways (Razorpay, Cashfree, PhonePe UPI). 100% of customer payments settle directly into your own bank account.",
    },
    {
      icon: FaWhatsapp,
      number: "05",
      title: "Automated WhatsApp Recovery & Updates",
      desc: "Automated WhatsApp messages for abandoned cart recovery, order dispatch alerts, tracking links, and customer review collection.",
    },
    {
      icon: FaChartLine,
      number: "06",
      title: "Weekly P&L Reports & Growth Expert",
      desc: "Clear weekly reports on blended ROAS, customer acquisition cost (CAC), and inventory velocity with a dedicated growth expert, in Hindi or English.",
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full py-16 md:py-24 bg-paper font-sans border-b border-line">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="eyebrow mb-4">Done-For-You Execution</span>
          <h2 className="h-display h-section mb-5">
            Everything your brand needs to <span className="accent">launch and scale.</span>
          </h2>
          <p className="lead">
            You manufacture or supply the product. We manage the entire technology, marketing, and operational stack.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-cream border border-line p-6 sm:p-7 flex flex-col justify-between hover:border-brand/40 transition-colors rounded-[10px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-paper border border-line text-brand flex items-center justify-center rounded-[10px]">
                      <Icon className="w-5 h-5 text-brand" />
                    </div>
                    <span className="font-mono text-[14px] font-bold text-muted/60">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="h-display text-[19px] sm:text-[20px] font-semibold text-ink mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[13.5px] text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-line/50 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  <span className="text-[11.5px] font-mono text-ink uppercase tracking-wide">
                    Fully Managed by scaloMATRIX
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
