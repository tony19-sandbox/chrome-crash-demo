const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  configureWebpack: () => {
    const config = {
      plugins: [
        new VuetifyLoaderPlugin(),
        new ImageminPlugin({
          optipng: null,
          pngquant: {
            optimizationLevel: 9
          }
        }),
      ],
    }

    if (process.env.NODE_ENV == 'production') {
      config.plugins.push(new PrerenderSPAPlugin({
        // Absolute path to compiled SPA
        staticDir: path.resolve(__dirname, 'dist'),
        // List of routes to prerender
        routes: ['/contact'],
      }))
    }
    return config
  }
}