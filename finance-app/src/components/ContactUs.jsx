"use client";
import { useState } from 'react';

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

  const inputClasses = "w-full bg-transparent border-b border-gray-300 py-4 text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors font-medium rounded-none";

  return (
    <section className="relative w-full py-16 md:py-24 bg-white font-sans">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Side: Header & Info */}
          <div className="flex flex-col gap-12">
            <div className="border-b border-black pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-black">
                Let's build <br />
                something amazing.
              </h2>
              <p className="text-gray-600 font-medium text-lg max-w-md leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:hello@scalo.com" className="text-xl font-bold text-black hover:text-[#FD5800] transition-colors">hello@scalo.com</a>
              </div>

              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Phone</p>
                <a href="tel:+919876543210" className="text-xl font-bold text-black hover:text-[#FD5800] transition-colors">+91 987 654 3210</a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:pt-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-xl">
              
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name" 
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  className={inputClasses}
                  required
                />
              </div>

              <div className="relative">
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer ${!formData.service ? 'text-gray-400' : 'text-black'}`}
                  required
                >
                  <option value="" disabled>What are you looking for?</option>
                  <option value="Website Design">Website Design & Development</option>
                  <option value="E-Commerce">E-Commerce Storefront</option>
                  <option value="Branding">Brand Identity & Strategy</option>
                  <option value="Marketing">Digital Marketing & SEO</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-black">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your project..." 
                  rows="4"
                  className={`${inputClasses} resize-none`}
                  required
                ></textarea>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 font-bold text-sm uppercase tracking-widest bg-black text-white hover:bg-[#FD5800] transition-colors"
                >
                  Submit Request
                </button>
              </div>
              
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

