const { dependencies } = require('../../package.json');

module.exports = {
  name: 'about',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  filename: 'remoteEntry.js',
  library: { type: 'var', name: 'about' },
  shared: dependencies,
};
