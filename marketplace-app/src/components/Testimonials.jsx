"use client";
import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "David M.",
      brand: "Fitness Gear Co.",
      review: "scaloMatrix completely turned our account around. We were bleeding money at 60% ACoS. Within 2 months, they dropped it to 22% while increasing our overall sales by 40%.",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sarah L.",
      brand: "Organic Skincare",
      review: "The level of detail in her audits is insane. She found structural issues our previous agency missed for a year. Highly recommend if you want serious growth.",
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Michael T.",
      brand: "Home Essentials",
      review: "Best investment we've made. We scaled from $50k/mo to $150k/mo in just under 4 months under her management. The communication is also top-tier.",
      image: "https://i.pravatar.cc/150?img=12"
    }
  ];

  return (
    <section id="testimonials" className="py-12 md:py-8 md:py-10 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-brand-white mb-6">
            Client <span className="text-brand-accent">Success Stories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-brand-surface p-8 rounded-xl border border-brand-surface-hover relative">
              <div className="text-brand-accent text-5xl font-serif absolute top-4 right-6 opacity-20">"</div>
              
              <div className="flex text-brand-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-brand-text mb-8 italic">"{review.review}"</p>
              
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="text-brand-white font-bold">{review.name}</h4>
                  <p className="text-brand-accent text-sm">{review.brand}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

