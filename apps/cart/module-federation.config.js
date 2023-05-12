module.exports = {
  name: 'cart',
  library: { type: 'var', name: 'cart' },
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
