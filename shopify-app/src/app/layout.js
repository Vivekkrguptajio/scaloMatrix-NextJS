import "./globals.css";

export const metadata = {
  title: "Shopify Development | Scalomatrix",
  description: "Expert Shopify development and eCommerce solutions.",
  keywords: "Shopify development, eCommerce solutions, Shopify plus, online store, custom Shopify theme",
  authors: [{ name: "Scalomatrix" }],
  creator: "Scalomatrix",
  publisher: "Scalomatrix",
  openGraph: {
    title: "Shopify Development | Scalomatrix",
    description: "Expert Shopify development and eCommerce solutions.",
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
    title: "Shopify Development | Scalomatrix",
    description: "Expert Shopify development and eCommerce solutions.",
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
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Libre+Caslon+Text:wght@400;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Sora:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
