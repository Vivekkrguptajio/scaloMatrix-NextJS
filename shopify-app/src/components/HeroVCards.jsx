"use client";
import Image from 'next/image';
import { AnimatedCounter } from './Hero'

export default function HeroVCards() {
  const row1Cards = [
    { 
      id: 1, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509488/shopify-app/photsWork/Nada.webp', 
      title: 'Nada', 
      url: 'https://www.houseofnada.com',
      stat: '+44% CVR',
      category: 'Apparel & Fashion' 
    },
    { 
      id: 2, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509489/shopify-app/photsWork/Nutraphyll.webp', 
      title: 'Nutraphyll', 
      url: 'https://www.nutraphyll.com',
      stat: '+35% Orders',
      category: 'Health & Wellness' 
    },
    { 
      id: 3, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509490/shopify-app/photsWork/Velmukha.webp', 
      title: 'Velmukha', 
      url: 'https://www.velmukha.com/',
      stat: '+50% Sales',
      category: 'CRO' 
    },
    { 
      id: 4, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509491/shopify-app/photsWork/wayoranatural.webp', 
      title: 'Wayora Natural', 
      url: 'https://www.wayoranatural.com',
      stat: '+28% AOV',
      category: 'Beauty & Skincare' 
    },
    { 
      id: 5, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509485/shopify-app/photsWork/Drapes.webp', 
      title: 'Drapes Corner', 
      url: 'https://www.drapescorner.com',
      stat: '+60% CVR',
      category: 'Home & Decor' 
    },
    { 
      id: 6, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509486/shopify-app/photsWork/Judex.webp', 
      title: 'Judex Fragrance', 
      url: 'https://www.judex.in',
      stat: '+45% Sales',
      category: 'Beauty & Fragrance' 
    },
    { 
      id: 7, 
      img: 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509487/shopify-app/photsWork/Luxury.webp', 
      title: 'Wayora Luxury', 
      url: 'https://www.wayorastyleverse.com',
      stat: '+80% Orders',
      category: 'Apparel & Fashion' 
    }
  ];

  return (
    <section className="w-full pt-4 md:pt-8 pb-8 md:pb-16 bg-white text-black font-sans overflow-hidden relative z-10">

      {/* Header Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full mb-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b border-gray-100">
          
          {/* Left Controls */}
          <div className="flex flex-col items-start gap-4">


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
          <div className="flex items-center gap-4 bg-gray-50/80 p-3.5 px-5 rounded-2xl border border-[#FD5800] shadow-sm">
            <div className="flex -space-x-3">
              {['https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509470/shopify-app/logo/Judex.png', 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509471/shopify-app/logo/Nada.png', 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509472/shopify-app/logo/Nutraphyll.png', 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509474/shopify-app/logo/Wayora.png', 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509469/shopify-app/logo/drapes.png'].map((src, i) => (
                <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                  <Image src={src} alt="Client" fill className="object-cover" sizes="40px" />
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
                <AnimatedCounter target={100} suffix="+ Happy Clients" />
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-2 px-6 md:px-12">

        {/* Row 1: Left Moving Marquee */}
        <div className="w-full overflow-hidden group py-4">
          <div className="animate-marquee-left flex gap-4 md:gap-6 hover:[animation-play-state:paused]">
            {[...row1Cards, ...row1Cards].map((card, idx) => (
              <div 
                key={idx} 
                className={`w-[260px] sm:w-[325px] md:w-[390px] min-w-[260px] sm:min-w-[325px] md:min-w-[390px] max-w-[260px] sm:max-w-[325px] md:max-w-[390px] h-[368px] sm:h-[486px] md:h-[550px] rounded-xl md:rounded-2xl overflow-hidden shadow-md bg-white shrink-0 group/card cursor-pointer flex-col flex`}
              >

                {/* Screenshot Image Container */}
                <a 
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex-1 w-full overflow-hidden bg-gray-50 group/link block"
                >
                  <Image src={card.img} alt={card.title} fill className="object-cover object-top" sizes="(max-width: 768px) 325px, 390px" priority={idx < 2} />

                  {/* View Project Button on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end justify-end p-5 bg-black/5">
                    <span className="bg-black text-white font-bold text-xs px-4 py-2 rounded-full shadow-lg transform scale-95 group-hover/link:scale-100 transition-all">
                      Visit Website ↗
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
