"use client";

import Image from 'next/image';
import shopify from '../assets/parters/shopify.svg';
import meta from '../assets/parters/meta.svg';
import shiprocket from '../assets/parters/shiprocket-icon.svg';

export default function TrustBar() {
  const partners = [
    { name: 'Shopify Partners', badge: 'Official Ecosystem', img: shopify },
    { name: 'Meta', badge: 'Instagram & Facebook', img: meta },
    { name: 'Shiprocket', badge: 'PAN-India Courier', img: shiprocket },
  ];

  return (
    <section className="w-full border-b border-line bg-paper py-8 md:py-10">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="text-center lg:w-[38%] lg:text-left">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-text mb-1">
              Verified Infrastructure
            </p>
            <p className="text-[13px] text-muted">
              Built on India&apos;s leading e-commerce platforms &amp; logistics networks.
            </p>
          </div>

          <div className="grid w-full grid-cols-3 items-start gap-x-3 sm:gap-x-6 lg:w-[58%] lg:gap-x-4">
            {partners.map((partner) => (
              <div key={partner.name} className="flex min-w-0 flex-col items-center gap-1.5 text-center">
                <div className="flex h-10 w-full items-center justify-center">
                  <Image
                    src={partner.img}
                    alt=""
                    aria-hidden="true"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <span className="min-h-[17px] text-[11px] font-semibold leading-tight text-ink sm:text-[12px]">{partner.name}</span>
                <span className="text-[9px] font-mono leading-tight text-muted/80 sm:text-[10px]">{partner.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
