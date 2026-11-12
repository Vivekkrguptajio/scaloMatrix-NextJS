"use client";
import { useEffect, useRef } from 'react';

// Endless auto-scrolling strip that the user can also grab and swipe left/right.
// Children must be ONE flex row whose items are the same set rendered twice
// (the loop point is measured from the first item of the second copy).
export default function AutoMarquee({ children, speed = 40, direction = 'left', resumeAfter = 1600, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inner = el.firstElementChild;

    const dir = direction === 'right' ? -1 : 1; // moving right = scrollLeft shrinking
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

    // a rightward strip has to start at the end of the first copy so there is room to travel back
    if (dir < 0) el.scrollLeft = period();
    let pos = el.scrollLeft;

    const tick = (now) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const p = period();
      if (!paused) {
        pos += (dir * speed * dt) / 1000;
        if (pos >= p) pos -= p;
        if (pos <= 0) pos += p;
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

    // Mouse: click and drag the strip left/right (touch already swipes natively)
    let dragging = false, startX = 0, startScroll = 0, moved = 0;
    const onDown = (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      dragging = true; moved = 0;
      startX = e.clientX; startScroll = el.scrollLeft;
      pause();
      el.style.cursor = 'grabbing';
    };
    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      el.scrollLeft = startScroll - dx;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      el.style.cursor = '';
      // keep hover-pause while the mouse is still over the strip; resume when it leaves
    };
    // a drag must not open the card link underneath
    const onClickCapture = (e) => { if (moved > 5) { e.preventDefault(); e.stopPropagation(); moved = 0; } };
    const onDragStart = (e) => e.preventDefault(); // no ghost-image dragging
    el.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    el.addEventListener('click', onClickCapture, true);
    el.addEventListener('dragstart', onDragStart);

    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume, { passive: true });
    el.addEventListener('touchcancel', resume, { passive: true });
    el.addEventListener('wheel', () => { pause(); resume(); }, { passive: true });
    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resumeTimer);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('click', onClickCapture, true);
      el.removeEventListener('dragstart', onDragStart);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
      el.removeEventListener('touchcancel', resume);
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [speed, resumeAfter, direction]);

  return (
    <div ref={ref} className={`w-full overflow-x-auto scrollbar-hide cursor-grab select-none ${className}`}>
      {children}
    </div>
  );
}
