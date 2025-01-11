/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  typescript: {
    // Disable type checking during build to see if it's causing issues
    ignoreBuildErrors: true
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Add more verbose logging
    config.stats = 'detailed';
    
    // Fallback configurations
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false
      }
    }

    return config;
  },

  // Experimental configurations
  experimental: {
    // Attempt to resolve build caching issues
    optimizePackageImports: true,
    serverComponentsExternalPackages: ['tailwindcss']
  }
};

export default nextConfig;