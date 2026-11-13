"use client";

import { FaShopify } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroData } from '../data/content'

export function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000 }) {
  return <span>{prefix}{target.toLocaleString()}{suffix}</span>
}


const rotatingWords = heroData.rotatingWords

function RotatingText() {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let swap
    const interval = setInterval(() => {
      setIsVisible(false)
      swap = setTimeout(() => {
        setIndex(prev => (prev + 1) % rotatingWords.length)
        setIsVisible(true)
      }, 400)
    }, 2500)
    return () => { clearInterval(interval); clearTimeout(swap) }
  }, [])

  return (
    <span className="accent relative inline-block pr-1 min-h-[1.15em]">
      <span
        className={`inline-block transition-all duration-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
        }`}
      >
        {rotatingWords[index]}
      </span>
      <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none" aria-hidden="true">
        <path d="M2 6C75 2 225 2 298 6" stroke="#FD5800" strokeWidth="3" strokeLinecap="round" opacity="0.45"/>
      </svg>
    </span>
  )
}

// Static data moved outside component to prevent re-creation on every render
const stores = [
  { src: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509485/shopify-app/photsWork/Drapes.webp', name: 'Drapes Corner', stat: '+38% revenue' },
  { src: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509488/shopify-app/photsWork/Nada.webp', name: 'House of Nada', stat: '+44% revenue' },
  { src: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509490/shopify-app/photsWork/Velmukha.webp', name: 'Velmukha', stat: '+34% Sales' },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stores.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const [before, after] = heroData.description.split(heroData.descriptionHighlight)

  return (
    <section
      id="hero"
      className="flex flex-col pt-[84px] md:pt-[11.5rem] pb-12 md:pb-20 bg-cream relative overflow-hidden"
    >

      <div className="container-x relative z-10">
        {/* Phone only: the Shopify Partners logo, centred at the very top of the hero */}
        <div className="sm:hidden flex justify-center mb-2 hero-animate-1">
          <div className="partner-logo relative w-[210px] h-[40px] overflow-hidden">
            <Image src="/iconshopify.png" alt="Shopify Partners" fill sizes="210px" className="object-cover" priority />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10 xl:gap-16">

          {/* LEFT — message */}
          <div className="order-2 lg:order-1 flex-1 w-full lg:max-w-[60%] text-center lg:text-left">

            <div className="hidden sm:flex items-center justify-center lg:justify-start gap-2.5 mb-6 hero-animate-1">
              <span className="inline-flex items-center gap-2 bg-paper border border-line text-ink text-[12px] font-semibold tracking-[0.12em] uppercase px-3.5 py-2 font-mono">
                <FaShopify className="w-4 h-4 text-shopify" />
                {heroData.badge}
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 bg-brand-soft text-brand-text text-[12px] font-semibold tracking-[0.12em] uppercase px-3.5 py-2 font-mono">
                <span className="w-1.5 h-1.5 bg-brand animate-pulse" />
                {heroData.badge2}
              </span>
            </div>

            <h1 className="h-display !font-semibold !leading-[1.28] md:!leading-[65px] text-[clamp(1.7rem,3.2vw,45px)] lg:whitespace-nowrap mb-3 sm:mb-6 hero-animate-2">
              We build <RotatingText />
              <span className="block" />
              {heroData.headlineSuffix}
            </h1>

            <p className="lead !text-[11px] sm:!text-[15.5px] !leading-[1.55] max-w-[540px] mx-auto lg:mx-0 px-5 sm:px-0 mb-5 sm:mb-9 hero-animate-3">
              {before}<strong className="font-semibold text-ink">{heroData.descriptionHighlight}</strong>{after}
            </p>

            <div className="flex flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-12 w-[88%] mx-auto sm:w-auto sm:mx-0 hero-animate-4">
              <a href="#contact" className="btn-primary group flex-1 sm:flex-none !text-[11px] sm:!text-[14px] !py-[0.75rem] sm:!py-[0.85rem] !px-1.5 sm:!px-[1.6rem] whitespace-nowrap">
                Get your Shopify store
                <svg className="hidden sm:block w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#work" className="btn-ghost flex-1 sm:flex-none !text-[11px] sm:!text-[14px] !py-[0.75rem] sm:!py-[0.85rem] !px-1.5 sm:!px-[1.6rem] whitespace-nowrap">See our work</a>
            </div>

            {/* Stats */}
            <dl className="grid grid-cols-3 max-w-[540px] mx-auto lg:mx-0 sm:border-t border-line pt-1 sm:pt-6 hero-animate-5">
              {heroData.stats.map((stat, i) => (
                <div key={i} className={`flex flex-col gap-0.5 sm:gap-1 ${i > 0 ? 'pl-2.5 sm:pl-6 sm:border-l border-line' : ''}`}>
                  <dd className={`h-display text-[19px] sm:text-4xl order-1 ${stat.prefix === '+' && stat.suffix === '%' ? 'text-up' : 'text-ink'}`}>
                    {stat.prefix}<AnimatedCounter target={stat.value} />{stat.suffix}
                  </dd>
                  <dt className="font-mono text-[8.5px] sm:text-[12px] tracking-[0.04em] sm:tracking-[0.1em] uppercase text-muted order-2 leading-[1.25] sm:leading-snug">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT — store previews (coverflow) */}
          <div className="order-1 lg:order-2 flex-1 w-full lg:max-w-[40%] relative lg:right-[30px] flex items-center justify-center hero-cards-animate overflow-visible p-2 min-h-[296px] sm:min-h-[381px] lg:min-h-[431px]">
            {stores.map(({ src, name, stat }, idx) => {
              const position = (idx - activeIndex + 3) % 3;
              const slots = [
                { x: '0%',   scale: 1,    z: 30, opacity: 1,   rotate: '0deg'  },
                { x: '48%',  scale: 0.85, z: 10, opacity: 0.7, rotate: '4deg'  },
                { x: '-48%', scale: 0.85, z: 10, opacity: 0.7, rotate: '-4deg' },
              ][position];

              return (
                <div
                  key={idx}
                  className="absolute w-[165px] sm:w-[198px] lg:w-[231px] xl:w-[271px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(20,18,16,0.35)] border border-line bg-paper transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${slots.x}) scale(${slots.scale}) rotate(${slots.rotate})`,
                    zIndex: slots.z,
                    opacity: slots.opacity,
                  }}
                >
                  <div className="relative w-full h-[239px] sm:h-[279px] lg:h-[320px] xl:h-[386px]">
                    <Image
                      src={src}
                      alt={`${name} — Shopify store by Scalomatrix`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 200px, (max-width: 1280px) 280px, 330px"
                      priority={idx === 0}
                    />
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 text-shopify text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-1 shadow-sm">
                    <FaShopify className="w-3 h-3" />
                    Shopify store
                  </div>
                  <div className="flex items-center justify-between gap-2 px-3 py-2.5 border-t border-line bg-paper">
                    <span className="font-display font-semibold text-[11px] sm:text-[12px] leading-tight text-ink truncate">{name}</span>
                    {stat && <span className="shrink-0 bg-up-soft text-up font-mono text-[9px] sm:text-[10.5px] font-medium px-1.5 sm:px-2 py-0.5 whitespace-nowrap">{stat.replace(' revenue', '')} ↑</span>}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
