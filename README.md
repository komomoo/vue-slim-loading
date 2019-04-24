# vue-slim-loading

> 开箱即用的 vue 加载组件

## 🐠 示例&文档

[Demo](https://wannaxiao.github.io/vue-slim-loading/demo/dist/)

[Demo 源码](https://github.com/wannaxiao/vue-slim-loading/blob/master/demo/App.vue)

## 🚀 快速开始

1.  安装 vue-slim-loading

```bash
yarn add vue-slim-loading # 或 npm i -S vue-slim-loading
```

2.  引入 vue-slim-loading

```js
// *.vue 中
import SlimLoading from 'vue-slim-loading'
export default {
  /* ... */
  components: {
    SlimLoading,
  },
  /* ... */
}
```

3.  使用它，请参考[Demo 源码](https://github.com/wannaxiao/vue-slim-loading/blob/master/demo/App.vue)
```html
  <SlimLoading :show.sync="show">
    <!-- 这里是一个插槽，可以放置任何元素 -->
  </SlimLoading>
```

## 🔌 API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | .sync 是否显示 | Boolean | false |
| hideOnMaskClick | 点击遮罩是否关闭弹窗 | Boolean | false |
| forceRenderOnShow | 显示的时候是否重新渲染 | Boolean | false |
| maskTransition | 遮罩动画 | String | slim-fade |
| popupTransition | 弹窗动画，内置 'slim-scale', 'slim-zoom', 'slim-fade-in-bottom', 'slim-slide-in-bottom' | String | slim-scale |
| maskClass | 遮罩的样式类 | Array | null |
| popupClass | 弹窗的样式类 | Array | null |
| maskStyle | 遮罩的样式 | Object | null |
| popupStyle | 弹窗的样式 | Object | null |
| popupPosition | 弹窗的位置，可选 'center', 'top', 'bottom' | String | center |
| preventMaskTouchmove | 阻止遮罩 touchmove 事件，阻止移动端滚动穿透 | Boolean | true |
| preventPopupTouchmove | 阻止弹窗 touchmove 事件，阻止移动端滚动穿透（同时会导致弹窗区域无法滚动） | Boolean | true |
| preventBodyScroll | 阻止 body 滚动，以间接的阻止滚动穿透（不会影响弹窗区域滚动）。开启此选项，关闭 preventPopupTouchmove，可达到弹窗区域可滚动，同时阻止滚动穿透的效果 | Boolean | false |

<br>
<br>
😉😘 如果它对你有所帮助，可以点一下 <b>⭐️<a href="#">Star</a></b> ~

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, momoko
