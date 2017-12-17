
/*
const CopyWebpackPlugin = require('copy-webpack-plugin')

const merge = require('lodash.merge')
const { skpm } = require('./package.json')
const pluginResourcesPath = `${skpm.main}/Contents/Resources`

const webpackConfig = {
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve('./resources'),
                to: path.resolve(pluginResourcesPath)
            }
        ])
    ]
}
merge(config, webpackConfig)
*/

module.exports = function (config, isPluginCommand) {
    if (isPluginCommand) {
        //merge(config, webpackConfig)
        console.log(config)
    }
}