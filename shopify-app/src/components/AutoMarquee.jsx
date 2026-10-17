"use client";
import { useEffect, useRef } from 'react';

// Endless auto-scrolling strip that the user can also grab and swipe left/right.
// Children must be ONE flex row whose items are the same set rendered twice
// (the loop point is measured from the first item of the second copy).
export default function AutoMarquee({ children, speed = 40, resumeAfter = 1600, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inner = el.firstElementChild;

    let pos = el.scrollLeft;
    let paused = false;
    let resumeTimer;
    let last = performance.now();
    let raf;

    const period = () => {
      const half = inner.children.length / 2;
      return inner.children[half].offsetLeft - inner.children[0].offsetLeft;
    };

    const pause = () => {
      paused = true;
      clearTimeout(resumeTimer);
    };
    const resume = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        pos = el.scrollLeft;
        paused = false;
      }, resumeAfter);
    };

    const tick = (now) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const p = period();
      if (!paused) {
        pos += (speed * dt) / 1000;
        if (pos >= p) pos -= p;
        el.scrollLeft = pos;
      } else if (p > 0) {
        // user is dragging — keep the loop seamless in both directions
        if (el.scrollLeft >= p * 1.5) el.scrollLeft -= p;
        else if (el.scrollLeft <= 0) el.scrollLeft += p;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onEnter = (e) => { if (e.pointerType === 'mouse') pause(); };
    const onLeave = (e) => { if (e.pointerType === 'mouse') resume(); };

    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume, { passive: true });
    el.addEventListener('touchcancel', resume, { passive: true });
    el.addEventListener('wheel', () => { pause(); resume(); }, { passive: true });
    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resumeTimer);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
      el.removeEventListener('touchcancel', resume);
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [speed, resumeAfter]);

  return (
    <div ref={ref} className={`w-full overflow-x-auto scrollbar-hide ${className}`}>
      {children}
    </div>
  );
}
