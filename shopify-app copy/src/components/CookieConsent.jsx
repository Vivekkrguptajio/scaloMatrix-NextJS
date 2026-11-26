'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'cookie-consent-v1'; // 'all' | 'essential'

function readChoice() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveChoice(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* private mode: the banner simply shows again next visit */
  }
}

function addScript({ src, code }) {
  const s = document.createElement('script');
  if (src) {
    s.async = true;
    s.src = src;
  } else {
    s.text = code;
  }
  document.head.appendChild(s);
}

// Loads Meta Pixel, GA4 and Clarity, but only after the visitor accepts.
function loadTrackers({ pixelId, gaId, clarityId }) {
  if (window.__trackersLoaded) return;
  window.__trackersLoaded = true;

  if (pixelId) {
    addScript({
      code: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${pixelId}');fbq('track', 'PageView');`,
    });
  }
  if (gaId) {
    addScript({ src: `https://www.googletagmanager.com/gtag/js?id=${gaId}` });
    addScript({
      code: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaId}');`,
    });
  }
  if (clarityId) {
    addScript({
      code: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarityId}");`,
    });
  }
}

export default function CookieConsent({ pixelId, gaId, clarityId }) {
  const [open, setOpen] = useState(false);
  const ids = { pixelId, gaId, clarityId };
  const hasTrackers = Boolean(pixelId || gaId || clarityId);

  useEffect(() => {
    if (!hasTrackers) return;
    const choice = readChoice();
    if (choice === 'all') loadTrackers(ids);
    // Reading localStorage is only possible after mount, so the banner opens here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    else if (!choice) setOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasTrackers]);

  if (!open) return null;

  const choose = (value) => {
    saveChoice(value);
    if (value === 'all') loadTrackers(ids);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie choices"
      className="fixed inset-x-4 bottom-4 z-[120] sm:inset-x-auto sm:left-6 sm:bottom-6 sm:max-w-[400px] rounded-[14px] border border-ink bg-paper p-4 sm:p-5 text-ink shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
    >
      <p className="text-[13px] sm:text-[14px] leading-snug">
        We use cookies to run this site and measure our ads. Accept all, or choose only the essential ones.{' '}
        <Link href="/privacy-policy" className="underline hover:text-brand">
          Privacy Policy
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => choose('all')}
          className="btn-primary inline-flex flex-1 items-center justify-center rounded-full px-4 py-2.5 text-[13px] font-semibold text-white"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={() => choose('essential')}
          className="btn-ghost inline-flex flex-1 items-center justify-center rounded-full border border-ink px-4 py-2.5 text-[13px] font-semibold text-ink"
        >
          Only essential
        </button>
      </div>
    </div>
  );
}
