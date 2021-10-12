const webpackConfig = require('./webpack.server');
const webpack = require('webpack');
const paths = require('./paths');
const path = require('path');
const spawn = require('child_process').spawn;

const compiler = webpack(webpackConfig);

const watchConfig = {
  aggregateTimeout: 300,
  poll: 1000,
};

let serverControl;

compiler.watch(watchConfig, async (err, stats) => {
  let messages;
  if (err) {
    if (!err.message) {
      throw new Error(err);
    }
  }
  const info = stats.toJson();

  if (stats.hasErrors()) {
    info.errors.forEach((message) => console.log(message));
    return;
  }

  if (stats.hasWarnings()) {
    info.warnings.forEach((message) => console.log(message));
  }

  if (serverControl) {
    serverControl.kill();
  }

  serverControl = spawn('nodemon', [path.join(paths.serverBuild, 'index.js')]);

  serverControl.stdout.on('data', (data) => console.log(data.toString()));
  serverControl.stderr.on('data', (data) => console.error(data.toString()));
});
