module.exports = {
  name: 'cart',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  library: { type: 'var', name: 'cart' },
};
