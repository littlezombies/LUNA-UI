const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
    mode: 'production',
    //不打包项,外部库
    externals: {
        //不同规范引入方法
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            //scripr引入方式
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    },
})