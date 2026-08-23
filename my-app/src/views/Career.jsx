"use client";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

const openRoles = [
  { title: "Frontend Developer", tags: ["FULL-TIME", "REMOTE"] },
  { title: "UI/UX Designer", tags: ["FULL-TIME", "REMOTE"] },
  { title: "Brand Identity Designer", tags: ["FULL-TIME", "REMOTE"] },
  { title: "Brand Strategist & Copywriter", tags: ["FULL-TIME", "REMOTE"] },
  { title: "Motion Designer", tags: ["FULL-TIME", "REMOTE"] },
];

export default function Career() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
      {/* Set isDarkTheme=false because background of the main content is white */}
      <Navbar scrolled={true} activeSection="career" isDarkTheme={false} isHidden={false} />

      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm font-mono font-bold tracking-widest text-black uppercase">// CAREERS</span>
              <div className="w-3 h-3 bg-[#f23c3c]"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-black max-w-4xl">
              We're always looking for talented people to join our team.
            </h1>
          </div>

          <div className="w-full h-px bg-gray-300 mb-16"></div>

          {/* Open Roles Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="col-span-1">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold tracking-widest text-black uppercase">// OPEN ROLES</span>
                <div className="w-3 h-3 bg-[#f23c3c]"></div>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-3">
              <div className="flex flex-col w-full">
                {openRoles.map((role, index) => (
                  <div 
                    key={index}
                    className="group border-b border-gray-200 py-4 flex flex-wrap items-center justify-between gap-4 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="flex items-center gap-4 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-bold text-black">{role.title}</h3>
                      <div className="flex items-center gap-2">
                        {role.tags.map((tag, tIndex) => (
                          <span key={tIndex} className="text-xs font-mono font-bold border border-black rounded-full px-3 py-1 uppercase text-black">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Apply Now Button - visible on hover on desktop, always visible on mobile if needed, but let's make it opacity-based */}
                    <div className={`transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 md:opacity-0 opacity-100'}`}>
                       <button className="bg-[#f23c3c] text-black font-bold font-mono text-xs px-4 py-2 rounded-full uppercase border border-[#f23c3c] hover:bg-transparent hover:text-[#f23c3c] transition-colors">
                         Apply Now
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-300 mb-16"></div>

          {/* Talent Pool Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold tracking-widest text-black uppercase">// TALENT POOL</span>
                <div className="w-3 h-3 bg-[#f23c3c]"></div>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-3">
              <div className="max-w-2xl">
                <p className="text-2xl md:text-3xl font-bold text-black mb-8 leading-tight">
                  If you're a talented individual with a specialized skill set and believe you can make a meaningful contribution, we'd love to connect.
                </p>
                <button className="border border-black text-black font-mono font-bold text-xs px-5 py-2 rounded-full uppercase hover:bg-black hover:text-white transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Contact reveal={true} />
    </div>
  );
}
