/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                [
                  'transform-imports',
                  {
                    '@material-ui/core': {
                      transform: (importName) => {
                        return `@material-ui/core/esm/${importName}`
                      },
                      preventFullImport: true,
                    },
                  },
                ],
              ],
            },
          },
        ],
      });
    }
    return config
  }
}

module.exports = withBundleAnalyzer(nextConfig)
 