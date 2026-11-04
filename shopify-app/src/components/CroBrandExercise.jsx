"use client";

const steps = [
  {
    n: '01',
    tag: 'Data in',
    title: 'Deep platform analysis.',
    body: 'We pull signal from Meta, Shopify, GA, Clarity and every other platform that matters. Heatmaps, funnels, drop-offs, session recordings — the full picture before we touch a pixel.',
  },
  {
    n: '02',
    tag: 'Design out',
    title: 'Mobile-first, perfected.',
    body: 'Rounds of iteration, as agreed in your proposal, until the design is right. Real copy, real assets, the exact strategy that will go live. No surprises: scope, revisions and refunds are written down before we start. That\u2019s the deal.',
  },
  {
    n: '03',
    tag: 'Shipped live',
    title: 'Development + live link.',
    body: 'Hand-coded, speed-tuned, QA\u2019d on real devices. You get a live link to test, click, break. We call it done when you\u2019ve tested it and signed it off.',
  },
];

const CroBrandExercise = () => {
  return (
    <section id="cro" className="w-full py-16 md:py-24 bg-cream text-ink font-sans">
      <div className="container-x flex flex-col gap-12 md:gap-16">

        {/* WHY CRO */}
        <div id="why-cro" className="flex flex-col gap-12 md:gap-16 scroll-mt-28">
          {/* Header */}
          <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end gap-6">
            <div className="lg:w-[60%]">
              <span className="eyebrow mb-4">Why CRO</span>
              <h2 className="h-display h-section">
                More sales, from the <span className="accent">right</span> customers.
              </h2>
            </div>
          </div>

          {/* Re-frame */}
          <div className="bg-paper rounded-[32px] border border-line p-6 sm:p-10 lg:p-14 grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-center">
            <h3 className="h-display text-[clamp(1.4rem,2.6vw,2.1rem)]">
              It&apos;s not about <span className="line-through decoration-2 text-muted/60 font-medium">button colours.</span>{' '}
              It&apos;s about <span className="bg-brand text-white px-2.5 py-0.5 rounded-lg inline-block -rotate-1">who walks in the door.</span>
            </h3>
            <p className="lead">
              Your landing page is the first thing a customer sees from your brand. If it says the wrong thing, you can still get more orders — from people who never come back. Say the right thing and the gains keep growing for months.
            </p>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div id="approach" className="scroll-mt-28">
          <div className="mb-8 md:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="lg:w-[55%]">
              <span className="eyebrow mb-4">Our approach</span>
              <h2 className="h-display text-[clamp(1.75rem,3.4vw,2.6rem)]">
                How the <span className="accent">sausage</span> gets made.
              </h2>
            </div>
            <p className="lead lg:w-[38%]">
              Data in. Design out. Shipped live. No &ldquo;creative exploration phase.&rdquo; No 40-slide decks. We&apos;re builders who happen to be researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((st) => (
              <article key={st.n} className="bg-cream border border-line rounded-[26px] p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(20,18,16,0.4)]">
                <div className="flex items-center justify-between mb-8">
                  <span className="h-display text-4xl text-brand/25 leading-none">{st.n}</span>
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand-text">{st.tag}</span>
                </div>
                <h3 className="h-card text-xl mb-4">{st.title}</h3>
                <p className="text-[15px] text-muted leading-relaxed">{st.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* BRAND */}
        <div id="brand" className="scroll-mt-28">
          <div className="mb-8 md:mb-10">
            <span className="eyebrow mb-4">Brand</span>
            <h2 className="h-display text-[clamp(1.75rem,3.4vw,2.6rem)]">
              Brand-first, <span className="accent">not</span> discount-first.
            </h2>
          </div>
          <div className="bg-panel text-white rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
            <div className="p-7 sm:p-10 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <p className="font-mono text-[11px] tracking-[0.14em] text-white/50 uppercase mb-4">A win that isn&apos;t a win</p>
                <h4 className="h-card text-xl mb-3">Test A: more orders in week 1</h4>
                <p className="h-display text-5xl sm:text-6xl text-[#FF6B6B]">+34%</p>
              </div>
              <p className="text-sm text-white/60 leading-relaxed pt-4 border-t border-dashed border-white/15">
                It was built on discounts. Returns went up <span className="text-[#FF6B6B]">61%</span> and each customer was worth only <span className="text-[#FF6B6B]">₹1.8k</span>. More sales, less money.
              </p>
            </div>

            <div className="px-6 py-5 lg:px-8 bg-white/[0.04] flex items-center justify-center text-center">
              <p className="font-mono text-[11px] tracking-[0.14em] text-brand uppercase font-medium">
                We stopped it<br />in week 2 →
              </p>
            </div>

            <div className="p-7 sm:p-10 flex flex-col justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] tracking-[0.14em] text-white/50 uppercase mb-4">A win worth keeping</p>
                <h4 className="h-card text-xl mb-3">Test B: brand-first page</h4>
                <p className="h-display text-5xl sm:text-6xl text-brand">+22%</p>
              </div>
              <p className="text-sm text-white/60 leading-relaxed pt-4 border-t border-dashed border-white/15">
                Orders up 22% from day one. After 90 days each customer was worth <span className="text-brand">₹5.4k</span>, and repeat purchases rose <span className="text-brand">41%</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
          <p className="text-muted text-[15px]">
            In short: sales numbers are the score. Your brand is the game.
          </p>
          <a href="#contact" className="btn-primary">Get a free audit <span aria-hidden="true">→</span></a>
        </div>

      </div>
    </section>
  );
};

export default CroBrandExercise;
