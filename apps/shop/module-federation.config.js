module.exports = {
  name: 'shop',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  library: { type: 'var', name: 'shop' },
};
