const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const {
    resolve
} = require('path')
module.exports = {
    entry: [
        './index'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:5].bound.js'
    },
    optimization: {
        runtimeChunk: {
            name:'runtime'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.ejs',
            filename: 'index.html'
        }),
        new ManifestPlugin()
    ]
}