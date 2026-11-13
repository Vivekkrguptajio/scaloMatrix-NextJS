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
    if (lakhs < 1) {
      return `₹${Math.round(lakhs * 100)}K`;
    }
    return `₹${lakhs.toFixed(1).replace('.0', '')}L`;
  };

  const formatExtra = (lakhs) => {
    if (lakhs >= 100) {
      return `+₹${(lakhs / 100).toFixed(1).replace('.0', '')}Cr`;
    }
    if (lakhs < 1) {
      return `+₹${Math.round(lakhs * 100)}K`;
    }
    return `+₹${lakhs.toFixed(1).replace('.0', '')}L`;
  };

  const sliders = [
    { label: 'Monthly ad spend', value: formatMoney(adSpend), min: 0.5, max: 200, step: 0.5, state: adSpend, set: setAdSpend, lo: '₹50K', hi: '₹2Cr' },
    { label: 'Sales per ₹1 of ads (ROAS)', value: `${roas}x`, min: 1, max: 20, step: 0.5, state: roas, set: setRoas, lo: '1x', hi: '20x' },
    { label: 'Extra sales', value: `+${lift}%`, min: 20, max: 45, step: 5, state: lift, set: setLift, lo: '+20%', hi: '+45%' },
  ];

  const bump = (sl, dir) => sl.set(Math.min(sl.max, Math.max(sl.min, +(sl.state + dir * sl.step).toFixed(2))));
  const todayPct = afterRevLakhs ? (beforeRevLakhs / afterRevLakhs) * 100 : 100;

  return (
    <section id="math" className="relative w-full py-16 md:py-24 font-sans bg-cream">
      <div className="container-x flex flex-col">

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

        {/* ───────── Phone layout: live result on top, thumb-friendly controls below ───────── */}
        <div className="sm:hidden flex flex-col gap-3">
          {/* Live result (sticks under the navbar while you adjust the controls) */}
          <div className="sticky top-[74px] z-10 bg-panel text-white p-4">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[9.5px] tracking-[0.14em] text-white/55 uppercase mb-1">Extra sales / month</p>
                <p className="h-display text-[34px] leading-none text-brand">{formatExtra(extraRevLakhs)}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[9.5px] tracking-[0.14em] text-white/55 uppercase mb-1">In 12 months</p>
                <p className="h-display text-[20px] leading-none text-[#6EE7A8]">{formatMoney(yearlyNetGainLakhs)}</p>
              </div>
            </div>

            {/* Today vs With us, drawn as two bars */}
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-[52px] shrink-0 font-mono text-[9px] tracking-[0.1em] text-white/55 uppercase">Today</span>
                <div className="flex-1 h-2 bg-white/10"><div className="h-full bg-white/60 transition-all duration-300" style={{ width: `${todayPct}%` }} /></div>
                <span className="w-[52px] shrink-0 text-right text-[12px] font-semibold">{formatMoney(beforeRevLakhs)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[52px] shrink-0 font-mono text-[9px] tracking-[0.1em] text-[#6EE7A8] uppercase">With us</span>
                <div className="flex-1 h-2 bg-white/10"><div className="h-full bg-[#6EE7A8] transition-all duration-300" style={{ width: '100%' }} /></div>
                <span className="w-[52px] shrink-0 text-right text-[12px] font-semibold text-[#6EE7A8]">{formatMoney(afterRevLakhs)}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-paper border border-line p-4 flex flex-col gap-5">
            {sliders.map((sl) => (
              <div key={sl.label}>
                <div className="flex items-baseline justify-between mb-2">
                  <label className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">{sl.label}</label>
                  <span className={`h-display text-[18px] ${sl.label === 'Extra sales' ? 'text-up' : 'text-brand'}`}>{sl.value}</span>
                </div>


                <div className="flex items-center gap-2">
                  <button type="button" aria-label={`Decrease ${sl.label}`} onClick={() => bump(sl, -1)} className="w-9 h-9 shrink-0 border border-ink flex items-center justify-center text-lg leading-none active:bg-brand active:text-white active:border-brand">−</button>
                  <input
                    type="range"
                    min={sl.min} max={sl.max} step={sl.step}
                    value={sl.state}
                    onChange={(e) => sl.set(Number(e.target.value))}
                    className="custom-slider flex-1"
                    aria-label={sl.label}
                  />
                  <button type="button" aria-label={`Increase ${sl.label}`} onClick={() => bump(sl, 1)} className="w-9 h-9 shrink-0 border border-ink flex items-center justify-center text-lg leading-none active:bg-brand active:text-white active:border-brand">+</button>
                </div>
                <div className="flex justify-between mt-1.5 font-mono text-[9px] text-muted/70 px-[44px]">
                  <span>{sl.lo}</span>
                  <span>{sl.hi}</span>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="group/btn btn-slide btn-slide-white w-full flex items-center justify-center gap-2.5 font-semibold text-sm md:text-[12px] px-6 py-3.5 transition-all duration-300 bg-panel text-white border border-ink hover:text-[#141210]">
            Book free audit
            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="hidden sm:flex w-full bg-paper border border-line shadow-[0_30px_60px_-40px_rgba(20,18,16,0.35)] flex-col lg:flex-row overflow-hidden">

          {/* Inputs */}
          <div className="w-full lg:w-[55%] p-6 md:p-10 flex flex-col justify-center gap-8">
            {sliders.map((sl) => (
              <div key={sl.label}>
                <div className="flex justify-between items-end mb-3">
                  <label className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">{sl.label}</label>
                  <span className={`h-display text-xl ${sl.label === 'Extra sales' ? 'text-up' : 'text-brand'}`}>{sl.value}</span>
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

            <a href="#contact" className="group/btn btn-slide btn-slide-white w-full flex items-center justify-center gap-2.5 font-semibold text-sm md:text-[12px] px-6 py-3.5 transition-all duration-300 bg-panel text-white border border-ink hover:text-[#141210]">
            Book free audit
            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          </div>

        </div>

        <p className="mt-4 text-xs text-muted leading-relaxed">
          Illustration only, based on the numbers you enter. It is not a forecast or a guarantee of results, which depend on your traffic, product and market (<a href="/terms#s12" className="underline underline-offset-2">Terms, section 12</a>).
        </p>
      </div>
    </section>
  );
};

export default Calculator;
