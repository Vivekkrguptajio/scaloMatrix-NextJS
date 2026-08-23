"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const tiers = [
  {
    id: 1,
    label: 'TIER 01 · THE SINGLE PAGE',
    title: 'One landing page, done right.',
    desc: 'One page, one job: convert your paid traffic. Research → copy → design → build → ship.',
    items: [
      'Customer & competitor research before a pixel moves',
      'Copy, design, and development — one owner',
      'Mobile-first, under 2s load',
      '30-day post-launch care included',
    ],
    cta: 'Start with one page',
    badge: null,
    accent: '#FD5800',
  },
  {
    id: 2,
    label: 'TIER 02 · THE RETAINER',
    title: 'CRO retainer — pages that keep improving.',
    desc: 'For brands scaling spend. We build, test variants, and optimize continuously.',
    items: [
      'New page versions + test variants, ongoing',
      'One task at a time, unlimited queue',
      'From landing pages to cross-sell flows',
      'Weekly async updates, monthly live review',
    ],
    cta: 'Ask about the retainer',
    badge: 'Most Picked',
    accent: '#FD5800',
  },
  {
    id: 3,
    label: 'TIER 03 · THE FULL BUILD',
    title: 'Complete Shopify store revamp.',
    desc: 'When the whole store is the leak, not one page. Sitemap to checkout, rebuilt to earn.',
    items: [
      'Full UI/UX, content, and development',
      'Every key template rebuilt conversion-first',
      'Analytics & tracking wired correctly',
      'Structured sprint with a fixed timeline',
    ],
    cta: 'Scope a full build',
    badge: null,
    accent: '#FD5800',
  },
  {
    id: 4,
    label: 'TIER 04 · THE FREE LOOK',
    title: 'Live audit. 30 minutes. Free.',
    desc: 'Send your URL. We tear down your highest-traffic page live on a call — you keep the notes.',
    items: [
      'Conversion teardown of one real page',
      'A prioritized list of fixes you can do yourself',
      'No deck, no recording games, no upsell script',
      "If we're not the right fit, we'll say so",
    ],
    cta: 'Claim the free audit',
    badge: null,
    accent: '#FD5800',
  },
];

const TierCard = ({ tier }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-2xl p-6 md:p-8 flex flex-col h-full border border-gray-200 overflow-hidden transition-all duration-500 ease-out shadow-sm hover:shadow-2xl hover:-translate-y-2 cursor-default"
    >
      {/* Top accent line that grows on hover */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-[#FD5800] transition-all duration-500 ease-out"
        style={{ width: hovered ? '100%' : '0%' }}
      ></div>

      {/* Badge */}
      {tier.badge && (
        <span className="absolute top-4 right-4 bg-[#FD5800] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/20">
          {tier.badge}
        </span>
      )}

      {/* Tier Label */}
      <div className="text-[#FD5800] text-[11px] font-bold tracking-[0.15em] uppercase mb-4 font-mono">
        {tier.label}
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-black mb-3 leading-snug tracking-tight group-hover:text-[#FD5800] transition-colors duration-300">
        {tier.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 font-medium text-[14px] md:text-[15px] mb-5 leading-relaxed flex-1">
        {tier.desc}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 mb-4"></div>

      {/* Feature List */}
      <ul className="flex flex-col gap-0 mb-5">
        {tier.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 py-3 border-b border-dashed border-gray-100 last:border-b-0 text-gray-700 font-medium text-[13px] md:text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300"
          >
            <span className="text-[#FD5800] mt-0.5 font-bold text-xs shrink-0 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#"
        className="inline-flex items-center gap-2 text-black font-bold text-sm group-hover:text-[#FD5800] transition-all duration-300 mt-auto"
      >
        <span className="border-b-2 border-transparent group-hover:border-[#FD5800] transition-all duration-300 pb-0.5">
          {tier.cta}
        </span>
        <svg
          className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>

      {/* Subtle corner glow on hover */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FD5800] rounded-full opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 blur-3xl pointer-events-none"></div>
    </motion.div>
  );
};

const Offers = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-14 bg-[#fafafa] font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[3px] bg-[#FD5800] rounded-full"></div>
            <span className="text-[#FD5800] text-xs font-bold tracking-[0.25em] uppercase font-mono">Services</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.1] mb-5 tracking-tight text-black">
            Pick the offer that matches<br className="hidden md:block" /> <span className="text-[#FD5800]">your problem.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Every tier includes research, copy, design, and development — one owner, end to end.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;
