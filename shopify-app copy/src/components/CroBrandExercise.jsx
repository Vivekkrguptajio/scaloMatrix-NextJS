"use client";
import { useEffect, useRef, useState } from 'react';
import { FiHome, FiTag, FiSmartphone, FiClock, FiShoppingCart } from 'react-icons/fi';

const stores = [
  {
    label: 'Store A',
    rows: [['Visitors a month', '10,000'], ['Conversion rate', '1%'], ['Extra ad spend', '—']],
    orders: '100',
    after: false,
  },
  {
    label: 'Store B · after CRO',
    rows: [['Visitors a month', '10,000'], ['Conversion rate', '2%'], ['Extra ad spend', '₹0']],
    orders: '200',
    after: true,
  },
];

const leaks = [
  { Icon: FiHome, title: 'Homepage', body: 'Visitors can’t tell in 3 seconds what you sell or why it’s better.' },
  { Icon: FiTag, title: 'Product page', body: 'Unclear photos, a hidden price, no reviews, no shipping or returns info.' },
  { Icon: FiSmartphone, title: 'Mobile', body: 'Most shoppers browse on a phone, but the store was designed for desktop.' },
  { Icon: FiClock, title: 'Speed', body: 'Heavy apps and videos slow the page, and buyers leave before it loads.' },
  { Icon: FiShoppingCart, title: 'Cart & checkout', body: 'Surprise costs, too many steps and no trust signals at the last moment.' },
];

const croIsNot = ['Changing button colours', 'Endless discounts', 'Guessing', 'A redesign that just looks nice'];
const croIs = [
  'A clear message in 3 seconds',
  'Proof: reviews, policies, real photos',
  'Decisions from real visitor data',
  'A store built around how people buy',
];

const steps = [
  {
    n: '01',
    tag: 'Find',
    title: 'We find the leaks.',
    body: 'We study your Shopify analytics, GA4 and Clarity heatmaps and session recordings to see exactly where buyers drop off, before we touch a pixel.',
  },
  {
    n: '02',
    tag: 'Fix',
    title: 'We design the fix.',
    body: 'Mobile-first designs with real copy and real assets. Rounds, scope and timelines are agreed in writing before we start.',
  },
  {
    n: '03',
    tag: 'Launch',
    title: 'We build and ship it.',
    body: 'Hand-coded, speed-tuned and tested on real phones. You get a live link to check, and it’s done when you sign off.',
  },
];

const discountFix = ['More orders this week', 'Customers who only buy on sale', 'Lower profit on every order', 'Gone when the offer ends'];
const storeFix = ['More orders that keep coming', 'Customers who come back at full price', 'Better profit on every order', 'Builds your brand over time'];


