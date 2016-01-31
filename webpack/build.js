import makeConfig from './makeConfig';
import webpack from 'webpack';

export default function build(cb) {
  const config = makeConfig(false);
  webpack(config, () => {
    cb();
  });
}
