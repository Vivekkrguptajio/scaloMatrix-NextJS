"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StrategyModal({ isOpen, onClose, initialType = 'strategy' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    marketplace: 'US',
    adSpend: '$5k - $15k / mo',
    storeUrl: '',
    goal: 'Lower ACoS & Cut Waste'
  });

  const marketplaces = [
    { id: 'US', label: '🇺🇸 Amazon US' },
    { id: 'UK', label: '🇬🇧 UK & Europe' },
    { id: 'IN', label: '🇮🇳 Amazon India' },
    { id: 'Global', label: '🌐 Multi-Region' },
  ];

  const spendRanges = [
    { id: '< $2k', label: 'Under $2k/mo' },
    { id: '$2k - $5k', label: '$2k - $5k/mo' },
    { id: '$5k - $15k', label: '$5k - $15k/mo' },
    { id: '$15k+', label: '$15k+/mo' },
  ];

  const goals = [
    'Lower ACoS & Cut Waste',
    'Scale Revenue & ROAS',
    'New Product Launch Push',
    'Full Account Takeover'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop with Blur */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-gray-950/70 backdrop-blur-md"
        />

        {/* Bespoke Glass Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.2)] text-gray-900 z-10 my-8 overflow-hidden"
        >
          {/* Top Decorative Color Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FD5800] via-amber-500 to-emerald-500" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-[#FD5800] hover:text-white flex items-center justify-center text-gray-500 transition-all font-bold text-sm shadow-xs"
          >
            ✕
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FD5800] animate-ping" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FD5800]">
                  {initialType === 'audit' ? 'Free PPC Audit Request' : '1-on-1 Strategy Session'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
                {initialType === 'audit' 
                  ? 'Get Your Free Amazon PPC Account Audit' 
                  : 'Book A Free Strategy Session'}
              </h3>
              
              <p className="text-gray-600 text-xs sm:text-sm mb-6 leading-relaxed">
                Customized growth blueprint crafted by senior scaloMATRIX strategists. No fluff, pure data.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Saurabh Pandey"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FD5800] focus:bg-white rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none text-sm transition-all shadow-2xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="saurabh@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-gray-200 focus:border-[#FD5800] focus:bg-white rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none text-sm transition-all shadow-2xs font-medium"
                    />
                  </div>
                </div>

                {/* Interactive Target Marketplace Selector Pills */}
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                    Target Marketplace
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {marketplaces.map((m) => (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => setFormData({ ...formData, marketplace: m.id })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                          formData.marketplace === m.id
                            ? 'bg-[#FD5800] text-white border-[#FD5800] shadow-md shadow-[#FD5800]/20 scale-[1.02]'
                            : 'bg-[#F8FAFC] text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Monthly Ad Spend Selector Pills */}
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                    Monthly Ad Spend Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {spendRanges.map((s) => (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => setFormData({ ...formData, adSpend: s.id })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                          formData.adSpend === s.id
                            ? 'bg-gray-900 text-white border-gray-900 shadow-md scale-[1.02]'
                            : 'bg-[#F8FAFC] text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Goal Pills */}
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider mb-2">
                    Primary Goal
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {goals.map((g) => (
                      <button
                        type="button"
                        key={g}
                        onClick={() => setFormData({ ...formData, goal: g })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between ${
                          formData.goal === g
                            ? 'bg-orange-50 text-[#FD5800] border-[#FD5800] font-bold'
                            : 'bg-[#F8FAFC] text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        <span>{g}</span>
                        {formData.goal === g && <span className="text-[#FD5800] font-bold">✓</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#FD5800] hover:bg-orange-600 text-white font-extrabold text-sm shadow-xl shadow-[#FD5800]/25 transition-all flex items-center justify-center gap-2 mt-4 uppercase tracking-wider"
                >
                  <span>Confirm & Schedule Strategy Session</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h4 className="text-3xl font-black text-gray-900">Strategy Request Received!</h4>
              <p className="text-gray-600 max-w-md mx-auto text-sm">
                Thank you, <span className="font-semibold text-[#FD5800]">{formData.name}</span>. Our senior PPC team will review your store details and send meeting invite details to <span className="text-[#FD5800]">{formData.email}</span> shortly.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

