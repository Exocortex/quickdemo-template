const configFactory = require('./webpack.dev');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const clearConsole = require('./threekit-dev-utils/clearConsole');
const chalk = require('chalk');
const createDevServerConfig = require('./webpackDevServer.config');

//  Variables setup
const argv = process.argv.slice(2);
const portIdx =
  argv.indexOf('--port') !== -1 ? argv.indexOf('--port') : argv.indexOf('-p');
const PORT = process.env.PORT || portIdx !== -1 ? argv[portIdx + 1] : 3000;
const HOST = process.env.HOST || '0.0.0.0';

const config = configFactory();
const compiler = webpack(config);
const serverConfig = createDevServerConfig();

const devServer = new WebpackDevServer(compiler, serverConfig);
// Launch WebpackDevServer.
devServer.listen(PORT, HOST, (err) => {
  if (err) {
    return console.log(err);
  }
  clearConsole();

  console.log(chalk.cyan('Starting the development server...\n'));
  //   openBrowser(urls.localUrlForBrowser);
});

['SIGINT', 'SIGTERM'].forEach(function (sig) {
  process.on(sig, function () {
    devServer.close();
    process.exit();
  });
});

if (process.env.CI !== 'true') {
  // Gracefully exit when stdin ends
  process.stdin.on('end', function () {
    devServer.close();
    process.exit();
  });
}
