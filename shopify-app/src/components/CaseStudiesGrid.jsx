"use client";
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

const SuperYouMockup = () => (
  <div className="flex gap-3 h-[180px] w-full transform scale-100 md:scale-[1.15] origin-center">
    {/* Desktop */}
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       {/* Header */}
       <div className="h-6 border-b border-gray-100 flex items-center px-4 gap-4">
         <div className="w-12 h-1.5 bg-red-500"></div>
         <div className="w-6 h-1.5 bg-gray-200"></div>
       </div>
       {/* Content */}
       <div className="flex flex-1 p-3 gap-3">
         {/* Left col */}
         <div className="w-1/3 flex flex-col gap-2">
           <div className="h-3 w-3/4 bg-black"></div>
           <div className="h-1.5 w-1/2 bg-gray-300"></div>
           <div className="h-8 w-full bg-gray-100 mt-3 rounded-sm border border-gray-200"></div>
           <div className="flex gap-2 mt-2">
             <div className="w-6 h-6 bg-gray-200 rounded-sm"></div>
             <div className="w-6 h-6 bg-gray-200 rounded-sm"></div>
           </div>
           <div className="h-5 w-full bg-red-500 mt-auto rounded-sm"></div>
           <div className="h-5 w-full bg-black rounded-sm"></div>
         </div>
         {/* Mid col */}
         <div className="w-1/3 bg-pink-100 flex items-center justify-center relative overflow-hidden">
            <div className="h-24 w-8 bg-gradient-to-b from-red-400 to-red-600 rounded-lg shadow-sm border border-red-300"></div>
         </div>
         {/* Right col */}
         <div className="w-1/3 bg-[#ffdbb2] p-2 flex flex-col justify-center">
           <div className="h-4 w-full bg-orange-600 mb-1.5 rounded-sm"></div>
           <div className="h-4 w-3/4 bg-orange-600 mb-1.5 rounded-sm"></div>
           <div className="h-4 w-5/6 bg-orange-600 rounded-sm"></div>
         </div>
       </div>
       {/* Bottom */}
       <div className="h-12 border-t border-gray-100 flex gap-2 p-2 bg-gray-50">
         <div className="flex-1 bg-gray-200 rounded-sm"></div>
         <div className="flex-1 bg-gray-200 rounded-sm"></div>
         <div className="flex-1 bg-gray-200 rounded-sm"></div>
         <div className="flex-1 bg-gray-200 rounded-sm"></div>
       </div>
    </div>
    
    {/* Mobile */}
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-5 border-b border-gray-100 flex items-center px-2 justify-between">
        <div className="w-3 h-1 bg-gray-300"></div>
        <div className="w-8 h-1.5 bg-red-500"></div>
      </div>
      <div className="h-20 bg-pink-100 m-1.5 flex items-center justify-center rounded-sm">
        <div className="h-12 w-4 bg-gradient-to-b from-red-400 to-red-600 rounded-sm shadow-sm"></div>
      </div>
      <div className="px-1.5 flex flex-col gap-1.5">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="h-1 w-2/3 bg-gray-300"></div>
        <div className="flex gap-1 mt-1">
          <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
          <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
        </div>
        <div className="h-4 w-full bg-red-500 mt-1 rounded-sm"></div>
      </div>
    </div>
  </div>
);

