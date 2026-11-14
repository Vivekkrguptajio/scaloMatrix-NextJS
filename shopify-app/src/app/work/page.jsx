import Link from 'next/link';
import Image from 'next/image';
import SiteShell from '../../components/SiteShell';
import { clients } from '../../data/work';
import { SITE_URL } from '../../utils/site';

export const metadata = {
  title: { absolute: 'Shopify Store Case Studies & Portfolio | scaloMATRIX' },
  description: 'See Shopify stores we built and redesigned for D2C brands in India: Velmukha, Nutraphyll, House of Nada, Wayora, Judex Fragrance, Drapes Corner, Veeyuu and Always On You, with the revenue and order-value results.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/work#webpage`,
        url: `${SITE_URL}/work`,
        name: 'Shopify store case studies',
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'ItemList',
        itemListElement: clients.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, ...(c.url && { url: c.url }) })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_URL}/work` },
        ],
      },
    ],
  };

  return (
    <SiteShell tab="Work">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted mb-5">
        <Link href="/" className="hover:text-brand">Home</Link> <span aria-hidden="true">/</span> <span className="text-ink">Work</span>
      </nav>

      <h1 className="h-display !font-medium text-[34px] !leading-[1.1] !tracking-[-0.03em] md:text-[52px] md:!leading-[56px] md:!tracking-[-1.56px] max-w-4xl">
        Shopify stores we are proud to build <span className="accent">and scale.</span>
      </h1>
      <p className="faq-answer text-[16px] leading-[1.6] md:text-[18px] md:leading-[29px] max-w-3xl mt-5">
        Every store below is live. These are case studies from past client projects: the Shopify store we designed or redesigned, and the change in revenue and average order value afterwards. Results differ for every business (see{' '}
        <Link href="/terms#s12" className="underline underline-offset-2">Terms, section 12</Link>).
      </p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {clients.map((c) => (
          <article key={c.name} className="bg-paper border border-ink flex flex-col">
            <div className="relative w-full h-[230px] sm:h-[250px] bg-[#ebebeb] border-b border-ink overflow-hidden">
              <Image src={c.img} alt={`${c.name} Shopify store homepage`} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div>
                <h2 className="h-card text-xl">{c.name}</h2>
                <p className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-muted mt-1">{c.category}</p>
              </div>
              <dl className="flex gap-6">
                <div>
                  <dd className="h-display text-3xl text-up leading-none">{c.revenue}</dd>
                  <dt className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted mt-1.5">Revenue</dt>
                </div>
                {c.aov && (
                  <div>
                    <dd className="h-display text-3xl text-up leading-none">{c.aov}</dd>
                    <dt className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted mt-1.5">Avg. order</dt>
                  </div>
                )}
              </dl>
              {c.url && (
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-ink border-b border-line hover:border-ink self-start mt-auto">
                  Visit {c.name} ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 border border-ink p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <h2 className="h-display !font-medium text-[22px] md:text-[28px]">Want results like these for your store?</h2>
          <p className="text-[14px] text-muted mt-2">Book a free 30-minute Shopify store audit and see what is costing you sales.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/#contact" className="btn-primary">Book a free audit <span aria-hidden="true">→</span></Link>
          <Link href="/pricing" className="btn-ghost">See pricing</Link>
        </div>
      </div>
    </SiteShell>
  );
}
