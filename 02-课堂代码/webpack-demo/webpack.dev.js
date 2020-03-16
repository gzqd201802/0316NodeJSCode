// 导入公共的配置
const base = require('./webpack.base');
// 导入用于合并 webpack 配置的包，返回值是一个 merge 函数
const merge = require('webpack-merge');

module.exports = merge(
    // 基础配置
    base,
    // 开发环境配置
    {
        // 指定为开发环境
        mode:"development",
        devtool: "source-map", // + 生成映射源代码文件
        devServer: {
            port: 8080 // 默认端口是8080
        },
    }
);