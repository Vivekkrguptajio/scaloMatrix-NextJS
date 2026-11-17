import Link from 'next/link';
import { faqs } from '../data/faq';

// Native <details> accordion: works without JavaScript, is keyboard/screen-reader
// friendly, and every answer is in the server-rendered HTML for search engines.
// First five questions form the main list (+); the rest sit under "Common questions" (→).
const MAIN = 5;

export default function Faq() {
  const main = faqs.slice(0, MAIN);
  const common = faqs.slice(MAIN);

  return (
    <section id="faq" className="relative w-full py-16 md:py-24 bg-cream font-sans">
      {/* Tab pinned to the section's corner */}
      <span className="eyebrow">FAQ</span>

      <div className="container-x">
        {/* Centred heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="h-display h-section">
            Questions, <span className="accent">answered.</span>
          </h2>
        </div>

        <div className="max-w-[680px] mx-auto">
          {/* Main list: hairlines between rows, a plain + on the right */}
          <div className="border-t border-line">
            {main.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex items-center justify-between gap-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[16px] md:text-[17px] leading-[24px] md:leading-[26px] font-medium text-ink">{item.q}</h3>
                  <span aria-hidden="true" className="shrink-0 text-lg leading-none text-brand transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="faq-answer pb-6 pr-8 text-[13.5px] md:text-[14.5px] leading-[1.7] font-normal">{item.a}</p>
              </details>
            ))}
          </div>

          {/* Common questions: smaller rows with an arrow */}
          {common.length > 0 && (
            <div className="mt-12">
              <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-brand-text mb-3">Common questions</p>
              <div className="border-t border-line">
                {common.map((item) => (
                  <details key={item.q} className="group border-b border-line">
                    <summary className="flex items-center justify-between gap-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <h3 className="text-[16px] md:text-[17px] leading-[24px] md:leading-[26px] font-medium text-ink">{item.q}</h3>
                      <span aria-hidden="true" className="shrink-0 text-lg leading-none text-brand transition-transform duration-300 group-open:rotate-90">→</span>
                    </summary>
                    <p className="faq-answer pb-6 pr-8 text-[13.5px] md:text-[14.5px] leading-[1.7] font-normal">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <Link href="/answers" className="btn-ghost mt-5 !text-[12px] !py-2 !px-3 !border-ink">
            All 100 answers <span aria-hidden="true">→</span>
          </Link>

          <p className="lead mt-10">
            Still unsure? Send us a message above or email{' '}
            <a href="mailto:info@krafficgroup.com" className="text-ink font-semibold hover:text-brand">
              info@krafficgroup.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
