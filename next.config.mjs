/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  // Logging for debugging
  logging: {
    level: 'verbose'
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    config.infrastructureLogging = {
      level: 'verbose'
    };

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