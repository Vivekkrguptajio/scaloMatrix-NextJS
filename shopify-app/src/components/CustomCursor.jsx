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

    document.documentElement.classList.add('custom-cursor-active');
    return () => document.documentElement.classList.remove('custom-cursor-active');
  }, [isTouch]);

  useEffect(() => {
    if (isTouch) return;

    const dot = dotRef.current;
    const outer = outerRef.current;
    if (!dot || !outer) return;

    // Cursor glides toward the pointer (lerp) instead of snapping to it
    let animationFrameId = null;
    let tx = -100, ty = -100, cx = -100, cy = -100;
    const tick = () => {
      cx += (tx - cx) * 0.32;
      cy += (ty - cy) * 0.32;
      outer.style.transform = `translate3d(${cx - 16}px, ${cy - 16}px, 0)`;
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        animationFrameId = null;
      }
    };
    const handleMouseMove = (e) => {
      if (cx === -100 && cy === -100) { cx = e.clientX; cy = e.clientY; } // first move: no fly-in from the corner
      tx = e.clientX;
      ty = e.clientY;
      if (!animationFrameId) animationFrameId = requestAnimationFrame(tick);
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
          className="w-2 h-2 bg-[#FD5800] border border-white shadow-sm"
          style={{ 
            outline: '1.5px solid #000', // black outline around the cursor
            outlineOffset: '10px',       // 10px gap between the dot and the outline
            transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            willChange: 'transform',
          }}
        />
      </div>
    </div>
  );
}
