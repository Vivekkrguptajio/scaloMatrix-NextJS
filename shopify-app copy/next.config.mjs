/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  allowedDevOrigins: ['192.168.*.*', '10.*.*.*', '172.16.*.*'],
  images: {
    loader: 'custom',
    loaderFile: './src/utils/cloudinaryLoader.js',
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384, 480],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Legal pages renamed on 26 Nov 2026
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/legal', destination: '/disclaimer', permanent: true },
      // 301-redirect old custom Shopify pages to shopify.scalomatrix.com
      {
        source: '/services/shopify-store-creation',
        destination: 'https://shopify.scalomatrix.com/services/shopify-store-creation',
        permanent: true,
      },
      {
        source: '/services/shopify-store-redesign',
        destination: 'https://shopify.scalomatrix.com/services/shopify-store-redesign',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: 'https://shopify.scalomatrix.com/pricing',
        permanent: true,
      },
      {
        source: '/work',
        destination: 'https://shopify.scalomatrix.com/work',
        permanent: true,
      },
      {
        source: '/answers',
        destination: 'https://shopify.scalomatrix.com/answers',
        permanent: true,
      },
      {
        source: '/answers/:slug',
        destination: 'https://shopify.scalomatrix.com/answers/:slug',
        permanent: true,
      },
      {
        source: '/answer',
        destination: 'https://shopify.scalomatrix.com/answers',
        permanent: true,
      },
      {
        source: '/answer/:slug',
        destination: 'https://shopify.scalomatrix.com/answers/:slug',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
