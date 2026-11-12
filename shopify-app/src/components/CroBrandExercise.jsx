"use client";
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

const CroBrandExercise = () => {
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

            <div className="grid md:grid-cols-2 gap-5">
              {stores.map((s) => (
                <div key={s.label} className={`p-6 sm:p-7 border ${s.after ? 'border-brand' : 'border-line'}`}>
                  <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted mb-5">{s.label}</p>
                  <dl className="flex flex-col gap-3 pb-5 mb-5 border-b border-line text-[13px]">
                    {s.rows.map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between gap-4">
                        <dt className="text-muted">{k}</dt>
                        <dd className="font-semibold text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="flex items-baseline gap-2">
                    <span className={`h-display text-5xl sm:text-6xl leading-none ${s.after ? 'text-brand' : 'text-ink'}`}>{s.orders}</span>
                    <span className="text-[13px] text-muted">orders</span>
                  </p>
                </div>
              ))}
            </div>

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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {leaks.map(({ Icon, title, body }) => (
                <article key={title} className="bg-paper border border-line p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(20,18,16,0.4)]">
                  <span className="w-9 h-9 bg-brand-soft text-brand flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <h4 className="h-card text-[17px] mb-2">{title}</h4>
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
        </div>
      </section>

      {/* OUR APPROACH */}
      <section id="approach" className="relative w-full py-16 md:py-24 bg-cream text-ink font-sans scroll-mt-28 border-b border-line">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((st) => (
              <article key={st.n} className="bg-cream border border-line p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(20,18,16,0.4)]">
                <div className="flex items-center justify-between mb-8">
                  <span className="h-display text-4xl text-brand leading-none">{st.n}</span>
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand-text">{st.tag}</span>
                </div>
                <h3 className="h-card text-xl mb-4">{st.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{st.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND */}
      <section id="brand" className="relative w-full py-16 md:py-24 bg-cream text-ink font-sans scroll-mt-28">
        <span className="eyebrow">Brand</span>
        <div className="container-x flex flex-col gap-12 md:gap-16">
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
      </section>
    </>
  );
};

export default CroBrandExercise;
