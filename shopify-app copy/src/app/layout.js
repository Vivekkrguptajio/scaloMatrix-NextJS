import "./globals.css";
import JsonLd from "../components/JsonLd";
import { SITE_URL } from "../utils/site";

const TITLE = "Shopify Development Company in India | scaloMATRIX";
const DESCRIPTION =
  "Shopify development company in India. We design & build custom Shopify stores, CRO redesigns and high-converting landing pages for D2C brands. Get a free store audit.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Scalomatrix" },
  description: DESCRIPTION,
  applicationName: "Scalomatrix",
  keywords: [
    "Shopify development company in India",
    "Shopify developer India",
    "Shopify agency India",
    "Shopify expert India",
    "custom Shopify store development",
    "Shopify store redesign India",
    "Shopify theme development",
    "Shopify conversion rate optimization",
    "Shopify D2C ecommerce agency",
    "Shopify landing page design",
    "hire dedicated Shopify developer",
    "Shopify speed optimization",
    "Shopify Plus agency India",
    "Shopify store audit",
    "Scalomatrix",
  ],
  authors: [{ name: "Scalomatrix", url: SITE_URL }],
  creator: "Scalomatrix",
  publisher: "Scalomatrix",
  category: "ecommerce",
  classification: "Shopify Development & CRO Agency",
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Scalomatrix",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Scalomatrix - Shopify Development Company in India",
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
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "var d=false;try{d=localStorage.getItem('theme-v3')==='dark'}catch(e){}if(d)document.documentElement.setAttribute('data-theme','dark')" }} />
        {/* Preconnect: fonts + image CDN (faster first paint / LCP) */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        {/* General Sans (Fontshare) — the one font used across the whole site */}
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
