'use strict'
const path = require('path')
const fs   = require('fs')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const argv = require('./webpack.argv')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('argv:', argv)


const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const packages    = resolveApp('packages')
// const env_data   = path.resolve(__dirname, '../env_data')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: `./src/${argv.name}/main.js`
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    modules: [packages, "node_modules"],
    extensions: ['.js', '.vue', '.json', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@shared': resolve('src/@shared'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
        query: {
          presets: ['react', 'stage-2']
        } 
      },
      {
        test: /\.art$/,
        loader: 'art-template-loader',
        options: {
          // art-template options (if necessary)
          // @see https://github.com/aui/art-template
          minimize: true,
          htmlMinifierOptions: {
            collapseWhitespace: true,
            removeComments: true,
            collapseInlineTagWhitespace: true,
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
