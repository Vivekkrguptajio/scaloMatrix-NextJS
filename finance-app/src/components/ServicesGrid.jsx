"use client";
export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black pb-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-2">Capabilities</h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl">Everything you need to scale, engineered for maximum performance and precise attribution.</p>
          </div>
          <div className="hidden md:block text-sm font-bold uppercase tracking-widest text-[#FD5800]">
            Financial Engineering
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          
          <div className="group border-t border-gray-200 pt-6 hover:border-black transition-colors duration-300">
            <div className="text-sm font-bold text-gray-400 mb-8 group-hover:text-[#FD5800] transition-colors">01</div>
            <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">Financial Planning</h3>
            <p className="text-gray-600 leading-relaxed text-base">Strategic allocation of your marketing spend to ensure sustainable growth and managed risk.</p>
          </div>

          <div className="group border-t border-gray-200 pt-6 hover:border-black transition-colors duration-300">
            <div className="text-sm font-bold text-gray-400 mb-8 group-hover:text-[#FD5800] transition-colors">02</div>
            <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">Budget Allocation</h3>
            <p className="text-gray-600 leading-relaxed text-base">Maximizing returns across high-performing channels with data-driven budget distribution.</p>
          </div>

          <div className="group border-t border-gray-200 pt-6 hover:border-black transition-colors duration-300">
            <div className="text-sm font-bold text-gray-400 mb-8 group-hover:text-[#FD5800] transition-colors">03</div>
            <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">ROI Tracking</h3>
            <p className="text-gray-600 leading-relaxed text-base">Real-time dashboards for financial attribution, giving you complete visibility into performance.</p>
          </div>

        </div>
      </div>
    </section>
  )
}
