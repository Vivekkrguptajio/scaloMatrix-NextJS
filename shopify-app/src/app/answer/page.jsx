import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import { topics } from '../../utils/answers';

export const metadata = {
  title: 'All answers',
  description: 'Every question we get asked about building and scaling Shopify stores with scaloMATRIX, grouped by topic: pricing, the free audit, results, ownership and refunds.',
  alternates: { canonical: '/answer' },
};

export default function AnswerPage() {
  const total = topics.reduce((n, t) => n + t.items.length, 0);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-ink font-sans overflow-x-clip">
      {/* Same navbar as the home page */}
      <Navbar />

      <main className="page-frame main-curve relative z-20 bg-cream pt-[66px]">
        <section className="relative">
          <span className="eyebrow">Answers</span>
          <div className="container-x pt-12 md:pt-16 pb-16 md:pb-24">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted mb-5">
              <Link href="/" className="hover:text-brand">Home</Link> <span aria-hidden="true">/</span> <span className="text-ink">Answers</span>
            </nav>

            {/* Hero */}
            <h1 className="h-display !font-medium text-[34px] !leading-[1.1] !tracking-[-0.03em] md:text-[52px] md:!leading-[56px] md:!tracking-[-1.56px]">
              {total} questions, <span className="accent">answered.</span>
            </h1>
            <p className="faq-answer text-[16px] leading-[1.6] md:text-[18px] md:leading-[29px] font-normal max-w-[640px] mt-5">
              The questions founders ask us most about Shopify stores, pricing, the free audit, results, ownership
              and refunds. Open a question for its full answer.
            </p>

            {/* Topic chips: each jumps to its section */}
            <ul className="flex flex-wrap gap-2 mt-6 mb-12 md:mb-16">
              {topics.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="inline-flex items-center gap-2 border border-line bg-paper px-4 py-2 text-[15px] md:text-[16px] text-ink hover:border-ink transition-colors"
                  >
                    {t.title}
                    <span className="font-mono text-[12px] text-brand">{t.items.length}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Topic sections: every question opens its own page */}
            <div className="flex flex-col gap-12 md:gap-14">
              {topics.map((t) => (
                <section key={t.id} id={t.id} className="scroll-mt-8">
                  <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-ink">
                    <h2 className="h-display !font-medium text-[26px] !leading-[1.25] md:text-[32px] md:!leading-[51px] !tracking-[-0.02em] md:!tracking-[-0.64px]">{t.title}</h2>
                    <span className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-muted">{t.items.length} {t.items.length === 1 ? 'question' : 'questions'}</span>
                  </div>

                  <ul className="grid md:grid-cols-2 gap-x-12 items-start">
                    {t.items.map((item) => (
                      <li key={item.slug} className="border-b border-line">
                        <Link
                          href={`/answer/${item.slug}`}
                          className="group flex items-start justify-between gap-4 py-4 text-[16px] leading-[26px] font-normal text-ink hover:text-[#D93A1E] transition-colors"
                        >
                          <span>{item.q}</span>
                          <span aria-hidden="true" className="text-brand transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* The landing page's footer */}
      <Contact reveal={true} />
    </div>
  );
}
