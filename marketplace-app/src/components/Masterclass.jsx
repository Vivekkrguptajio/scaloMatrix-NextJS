"use client";
import React from 'react';

const Masterclass = () => {
  return (
    <section className="py-12 md:py-8 md:py-10 bg-brand-surface relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 w-full max-w-3xl h-96 bg-brand-accent/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-bg rounded-3xl p-8 md:p-16 text-center border border-brand-accent/20 shadow-[0_0_50px_rgba(255,153,0,0.1)]">
          
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-accent bg-brand-accent/10">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">Free Masterclass</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-brand-white mb-6">
            The 7-Figure Amazon Ads Blueprint
          </h2>
          
          <p className="text-brand-text text-lg mb-10 max-w-2xl mx-auto">
            Watch my free 45-minute masterclass where I reveal the exact PPC structures and bidding strategies we use to scale brands past $100k/month profitably.
          </p>
          
          <button className="neon-btn-solid text-lg px-8 py-4">
            Watch Masterclass Now
          </button>
          
          <p className="text-brand-text text-sm mt-6">No credit card required. Instant access.</p>
        </div>
      </div>
    </section>
  );
};

export default Masterclass;

