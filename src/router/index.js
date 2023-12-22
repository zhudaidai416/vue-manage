import Vue from 'vue'
import VueRouter from 'vue-router'
// 1、定义 (路由) 组件
// import Home from '../views/Home.vue'
// import User from '../views/User.vue'

Vue.use(VueRouter)

// 2、定义路由
const routes = [
  // 主路由
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Main.vue'),
    redirect: '/home',  // 重定向
    children: [
      // 子路由
      // {
      //   path: 'home',
      //   name: 'home',
      //   component: Home
      // },
      // {
      //   path: 'user',
      //   name: 'user',
      //   component: User
      // },
      // {
      //   path: 'mall',
      //   name: 'mall',
      //   component: () => import('../views/Mall.vue')
      // },
      // {
      //   path: 'page1',
      //   name: 'page1',
      //   component: () => import('../views/PageOne.vue')
      // },
      // {
      //   path: 'page2',
      //   name: 'page2',
      //   component: () => import('../views/PageTwo.vue')
      // },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  }
]


// 3、创建 router 实例
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router

