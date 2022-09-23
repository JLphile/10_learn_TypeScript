const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/main.ts'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.cjs', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
