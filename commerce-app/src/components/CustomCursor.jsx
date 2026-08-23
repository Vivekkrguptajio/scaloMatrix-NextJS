"use client";
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outerRef = useRef(null);

  useEffect(() => {
    // Skip on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const dot = dotRef.current;
    const outer = outerRef.current;
    if (!dot || !outer) return;

    // Use raw DOM manipulation instead of React state to avoid re-renders
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      outer.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
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
    };
  }, []);

  // Check touch device on first render
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <div 
      ref={outerRef}
      className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
      style={{ willChange: 'transform' }}
    >
      <div className="flex items-center justify-center w-8 h-8">
        <div 
          ref={dotRef}
          className="w-2 h-2 rounded-full bg-white"
          style={{ 
            transition: 'transform 0.15s ease',
            willChange: 'transform',
          }}
        />
      </div>
    </div>
  );
}

