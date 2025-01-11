/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  
  // Configure build caching
  experimental: {
    isrMemoryCacheSize: 0, // Disable ISR memory cache
  },

  // Optional: Configure trailing slashes and image optimization
  trailingSlash: true,
  images: {
    unoptimized: true
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false
      }
    }
    return config
  }
};

export default nextConfig;