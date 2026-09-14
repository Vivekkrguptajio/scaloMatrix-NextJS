"use client";
import { useEffect } from 'react';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Handle anchor links with smooth native scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const id = target.getAttribute('href').substring(1);
        if (!id) return;
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return children;
}

