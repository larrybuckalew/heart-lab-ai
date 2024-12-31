/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com', 'example.com']
  },
  typescript: {
    ignoreBuildErrors: false
  }
};

module.exports = nextConfig;