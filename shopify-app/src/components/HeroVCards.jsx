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
      id: 'wayora-home',
      img: '/work/wayora-home.webp',
      title: 'Wayora',
      url: 'https://www.wayoranatural.com',
      stat: '+33% revenue',
      category: 'Food & Spices · Homepage',
    },
    {
      id: 'veeyuu-home',
      img: '/work/veeyuu-home.webp',
      title: 'Veeyuu',
      url: 'https://veeyuu.com',
      stat: '+24% revenue',
      category: 'Women\'s Ethnic Wear · Homepage',
    },
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
      stat: '+34% Sales',
      category: 'Spiritual & Jewellery' 
    },
    {
      id: 5, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509485/shopify-app/photsWork/Drapes.webp', 
      title: 'Drapes Corner', 
      url: 'https://www.drapescorner.com',
      stat: '+38% revenue',
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
    {
      id: 7,
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509487/shopify-app/photsWork/Luxury.webp',
      title: 'Always On You',
      stat: '+22% revenue',
      category: 'Shopify store · Homepage',
    },
  ];

  return (
    <section id="work" className="w-full pt-10 md:pt-14 pb-12 md:pb-16 bg-cream text-ink font-sans overflow-hidden relative z-10">

      {/* Header */}
      <div className="container-x mb-8 md:mb-10">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <span className="eyebrow mb-4">Our work</span>
            <h2 className="h-display h-section !font-medium !text-[clamp(1.6rem,3.1vw,45px)] max-w-[400px] xl:max-w-none xl:whitespace-nowrap">
              <span className="accent">Shopify Stores</span> We’re Proud to Build &amp; Scale.
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-paper p-3.5 pr-6 border border-line self-start md:self-auto">
            <div className="flex -space-x-3">
              {LOGOS.map((src, i) => (
                <div key={i} className="relative w-10 h-10 border-2 border-paper bg-white overflow-hidden">
                  <Image src={src} alt="" fill className="object-cover" sizes="40px" />
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
                <AnimatedCounter target={50} suffix="+ happy clients" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <AutoMarquee speed={45} direction="right" className="py-2">
        <div className="flex gap-4 md:gap-6 w-max ps-[max(1.25rem,calc((100vw-1280px)/2))] sm:ps-[max(2rem,calc((100vw-1280px)/2))] pe-5">
          {[...row1Cards, ...row1Cards].map((card, idx) => {
            const Card = card.url ? 'a' : 'div'
            return (
            <Card
              key={idx}
              {...(card.url ? { href: card.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group/card w-[221px] sm:w-[272px] md:w-[323px] shrink-0 flex flex-col overflow-hidden bg-paper border border-line shadow-[0_10px_30px_-18px_rgba(20,18,16,0.35)] transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="relative w-full h-[280px] sm:h-[357px] md:h-[408px] overflow-hidden bg-cream">
                <Image src={card.img} alt={`${card.title} Shopify store`} fill className="object-cover object-top transition-transform duration-700 group-hover/card:scale-[1.03]" sizes="(max-width: 768px) 320px, 380px" priority={idx < 2} />
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3.5 border-t border-line">
                <div className="min-w-0">
                  <p className="font-display font-semibold text-[12px] leading-tight truncate">{card.title}</p>
                  <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mt-1 truncate">{card.category}</p>
                </div>
                {card.stat && <span className="shrink-0 bg-up-soft text-up font-mono text-[11px] font-medium px-2.5 py-1">{card.stat}</span>}
              </div>
            </Card>
            )
          })}
        </div>
      </AutoMarquee>
    </section>
  );
}
