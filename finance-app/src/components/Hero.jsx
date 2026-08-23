"use client";
import { motion } from 'framer-motion'

export default function Hero() {
  const text = "scaloMATRIX"
  const letters = text.split("")
  const middle = Math.floor(letters.length / 2) // index 5 = 'M'

  // Middle-out delay: text reveal takes 3 seconds total
  const getMiddleOutDelay = (index) => {
    const dist = Math.abs(index - middle)
    return dist * 0.45 // 5 steps × 0.45 = 2.25s + 0.75s duration = 3.0s total
  }

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between overflow-hidden select-none bg-black">
      
      {/* ═══════ CLOCKWISE ROTATING CONIC GRADIENT BACKGROUND ═══════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-[220vw] h-[220vw] min-w-[2200px] min-h-[2200px] rounded-full shrink-0"
          style={{
            background: 'conic-gradient(from -90deg, #000000 0deg, #000000 90deg, #FD5800 180deg, #FD5800 360deg)'
          }}
        />
        {/* Soft vignette overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/60 pointer-events-none" />
      </div>

      {/* ═══════ TEXT CONTENT (top-left) ═══════ */}
      <div className="relative z-30 pt-[16vh] sm:pt-[18vh] md:pt-[20vh] px-6 sm:px-10 lg:px-14 max-w-xl">
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white text-[15px] sm:text-base md:text-lg font-medium leading-[1.5] tracking-[-0.01em] mb-1.5">
            A creative agency transforming business through
          </p>
          <p className="text-white/60 text-[15px] sm:text-base md:text-lg font-normal leading-[1.5] tracking-[-0.01em] mb-8">
            strategy, design, experience, and technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-black pl-4 pr-3.5 py-[7px] rounded-[6px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)]"
          >
            <span className="font-bold text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "'Courier New', monospace" }}>
              LET'S TALK
            </span>
            <span className="text-[#FD5800] text-sm font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
              »
            </span>
          </a>
        </motion.div>
      </div>

      {/* ═══════ BOTTOM: ScaloMATRIX - MIDDLE-OUT LETTER REVEAL ═══════ */}
      <div className="relative w-full z-10 mt-auto pb-12 sm:pb-20 px-2 sm:px-6">
        <div 
          className="w-full flex items-end justify-center select-none"
          style={{ overflow: 'hidden' }}
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: getMiddleOutDelay(i),
                ease: [0.16, 1, 0.3, 1]
              }}
              className="inline-block text-white leading-[0.85]"
              style={{
                fontFamily: "'Urbanist', 'Arial Black', 'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(40px, 13vw, 200px)',
                letterSpacing: '-0.04em',
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>

    </section>
  )
}
