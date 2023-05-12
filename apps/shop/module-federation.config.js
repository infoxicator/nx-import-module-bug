module.exports = {
  name: 'shop',
  library: { type: 'var', name: 'shop' },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
