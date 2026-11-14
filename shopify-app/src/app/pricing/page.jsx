import Link from 'next/link';
import SiteShell from '../../components/SiteShell';
import { plans, comparison } from '../../data/pricing';
import { faqs } from '../../data/faq';
import { SITE_URL } from '../../utils/site';

export const metadata = {
  title: { absolute: 'Shopify Store Pricing in India | scaloMATRIX' },
  description: 'Transparent Shopify pricing in India. Website Redesign from ₹44,999, Website Creation from ₹64,999, a Custom Build quoted per project, and a free Shopify store audit. Compare every plan and what is included.',
  alternates: { canonical: '/pricing' },
};

const PRICING_FAQ_QUESTIONS = ['How much does it cost?', 'What is the free audit?', 'Do you guarantee 20% more sales?', 'What is your refund policy?', 'Who owns the design and code after the project?'];

export default function PricingPage() {
  const pricingFaqs = faqs.filter((f) => PRICING_FAQ_QUESTIONS.includes(f.q));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/pricing#webpage`,
        url: `${SITE_URL}/pricing`,
        name: 'Shopify Store Pricing in India',
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: pricingFaqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${SITE_URL}/pricing` },
        ],
      },
    ],
  };

  return (
    <SiteShell tab="Pricing">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted mb-5">
        <Link href="/" className="hover:text-brand">Home</Link> <span aria-hidden="true">/</span> <span className="text-ink">Pricing</span>
      </nav>

      <h1 className="h-display !font-medium text-[34px] !leading-[1.1] !tracking-[-0.03em] md:text-[52px] md:!leading-[56px] md:!tracking-[-1.56px] max-w-4xl">
        Shopify store pricing in India: <span className="accent">simple plans, clear prices.</span>
      </h1>
      <p className="faq-answer text-[16px] leading-[1.6] md:text-[18px] md:leading-[29px] max-w-3xl mt-5">
        Pick a plan for a new Shopify store, a redesign of the one you have, or a fully custom build. Prices are in INR. Not sure where to start? The Shopify store audit is free.
      </p>

      {/* Plans */}
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((p) => (
          <article key={p.id} id={p.id} className="bg-paper border border-ink p-5 flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <h2 className="h-card text-xl">{p.title}</h2>
              {p.badge && <span className="shrink-0 bg-brand text-white font-mono text-[9.5px] tracking-[0.1em] uppercase px-2 py-1">{p.badge}</span>}
            </div>
            <p className="mt-3 flex items-baseline gap-1.5">
              <span className="h-display text-3xl">{p.price}</span>
              {p.from && <span className="text-[12px] text-muted">onwards</span>}
            </p>
            <p className="text-[13px] leading-relaxed text-muted mt-3">{p.desc}</p>
            {p.options && (
              <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-text mt-3">Options: {p.options.join(' / ')}</p>
            )}
            <ul className="mt-4 pt-4 border-t border-line flex flex-col gap-2 text-[13px] flex-1">
              {p.includes.map((i) => (
                <li key={i} className="flex gap-2"><span className="text-brand" aria-hidden="true">✓</span><span>{i}</span></li>
              ))}
            </ul>
            <Link href="/#contact" className="btn-primary mt-5 !text-[12px]">{p.cta}</Link>
            {p.href && <Link href={p.href} className="text-[12px] text-muted hover:text-brand mt-3 text-center">Learn more →</Link>}
          </article>
        ))}
      </div>

      {/* Comparison */}
      <h2 className="h-display !font-medium text-[26px] md:text-[32px] !leading-[1.25] mt-16 mb-5">Compare what is included in each plan</h2>
      <div className="overflow-x-auto border border-ink bg-paper">
        <table className="w-full min-w-[640px] text-left text-[13px]">
          <thead>
            <tr className="border-b border-ink">
              <th scope="col" className="p-3 font-mono text-[10.5px] tracking-[0.1em] uppercase text-muted">Deliverable</th>
              {plans.map((p) => <th key={p.id} scope="col" className="p-3 font-semibold">{p.title}</th>)}
            </tr>
          </thead>
          <tbody>
            {comparison.map(([feature, ...vals]) => (
              <tr key={feature} className="border-b border-line last:border-b-0">
                <th scope="row" className="p-3 font-normal">{feature}</th>
                {vals.map((v, i) => (
                  <td key={i} className="p-3">{v ? <span className="text-brand" aria-label="Included">✓</span> : <span className="text-muted/50" aria-label="Not included">—</span>}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[12px] text-muted mt-3">The audit and the plans are separate. Exact scope, timeline, revisions and refunds are written down in your proposal before work starts.</p>

      {/* FAQ */}
      <h2 className="h-display !font-medium text-[26px] md:text-[32px] !leading-[1.25] mt-16 mb-5">Pricing questions</h2>
      <div className="border-t border-line max-w-3xl">
        {pricingFaqs.map((f) => (
          <details key={f.q} className="group border-b border-line">
            <summary className="flex items-center justify-between gap-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <h3 className="text-[16px] font-medium">{f.q}</h3>
              <span aria-hidden="true" className="text-xl text-brand transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="faq-answer pb-5 pr-8 text-[15px] leading-[1.65]">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/#contact" className="btn-primary">Book a free audit <span aria-hidden="true">→</span></Link>
        <Link href="/work" className="btn-ghost">See our work</Link>
        <Link href="/answers" className="btn-ghost">Read 100 Shopify answers</Link>
      </div>
    </SiteShell>
  );
}
