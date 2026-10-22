"use client";
import { useState } from 'react';
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
      className={`group relative flex flex-col h-full rounded-[28px] overflow-hidden transition-all duration-500 ease-out cursor-default ${
        service.featured
          ? 'bg-panel text-white shadow-[0_30px_60px_-30px_rgba(253,88,0,0.5)] ring-1 ring-[#FD5800]/40'
          : 'bg-paper text-ink border border-line hover:shadow-[0_24px_50px_-30px_rgba(20,18,16,0.4)] hover:-translate-y-1.5'
      }`}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-[#FD5800] transition-all duration-500 ease-out"
        style={{ width: hovered ? '100%' : service.featured ? '100%' : '0%' }}
      ></div>

      {/* Badge */}
      {service.badge && (
        <div className="absolute top-5 right-5 z-10">
          <span className="bg-[#FD5800] text-white text-[10px] font-mono font-medium px-3 py-1.5 rounded-full uppercase tracking-[0.12em]">
            {service.badge}
          </span>
        </div>
      )}

      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Title & Description */}
        <div className="mb-4">
          <h3 className={`h-card text-lg md:text-xl mb-2 transition-colors duration-300 ${service.badge ? 'pr-20' : ''} ${
            service.featured ? 'text-white' : 'text-ink group-hover:text-[#FD5800]'
          }`}>
            {service.title}
          </h3>
          <p className={`text-[15px] leading-relaxed ${
            service.featured ? 'text-white/60' : 'text-muted'
          }`}>
            {service.desc}
          </p>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className={`font-display font-bold text-2xl md:text-3xl tracking-tight ${
              service.featured ? 'text-[#FD5800]' : 'text-ink'
            }`}>
              {service.price}
            </span>
            {service.price.startsWith('₹') && (
              <span className={`text-sm font-medium ${service.featured ? 'text-white/40' : 'text-muted'}`}>
                onwards
              </span>
            )}
          </div>
        </div>

        {/* Options Selector */}
        {service.hasOptions && (
          <div className="mb-4">
            <p className={`text-[11px] font-medium tracking-[0.15em] uppercase mb-3 font-mono ${
              service.featured ? 'text-[#FD5800]' : 'text-brand-text'
            }`}>
              Choose option
            </p>
            <div className="flex gap-2">
              {service.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedOption(i)}
                  className={`text-xs md:text-[13px] font-semibold px-4 py-2.5 rounded-full transition-all duration-300 border ${
                    selectedOption === i
                      ? service.featured
                        ? 'bg-[#FD5800] text-white border-[#FD5800]'
                        : 'bg-panel text-white border-ink'
                      : service.featured
                        ? 'bg-transparent text-white/70 border-white/20 hover:border-white/50'
                        : 'bg-transparent text-muted border-line hover:border-ink/40'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className={`w-full h-px mb-4 ${service.featured ? 'bg-white/10' : 'bg-line'}`}></div>

        {/* What's Included */}
        <div className="flex-1">
          <p className={`text-[11px] font-medium tracking-[0.15em] uppercase mb-4 font-mono ${
            service.featured ? 'text-white/50' : 'text-muted'
          }`}>
            What&apos;s included
          </p>
          <ul className="flex flex-col gap-0">
            {visibleItems.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-2.5 py-2 border-b border-dashed last:border-b-0 text-[13px] leading-relaxed transition-colors duration-300 ${
                  service.featured
                    ? 'text-white/80 border-white/10 group-hover:text-white'
                    : 'text-ink/80 border-line group-hover:text-ink'
                }`}
              >
                <span
                  className="text-[#FD5800] mt-0.5 font-bold text-xs shrink-0 group-hover:translate-x-1 transition-transform duration-300"
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
              className={`text-xs font-bold mt-3 transition-colors duration-300 ${
                service.featured ? 'text-[#FD5800] hover:text-[#ff7733]' : 'text-[#FD5800] hover:text-[#ff7733]'
              }`}
            >
              {showAll ? 'Show less' : `+ ${service.includes.length - 4} more deliverables`}
            </button>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-4 pt-1">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`group/btn w-full flex items-center justify-center gap-2.5 font-semibold text-sm md:text-[15px] px-6 py-3.5 rounded-full transition-all duration-300 ${
              service.featured
                ? 'bg-[#FD5800] text-white border border-[#FD5800] hover:bg-white hover:text-black hover:border-white'
                : 'bg-panel text-white border border-ink hover:bg-[#FD5800] hover:border-[#FD5800]'
            }`}
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
      <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 blur-3xl pointer-events-none ${
        service.featured ? 'bg-[#FD5800]' : 'bg-[#FD5800]'
      }`}></div>
    </motion.div>
  );
};

const ServicesAndPricing = () => {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-cream font-sans">
      <div className="container-x">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 flex flex-col lg:flex-row w-full justify-between items-start lg:items-end gap-6"
        >
          <div className="lg:w-[58%]">
            <span className="eyebrow mb-4">Services &amp; pricing</span>
            <h2 className="h-display h-section">
              Simple plans. <span className="accent">Clear</span> prices.
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3 lg:w-[34%]">
            <p className="lead lg:text-right">Pick a plan, or start with a free audit.</p>
            <span className="inline-flex items-center gap-2 bg-paper border border-line rounded-full px-4 py-1.5 font-mono text-[11px] tracking-[0.12em] uppercase text-muted">
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
