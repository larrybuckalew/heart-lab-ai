/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig