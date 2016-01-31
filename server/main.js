import express from 'express';
import config from '../config';

const app = express();
app.set('view engine', 'ejs');
app.use('/dist', express.static(`${__dirname}/../dist`));
app.get('/', (req, res) => {
  res.render('../index.ejs', {
    webpackDevServerPort: config.webpackDevServerPort,
    development: process.env.NODE_ENV === 'development',
  });
});

app.listen(config.webServerPort, () => {
  console.log('Server started at port %s', config.webServerPort); // eslint-disable-line
});
