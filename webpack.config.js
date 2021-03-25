const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  }
};