const BoldCareMockup = () => (
  <div className="flex gap-3 h-[180px] w-full transform scale-[1.15] origin-center">
    {/* Desktop */}
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       {/* Header */}
       <div className="h-4 border-b border-gray-100 bg-black flex items-center px-3 gap-2">
         <div className="w-6 h-1 bg-white"></div>
       </div>
       {/* Content */}
       <div className="flex flex-1 p-3 gap-4">
         {/* Left col - Image */}
         <div className="w-1/2 flex items-center justify-center relative bg-gray-50 rounded-lg">
            <div className="w-16 h-20 bg-slate-800 rounded-lg shadow-md z-10 mr-6 border border-slate-700"></div>
            <div className="w-12 h-24 bg-slate-600 rounded-t-2xl absolute right-6 bottom-0 shadow-sm"></div>
         </div>
         {/* Right col - Details */}
         <div className="w-1/2 flex flex-col gap-2 py-1 pr-2">
           <div className="h-2 w-full bg-black"></div>
           <div className="h-2 w-2/3 bg-black"></div>
           <div className="flex gap-1 mt-1">
             {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>)}
           </div>
           <div className="h-1.5 w-full bg-gray-200 mt-3"></div>
           <div className="h-1.5 w-full bg-gray-200"></div>
           <div className="h-1.5 w-3/4 bg-gray-200"></div>
           
           <div className="flex gap-2 mt-4">
             <div className="h-6 flex-1 border border-gray-200 rounded flex items-center justify-center"><div className="w-6 h-1.5 bg-red-400"></div></div>
             <div className="h-6 flex-1 border border-green-500 rounded bg-green-50 flex items-center justify-center"><div className="w-6 h-1.5 bg-green-500"></div></div>
           </div>
           
           <div className="h-6 w-full bg-[#d97757] mt-auto rounded-md shadow-sm"></div>
         </div>
       </div>
       {/* Bottom Reviews */}
       <div className="h-10 border-t border-gray-100 flex items-center justify-center gap-3 p-1 bg-gray-50">
         {[1,2,3,4].map(i => (
            <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border border-gray-400"></div>
         ))}
       </div>
    </div>
    
    {/* Mobile */}
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-4 border-b border-gray-100 flex items-center justify-between px-2 bg-black">
        <div className="w-4 h-1 bg-white"></div>
        <div className="w-5 h-1 bg-white"></div>
      </div>
      <div className="h-20 bg-gray-50 flex items-center justify-center relative m-1 rounded-sm">
        <div className="w-8 h-10 bg-slate-800 rounded-md shadow-sm z-10 mr-4 border border-slate-700"></div>
        <div className="w-6 h-14 bg-slate-600 rounded-t-xl absolute right-1 bottom-0"></div>
      </div>
      <div className="px-1.5 flex flex-col gap-1.5 mt-1">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="h-1.5 w-2/3 bg-black"></div>
        <div className="flex gap-1 mt-1">
           <div className="h-4 flex-1 border border-green-500 rounded bg-green-50"></div>
        </div>
        <div className="h-5 w-full bg-[#d97757] mt-2 rounded-sm shadow-sm"></div>
      </div>
    </div>
  </div>
);

