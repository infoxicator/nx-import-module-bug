const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJSON = require('../../package.json');

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.experiments.outputModule = false;
  config.output.scriptType = 'text/javascript';
  config.output.publicPath = 'auto';
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        cart: 'cart@http://localhost:4202/remoteEntry.js',
        about: 'about@http://localhost:4203/remoteEntry.js',
        shop: 'shop@http://localhost:4201/remoteEntry.js',
      },
      shared: packageJSON.dependencies,
    })
  );
  return config;
});
