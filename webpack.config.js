const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const mode = 'development';

module.exports = {
  mode: mode,

  entry: {
    main: path.resolve(__dirname, 'src/index.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[name][ext]',
    filename: '[name].bundle.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.twig$/,
        use: {
          loader: 'twig-loader',
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: '/node_modules/',
        type: 'asset/resource',
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'src/index.js'),
      inject: false,
      mode: mode,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/base'),
          to: path.resolve(__dirname, 'dist/img/[name][ext]')
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],

}