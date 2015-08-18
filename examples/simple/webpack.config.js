var path = require('path');
var webpack = require('webpack');

module.exports = {
  //devtool: 'eval',
  entry: {
    inline: [ 'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', './index-inline' ],
    css: [ 'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', './index-css' ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    alias: {
      'react-style-testing': path.join(__dirname, '..', '..', 'src')
      //'react': path.join(__dirname, 'node_modules', 'react', 'dist', 'react.min.js')
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, '..', '..', 'src')
    }]
  }
};
