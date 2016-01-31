import express from 'express';
import makeConfig from '../makeConfig';
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';

const app = express();

const webpackConfig = makeConfig(true);
const compiler = webpack(webpackConfig);

app.use(webpackDev(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHot(compiler));

app.listen(webpackConfig.hotPort, () => {
  console.log('Hot server started at port %s', webpackConfig.hotPort); // eslint-disable-line
});
