"use client";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-10 md:pt-16 pb-6 md:pb-8 font-sans border-t-[0.5px] md:border-t border-black">
      <div className="max-w-[1024px] mx-auto w-full px-2.5 sm:px-5 md:px-16 xl:px-0">
        
        {/* Top Huge Typography */}
        <div className="mb-6 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black font-sans leading-[1.05] tracking-tight">
            <span className="block text-white">landing</span>
            <span className="block text-white">pages that</span>
            <span className="block text-[#FD5800]">earn their keep.</span>
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#2a2a2a] mb-6 md:mb-10"></div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 relative">
          
          {/* Column 1: The Promise */}
          <div className="lg:w-5/12 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-2 md:mb-4">
              <span className="text-[#666] text-xs">→</span>
              <h3 className="text-[#666] text-xs font-bold tracking-[0.2em] uppercase">The Promise</h3>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-snug mb-4 md:mb-6 max-w-md">
              We ship landing pages that convert at least <span className="text-[#FD5800]">+20%</span> better than what's running today. If they don't, we keep working. No retainer theatre.
            </p>
            <a href="#" className="inline-block bg-[#FD5800] text-white font-semibold py-2 px-4 text-xs rounded-full hover:bg-[#e04800] transition-colors">
              Send your URL →
            </a>
          </div>

          {/* Column 2: Work */}
          <div className="lg:w-2/12">
            <div className="flex items-center gap-2 mb-2 md:mb-4">
              <span className="text-[#666] text-xs">→</span>
              <h3 className="text-[#666] text-xs font-bold tracking-[0.2em] uppercase">Work</h3>
            </div>
            <ul className="flex flex-col gap-1.5 md:gap-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Receipts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hall of Fame</a></li>
            </ul>
          </div>

          {/* Column 3: Words */}
          <div className="lg:w-2/12">
            <div className="flex items-center gap-2 mb-2 md:mb-4">
              <span className="text-[#666] text-xs">→</span>
              <h3 className="text-[#666] text-xs font-bold tracking-[0.2em] uppercase">Words</h3>
            </div>
            <ul className="flex flex-col gap-1.5 md:gap-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">The math</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Why CRO</a></li>
            </ul>
          </div>

          {/* Column 4: Info/More */}
          <div className="lg:w-3/12">
            <div className="flex items-center gap-2 mb-2 md:mb-4">
              <span className="text-[#666] text-xs">→</span>
              <h3 className="text-[#666] text-xs font-bold tracking-[0.2em] uppercase">Find Us</h3>
            </div>
            <ul className="flex flex-col gap-1.5 md:gap-3 text-gray-300 text-sm">
              <li className="text-gray-300">Surat · IN</li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X / Twitter</a></li>
            </ul>
          </div>

          {/* Scroll to Top Circle */}
          <div className="absolute right-0 top-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-[#333] cursor-pointer hover:border-gray-500 transition-colors">
            <div className="w-1.5 h-1.5 bg-[#FD5800] rounded-full"></div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#2a2a2a] mt-6 md:mt-12 mb-4 md:mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3 text-[#555] text-[9px] tracking-widest font-mono uppercase">
          <p>© THE LANDING PAGE COMPANY · EST. 2024 - 2026</p>
          <p>BUILT IN INDIA · UNDER 1.8S MOBILE · WE PRACTISE WHAT WE PITCH.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
