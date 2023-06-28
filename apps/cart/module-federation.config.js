const { dependencies } = require('../../package.json');

module.exports = {
  name: 'cart',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  filename: 'remoteEntry.js',
  library: { type: 'var', name: 'cart' },
  shared: dependencies,
};
