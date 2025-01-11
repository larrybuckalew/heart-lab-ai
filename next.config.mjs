/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  
  typescript: {
    ignoreBuildErrors: true
  },

  logging: {
    level: 'verbose'
  },

  webpack: (config, { isServer }) => {
    config.stats = 'detailed';
    
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname)
    };

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

  experimental: {
    optimizePackageImports: true,
    serverComponentsExternalPackages: ['tailwindcss', 'postcss']
  }
};

export default nextConfig;