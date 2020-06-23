const path = require('path')
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
    }
}