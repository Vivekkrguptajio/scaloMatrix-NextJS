'use client';

import { useEffect } from 'react';
import { track } from '../utils/track';

// Tracks every WhatsApp and phone-call click on the site with one listener, so new buttons and
// links are covered automatically. Where on the page the click happened is sent as `location`.
export default function ClickTracking() {
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target instanceof Element ? e.target.closest('a[href]') : null;
      if (!link) return;
      const href = link.getAttribute('href') || '';

      let method = null;
      if (/^tel:/i.test(href)) method = 'call';
      else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(href)) method = 'whatsapp';
      if (!method) return;

      const location =
        link.getAttribute('data-track-location') ||
        link.closest('[id]')?.id ||
        link.closest('header, footer, section')?.tagName.toLowerCase() ||
        'page';

      track(method === 'call' ? 'click_call' : 'click_whatsapp', {
        event_category: 'contact',
        event_label: location,
        location,
        page_path: window.location.pathname,
        meta: { event: 'Contact', data: { method, location } },
      });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
