"use client";

const FeaturedCaseStudy = () => {
  // Hidden as per user request (not removed)
  return null;

  return (
    <section className="w-full py-8 md:py-12 lg:py-14 bg-white">
      <div className="max-w-[1180px] mx-auto w-full px-6 md:px-12 xl:px-16">
        <div className="relative w-full bg-[#fce9d3] rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-5 md:p-10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300">
          
          {/* Blue Ribbon / Tag */}
          <div className="absolute top-0 left-8 md:left-12 -translate-y-full bg-[#FD5800] text-white text-xs md:text-sm font-bold tracking-[0.2em] py-2.5 px-6 uppercase rounded-t-2xl z-10">
            Featured Case Study
          </div>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 items-stretch mt-4 md:mt-0">
            
            {/* Left Sidebar (Narrower Width) */}
            <div className="w-full lg:w-[140px] xl:w-[155px] flex flex-col justify-between shrink-0 gap-4">
              
              {/* Unified Logo & Stats Card */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
                {/* Logo Section */}
                <div className="p-4 border-b border-gray-100 flex items-center justify-center">
                  <div className="bg-[#ff2020] text-white font-black italic text-lg leading-none px-3 py-2 rounded-xl tracking-tighter w-full text-center">
                    SUPER<span className="text-white/90">YOU</span>
                  </div>
                </div>

                {/* Stat 1: CR */}
                <div className="p-4 border-b border-gray-100">
                  <div className="text-2xl lg:text-3xl font-bold text-[#FD5800]">+33%</div>
                  <div className="text-gray-500 font-mono font-bold text-[9px] mt-1 tracking-widest uppercase">CR</div>
                </div>

                {/* Stat 2: AOV */}
                <div className="p-4">
                  <div className="text-2xl lg:text-3xl font-bold text-[#FD5800]">+14%</div>
                  <div className="text-gray-500 font-mono font-bold text-[9px] mt-1 tracking-widest uppercase">AOV</div>
                </div>
              </div>

              {/* Visit Website Button */}
              <div className="mt-2">
                <a 
                  href="#" 
                  className="group bg-black text-white font-bold py-4 px-5 rounded-full w-full flex justify-between items-center hover:bg-[#FD5800] transition-colors text-xs tracking-wide shadow-md hover:shadow-lg"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
            </div>

            {/* Right Mockup Images Container (+20% Further Increased Height to 600px) */}
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 h-[540px] md:h-[600px]">
              <div className="rounded-3xl border border-gray-200 shadow-sm bg-white overflow-hidden h-full">
                <img 
                  src="/image.png" 
                  alt="Super You Case Study 1" 
                  className="w-full h-full object-cover object-top block" 
                />
              </div>
              <div className="rounded-3xl border border-gray-200 shadow-sm bg-white overflow-hidden h-full">
                <img 
                  src="/image copy.png" 
                  alt="Super You Case Study 2" 
                  className="w-full h-full object-cover object-top block" 
                />
              </div>
              <div className="rounded-3xl border border-gray-200 shadow-sm bg-white overflow-hidden h-full">
                <img 
                  src="/image copy 2.png" 
                  alt="Super You Case Study 3" 
                  className="w-full h-full object-cover object-top block" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;

