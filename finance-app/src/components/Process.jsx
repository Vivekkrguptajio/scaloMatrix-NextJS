"use client";
export default function Process() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-black mb-16 border-b border-black pb-8">
          The Process
        </h2>
        
        <div className="flex flex-col">
          
          <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 py-10 border-b border-gray-200 group hover:border-black transition-colors duration-300">
            <div className="text-sm font-bold text-gray-400 group-hover:text-[#FD5800] transition-colors md:w-24 shrink-0">
              STEP 01
            </div>
            <div className="flex-grow">
              <h3 className="font-black text-2xl md:text-3xl text-black mb-4 tracking-tight">Data Consolidation</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                We aggregate all your financial data streams into a single source of truth, eliminating silos and preparing for deep analysis.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 py-10 border-b border-gray-200 group hover:border-black transition-colors duration-300">
            <div className="text-sm font-bold text-gray-400 group-hover:text-[#FD5800] transition-colors md:w-24 shrink-0">
              STEP 02
            </div>
            <div className="flex-grow">
              <h3 className="font-black text-2xl md:text-3xl text-black mb-4 tracking-tight">Spend Analysis</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                We dissect historical and current spend to identify inefficiencies, modeling scenarios for optimal capital deployment.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 py-10 border-b border-gray-200 group hover:border-black transition-colors duration-300">
            <div className="text-sm font-bold text-gray-400 group-hover:text-[#FD5800] transition-colors md:w-24 shrink-0">
              STEP 03
            </div>
            <div className="flex-grow">
              <h3 className="font-black text-2xl md:text-3xl text-black mb-4 tracking-tight">Forecasting</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Developing robust predictive models to anticipate cash flow needs, revenue trajectories, and potential market risks.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-baseline gap-6 md:gap-12 py-10 border-b border-gray-200 group hover:border-black transition-colors duration-300">
            <div className="text-sm font-bold text-gray-400 group-hover:text-[#FD5800] transition-colors md:w-24 shrink-0">
              STEP 04
            </div>
            <div className="flex-grow">
              <h3 className="font-black text-2xl md:text-3xl text-black mb-4 tracking-tight">Continuous Optimization</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                Real-time adjustments based on performance data. We treat strategy as a living, evolving process, not a static document.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
