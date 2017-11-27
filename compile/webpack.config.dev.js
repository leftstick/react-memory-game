const { resolve } = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

const root = resolve(__dirname, '..')

module.exports = merge(base(true), {
  entry: {
    app: ['react-hot-loader/patch', resolve(root, 'src', 'dev.jsx')]
  },
  output: {
    path: resolve(root, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: resolve(root, 'dist'),
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    quiet: true
  }
})
