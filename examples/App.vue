<template>
  <div id="app">
    <div id="nav">
      <editor v-model="description" :options="options" placeholder="请随意输入"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      description: '',
      options: {
        toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment', 'html']
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.description = 'writting...'
    }, 300)
    setInterval(() => {
      console.log('parent---', this.description)
    }, 3000)
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
