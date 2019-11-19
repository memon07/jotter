// const { ANALYZE, ASSET_HOST } = process.env

// // for those who using CDN
// const assetPrefix = ASSET_HOST || ''

// module.exports = withCSS(withSass(
//   {
//     assetPrefix,
//     target: 'serverless',
//     webpack: (config, { dev , isServer  }) => {
//       config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

//       if (ANALYZE) {
//         const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
//         config.plugins.push(new BundleAnalyzerPlugin({
//           analyzerMode: 'server',
//           analyzerPort: 8888,
//           openAnalyzer: true
//         }))
//       }

//       return config
//     }
//   }
// )
// );


///////////////////////////////////////////////////////

const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');
const withImages = require('next-images');
const { ANALYZE, ASSET_HOST } = process.env

// for those who using CDN
const assetPrefix = ASSET_HOST || ''


if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

const nextConfig = {
  assetPrefix,
  webpack: (config, { isServer }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [ // eslint-disable-line
        (context, request, callback) => { // eslint-disable-line
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }
    return config;
  },
};

module.exports = withPlugins(
  [
    [withOffline],
    [withImages],
    [withCss],
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          localIdentName: '[path]___[local]___[hash:base64:5]',
        },
      },
    ],
  ],
  nextConfig,
);
