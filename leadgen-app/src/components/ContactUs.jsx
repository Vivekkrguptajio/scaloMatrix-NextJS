"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';



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
    <section className="relative w-full py-8 md:py-12 lg:py-14 bg-white font-sans overflow-hidden">
      
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

      </div>
    </section>
  );
}

