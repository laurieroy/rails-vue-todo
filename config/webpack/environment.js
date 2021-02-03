const { environment } = require('@rails/webpacker')
const customConfig = require ('./custom')
const webpack = require("webpack")

environment.config.merge(customConfig)

environment.plugins.append("Provide", new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))

module.exports = environment
