/** @type {import('next').NextConfig} */
const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : undefined // if "" instead of undefined: error
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
}

module.exports = nextConfig
