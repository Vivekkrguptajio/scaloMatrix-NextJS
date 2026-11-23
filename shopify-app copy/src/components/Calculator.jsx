"use client";

import { useState } from 'react';

const Calculator = () => {
  const [sales, setSales] = useState(5); // in Lakhs
  const [commission, setCommission] = useState(25); // in percentage

  // Calculations
  const monthlyCutLakhs = (sales * commission) / 100;
  const yearlyCutLakhs = monthlyCutLakhs * 12;
  const retainedSalesLakhs = sales - monthlyCutLakhs;
  const retainedPct = (retainedSalesLakhs / sales) * 100;

  // Format helpers
  const formatMoney = (lakhs) => {
    if (lakhs >= 100) {
      return `₹${(lakhs / 100).toFixed(1).replace('.0', '')}Cr`;
    }
    if (lakhs < 1) {
      return `₹${Math.round(lakhs * 100)}K`;
    }
    return `₹${lakhs.toFixed(1).replace('.0', '')}L`;
  };

  const sliders = [
    {
      label: 'Monthly marketplace sales',
      value: formatMoney(sales),
      min: 1,
      max: 50,
      step: 0.5,
      state: sales,
      set: setSales,
      lo: '₹1L',
      hi: '₹50L',
    },
    {
      label: 'Marketplace commission / fee %',
      value: `${commission}%`,
      min: 10,
      max: 35,
      step: 1,
      state: commission,
      set: setCommission,
      lo: '10%',
      hi: '35%',
    },
  ];

  const bump = (sl, dir) =>
    sl.set(
      Math.min(sl.max, Math.max(sl.min, +(sl.state + dir * sl.step).toFixed(1)))
    );

  return (
    <section id="calculator" className="relative w-full py-16 md:py-24 font-sans bg-cream border-b border-line">
      <div className="container-x flex flex-col">
        {/* Header */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-10 md:mb-14 gap-6">
          <div className="lg:w-[58%]">
            <span className="eyebrow mb-4">Profit Leak Calculator</span>
            <h2 className="h-display h-section">
              Marketplace fees vs <span className="accent">your own store.</span>
            </h2>
          </div>
          <p className="lead lg:w-[38%]">
            Move the sliders to see how much money you lose in marketplace cuts every single month — and how much stays in your pocket with your own brand.
          </p>
        </div>

        {/* ───────── Phone layout: live result on top, controls below ───────── */}
        <div className="sm:hidden flex flex-col gap-3">
          {/* Live result */}
          <div className="bg-panel text-white p-4 border border-line">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[9px] tracking-[0.12em] text-brand-soft uppercase mb-0.5">
                  Commission lost / month
                </p>
                <p className="h-display text-[26px] leading-none text-brand">
                  {formatMoney(monthlyCutLakhs)}
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[9px] tracking-[0.12em] text-white/70 uppercase mb-0.5">
                  Lost in 12 months
                </p>
                <p className="h-display text-[16px] leading-none text-white">
                  {formatMoney(yearlyCutLakhs)}
                </p>
              </div>
            </div>

            {/* Comparison Bar */}
            <div className="mt-4 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <span className="w-[60px] shrink-0 font-mono text-[8px] tracking-[0.08em] text-white/80 uppercase">
                  You Keep
                </span>
                <div className="flex-1 h-2 bg-black/40">
                  <div
                    className="h-full bg-brand transition-all duration-300"
                    style={{ width: `${retainedPct}%` }}
                  />
                </div>
                <span className="w-[50px] shrink-0 text-right text-[10px] font-semibold text-white">
                  {formatMoney(retainedSalesLakhs)}
                </span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-paper border border-line p-4 flex flex-col gap-4">
            {sliders.map((sl) => (
              <div key={sl.label}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <label className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">
                    {sl.label}
                  </label>
                  <span className="h-display text-[16px] font-semibold text-brand">
                    {sl.value}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => bump(sl, -1)}
                    className="w-8 h-8 border border-line bg-cream text-ink text-base font-bold flex items-center justify-center shrink-0 active:bg-brand active:text-white"
                  >
                    −
                  </button>
                  <input
                    type="range"
                    min={sl.min}
                    max={sl.max}
                    step={sl.step}
                    value={sl.state}
                    onChange={(e) => sl.set(+e.target.value)}
                    className="flex-1 accent-[#FD5800] h-2 bg-cream rounded cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => bump(sl, 1)}
                    className="w-8 h-8 border border-line bg-cream text-ink text-base font-bold flex items-center justify-center shrink-0 active:bg-brand active:text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ───────── Desktop layout: 2-column card ───────── */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sliders (Left 7 cols) */}
          <div className="lg:col-span-7 bg-paper border border-line p-8 flex flex-col justify-between">
            <div>
              <p className="font-mono text-[11px] tracking-[0.12em] text-brand uppercase font-semibold mb-6">
                Adjust Your Business Numbers
              </p>

              <div className="space-y-8">
                {sliders.map((sl) => (
                  <div key={sl.label}>
                    <div className="flex items-baseline justify-between mb-3">
                      <label className="font-mono text-[12px] tracking-[0.1em] text-ink uppercase font-medium">
                        {sl.label}
                      </label>
                      <span className="h-display text-[22px] font-bold text-brand">
                        {sl.value}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => bump(sl, -1)}
                        className="w-9 h-9 border border-line bg-cream text-ink font-bold hover:bg-brand hover:text-white transition-colors flex items-center justify-center"
                      >
                        −
                      </button>
                      <input
                        type="range"
                        min={sl.min}
                        max={sl.max}
                        step={sl.step}
                        value={sl.state}
                        onChange={(e) => sl.set(+e.target.value)}
                        className="flex-1 accent-[#FD5800] h-2.5 bg-cream rounded cursor-pointer"
                      />
                      <button
                        type="button"
                        onClick={() => bump(sl, 1)}
                        className="w-9 h-9 border border-line bg-cream text-ink font-bold hover:bg-brand hover:text-white transition-colors flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>

                    <div className="flex justify-between text-[11px] font-mono text-muted mt-2">
                      <span>{sl.lo}</span>
                      <span>{sl.hi}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-line/60">
              <p className="text-[12px] text-muted italic">
                * Note: Illustration only. Actual profit margins depend on product category, courier shipping rates, and ad spend. Ad budget &amp; Shopify plan are paid directly by you to Meta &amp; Shopify.
              </p>
            </div>
          </div>

          {/* Results Card (Right 5 cols) */}
          <div className="lg:col-span-5 bg-panel text-white border border-line p-8 flex flex-col justify-between shadow-lg">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand-soft block mb-2">
                What Marketplaces Take From You
              </span>

              <div className="mb-6 pb-6 border-b border-white/15">
                <p className="text-[13px] text-white/70 mb-1">
                  Commission Paid Every Month:
                </p>
                <p className="h-display text-[38px] lg:text-[44px] font-bold text-brand leading-none">
                  {formatMoney(monthlyCutLakhs)}
                </p>
                <p className="text-[12px] text-white/60 mt-1">
                  Drained straight from your margin
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/15">
                <p className="text-[13px] text-white/70 mb-1">
                  Commission Leaked In 12 Months:
                </p>
                <p className="h-display text-[30px] font-semibold text-white leading-none">
                  {formatMoney(yearlyCutLakhs)}
                </p>
                <p className="text-[12px] text-white/60 mt-1">
                  Money that could build your own brand
                </p>
              </div>

              <div>
                <p className="text-[13px] text-white/70 mb-1">
                  Revenue Kept With Your Own Brand:
                </p>
                <p className="h-display text-[24px] font-semibold text-white/95 leading-none">
                  {formatMoney(retainedSalesLakhs)}
                  <span className="text-[13px] font-normal text-white/60 ml-2">
                    ({retainedPct.toFixed(0)}% retained)
                  </span>
                </p>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-white/15">
              <a
                href="#lead-form"
                className="btn-primary w-full py-3.5 text-center text-[14px] font-semibold block"
              >
                Stop Leaking Commissions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
