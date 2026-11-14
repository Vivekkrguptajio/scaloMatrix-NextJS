import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Contact from '../../../components/Contact';
import { topics, allAnswers, findAnswer } from '../../../utils/answers';
import { SITE_URL } from '../../../utils/site';

export function generateStaticParams() {
  return allAnswers.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = findAnswer(slug);
  if (!item) return {};
  return {
    title: item.q,
    description: item.a.slice(0, 155),
    alternates: { canonical: `/answers/${item.slug}` },
  };
}

export default async function AnswerDetailPage({ params }) {
  const { slug } = await params;
  const item = findAnswer(slug);
  if (!item) notFound();

  const topic = topics.find((t) => t.id === item.topicId);
  const moreInTopic = topic.items.filter((a) => a.slug !== item.slug);
  const alsoAsked = allAnswers.filter((a) => a.topicId !== item.topicId).slice(0, 5);

  const url = `${SITE_URL}/answers/${item.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: [{ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Answers', item: `${SITE_URL}/answers` },
          { '@type': 'ListItem', position: 3, name: item.q, item: url },
        ],
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-ink font-sans overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\u003c') }} />
      <Navbar />

      <main className="page-frame main-curve relative z-20 bg-cream pt-[66px]">
        <section className="relative">
          <span className="eyebrow">Answer</span>
          <div className="container-x pt-12 md:pt-16 pb-16 md:pb-24">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted mb-6">
              <Link href="/" className="hover:text-brand">Home</Link> <span className="text-brand" aria-hidden="true">/</span>{' '}
              <Link href="/answers" className="hover:text-brand">Answers</Link> <span className="text-brand" aria-hidden="true">/</span>{' '}
              <Link href={`/answers#${topic.id}`} className="hover:text-brand">{topic.title}</Link>
            </nav>

            <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
              {/* Main column */}
              <article>
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-brand-text mb-4">{topic.title}</p>
                <h1 className="h-display !font-medium text-[30px] !leading-[1.15] !tracking-[-0.03em] md:text-[52px] md:!leading-[56px] md:!tracking-[-1.56px] max-w-[820px]">
                  {item.q}
                </h1>

                {/* Short answer */}
                <div className="mt-8 border border-line border-l-[3px] border-l-brand bg-paper p-6 md:p-7 shadow-[8px_8px_0_0_var(--color-line)] max-w-[820px]">
                  <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-brand mb-3">Short answer</p>
                  <p className="text-[17px] md:text-[19px] leading-[1.6] text-ink">{item.a}</p>
                </div>

                {/* In detail (for the questions that have a longer write-up) */}
                {item.more && (
                  <div className="mt-10 max-w-[820px] flex flex-col gap-7">
                    {item.more.map((m) => (
                      <section key={m.h}>
                        <h2 className="h-display !font-medium text-[22px] md:text-[26px] !leading-[1.25] !tracking-[-0.02em] mb-2">{m.h}</h2>
                        <p className="faq-answer text-[16px] md:text-[17px] leading-[1.7]">{m.p}</p>
                      </section>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="mt-10 border border-line bg-paper p-6 md:p-7 max-w-[820px]">
                  <p className="text-[16px] md:text-[17px] leading-[1.6] text-ink">
                    Want this solved for your brand? Book a free 30-minute live review of your store. We show you what is
                    costing you sales and give you quick wins in order of priority.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link href="/#contact" className="btn-primary">Book a free audit <span aria-hidden="true">→</span></Link>
                    <Link href="/#services" className="text-[15px] text-ink border-b border-line hover:border-ink pb-0.5">See pricing →</Link>
                  </div>
                </div>

                <p className="mt-8 font-mono text-[10.5px] tracking-[0.12em] uppercase text-muted">
                  Answered by scaloMATRIX · Kraffic Enterprises
                </p>
              </article>

              {/* Sidebar */}
              <aside className="lg:pt-[72px]">
                {moreInTopic.length > 0 && (
                  <div className="mb-10">
                    <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-brand-text mb-3">More on {topic.title}</p>
                    <ul className="border-t border-line">
                      {moreInTopic.map((a) => (
                        <li key={a.slug} className="border-b border-line">
                          <Link href={`/answers/${a.slug}`} className="block py-3.5 text-[15px] leading-[1.45] text-ink hover:text-[#D93A1E] transition-colors">{a.q}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-brand-text mb-3">Also asked</p>
                <ul className="border-t border-line">
                  {alsoAsked.map((a) => (
                    <li key={a.slug} className="border-b border-line">
                      <Link href={`/answers/${a.slug}`} className="block py-3.5 text-[15px] leading-[1.45] text-ink hover:text-[#D93A1E] transition-colors">{a.q}</Link>
                    </li>
                  ))}
                </ul>

                <Link href="/answers" className="inline-block mt-6 text-[15px] font-medium text-ink border-b border-ink pb-0.5 hover:text-brand hover:border-brand transition-colors">
                  All {allAnswers.length} answers →
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </main>

      {/* The landing page's footer */}
      <Contact reveal={true} />
    </div>
  );
}
