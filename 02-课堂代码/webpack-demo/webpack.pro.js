// 导入公共的配置
const base = require('./webpack.base');
// 导入用于合并 webpack 配置的包，返回值是一个 merge 函数
const merge = require('webpack-merge');

// merge 函数用于合并配置
module.exports = merge(
    // base 配置
    base,
    // 当前生产环境的配置
    {
        // 指定当前是生产环境，打包的时候就没有黄色警告了
        mode: "production"
    }
);