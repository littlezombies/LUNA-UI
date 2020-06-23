const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'tsWheels',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
        })
    ],
}