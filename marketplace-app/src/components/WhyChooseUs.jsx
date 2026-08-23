"use client";
import React from 'react';
import { Zap, Shield, Rocket, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Data-Driven Decisions",
      description: "We don't guess. Every bid adjustment and keyword addition is backed by raw Amazon data and advanced analytics.",
      icon: <Zap className="w-6 h-6 text-brand-bg" />
    },
    {
      title: "Full Transparency",
      description: "No hidden fees, no confusing reports. You get clear, easy-to-understand performance dashboards updated in real-time.",
      icon: <Shield className="w-6 h-6 text-brand-bg" />
    },
    {
      title: "Aggressive Scaling",
      description: "Once we hit your target profitability, we deploy proprietary scaling methods to aggressively capture market share.",
      icon: <Rocket className="w-6 h-6 text-brand-bg" />
    },
    {
      title: "Rapid Implementation",
      description: "Time is money. We audit, strategize, and restructure your campaigns within the first 14 days of onboarding.",
      icon: <Clock className="w-6 h-6 text-brand-bg" />
    }
  ];

  return (
    <section className="py-12 md:py-8 md:py-10 bg-brand-bg relative border-t border-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-white mb-6">
            Why Brands <span className="text-brand-accent">Switch To Us</span>
          </h2>
          <p className="text-brand-text text-lg">
            We operate as an extension of your team, bringing agency-level expertise without the traditional agency bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-brand-surface p-8 rounded-xl border border-brand-surface-hover hover:border-brand-accent/50 transition-colors flex gap-6">
              <div className="w-12 h-12 rounded-lg bg-brand-accent flex-shrink-0 flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-white mb-2">{feature.title}</h3>
                <p className="text-brand-text leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

