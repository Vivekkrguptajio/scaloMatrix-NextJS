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
    title: 'Website Creation',
    desc: 'End to end website design and development',
    price: '₹20,000',
    hasOptions: true,
    options: ['Basic design', 'Premium design'],
    includes: [
      'Standard website design',
      'Homepage setup',
      'Design strategy',
      'Backend setup',
      'Responsive mobile optimization',
      'SEO-ready structure',
    ],
    badge: null,
    featured: false,
  },
  {
    id: 2,
    title: 'Website Redesign',
    desc: 'Sales/Conversion focused website redesign',
    price: '₹10,000',
    hasOptions: true,
    options: ['Same theme', 'Premium theme'],
    includes: [
      'Standard website design',
      'Homepage setup',
      'Design strategy',
      'Backend setup',
      'Conversion optimization',
      'Performance audit',
    ],
    badge: 'Popular',
    featured: true,
  },
  {
    id: 3,
    title: 'Website Audit',
    desc: "A focused audit showing what's hurting your sales",
    price: '₹5,000',
    hasOptions: false,
    options: [],
    includes: [
      'Standard website design',
      'Homepage setup',
      'Design strategy',
      'Backend setup',
      'Conversion analysis report',
      'Actionable recommendations',
    ],
    badge: null,
    featured: false,
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
      className={`group relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-500 ease-out cursor-default ${
        service.featured
          ? 'bg-[#111111] text-white shadow-2xl shadow-orange-500/10 ring-1 ring-[#FD5800]/30 scale-[1.02] md:scale-105'
          : 'bg-white text-black border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2'
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
          <span className="bg-[#FD5800] text-white text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-orange-500/30">
            {service.badge}
          </span>
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* Title & Description */}
        <div className="mb-6">
          <h3 className={`text-xl md:text-2xl font-bold mb-2 leading-snug tracking-tight transition-colors duration-300 ${
            service.featured ? 'text-white' : 'text-black group-hover:text-[#FD5800]'
          }`}>
            {service.title}
          </h3>
          <p className={`text-sm md:text-[15px] leading-relaxed font-medium ${
            service.featured ? 'text-white/60' : 'text-gray-500'
          }`}>
            {service.desc}
          </p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl md:text-4xl font-black tracking-tight ${
              service.featured ? 'text-[#FD5800]' : 'text-black'
            }`}>
              {service.price}
            </span>
            <span className={`text-sm font-medium ${service.featured ? 'text-white/40' : 'text-gray-400'}`}>
              onwards
            </span>
          </div>
        </div>

        {/* Options Selector */}
        {service.hasOptions && (
          <div className="mb-6">
            <p className={`text-[11px] font-bold tracking-[0.15em] uppercase mb-3 font-mono ${
              service.featured ? 'text-[#FD5800]' : 'text-[#FD5800]'
            }`}>
              Choose option
            </p>
            <div className="flex gap-2">
              {service.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedOption(i)}
                  className={`text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-300 border ${
                    selectedOption === i
                      ? service.featured
                        ? 'bg-[#FD5800] text-white border-[#FD5800]'
                        : 'bg-black text-white border-black'
                      : service.featured
                        ? 'bg-transparent text-white/70 border-white/20 hover:border-white/50'
                        : 'bg-transparent text-gray-600 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Divider */}
        <div className={`w-full h-px mb-5 ${service.featured ? 'bg-white/10' : 'bg-gray-200'}`}></div>

        {/* What's Included */}
        <div className="flex-1">
          <p className={`text-[11px] font-bold tracking-[0.15em] uppercase mb-4 font-mono ${
            service.featured ? 'text-white/50' : 'text-gray-400'
          }`}>
            What&apos;s included
          </p>
          <ul className="flex flex-col gap-0">
            {visibleItems.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-2.5 py-3 border-b border-dashed last:border-b-0 font-medium text-[13px] md:text-sm leading-relaxed transition-colors duration-300 ${
                  service.featured
                    ? 'text-white/80 border-white/10 group-hover:text-white'
                    : 'text-gray-700 border-gray-100 group-hover:text-gray-900'
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
        <div className="mt-6 pt-2">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`group/btn w-full flex items-center justify-center gap-2.5 font-bold text-sm md:text-base px-6 py-3.5 rounded-full transition-all duration-300 ${
              service.featured
                ? 'bg-[#FD5800] text-white border border-[#FD5800] hover:bg-white hover:text-black hover:border-white'
                : 'bg-black text-white border border-black hover:bg-[#FD5800] hover:border-[#FD5800]'
            }`}
          >
            Contact Us
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
    <section id="services" className="w-full py-8 md:py-12 lg:py-14 bg-[#fafafa] font-sans">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 xl:px-16">

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
            <span className="text-[#FD5800] text-xs font-bold tracking-[0.25em] uppercase font-mono">Pricing</span>
          </div>

          <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end gap-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.1] tracking-tight text-black lg:w-[60%]">
              Services and<br /><span className="text-[#FD5800]">pricing.</span>
            </h2>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
              <span className="text-[11px] font-bold tracking-wider text-gray-400 uppercase">Currency</span>
              <span className="text-sm font-bold text-black">INR ₹</span>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
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
