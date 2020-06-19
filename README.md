# window-onresize
解决项目中多处 window.onresize事件 覆盖问题
> 注: 使用本组件之后请不要再使用 window.onresize事件

问: window.addEventListener('resize', func);不会有覆盖问题为啥要用你的组件
> 本组件添加了异步执行 (其他优势暂时没有)

## Installation && 安装

```
npm i window-onresize
// or
yarn add window-onresize
```

## Usage && 使用

```
// main.js
import WindowOnResize from 'window-onresize'
// 这里以Vue项目做实例
Vue.prototype.WindowOnResize = WindowOnResize;

// 需要被监听的方法,一定要是具名函数,不然无法移除 (请注意函数内部this指向)
const muFunc = ()=>{
    // ...
}

// 添加绑定事件
this.WindowOnResize.add(muFunc);

// 移除绑定事件
this.WindowOnResize.remove(muFunc);
```

## 联系
如果你觉得写的有BUG或者需要改进请联系我 邮箱: ly6158@qq.com