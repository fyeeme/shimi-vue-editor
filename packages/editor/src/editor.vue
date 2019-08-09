<template>
  <div class="shimi-editor">
    <textarea :id="randomId" :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
import Simditor from 'shimi-editor'
import 'shimi-editor/styles/simditor.css'

export default {
  name: 'Simditor',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  data () {
    return {
      editor: '',
      enableWatch: true,
      defaultOptions: {
        toolbarFloat: false,
        toolbar: ['title', 'bold', 'italic', 'color', '|', 'ol', 'ul', 'blockquote', 'table', '|', 'image', 'link', 'hr', 'html'],
        // toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'],
        defaultImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAAA/klEQVQ4T62U223CQBBFjyuAfzrID+kAkCiAVABRCkg6CHRgKsAdhA5CB0AHKSHpIDpoV7LxA4P2/liWZs7Mzt7ZDBgCX8CUNPoFNkCeAUUokKdhX5qV+ST8AKzDNxH/wnxLAd8Bq9DcLHSXBP4MHEvHFS44Cdz5/gAD4A+wmP+dcJO89T4SuCh1bE4r/AMYA699yC0xjXC9/h0StoCFHlEN7qy8HEcSZfd61qN/AhY08ZZqcJObtlS4VotyJ9zALlXgbqdPQF+Z/NJx6RX4CXjvSw5x0XKCzoCMqAp8cie4KVzrCrWIY5zHh2uZAH6NGAnXHXsgRfcWcFO1cPEPEv9I6cGKnt4AAAAASUVORK5CYII=',
        pasteImage: true,
        imageButton: 'upload',
        upload: {
          fileKey: 'file', // 服务器端获取文件数据的参数名
          connectionCount: 3,
          leaveConfirm: '正在上传文件'
        }
      }
    }
  },
  computed: {
    randomId () {
      return Math.random().toString(36).substr(2, 9) + '_' + Math.random().toString(36).substr(2, 9)
    }
  },
  watch: {
    value (val) {
      if (!this.editor.getValue()) {
        this.editor.setValue(val)
      }
    }
  },
  mounted () {
    this.editor = new Simditor(Object.assign({ textarea: document.getElementById(`${this.randomId}`) }, this.defaultOptions, this.options))

    this.editor.setValue(this.value)

    this.editor.on('valuechanged', (e, src) => {
      this.onChange(e, src)
    })
  },

  methods: {
    onChange (e, val) {
      this.$emit('input', this.editor.getValue())
    }
  }
}
</script>

<style lang="less">
 .shimi-editor{
   text-align: left;
 }
</style>
