import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { Button } from 'element-ui'
import router from './router'
import store from './store'
import './api/mock'


Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,  // 4、创建和挂载根实例
  store,
  render: h => h(App),
}).$mount('#app')
