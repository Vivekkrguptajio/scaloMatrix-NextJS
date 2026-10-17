"use client";
import { useState } from 'react';

const Calculator = () => {
  const [adSpend, setAdSpend] = useState(30); // in Lakhs
  const [roas, setRoas] = useState(5);
  const [lift, setLift] = useState(20); // in percentage

  // Calculations
  const beforeRevLakhs = adSpend * roas;
  const afterRevLakhs = beforeRevLakhs * (1 + lift / 100);
  const extraRevLakhs = afterRevLakhs - beforeRevLakhs;
  const yearlyNetGainLakhs = extraRevLakhs * 12;

  // Format helpers
  const formatMoney = (lakhs) => {
    if (lakhs >= 100) {
      return `₹${(lakhs / 100).toFixed(1).replace('.0', '')}Cr`;
    }
    return `₹${lakhs.toFixed(1).replace('.0', '')}L`;
  };

  const formatExtra = (lakhs) => {
    if (lakhs >= 100) {
      return `+₹${(lakhs / 100).toFixed(1).replace('.0', '')}Cr`;
    }
    return `+₹${lakhs.toFixed(1).replace('.0', '')}L`;
  };

  const sliders = [
    { label: 'Monthly ad spend', value: formatMoney(adSpend), min: 5, max: 200, step: 5, state: adSpend, set: setAdSpend, lo: '₹5L', hi: '₹2Cr' },
    { label: 'Sales per ₹1 of ads (ROAS)', value: `${roas}x`, min: 1, max: 20, step: 0.5, state: roas, set: setRoas, lo: '1x', hi: '20x' },
    { label: 'Extra sales', value: `+${lift}%`, min: 20, max: 60, step: 5, state: lift, set: setLift, lo: '+20%', hi: '+60%' },
  ];

  return (
    <section id="math" className="w-full py-16 md:py-24 font-sans bg-cream">
      <div className="max-w-[1280px] mx-auto flex flex-col px-5 sm:px-8 md:px-12 xl:px-16 w-full">

        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-10 md:mb-14 gap-6">
          <div className="lg:w-[58%]">
            <span className="eyebrow mb-4">Calculator</span>
            <h2 className="h-display h-section">
              Do the <span className="accent">math.</span>
            </h2>
          </div>
          <p className="lead lg:w-[34%]">
            Move the sliders to see what 20% or more extra sales is worth on the ad budget you already spend.
          </p>
        </div>

        <div className="w-full bg-paper rounded-[32px] border border-line shadow-[0_30px_60px_-40px_rgba(20,18,16,0.35)] flex flex-col lg:flex-row overflow-hidden">

          {/* Inputs */}
          <div className="w-full lg:w-[55%] p-6 md:p-10 flex flex-col justify-center gap-8">
            {sliders.map((sl) => (
              <div key={sl.label}>
                <div className="flex justify-between items-end mb-3">
                  <label className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">{sl.label}</label>
                  <span className="h-display text-xl text-brand">{sl.value}</span>
                </div>
                <div className="relative pb-6">
                  <input
                    type="range"
                    min={sl.min} max={sl.max} step={sl.step}
                    value={sl.state}
                    onChange={(e) => sl.set(Number(e.target.value))}
                    className="custom-slider"
                    aria-label={sl.label}
                  />
                  <div className="flex justify-between absolute bottom-0 w-full font-mono text-[10px] text-muted/70">
                    <span>{sl.lo}</span>
                    <span>{sl.hi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="w-full lg:w-[45%] bg-panel text-white flex flex-col justify-between">
            <div className="p-6 md:p-10 flex-1 flex flex-col gap-7">
              <div>
                <p className="font-mono text-[11px] tracking-[0.14em] text-white/55 uppercase mb-2">Extra sales / month</p>
                <p className="h-display text-4xl md:text-5xl text-brand">{formatExtra(extraRevLakhs)}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.14em] text-white/55 uppercase mb-1.5">Today · monthly</p>
                  <p className="h-display text-xl md:text-2xl">{formatMoney(beforeRevLakhs)}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.14em] text-white/55 uppercase mb-1.5">With us · monthly</p>
                  <p className="h-display text-xl md:text-2xl text-[#6EE7A8]">{formatMoney(afterRevLakhs)}</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="font-mono text-[10px] tracking-[0.14em] text-white/55 uppercase mb-1.5">Extra in 12 months</p>
                <p className="h-display text-2xl md:text-3xl text-[#6EE7A8]">{formatMoney(yearlyNetGainLakhs)}</p>
              </div>
            </div>

            <a href="#contact" className="group bg-brand hover:bg-brand-deep transition-colors p-5 md:p-6 flex items-center justify-between gap-4">
              <p className="text-sm md:text-[15px] text-white font-semibold leading-snug">
                Pays for itself in under 3 months. Book a free call.
              </p>
              <span className="text-white text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;
