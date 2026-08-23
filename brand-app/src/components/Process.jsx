"use client";
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const steps = [
  {
    id: '01',
    phase: 'Phase 01',
    title: 'Discovery & Research',
    description: 'We dig deep — audits, interviews, competitor analysis, and audience research. We don\'t assume. We uncover what actually matters.',
    details: [
      'Brand & market audit',
      'Competitor deep-dive',
      'Audience persona mapping',
      'Stakeholder interviews',
    ],
    duration: '1–2 Weeks',
    gradient: 'from-violet-600 to-violet-800',
    accentColor: '#8B5CF6',
  },
  {
    id: '02',
    phase: 'Phase 02',
    title: 'Conceptualization',
    description: 'Strategy meets imagination. We define your positioning, craft your narrative, and build mood boards that set the creative direction.',
    details: [
      'Positioning framework',
      'Narrative architecture',
      'Mood boards & direction',
      'Content strategy outline',
    ],
    duration: '2–3 Weeks',
    gradient: 'from-[#FD5800] to-orange-500',
    accentColor: '#FD5800',
  },
  {
    id: '03',
    phase: 'Phase 03',
    title: 'Design Execution',
    description: 'This is where it gets real — logos, typography, assets, digital products, and campaigns. Pixel-perfect, purpose-driven.',
    details: [
      'Visual identity design',
      'UI/UX prototyping',
      'Campaign creative',
      'Asset production',
    ],
    duration: '3–4 Weeks',
    gradient: 'from-violet-700 to-purple-800',
    accentColor: '#8B5CF6',
  },
  {
    id: '04',
    phase: 'Phase 04',
    title: 'Brand Guidelines & Launch',
    description: 'We hand you a comprehensive brand bible and launch roadmap. Your team knows exactly how to use every element. No ambiguity.',
    details: [
      'Complete brand guidelines',
      'Usage documentation',
      'Launch strategy & rollout',
      'Team onboarding session',
    ],
    duration: '1–2 Weeks',
    gradient: 'from-[#FD5800] via-orange-500 to-violet-600',
    accentColor: '#FD5800',
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [glowingStep, setGlowingStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowingStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 lg:px-12 border-t border-violet-100/80">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14 md:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#FD5800]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#FD5800] uppercase">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] uppercase mb-4">
            <span className="text-[#FD5800]">Our Branding</span>{' '}
            <span className="text-gray-900">Process</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
            A battle-tested framework that turns vague ideas into brands people obsess over.
          </p>
        </div>

        {/* Process Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12 items-start">

          {/* Left: Step Selector */}
          <div className="flex flex-col gap-3">
            {steps.map((step, index) => {
              const isActive = activeStep === index
              const isGlowing = glowingStep === index
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`relative w-full text-left rounded-2xl p-6 transition-all duration-300 overflow-hidden group ${
                    isActive
                      ? 'bg-gradient-to-r ' + step.gradient + ' text-white shadow-xl shadow-violet-500/20'
                      : 'bg-violet-50/40 text-gray-700 hover:bg-violet-100/50 border border-violet-100'
                  } ${
                    isGlowing && !isActive
                      ? 'border-violet-500 ring-2 ring-violet-400/40 shadow-md' 
                      : isGlowing && isActive
                        ? 'border-[#FD5800] ring-2 ring-orange-400/40 shadow-md'
                        : (isActive ? 'border-transparent' : '')
                  }`}
                >
                  {/* Background number */}
                  {isActive && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[5rem] font-black leading-none text-white/15 select-none pointer-events-none">
                      {step.id}
                    </span>
                  )}

                  <div className="relative z-10">
                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isActive ? 'text-white/80' : 'text-violet-600/70 font-semibold'}`}>
                      {step.phase}
                    </span>
                    <div className="flex items-center justify-between mt-1">
                      <h3 className={`text-base md:text-lg font-black tracking-tight ${isActive ? 'text-white' : 'text-gray-900 group-hover:text-[#FD5800]'}`}>
                        {step.title}
                      </h3>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-sm"
                        >
                          <FaArrowRight size={10} className="text-white" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}

            {/* Timeline progress bar */}
            <div className="flex items-center gap-2 mt-4 px-2">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex-1 h-1.5 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: index <= activeStep ? (index % 2 === 0 ? '#FD5800' : '#8B5CF6') : '#EDE9FE',
                    boxShadow: index <= activeStep ? (index % 2 === 0 ? '0 0 10px rgba(253,88,0,0.4)' : '0 0 10px rgba(139,92,246,0.4)') : 'none'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Active Step Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-[28px] overflow-hidden shadow-xl shadow-violet-500/5 border border-violet-100"
            >
              {/* Card Header */}
              <div
                className={`relative p-8 md:p-12 overflow-hidden min-h-[220px] flex flex-col justify-end bg-gradient-to-r ${steps[activeStep].gradient}`}
              >
                {/* Big background number */}
                <span className="absolute -right-6 -top-8 text-[11rem] font-black leading-none text-white/10 select-none pointer-events-none">
                  {steps[activeStep].id}
                </span>

                {/* Duration badge */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/20 border border-white/30 backdrop-blur-sm rounded-full px-3.5 py-1">
                  <span className="text-white text-[11px] font-bold tracking-wider uppercase">
                    ⏱ {steps[activeStep].duration}
                  </span>
                </div>

                <span className="text-white/70 text-[10px] font-bold tracking-[0.3em] uppercase mb-1.5">
                  {steps[activeStep].phase}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.1] max-w-[85%]">
                  {steps[activeStep].title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-8 md:p-12 bg-white">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-xl">
                  {steps[activeStep].description}
                </p>

                {/* Deliverables */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-5">
                    <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FD5800] to-violet-600">
                      Key Deliverables
                    </h4>
                    <div className="h-[1px] flex-grow bg-violet-100" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {steps[activeStep].details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className="flex items-center gap-3.5 bg-violet-50/50 rounded-xl p-3.5 border border-violet-100 shadow-sm group hover:border-orange-300 hover:bg-orange-50/50 transition-colors"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white font-black text-xs shadow-sm"
                          style={{ backgroundColor: activeStep % 2 === 0 ? '#8B5CF6' : '#FD5800' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <span className="text-gray-800 font-semibold text-sm group-hover:text-[#FD5800] transition-colors">
                          {detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  className="group flex items-center gap-3 font-bold text-sm py-3.5 px-7 rounded-full transition-all duration-300 hover:scale-105 text-white shadow-lg bg-gradient-to-r from-[#FD5800] to-violet-600 hover:from-violet-600 hover:to-[#FD5800]"
                >
                  Start with this phase
                  <div className="bg-white/20 group-hover:bg-white group-hover:text-[#FD5800] rounded-full p-1.5 flex items-center justify-center transition-colors duration-300 group-hover:translate-x-1">
                    <FaArrowRight size={10} />
                  </div>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}
