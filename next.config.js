module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    config.resolve.fallback = {
      fs: false,
      path: false,
      module: false,
    }

    return config
  },
  async rewrites() {
    return [
      {
        source: '/flickr-feed',
        destination: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json', // Proxy to Backend
      },
    ]
  },
}
