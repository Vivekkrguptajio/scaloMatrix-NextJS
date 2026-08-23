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
  <div className="flex gap-2 md:gap-4 h-full w-full items-end justify-center pt-2 md:pt-4 px-2 md:px-4 group-hover/link:scale-[1.03] transition-transform duration-500 overflow-hidden">
    {/* Desktop View */}
    <div className="flex-[2.5] bg-white rounded-t-lg md:rounded-t-2xl shadow-[0_-4px_25px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col border-t border-l border-r border-gray-200 relative h-[95%] md:h-[98%]">
      <div className="w-full h-full relative overflow-hidden bg-gray-50">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    </div>

    {/* Mobile View */}
    <div className="flex-[1] max-w-[120px] sm:max-w-[160px] bg-white rounded-t-lg md:rounded-t-2xl shadow-[0_-4px_25px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col border-t border-l border-r border-gray-200 shrink-0 relative h-[80%] md:h-[88%]">
       <div className="w-full h-full relative overflow-hidden bg-gray-50">
         <Image src={mobileSrc || src} alt={`${alt} Mobile`} fill className="object-cover object-top" sizes="(max-width: 768px) 50vw, 25vw" />
       </div>
    </div>
  </div>
);

const CaseStudiesGrid = () => {
  const [activePage, setActivePage] = useState(0);

  const allStudies = [
    {
      id: 'wayorastyleverse',
      mockup: <DesktopMobileMockup src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509465/shopify-app/lap_view/LuxuryWayora.webp" mobileSrc="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509481/shopify-app/phoneView/Luxury_phone_view.webp" alt="Wayora Styleverse" />,
      badge: (
        <div className="relative h-7 md:h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509474/shopify-app/logo/Wayora.png" alt="Wayora Styleverse" fill className="object-contain object-left" sizes="96px" />
        </div>
      ),
      aov: '+14%',
      rev: '+33%',
      link: 'https://www.wayorastyleverse.com'
    },
    {
      id: 'wayoranatural',
      mockup: <DesktopMobileMockup src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509468/shopify-app/lap_view/wayoranatural.webp" mobileSrc="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509484/shopify-app/phoneView/wayoranatural_phone_view.webp" alt="Wayora Natural" />,
      badge: (
        <div className="relative h-7 md:h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509475/shopify-app/logo/WayoraN.png" alt="Wayora Natural" fill className="object-contain object-left" sizes="96px" />
        </div>
      ),
      aov: '+22%',
      rev: '+50%',
      link: 'https://www.wayoranatural.com'
    },
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

  return (
    <section id="case-studies" className="w-full py-8 md:py-12 lg:py-14 bg-white font-sans">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center px-4 sm:px-6 md:px-12 xl:px-16 w-full">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-6 gap-6"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.1] text-black tracking-tight lg:w-[60%]">
            Things we are happy<br /><span className="text-[#FD5800]">about.</span>
          </h2>
          <div className="w-full lg:w-[40%] flex lg:justify-end">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed lg:text-right">
              We don't do testimonials until there's a number next to them. Each tile is a real page, shipped, measured over n≥10,000 sessions.
            </p>
          </div>
        </motion.div>

        {/* MOBILE VIEW */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="lg:hidden w-full flex flex-col gap-6"
        >
          <div className="bg-white border-[0.5px] border-black rounded-2xl overflow-hidden w-full flex flex-col hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(253,88,0,0.2)] transition-all duration-300">
            {mobileVisibleStudies.map((study, idx) => (
              <div 
                key={study.id} 
                className={`p-4 sm:p-5 flex flex-col ${idx === 0 ? 'border-b-[0.5px] border-black' : ''}`}
              >
                <a 
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f1f1f1] border border-black rounded-xl p-2 sm:p-3 mb-4 flex-1 flex items-center justify-center min-h-[170px] sm:min-h-[240px] cursor-pointer hover:shadow-lg transition-shadow group relative block"
                >
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-50">
                     <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold tracking-wide">Visit Website ↗</span>
                  </div>
                  {study.mockup}
                </a>
                <div className="flex justify-between items-end mt-auto">
                  {study.badge}
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                      <div className="text-xl sm:text-2xl font-bold text-[#FD5800] leading-none mb-1">
                        <AnimatedCounter target={parseInt(study.aov)} prefix="+" suffix="%" />
                      </div>
                      <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">AOV</div>
                    </div>
                    <div className="w-[1px] h-8 bg-gray-300"></div>
                    <div className="flex flex-col items-end">
                      <div className="text-xl sm:text-2xl font-bold text-[#FD5800] leading-none mb-1">
                        <AnimatedCounter target={parseInt(study.rev)} prefix="+" suffix="%" />
                      </div>
                      <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">REVENUE</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Mobile Pagination Dots */}
          <div className="flex gap-2 justify-center items-center mt-2">
            {[0, 1, 2].map((pageIdx) => (
              <button
                key={pageIdx}
                onClick={() => setActivePage(pageIdx)}
                className={`w-3.5 h-3.5 transition-colors border border-black ${
                  activePage === pageIdx ? 'bg-[#FD5800]' : 'bg-black'
                }`}
                aria-label={`Go to page ${pageIdx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* DESKTOP VIEW */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="hidden lg:flex flex-col w-full gap-8"
        >
          {/* Row 1 */}
          <motion.div variants={itemVariants} className="bg-white border border-black rounded-3xl overflow-hidden w-full grid grid-cols-3 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(253,88,0,0.2)] transition-all duration-300">
            {allStudies.slice(0, 3).map((study, idx) => (
              <div 
                key={study.id} 
                className={`p-4 md:p-5 flex flex-col overflow-hidden ${idx < 2 ? 'border-r border-black' : ''}`}
              >
                <a 
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f1f1f1] border border-black rounded-2xl p-3 md:p-4 mb-5 flex-1 flex items-center justify-center min-h-[280px] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group relative block"
                >
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-50">
                     <span className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide shadow-xl transform scale-95 group-hover:scale-100 transition-all">Visit Website ↗</span>
                  </div>
                  {study.mockup}
                </a>
                <div className="flex flex-wrap xl:flex-nowrap justify-between items-end mt-auto gap-2 xl:gap-4">
                  <div className="shrink-0">{study.badge}</div>
                  <div className="flex items-center gap-3 xl:gap-5 shrink-0">
                    <div className="flex flex-col items-end">
                      <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#FD5800] leading-none mb-1.5">
                        <AnimatedCounter target={parseInt(study.aov)} prefix="+" suffix="%" />
                      </div>
                      <div className="text-[8px] xl:text-[9px] font-mono text-gray-400 uppercase tracking-widest">AOV</div>
                    </div>
                    <div className="w-[1px] h-6 xl:h-8 bg-gray-300"></div>
                    <div className="flex flex-col items-end">
                      <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#FD5800] leading-none mb-1.5">
                        <AnimatedCounter target={parseInt(study.rev)} prefix="+" suffix="%" />
                      </div>
                      <div className="text-[8px] xl:text-[9px] font-mono text-gray-400 uppercase tracking-widest">REVENUE</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div variants={itemVariants} className="bg-white border border-black rounded-3xl overflow-hidden w-full grid grid-cols-3 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(253,88,0,0.2)] transition-all duration-300">
            {allStudies.slice(3, 6).map((study, idx) => (
              <div 
                key={study.id} 
                className={`p-4 md:p-5 flex flex-col overflow-hidden ${idx < 2 ? 'border-r border-black' : ''}`}
              >
                <a 
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f1f1f1] border border-black rounded-2xl p-3 md:p-4 mb-5 flex-1 flex items-center justify-center min-h-[280px] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group relative block"
                >
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-50">
                     <span className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide shadow-xl transform scale-95 group-hover:scale-100 transition-all">Visit Website ↗</span>
                  </div>
                  {study.mockup}
                </a>
                <div className="flex flex-wrap xl:flex-nowrap justify-between items-end mt-auto gap-2 xl:gap-4">
                  <div className="shrink-0">{study.badge}</div>
                  <div className="flex items-center gap-3 xl:gap-5 shrink-0">
                    <div className="flex flex-col items-end">
                      <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#FD5800] leading-none mb-1.5">
                        <AnimatedCounter target={parseInt(study.aov)} prefix="+" suffix="%" />
                      </div>
                      <div className="text-[8px] xl:text-[9px] font-mono text-gray-400 uppercase tracking-widest">AOV</div>
                    </div>
                    <div className="w-[1px] h-6 xl:h-8 bg-gray-300"></div>
                    <div className="flex flex-col items-end">
                      <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-[#FD5800] leading-none mb-1.5">
                        <AnimatedCounter target={parseInt(study.rev)} prefix="+" suffix="%" />
                      </div>
                      <div className="text-[8px] xl:text-[9px] font-mono text-gray-400 uppercase tracking-widest">REVENUE</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudiesGrid;
