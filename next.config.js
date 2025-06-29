/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // ✅ Disable Image Optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sanchaykathak.com',
        port: '',
        pathname: '/cms/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
