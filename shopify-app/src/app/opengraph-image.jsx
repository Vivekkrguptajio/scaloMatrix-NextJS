import { ImageResponse } from 'next/og';

export const alt = 'Scalomatrix — Shopify stores that sell more';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Social share card (WhatsApp, LinkedIn, X, Slack…) generated at build time
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#0E0D0C',
          color: '#F3EFE8',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
          <span style={{ color: '#FD5800' }}>scalo</span>
          <span>MATRIX</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Shopify stores that make more money from the same ad spend.
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 30, color: '#A39C90' }}>
            Custom stores, redesigns and landing pages for D2C brands
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              background: '#FD5800',
              color: '#fff',
              fontSize: 28,
              fontWeight: 700,
              padding: '14px 28px',
              borderRadius: 999,
            }}
          >
            Free store audit
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#A39C90' }}>www.scalomatrix.com</div>
        </div>
      </div>
    ),
    size
  );
}
