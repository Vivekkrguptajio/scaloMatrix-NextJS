"use client";

import { FaShopify } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
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
    }, 3000)
    return () => { clearInterval(interval); clearTimeout(swap) }
  }, [])

  return (
    <span className="accent relative block md:inline-block w-fit mx-auto md:mx-0 my-1 md:my-0 pr-1 min-h-[1.15em]">
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
  { src: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509485/shopify-app/photsWork/Drapes.webp', name: 'Drapes Corner', stat: '+50% revenue' },
  { src: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509488/shopify-app/photsWork/Nada.webp', name: 'House of Nada', stat: '+44% revenue' },
  { src: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509487/shopify-app/photsWork/Luxury.webp', name: 'Shopify store', stat: null },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stores.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const [before, after] = heroData.description.split(heroData.descriptionHighlight)

  return (
    <section
      id="hero"
      className="flex flex-col pt-28 md:pt-36 pb-6 md:pb-8 px-5 sm:px-8 md:px-12 lg:px-20 bg-cream relative overflow-hidden"
    >
      {/* Soft brand glow */}
      <div className="hidden md:block absolute -top-24 right-[-8%] w-[640px] h-[640px] rounded-full bg-brand/[0.10] blur-3xl pointer-events-none" />
      <div className="hidden md:block absolute bottom-[-12%] left-[-6%] w-[480px] h-[480px] rounded-full bg-shopify/[0.08] blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10 xl:gap-16">

          {/* LEFT — message */}
          <div className="flex-1 w-full lg:max-w-[56%] text-center lg:text-left">

            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-6 hero-animate-1">
              <span className="inline-flex items-center gap-2 bg-paper border border-line text-ink text-[11px] font-semibold tracking-[0.12em] uppercase px-3.5 py-2 rounded-full font-mono">
                <FaShopify className="w-4 h-4 text-shopify" />
                {heroData.badge}
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 bg-brand-soft text-brand-text text-[11px] font-semibold tracking-[0.12em] uppercase px-3.5 py-2 rounded-full font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                {heroData.badge2}
              </span>
            </div>

            <h1 className="h-display text-[clamp(1.9rem,3.5vw,3rem)] mb-6 hero-animate-2">
              We build <RotatingText />
              <span className="block" />
              {heroData.headlineSuffix}
            </h1>

            <p className="lead max-w-[560px] mx-auto lg:mx-0 mb-9 hero-animate-3">
              {before}<strong className="font-semibold text-ink">{heroData.descriptionHighlight}</strong>{after}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-12 hero-animate-4">
              <a href="#contact" className="btn-primary group">
                Get your Shopify store
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#work" className="btn-ghost">See our work</a>
            </div>

            {/* Stats */}
            <dl className="grid grid-cols-3 max-w-[560px] mx-auto lg:mx-0 border-t border-line pt-6 hero-animate-5">
              {heroData.stats.map((stat, i) => (
                <div key={i} className={`flex flex-col gap-1 ${i > 0 ? 'pl-4 sm:pl-6 border-l border-line' : ''}`}>
                  <dd className="h-display text-2xl sm:text-3xl text-ink order-1">
                    {stat.prefix}<AnimatedCounter target={stat.value} />{stat.suffix}
                  </dd>
                  <dt className="font-mono text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-muted order-2 leading-snug">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT — store previews (coverflow) */}
          <div className="flex-1 w-full lg:max-w-[44%] relative hidden lg:flex items-center justify-center hero-cards-animate overflow-visible p-2" style={{ minHeight: '480px' }}>
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
                  className="absolute w-[280px] xl:w-[330px] rounded-[26px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(20,18,16,0.35)] border border-line bg-paper transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${slots.x}) scale(${slots.scale}) rotate(${slots.rotate})`,
                    zIndex: slots.z,
                    opacity: slots.opacity,
                  }}
                >
                  <div className="relative w-full h-[390px] xl:h-[470px]">
                    <Image
                      src={src}
                      alt={`${name} — Shopify store by Scalomatrix`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1280px) 280px, 330px"
                      priority={idx === 0}
                    />
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 text-shopify text-[10px] font-mono font-medium tracking-wide uppercase px-2.5 py-1 rounded-full shadow-sm">
                    <FaShopify className="w-3 h-3" />
                    Shopify store
                  </div>
                  {position === 0 && stat && (
                    <div className="absolute bottom-3 right-3 bg-brand-deep text-white font-mono text-[11px] font-medium px-3 py-1.5 rounded-full shadow-lg">
                      {stat} ↑
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
