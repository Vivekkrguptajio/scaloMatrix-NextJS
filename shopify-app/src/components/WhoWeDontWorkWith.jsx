"use client";

const notFor = [
  ['Your CEO has a doc of 47 things the page must say.', 'It should say one.'],
  ["You haven't talked to a customer in 90 days.", "We won't guess for you."],
  ['You measure deliverables in pages, not revenue.', 'Hire a freelancer.'],
  ['You treat agencies like vendors, not partners.', "Life's too short."],
  ['You sell vapes, predatory lending, or MLMs.', 'Hard no.'],
];

const forYou = [
  ["You've hit a ceiling on CVR and don't know why."],
  ['You have a product that actually works.', "We can't fix a bad one."],
  ['You spend at least ₹2L/mo on ads.', 'We need traffic to test.'],
  ["You want a team that pushes back when you're wrong."],
  ['You want to build a brand, not just a dropshipping store.'],
];

const Item = ({ main, note, dark }) => (
  <li className={`py-4 border-b border-dashed last:border-b-0 flex gap-3 text-sm leading-relaxed ${dark ? 'border-white/15' : 'border-line'}`}>
    <span className={`shrink-0 mt-0.5 ${dark ? 'text-white/40' : 'text-brand'}`} aria-hidden="true">{dark ? '✕' : '✓'}</span>
    <span className={dark ? 'text-white/85' : 'text-ink'}>
      {main}{note && <span className={dark ? 'text-white/45' : 'text-muted'}> {note}</span>}
    </span>
  </li>
);

const WhoWeDontWorkWith = () => {
  return (
    <section className="w-full py-16 md:py-24 font-sans bg-cream">
      <div className="max-w-[1280px] mx-auto w-full px-5 sm:px-8 md:px-12 xl:px-16">

        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-10 md:mb-14 gap-6">
          <div className="lg:w-[58%]">
            <span className="eyebrow mb-4">Fit check</span>
            <h2 className="h-display h-section">
              Who we <span className="accent">don&apos;t</span> work with.
            </h2>
          </div>
          <p className="lead lg:w-[34%]">
            Saying no is our competitive advantage. Here&apos;s the list, in writing, so we can both skip a discovery call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-panel rounded-[28px] p-7 sm:p-10">
            <h3 className="h-card text-white text-xl mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-white/10 text-white/80 text-sm flex items-center justify-center" aria-hidden="true">✕</span>
              Not for you if
            </h3>
            <ul>{notFor.map(([m, n]) => <Item key={m} main={m} note={n} dark />)}</ul>
          </div>

          <div className="bg-paper border border-line rounded-[28px] p-7 sm:p-10">
            <h3 className="h-card text-ink text-xl mb-3 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand text-white text-sm flex items-center justify-center" aria-hidden="true">✓</span>
              For you if
            </h3>
            <ul>{forYou.map(([m, n]) => <Item key={m} main={m} note={n} />)}</ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeDontWorkWith;
