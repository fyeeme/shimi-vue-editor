# vColorPicker

> 基于Vue和Simditor的富文本编辑器


## 安装

``` bash
$ npm install shimi-vue-editor -S
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import Editor from 'shimi-vue-editor'
import 'shimi-editor/styles/simditor.css'
Vue.use(Editor)

```

在项目中使用 vcolorpicker

```js
<template>
   <editor v-model="model" :options="options" placeholder="占位符，不输入则不显示"></editor>
</template>
<script>
  export default {
    data () {
      return {
        model:'',
        //options 如果不需要重写 则不需要 editor 中去掉 options属性
        options: : {
            toolbarFloat: false,
            toolbar: ['title', 'bold', 'italic', 'color', '|', 'ol', 'ul', 'blockquote', 'table', '|', 'image', 'link', 'hr', 'html'],
            defaultImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAAA/klEQVQ4T62U223CQBBFjyuAfzrID+kAkCiAVABRCkg6CHRgKsAdhA5CB0AHKSHpIDpoV7LxA4P2/liWZs7Mzt7ZDBgCX8CUNPoFNkCeAUUokKdhX5qV+ST8AKzDNxH/wnxLAd8Bq9DcLHSXBP4MHEvHFS44Cdz5/gAD4A+wmP+dcJO89T4SuCh1bE4r/AMYA699yC0xjXC9/h0StoCFHlEN7qy8HEcSZfd61qN/AhY08ZZqcJObtlS4VotyJ9zALlXgbqdPQF+Z/NJx6RX4CXjvSw5x0XKCzoCMqAp8cie4KVzrCrWIY5zHh2uZAH6NGAnXHXsgRfcWcFO1cPEPEv9I6cGKnt4AAAAASUVORK5CYII=',
            pasteImage: true,
            upload: {
                fileKey: 'file', // 服务器端获取文件数据的参数名
                connectionCount: 3,
                leaveConfirm: '正在上传文件'
            }
        }
      }
    }
  }
</script>
```

## 特点
1. 基于自己的业务定制的编辑器，集成了 source code 模式
2. 上传使用了自己的业务，所以可能无法直接用来上传图片
3. 提供以 `npm` 的形式安装提供全局组件

## 选项
参见demo

## 参考链接
[https://www.cnblogs.com/wisewrong/p/10186611.html](https://www.cnblogs.com/wisewrong/p/10186611.html)

[http://www.rxshc.com/180.html](http://www.rxshc.com/180.html)

[https://github.com/zuley/vue-color-picker](https://github.com/zuley/vue-color-picker)