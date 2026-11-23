import { faqs } from '../data/faq';

// Native <details> accordion: works without JavaScript, is keyboard/screen-reader
// friendly, and every answer is in the server-rendered HTML for search engines.
export default function Faq() {
  return (
    <section id="faq" className="relative w-full py-16 md:py-24 bg-cream font-sans border-b border-line">
      <div className="container-x">
        {/* Centred heading */}
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <span className="eyebrow mb-4">Got Questions?</span>
          <h2 className="h-display h-section">
            Common questions, <span className="accent">answered.</span>
          </h2>
          <p className="lead mt-3">
            Honest answers about our setup fees, ad budgets, and how we work together.
          </p>
        </div>

        <div className="max-w-[760px] mx-auto">
          {/* Main accordion list */}
          <div className="border-t border-line">
            {faqs.map((item, idx) => (
              <details key={idx} className="group border-b border-line">
                <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[16px] md:text-[17.5px] leading-[24px] md:leading-[26px] font-medium text-ink group-hover:text-brand transition-colors">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl leading-none text-brand transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="faq-answer pb-6 pr-8 text-[14px] md:text-[15px] leading-[1.7] text-muted font-normal">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 p-5 bg-paper border border-line flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[13.5px] text-muted text-center sm:text-left">
              Have a specific question about your product category?
            </p>
            <a href="#lead-form" className="btn-primary py-2.5 px-5 text-[13px] font-semibold whitespace-nowrap">
              Ask on a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
