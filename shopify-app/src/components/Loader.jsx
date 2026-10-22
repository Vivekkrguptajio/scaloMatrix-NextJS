"use client";
import { useEffect, useRef, useState } from 'react';

const RAIN = '01アイウエオカキクケコサシスセソ{}<>/$₹%+#=';
const GLYPHS = '01{}<>/$%+#=*&@ABCDEFXYZ'; // latin-only, used while the logo scrambles
const LOGO = 'scaloMATRIX';
const SPLIT = 5; // "scalo" | "MATRIX"

// "#FAF6EF" -> "250, 246, 239" (so the canvas fade can use the page's own background colour)
const hexToRgb = (hex) => {
  const h = hex.replace('#', '').trim();
  const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [0, 2, 4].map((i) => parseInt(v.slice(i, i + 2), 16)).join(', ');
};

const rand = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
const randRain = () => RAIN[Math.floor(Math.random() * RAIN.length)];

// ~1s "Matrix rain" intro that resolves into the scaloMATRIX logo
export default function Loader({ duration = 900 }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('on'); // on → out → done
  const [text, setText] = useState(LOGO); // fixed first value (same on server and client): real logo before JS, no hydration mismatch

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;
    root.style.overflow = 'hidden';

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const fontSize = window.innerWidth < 640 ? 14 : 18;
    const dark = root.getAttribute('data-theme') === 'dark';
    const bg = hexToRgb(getComputedStyle(root).getPropertyValue('--color-cream') || (dark ? '#171513' : '#FAF6EF'));
    const headColor = dark ? '#FFE2CF' : '#141210';   // bright leading glyph
    let drops = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const rows = Math.ceil(canvas.height / fontSize);
      drops = Array.from({ length: Math.ceil(canvas.width / fontSize) }, () => Math.random() * rows * 0.6);
    };
    resize();
    window.addEventListener('resize', resize);

    const rain = setInterval(() => {
      ctx.fillStyle = `rgba(${bg}, 0.1)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      drops.forEach((y, i) => {
        const x = i * fontSize;
        // bright head, orange trail
        ctx.fillStyle = headColor;
        ctx.fillText(randRain(), x, y * fontSize);
        ctx.fillStyle = 'rgba(253, 88, 0, 0.85)';
        ctx.fillText(randRain(), x, (y - 1) * fontSize);
        drops[i] = y * fontSize > canvas.height && Math.random() > 0.9 ? 0 : y + 1;
      });
    }, 40);

    // logo scrambles, then settles letter by letter
    const start = Date.now();
    const scramble = setInterval(() => {
      const p = Math.min((Date.now() - start) / (duration * 0.75), 1);
      setText(
        LOGO.split('').map((ch, i) => (p >= (i + 1) / LOGO.length ? ch : rand())).join('')
      );
    }, 40);

    const out = setTimeout(() => setPhase('out'), reduce ? 200 : duration);
    const done = setTimeout(() => {
      setPhase('done');
      root.style.overflow = '';
    }, (reduce ? 200 : duration) + 300);

    return () => {
      clearInterval(rain);
      clearInterval(scramble);
      clearTimeout(out);
      clearTimeout(done);
      window.removeEventListener('resize', resize);
      root.style.overflow = '';
    };
  }, [duration]);

  if (phase === 'done') return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[10000] bg-cream flex items-center justify-center transition-opacity duration-300 ${
        phase === 'out' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at center, color-mix(in srgb, var(--color-cream) 90%, transparent) 0%, color-mix(in srgb, var(--color-cream) 35%, transparent) 40%, transparent 70%)' }}
      />
      <div className="relative font-display font-extrabold tracking-[-0.04em] text-[clamp(2.4rem,9vw,5.5rem)] leading-none">
        <span className="text-brand">{text.slice(0, SPLIT)}</span>
        <span className="text-ink">{text.slice(SPLIT)}</span>
      </div>
    </div>
  );
}
