"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Apple-style cubic bezier — the exact curve Apple uses for their scroll animations
const appleEase = [0.25, 0.1, 0.25, 1.0];
const appleEaseOut = [0.22, 1, 0.36, 1];

// Default reveal: fade up with subtle scale
const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  variant = "default",
}) => {
  const variants = {
    default: {
      initial: { opacity: 0, y: 60, scale: 0.98 },
      animate: { opacity: 1, y: 0, scale: 1 },
    },
    fadeUp: {
      initial: { opacity: 0, y: 80 },
      animate: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
    },
    fadeRight: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
    },
    scaleUp: {
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1 },
    },
    blur: {
      initial: { opacity: 0, filter: 'blur(12px)', y: 30 },
      animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
    },
    slideUp: {
      initial: { opacity: 0, y: 120 },
      animate: { opacity: 1, y: 0 },
    },
  };

  const selected = variants[variant] || variants.default;

  return (
    <motion.div
      initial={selected.initial}
      whileInView={selected.animate}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ 
        duration: 1.0, 
        ease: appleEaseOut,
        delay: delay / 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax wrapper — element moves at different speed than scroll
export const ScrollParallax = ({ children, className = "", speed = 0.15 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
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

// Text reveal — words animate in one by one (Apple keynote style)
export const ScrollTextReveal = ({ text, className = "", tag: Tag = "h2" }) => {
  const words = text.split(' ');
  
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{
            duration: 0.6,
            ease: appleEase,
            delay: i * 0.06,
          }}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

// Section scale reveal — section zooms from 0.9 to 1 as you scroll into view
export const ScrollScaleSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

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

export default ScrollReveal;
