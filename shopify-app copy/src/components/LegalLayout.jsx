import Link from 'next/link';
import Navbar from './Navbar';
import Contact from './Contact';

const docs = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/refund-policy', label: 'Refund & Cancellation' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/legal', label: 'Legal & Policies' },
];

// Shared shell for the policy pages: same navbar, ruled side margins, corner tab and
// footer as the landing page, so Terms / Refund / Privacy / Legal all match the site theme.
export default function LegalLayout({ title, intro, current, sections, updated = 'October 2026' }) {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-ink font-sans overflow-x-clip">
      <Navbar />

      <main className="page-frame main-curve relative z-20 bg-cream pt-[66px]">
        <section className="relative">
          <span className="eyebrow">Policies</span>

          <div className="container-x pt-14 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16">
            {/* Side nav */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-muted mb-4">Documents</p>
              <nav className="flex lg:flex-col gap-2 flex-wrap">
                {docs.map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    className={`text-[14px] px-4 py-2.5 border transition-colors ${
                      d.href === current
                        ? 'bg-brand text-white border-brand font-semibold'
                        : 'border-line text-muted hover:text-ink hover:border-ink'
                    }`}
                  >
                    {d.label}
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <article className="min-w-0">
              <h1 className="h-display !font-medium text-[34px] !leading-[1.1] !tracking-[-0.03em] md:text-[52px] md:!leading-[56px] md:!tracking-[-1.56px] mb-4">{title}</h1>
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-6">Last updated: {updated}</p>
              <p className="faq-answer text-[16px] leading-[1.6] md:text-[18px] md:leading-[29px] mb-10 max-w-3xl">{intro}</p>

              <div className="divide-y divide-line border-t border-line">
                {sections.map((s, i) => (
                  <section key={s.title} id={`s${i + 1}`} className="py-8 grid md:grid-cols-[56px_1fr] gap-x-4 gap-y-2 scroll-mt-24">
                    <span className="font-mono text-xs text-brand-text pt-2">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h2 className="h-display !font-medium text-[22px] md:text-[26px] !leading-[1.25] !tracking-[-0.02em] mb-3">{s.title}</h2>
                      <div className="faq-answer text-[15px] md:text-[16px] leading-[1.7] [&_strong]:text-ink [&_a]:text-brand-text [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_p+p]:mt-3 [&_ul+p]:mt-3">
                        {s.body}
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              {/* Contact */}
              <div className="mt-10 border border-ink p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="h-display !font-medium text-[22px] mb-1">Questions about this page?</p>
                  <p className="text-[15px] text-muted">We reply within 24 hours.</p>
                </div>
                <div className="flex flex-col gap-1 text-[15px] font-medium">
                  <a href="mailto:info@krafficgroup.com" className="hover:text-brand">info@krafficgroup.com</a>
                  <a href="tel:+919217728977" className="hover:text-brand">+91 92177 28977</a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* The landing page's footer */}
      <Contact reveal={true} />
    </div>
  );
}
