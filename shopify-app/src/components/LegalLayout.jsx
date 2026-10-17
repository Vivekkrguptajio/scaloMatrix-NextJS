import Link from 'next/link';

const docs = [
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/legal', label: 'Legal & Policies' },
];

export default function LegalLayout({ title, intro, current, sections }) {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      {/* Top bar */}
      <header className="border-b border-line">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-display font-extrabold text-xl tracking-tight">
            <span className="text-brand">scalo</span>MATRIX
          </Link>
          <Link href="/" className="text-sm font-medium text-muted hover:text-brand transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 md:py-20 grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">
        {/* Side nav */}
        <aside className="lg:sticky lg:top-8 h-fit">
          <p className="eyebrow mb-4">Policies</p>
          <nav className="flex lg:flex-col gap-2 flex-wrap">
            {docs.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                  d.href === current
                    ? 'bg-brand text-white border-brand font-semibold'
                    : 'border-line text-muted hover:text-ink hover:border-ink/40'
                }`}
              >
                {d.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main>
          <h1 className="h-display text-[clamp(2rem,4.5vw,3rem)] mb-3">{title}</h1>
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mb-6">Last updated: October 2026</p>
          <p className="lead mb-10 max-w-2xl">{intro}</p>

          <div className="divide-y divide-line border-t border-line">
            {sections.map((s, i) => (
              <section key={s.title} className="py-7 grid md:grid-cols-[48px_1fr] gap-x-4 gap-y-2">
                <span className="font-mono text-xs text-brand-text pt-1.5">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="h-card text-xl mb-3">{s.title}</h2>
                  <div className="text-[15px] leading-relaxed text-muted [&_strong]:text-ink [&_a]:text-brand-text [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
                    {s.body}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-10 rounded-[24px] bg-cream border border-line p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="h-card text-lg mb-1">Questions about this page?</p>
              <p className="text-sm text-muted">We reply within 24 hours.</p>
            </div>
            <div className="flex flex-col gap-1 text-sm font-medium">
              <a href="mailto:scalomatrix@gmail.com" className="hover:text-brand">scalomatrix@gmail.com</a>
              <a href="tel:+919217728977" className="hover:text-brand">+91 92177 28977</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
