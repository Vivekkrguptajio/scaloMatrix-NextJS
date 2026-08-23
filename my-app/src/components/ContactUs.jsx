"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimeDisplay = ({ city, timeZone }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
        setTime(formatter.format(new Date()));
      } catch {
        setTime('');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, [timeZone]);

  if (!time) return null;

  return (
    <div className="border border-black/30 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 flex items-center justify-center text-xs sm:text-sm md:text-base hover:border-black/50 transition-colors bg-transparent">
      <span className="font-bold text-black mr-1 sm:mr-1.5">{city}:</span>
      <span className="text-gray-700 font-medium">{time}</span>
    </div>
  );
};

const partners = [
  {
    logo: "ONDC",
    title: "ONDC Partner",
    desc: "Complete e-commerce solutions to meet your business goals."
  },
  {
    logo: "Google",
    title: "Google Premier Partner",
    desc: "Leverage the power of Google Ads to scale your business."
  },
  {
    logo: "Zoho",
    title: "Zoho Premium Partner",
    desc: "Design and implement integrated business architectures "
  },
  {
    logo: "MoEngage",
    title: "MoEngage Partner",
    desc: "Leverage automatic customer engagement to drive retention "
  }
];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add real submission logic here
  };

  const inputClasses = "w-full bg-black/5 border-b-2 border-transparent px-5 py-4 md:py-5 text-black placeholder:text-gray-500 focus:outline-none focus:border-[#FD5800] focus:bg-black/[0.02] transition-colors font-medium rounded-t-xl";

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center pt-16 pb-36 md:pt-24 md:pb-44 bg-white font-sans overflow-hidden rounded-b-[80px] md:rounded-b-[100px]">
      
      {/* ─── Background Ambient Waves ─── */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(253,88,0,0.1)_0%,transparent_70%)] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(253,88,0,0.05)_0%,transparent_70%)] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Side: Header & Info */}
          <div className="lg:sticky lg:top-40 h-fit flex flex-col gap-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-black"
              >
                Let's build <br />
                <span className="text-[#FD5800]">something amazing.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-500 font-medium text-lg max-w-md leading-relaxed"
              >
                Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
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
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-gray-900 group-hover:bg-[#FD5800] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:hello@scalo.com" className="text-lg font-bold text-black hover:text-[#FD5800] transition-colors">hello@scalo.com</a>
                </div>
              </div>

              {/* Contact Item */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-gray-900 group-hover:bg-[#FD5800] group-hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:+919876543210" className="text-lg font-bold text-black hover:text-[#FD5800] transition-colors">+91 987 654 3210</a>
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
                  className={`${inputClasses} appearance-none cursor-pointer ${!formData.service ? 'text-gray-500' : 'text-black'}`}
                  required
                >
                  <option value="" disabled>What are you looking for?</option>
                  <option value="Website Design">Website Design & Development</option>
                  <option value="E-Commerce">E-Commerce Storefront</option>
                  <option value="Branding">Brand Identity & Strategy</option>
                  <option value="Marketing">Digital Marketing & SEO</option>
                  <option value="Other">Other / General Inquiry</option>
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
                  className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors tracking-wide"
                >
                  <span>Send Message</span>
                  
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </motion.div>
              
            </form>
          </div>

        </div>

        {/* Partners Section */}
        <div className="mt-16 md:mt-24 pt-10 md:pt-16 border-t border-gray-100 relative overflow-hidden group">
          
          <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none mt-16 md:mt-24" />
          <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none mt-16 md:mt-24" />

          <div className="animate-marquee flex gap-8 sm:gap-12 items-start hover:[animation-play-state:paused]" style={{ animationDuration: '30s' }}>
            {[...partners, ...partners, ...partners, ...partners, ...partners].map((partner, idx) => (
              <div 
                key={`${partner.logo}-${idx}`}
                className="shrink-0 w-[200px] sm:w-[240px] md:w-[260px] flex flex-col items-center text-center group/partner cursor-default"
              >
                {/* Logo Placeholder */}
                <div className="h-16 flex items-center justify-center mb-4 opacity-40 group-hover/partner:opacity-100 transition-all duration-300">
                  <span className="font-black text-2xl tracking-tighter text-gray-800">{partner.logo}</span>
                </div>
                <h4 className="font-bold text-gray-400 group-hover/partner:text-black transition-colors duration-300 mb-3">{partner.title}</h4>
                <p className="text-xs sm:text-sm text-gray-400 group-hover/partner:text-gray-600 transition-colors duration-300 leading-relaxed px-2 sm:px-4">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Timezones */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-6 sm:bottom-10 md:bottom-12 left-0 right-0 z-20 flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 w-full px-4 sm:px-6"
      >
        <TimeDisplay city="India" timeZone="Asia/Kolkata" />
        <TimeDisplay city="London" timeZone="Europe/London" />
        <TimeDisplay city="Amsterdam" timeZone="Europe/Amsterdam" />
      </motion.div>
    </section>
  );
}
