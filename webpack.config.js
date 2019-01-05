var dev = process.env.NODE_ENV !== 'production';
var glob = require('glob');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

var entries = {};
var files = glob.sync('./src/index.js');
files.forEach(function (file) {
  var dir = path.basename(path.dirname(file));
  entries['/dist/index'] = file;
});
files = glob.sync('./src/*.scss');
files.forEach(function (file) {
  var dir = path.basename(path.dirname(file));
  var basename = path.basename(file).replace('.scss', '');
  entries['/dist/' + basename] = file;
});

var browserslist = [
  "> 1%",
  "last 2 versions"
];

module.exports = {
  context: __dirname,
  mode: dev ? 'development' : 'production',
  entry: entries,
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/preset-env', '@babel/preset-react' ],
              plugins: [
                ['@babel/plugin-transform-react-jsx', {
                  'pragma': 'wp.element.createElement' // default pragma is React.createElement
                }]
              ]
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer( browserslist )],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: 'Build [:bar] :percent (:elapsed seconds)',
      clear: false
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css'
    }),
    new FixStyleOnlyEntriesPlugin( { silent: true } ),
    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        browserslist: browserslist
      }
    })
  ],
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimize: !dev
  },
  stats: {
    entrypoints: false,
    assets: false,
    chunks: false,
    chunkModules: false,
    colors: true,
    hash: false,
    timings: false,
    version: false,
    children: false
  }
};
