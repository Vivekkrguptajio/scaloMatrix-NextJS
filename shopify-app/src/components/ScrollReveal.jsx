"use client";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Apple-style cubic bezier
const appleEase = [0.25, 0.1, 0.25, 1.0];
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
      initial: { opacity: 0, y: isMobile ? 30 : 60, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
    },
    fadeUp: {
      initial: { opacity: 0, y: isMobile ? 40 : 80 },
      animate: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      initial: { opacity: 0, x: isMobile ? -30 : -60 },
      animate: { opacity: 1, x: 0 },
    },
    fadeRight: {
      initial: { opacity: 0, x: isMobile ? 30 : 60 },
      animate: { opacity: 1, x: 0 },
    },
    scaleUp: {
      initial: { opacity: 0, scale: isMobile ? 0.9 : 0.85 },
      animate: { opacity: 1, scale: 1 },
    },
    blur: {
      initial: { opacity: 0, scale: 0.95, y: isMobile ? 15 : 30 },
      animate: { opacity: 1, scale: 1, y: 0 },
    },
    slideUp: {
      initial: { opacity: 0, y: isMobile ? 60 : 120 },
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
      viewport={{ once: true, margin: isMobile ? "-5%" : "-8%" }}
      transition={{ 
        duration: isMobile ? 0.7 : 1.0, 
        ease: appleEaseOut,
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax wrapper
export const ScrollParallax = ({ children, className = "", speed = 0.15 }) => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const mobileSpeed = speed * 0.5;
  const effectiveSpeed = isMobile ? mobileSpeed : speed;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * effectiveSpeed, -100 * effectiveSpeed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Text reveal — words animate in one by one
export const ScrollTextReveal = ({ text, className = "", tag: Tag = "h2" }) => {
  const words = text.split(' ');
  const isMobile = useIsMobile();
  
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: isMobile ? 10 : 20, filter: isMobile ? 'blur(2px)' : 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{
            duration: isMobile ? 0.4 : 0.6,
            ease: appleEase,
            delay: i * (isMobile ? 0.04 : 0.06),
          }}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

// Section scale reveal
export const ScrollScaleSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.3], [isMobile ? 0.95 : 0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [isMobile ? 20 : 40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, borderRadius }}
      className={`overflow-hidden ${className}`}
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
