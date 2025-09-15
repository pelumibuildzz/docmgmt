import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Handle PDF.js worker
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    
    return config;
  },
  // Configure Turbopack
  experimental: {
    turbo: {
      rules: {
        '*.pdf': {
          loaders: ['file-loader'],
        },
      },
    },
  },
  // Allow serving PDF files
  async headers() {
    return [
      {
        source: '/(.*).pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
