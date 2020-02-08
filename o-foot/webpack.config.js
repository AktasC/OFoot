const Encore = require('@symfony/webpack-encore');
const path = require('path');
// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('./public/build/')

  .setPublicPath('/build')

  .addEntry('app', './assets/js/app.jsx')

  .splitEntryChunks()

  .enableSingleRuntimeChunk()

  .cleanupOutputBeforeBuild()

  .enableBuildNotifications()

  .enableSourceMaps(!Encore.isProduction())

  .enableVersioning(Encore.isProduction())

  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = 3;
  })

  .enableReactPreset()

  .configureBabel((babelConfig) => {
    babelConfig.plugins = [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-transform-runtime',
    ];
  })

  .enableSassLoader()

// uncomment to get integrity="..." attributes on your script & link tags
// requires WebpackEncoreBundle 1.4 or higher
  .enableIntegrityHashes(Encore.isProduction());

const config = Encore.getWebpackConfig();
config.resolve.alias['~'] = path.resolve(__dirname, 'assets/js');
config.resolve.alias.Utils = path.resolve(__dirname, 'assets/utils');
module.exports = config;
