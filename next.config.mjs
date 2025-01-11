/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  
  // Configure build caching
  experimental: {
    isrMemoryCacheSize: 0, // Disable ISR memory cache
  },

  // Optional: Configure trailing slashes and image optimization
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;