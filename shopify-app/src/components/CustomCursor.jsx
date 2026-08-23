"use client";
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outerRef = useRef(null);
  const [isTouch, setIsTouch] = useState(true); // Default to hidden, show only on non-touch

  useEffect(() => {
    // Detect touch device on mount — controls visibility via state to avoid hydration mismatch
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const dot = dotRef.current;
    const outer = outerRef.current;
    if (!dot || !outer) return;

    let animationFrameId = null;
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          outer.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
          animationFrameId = null;
        });
      }
    };

    let lastTarget = null;
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target === lastTarget) return;
      lastTarget = target;

      const isInteractive = target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer');

      dot.style.transform = isInteractive ? 'scale(1.5)' : 'scale(1)';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isTouch]);

  // Always render the same structure during SSR and client mount, control visibility via state
  if (isTouch) {
    return null;
  }

  return (
    <div 
      ref={outerRef}
      className="fixed top-0 left-0 pointer-events-none z-[10000] "
      style={{ willChange: 'transform' }}
    >
      <div className="flex items-center justify-center w-8 h-8">
        <div 
          ref={dotRef}
          className="w-2 h-2 rounded-full bg-[#FD5800] border border-white shadow-sm"
          style={{ 
            transition: 'transform 0.15s ease',
            willChange: 'transform',
          }}
        />
      </div>
    </div>
  );
}
