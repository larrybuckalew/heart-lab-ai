/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  
  // Disable type checking during build
  typescript: {
    ignoreBuildErrors: true
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Add fallback for client-side modules
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false
      }
    }

    return config;
  }
};

module.exports = nextConfig;