// Phone-only: a scroll-driven before/after card. The card pins under the navbar and, as you keep scrolling,
// Store A turns into Store B: the orders count up from 100 to 200, orange squares fill in one by one
// (every order is one square) and the conversion rate climbs from 1% to 2%. No tapping needed.
function OrdersCompare() {
  const wrapRef = useRef(null);
  const [p, setP] = useState(0); // 0 = Store A, 1 = Store B

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    let ticking = false;
    const update = () => {
      ticking = false;
      const wrap = wrapRef.current;
      if (!wrap || !mq.matches) return;
      const r = wrap.getBoundingClientRect();
      const pinned = 84;                                   // card sticks this far below the top
      const distance = r.height - (window.innerHeight - pinned) ; // scroll distance while pinned
      const raw = (pinned - r.top) / Math.max(distance, 1);
      setP(Math.round(Math.min(1, Math.max(0, raw)) * 100) / 100);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  const A = stores[0], B = stores[1];
  const after = p >= 0.5;
  const orders = 100 + Math.round(100 * p);
  const conv = p < 0.02 ? '1%' : p > 0.98 ? '2%' : `${(1 + p).toFixed(1)}%`;
  const filled = Math.round(100 * p);

  return (
    <div ref={wrapRef} className="sm:hidden" style={{ height: '150vh' }}>
      <div className="sticky top-[84px] bg-paper border border-ink">
        {/* header: flips from Store A to Store B while you scroll, with a progress line under it */}
        <div className="relative px-4 py-3 border-b border-ink flex items-center justify-between">
          <div>
            <span className="block font-mono text-[9.5px] tracking-[0.14em] uppercase text-muted">{after ? 'After CRO' : 'Today'}</span>
            <span className={`block h-display text-[15px] mt-0.5 transition-colors duration-300 ${after ? 'text-brand' : 'text-ink'}`}>{after ? 'Store B' : 'Store A'}</span>
          </div>
          <span className={`font-mono text-[10px] tracking-[0.12em] uppercase px-2 py-1 transition-all duration-300 ${p > 0.98 ? 'bg-up-soft text-up opacity-100' : 'opacity-0'}`}>2x orders</span>
          <div className="absolute left-0 bottom-[-1px] h-[3px] bg-brand" style={{ width: `${p * 100}%` }} />
        </div>

        <div className="p-4">
          {/* big number counts up with the scroll */}
          <p className="flex items-baseline gap-2">
            <span className={`h-display text-[56px] leading-none tabular-nums ${after ? 'text-brand' : 'text-ink'}`}>{orders}</span>
            <span className="text-[12px] text-muted">orders</span>
          </p>

          {/* every order = one square */}
          <div className="mt-4 grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(20, minmax(0, 1fr))' }} aria-hidden="true">
            {Array.from({ length: 200 }).map((_, i) => {
              const extra = i >= 100;
              const on = extra && i - 100 < filled;
              return (
                <span
                  key={i}
                  className={`aspect-square ${extra ? (on ? 'bg-brand' : 'bg-transparent border border-line') : 'bg-ink'}`}
                />
              );
            })}
          </div>

          <dl className="mt-5 pt-4 border-t border-line flex flex-col gap-2.5 text-[12px]">
            <div className="flex items-center justify-between gap-4"><dt className="text-muted">Visitors a month</dt><dd className="font-semibold text-ink">10,000</dd></div>
            <div className="flex items-center justify-between gap-4"><dt className="text-muted">Conversion rate</dt><dd className={`font-semibold tabular-nums ${after ? 'text-up' : 'text-ink'}`}>{conv}</dd></div>
            <div className="flex items-center justify-between gap-4"><dt className="text-muted">Extra ad spend</dt><dd className="font-semibold text-ink">{after ? '₹0' : '—'}</dd></div>
          </dl>
        </div>
      </div>
    </div>
  );
}

// Tablet / laptop: the same look as the phone card, but static: both stores side by side, all at once.
function OrdersCompareStatic() {
  return (
    <div className="hidden sm:grid md:grid-cols-2 gap-5">
      {stores.map((st) => (
        <div key={st.label} className={`bg-paper border p-4 lg:p-5 ${st.after ? 'border-brand' : 'border-line'}`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="block font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted">{st.after ? 'After CRO' : 'Today'}</span>
              <span className={`block h-display text-[15px] mt-0.5 ${st.after ? 'text-brand' : 'text-ink'}`}>{st.after ? 'Store B' : 'Store A'}</span>
            </div>
            {st.after && <span className="font-mono text-[10px] tracking-[0.12em] uppercase px-2 py-1 bg-up-soft text-up">2x orders</span>}
          </div>

          <p className="flex items-baseline gap-2 mt-2">
            <span className={`h-display text-4xl leading-none tabular-nums ${st.after ? 'text-brand' : 'text-ink'}`}>{st.orders}</span>
            <span className="text-[12px] text-muted">orders</span>
          </p>

          {/* every order = one square (the second hundred are orange in Store B, empty in Store A) */}
          <div className="mt-3 grid gap-[2px]" style={{ gridTemplateColumns: 'repeat(40, minmax(0, 1fr))' }} aria-hidden="true">
            {Array.from({ length: 200 }).map((_, i) => (
              <span
                key={i}
                className={`aspect-square ${i < 100 ? 'bg-ink' : st.after ? 'bg-brand' : 'bg-transparent border border-line'}`}
              />
            ))}
          </div>

          <dl className="mt-4 pt-3 border-t border-line flex flex-col gap-2 text-[12px]">
            {st.rows.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4">
                <dt className="text-muted">{k}</dt>
                <dd className={`font-semibold ${st.after && k === 'Conversion rate' ? 'text-up' : 'text-ink'}`}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

const CroBrandExercise = () => {
  // Phone: "Our approach" is a timeline. An orange line draws down the left as you scroll and each step
  // lights up (dot, number, border) the moment the line reaches it.
  const stepsRef = useRef(null);
  const [fill, setFill] = useState(0);        // 0..1, how far the line has drawn
  const [reached, setReached] = useState(-1); // index of the last step the line has reached
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    let ticking = false;
    const update = () => {
      ticking = false;
      const box = stepsRef.current;
      if (!box || !mq.matches) return;
      const r = box.getBoundingClientRect();
      const mark = window.innerHeight * 0.6;               // the "reading line" on screen
      const f = Math.min(1, Math.max(0, (mark - r.top) / r.height));
      setFill(Math.round(f * 1000) / 1000);
      let k = -1;
      box.querySelectorAll('[data-step]').forEach((el, i) => { if (el.getBoundingClientRect().top <= mark) k = i; });
      setReached(k);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  // Phone: the leak card currently stuck at the top of the deck is the "active" one (orange border)
  const [activeLeak, setActiveLeak] = useState(-1);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    let ticking = false;
    const update = () => {
      ticking = false;
      if (!mq.matches) { setActiveLeak(-1); return; }
      const cards = [...document.querySelectorAll('[data-leak]')];
      let found = -1;
      cards.forEach((el, i) => {
        const stuckAt = 78 + i * 14;
        if (el.getBoundingClientRect().top <= stuckAt + 2) found = i;
      });
      setActiveLeak(found);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);

  return (
    <>
      {/* WHY CRO */}
      <section id="why-cro" className="relative w-full py-16 md:py-24 bg-cream text-ink font-sans scroll-mt-28 border-b border-line">
        <span className="eyebrow">Why CRO</span>
        <div className="container-x flex flex-col gap-12 md:gap-16">
          {/* Header */}
          <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end gap-6">
            <h2 className="h-display h-section lg:whitespace-nowrap">
              Same traffic. <span className="accent">More</span> orders.
            </h2>
            <p className="lead lg:w-[36%]">
              CRO (conversion rate optimisation) means making your store better at turning visitors into buyers. You don&apos;t pay for more ads. You fix what stops the people already on your store from buying.
            </p>
          </div>

          {/* Why 1% changes everything */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-8">
              <h3 className="h-display text-[clamp(1.4rem,2.6vw,2.1rem)]">
                Why 1% changes <span className="accent">everything</span>.
              </h3>
              <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted">Example · illustrative numbers</span>
            </div>

            <OrdersCompare />

            <OrdersCompareStatic />

            <p className="mt-6 text-[13px] text-muted">
              <strong className="text-ink font-semibold">Same visitors, same ad budget, twice the orders.</strong> That&apos;s what CRO does.
            </p>
          </div>

          {/* Where your store loses buyers */}
          <div>
            <h3 className="h-display text-[clamp(1.4rem,2.6vw,2.1rem)] mb-3">
              Where your store loses <span className="accent">buyers</span>.
            </h3>
            <p className="lead max-w-xl mb-8">
              Every leak is a buyer you already paid for, walking out. These are the five we find on almost every Shopify store.
            </p>
            {/* Phone: the five leaks stack like a deck: each card slides up and settles just below the previous one */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-sm:gap-5 max-sm:pb-2">
              {leaks.map(({ Icon, title, body }, i) => (
                <article
                  key={title}
                  data-leak
                  style={{ '--i': i }}
                  className={`max-sm:sticky max-sm:top-[calc(78px+var(--i)*14px)] max-sm:min-h-[150px] bg-paper border p-5 flex flex-col transition-all duration-300 sm:hover:-translate-y-1 sm:hover:shadow-[0_24px_50px_-30px_rgba(20,18,16,0.4)] ${activeLeak === i ? 'max-sm:border-brand' : 'max-sm:border-ink border-line'}`}
                >
                  <span className={`sm:hidden self-end font-mono text-[10px] tracking-[0.14em] mb-1 ${activeLeak === i ? 'text-brand' : 'text-muted'}`}>{String(i + 1).padStart(2, '0')} / {String(leaks.length).padStart(2, '0')}</span>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`w-9 h-9 shrink-0 flex items-center justify-center transition-colors duration-300 ${activeLeak === i ? 'max-sm:bg-brand max-sm:text-white bg-brand-soft text-brand' : 'bg-brand-soft text-brand'}`}>
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <h4 className="h-card text-[17px]">{title}</h4>
                  </div>
                  <p className="text-[13px] text-muted leading-relaxed">{body}</p>
                </article>
              ))}
            </div>
          </div>

          {/* It's not about button colours */}
          <div className="bg-paper border border-line grid lg:grid-cols-2">
            <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center gap-5 border-b lg:border-b-0 lg:border-r border-line">
              <h3 className="h-display text-[clamp(1.4rem,2.6vw,2.1rem)]">
                It&apos;s not about <span className="line-through decoration-2 text-muted/60 font-medium">button colours.</span>{' '}
                It&apos;s about <span className="bg-brand text-white px-2.5 py-0.5 inline-block -rotate-1">trust.</span>
              </h3>
              <p className="lead">
                CRO isn&apos;t random A/B tests or a new button colour. It&apos;s making the right things clear: what you sell, why it&apos;s worth the price, and why it&apos;s safe to buy from you.
              </p>
            </div>

            <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-2 gap-x-8">
              <div>
                <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted mb-3 pb-3 border-b border-line">CRO is not</p>
                <ul>
                  {croIsNot.map((t) => (
                    <li key={t} className="py-3 border-b border-line text-[13px] text-muted line-through decoration-1">{t}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-brand-text mb-3 pb-3 border-b border-line">CRO is</p>
                <ul>
                  {croIs.map((t) => (
                    <li key={t} className="py-3 border-b border-line text-[13px] font-medium text-ink">{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* BRAND (now the last block of Why CRO) */}
          <div id="brand" className="scroll-mt-28 flex flex-col gap-12 md:gap-16">
          <div>
            <div className="mb-8 md:mb-10">
              <h2 className="h-display h-section max-w-3xl">
                Discounts buy a sale. A better store earns a <span className="accent">customer</span>.
              </h2>
            </div>

            <div className="bg-panel text-white overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              <div className="p-7 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
                <p className="font-mono text-[11px] tracking-[0.14em] text-white/50 uppercase mb-4">The discount fix</p>
                <h4 className="h-card text-2xl mb-6">A spike that fades.</h4>
                <ul>
                  {discountFix.map((t) => (
                    <li key={t} className="py-3 border-t border-dashed border-white/15 text-[14px] text-white/60">{t}</li>
                  ))}
                </ul>
              </div>

              <div className="p-7 sm:p-10 bg-white/[0.04]">
                <p className="font-mono text-[11px] tracking-[0.14em] text-brand uppercase mb-4">The store fix</p>
                <h4 className="h-card text-2xl mb-6">
                  Growth that keeps <span className="text-brand">compounding</span>.
                </h4>
                <ul>
                  {storeFix.map((t) => (
                    <li key={t} className="py-3 border-t border-dashed border-white/15 text-[14px] text-white">{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
            <p className="text-muted text-[13px]">
              <strong className="text-ink font-semibold">In short:</strong> sales are the score. Your store is how you win.
            </p>
            <a href="#contact" className="btn-primary">Find my store&apos;s leaks <span aria-hidden="true">→</span></a>
          </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section id="approach" className="relative w-full py-16 md:py-24 bg-cream text-ink font-sans scroll-mt-28">
        <span className="eyebrow">Our approach</span>
        <div className="container-x">
          <div className="mb-8 md:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="h-display h-section lg:whitespace-nowrap">
              How we find and fix the <span className="accent">leaks</span>.
            </h2>
            <p className="lead lg:w-[34%]">
              Data in. Design out. Shipped live. No &ldquo;creative exploration phase&rdquo;, no 40-slide decks.
            </p>
          </div>

          <div ref={stepsRef} className="relative grid grid-cols-1 md:grid-cols-3 gap-5 max-sm:pl-7">
            {/* phone timeline: grey rail + orange line that draws as you scroll */}
            <div className="sm:hidden absolute left-[7px] top-3 bottom-3 w-px bg-line" aria-hidden="true" />
            <div className="sm:hidden absolute left-[7px] top-3 bottom-3 w-px" aria-hidden="true">
              <div className="w-[2px] -ml-px bg-brand" style={{ height: `${fill * 100}%` }} />
            </div>

            {steps.map((st, i) => {
              const on = reached >= i;
              return (
                <article
                  key={st.n}
                  data-step
                  className={`relative bg-paper border p-6 sm:p-7 flex flex-col transition-all duration-500 sm:hover:-translate-y-1 sm:hover:shadow-[0_24px_50px_-30px_rgba(20,18,16,0.4)] ${on ? 'max-sm:border-brand max-sm:opacity-100 max-sm:translate-x-0 border-line' : 'max-sm:border-line max-sm:opacity-60 max-sm:translate-x-2 border-line'}`}
                >
                  {/* phone timeline dot */}
                  <span aria-hidden="true" className={`sm:hidden absolute -left-[26px] top-7 w-[14px] h-[14px] border-2 transition-all duration-500 ${on ? 'bg-brand border-brand scale-100' : 'bg-paper border-line scale-90'}`} />
                  <div className="flex items-center justify-between mb-8">
                    <span className={`h-display text-4xl leading-none transition-colors duration-500 ${on ? 'text-brand' : 'max-sm:text-brand/30 text-brand'}`}>{st.n}</span>
                    <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand-text">{st.tag}</span>
                  </div>
                  <h3 className="h-card text-xl mb-4">{st.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed">{st.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
};

export default CroBrandExercise;
