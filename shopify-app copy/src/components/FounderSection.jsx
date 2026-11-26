"use client";

import { FaPhoneAlt, FaEnvelope, FaRupeeSign, FaBan, FaHandshake, FaUserTie } from 'react-icons/fa';

const changes = [
  { icon: FaRupeeSign, title: 'One small setup fee', text: 'Less than one month of a typical agency retainer. Paid once.' },
  { icon: FaBan, title: '₹0 retainer, ₹0 marketing fee', text: 'No monthly bills, and we never take a cut of your ad budget.' },
  { icon: FaHandshake, title: 'We earn only when you sell', text: 'A small fee on the orders you receive. No orders, no fee.' },
  { icon: FaUserTie, title: 'One dedicated growth expert', text: 'Full support in Hindi and English.' },
];

export default function FounderSection() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-title"
      className="relative w-full border-b border-line bg-cream py-16 md:py-24"
    >
      <div className="container-x">
        {/* Header (same pattern as OurModel / FirstNinetyDays) */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            Why we built scaloMATRIX
          </p>
          <h2
            id="founder-title"
            className="h-display !font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.08] tracking-tight text-ink"
          >
            Agencies took ₹1 lakh fees. <span className="text-brand">Sellers took all the risk.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.05fr_1fr] lg:gap-5">
          {/* Story */}
          <div className="flex flex-col rounded-[14px] border border-line bg-paper p-6 sm:p-8">
            <span aria-hidden="true" className="font-display text-[56px] leading-[0.6] text-brand">&ldquo;</span>
            <div className="mt-4 space-y-4 text-[15px] sm:text-[16px] leading-relaxed text-muted">
              <p>
                We kept seeing the same story with manufacturers in Surat, Delhi, Ludhiana and Jaipur. They make
                great products, yet Amazon takes a 30% cut, and agencies charge every month whether anything sells or not.
              </p>
              <p className="font-medium text-ink">
                So we flipped the model. You pay one small setup fee, and after that we earn only when you sell.
              </p>
            </div>

            {/* Contact + CTA */}
            <div className="mt-auto pt-7">
              <div className="flex flex-wrap items-center gap-2.5 border-t border-line pt-6">
                <a
                  href="tel:+919217728977"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:border-ink"
                >
                  <FaPhoneAlt className="h-3 w-3 text-brand" />
                  +91 92177 28977
                </a>
                <a
                  href="mailto:info@krafficgroup.com"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:border-ink"
                >
                  <FaEnvelope className="h-3 w-3 text-brand" />
                  info@krafficgroup.com
                </a>
                <a
                  href="#lead-form"
                  className="btn-primary inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold text-white"
                >
                  Book my free call <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* What we changed */}
          <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:gap-4">
            {changes.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex flex-col rounded-[14px] border border-line bg-paper p-5 sm:p-6 transition-colors duration-300 hover:border-ink"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand-soft">
                  <Icon className="h-[18px] w-[18px] text-brand" />
                </span>
                <h3 className="text-[16px] sm:text-[18px] font-bold leading-snug text-ink">{title}</h3>
                <p className="mt-1.5 text-[13px] sm:text-[14px] leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
