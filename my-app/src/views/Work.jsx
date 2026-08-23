"use client";
import { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import { PortfolioContext } from '../context/PortfolioContext'

export default function Work() {
  const { projects } = useContext(PortfolioContext)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useRouter();

  // Handle scroll for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-white text-black font-sans overflow-x-hidden">
      {/* Reusing existing Navbar, passing required props */}
      <Navbar scrolled={scrolled} activeSection="work" isDarkTheme={false} loading={false} />

      {/* ═══════ MAIN CONTENT ═══════ */}
      <main className="relative z-10 bg-white transition-all duration-1000">
        {/* Hero Intro Section */}
        <section className="pt-[20vh] px-6 md:px-[5vw] max-w-[1600px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold leading-tight text-[#111111] tracking-tight mb-8">
            Explore Our Latest Work
          </h1>
          
          {/* Divider */}
          <div className="w-full h-px bg-gray-300 mb-6"></div>
          
          {/* Filter Buttons */}
          <div className="flex justify-end gap-3 mb-10">
            <button className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition shadow-sm">Casestudy</button>
            <button className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition shadow-sm">Daily Creativity</button>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="px-6 md:px-[5vw] pb-[10vw] max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div 
                onClick={() => navigate.push(`/work/${project._id || project.id}`)}
                key={project._id || project.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
                className="flex flex-col w-full group cursor-pointer"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden bg-gray-100 mb-4 shadow-sm">
                  
                  {/* Top Left Label */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider drop-shadow-md">
                      {project.tags?.[0] || 'scalo'}
                    </span>
                  </div>

                  {/* Top Right Label */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider drop-shadow-md">
                      {project.tags?.[1] || 'ARTICLE'}
                    </span>
                  </div>

                  {/* Bottom Left Hash */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-white text-xl md:text-2xl font-black drop-shadow-md">
                      #
                    </span>
                  </div>
                  
                  {/* Image */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-1.5 pr-4">
                  <h3 className="font-sans font-bold text-lg md:text-xl text-[#111111] leading-snug group-hover:text-[#FD5800] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.description || project.location || 'Click to view this amazing project in detail.'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <Contact reveal={true} />
    </div>
  )
}
