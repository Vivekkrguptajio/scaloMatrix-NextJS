import "./globals.css";

export const metadata = {
  title: "E-Commerce Solutions | Scalomatrix",
  description: "End-to-end e-commerce management and scaling.",
  keywords: "ecommerce management, WooCommerce, Magento, online retail, scale ecommerce",
  authors: [{ name: "Scalomatrix" }],
  creator: "Scalomatrix",
  publisher: "Scalomatrix",
  openGraph: {
    title: "E-Commerce Solutions | Scalomatrix",
    description: "End-to-end e-commerce management and scaling.",
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
    title: "E-Commerce Solutions | Scalomatrix",
    description: "End-to-end e-commerce management and scaling.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