const EmmaMockup = () => (
  <div className="flex gap-3 h-[180px] w-full transform scale-[1.15] origin-center">
    {/* Desktop */}
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       {/* Header */}
       <div className="h-5 border-b border-gray-100 flex items-center px-3 justify-between">
         <div className="w-8 h-2 bg-orange-500 rounded-sm"></div>
         <div className="flex gap-2">
            <div className="w-3 h-1 bg-gray-300"></div>
            <div className="w-3 h-1 bg-gray-300"></div>
            <div className="w-3 h-1 bg-gray-300"></div>
         </div>
       </div>
       {/* Banner */}
       <div className="h-4 bg-[#1c2c44]"></div>
       
       {/* Content */}
       <div className="flex flex-1 p-3 gap-4">
         {/* Left col - Mattress */}
         <div className="w-3/5 bg-gray-100 flex items-center justify-center relative overflow-hidden rounded-sm">
            {/* Draw a mattress-like shape */}
            <div className="w-28 h-20 bg-white shadow-md border border-gray-200 skew-x-[15deg] transform -rotate-6 flex flex-col justify-end mt-4">
              <div className="h-3 bg-gray-300 w-full border-t border-gray-400"></div>
            </div>
         </div>
         {/* Right col - Details */}
         <div className="w-2/5 flex flex-col gap-2 py-1 pr-1">
           <div className="h-2.5 w-full bg-black"></div>
           <div className="flex gap-1 mt-1">
             {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>)}
           </div>
           
           <div className="h-1.5 w-full bg-gray-200 mt-2"></div>
           <div className="h-1.5 w-full bg-gray-200"></div>
           <div className="h-1.5 w-full bg-gray-200"></div>
           <div className="h-1.5 w-3/4 bg-gray-200"></div>
           
           {/* Badges */}
           <div className="flex gap-2 mt-3">
             <div className="w-6 h-6 rounded-full bg-orange-50 border border-orange-200"></div>
             <div className="w-6 h-6 rounded-full bg-purple-50 border border-purple-200"></div>
             <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200"></div>
           </div>
           
           <div className="h-3 w-1/2 bg-orange-500 mt-auto rounded-sm"></div>
           <div className="h-6 w-full bg-orange-500 rounded-md shadow-sm mt-1"></div>
         </div>
       </div>
    </div>
    
    {/* Mobile */}
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-4 border-b border-gray-100 flex items-center justify-between px-1.5 bg-[#1c2c44]">
        <div className="w-5 h-1 bg-white"></div>
        <div className="w-4 h-1 bg-white"></div>
      </div>
      <div className="h-4 border-b border-gray-100 flex items-center px-1.5">
        <div className="w-6 h-1.5 bg-orange-500 rounded-sm"></div>
      </div>
      <div className="h-20 bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="w-16 h-12 bg-white shadow-sm border border-gray-200 skew-x-[15deg] transform -rotate-6 flex flex-col justify-end mt-2">
          <div className="h-2 bg-gray-300 w-full border-t border-gray-400"></div>
        </div>
      </div>
      <div className="px-1.5 flex flex-col gap-1.5 mt-2">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="flex gap-0.5">
           {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>)}
        </div>
        <div className="h-1 w-full bg-gray-200"></div>
        <div className="h-1 w-2/3 bg-gray-200"></div>
        
        <div className="h-5 w-full bg-orange-500 mt-2 rounded-sm shadow-sm"></div>
      </div>
    </div>
  </div>
);

const BeautywiseMockup = () => (
  <div className="flex gap-3 h-[180px] w-full transform scale-[1.15] origin-center">
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       <div className="h-5 border-b border-gray-100 flex items-center px-3 justify-between">
         <div className="w-12 h-2 bg-black font-serif italic text-[8px]">Beautywise</div>
         <div className="flex gap-1 text-[6px] text-gray-400">
           <span>ELLE</span><span>GRAZIA</span><span>VOGUE</span>
         </div>
       </div>
       <div className="flex flex-1 p-2 gap-2">
         <div className="w-1/2 bg-[#FD5800] rounded-sm flex items-center justify-center text-white text-[10px] font-bold">
           DS-I Daily
         </div>
         <div className="w-1/2 flex flex-col gap-1">
           <div className="h-2 w-full bg-black"></div>
           <div className="h-1 w-3/4 bg-gray-300"></div>
           <div className="h-10 w-full bg-gray-100 mt-1 rounded-sm border border-gray-200 p-1 flex gap-1">
             <div className="w-8 h-8 bg-[#FD5800] rounded-sm"></div>
             <div className="flex-1 flex flex-col gap-1">
               <div className="h-1 w-full bg-black"></div>
               <div className="h-1 w-1/2 bg-gray-300"></div>
             </div>
           </div>
         </div>
       </div>
    </div>
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-4 border-b border-gray-100 flex items-center justify-between px-1.5">
        <div className="w-8 h-1.5 bg-black"></div>
      </div>
      <div className="h-16 bg-[#FD5800] m-1 flex items-center justify-center text-white text-[8px] font-bold rounded-sm">
        DS-I
      </div>
      <div className="px-1.5 flex flex-col gap-1">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="h-1 w-2/3 bg-gray-300"></div>
        <div className="h-4 w-full bg-black mt-1 rounded-sm"></div>
      </div>
    </div>
  </div>
);

