// One shared, eased page scroll used by every anchor link / scroll button.
// Native `behavior: 'smooth'` differs per browser and feels abrupt at both ends;
// this eases in and out, scales its duration with the distance, and stops
// the moment the visitor scrolls by hand.

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

let frame = null;
let stop = null;

// When Lenis (inertial wheel scrolling) is running, anchor/scroll-to-top use it too.
let lenis = null;
export function setLenis(instance) { lenis = instance; }

export function smoothScrollTo(top, { duration } = {}) {
  if (typeof window === 'undefined') return;
  if (lenis) {
    lenis.scrollTo(top, { duration: duration ? duration / 1000 : undefined, easing: easeInOutCubic });
    return;
  }
  if (stop) stop();

  const start = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const end = Math.max(0, Math.min(top, max));
  const distance = end - start;
  if (Math.abs(distance) < 2) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo({ top: end, behavior: 'instant' });
    return;
  }

  const total = duration ?? Math.min(1400, Math.max(650, Math.abs(distance) * 0.45));
  const t0 = performance.now();

  const cancel = () => stop && stop();
  const events = ['wheel', 'touchstart', 'keydown', 'mousedown'];
  stop = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = null;
    events.forEach((e) => window.removeEventListener(e, cancel));
    stop = null;
  };
  events.forEach((e) => window.addEventListener(e, cancel, { passive: true }));

  const step = (now) => {
    const p = Math.min(1, (now - t0) / total);
    // 'instant' beats the CSS `scroll-behavior: smooth`, which would otherwise smooth every frame
    window.scrollTo({ top: start + distance * easeInOutCubic(p), behavior: 'instant' });
    if (p < 1) frame = requestAnimationFrame(step);
    else stop();
  };
  frame = requestAnimationFrame(step);
}

export function scrollToId(id, offset = -80) {
  const el = document.getElementById(id);
  if (!el) return;
  smoothScrollTo(el.getBoundingClientRect().top + window.scrollY + offset);
}
