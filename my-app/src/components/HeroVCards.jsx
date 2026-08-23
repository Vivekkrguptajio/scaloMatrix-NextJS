"use client";
import { motion } from 'framer-motion';

export default function HeroVCards() {
  const row1Cards = [
    { 
      id: 1, 
      img: '/vcard/vcard1.png', 
      title: 'Vamshi Farms', 
      url: 'vamshifarms.com',
      stat: '+44% CVR',
      category: 'Health & Organic' 
    },
    { 
      id: 2, 
      img: '/vcard/vcard2.png', 
      title: 'Pizzeria Authentic', 
      url: 'pizzeria.store',
      stat: '+35% Orders',
      category: 'Food & Beverage' 
    },
    { 
      id: 3, 
      img: '/vcard/vcard3.png', 
      title: 'Super Kaju', 
      url: 'superkaju.in',
      stat: '+50% Sales',
      category: 'D2C Gourmet' 
    },
    { 
      id: 4, 
      img: '/vcard/vcard4.png', 
      title: 'Desi Classics', 
      url: 'desiclassics.shop',
      stat: '+28% AOV',
      category: 'Apparel & Fashion' 
    },
  ];

  const row2Cards = [
    { 
      id: 5, 
      img: '/vcard/vcard3.png', 
      title: 'Super Kaju', 
      url: 'superkaju.in',
      stat: '+50% Sales',
      category: 'D2C Gourmet' 
    },
    { 
      id: 6, 
      img: '/vcard/vcard4.png', 
      title: 'Desi Classics', 
      url: 'desiclassics.shop',
      stat: '+28% AOV',
      category: 'Ethnic Wear' 
    },
    { 
      id: 7, 
      img: '/vcard/vcard1.png', 
      title: 'Vamshi Farms', 
      url: 'vamshifarms.com',
      stat: '+44% CVR',
      category: 'Organic Foods' 
    },
    { 
      id: 8, 
      img: '/vcard/vcard2.png', 
      title: 'Pizzeria Authentic', 
      url: 'pizzeria.store',
      stat: '+35% Orders',
      category: 'Gourmet Kitchen' 
    },
  ];

  return (
    <section className="w-full pt-16 md:pt-24 pb-10 md:pb-16 bg-white text-black font-sans overflow-hidden relative z-10">
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 55s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee-right {
          animation: marqueeRight 55s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>

      {/* Header Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full mb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b border-gray-100">
          
          {/* Left Controls */}
          <div className="flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#FD5800] text-xs font-mono font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#FD5800] animate-pulse"></span>
              PORTFOLIO SHOWCASE
            </div>

            <a 
              href="#services" 
              className="group bg-black text-white font-bold py-3 px-7 rounded-full inline-flex items-center gap-3.5 hover:bg-[#FD5800] transition-all duration-300 shadow-lg hover:shadow-orange-500/25 text-sm md:text-base"
            >
              <span>View Services & Case Studies</span>
              <span className="w-7 h-7 rounded-full bg-[#FD5800] group-hover:bg-white text-black flex items-center justify-center font-black transition-colors">
                ↗
              </span>
            </a>
          </div>

          {/* Right Social Proof Stack */}
          <div className="flex items-center gap-4 bg-gray-50/80 p-3.5 px-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex -space-x-3">
              {['/team/adi.png', '/team/shreyas.png', '/team/nayan.png', '/team/yadu.png', '/image.png'].map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                  <img src={src} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(star => (
                  <span key={star} className="text-amber-400 text-sm">★</span>
                ))}
                <span className="text-xs font-bold text-black ml-1">4.9/5</span>
              </div>
              <span className="font-bold text-gray-900 text-sm tracking-tight">
                500+ Happy Clients
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee Wrapper with Side Fade Gradients */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-2">
        
        {/* Left & Right Fade Mask Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-20"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-20"></div>

        {/* Row 1: Left Moving Marquee */}
        <div className="w-full overflow-hidden group">
          <div className="flex animate-marquee-left gap-6 md:gap-8 group-hover:[animation-play-state:paused]">
            {[...row1Cards, ...row1Cards, ...row1Cards, ...row1Cards].map((card, idx) => (
              <div 
                key={idx} 
                className="min-w-[330px] sm:min-w-[380px] md:min-w-[420px] h-[480px] md:h-[530px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-200 bg-white shrink-0 group/card hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col"
              >
                {/* Safari Browser Header */}
                <div className="h-10 bg-gray-100/90 px-4 flex items-center justify-between border-b border-gray-200 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>

                  <div className="bg-white/80 border border-gray-200 px-3 py-0.5 rounded-md text-[11px] font-mono text-gray-500 flex items-center gap-1">
                    <span className="text-gray-400">🔒</span>
                    <span>{card.url}</span>
                  </div>

                  <span className="bg-[#FD5800] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {card.stat}
                  </span>
                </div>

                {/* Screenshot Image Container */}
                <div className="relative flex-1 w-full overflow-hidden bg-gray-50">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white flex items-center justify-between w-full">
                      <div>
                        <h4 className="font-bold text-lg text-white">{card.title}</h4>
                        <p className="text-xs text-white/80">{card.category}</p>
                      </div>
                      <span className="bg-white text-black font-bold text-xs px-3 py-1.5 rounded-full shadow-md">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right Moving Marquee */}
        <div className="w-full overflow-hidden group">
          <div className="flex animate-marquee-right gap-6 md:gap-8 group-hover:[animation-play-state:paused]">
            {[...row2Cards, ...row2Cards, ...row2Cards, ...row2Cards].map((card, idx) => (
              <div 
                key={idx} 
                className="min-w-[330px] sm:min-w-[380px] md:min-w-[420px] h-[480px] md:h-[530px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-200 bg-white shrink-0 group/card hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col"
              >
                {/* Safari Browser Header */}
                <div className="h-10 bg-gray-100/90 px-4 flex items-center justify-between border-b border-gray-200 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>

                  <div className="bg-white/80 border border-gray-200 px-3 py-0.5 rounded-md text-[11px] font-mono text-gray-500 flex items-center gap-1">
                    <span className="text-gray-400">🔒</span>
                    <span>{card.url}</span>
                  </div>

                  <span className="bg-[#FD5800] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {card.stat}
                  </span>
                </div>

                {/* Screenshot Image Container */}
                <div className="relative flex-1 w-full overflow-hidden bg-gray-50">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white flex items-center justify-between w-full">
                      <div>
                        <h4 className="font-bold text-lg text-white">{card.title}</h4>
                        <p className="text-xs text-white/80">{card.category}</p>
                      </div>
                      <span className="bg-white text-black font-bold text-xs px-3 py-1.5 rounded-full shadow-md">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
