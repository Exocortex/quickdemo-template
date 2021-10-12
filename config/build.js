const configFactory = require('./webpack.prod');
const webpack = require('webpack');

const argv = process.argv.slice(2);
const compactBuild = argv.indexOf('--compact') !== -1;

if (compactBuild) console.log('[Compact] Bundling app to single file.');

const config = configFactory(compactBuild ? 'compact' : undefined);
const compiler = webpack(config);

compiler.run(async (err, stats) => {
  let messages;
  if (err) {
    if (!err.message) {
      throw new Error(err);
    }
  }
  console.log('Done!');
});
