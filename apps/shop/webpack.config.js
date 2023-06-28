const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { ModuleFederationPlugin } = require('webpack').container;

const baseConfig = require('./module-federation.config');

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.plugins.push(new ModuleFederationPlugin(baseConfig));
  config.experiments.outputModule = false;
  config.output.scriptType = 'text/javascript';
  config.output.uniqueName = 'shop';
  config.output.publicPath = 'auto';
  config.optimization = { runtimeChunk: false };
  return config;
});
