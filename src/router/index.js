import Vue from 'vue'
import VueRouter from 'vue-router'
// 1、定义 (路由) 组件
import Home from '../views/Home.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

// 2、定义路由
const routes = [
  // 主路由
  {
    path: '/',
    component: () => import('../views/Main.vue'),
    redirect: '/home',  // 重定向
    children: [
      // 子路由
      { path: 'home', name: 'home', component: Home },
      { path: 'user', name: 'user', component: User },
      { path: 'mall', name: 'mall', component: () => import('../views/Mall.vue') },
      { path: 'page1', name: 'page1', component: () => import('../views/PageOne.vue') },
      { path: 'page2', name: 'page2', component: () => import('../views/PageTwo.vue') },
    ],
  },

]

// 3、创建 router 实例
const router = new VueRouter({
  routes
})

// const originalPush = VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default router