const TheGoodBugMockup = () => (
  <div className="flex gap-3 h-[180px] w-full transform scale-[1.15] origin-center">
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       <div className="h-5 border-b border-gray-100 flex items-center px-3 justify-between">
         <div className="w-12 h-2 bg-orange-500 rounded-sm"></div>
         <div className="w-8 h-1 bg-gray-300"></div>
       </div>
       <div className="flex flex-1 p-2 gap-2 bg-orange-50/50">
         <div className="w-1/2 bg-gradient-to-br from-orange-400 to-amber-500 rounded-sm flex items-center justify-center text-white text-[9px] font-bold p-1 text-center">
           Bye Bye Bloat
         </div>
         <div className="w-1/2 flex flex-col gap-1 justify-center">
           <div className="h-2 w-full bg-black"></div>
           <div className="h-1 w-2/3 bg-orange-400"></div>
           <div className="h-5 w-full bg-orange-500 mt-2 rounded-sm"></div>
         </div>
       </div>
    </div>
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-4 border-b border-gray-100 flex items-center px-1.5">
        <div className="w-6 h-1.5 bg-orange-500"></div>
      </div>
      <div className="h-16 bg-gradient-to-br from-orange-400 to-amber-500 m-1 flex items-center justify-center text-white text-[7px] font-bold rounded-sm text-center p-0.5">
        Bye Bye Bloat
      </div>
      <div className="px-1.5 flex flex-col gap-1">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="h-4 w-full bg-orange-500 mt-1 rounded-sm"></div>
      </div>
    </div>
  </div>
);

const WellbeingMockup = () => (
  <div className="flex gap-3 h-[180px] w-full transform scale-[1.15] origin-center">
    <div className="flex-1 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden">
       <div className="h-5 border-b border-gray-100 flex items-center px-3 justify-between">
         <div className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[7px] font-bold">W</div>
         <div className="w-10 h-1.5 bg-gray-300"></div>
       </div>
       <div className="flex flex-1 p-2 gap-2 bg-red-50/40">
         <div className="w-1/2 bg-gradient-to-r from-red-500 to-orange-500 rounded-sm flex items-center justify-center text-white text-[9px] font-bold p-1 text-center">
           Hydrasolt
         </div>
         <div className="w-1/2 flex flex-col gap-1 justify-center">
           <div className="h-2 w-full bg-black"></div>
           <div className="h-1 w-3/4 bg-red-400"></div>
           <div className="h-5 w-full bg-black mt-2 rounded-sm"></div>
         </div>
       </div>
    </div>
    <div className="w-20 md:w-24 lg:w-28 bg-white border border-gray-200 shadow-sm flex flex-col overflow-hidden shrink-0">
      <div className="h-4 border-b border-gray-100 flex items-center px-1.5 justify-between">
        <div className="w-3 h-3 rounded-full border border-black flex items-center justify-center text-[5px]">W</div>
      </div>
      <div className="h-16 bg-gradient-to-r from-red-500 to-orange-500 m-1 flex items-center justify-center text-white text-[7px] font-bold rounded-sm text-center p-0.5">
        Hydrasolt
      </div>
      <div className="px-1.5 flex flex-col gap-1">
        <div className="h-1.5 w-full bg-black"></div>
        <div className="h-4 w-full bg-black mt-1 rounded-sm"></div>
      </div>
    </div>
  </div>
);

const DesktopMobileMockup = ({ src, mobileSrc, alt }) => (
  <div className="flex gap-2 md:gap-4 h-full w-full items-end justify-center pt-2 md:pt-4 px-2 md:px-4 group-hover/link:scale-[1.03] transition-transform duration-500 overflow-hidden">
    {/* Desktop View */}
    <div className="flex-[2.5] bg-white rounded-t-lg md:rounded-t-2xl shadow-[0_-4px_25px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col border-t border-l border-r border-gray-200 relative h-[95%] md:h-[98%]">
      <div className="w-full h-full relative overflow-hidden bg-gray-50">
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover object-top" />
      </div>
    </div>

    {/* Mobile View */}
    <div className="flex-[1] max-w-[120px] sm:max-w-[160px] bg-white rounded-t-lg md:rounded-t-2xl shadow-[0_-4px_25px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col border-t border-l border-r border-gray-200 shrink-0 relative h-[80%] md:h-[88%]">
       <div className="w-full h-full relative overflow-hidden bg-gray-50">
         <img src={mobileSrc || src} alt={`${alt} Mobile`} className="absolute inset-0 w-full h-full object-cover object-top" />
       </div>
    </div>
  </div>
);

