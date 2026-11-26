"use client";

import { FaDesktop, FaBullhorn, FaTruck, FaCreditCard, FaRegCommentDots, FaRegUser } from 'react-icons/fa';

const items = [
  { icon: FaDesktop, title: 'Your Shopify website', text: 'Fast, mobile-first, looks like a big brand from day one.' },
  { icon: FaBullhorn, title: 'Meta ads, managed', text: 'We create and run your ads. ₹0 management fee.' },
  { icon: FaTruck, title: 'Shipping and COD control', text: 'Courier setup, address checks and COD confirmation to cut returns.' },
  { icon: FaCreditCard, title: 'Payments and checkout', text: 'UPI, cards and COD with a smooth checkout.' },
  { icon: FaRegCommentDots, title: 'WhatsApp follow-ups', text: 'Abandoned carts, order updates and repeat buyers, automated.' },
  { icon: FaRegUser, title: 'One dedicated growth expert', text: 'One person who knows your brand. Weekly reports in plain words.' },
];

export default function WhatsIncluded() {
  return (
    <section
      id="whats-included"
      aria-labelledby="whats-included-title"
      className="relative w-full border-b border-line bg-paper py-16 md:py-24"
    >
      <div className="container-x">
        <div className="mb-7 sm:mb-9">
          <p className="mb-2 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            What&apos;s included
          </p>
          <h2
            id="whats-included-title"
            className="h-display !font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.08] tracking-tight text-ink"
          >
            Everything a big brand has. <span className="text-brand">Done for you.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-[14px] border border-line bg-paper p-5 sm:p-6 transition-colors duration-300 hover:border-ink"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-brand-soft">
                <Icon className="h-[18px] w-[18px] text-brand" />
              </div>
              <div>
                <h3 className="text-[16px] sm:text-[18px] font-bold leading-snug text-ink">{title}</h3>
                <p className="mt-1.5 text-[13px] sm:text-[14px] leading-relaxed text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
