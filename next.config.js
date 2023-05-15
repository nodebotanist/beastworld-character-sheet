/** @type {import('next').NextConfig} */

const { uptime } = require('process')

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true // TODO: FIX
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

