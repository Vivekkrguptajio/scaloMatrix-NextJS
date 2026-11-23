"use client";

import { FaCalendarAlt, FaCheckSquare } from 'react-icons/fa';

export default function Roadmap90Days() {
  const steps = [
    {
      stage: "Stage 1",
      timeline: "Weeks 1–2 [VERIFY]",
      title: "Store Build & Technical Launch",
      weDo: [
        "Build custom high-converting Shopify store",
        "Setup payment gateways, UPI, and courier shipping integrations",
        "Setup Meta Pixel, conversion tracking & catalog sync",
        "Produce initial ad creatives and compelling sales copy",
      ],
      youDo: [
        "Send product catalog details, wholesale costs & pricing",
        "Share clear product photos and inventory availability",
        "Provide GST number & warehouse pickup address",
      ],
    },
    {
      stage: "Stage 2",
      timeline: "Weeks 3–4",
      title: "Market Validation & First Orders",
      weDo: [
        "Launch initial Meta ad testing with low budget (₹500–₹1,000/day)",
        "Identify winning products and profitable creative hooks",
        "Activate automated WhatsApp COD address verification to curb fake orders",
        "Monitor courier delivery performance and customer questions",
      ],
      youDo: [
        "Dispatch customer orders on same/next day",
        "Provide daily stock updates on fast-moving SKUs",
        "Share customer feedback or common product inquiries",
      ],
    },
    {
      stage: "Stage 3",
      timeline: "Weeks 5–8",
      title: "Optimization & Profitability",
      weDo: [
        "Cut non-performing ad sets; allocate spend to profitable winners",
        "Implement store conversion rate optimization (CRO) improvements",
        "Setup automated WhatsApp abandoned cart recovery & review sequences",
        "Maintain target blended ROAS and positive unit economics",
      ],
      youDo: [
        "Maintain inventory buffer for proven bestseller items",
        "Coordinate with courier delivery executives for prompt parcel pickups",
      ],
    },
    {
      stage: "Stage 4",
      timeline: "Day 90+",
      title: "Scaling & Repeat Brand Growth",
      weDo: [
        "Scale Meta ad spend strategically while safeguarding ROAS",
        "Launch retargeting, lookalike audiences, and bundle offers",
        "Analyze repeat customer purchase cycles and increase average order value",
        "Weekly strategic P&L review directly with founders",
      ],
      youDo: [
        "Plan bulk production/raw material purchasing for higher volumes",
        "Introduce seasonal new variants or complementary product lines",
      ],
    },
  ];

  return (
    <section id="roadmap" className="relative w-full py-16 md:py-24 bg-paper font-sans border-b border-line">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="eyebrow mb-4">Transparent Execution</span>
          <h2 className="h-display h-section mb-5">
            Your first 90 days <span className="accent">roadmap.</span>
          </h2>
          <p className="lead">
            Every step is clearly planned. You always know exactly what we are executing and what is needed from you.
          </p>
        </div>

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-cream border border-line p-6 flex flex-col justify-between hover:border-brand/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-line">
                  <span className="font-mono text-[11px] font-bold text-brand uppercase tracking-wider">
                    {st.stage}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted bg-paper px-2 py-0.5 border border-line">
                    <FaCalendarAlt className="w-2.5 h-2.5 text-brand" />
                    {st.timeline}
                  </span>
                </div>

                <h3 className="h-display text-[17px] font-semibold text-ink mb-4 leading-snug">
                  {st.title}
                </h3>

                {/* We do */}
                <div className="mb-4">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-brand font-semibold mb-2">
                    ⚡ What We Do:
                  </p>
                  <ul className="space-y-1.5">
                    {st.weDo.map((item, i) => (
                      <li key={i} className="text-[12.5px] text-ink flex items-start gap-2">
                        <span className="text-brand shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* You do */}
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-muted font-semibold mb-2">
                    📦 What You Do:
                  </p>
                  <ul className="space-y-1.5">
                    {st.youDo.map((item, i) => (
                      <li key={i} className="text-[12.5px] text-muted flex items-start gap-2">
                        <span className="text-muted shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-line/60">
                <span className="text-[11px] font-mono text-muted">
                  Step {idx + 1} of 4
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
