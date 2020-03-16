
// 需要打包 css 文件，就需要把文件导入
import './style/header.css';

// 加载 less 文件
import './style/slider.less';

// 把图片导入，文件的路径保存到 logo 变量中
import logo from './images/502.jpg';

// 测试完错误后，记得把代码删除掉，否则出错了代码无法往下运行
// // 导入 error.js 文件，返回的函数保存到 error 的常量中
// const error = require('./js/error');
// // 调用函数
// error();

console.log(logo);

// 创建 div
const div = document.createElement('div');

// 写入内容
div.innerHTML = `
    <div class="header">头部</div>
    <div class="slider">
        <p>轮播图222</p>
        <img src="${ logo }" />
    </div>
`;

// 追加到页面
document.body.appendChild(div);

