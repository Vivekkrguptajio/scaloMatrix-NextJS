"use client";
import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 't1',
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    quote: "I've seen a significant improvement in our team's productivity since we started using this service.",
  },
  {
    id: 't2',
    name: 'Jane Smith',
    role: 'Product Manager',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.',
  },
  {
    id: 't3',
    name: 'Daniel Martinez',
    role: 'Full-Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'The best investment we\'ve made! The support team is also super responsive and helpful.',
  }
];

export default function TestimonialsSection() {
  const [dismissed, setDismissed] = useState([]);

  const handleDismiss = (id) => {
    setDismissed((prev) => [...prev, id]);
  };

  const TestimonialCard = ({ item }) => {
    if (dismissed.includes(item.id)) {
      return <div className="w-[380px] h-[200px] flex-shrink-0" />;
    }

    return (
      <div className="bg-[#0F0F0F] border border-[#222] rounded-2xl p-6 w-[380px] h-[200px] flex-shrink-0 relative flex flex-col group">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-11 h-11 rounded-full object-cover grayscale-[20%] opacity-90"
            />
            <div>
              <h4 className="text-[15px] font-semibold text-[#f4f4f5] leading-tight">{item.name}</h4>
              <p className="text-[13px] text-[#a1a1aa] mt-0.5">{item.role}</p>
            </div>
          </div>
          <button
            onClick={() => handleDismiss(item.id)}
            className="text-[#a1a1aa] hover:text-white transition-colors"
            aria-label="Dismiss testimonial"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <p className="text-[#d4d4d8] text-[16px] leading-[1.6] font-normal pr-2">
          {item.quote}
        </p>
      </div>
    );
  };

  const LogoCard = ({ src, alt }) => (
    <div className="bg-[#18181B] border border-[#222] rounded-2xl h-[160px] w-[380px] flex-shrink-0 flex items-center justify-center relative overflow-hidden group p-6">
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent opacity-60 pointer-events-none" />
      <div className="relative z-10 transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
        <img src={src} alt={alt} className="h-12 max-w-[220px] object-contain drop-shadow-md brightness-110" />
      </div>
    </div>
  );

  // Strictly alternating 6-column set: Top, Bottom, Top, Bottom, Top, Bottom
  const renderColumnSet = (keyPrefix) => (
    <>
      {/* Column 1: Testimonial TOP, Logo BOTTOM */}
      <div key={`${keyPrefix}-col-1`} className="flex flex-col gap-6">
        <TestimonialCard item={testimonialsData[0]} />
        <LogoCard src="/logo/Nutraphyll.png" alt="Nutraphyll" />
      </div>

      {/* Column 2: Logo TOP, Testimonial BOTTOM */}
      <div key={`${keyPrefix}-col-2`} className="flex flex-col gap-6">
        <LogoCard src="/logo/Judex.png" alt="Judex" />
        <TestimonialCard item={testimonialsData[2]} />
      </div>

      {/* Column 3: Testimonial TOP, Logo BOTTOM */}
      <div key={`${keyPrefix}-col-3`} className="flex flex-col gap-6">
        <TestimonialCard item={testimonialsData[1]} />
        <LogoCard src="/logo/Wayora.png" alt="Wayora" />
      </div>

      {/* Column 4: Logo TOP, Testimonial BOTTOM */}
      <div key={`${keyPrefix}-col-4`} className="flex flex-col gap-6">
        <LogoCard src="/logo/Nada.png" alt="Nada" />
        <TestimonialCard item={testimonialsData[0]} />
      </div>

      {/* Column 5: Testimonial TOP, Logo BOTTOM */}
      <div key={`${keyPrefix}-col-5`} className="flex flex-col gap-6">
        <TestimonialCard item={testimonialsData[2]} />
        <LogoCard src="/logo/drapes.png" alt="Drapes" />
      </div>

      {/* Column 6: Logo TOP, Testimonial BOTTOM */}
      <div key={`${keyPrefix}-col-6`} className="flex flex-col gap-6">
        <LogoCard src="/logo/velmukha.png" alt="Velmukha" />
        <TestimonialCard item={testimonialsData[1]} />
      </div>
    </>
  );

  return (
    <section className="py-16 md:py-20 bg-[#09090B] text-white relative overflow-hidden font-sans border-t border-[#222]">
      
      {/* Marquee Track Container */}
      <div className="flex relative overflow-hidden">
        
        {/* Left & Right Gradients for Marquee fade effect */}
        <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#09090B] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#09090B] to-transparent z-20 pointer-events-none" />

        {/* Single Marquee Row containing strictly alternating Columns */}
        <div className="flex w-max relative">
          <div className="animate-marquee flex gap-6 w-max">
            {renderColumnSet('set1')}
            {renderColumnSet('set2')}
            {renderColumnSet('set3')}
          </div>
        </div>

      </div>

    </section>
  );
}

