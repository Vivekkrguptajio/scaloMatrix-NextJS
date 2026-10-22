"use client";
import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

// Apple-style cubic bezier
const appleEaseOut = [0.22, 1, 0.36, 1];

// Hook to detect mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

// Default reveal: fade up with subtle scale
const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  variant = "default",
}) => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  // Only apply animation after client mount — prevents SSR opacity:0 issue
  useEffect(() => {
    setMounted(true);
  }, []);

  const variants = {
    default: {
      initial: { opacity: 0, y: isMobile ? 20 : 30 },
      animate: { opacity: 1, y: 0 },
    },
    fadeUp: {
      initial: { opacity: 0, y: isMobile ? 24 : 40 },
      animate: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      initial: { opacity: 0, x: isMobile ? -20 : -40 },
      animate: { opacity: 1, x: 0 },
    },
    fadeRight: {
      initial: { opacity: 0, x: isMobile ? 20 : 40 },
      animate: { opacity: 1, x: 0 },
    },
    scaleUp: {
      initial: { opacity: 0, y: isMobile ? 20 : 30, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
    },
    blur: {
      initial: { opacity: 0, y: isMobile ? 15 : 25 },
      animate: { opacity: 1, y: 0 },
    },
    slideUp: {
      initial: { opacity: 0, y: isMobile ? 30 : 60 },
      animate: { opacity: 1, y: 0 },
    },
  };

  const selected = variants[variant] || variants.default;

  // Before client mount, render children fully visible (no animation wrapper)
  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={selected.initial}
      whileInView={selected.animate}
      viewport={{ once: true, margin: isMobile ? "-2%" : "-5%" }}
      transition={{ 
        duration: isMobile ? 0.45 : 0.55, 
        ease: appleEaseOut,
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scroll Progress Bar
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX }}
    />
  );
};

export default ScrollReveal;
