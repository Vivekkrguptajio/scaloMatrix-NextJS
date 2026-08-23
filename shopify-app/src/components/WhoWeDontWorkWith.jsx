"use client";

const WhoWeDontWorkWith = () => {
  return (
    <section className="w-full py-8 md:py-12 lg:py-14 font-sans bg-white">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 xl:px-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-end mb-6 gap-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.1] text-black lg:w-[60%]">
            Who we don't<br /><span className="text-[#FD5800]">work with.</span>
          </h2>
          <div className="w-full lg:w-[40%] flex lg:justify-end">
            <p className="text-gray-600 text-sm md:text-base leading-snug lg:text-right">
              Saying no is a competitive advantage. Here's ours, in writing, so we can both save everyone a discovery call.
            </p>
          </div>
        </div>

        {/* The Card */}
        <div className="bg-[#FD5800]/90 text-white w-full flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          
          {/* Left Column (Not for you if) */}
          <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 bg-[#111111] border-b md:border-b-0 md:border-r border-white/20">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500 text-white text-sm flex items-center justify-center font-bold">✕</span> Not for you if
            </h3>

            <ul className="flex flex-col gap-3 sm:gap-4 font-mono text-xs sm:text-sm md:text-[15px] leading-relaxed text-white/90 font-medium">
              <li className="pb-3.5 border-b border-dashed border-white/20">
                → Your CEO has a doc of 47 things the page must say. <span className="text-white/60">(It should say one.)</span>
              </li>
              <li className="pb-3.5 border-b border-dashed border-white/20">
                → You haven't talked to a customer in 90 days. <span className="text-white/60">(We won't guess for you.)</span>
              </li>
              <li className="pb-3.5 border-b border-dashed border-white/20">
                → You need deliverables measured in pages, not revenue. <span className="text-white/60">(Hire a freelancer.)</span>
              </li>
              <li className="pb-3.5 border-b border-dashed border-white/20">
                → You treat agencies like vendors, not partners. <span className="text-white/60">(Life's too short.)</span>
              </li>
              <li className="pb-3.5 border-b border-dashed border-white/20">
                → You sell vapes, predatory lending, or MLMs. <span className="text-white/60">(Hard no.)</span>
              </li>
            </ul>
          </div>

          {/* Right Column (For you if) */}
          <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-500 text-white text-sm flex items-center justify-center font-bold">✓</span> For you if
            </h3>

            <ul className="flex flex-col gap-3 sm:gap-4 font-mono text-xs sm:text-sm md:text-[15px] leading-relaxed text-white font-medium">
              <li className="pb-3.5 border-b border-dashed border-white/20">
                → You've hit a ceiling on CVR and don't know why.
              </li>
              <li className="pb-3.5 border-b border-dashed border-white/20">
                → You have a product that actually works. <span className="text-white">(We can't fix a bad one.)</span>
              </li>
              <li className="pb-3.5 border-b border-dashed border-white/20">
                → You have at least ₹2L/mo in ad spend. <span className="text-white">(Need traffic to test.)</span>
              </li>
              <li className="pb-3.5 border-b border-dashed border-white/20">
                → You want a team that pushes back when you're wrong.
              </li>
              <li className="pb-3.5 border-b border-dashed border-white/20">
                → You want to build a brand, not just a dropshipping store.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeDontWorkWith;

