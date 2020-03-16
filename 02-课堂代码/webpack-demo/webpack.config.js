// 按需导入 path 模块
const path = require('path');


// 需要用 module.exports 导出语法，最终提供给 webpack 程序运行的
module.exports = {
    // 概念1：入口文件
    entry: './src/index.js',
    // 概念2：输出对象格式
    output: {
        // 输出到哪个路径，需要绝对路径，path.resolve() 第二个参数直接写文件夹名称
        path: path.resolve(__dirname, 'dist'),
        // 输出文件的名称，名称可以随意，但是大部分情况下叫 bundle.js
        filename: 'bundle.js'
    }
};