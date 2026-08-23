"use client";

const AiManifesto = () => {
  // Hidden as per user request (not removed)
  return null;

  return (
    <section className="w-full py-8 md:py-12 lg:py-14 bg-[#111111] text-white font-sans">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
          


          {/* Header Section */}
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans tracking-tight leading-[1.05]">
              <span className="text-[#FD5800] block">AI is coming</span>
              <span className="text-[#FD5800]">for your </span>
              <span className="text-white">profits.</span>
            </h2>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-[#2a2a2a] mb-12"></div>

          {/* Two-Column Text Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-12">
            
            {/* Left Column */}
            <div className="flex flex-col gap-6 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Every brand now has access to the same tools, the same stock copy, the same landing page template with a gradient and a dog. Good enough is free. Good enough also doesn't convert.
              </p>
              <p>
                The moat moved. It's not in "having a website." It's in having a page so specific to your customer, so precise on the one thing they need to hear, that a model couldn't generate it without you in the room.
              </p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                We don't sell you an AI workflow. We sell you a point of view, translated into pixels, measured in rupees, shipped in three weeks. The part no model can do for you is decide what you actually believe.
              </p>
              <p>
                Pages that convert are pages with <span className="text-[#FD5800] font-semibold">opinions</span>. Opinions that cost money to form. Which is why everyone else won't.
              </p>
              <div className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mt-2">
                — TLPC · APR 2026
              </div>
            </div>

          </div>

          {/* Bottom CTA Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12">
            <a href="#" className="bg-[#FD5800] text-white font-bold py-3.5 px-6 rounded-full hover:bg-white hover:text-black transition-colors text-sm tracking-tight flex items-center gap-2">
              Let's form opinions together →
            </a>
            <span className="text-[11px] font-mono text-gray-500 tracking-widest uppercase">
              OR READ IT AGAIN. WE'LL WAIT.
            </span>
          </div>

      </div>
    </section>
  );
};

export default AiManifesto;
