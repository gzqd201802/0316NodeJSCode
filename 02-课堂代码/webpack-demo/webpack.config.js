// 按需导入 path 模块
const path = require('path');


// 需要用 module.exports 导出语法，最终提供给 webpack 程序运行的
module.exports = {
    // 概念1：entry 入口文件配置
    entry: './src/index.js',
    // 概念2：output 输出配置
    output: {
        // 输出到哪个路径，需要绝对路径，path.resolve() 第二个参数直接写文件夹名称
        path: path.resolve(__dirname, 'dist'),
        // 输出文件的名称，名称可以随意，但是大部分情况下叫 bundle.js
        filename: 'bundle.js'
    },
    // 概念3：module 模块加载器配置
    module: {
        // 处理规则，数组格式，所有要处理文件，规则都写到 rules 里面
        rules: [
            // 对象里面配置处理 css 文件的 loader 如何加载处理
            {
                // test 用来匹配文件类型的 正则表达式 css 结尾的
                test: /\.css$/,
                // use 就是使用到哪些加载器，数组的加载器的书写顺序是固定的
                //  webpack 在使用加载器的时候，和书写顺序是反过来的
                use: [
                    'style-loader',  // 2. 将模块的导出作为样式添加到 DOM 中 的 styleloader
                    'css-loader'     // 1. 先运行处理 css 的 loader
                ]
            },
            // 对象里面配置处理 less 文件的 loader 如何加载处理
            {
                test: /\.less$/,
                use:[				
                    'style-loader',		// 3. 把 css 代码写入到网页中
                    'css-loader',		// 2. 读取 css 的代码
                    'less-loader'		// 1. 解释编译less代码处理成 css 代码
                ]	
            }
        ]
    },
};