# window-onresize

解决项目中多处使用window.onresize事件覆盖问题

## Installation && 安装

```
npm i window-onresize
```

## Usage && 使用

```
// main.js
import WindowOnResize from 'window-onresize'
Vue.prototype.WindowOnResize = WindowOnResize;

// 一定要是具名函数
const muFunc = ()=>{
    // ...
}

// 添加绑定事件
this.WindowOnResize.add(muFunc);

// 移除绑定事件
this.WindowOnResize.remove(muFunc);
```
