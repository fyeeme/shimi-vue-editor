import Vue from 'vue'
import App from './App.vue'
import Simditor from '../packages/index.js'

Vue.config.productionTip = false
Vue.use(Simditor)
new Vue({
  render: h => h(App)
}).$mount('#app')
