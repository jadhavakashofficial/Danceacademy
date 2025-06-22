/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sanchaykathak.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sanchaykathak.com',
        port: '',
        pathname: '/cms/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
