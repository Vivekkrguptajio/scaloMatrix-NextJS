"use client";

import { useEffect, Suspense } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';
import Preloader from '@/components/Preloader';
import { PortfolioProvider } from '@/context/PortfolioContext';

export default function ClientProviders({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      smoothTouch: false,
      touchMultiplier: 1.8,
      syncTouch: true,
      syncTouchLerp: 0.04,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <PortfolioProvider>
      <Preloader />
      <CustomCursor />
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen w-full bg-white flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#FD5800] border-t-transparent rounded-full animate-spin"></div></div>}>
        {children}
      </Suspense>
    </PortfolioProvider>
  );
}
