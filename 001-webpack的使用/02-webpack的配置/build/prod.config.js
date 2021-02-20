const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new uglifyjsWebpackPlugin()
  ]
})
