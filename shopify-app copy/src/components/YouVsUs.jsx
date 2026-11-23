"use client";

import { FaCheck, FaUserTie, FaRocket } from 'react-icons/fa';

export default function YouVsUs() {
  const youTasks = [
    "Keep quality products ready in stock at your factory/warehouse",
    "Pack orders and hand over packages to couriers upon daily pickup",
    "Provide product details, pricing, and basic catalog photos",
    "Pay your ad budget directly to Meta & Shopify plan directly to Shopify",
  ];

  const weTasks = [
    "Design, build, and optimize your high-converting Shopify store",
    "Create high-converting video/image ad creatives and copy",
    "Run, test, and optimize Meta (Facebook & Instagram) ad campaigns",
    "Integrate payment gateways (UPI, Cards, NetBanking, COD)",
    "Integrate courier partners with automated WhatsApp OTP address verification",
    "Setup automated WhatsApp notifications (cart recovery, tracking, reviews)",
    "Weekly P&L reviews, ROAS monitoring, and founder-led strategy calls",
  ];

  return (
    <section id="you-vs-us" className="relative w-full py-16 md:py-24 bg-cream font-sans border-b border-line">
      <div className="container-x">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="eyebrow mb-4">Division of Work</span>
          <h2 className="h-display h-section mb-4">
            You vs Us: <span className="accent">Zero Confusion.</span>
          </h2>
          <p className="lead">
            We don&apos;t ask you to become a digital marketer. You focus on what you do best: making great products. We handle the rest.
          </p>
        </div>

        {/* 2 Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* YOU */}
          <div className="bg-paper border border-line p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-5 mb-6 border-b border-line">
                <div className="w-10 h-10 bg-cream text-ink border border-line flex items-center justify-center">
                  <FaUserTie className="w-5 h-5 text-muted" />
                </div>
                <div>
                  <h3 className="h-display text-[20px] font-semibold text-ink">
                    What You Do
                  </h3>
                  <p className="text-[12px] font-mono uppercase text-muted">
                    The Product Champion
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {youTasks.map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-cream border border-line flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-semibold text-ink">
                      {i + 1}
                    </span>
                    <span className="text-[14px] text-ink leading-relaxed">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-line/60">
              <p className="text-[12px] text-muted font-medium">
                ⏱️ Estimated time required from you: <span className="text-ink font-semibold">1–2 hours / day for dispatch</span>
              </p>
            </div>
          </div>

          {/* US */}
          <div className="bg-panel text-white p-6 sm:p-8 flex flex-col justify-between relative shadow-xl">
            <div>
              <div className="flex items-center gap-3 pb-5 mb-6 border-b border-white/10">
                <div className="w-10 h-10 bg-brand text-white flex items-center justify-center">
                  <FaRocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="h-display text-[20px] font-semibold text-white">
                    What scaloMATRIX Does
                  </h3>
                  <p className="text-[12px] font-mono uppercase text-brand-soft">
                    Your Complete D2C Team
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3.5">
                {weTasks.map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/20 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck className="w-3 h-3 text-brand" />
                    </div>
                    <span className="text-[13.5px] text-white/90 leading-relaxed">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <p className="text-[12px] text-white/70 font-medium">
                🎯 Our alignment: <span className="text-brand font-semibold">We earn only when you get orders</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
