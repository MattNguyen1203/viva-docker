/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
    // i18n: {
    //   locales: ["en", "vi", "ja"],
    //   defaultLocale: "en",
    // },
  images: {
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
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // images: {
  //   loader: 'custom',
  //   loaderFile: './loader.js'
  // },
  staticPageGenerationTimeout: 1000,
  output: 'standalone',
}

module.exports = nextConfig
