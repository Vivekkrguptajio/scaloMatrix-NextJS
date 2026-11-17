"use client";
import { useState } from 'react';
import { scrollToId } from '../utils/smoothScroll'
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  {
    id: 1,
    title: 'Custom Build',
    desc: 'Ground-up Shopify store — custom coded theme, unique design, built to scale from day one.',
    price: 'Custom',
    hasOptions: false,
    options: [],
    includes: [
      'Fully custom Shopify theme from scratch',
      'Bespoke UI/UX tailored to your brand',
      'Third-party app & API integrations',
      'Custom checkout & cart experience',
      'Speed-optimized, under 2s load time',
      'Dedicated project manager throughout',
    ],
    badge: 'Enterprise',
    featured: false,
    isCustom: true,
    cta: 'Get a quote',
  },
  {
    id: 2,
    title: 'Website Creation',
    desc: 'A brand-new Shopify store — designed, developed, and shipped ready to take orders.',
    price: '₹64,999',
    hasOptions: true,
    options: ['Basic design', 'Premium design'],
    includes: [
      'Complete store setup from zero',
      'Homepage + 5 essential pages',
      'Product page design & upload',
      'Payment gateway & shipping setup',
      'Mobile-responsive across all devices',
      'Basic SEO & speed optimization',
    ],
    badge: null,
    featured: false,
    cta: 'Start my store',
  },
  {
    id: 3,
    title: 'Website Redesign',
    desc: 'Your store gets visitors but loses sales. We redesign it to turn more of them into buyers.',
    price: '₹44,999',
    hasOptions: true,
    options: ['Same theme', 'Premium theme'],
    includes: [
      'Full review of your current store',
      'Redesigned homepage & landing pages',
      'Product pages built to raise order value',
      'Improved navigation & user flow',
      'Pages ready for A/B testing',
      'Post-launch performance tracking',
    ],
    badge: 'Popular',
    featured: true,
    cta: 'Redesign my store',
  },
  {
    id: 4,
    title: 'Website Audit',
    desc: 'A free 30-minute live review of your store. We show you exactly what is costing you sales.',
    price: 'Free',
    hasOptions: false,
    options: [],
    includes: [
      'Live review of your store',
      'Insights from heatmaps and analytics',
      'Quick wins, in order of priority',
      'Quick look at your competitors',
      'No upsell pitch — honest feedback only',
      'A report you keep',
    ],
    badge: null,
    featured: false,
    cta: 'Book free audit',
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? service.includes : service.includes.slice(0, 4);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col h-full overflow-hidden transition-all duration-500 ease-out cursor-default bg-paper text-ink border border-line hover:bg-[#FD5800] hover:border-[#FD5800] hover:text-white hover:shadow-[0_24px_50px_-30px_rgba(253,88,0,0.6)] hover:-translate-y-1.5"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-[#FD5800] group-hover:bg-white transition-all duration-500 ease-out"
        style={{ width: hovered || service.featured ? '100%' : '0%' }}
      ></div>

      {/* Badge */}
      {service.badge && (
        <div className="absolute top-5 right-5 z-10">
          <span className="bg-[#FD5800] text-white group-hover:bg-white group-hover:text-[#FD5800] transition-colors duration-500 text-[10px] font-mono font-medium px-3 py-1.5 uppercase tracking-[0.12em]">
            {service.badge}
          </span>
        </div>
      )}

      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Title & Description */}
        <div className="mb-4">
          <h3 className={`h-card text-lg md:text-xl mb-2 transition-colors duration-500 text-ink group-hover:text-white ${service.badge ? 'pr-20' : ''}`}>
            {service.title}
          </h3>
          <p className="text-[12px] leading-relaxed text-muted group-hover:text-white/85 transition-colors duration-500">
            {service.desc}
          </p>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display font-bold text-2xl md:text-3xl tracking-tight text-ink group-hover:text-white transition-colors duration-500">
              {service.price}
            </span>
            {service.price.startsWith('₹') && (
              <span className="text-sm font-medium text-muted group-hover:text-white/70 transition-colors duration-500">
                onwards
              </span>
            )}
          </div>
        </div>

        {/* Options Selector */}
        {service.hasOptions && (
          <div className="mb-4">
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase mb-3 font-mono text-brand-text group-hover:text-white transition-colors duration-500">
              Choose option
            </p>
            <div className="flex gap-2">
              {service.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedOption(i)}
                  className={`text-xs md:text-[12px] font-semibold px-4 py-2.5 transition-all duration-300 border ${
                    selectedOption === i
                      ? 'bg-panel text-white border-ink'
                      : 'bg-transparent text-muted border-line hover:border-ink/40 group-hover:text-white group-hover:border-white/60'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="w-full h-px mb-4 bg-line group-hover:bg-white/30 transition-colors duration-500"></div>

        {/* What's Included */}
        <div className="flex-1">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase mb-4 font-mono text-muted group-hover:text-white/80 transition-colors duration-500">
            What&apos;s included
          </p>
          <ul className="flex flex-col gap-0">
            {visibleItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 py-2 border-b border-dashed last:border-b-0 text-[12px] leading-relaxed transition-colors duration-500 text-ink/80 border-line group-hover:text-white group-hover:border-white/30"
              >
                <span
                  className="text-[#FD5800] group-hover:text-white mt-0.5 font-bold text-xs shrink-0 group-hover:translate-x-1 transition-all duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {service.includes.length > 4 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-xs font-bold mt-3 transition-colors duration-500 text-[#FD5800] group-hover:text-white underline-offset-2 hover:underline"
            >
              {showAll ? 'Show less' : `+ ${service.includes.length - 4} more deliverables`}
            </button>
          )}
        </div>

        {/* CTA Button: always black, its fill turns white on hover so it stays visible on the orange card */}
        <div className="mt-4 pt-1">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('contact');
            }}
            className="group/btn btn-slide btn-slide-white w-full flex items-center justify-center gap-2.5 font-semibold text-sm md:text-[12px] px-6 py-3.5 transition-all duration-300 bg-panel text-white border border-ink hover:text-[#141210]"
          >
            {service.cta}
            <svg
              className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Subtle corner glow on hover */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 blur-3xl pointer-events-none bg-white"></div>
    </motion.div>
  );
};

const ServicesAndPricing = () => {
  return (
    <section id="services" className="relative w-full py-16 md:py-24 bg-cream font-sans scroll-mt-16">
      {/* Tab sits outside the animated block so it pins to the section's corner */}
      <span className="eyebrow">Services &amp; pricing</span>

      <div className="container-x">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 flex flex-col lg:flex-row w-full justify-between items-start lg:items-end gap-6"
        >
          <div className="lg:w-[58%]">
            <h2 className="h-display h-section">
              Simple plans. <span className="accent">Clear</span> prices.
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3 lg:w-[34%]">
            <p className="lead lg:text-right">Pick a plan, or start with a free audit.</p>
            <span className="inline-flex items-center gap-2 bg-paper border border-line px-4 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
              Prices in <span className="text-ink font-medium">INR ₹</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesAndPricing;
