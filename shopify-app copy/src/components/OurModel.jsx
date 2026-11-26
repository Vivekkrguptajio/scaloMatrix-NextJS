const steps = [
  {
    title: 'Pay a small setup fee',
    description: "Less than one month of a typical agency retainer. Paid once. That's it.",
  },
  {
    title: 'We build and run everything',
    description: 'Website, ads, shipping, payments and follow-ups. ₹0 marketing fee, ₹0 retainer.',
  },
  {
    title: 'You pay only when orders come',
    description: 'A small commission on the orders you receive. No orders, no commission.',
    featured: true,
  },
];

export default function OurModel() {
  return (
    <section
      id="our-model"
      aria-labelledby="our-model-title"
      className="relative w-full border-b border-line bg-paper py-12 md:py-16"
    >
      <div className="container-x">
        <div className="mb-6 sm:mb-7">
          <p className="mb-2 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            Our model
          </p>
          <h2
            id="our-model-title"
            className="h-display !font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.08] tracking-tight text-ink"
          >
            Pay once to start. <span className="text-brand">We earn when you sell.</span>
          </h2>
        </div>

        <ol className="grid grid-cols-1 gap-3.5 md:grid-cols-3 lg:gap-5">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`flex flex-col rounded-[14px] border p-5 transition-colors ${
                step.featured ? 'border-brand bg-paper' : 'border-line bg-paper hover:border-brand/50'
              }`}
            >
              <div className="mb-2 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[12px] font-bold ${
                    step.featured ? 'bg-brand text-white' : 'bg-brand-soft text-brand'
                  }`}
                >
                  {i + 1}
                </span>
                <h3 className="text-[16px] sm:text-[18px] font-bold leading-snug text-ink">{step.title}</h3>
              </div>
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-3 flex flex-col items-start gap-4 rounded-[14px] border border-line bg-cream p-5 sm:p-6 lg:mt-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="h-display !font-semibold text-[clamp(18px,1.8vw,24px)] leading-[1.15] tracking-tight text-ink">
            If you don&apos;t sell, we don&apos;t earn.{' '}
            <span className="text-brand">We only win when you win.</span>
          </p>
          <a
            href="#lead-form"
            className="btn-primary inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold text-white"
          >
            I&apos;m in, book my call <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
