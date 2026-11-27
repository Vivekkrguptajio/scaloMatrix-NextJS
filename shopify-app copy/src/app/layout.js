import "./globals.css";
import JsonLd from "../components/JsonLd";
import CookieConsent from "../components/CookieConsent";
import ClickTracking from "../components/ClickTracking";
import { SITE_URL } from "../utils/site";

const TITLE = "scaloMATRIX | D2C Brand Building for Manufacturers: Store, Ads & Growth";
const DESCRIPTION =
  "Done-for-you D2C brand building for manufacturers and sellers. We build your Shopify store, run Meta ads, and setup shipping & payments. Pay once to start; earn only when you sell.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | scaloMATRIX" },
  description: DESCRIPTION,
  applicationName: "scaloMATRIX",
  keywords: [
    "D2C brand building India",
    "Shopify store setup for manufacturers",
    "done for you D2C",
    "Meta ads agency for manufacturers",
    "build own brand India",
    "Shopify and Meta ads agency",
    "Amazon seller to D2C brand",
    "scaloMATRIX",
    "Kraffic Enterprises",
  ],
  authors: [{ name: "scaloMATRIX", url: SITE_URL }],
  creator: "scaloMATRIX",
  publisher: "scaloMATRIX",
  category: "ecommerce",
  classification: "D2C Brand Growth & Shopify Agency",
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "scaloMATRIX",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "scaloMATRIX - D2C Brand Building for Manufacturers",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    other: {
      "facebook-domain-verification": ["5gbwuuz13w7ko052s19rfrzpqwvzqf"],
    },
  },
  formatDetection: { telephone: false },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#0E0D0C' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="5gbwuuz13w7ko052s19rfrzpqwvzqf" />
        <script dangerouslySetInnerHTML={{ __html: "var d=false;try{d=localStorage.getItem('theme-v3')==='dark'}catch(e){}if(d)document.documentElement.setAttribute('data-theme','dark')" }} />
        {/* Preconnect: fonts + image CDN (faster first paint / LCP) */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        {/* General Sans (Fontshare) — the one font used across the whole site */}
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />

        {/* Meta Pixel, GA4 and Clarity load only after cookie consent: see CookieConsent */}
      </head>
      <body className="min-h-full" suppressHydrationWarning>
        <JsonLd />
        {children}
        <CookieConsent pixelId={pixelId} gaId={gaId} clarityId={clarityId} />
        <ClickTracking />
      </body>
    </html>
  );
}
