"use client";
import React, { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    marketplace: 'US',
    adSpend: '$5,000 - $15,000 / mo',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 md:py-8 md:py-10 bg-white text-gray-900 relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info & Head Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FD5800]/30 bg-orange-500/10 text-[#FD5800] font-bold text-xs uppercase tracking-wider mb-4">
                Get In Touch Direct
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight leading-tight">
                Let's Build Your Amazon Growth Engine
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                Have a question or want a custom proposal for your store? Reach out directly to our senior strategist team.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              
              <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-[#FD5800] border border-orange-500/20 flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  ✉
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block">Email Direct</span>
                  <a href="mailto:hello@scalomatrix.com" className="text-base font-bold text-gray-900 hover:text-[#FD5800] transition-colors">
                    hello@scalomatrix.com
                  </a>
                </div>
              </div>

              <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-[#FD5800] border border-orange-500/20 flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  📞
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block">Call / WhatsApp</span>
                  <a href="tel:+919699917214" className="text-base font-bold text-gray-900 hover:text-[#FD5800] transition-colors">
                    +91-9699917214
                  </a>
                </div>
              </div>

              <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-[#FD5800] border border-orange-500/20 flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  🏢
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block">Headoffice Address</span>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed mt-1">
                    scaloMATRIX HQ, Tech Tower, Bhayandar West, <br />
                    Mira Bhayandar, Thane, Maharastra, 401101
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-mono text-[#FD5800] font-semibold bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    GST: 27AAACS1234F1Z5
                  </span>
                </div>
              </div>

            </div>

            {/* Social Media Links */}
            <div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-3">
                Follow scaloMATRIX On Socials
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Instagram', url: 'https://instagram.com/scalomatrix', icon: '📸' },
                  { name: 'Youtube', url: 'https://youtube.com/@scalomatrix', icon: '▶' },
                  { name: 'Linkedin', url: 'https://linkedin.com/company/scalomatrix', icon: '💼' },
                  { name: 'TikTok', url: 'https://tiktok.com/@scalomatrix', icon: '🎵' },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#FD5800] hover:text-white border border-gray-200 text-gray-700 font-bold text-xs transition-all flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xl relative text-gray-900">
              
              {!submitted ? (
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Book Your Strategy Audit Session</h3>
                  <p className="text-xs text-gray-500 mb-6">Fill in the details below and we will prepare your customized Amazon PPC roadmap.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Saurabh Pandey"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FD5800] text-sm shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Business Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="saurabh@brand.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FD5800] text-sm shadow-2xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 96999 17214"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FD5800] text-sm shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Target Marketplace</label>
                        <select
                          value={formData.marketplace}
                          onChange={(e) => setFormData({ ...formData, marketplace: e.target.value })}
                          className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#FD5800] text-sm shadow-2xs"
                        >
                          <option value="US">Amazon US (Amazon.com)</option>
                          <option value="UK">Amazon UK / Europe</option>
                          <option value="IN">Amazon India (Amazon.in)</option>
                          <option value="Global">Global / Multiple Stores</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Monthly PPC Budget</label>
                      <select
                        value={formData.adSpend}
                        onChange={(e) => setFormData({ ...formData, adSpend: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#FD5800] text-sm shadow-2xs"
                      >
                        <option value="Under $2k">Under $2,000 / month</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000 / month</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000 / month</option>
                        <option value="$15,000 - $50,000">$15,000 - $50,000 / month</option>
                        <option value="$50,000+">$50,000+ / month</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Store Link or Primary ASINs</label>
                      <textarea
                        rows={3}
                        placeholder="Share your store link or main target keywords/ASINs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FD5800] text-sm resize-none shadow-2xs"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#FD5800] hover:bg-orange-600 text-white font-bold text-base shadow-lg shadow-[#FD5800]/25 transition-all text-center"
                    >
                      Submit Strategy Request →
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto text-3xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-3xl font-black text-gray-900">Thank You!</h4>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto">
                    We received your submission. The scaloMATRIX team will get back to you via email within 24 hours.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

