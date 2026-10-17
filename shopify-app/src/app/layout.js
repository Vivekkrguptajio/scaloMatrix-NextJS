import "./globals.css";

export const metadata = {
  title: "Shopify Stores That Convert | Scalomatrix",
  description: "Custom Shopify stores, redesigns and landing pages for D2C brands — built to lift conversion by 20% or more from the same ad spend.",
  keywords: "Shopify development, eCommerce solutions, Shopify plus, online store, custom Shopify theme",
  authors: [{ name: "Scalomatrix" }],
  creator: "Scalomatrix",
  publisher: "Scalomatrix",
  openGraph: {
    title: "Shopify Stores That Convert | Scalomatrix",
    description: "Custom Shopify stores, redesigns and landing pages for D2C brands — built to lift conversion by 20% or more from the same ad spend.",
    url: "https://www.scalomatrix.com/",
    siteName: "Scalomatrix",
    images: [
      {
        url: "https://www.scalomatrix.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Scalomatrix Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Stores That Convert | Scalomatrix",
    description: "Custom Shopify stores, redesigns and landing pages for D2C brands — built to lift conversion by 20% or more from the same ad spend.",
    images: ["https://www.scalomatrix.com/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "var d=true;try{d=localStorage.getItem('theme')!=='light'}catch(e){}if(d)document.documentElement.setAttribute('data-theme','dark')" }} />
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
