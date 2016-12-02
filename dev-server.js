const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config.js');

const devServer = express();
const compiler = webpack(config);

const port = process.env.PORT || 4040;

devServer.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

devServer.use(require('webpack-hot-middleware')(compiler));

devServer.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

devServer.listen(port, '0.0.0.0', err => {
  if (err) {
    return console.error(err);
  }

  console.log(`Listening at http://localhost:${port}/`);
});
