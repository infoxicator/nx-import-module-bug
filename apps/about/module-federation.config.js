module.exports = {
  name: 'about',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  library: { type: 'var', name: 'about' },
};
