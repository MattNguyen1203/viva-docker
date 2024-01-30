/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
    // i18n: {
    //   locales: ["en", "vi", "ja"],
    //   defaultLocale: "en",
    // },
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.asiavivatravel.com',
      },
      {
        protocol: 'https',
        hostname: 'd2czpmgoouh0j8.cloudfront.net'
      },{
        protocol: 'https',
        hostname: 'asia-vivatravel.s3.eu-west-2.amazonaws.com'
      }
      // {
      //   protocol: 'https',
      //   hostname: '*',
      // },
    ],
    // formats: ['image/avif', 'image/webp'],
  },
  // images: {
  //   loader: 'custom',
  //   loaderFile: './loader.js'
  // },
  staticPageGenerationTimeout: 1000,
  experimental: {
    nextScriptWorkers: true
  }
  // output: 'standalone',
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer(nextConfig)

module.exports = nextConfig
