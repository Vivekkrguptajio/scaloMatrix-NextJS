import Link from 'next/link';
import SiteShell from './SiteShell';
import { SITE_URL } from '../utils/site';

// Template for the standalone service landing pages (/services/...). All copy comes from the page files,
// which reuse what is already published on the home page.
export default function ServicePage({ slug, tab, h1, accent, intro, price, priceNote, includes, forWho, steps, faqs, related }) {
  const url = `${SITE_URL}/services/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: tab,
        serviceType: tab,
        description: intro,
        provider: { '@id': `${SITE_URL}/#org` },
        areaServed: { '@type': 'Country', name: 'India' },
        offers: { '@type': 'Offer', priceCurrency: 'INR', price: String(price.replace(/[^\d]/g, '')), url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${SITE_URL}/pricing` },
          { '@type': 'ListItem', position: 3, name: tab, item: url },
        ],
      },
    ],
  };

  return (
    <SiteShell tab={tab}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted mb-5">
        <Link href="/" className="hover:text-brand">Home</Link> <span aria-hidden="true">/</span>{' '}
        <Link href="/pricing" className="hover:text-brand">Pricing</Link> <span aria-hidden="true">/</span> <span className="text-ink">{tab}</span>
      </nav>

      <h1 className="h-display !font-medium text-[34px] !leading-[1.1] !tracking-[-0.03em] md:text-[52px] md:!leading-[56px] md:!tracking-[-1.56px] max-w-4xl">
        {h1} <span className="accent">{accent}</span>
      </h1>
      <p className="faq-answer text-[16px] leading-[1.6] md:text-[18px] md:leading-[29px] max-w-3xl mt-5">{intro}</p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Link href="/#contact" className="btn-primary">Book a free audit <span aria-hidden="true">→</span></Link>
        <Link href="/pricing" className="btn-ghost">Compare all plans</Link>
        <span className="text-[13px] text-muted">
          <strong className="text-ink font-semibold">{price}</strong> {priceNote}
        </span>
      </div>

      {/* What is included */}
      <h2 className="h-display !font-medium text-[26px] md:text-[32px] !leading-[1.25] mt-16 mb-5">What you get</h2>
      <ul className="grid sm:grid-cols-2 gap-x-10 border-t border-ink">
        {includes.map((i) => (
          <li key={i} className="flex gap-3 py-4 border-b border-line text-[16px]">
            <span className="text-brand" aria-hidden="true">✓</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>

      {/* Who it is for */}
      <h2 className="h-display !font-medium text-[26px] md:text-[32px] !leading-[1.25] mt-16 mb-5">Who this is for</h2>
      <ul className="max-w-3xl flex flex-col gap-3 text-[16px] faq-answer">
        {forWho.map((w) => (
          <li key={w} className="flex gap-3"><span className="text-brand" aria-hidden="true">→</span><span>{w}</span></li>
        ))}
      </ul>

      {/* Process */}
      <h2 className="h-display !font-medium text-[26px] md:text-[32px] !leading-[1.25] mt-16 mb-5">How it works</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {steps.map((s) => (
          <article key={s.n} className="bg-paper border border-line p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="h-display text-4xl text-brand leading-none">{s.n}</span>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand-text">{s.tag}</span>
            </div>
            <h3 className="h-card text-xl mb-3">{s.title}</h3>
            <p className="text-[14px] text-muted leading-relaxed">{s.body}</p>
          </article>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="h-display !font-medium text-[26px] md:text-[32px] !leading-[1.25] mt-16 mb-5">Questions about {tab.toLowerCase()}</h2>
      <div className="border-t border-line max-w-3xl">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-line">
            <summary className="flex items-center justify-between gap-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <h3 className="text-[16px] font-medium">{f.q}</h3>
              <span aria-hidden="true" className="text-xl text-brand transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="faq-answer pb-5 pr-8 text-[15px] leading-[1.65]">{f.a}</p>
          </details>
        ))}
      </div>

      {/* Closing CTA + related pages */}
      <div className="mt-14 border border-ink p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <h2 className="h-display !font-medium text-[22px] md:text-[28px]">Not sure where to start?</h2>
          <p className="text-[14px] text-muted mt-2">Book a free 30-minute Shopify store audit. We show you what is costing you sales, with no sales pitch.</p>
        </div>
        <Link href="/#contact" className="btn-primary self-start md:self-auto">Book a free audit <span aria-hidden="true">→</span></Link>
      </div>

      <p className="mt-8 font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted">Keep exploring</p>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
        {related.map((r) => (
          <Link key={r.href} href={r.href} className="text-ink border-b border-line hover:border-ink">{r.label} →</Link>
        ))}
      </div>
    </SiteShell>
  );
}
