
// 需要打包 css 文件，就需要把文件导入
import './style/header.css';

// 加载 less 文件
import './style/slider.less';

// 把图片导入，文件的路径保存到 logo 变量中
import logo from './images/502.jpg';

console.log(logo);

// 创建 div
const div = document.createElement('div');

// 写入内容
div.innerHTML = `
    <div class="header">头部</div>
    <div class="slider">
        <p>轮播图</p>
        <img src="${ logo }" />
    </div>
`;

// 追加到页面
document.body.appendChild(div);