const CaseStudiesGrid = () => {
  const [activePage, setActivePage] = useState(0);

  const allStudies = [
    {
      id: 'wayorastyleverse',
      mockup: <DesktopMobileMockup src="/photsWork/Luxury.webp" mobileSrc="/phoneView/Luxury_phone_view.webp" alt="Wayora Styleverse" />,
      badge: (
        <div className="bg-[#ff2020] text-white font-black italic text-xl px-2 py-0.5 tracking-tighter">
          WAYORA<span className="text-white/90">STYLEVERSE</span>
        </div>
      ),
      aov: '+14%',
      rev: '+33%',
      link: 'https://www.wayorastyleverse.com'
    },
    {
      id: 'wayoranatural',
      mockup: <DesktopMobileMockup src="/photsWork/wayoranatural.webp" mobileSrc="/phoneView/wayoranatural_phone_view.webp" alt="Wayora Natural" />,
      badge: (
        <div className="flex items-center gap-1.5 text-black">
          <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97757" strokeWidth="2.5">
            <path d="M6 4h8a4 4 0 010 8H6V4z" />
            <path d="M6 12h9a4 4 0 010 8H6v-8z" />
          </svg>
          <span className="font-semibold text-lg tracking-tight">Wayora Natural</span>
        </div>
      ),
      aov: '+22%',
      rev: '+50%',
      link: 'https://www.wayoranatural.com'
    },
    {
      id: 'nutraphyll',
      mockup: <DesktopMobileMockup src="/photsWork/Nutraphyll.webp" mobileSrc="/phoneView/Nutraphyll_phone_view.webp" alt="Nutraphyll" />,
      badge: (
        <div className="flex flex-col text-[#ff9900]">
          <span className="font-bold text-2xl tracking-tight leading-none">Nutraphyll</span>
          <span className="text-[8px] font-mono tracking-widest uppercase mt-0.5">HEALTHCARE</span>
        </div>
      ),
      aov: '+18%',
      rev: '+20%',
      link: 'https://www.nutraphyll.com'
    },
    {
      id: 'houseofnada',
      mockup: <DesktopMobileMockup src="/photsWork/Nada.webp" mobileSrc="/phoneView/Nada_phone_view.webp" alt="House of Nada" />,
      badge: (
        <div className="font-serif italic font-bold text-xl text-black tracking-tight">
          House of Nada
        </div>
      ),
      aov: '+27%',
      rev: '+44%',
      link: 'https://www.houseofnada.com'
    },
    {
      id: 'drapescorner',
      mockup: <DesktopMobileMockup src="/photsWork/Drapes.webp" mobileSrc="/phoneView/Drapes_phone_view.webp" alt="Drapes Corner" />,
      badge: (
        <div className="flex flex-col text-black">
          <span className="font-bold text-lg leading-none">Drapes Corner</span>
          <span className="text-[7px] font-mono tracking-widest uppercase text-gray-500 mt-0.5">INTERIOR DECOR</span>
        </div>
      ),
      aov: '+16%',
      rev: '+50%',
      link: 'https://www.drapescorner.com'
    },
    {
      id: 'judex',
      mockup: <DesktopMobileMockup src="/photsWork/Judex.webp" mobileSrc="/phoneView/judex_phone_view.webp" alt="Judex" />,
      badge: (
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center font-bold text-xs">J</div>
          <div className="flex flex-col leading-none">
            <span className="text-[7px] font-mono uppercase text-gray-500">LEGAL</span>
            <span className="text-[9px] font-bold uppercase text-black">TECH</span>
          </div>
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
