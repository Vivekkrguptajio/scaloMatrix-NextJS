const agencyCosts = [
  ['Website design and build', '₹50,000 – ₹1,00,000'],
  ['Monthly agency retainer', '₹25,000 – ₹50,000 / month'],
  ['Ad management fee', '10–20% of ad spend'],
  ['Pay even if nothing sells?', 'Yes, every month.'],
];

const scaloCosts = [
  ['Website, setup and launch', 'Small one-time fee'],
  ['Monthly retainer', '₹0'],
  ['Ad management fee', '₹0'],
  ['Pay even if nothing sells?', 'No. Only on orders you receive'],
];

const labels = [
  'Website, setup and launch',
  'Monthly retainer',
  'Ad management fee',
  'Pay even if nothing sells?',
];

// Phones and tablets: one side-by-side table instead of two long stacked cards.
function CompactBill() {
  const rows = labels.map((label, i) => [label, agencyCosts[i][1], scaloCosts[i][1]]);
  rows.push(['Before your first order', '₹1 lakh+', 'Just the setup fee']);
  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-paper lg:hidden">
      <div className="grid grid-cols-2">
        <p className="px-3.5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">Agency</p>
        <p className="bg-brand px-3.5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white">scaloMATRIX</p>
      </div>
      {rows.map(([label, agency, scalo], i) => {
        const valueCls = i === rows.length - 1 ? 'font-display text-[18px] font-bold leading-tight' : 'text-[13px] font-semibold leading-snug';
        return (
          <div key={label} className="grid grid-cols-2">
            <div className="border-t border-line/70 px-3.5 py-2.5">
              <p className="mb-1 text-[11.5px] leading-snug text-muted">{label}</p>
              <p className={`text-ink ${valueCls}`}>{agency}</p>
            </div>
            <div className="border-t border-white/25 bg-brand px-3.5 py-2.5">
              {/* Same label, kept invisible, so both values line up */}
              <p className="invisible mb-1 text-[11.5px] leading-snug" aria-hidden="true">{label}</p>
              <p className={`text-white ${valueCls}`}>{scalo}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CostCard({ title, rows, featured = false }) {
  return (
    <article className={`flex h-full flex-col rounded-[14px] border p-5 sm:p-6 lg:p-7 ${featured ? 'border-brand bg-brand' : 'border-line bg-paper'}`}>
      <h3 className={`mb-4 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] ${featured ? 'text-white/85' : 'text-muted'}`}>
        {title}
      </h3>

      <dl className="flex flex-1 flex-col">
        {rows.map(([label, value]) => (
          <div key={label} className={`grid grid-cols-1 gap-1.5 border-b py-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-5 ${featured ? 'border-white/25' : 'border-line/70'}`}>
            <dt className={`text-[13px] sm:text-[14px] ${featured ? 'text-white' : 'text-ink'}`}>{label}</dt>
            <dd className={`text-[13px] sm:text-[14px] font-semibold md:max-w-[230px] md:text-right ${featured ? 'text-white' : 'text-ink'}`}>{value}</dd>
          </div>
        ))}

        <div className="mt-auto grid grid-cols-1 gap-1.5 pt-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline md:gap-5">
          <dt className={`text-[13px] sm:text-[14px] font-semibold ${featured ? 'text-white' : 'text-ink'}`}>Before your first order</dt>
          <dd className={`font-display text-[23px] sm:text-[26px] font-bold leading-tight tracking-tight ${featured ? 'text-white md:text-right' : 'text-ink md:text-right'}`}>
            {featured ? 'Just the setup fee' : '₹1 lakh+'}
          </dd>
        </div>
      </dl>
    </article>
  );
}

export default function BrandLaunchBill() {
  return (
    <section id="brand-launch-bill" aria-labelledby="brand-launch-bill-title" className="relative w-full border-b border-line bg-cream py-12 md:py-24">
      <div className="container-x">
        <div className="mb-7 sm:mb-9">
          <p className="mb-2 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            The brand launch bill
          </p>
          <h2 id="brand-launch-bill-title" className="h-display !font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.08] tracking-tight text-ink">
            Same brand. <span className="text-brand">Very different bill.</span>
          </h2>
          <p className="mt-2 text-[14px] sm:text-[15px] text-muted">
            Here&apos;s what you pay before your first order arrives.
          </p>
        </div>

        <CompactBill />

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-5">
          <CostCard title="The agency route" rows={agencyCosts} />
          <CostCard title="The scaloMATRIX route" rows={scaloCosts} featured />
        </div>

        <div className="mt-5 flex flex-col items-start gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-4xl text-[11px] sm:text-[12px] leading-relaxed text-muted">
            Agency figures are typical market ranges and vary by agency. With both routes, your ad budget is paid to Meta and your Shopify plan to Shopify.
          </p>
          <a href="#lead-form" className="btn-primary inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold text-white">
            Book my free call <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
