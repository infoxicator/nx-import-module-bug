const { dependencies } = require('../../package.json');

module.exports = {
  name: 'shop',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  filename: 'remoteEntry.js',
  library: { type: 'var', name: 'shop' },
  shared: dependencies,
};
