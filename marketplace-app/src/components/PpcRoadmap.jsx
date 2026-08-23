"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    phase: 'PHASE 1 (DAYS 1-7)',
    title: 'Diagnostic Audit & Waste Quarantine',
    desc: 'We perform a deep 90-point forensic audit of your historical ad data, isolating search term bleed and pruning bleeders.',
    highlights: [
      'Negative keyword quarantine for zero-waste spend',
      'ACoS vs. TACOS historical efficiency baseline',
      'Listing conversion & main-image CTR inspection'
    ],
    badge: 'Immediate Waste Cut'
  },
  {
    num: '02',
    phase: 'PHASE 2 (DAYS 8-21)',
    title: 'Bid Architecture & Campaign Restructure',
    desc: 'We rebuild your account into single-keyword & intent-isolated campaign silos with strict placement multipliers.',
    highlights: [
      'Top-of-Search modifier calibration',
      'Exact-match keyword harvesting funnel',
      'Dayparting & dynamic budget pacing algorithms'
    ],
    badge: 'Structure Rebuilt'
  },
  {
    num: '03',
    phase: 'PHASE 3 (DAYS 22-60)',
    title: 'Category Defense & Competitor Conquesting',
    desc: 'We aggressively protect your branded search while capturing market share from overpriced competitor listings.',
    highlights: [
      'Product ASIN targeting & cross-sell defense',
      'Sponsored Brands & Sponsored Display video push',
      'Bid automation against high-converting terms'
    ],
    badge: 'Market Domination'
  },
  {
    num: '04',
    phase: 'PHASE 4 (DAYS 60+)',
    title: 'Organic Ranking Compound Engine',
    desc: 'PPC velocity triggers Amazon\'s A10 algorithm, driving free organic ranking and reducing your overall TACOS.',
    highlights: [
      'Targeted BSR (Best Seller Rank) momentum',
      'Amazon DSP retargeting & lifetime value scaling',
      'Predictable weekly profit & revenue expansion'
    ],
    badge: 'Autonomous Scale'
  }
];

export default function PpcRoadmap({ onOpenModal }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="roadmap" className="py-20 md:py-24 bg-white text-gray-900 relative overflow-hidden border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 text-gray-900 text-xs font-bold tracking-[0.2em] uppercase rounded border border-gray-200">
            Proven Framework
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-[1.1]">
            Our 4-Step <span className="font-semibold text-[#FD5800]">PPC Scaling Engine</span>
          </h2>
          <p className="text-gray-900 text-base max-w-2xl mx-auto font-normal leading-relaxed">
            From initial waste elimination to dominating your product category — here is the exact operational playbook we deploy for every 7-figure Amazon client.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              onClick={() => setActiveStep(idx)}
              className={`p-7 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                activeStep === idx 
                  ? 'border-[#FD5800] bg-white shadow-xl ring-2 ring-[#FD5800]/20' 
                  : 'border-gray-200 bg-gray-50/70 hover:border-gray-300 hover:bg-white'
              }`}
            >
              <div>
                {/* Step Number & Phase */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-gray-900">{step.num}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#FD5800]/10 text-[#FD5800] border border-[#FD5800]/25">
                    {step.badge}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-gray-700 tracking-wider uppercase block mb-2">
                  {step.phase}
                </span>

                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-900 text-xs leading-relaxed mb-6 font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Highlights List */}
              <div className="border-t border-gray-200 pt-4 space-y-2.5 mt-auto">
                {step.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-[11px] text-gray-900 font-medium">
                    <span className="text-[#FD5800] font-bold mt-0.5">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── IMAGE PLACEHOLDER AREA: Amazon Dashboard / Architecture Screenshot ─── */}
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden group hover:border-[#FD5800] transition-colors">
          <div className="max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FD5800]/10 border border-[#FD5800]/30 flex items-center justify-center mx-auto text-[#FD5800]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h4 className="text-xl font-bold text-gray-900">
              Live Amazon PPC Architecture & Growth Reports
            </h4>
            
            <p className="text-sm text-gray-900 font-normal">
              {/* IMAGE_PLACEHOLDER: Replace the box below with your real Amazon Seller Central or PPC Dashboard screenshot */}
              Want to see our live campaign teardown and real ROAS dashboard? Book a strategy session with our senior architects.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenModal('strategy')}
                className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-[#FD5800] text-white font-semibold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Request Custom Roadmap for Your Brand</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

