"use client";

import Image from 'next/image';

export default function TrustBar() {
  const partners = [
    {
      name: 'Shopify Partner',
      badge: 'Official Ecosystem',
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/v1794639408/shopify-app/work/shopify-partners.png',
      width: 140,
      height: 28,
    },
    {
      name: 'Meta Ads Ecosystem',
      badge: 'Instagram & Facebook [VERIFY]',
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/v1787509492/shopify-app/assets/meta.svg',
      width: 90,
      height: 24,
      isSvg: true,
    },
    {
      name: 'Shiprocket Logistics',
      badge: 'PAN-India Courier [VERIFY]',
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/v1787509493/shopify-app/assets/shiprocket.svg',
      width: 110,
      height: 24,
      isSvg: true,
    },
    {
      name: 'Verified Gateways',
      badge: 'UPI & Instant Settlements [VERIFY]',
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/v1787509491/shopify-app/assets/gokwik.svg',
      width: 95,
      height: 24,
      isSvg: true,
    },
  ];

  return (
    <section className="w-full py-8 border-y border-line bg-paper">
      <div className="container-x">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-text mb-1">
              Verified Infrastructure
            </p>
            <p className="text-[13px] text-muted">
              Built on India&apos;s leading e-commerce platforms &amp; logistics networks.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10">
            {partners.map((p, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start gap-1">
                <div className="h-7 flex items-center grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={p.width}
                    height={p.height}
                    className="object-contain max-h-7"
                  />
                </div>
                <span className="text-[10px] font-mono text-muted/80">
                  {p.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
