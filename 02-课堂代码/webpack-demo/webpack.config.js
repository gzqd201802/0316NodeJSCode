// 按需导入 path 模块
const path = require('path');

// 导入生成 css 文件的插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// 导入生成 html 文件的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 导入用来清理 dist 目录的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 导出给 webpack 运行的配置对象
module.exports = {
    // 概念一：入口
    entry: './src/index.js',
    // 概念二：模块处理
    module: {
        // 规则列表
        rules: [
            // 图片文件处理规则
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
    // 概念三：插件
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin("./style/styles.css"),
        new HtmlWebpackPlugin({
            title: '改标题',
            minify: true,
        })
    ],
    // 概念四：输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/bundle.js'
    },
};