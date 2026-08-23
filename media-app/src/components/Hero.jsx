"use client";
import { useState, useEffect } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 5000)
      setEmail('')
    }
  }

  return (
    <section
      id="hero"
      className="min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden text-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[450px] bg-radial from-[#FD5800]/15 via-[#FD5800]/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-gradient-to-br from-[#FD5800]/10 to-transparent blur-2xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#FD5800]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-50 border border-[#FD5800]/30 text-[#FD5800] text-xs md:text-sm font-bold tracking-widest uppercase mb-8 shadow-sm animate-pulse">
          <span className="w-2 h-2 rounded-full bg-[#FD5800] animate-ping" />
          <span className="w-2 h-2 rounded-full bg-[#FD5800] -ml-4" />
          Media Stack • Coming Soon
        </div>

        {/* Big Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-sans text-black tracking-tight leading-[1.08] mb-6">
          Precision Media. <br />
          <span className="text-[#FD5800] bg-gradient-to-r from-[#FD5800] via-[#ff7c3b] to-[#FD5800] bg-clip-text text-transparent">
            Coming Soon.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg sm:text-xl md:text-2xl font-normal max-w-2xl leading-relaxed mb-10">
          We’re engineering a high-performance programmatic ad buying and creative scaling engine. Something extraordinary is dropping here shortly.
        </p>

        {/* Early Access / Notify Form */}
        <div className="w-full max-w-md mb-12">
          {subscribed ? (
            <div className="p-4 rounded-2xl bg-orange-50 border border-[#FD5800]/40 text-[#FD5800] font-semibold text-sm">
              ✨ Thank you! We’ll notify you the second we go live.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="flex-1 px-5 py-3.5 rounded-full bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:border-[#FD5800] focus:bg-white text-sm transition-all shadow-inner"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-[#FD5800] hover:bg-[#e04e00] text-white font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(253,88,0,0.35)] hover:scale-105 shrink-0"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-gray-100 w-full max-w-2xl text-center">
          <div className="flex flex-col items-center">
            <span className="text-[#FD5800] font-black text-xl md:text-2xl tracking-tight">Meta & Google</span>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1">Algorithmic Scaling</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#FD5800] font-black text-xl md:text-2xl tracking-tight">Scroll-Stopping</span>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1">High-ROI Creatives</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#FD5800] font-black text-xl md:text-2xl tracking-tight">Full Funnel</span>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1">Performance Analytics</span>
          </div>
        </div>

      </div>
    </section>
  )
}
