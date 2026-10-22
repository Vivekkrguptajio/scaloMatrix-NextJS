"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappUrl } from './WhatsAppButton';



export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClasses = "w-full bg-paper border border-line px-5 py-4 text-ink placeholder:text-muted/70 focus:outline-none focus:border-[#FD5800] focus:bg-paper transition-colors rounded-2xl";

  return (
    <section id="contact" className="relative w-full py-16 md:py-24 bg-cream font-sans overflow-hidden">
      
      {/* ─── Background Ambient Waves ─── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(253,88,0,0.1)_0%,transparent_70%)] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(253,88,0,0.05)_0%,transparent_70%)] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="container-x relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side: Header & Info */}
          <div className="lg:sticky lg:top-32 h-fit flex flex-col gap-10">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-display h-section mb-6"
              >
                Let&apos;s build <br />
                something <span className="accent">worth buying.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lead max-w-md"
              >
                Tell us about your store and your ad spend. We reply within 24 hours with a free review if it&apos;s a fit — no pitch on call one.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Contact Item */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-paper border border-line flex items-center justify-center text-ink group-hover:bg-[#FD5800] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[11px] text-muted uppercase tracking-[0.14em] mb-1">Email Us</p>
                  <a href="mailto:info@krafficgroup.com" className="text-lg font-semibold text-ink hover:text-[#FD5800] transition-colors">info@krafficgroup.com</a>
                </div>
              </div>

              {/* Contact Item */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-paper border border-line flex items-center justify-center text-ink group-hover:bg-[#FD5800] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[11px] text-muted uppercase tracking-[0.14em] mb-1">Call Us</p>
                  <a href="tel:+919217728977" className="text-lg font-semibold text-ink hover:text-[#FD5800] transition-colors">+91 92177 28977</a>
                </div>
              </div>

              {/* Contact Item */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-paper border border-line flex items-center justify-center text-ink group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:text-white transition-colors duration-300">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-muted uppercase tracking-[0.14em] mb-1">WhatsApp</p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-ink hover:text-[#25D366] transition-colors">Chat with us</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="pt-4 lg:pt-0">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-xl ml-auto">
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name" 
                  className={inputClasses}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  className={inputClasses}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer ${!formData.service ? 'text-muted/70' : 'text-ink'}`}
                  required
                >
                  <option value="" disabled>What are you looking for?</option>
                  <option value="Custom Build">Custom Build</option>
                  <option value="Website Creation">Website Creation</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Website Audit">Website Audit (Free)</option>
                </select>
                {/* Custom chevron for select */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your project..." 
                  rows="4"
                  className={`${inputClasses} resize-none`}
                  required
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="pt-2"
              >
                <button 
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="btn-primary group w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>
                    {status === 'loading' ? 'Sending...' : 
                     status === 'success' ? 'Message Sent!' : 
                     'Send Message'}
                  </span>
                  
                  {(status === 'idle' || status === 'error') && (
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
                {status === 'error' && (
                  <p className="mt-4 text-red-500 font-medium">
                    Sorry, your message didn&apos;t go through. Please email us at{' '}
                    <a href="mailto:info@krafficgroup.com" className="underline">info@krafficgroup.com</a> or message us on WhatsApp.
                  </p>
                )}
              </motion.div>
              
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
