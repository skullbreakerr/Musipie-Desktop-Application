/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.externals = {
      fs: 'commonjs fs',
    };
    return config
  },
}
