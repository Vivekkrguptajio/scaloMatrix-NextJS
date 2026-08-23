"use client";
import React from 'react';
import { Target, TrendingUp, Users, DollarSign } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-8 md:py-10 bg-brand-bg relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-brand-white mb-6 leading-tight">
              We are scaloMatrix. <br/>
              <span className="text-brand-accent">We scale Amazon Brands.</span>
            </h2>
            
            <p className="text-brand-text text-lg mb-6 leading-relaxed">
              For the past 5 years, I've managed millions in ad spend, helping Amazon sellers transition from struggling to break even, to dominating their categories with highly profitable campaigns.
            </p>
            
            <p className="text-brand-text text-lg mb-8 leading-relaxed">
              My approach isn't about just getting more clicks—it's about engineering a full-funnel strategy that maximizes your profit margins and builds long-term brand equity.
            </p>
            
            <div className="flex items-center gap-4">
              <img 
                src="https://i.pravatar.cc/150?img=47" 
                alt="scaloMatrix" 
                className="w-16 h-16 rounded-full border-2 border-brand-accent"
              />
              <div>
                <h4 className="text-brand-white font-bold text-lg">scaloMatrix</h4>
                <p className="text-brand-accent text-sm font-semibold tracking-wide">AMAZON PPC EXPERTS</p>
              </div>
            </div>
          </div>

          {/* Right: Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="neon-card">
              <DollarSign className="text-brand-accent w-10 h-10 mb-4" />
              <h3 className="text-4xl font-black text-brand-white mb-2">$10M+</h3>
              <p className="text-brand-text font-medium">Ad Spend Managed</p>
            </div>
            
            <div className="neon-card">
              <TrendingUp className="text-brand-accent w-10 h-10 mb-4" />
              <h3 className="text-4xl font-black text-brand-white mb-2">35%</h3>
              <p className="text-brand-text font-medium">Average ACoS Reduction</p>
            </div>
            
            <div className="neon-card">
              <Users className="text-brand-accent w-10 h-10 mb-4" />
              <h3 className="text-4xl font-black text-brand-white mb-2">50+</h3>
              <p className="text-brand-text font-medium">Brands Scaled</p>
            </div>
            
            <div className="neon-card">
              <Target className="text-brand-accent w-10 h-10 mb-4" />
              <h3 className="text-4xl font-black text-brand-white mb-2">3.5x</h3>
              <p className="text-brand-text font-medium">Average ROAS Increase</p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

