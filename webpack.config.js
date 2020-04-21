const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.tsx'],
  },

  resolve: {
    alias: {
      Common: path.resolve(__dirname, 'src/app/common/'),
      Hoc: path.resolve(__dirname, 'src/app/component/hoc'),
      Components: path.resolve(__dirname, 'src/app/component/'),
      Utils: path.resolve(__dirname, 'src/app/common/util/'),
      Services: path.resolve(__dirname, 'src/app/common/services/'),
      Types: path.resolve(__dirname, 'src/app/common/interface/'),
      Models: path.resolve(__dirname, 'src/app/common/model/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      favicon: './src/public/favicon.ico',
    }),
  ],

  devServer: {
    historyApiFallback: true,
  },
};
