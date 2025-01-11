/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment the following line if you want to use static export
  // output: 'export',
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