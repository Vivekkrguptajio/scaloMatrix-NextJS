"use client";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const HowItWorks = () => {
  return (
    <section id="process" className="w-full py-8 md:py-12 lg:py-14 font-sans bg-white">
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-12 xl:px-16">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-10"
        >
          <h4 className="text-[#FD5800] text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3">
            How The Work Happens
          </h4>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.15] tracking-tight text-black max-w-3xl">
            Signal in. Design out. <span className="text-[#FD5800]">Shipped live.</span>
          </h2>
        </motion.div>

        {/* 3-Column Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          
          {/* Step 1 */}
          <motion.div variants={itemVariants} className="bg-white p-7 md:p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#FD5800] text-white text-xs font-bold flex items-center justify-center">01</div>
                <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">SIGNAL IN</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-4 leading-snug">
                We read the data first.
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                Analytics, heatmaps, session recordings, your ad account — the full picture of where visitors leak before we touch a pixel.
              </p>
            </div>
          </motion.div>

          {/* Step 2 (Filled Black Card) */}
          <motion.div variants={itemVariants} className="bg-[#111111] text-white p-7 md:p-8 rounded-3xl border border-[#222] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#FD5800] text-white text-xs font-bold flex items-center justify-center">02</div>
                <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">DESIGN OUT</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-snug">
                Real copy, real strategy.
              </h3>
              <p className="text-gray-300 font-medium leading-relaxed text-sm md:text-base">
                Mobile-first design with the actual copy and offer that will go live — not lorem ipsum theatre. Iterated until it's right.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={itemVariants} className="bg-white p-7 md:p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#FD5800] text-white text-xs font-bold flex items-center justify-center">03</div>
                <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">SHIPPED LIVE</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-4 leading-snug">
                Built, tested, measured.
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base">
                Hand-built, speed-tuned, QA'd on real devices. Then we watch the numbers — because shipped isn't done, performing is.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;


