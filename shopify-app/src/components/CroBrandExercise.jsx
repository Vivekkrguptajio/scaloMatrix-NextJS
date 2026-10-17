"use client";

const factors = [
  {
    n: '01',
    tag: 'Audience',
    meta: '12-month LTV',
    title: <>The page <span className="accent">chooses</span> your customer.</>,
    body: (
      <>
        Discount-forward hero → discount-forward buyers. They convert <strong className="text-ink font-semibold">+18%</strong> faster and churn <strong className="text-ink font-semibold">3×</strong> harder. A brand-forward page is slower on day one and <strong className="text-ink font-semibold">compounds</strong> over year one. We pick for LTV, not Monday.
      </>
    ),
    foot: [['Discount LTV', '₹1.8k'], ['Brand LTV', '₹5.4k']],
  },
  {
    n: '02',
    tag: 'Language',
    meta: '5+ buyer interviews',
    title: <>Resonance is a <span className="accent">metric</span>. It just hides.</>,
    body: (
      <>
        Pages that convert don&apos;t describe the product — they <strong className="text-ink font-semibold">sound like the customer already thinking about it.</strong> &ldquo;Bloated after lunch&rdquo; beats &ldquo;gut health optimisation.&rdquo; We interview real buyers and borrow their exact words.
      </>
    ),
    foot: [['Agency copy', '✕'], ['Customer words', '✓']],
  },
  {
    n: '03',
    tag: 'Trust',
    meta: 'Brand ≠ vibes',
    title: <>Brand is the <span className="accent">floor</span> your CVR bounces off.</>,
    body: (
      <>
        Two pages, identical copy, identical CTAs. Page A looks like it&apos;ll still exist in 2027. Page B doesn&apos;t. Page A wins <strong className="text-ink font-semibold">+27%</strong>. Design and trust are the same fight — and neither shows up in a heatmap.
      </>
    ),
    foot: [['Trust', '→'], ['Conversion', '+27%']],
  },
];

const CroBrandExercise = () => {
  return (
    <section id="cro" className="w-full py-16 md:py-24 bg-paper text-ink font-sans">
      <div className="max-w-[1280px] mx-auto w-full px-5 sm:px-8 md:px-12 xl:px-16 flex flex-col gap-12 md:gap-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end gap-6">
          <div className="lg:w-[60%]">
            <span className="eyebrow mb-4">Why CRO</span>
            <h2 className="h-display h-section">
              CRO is a brand exercise.<br />
              The % is{' '}
              <a
                href="#case-studies"
                className="accent underline decoration-brand/30 underline-offset-[6px] hover:decoration-brand"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                the receipt.
              </a>
            </h2>
          </div>
          <p className="lead lg:w-[34%]">
            A &ldquo;+30% lift&rdquo; on the wrong audience attracts more of the wrong customer, who churn in six weeks. We optimise what moves the number — story, audience, trust. Not the button colour.
          </p>
        </div>

        {/* Re-frame */}
        <div className="bg-cream rounded-[32px] border border-line p-6 sm:p-10 lg:p-14 grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-center">
          <h3 className="h-display text-[clamp(1.4rem,2.6vw,2.1rem)]">
            CRO isn&apos;t <span className="line-through decoration-2 text-muted/60 font-medium">a button-colour war.</span>{' '}
            It&apos;s <span className="bg-brand text-white px-2.5 py-0.5 rounded-lg inline-block -rotate-1">who walks in the door.</span>
          </h3>
          <p className="lead">
            A landing page is the first thing your brand says out loud. Say it wrong and the test still &ldquo;wins&rdquo; — with people who were never going to stay. Say it right and the % compounds over twelve months, not twelve hours.
          </p>
        </div>

        {/* Three factors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {factors.map((f) => (
            <article key={f.n} className="bg-paper border border-line rounded-[26px] p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(20,18,16,0.4)]">
              <div className="flex items-center justify-between mb-8">
                <span className="h-display text-4xl text-brand/25 leading-none">{f.n}</span>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted text-right">{f.tag}<br />{f.meta}</span>
              </div>
              <h4 className="h-card text-xl mb-4">{f.title}</h4>
              <p className="text-[15px] text-muted leading-relaxed mb-8">{f.body}</p>
              <div className="mt-auto pt-4 border-t border-dashed border-line flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.1em]">
                <span className="text-muted">{f.foot[0][0]} · <span className="text-ink">{f.foot[0][1]}</span></span>
                <span className="text-brand-text">{f.foot[1][0]} · {f.foot[1][1]}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Case: the win nobody should want */}
        <div className="bg-panel text-white rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
          <div className="p-7 sm:p-10 flex flex-col justify-between gap-6 border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-white/50 uppercase mb-4">The &ldquo;win&rdquo; nobody should want</p>
              <h4 className="h-card text-xl mb-3">Variant lifted CVR week one.</h4>
              <p className="h-display text-5xl sm:text-6xl text-[#FF6B6B]">+34%</p>
            </div>
            <p className="font-mono text-xs text-white/55 leading-relaxed pt-4 border-t border-dashed border-white/15">
              Discount-led. Returns up <span className="text-[#FF6B6B]">+61%</span>. LTV fell to <span className="text-[#FF6B6B]">₹1.8k</span>. Losing money, faster.
            </p>
          </div>

          <div className="px-6 py-5 lg:px-8 bg-white/[0.04] flex items-center justify-center text-center">
            <p className="font-mono text-[11px] tracking-[0.14em] text-brand uppercase font-medium">
              We killed it<br />in week 2 →
            </p>
          </div>

          <div className="p-7 sm:p-10 flex flex-col justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.14em] text-white/50 uppercase mb-4">The win worth keeping</p>
              <h4 className="h-card text-xl mb-3">Brand-led hero, compounding by month three.</h4>
              <p className="h-display text-5xl sm:text-6xl text-brand">+22%</p>
            </div>
            <p className="font-mono text-xs text-white/55 leading-relaxed pt-4 border-t border-dashed border-white/15">
              Day-one CVR +22%. 90-day LTV ₹5.4k. Repeat rate <span className="text-brand">+41%</span>. This is the case study.
            </p>
          </div>
        </div>

        {/* Footer row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
          <p className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
            TL;DR — the % is the score. The brand is the game.
          </p>
          <a href="#contact" className="btn-primary">Get the real audit <span aria-hidden="true">→</span></a>
        </div>

      </div>
    </section>
  );
};

export default CroBrandExercise;
