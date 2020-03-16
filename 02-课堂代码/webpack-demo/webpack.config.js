// 按需导入 path 模块
const path = require('path');
// 导入插件，作用：从 bundle.js 中提取文本（CSS）到单独的文件
// 注意事项：安装的时候需要安装最新版 extract-text-webpack-plugin
// !!如果翻译报错信息的时候出现某个废弃的关键词，我们npm install 包的时候加个 @next 使用最新版
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // 入口
    entry: './src/index.js',
    // 输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 模块处理
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            outputPath: "images",
                            publicPath: "./images/",   		// 引入图片时会在路径前面加上该选项
                        }
                    }
                ]
            },
            // 通过插件处理 css 文件
            // 后面的规则不是覆盖前面的，而是出现了冲突
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
            // less 文件也通过插件抽离出去
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({	// 提取less
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
        ]
    },
    // 插件列表
    plugins: [
        new ExtractTextPlugin("./style/styles.css"),
    ]
};