module.exports = (proxy, allowedHost) => ({
  watchContentBase: true,
  historyApiFallback: {
    index: 'index.html',
  },
});
