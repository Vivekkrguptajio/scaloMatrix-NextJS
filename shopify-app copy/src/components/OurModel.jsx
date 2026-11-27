'use client';

import { useEffect, useRef, useState } from 'react';

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
  // On phones the cards stack while scrolling; the one on top of the stack turns orange.
  const listRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!mq.matches || !listRef.current) return;
      const cards = [...listRef.current.children];
      let next = 0;
      cards.forEach((el, i) => {
        // A card is "stacked" once it has reached its sticky position.
        if (el.getBoundingClientRect().top <= 84 + i * 14 + 6) next = i;
      });
      setActive(next);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="our-model"
      aria-labelledby="our-model-title"
      className="relative w-full border-b border-line bg-paper pt-12 pb-8 md:py-16"
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

        <ol ref={listRef} className="grid grid-cols-1 gap-8 max-md:pb-2 md:grid-cols-3 md:gap-3.5 lg:gap-5">
          {steps.map((step, i) => {
            const on = active === i; // orange only on phones, where the cards stack
            return (
            <li
              key={step.title}
              style={{ '--stack-top': `${84 + i * 14}px` }}
              className={`flex flex-col rounded-[14px] border p-5 transition-colors duration-300 max-md:sticky max-md:top-[var(--stack-top)] max-md:shadow-[0_10px_30px_rgba(20,18,16,0.10)] ${
                step.featured ? 'border-brand bg-paper' : 'border-line bg-paper hover:border-brand/50'
              } ${on ? 'max-md:!border-brand max-md:!bg-brand' : 'max-md:!border-line'}`}
            >
              <div className="mb-2 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[12px] font-bold transition-colors duration-300 ${
                    step.featured ? 'bg-brand text-white' : 'bg-brand-soft text-brand'
                  } ${on ? 'max-md:!bg-white max-md:!text-brand' : 'max-md:!bg-brand-soft max-md:!text-brand'}`}
                >
                  {i + 1}
                </span>
                <h3 className={`text-[16px] sm:text-[18px] font-bold leading-snug text-ink transition-colors duration-300 ${on ? 'max-md:!text-white' : ''}`}>{step.title}</h3>
              </div>
              <p className={`text-[13px] sm:text-[14px] leading-relaxed text-muted transition-colors duration-300 ${on ? 'max-md:!text-white/90' : ''}`}>
                {step.description}
              </p>
            </li>
            );
          })}
        </ol>

        <div className="mt-1 flex flex-col items-start gap-3 rounded-[14px] border border-line bg-cream p-4 sm:mt-3 sm:gap-4 sm:p-6 lg:mt-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="h-display !font-semibold text-[clamp(17px,1.8vw,24px)] leading-[1.15] tracking-tight text-ink">
            If you don&apos;t sell, we don&apos;t earn.{' '}
            <span className="text-brand">We only win when you win.</span>
          </p>
          <a
            href="#lead-form"
            className="btn-primary inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-semibold text-white sm:px-5 sm:py-3"
          >
            Book my free call <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
