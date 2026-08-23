"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

// Dummy logos for client section
const dummyLogos = [
  'P&G', 'Glow & Lovely', 'Garnier MEN',
  'Kotak', 'Jio', 'UNO',
  'Godrej', 'Ashok Leyland', "Domino's"
];

const solutionsData = {
  'brand-solutions': {
    title: 'Brand Solutions',
    description: 'Our Strategists, Designers, Video Editors and Animators provide you with holistic solutions to grow your digital presence and achieve your business goals through both day-to-day content and integrated flagship campaigns.',
    subtitle: 'Proud to work with the biggest brands in India & Abroad',
    logos: dummyLogos,
    services: [
      'Social Media Management',
      'Original Content and Copywriting',
      'Graphic Design, Iconography and Illustrations',
      'Video Editing and Animation',
      'Film Production, AVs and Product Photography',
      'Campaign Planning',
      'Schbang Fluence & ORM',
      'Print, OOH, Mainline Advertising',
      'New Brand Launch and Rebranding'
    ]
  },
  'tech-solutions': {
    title: 'Tech Solutions',
    description: 'Our full-stack engineering team builds robust, scalable digital products and platforms that drive innovation, streamline operations, and deliver exceptional user experiences across all touchpoints.',
    subtitle: 'Trusted by leading technology innovators',
    logos: ['TechCorp', 'InnovateX', 'CloudSync', 'DataFlow', 'NextGen AI', 'Quantum', 'ByteLogic', 'CyberNet', 'OmniStack'],
    services: [
      'Full-Stack Web Development',
      'Mobile App Development (iOS & Android)',
      'E-commerce & Headless Commerce',
      'Custom SaaS Product Development',
      'Cloud Architecture & DevOps',
      'UI/UX System Design',
      'API Integration & Microservices',
      'Data Analytics & Dashboarding',
      'Quality Assurance & Automated Testing'
    ]
  },
  'media-solutions': {
    title: 'Media Solutions',
    description: "We leverage data-driven insights and strategic media planning to amplify your brand's reach, optimize ad spend, and maximize ROI across all paid digital channels.",
    subtitle: 'Driving growth for top global advertisers',
    logos: ['AdVantage', 'MediaBoost', 'ReachMax', 'Convertify', 'ClickStream', 'ViewPoint', 'Audience360', 'MetricGen', 'GrowthHub'],
    services: [
      'Performance Marketing & Paid Social',
      'Search Engine Marketing (SEM/PPC)',
      'Programmatic Media Buying',
      'Search Engine Optimization (SEO)',
      'Affiliate & Influencer Marketing',
      'Digital Media Strategy & Planning',
      'Conversion Rate Optimization (CRO)',
      'Data Analytics & Attribution Modeling',
      'E-commerce Marketplace Optimization'
    ]
  }
};

export default function SolutionsPage() {
  const { slug } = useParams();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [prevSlug, setPrevSlug] = useState(slug);

  if (slug !== prevSlug) {
    setPrevSlug(slug);
    setActiveAccordion(null);
  }
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const data = solutionsData[slug];

  if (!data) {
    window.location.href = "/";
    return null;
  }

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-clip font-sans">
      <Navbar isDarkTheme={false} />
      
      <main className="relative z-10 w-full bg-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Info & Logos */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] mb-6 tracking-tight"
            >
              {data.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-700 font-medium leading-relaxed mb-10"
            >
              {data.description}
            </motion.p>
            
            <div className="w-16 h-0.5 bg-gray-300 mb-10"></div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-bold text-[#111111] mb-8"
            >
              {data.subtitle}
            </motion.h3>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-x-8 gap-y-12 items-center"
            >
              {data.logos.map((logo, idx) => (
                <div key={idx} className="flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  {/* Placeholder for logos. Users can replace with real image tags later */}
                  <span className="text-xl font-black text-gray-800 text-center uppercase tracking-tighter">
                    {logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Right Column: Accordion */}
          <div className="w-full lg:w-1/2">
            <div className="border-t border-gray-200">
              {data.services.map((service, idx) => (
                <div key={idx} className="border-b border-gray-200">
                  <button 
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="text-lg md:text-xl font-bold text-[#111111] group-hover:text-[#FD5800] transition-colors">
                      {service}
                    </span>
                    <span className="ml-4 flex-shrink-0">
                      <motion.svg 
                        animate={{ rotate: activeAccordion === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5 text-gray-400 group-hover:text-[#FD5800] transition-colors" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {activeAccordion === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-gray-600 font-medium">
                          Our expert team provides comprehensive {service.toLowerCase()} tailored to elevate your brand and drive measurable results. We focus on strategic execution and creative excellence.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        </div>
      </main>
      
      <Contact reveal={true} />
    </div>
  );
}
