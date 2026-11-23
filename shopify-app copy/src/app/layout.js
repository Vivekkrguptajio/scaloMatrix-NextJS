import "./globals.css";
import JsonLd from "../components/JsonLd";
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

        {/* Optional Analytics Scripts (Meta Pixel, GA4, Clarity) */}
        {pixelId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${pixelId}');fbq('track', 'PageView');`,
            }}
          />
        )}
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaId}');`,
              }}
            />
          </>
        )}
        {clarityId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${clarityId}");`,
            }}
          />
        )}
      </head>
      <body className="min-h-full">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
