"use client";
import Image from 'next/image';
import { AnimatedCounter } from './Hero'
import AutoMarquee from './AutoMarquee'

const LOGOS = [
  'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509470/shopify-app/logo/Judex.png',
  'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509471/shopify-app/logo/Nada.png',
  'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509472/shopify-app/logo/Nutraphyll.png',
  'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509469/shopify-app/logo/drapes.png',
];

export default function HeroVCards() {
  const row1Cards = [
    { 
      id: 1, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509488/shopify-app/photsWork/Nada.webp', 
      title: 'Nada', 
      url: 'https://www.houseofnada.com',
      stat: '+44% revenue',
      category: 'Apparel & Fashion' 
    },
    { 
      id: 2, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509489/shopify-app/photsWork/Nutraphyll.webp', 
      title: 'Nutraphyll', 
      url: 'https://www.nutraphyll.com',
      stat: '+20% revenue',
      category: 'Health & Wellness' 
    },
    { 
      id: 3, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509490/shopify-app/photsWork/Velmukha.webp', 
      title: 'Velmukha', 
      url: 'https://www.velmukha.com/',
      stat: '+50% Sales',
      category: 'Spiritual & Jewellery' 
    },
    {
      id: 5, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509485/shopify-app/photsWork/Drapes.webp', 
      title: 'Drapes Corner', 
      url: 'https://www.drapescorner.com',
      stat: '+50% revenue',
      category: 'Home & Decor' 
    },
    { 
      id: 6, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509486/shopify-app/photsWork/Judex.webp', 
      title: 'Judex Fragrance', 
      url: 'https://www.judex.in',
      stat: '+43% revenue',
      category: 'Beauty & Fragrance' 
    },
  ];

  return (
    <section id="work" className="w-full pt-10 md:pt-14 pb-12 md:pb-16 bg-paper text-ink font-sans overflow-hidden relative z-10">

      {/* Header */}
      <div className="container-x mb-8 md:mb-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <span className="eyebrow mb-4">Our work</span>
            <h2 className="h-display h-section max-w-[640px]">
              Stores people <span className="accent">love</span> to buy from.
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-cream p-3.5 pr-6 rounded-2xl border border-line self-start md:self-auto">
            <div className="flex -space-x-3">
              {LOGOS.map((src, i) => (
                <div key={i} className="relative w-10 h-10 rounded-full border-2 border-cream bg-white overflow-hidden">
                  <Image src={src} alt="Client logo" fill className="object-cover" sizes="40px" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-0.5" aria-label="Rated 4.9 out of 5">
                {[1,2,3,4,5].map(star => (
                  <span key={star} className="text-brand text-sm" aria-hidden="true">★</span>
                ))}
                <span className="font-mono text-xs font-medium text-ink ml-1.5">4.9/5</span>
              </div>
              <span className="font-display font-semibold text-ink text-sm tracking-tight">
                <AnimatedCounter target={100} suffix="+ happy clients" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <AutoMarquee speed={45} className="py-2">
        <div className="flex gap-4 md:gap-6 w-max ps-[max(1.25rem,calc((100vw-1280px)/2))] sm:ps-[max(2rem,calc((100vw-1280px)/2))] pe-5">
          {[...row1Cards, ...row1Cards].map((card, idx) => (
            <a
              key={idx}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/card w-[260px] sm:w-[320px] md:w-[380px] shrink-0 flex flex-col rounded-[22px] overflow-hidden bg-paper border border-line shadow-[0_10px_30px_-18px_rgba(20,18,16,0.35)] transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="relative w-full h-[330px] sm:h-[420px] md:h-[480px] overflow-hidden bg-cream">
                <Image src={card.img} alt={`${card.title} Shopify store`} fill className="object-cover object-top transition-transform duration-700 group-hover/card:scale-[1.03]" sizes="(max-width: 768px) 320px, 380px" priority={idx < 2} />
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3.5 border-t border-line">
                <div className="min-w-0">
                  <p className="font-display font-semibold text-[15px] leading-tight truncate">{card.title}</p>
                  <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mt-1 truncate">{card.category}</p>
                </div>
                <span className="shrink-0 bg-brand-soft text-brand-text font-mono text-[11px] font-medium px-2.5 py-1 rounded-full">{card.stat}</span>
              </div>
            </a>
          ))}
        </div>
      </AutoMarquee>
    </section>
  );
}
