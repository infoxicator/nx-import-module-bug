module.exports = {
  name: 'about',
  library: { type: 'var', name: 'about' },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
