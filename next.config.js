/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
}

// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  ...nextConfig,
  assetPrefix: isProd ? '/beastworld-character-sheet/' : '',
  images: {
    unoptimized: true,
  },
}

