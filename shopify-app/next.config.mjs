/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  // Dev only: let phones / other devices on your Wi-Fi open the dev server by its network IP
  // (otherwise Next.js 16 blocks the dev assets & hot-reload from that origin and the page breaks).
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
