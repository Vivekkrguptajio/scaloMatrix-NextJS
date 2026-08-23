"use client";
export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 bg-gray-50 rounded-[40px] md:rounded-[60px] mx-4 md:mx-8 mb-20 shadow-sm border border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to scale, engineered for maximum performance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="text-4xl font-black text-[#FD5800]/20 mb-6 group-hover:text-[#FD5800] transition-colors">01</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Leads</h3>
            <p className="text-gray-600 leading-relaxed">Targeted outreach and account-based marketing.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="text-4xl font-black text-[#FD5800]/20 mb-6 group-hover:text-[#FD5800] transition-colors">02</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Funnel Optimization</h3>
            <p className="text-gray-600 leading-relaxed">Reducing drop-offs at every stage of the pipeline.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div className="text-4xl font-black text-[#FD5800]/20 mb-6 group-hover:text-[#FD5800] transition-colors">03</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Inbound Marketing</h3>
            <p className="text-gray-600 leading-relaxed">Creating magnets that draw your ideal ICP.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
