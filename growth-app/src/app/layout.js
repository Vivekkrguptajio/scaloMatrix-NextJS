import "./globals.css";

export const metadata = {
  title: "Growth Marketing | Scalomatrix",
  description: "Performance and growth marketing services.",
  keywords: "growth marketing, performance marketing, scale business, marketing strategy, user acquisition",
  authors: [{ name: "Scalomatrix" }],
  creator: "Scalomatrix",
  publisher: "Scalomatrix",
  openGraph: {
    title: "Growth Marketing | Scalomatrix",
    description: "Performance and growth marketing services.",
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
    title: "Growth Marketing | Scalomatrix",
    description: "Performance and growth marketing services.",
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


