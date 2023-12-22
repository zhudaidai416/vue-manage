import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import { Button } from 'element-ui'
import router from './router'
import store from './store'
import './api/mock'


Vue.config.productionTip = false
Vue.use(ElementUI)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,  // 4、创建和挂载根实例
  store,
  render: h => h(App),
  created() {
    store.commit('dynamicRoute', router)
  },
}).$mount('#app')
