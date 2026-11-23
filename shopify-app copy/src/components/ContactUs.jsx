"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { whatsappUrl } from './WhatsAppButton';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Contact Block Form',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClasses = "w-full bg-paper border border-line px-4 py-3.5 text-[14px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-[#FD5800] focus:bg-paper transition-colors";

  return (
    <section id="contact" className="relative w-full py-16 md:py-24 bg-cream font-sans overflow-hidden border-b border-line">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[580px] h-[580px] bg-[radial-gradient(circle,rgba(253,88,0,0.08)_0%,transparent_70%)] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(253,88,0,0.04)_0%,transparent_70%)] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side: Header & Operator Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="eyebrow mb-4">Direct Contact</span>
              <h2 className="h-display h-section mb-6">
                Let&apos;s build your <span className="accent">own brand.</span>
              </h2>
              <p className="lead max-w-md mb-8">
                Tell us about your product or factory. We reply within 24 hours to schedule a 1-on-1 strategy call with our founders.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-paper border border-line flex items-center justify-center text-ink group-hover:bg-[#FD5800] group-hover:text-white transition-colors duration-300">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[10.5px] text-muted uppercase tracking-[0.14em] mb-0.5">Call / WhatsApp</p>
                  <a href="tel:+919217728977" className="text-base sm:text-lg font-semibold text-ink hover:text-[#FD5800] transition-colors">
                    +91 92177 28977
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-paper border border-line flex items-center justify-center text-ink group-hover:bg-[#FD5800] group-hover:text-white transition-colors duration-300">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[10.5px] text-muted uppercase tracking-[0.14em] mb-0.5">Email Support</p>
                  <a href="mailto:info@krafficgroup.com" className="text-base sm:text-lg font-semibold text-ink hover:text-[#FD5800] transition-colors">
                    info@krafficgroup.com
                  </a>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-paper border border-line flex items-center justify-center text-ink group-hover:bg-[#FD5800] group-hover:text-white transition-colors duration-300">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[10.5px] text-muted uppercase tracking-[0.14em] mb-0.5">Headquarters</p>
                  <p className="text-sm font-semibold text-ink">
                    Kraffic Enterprises · Patel Nagar, Delhi 110008, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-line/60">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#25D366] text-white font-semibold text-[14px] shadow-sm hover:brightness-105 transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="bg-paper border border-line p-6 sm:p-8 shadow-sm">
            <h3 className="h-display text-[20px] font-semibold text-ink mb-1">
              Send a Quick Note
            </h3>
            <p className="text-[13px] text-muted mb-6">
              Prefer typing? Drop us a brief note and our team will get in touch.
            </p>

            {status === 'success' ? (
              <div className="p-6 bg-brand-soft border border-brand/30 text-center flex flex-col items-center">
                <FaCheckCircle className="w-8 h-8 text-brand mb-2" />
                <h4 className="text-[16px] font-semibold text-ink mb-1">Message Received!</h4>
                <p className="text-[13px] text-muted">
                  We will call or WhatsApp you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[12.5px] font-medium text-ink mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12.5px] font-medium text-ink mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-[12.5px] font-medium text-ink mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="ramesh@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12.5px] font-medium text-ink mb-1">About Your Products / Brand</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us what you manufacture or sell, current sales volume, and your goals."
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full py-3.5 text-[14px] font-semibold mt-2"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
