"use client";
import { FaWordpress, FaShopify } from 'react-icons/fa';

export default function Marquee() {
  const repetitions = 4;
  
  return (
    <section className="w-full bg-white overflow-hidden py-1 md:py-1.5 flex items-center z-20 relative border-t border-b border-gray-200">
      <div className="relative flex whitespace-nowrap w-full">
        <div className="animate-marquee-reverse flex items-center w-max [transform:translateZ(0)] will-change-transform">
          {Array(repetitions).fill(0).map((_, i) => (
            <div key={i} className="inline-flex items-center text-xs md:text-sm font-black font-sans tracking-tight uppercase text-black">
              <span className="px-4 md:px-6 flex items-center gap-1.5 text-[#21759b]">
                <FaWordpress className="w-4 h-4 md:w-5 md:h-5" />
                <span>WordPress</span>
              </span>
              <span className="text-gray-300 text-xs">✦</span>
              <span className="px-4 md:px-6 flex items-center gap-1.5 text-[#95BF47]">
                <FaShopify className="w-4 h-4 md:w-5 md:h-5" />
                <span>Shopify</span>
              </span>
              <span className="text-gray-300 text-xs">✦</span>
              <span className="px-4 md:px-6 flex items-center">
                <span className="inline-flex items-center gap-1 bg-gray-100 text-black border border-gray-300 px-2.5 md:px-3.5 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-bold shadow-sm">
                  <svg className="w-3.5 h-3.5 fill-[#FD5800]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7V6c0-2.206-1.794-4-4-4S8 3.794 8 6v1H3v13c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7h-5zM10 6c0-1.103.897-2 2-2s2 .897 2 2v1h-4V6zm9 14H5V9h3v2h2V9h4v2h2V9h3v11z"/></svg>
                  E commerce
                </span>
              </span>
              <span className="text-gray-300 text-xs">✦</span>
              <span className="px-4 md:px-6 flex items-center">
                <span className="inline-flex items-center gap-1 border border-gray-300 text-black px-2.5 md:px-3.5 py-0.5 md:py-1 rounded-full bg-white text-[10px] md:text-xs font-bold">
                  <svg className="w-3.5 h-3.5 fill-[#FD5800]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5.4l-7.5-4.2c-.3-.2-.7-.2-1 0L4 5.4C3.4 5.7 3 6.3 3 7v10c0 .7.4 1.3 1 1.6l7.5 4.2c.1.1.3.1.5.1s.4 0 .5-.1l7.5-4.2c.6-.3 1-.9 1-1.6V7c0-.7-.4-1.3-1-1.6zM12 3.1l6.2 3.4-6.2 3.5-6.2-3.5L12 3.1zM5 16.5V8.8l6 3.4v7.7l-6-3.4zm14 0l-6 3.4v-7.7l6-3.4v7.7z"/></svg>
                  D2C
                </span>
              </span>
              <span className="text-gray-300 text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
