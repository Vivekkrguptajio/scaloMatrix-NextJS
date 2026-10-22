import { faqs } from '../data/faq';

// Native <details> accordion: works without JavaScript, is keyboard/screen-reader
// friendly, and every answer is in the server-rendered HTML for search engines.
export default function Faq() {
  return (
    <section
      id="faq"
      className="w-full py-16 md:py-24 bg-cream font-sans rounded-b-[40px] md:rounded-b-[60px]"
    >
      <div className="container-x grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
        <div className="lg:sticky lg:top-32 h-fit">
          <span className="eyebrow mb-4">FAQ</span>
          <h2 className="h-display h-section mb-5">
            Questions, <span className="accent">answered.</span>
          </h2>
          <p className="lead max-w-sm">
            Still unsure? Send us a message above or email{' '}
            <a href="mailto:info@krafficgroup.com" className="text-ink font-semibold hover:text-brand">
              info@krafficgroup.com
            </a>
            .
          </p>
        </div>

        <div className="border-t border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex items-center justify-between gap-6 py-5 md:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="h-card text-lg md:text-xl">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 w-9 h-9 rounded-full border border-line flex items-center justify-center text-xl leading-none text-ink transition-all duration-300 group-open:rotate-45 group-open:bg-brand group-open:border-brand group-open:text-white"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 pr-12 text-[15px] leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
