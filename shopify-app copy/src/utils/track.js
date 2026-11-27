// One place for analytics events. Meta Pixel, GA4 and Clarity only exist after the visitor accepts
// cookies (see CookieConsent), so every call here quietly does nothing until then.
export function track(name, params = {}) {
  if (typeof window === 'undefined') return;
  try {
    const { meta, ...rest } = params; // `meta` = Meta Pixel event override
    const metaEvent = meta || {};
    if (typeof window.fbq === 'function' && metaEvent.event) {
      const send = metaEvent.custom ? 'trackCustom' : 'track';
      window.fbq(send, metaEvent.event, metaEvent.data || {});
    }
    if (typeof window.gtag === 'function') window.gtag('event', name, rest);
    if (typeof window.clarity === 'function') window.clarity('event', name);
  } catch {
    /* tracking must never break the page */
  }
}
