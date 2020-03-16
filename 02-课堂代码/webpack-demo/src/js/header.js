
// 需要打包 css 文件，就需要把文件导入
import './style/header.css';

// 创建 div
const div = document.createElement('div');

// 写入内容
div.innerHTML = `
    <div class="header">盒子</div>
`;

// 追加到页面
document.body.appendChild(div);

