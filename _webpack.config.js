/* jshint esversion: 6
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, './src/assets/'),
  entry: {
    main: [
      './js/app.js',
      './scss/app.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, './web'),
    filename: 'js/app-[chunkhash:8].js',
    publicPath: '/web/'
  },
  module: {
    loaders: [],
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  resolve: {
    extensions: ['.js']
  }
}
 */
