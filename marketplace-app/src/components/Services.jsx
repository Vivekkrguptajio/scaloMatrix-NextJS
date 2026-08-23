"use client";
import React from 'react';
import { LineChart, Search, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "PPC Audit & Strategy",
      description: "A deep dive into your current campaigns to identify wasted spend, missed opportunities, and structural flaws. We'll hand you a blueprint for immediate growth.",
      icon: <Search className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Full-Funnel Management",
      description: "End-to-end management of your Sponsored Products, Brands, and Display campaigns. We handle keyword research, bid optimization, and budget scaling.",
      icon: <LineChart className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "1-on-1 Coaching",
      description: "Want to run things yourself? Get tailored 1-on-1 consulting sessions where I train you or your team on advanced Amazon advertising strategies.",
      icon: <BookOpen className="w-8 h-8 text-brand-accent" />
    }
  ];

  return (
    <section id="services" className="py-12 md:py-8 md:py-10 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-white mb-6">
            How We Can <span className="text-brand-accent">Help You</span>
          </h2>
          <p className="text-brand-text text-lg">
            Whether you need someone to completely take over your ads or just need strategic direction, we have a solution tailored for your brand's current stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="neon-card flex flex-col items-start text-left bg-brand-bg hover:bg-brand-surface-hover">
              <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-white mb-4">{service.title}</h3>
              <p className="text-brand-text mb-8 flex-grow">{service.description}</p>
              <button className="text-brand-accent font-bold uppercase tracking-widest text-sm flex items-center group">
                Learn More 
                <span className="ml-2 transform transition-transform group-hover:translate-x-2">→</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

