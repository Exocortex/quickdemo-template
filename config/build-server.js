const webpackConfig = require('./webpack.server');
const webpack = require('webpack');

const compiler = webpack(webpackConfig);

compiler.run(async (err, stats) => {
  let messages;
  if (err) {
    if (!err.message) {
      throw new Error(err);
    }
  }
  console.log('Done!');
});
