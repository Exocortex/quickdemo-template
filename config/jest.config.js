module.exports = async () => ({
  bail: 1,
  verbose: true,
  rootDir: '../src',
  setupFiles: ['../config/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      { configFile: './config/babel.config.js' },
    ],
  },
});
