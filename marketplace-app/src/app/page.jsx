"use client";
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ClientSuccess from '@/components/ClientSuccess';
import StrategyModal from '@/components/StrategyModal';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const AboutPrachi = lazy(() => import('@/components/AboutPrachi'));
const WhyChoosePrachi = lazy(() => import('@/components/WhyChoosePrachi'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const PpcRoadmap = lazy(() => import('@/components/PpcRoadmap'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const MasterclassSection = lazy(() => import('@/components/MasterclassSection'));
const MarketplaceFaq = lazy(() => import('@/components/MarketplaceFaq'));
const ContactUs = lazy(() => import('@/components/ContactUs'));
const ThePromise = lazy(() => import('@/components/ThePromise'));
const Contact = lazy(() => import('@/components/Contact'));
const CustomCursor = lazy(() => import('@/components/CustomCursor'));
const ScrollToTop = lazy(() => import('@/components/ScrollToTop'));
const ScrollReveal = lazy(() => import('@/components/ScrollReveal'));

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('strategy');

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.8,
      infinite: false,
      syncTouch: true,
      syncTouchLerp: 0.04,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleOpenModal = (type = 'strategy') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900 overflow-x-clip">
      <Suspense fallback={null}>
        <CustomCursor />
        <ScrollToTop />
      </Suspense>
      
      {/* Navigation Header */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main App Content - Rounded bottom for sticky footer reveal */}
      <main className="relative z-20 bg-white rounded-b-[40px] md:rounded-b-[60px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Hero onOpenModal={handleOpenModal} />
        <TrustStrip />
        <ClientSuccess onOpenModal={handleOpenModal} />
        
        <Suspense fallback={<div className="w-full h-[50vh] flex items-center justify-center bg-white"><div className="w-8 h-8 border-4 border-[#FD5800] border-t-transparent rounded-full animate-spin"></div></div>}>
          <AboutPrachi onOpenModal={handleOpenModal} />
          <WhyChoosePrachi onOpenModal={handleOpenModal} />
          <ServicesSection onOpenModal={handleOpenModal} />
          <PpcRoadmap onOpenModal={handleOpenModal} />
          <TestimonialsSection onOpenModal={handleOpenModal} />
          <MasterclassSection onOpenModal={handleOpenModal} />
          <MarketplaceFaq onOpenModal={handleOpenModal} />
          <ContactUs />
          <ScrollReveal><ThePromise /></ScrollReveal>
        </Suspense>
      </main>

      {/* Sticky Reveal Footer copied from Shopify */}
      <Suspense fallback={null}>
        <Contact reveal={true} />
      </Suspense>

      {/* Interactive Booking & Audit Modal */}
      <StrategyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
}
