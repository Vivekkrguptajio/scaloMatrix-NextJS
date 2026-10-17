"use client";

const notFor = [
  ['Your team wants the page to say 47 things.', 'It should say one.'],
  ["You haven't spoken to a customer in 3 months.", "We won't guess for you."],
  ['You want pages delivered, not sales growth.', 'Hire a freelancer.'],
  ['You treat agencies as order-takers, not partners.', "Life's too short."],
  ['You sell vapes, risky loans or MLM.', 'Hard no.'],
];

const forYou = [
  ["Your sales have stopped growing and you don't know why."],
  ['Your product is genuinely good.', "We can't fix a bad one."],
  ['You spend ₹2L+ a month on ads.', 'We need traffic to test.'],
  ["You want a team that says so when you're wrong."],
  ['You want to build a brand, not a dropshipping store.'],
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
      <div className="container-x">

        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-10 md:mb-14 gap-6">
          <div className="lg:w-[58%]">
            <span className="eyebrow mb-4">Good fit?</span>
            <h2 className="h-display h-section">
              Are we a <span className="accent">good</span> fit?
            </h2>
          </div>
          <p className="lead lg:w-[34%]">
            We say no to some projects. Here is who we work best with, so neither of us wastes a call.
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
