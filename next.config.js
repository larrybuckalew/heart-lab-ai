/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
}