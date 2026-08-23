"use client";
import { useState, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import { navLinks, megaMenuData } from '../data'

export default function Navbar({ activeSection, loading, isDarkTheme = false, isHidden = false }) {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null)
  const logoX = useMotionValue(0)
  const logoY = useMotionValue(0)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const handleMouseMove = useCallback((e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    logoX.set((e.clientX - (left + width / 2)) * 0.2)
    logoY.set((e.clientY - (top + height / 2)) * 0.2)
  }, [logoX, logoY])

  const handleMouseLeave = useCallback(() => {
    logoX.set(0)
    logoY.set(0)
  }, [logoX, logoY])

  return (
    <header 
      className={`fixed left-0 right-0 z-50 flex justify-center transition-[opacity,transform] duration-700 ease-in-out top-4 px-4 ${
        loading 
          ? 'opacity-0 -translate-y-[150%] pointer-events-none' 
          : isHidden 
            ? 'opacity-100 translate-y-0 md:opacity-0 md:-translate-y-[150%] md:pointer-events-none' 
            : 'opacity-100 translate-y-0'
      }`}
    >
      <nav 
        onMouseLeave={() => setActiveDropdown(null)}
        className={`relative w-full flex flex-col transition-all duration-300 backdrop-blur-2xl backdrop-saturate-200 max-w-7xl border rounded-[32px] ${
          isDarkTheme 
            ? (activeDropdown ? 'bg-[#111]/95 border-[#333]' : 'bg-white/5 border-white/10') 
            : (activeDropdown ? 'bg-white/95 border-gray-200' : 'bg-white/20 border-white/30')
        } ${activeDropdown ? 'shadow-[0_25px_50px_-12px_rgba(253,88,0,0.3)]' : 'shadow-[0_10px_30px_rgba(253,88,0,0.15)]'}`}
      >
        {/* Main Navbar Row */}
        <div className="w-full flex items-center justify-between py-2 px-6 md:px-8">
        {/* Logo */}
        <motion.a 
          href={process.env.NEXT_PUBLIC_MAIN_SITE_URL || "https://www.scalomatrix.com/"}
          target="_blank"
          rel="noopener noreferrer" 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: logoX, y: logoY }}
          className={`group flex items-center gap-3 font-semibold tracking-tight select-none whitespace-nowrap z-10 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
        >
          <span className={`text-2xl md:text-3xl font-sans font-black transition-colors duration-300 tracking-tight`}>
            <span className="text-[#FD5800]">scalo</span>
            <span className={isDarkTheme ? 'text-white' : 'text-black'}>MATRIX</span>
          </span>
        </motion.a>
        
        {/* Desktop Nav Links (Centered perfectly) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 lg:gap-2 h-full">
          {navLinks.map((link) => {
            const linkPath = link.href.replace(/^\//, '').replace(/^#/, '');
            const isActive = activeSection === linkPath;
            return (
              <div key={link.name} className="relative h-full flex items-center">
                <a 
                  href={link.href} 
                  onMouseEnter={() => link.hasDropdown ? setActiveDropdown(link.name) : setActiveDropdown(null)}
                  className={`flex items-center gap-1.5 text-[15px] lg:text-[16px] font-semibold font-sans tracking-wide transition-colors duration-300 ease-out relative px-4 py-2 rounded-full ${
                    (isActive && linkPath !== '') || activeDropdown === link.name
                      ? 'bg-[#FD5800]/10 text-[#FD5800]'
                      : (isDarkTheme ? 'text-gray-300 hover:bg-[#FD5800]/10 hover:text-[#FD5800]' : 'text-gray-700 hover:bg-[#FD5800]/10 hover:text-[#FD5800]')
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.name ? '-rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
              </div>
            );
          })}
        </div>

        {/* Contact Button (Right Side) */}
        <div className="hidden md:flex items-center z-10">
          <a 
            href="/contact" 
            className="group flex items-center gap-2 text-sm md:text-base font-bold px-5 py-1.5 md:py-2 rounded-full bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors tracking-wide"
          >
            Contact Us
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-20"
        >
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-[2px] transition-all duration-300 bg-[#FD5800] ${mobileMenu ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
        </button>

        </div> {/* End Main Navbar Row */}

        {/* Expanding Mega Menu Panel (Inside Nav) */}
        <AnimatePresence>
          {activeDropdown && megaMenuData[activeDropdown] && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full overflow-hidden font-sora"
            >
              <div className="w-full px-8 pb-8 pt-2 flex gap-8 h-[400px]">
                {megaMenuData[activeDropdown].type === 'columns' ? (
                  <div className="w-full flex gap-12 py-4 px-8">
                    {megaMenuData[activeDropdown].columns.map((col, idx) => (
                      <div key={idx} className="flex-1 flex flex-col">
                        <h4 className={`text-[13px] font-black text-[#FD5800] uppercase tracking-widest mb-6 pb-4 border-b ${isDarkTheme ? 'border-white/10' : 'border-gray-200'}`}>
                          {col.title}
                        </h4>
                        <div className="flex flex-col gap-5">
                          {col.items.map((item, itemIdx) => {
                            const isExternal = item.href?.startsWith('http');
                            return (
                            <a 
                              key={itemIdx} 
                              href={item.href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              onClick={(e) => {
                                if (isExternal) {
                                  e.preventDefault();
                                  window.open(item.href, '_blank') || (window.location.href = item.href);
                                }
                              }}
                              className={`group/item flex items-center justify-start gap-2.5 transition-all duration-300 relative z-50`}
                            >
                              <span className={`text-lg lg:text-xl font-bold tracking-tight transition-colors ${isDarkTheme ? 'text-gray-300 group-hover/item:text-[#FD5800]' : 'text-gray-800 group-hover/item:text-[#FD5800]'}`}>
                                {item.title}
                              </span>
                              <span className="text-[#FD5800] transform group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-transform duration-300 mt-0.5">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
                                </svg>
                              </span>
                            </a>
                          )})}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : megaMenuData[activeDropdown].type === 'projects' ? (
                  <>
                    {/* Left Side: Premium Links */}
                    <div className={`w-[35%] flex flex-col gap-1 border-r ${isDarkTheme ? 'border-white/10' : 'border-gray-100'} pr-6 pt-1 group/list`}>
                      {megaMenuData[activeDropdown].items.map((item, idx) => (
                        <a key={idx} href={item.href} className="group/item flex items-center justify-start gap-2.5 py-3 transition-all duration-300">
                          <span className={`text-lg lg:text-xl font-bold ${isDarkTheme ? 'text-gray-300' : 'text-gray-800'} group-hover/list:text-gray-400 group-hover/item:!text-[#FD5800] transition-colors tracking-tight`}>
                            {item.title}
                          </span>
                          <span className="text-[#FD5800] group-hover/list:opacity-40 group-hover/list:grayscale group-hover/item:!opacity-100 group-hover/item:!grayscale-0 transform group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-[transform,opacity] duration-300 mt-0.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
                            </svg>
                          </span>
                        </a>
                      ))}
                    </div>
                    {/* Right Side: Project Cards */}
                    <div className="w-[65%] pl-4 flex gap-6">
                      {(megaMenuData[activeDropdown].featuredProjects || []).map((project, idx) => (
                        <div key={idx} className="flex-1 flex flex-col group cursor-pointer" onClick={() => window.location.href = `/work/${project._id || project.id}`}>
                          {/* Card Image */}
                          <div className="w-full aspect-[16/10] relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                            {!megaMenuData[activeDropdown].hideTags && (
                              <>
                                <div className="absolute top-3 left-4 z-10">
                                  <span className="text-white text-[10px] font-bold uppercase tracking-wider drop-shadow-md">{project.tags?.[0] || 'scalo'}</span>
                                </div>
                                <div className="absolute top-3 right-4 z-10">
                                  <span className="text-white text-[10px] font-bold uppercase tracking-wider drop-shadow-md">{project.tags?.[1] || 'ARTICLE'}</span>
                                </div>
                                <div className="absolute bottom-3 left-4 z-10">
                                  <span className="text-white text-xl font-black drop-shadow-md">#</span>
                                </div>
                              </>
                            )}
                            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>
                          </div>
                          {/* Card Title & Desc */}
                          <div className="mt-4 pr-2">
                            <h3 className={`font-sora font-black text-lg ${isDarkTheme ? 'text-gray-200' : 'text-gray-900'} leading-tight group-hover:text-[#FD5800] transition-colors line-clamp-1 mb-1 tracking-tight`}>
                              {project.title}
                            </h3>
                            <p className={`text-[14px] ${isDarkTheme ? 'text-gray-400' : 'text-gray-500'} font-medium line-clamp-2 leading-relaxed`}>{project.description || project.location || 'Explore this project to see how we drove meaningful results and impact.'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left Side: Dynamic List */}
                    <div className="w-[45%] flex flex-col gap-2 border-r border-gray-100 pr-6">
                      <div className="text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-widest pl-2">
                        {megaMenuData[activeDropdown].listTitle}
                      </div>
                      
                      {megaMenuData[activeDropdown].items.map((item, idx) => (
                        <a key={idx} href="#" className="flex items-start gap-4 p-3 rounded-2xl hover:bg-[#FFF8F5] transition-colors group/item">
                          <div className="w-10 h-10 shrink-0 rounded-xl bg-orange-50 flex items-center justify-center text-[#FD5800] font-bold group-hover/item:scale-110 transition-transform">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              {item.icon}
                            </svg>
                          </div>
                          <div>
                            <div className="text-gray-900 font-bold text-[15px] group-hover/item:text-[#FD5800] transition-colors">{item.title}</div>
                            <div className="text-gray-500 text-[13px] mt-0.5 font-bold leading-relaxed">{item.desc}</div>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Right Side: Dynamic Featured Card */}
                    <div className="w-[55%] pl-4 flex flex-col">
                      <div className={`w-full h-[180px] rounded-2xl bg-gradient-to-br ${megaMenuData[activeDropdown].featured.gradient} flex items-center justify-center text-white font-black text-3xl shadow-[0_10px_30px_-10px_rgba(255,69,0,0.5)] mb-6 overflow-hidden relative group/card cursor-pointer`}>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-150%] group-hover/card:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
                        <span className="relative z-10 group-hover/card:scale-105 transition-transform duration-500 tracking-tight">{megaMenuData[activeDropdown].featured.title}</span>
                      </div>
                      <h4 className="text-gray-900 font-black text-lg mb-2">{megaMenuData[activeDropdown].featured.subtitle}</h4>
                      <p className="text-[14px] text-gray-500 font-bold leading-relaxed">
                        {megaMenuData[activeDropdown].featured.desc}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>


      </nav>

      {/* Mobile Nav Menu Dropdown */}
      <div className={`md:hidden absolute top-[calc(100%+12px)] left-4 right-4 rounded-2xl bg-white border border-gray-100 overflow-y-auto overflow-x-hidden transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.15)] origin-top ${
        mobileMenu ? 'max-h-[75vh] opacity-100 py-2 pointer-events-auto scale-y-100' : 'max-h-0 opacity-0 py-0 border-transparent shadow-none pointer-events-none scale-y-95'
      }`}>
        <div className="flex flex-col px-4 py-2 gap-3">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <a 
                href={link.hasDropdown ? '#' : link.href}
                onClick={(e) => {
                  if (link.hasDropdown) {
                    e.preventDefault();
                    setActiveMobileDropdown(activeMobileDropdown === link.name ? null : link.name);
                  } else {
                    setMobileMenu(false);
                  }
                }}
                className={`flex items-center justify-between text-base font-bold px-4 py-2 transition-all rounded-xl ${activeMobileDropdown === link.name ? 'text-[#FD5800] bg-orange-50/50' : 'text-[#FD5800]/80 hover:text-[#FD5800] hover:bg-orange-50/50'}`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg className={`w-4 h-4 transition-transform duration-300 ${activeMobileDropdown === link.name ? '-rotate-180 text-[#FD5800]' : 'text-[#FD5800]/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
              
              {/* Mobile Submenu Dropdown */}
              {link.hasDropdown && activeMobileDropdown === link.name && megaMenuData[link.name] && (
                <div className="flex flex-col gap-2 pl-6 pr-4 py-2 mt-1">
                  {megaMenuData[link.name].type === 'columns' ? (
                    megaMenuData[link.name].columns.map((col, idx) => (
                      <div key={idx} className="mb-2">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{col.title}</div>
                        <div className="flex flex-col gap-2">
                          {col.items.map((item, itemIdx) => {
                            const isExternal = item.href?.startsWith('http');
                            return (
                            <a 
                              key={itemIdx} 
                              href={item.href}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              onClick={(e) => {
                                if (isExternal) {
                                  e.preventDefault();
                                  window.open(item.href, '_blank') || (window.location.href = item.href);
                                } else {
                                  setMobileMenu(false);
                                }
                              }}
                              className="text-sm font-bold text-gray-700 hover:text-[#FD5800] py-1 transition-colors relative z-50"
                            >
                              {item.title}
                            </a>
                          )})}
                        </div>
                      </div>
                    ))
                  ) : (
                    megaMenuData[link.name].items.map((item, idx) => (
                      <a 
                        key={idx} 
                        href={item.href}
                        onClick={() => setMobileMenu(false)}
                        className="text-sm font-bold text-gray-700 hover:text-[#FD5800] py-1 transition-colors"
                      >
                        {item.title}
                      </a>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
          <a 
            href="/contact" 
            onClick={() => setMobileMenu(false)}
            className="flex items-center justify-center gap-2 text-base font-bold rounded-full px-4 py-2 mt-2 bg-[#FD5800] text-white border border-transparent hover:bg-white hover:text-black hover:border-black transition-colors tracking-wide"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
