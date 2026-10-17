import "./globals.css";
import JsonLd from "../components/JsonLd";
import { SITE_URL } from "../utils/site";

const TITLE = "Shopify Store Development for D2C Brands | Scalomatrix";
const DESCRIPTION =
  "Custom Shopify stores, redesigns and landing pages for D2C brands in India. Built to sell 20%+ more from the same ad spend. Free store audit.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Scalomatrix" },
  description: DESCRIPTION,
  applicationName: "Scalomatrix",
  keywords: [
    "Shopify development India",
    "Shopify store design",
    "Shopify redesign",
    "Shopify agency for D2C brands",
    "Shopify landing page design",
    "conversion rate optimization",
    "custom Shopify theme",
    "Shopify audit",
  ],
  authors: [{ name: "Scalomatrix" }],
  creator: "Scalomatrix",
  publisher: "Scalomatrix",
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Scalomatrix",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
    { media: '(prefers-color-scheme: light)', color: '#FAF6EF' },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
