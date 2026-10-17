"use client";
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from './Hero';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const DesktopMobileMockup = ({ src, mobileSrc, alt }) => (
  <div className="flex gap-2 sm:gap-4 h-full w-full items-end justify-center pt-2 sm:pt-4 px-2 sm:px-4 group-hover/link:scale-[1.03] transition-transform duration-500 overflow-hidden">
    {/* Desktop View */}
    <div className="flex-[2.5] bg-paper rounded-t-lg md:rounded-t-2xl shadow-[0_-4px_25px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col border-t border-l border-r border-gray-200 relative h-[95%] md:h-[98%]">
      <div className="w-full h-full relative overflow-hidden bg-gray-100 min-h-[140px] sm:min-h-[180px] md:min-h-[220px]">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width: 768px) 70vw, 50vw" />
      </div>
    </div>

    {/* Mobile View */}
    <div className="flex-[1] max-w-[90px] sm:max-w-[140px] bg-paper rounded-t-lg md:rounded-t-2xl shadow-[0_-4px_25px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col border-t border-l border-r border-gray-200 shrink-0 relative h-[82%] md:h-[88%]">
       <div className="w-full h-full relative overflow-hidden bg-gray-100 min-h-[120px] sm:min-h-[150px] md:min-h-[180px]">
         <Image src={mobileSrc || src} alt={`${alt} Mobile`} fill className="object-cover object-top" sizes="(max-width: 768px) 30vw, 25vw" />
       </div>
    </div>
  </div>
);

const CaseStudiesGrid = () => {
  const [activePage, setActivePage] = useState(0);

  const allStudies = [
    {
      id: 'nutraphyll',
      mockup: <DesktopMobileMockup src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509467/shopify-app/lap_view/Nutraphyll.webp" mobileSrc="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509483/shopify-app/phoneView/Nutraphyll_phone_view.webp" alt="Nutraphyll" />,
      badge: (
        <div className="relative h-7 md:h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509472/shopify-app/logo/Nutraphyll.png" alt="Nutraphyll" fill className="object-contain object-left" sizes="96px" />
        </div>
      ),
      aov: '+18%',
      rev: '+20%',
      link: 'https://www.nutraphyll.com'
    },
    {
      id: 'houseofnada',
      mockup: <DesktopMobileMockup src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509466/shopify-app/lap_view/Nada.webp" mobileSrc="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509482/shopify-app/phoneView/Nada%20_phone_view.webp" alt="House of Nada" />,
      badge: (
        <div className="relative h-7 md:h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509471/shopify-app/logo/Nada.png" alt="House of Nada" fill className="object-contain object-left" sizes="96px" />
        </div>
      ),
      aov: '+27%',
      rev: '+44%',
      link: 'https://www.houseofnada.com'
    },
    {
      id: 'drapescorner',
      mockup: <DesktopMobileMockup src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509463/shopify-app/lap_view/Drapes.webp" mobileSrc="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509479/shopify-app/phoneView/Drapes_phone_view.webp" alt="Drapes Corner" />,
      badge: (
        <div className="relative h-7 md:h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509469/shopify-app/logo/drapes.png" alt="Drapes Corner" fill className="object-contain object-left" sizes="96px" />
        </div>
      ),
      aov: '+16%',
      rev: '+50%',
      link: 'https://www.drapescorner.com'
    },
    {
      id: 'judex',
      mockup: <DesktopMobileMockup src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509464/shopify-app/lap_view/Judex.webp" mobileSrc="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509480/shopify-app/phoneView/judex_phone_view.webp" alt="Judex" />,
      badge: (
        <div className="relative h-7 md:h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509470/shopify-app/logo/Judex.png" alt="Judex" fill className="object-contain object-left" sizes="96px" />
        </div>
      ),
      aov: '+16%',
      rev: '+43%',
      link: 'https://www.judex.in'
    }
  ];

  // Mobile pairs (2 cards per page)
  const mobileVisibleStudies = allStudies.slice(activePage * 2, activePage * 2 + 2);

  const StudyCard = ({ study }) => (
    <article className="bg-paper border border-line rounded-[28px] p-4 sm:p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(20,18,16,0.4)]">
      <div className="bg-cream rounded-2xl p-2 sm:p-3 mb-5 w-full h-[220px] sm:h-[270px] lg:h-[300px] flex items-end justify-center relative overflow-hidden">
        {study.mockup}
      </div>
      <div className="flex items-end justify-between gap-4 px-1 mt-auto">
        <div className="shrink-0 bg-white rounded-lg px-2 py-1">{study.badge}</div>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex flex-col items-end">
            <div className="h-display text-xl sm:text-2xl text-brand leading-none mb-1.5">
              <AnimatedCounter target={parseInt(study.aov)} prefix="+" suffix="%" />
            </div>
            <div className="font-mono text-[10px] text-muted uppercase tracking-[0.14em]">Avg. order</div>
          </div>
          <div className="w-px h-9 bg-line" />
          <div className="flex flex-col items-end">
            <div className="h-display text-xl sm:text-2xl text-brand leading-none mb-1.5">
              <AnimatedCounter target={parseInt(study.rev)} prefix="+" suffix="%" />
            </div>
            <div className="font-mono text-[10px] text-muted uppercase tracking-[0.14em]">Revenue</div>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section id="case-studies" className="w-full py-16 md:py-24 bg-cream font-sans">
      <div className="max-w-[1280px] mx-auto flex flex-col px-5 sm:px-8 md:px-12 xl:px-16 w-full">

        {/* Header */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-10 md:mb-14 gap-6">
          <div className="lg:w-[58%]">
            <span className="eyebrow mb-4">Results</span>
            <h2 className="h-display h-section">
              Real stores. <span className="accent">Real</span> numbers.
            </h2>
          </div>
          <p className="lead lg:w-[34%]">
            Every store below is live. We built it, then measured it over 10,000+ visits. Same traffic, more sales.
          </p>
        </div>

        {/* Mobile: paged pairs */}
        <div className="lg:hidden w-full flex flex-col gap-5">
          {mobileVisibleStudies.map((study) => <StudyCard key={study.id} study={study} />)}
          <div className="flex gap-2 justify-center items-center mt-1">
            {[0, 1].map((pageIdx) => (
              <button
                key={pageIdx}
                onClick={() => setActivePage(pageIdx)}
                className={`h-2.5 rounded-full transition-all ${activePage === pageIdx ? 'w-8 bg-brand' : 'w-2.5 bg-ink/25'}`}
                aria-label={`Go to page ${pageIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 2×2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="hidden lg:grid grid-cols-2 gap-6"
        >
          {allStudies.map((study) => (
            <motion.div key={study.id} variants={itemVariants}>
              <StudyCard study={study} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudiesGrid;
