/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sanchaykathak.com',
        port: '',
        pathname: '/cms/wp-content/uploads/**',
      },
      // Add any other external image domains you might use
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig
