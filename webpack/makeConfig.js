import config from '../config';
import path from 'path';
import ProgressBar from 'progress-bar-webpack-plugin';
import webpack from 'webpack';

export default function makeConfig(isDevelopment) {
  const mainEntry = path.join(__dirname, '../src/main');

  const plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isDevelopment ? 'development' : 'production'),
      },
    }),
  ];

  if (isDevelopment) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin,
      new webpack.NoErrorsPlugin(),
    );
  } else {
    plugins.push(
      new ProgressBar(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(),
    );
  }

  const webpackConf = {
    hotPort: config.webpackDevServerPort,
    debug: isDevelopment,
    devtool: isDevelopment ? 'cheap-module-eval-source-map' : '',
    entry: isDevelopment ? [
      `webpack-hot-middleware/client?path=http://localhost:${config.webpackDevServerPort}/__webpack_hmr`,
      mainEntry,
    ] : mainEntry,
    output: {
      path: path.join(__dirname, '../dist'),
      publicPath: `http://localhost:${config.webpackDevServerPort}/dist`,
      filename: 'app.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    plugins,
  };
  return webpackConf;
}
