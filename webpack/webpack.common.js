const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (stand) => {
  const isDevMode = stand === 'local' || stand === 'dev';

  const baseEnvPath = path.join(__dirname, '..', '/.env');
  const envPath = baseEnvPath + '.' + stand;
  const finalEnvPath = fs.existsSync(envPath) ? envPath : baseEnvPath;
  dotenv.config({ path: finalEnvPath });

  return {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
      extensions: ['.jsx', '.tsx', '.ts', '.js'],
      modules: [path.resolve('/'), 'node_modules'],
      plugins: [
        new TsconfigPathsPlugin({
          extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        }),
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
            reuseExistingChunk: true,
          },
          styles: {
            name: 'styles',
            type: 'css/mini-extract',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.module\.((s(a|c))|c)ss$/,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isDevMode
                    ? '[path]-[name]--[local]'
                    : '[hash:base64:5]',
                  localIdentContext: path.resolve(
                    __dirname,
                    '..',
                    './src/view'
                  ),
                },
                sourceMap: isDevMode,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevMode,
              },
            },
          ],
        },
        {
          test: /\.((s(a|c))|c)ss$/,
          exclude: /\.module.((s(a|c))|c)ss$/,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevMode,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['postcss-inline-svg']],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevMode,
              },
            },
          ],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|)$/,
          type: 'asset/inline',
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, '..', 'build/'),
      filename: 'static/[name].js',
      chunkFilename: 'static/[name].[hash:8].chunk.js',
      publicPath: '/',
      clean: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash:5].css',
        chunkFilename: '[id].[hash].css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', './public/index.html'),
        // meta: stand !== 'prod' && {robots: `noindex`},
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
            globOptions: {
              ignore: ['**/index.html'],
            },
          },
        ],
      }),
    ],
  };
};
