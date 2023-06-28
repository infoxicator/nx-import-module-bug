const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { withModuleFederation } = require('@nrwl/react/module-federation');

const baseConfig = require('./module-federation.config');

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(baseConfig),
  (config) => {
    return {
      ...config,
      experiments: { outputModule: false },
      output: {
        ...config.output,
        scriptType: 'text/javascript',
      },
    };
  }
);
