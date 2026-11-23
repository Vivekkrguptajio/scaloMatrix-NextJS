"use client";

import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaComments } from 'react-icons/fa';

export default function FounderSection() {
  return (
    <section id="founder" className="relative w-full py-16 md:py-24 bg-cream font-sans border-b border-line">
      <div className="container-x">
        <div className="bg-paper border border-line p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 shadow-sm">
          {/* Left: Founder Avatar / Team Graphic */}
          <div className="w-full sm:w-72 lg:w-80 shrink-0 flex flex-col items-center text-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 bg-cream border-2 border-line overflow-hidden mb-4 shadow-inner">
              <Image
                src="https://res.cloudinary.com/dqtzchlqj/image/upload/v1794639408/shopify-app/work/shopify-partners.png"
                alt="scaloMATRIX Leadership"
                fill
                sizes="208px"
                className="object-contain p-6"
              />
            </div>
            <h3 className="h-display text-[20px] font-semibold text-ink">
              Founder-Led Team
            </h3>
            <p className="font-mono text-[12px] text-brand uppercase tracking-wider mb-2">
              Kraffic Enterprises
            </p>
            <p className="text-[12px] text-muted max-w-xs">
              Patel Nagar, Delhi 110008
            </p>
          </div>

          {/* Right: Story & Mission */}
          <div className="flex-1 text-left">
            <span className="eyebrow mb-4">Why We Built scaloMATRIX</span>
            <h2 className="h-display text-[24px] sm:text-[32px] font-semibold text-ink leading-snug mb-6">
              &ldquo;We built scaloMATRIX because agencies were taking ₹1 lakh fees while sellers took all the risk.&rdquo;
            </h2>

            <div className="space-y-4 text-[14.5px] text-muted leading-relaxed mb-8">
              <p>
                Having spent years inside the trenches of Indian e-commerce, we saw the exact same story unfold for dozens of manufacturers in Surat, Delhi, Ludhiana, and Jaipur: you make world-class products, yet Amazon takes 30% cuts, and marketing agencies demand ₹50,000–₹1,00,000 every month without delivering profitable sales.
              </p>
              <p>
                We flipped the model. We charge a single modest setup fee to build your Shopify store, set up payment gateways, and configure courier integrations. After that, we only earn when you make sales.
              </p>
              <p className="font-medium text-ink">
                You work directly with our core leadership team. Full support in both Hindi and English.
              </p>
            </div>

            {/* Direct contact pills */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-line">
              <a
                href="tel:+919217728977"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink hover:text-brand transition-colors bg-cream border border-line px-3.5 py-2"
              >
                <FaPhoneAlt className="w-3.5 h-3.5 text-brand" />
                <span>+91 92177 28977</span>
              </a>
              <a
                href="mailto:info@krafficgroup.com"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-ink hover:text-brand transition-colors bg-cream border border-line px-3.5 py-2"
              >
                <FaEnvelope className="w-3.5 h-3.5 text-brand" />
                <span>info@krafficgroup.com</span>
              </a>
              <a
                href="#lead-form"
                className="btn-primary py-2 px-5 text-[13px] font-semibold"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
