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
      //   path: '/home',
      //   name: 'home',
      //   meta: { title: '首页', icon: 's-home' },
      //   component: () => import('../views/Home.vue')
      // },
      // {
      //   path: '/user',
      //   name: 'user',
      //   meta: { title: '用户管理', icon: 'user' },
      //   component: () => import('../views/User.vue')
      // },
      // {
      //   path: '/echarts',
      //   name: 'echarts',
      //   meta: { title: 'Echarts', icon: 'location' },
      //   children: [
      //     {
      //       path: '/echarts/page1',
      //       name: 'echarts/page1',
      //       meta: { title: '图表1' },
      //       component: () => import('../views/Echarts/EchartsOne.vue')
      //     },
      //     {
      //       path: '/echarts/page2',
      //       name: 'echarts/page2',
      //       meta: { title: '图表2' },
      //       component: () => import('../views/Echarts/EchartsTwo.vue')
      //     }
      //   ]
      // },
      // {
      //   path: 'mall',
      //   name: 'mall',
      //   meta: { title: '商品管理', icon: 'video-play' },
      //   component: () => import('../views/Mall.vue')
      // },
      // {
      //   path: '/others',
      //   name: 'others',
      //   meta: { title: '其他', icon: 'location' },
      //   children: [
      //     {
      //       path: '/others/page1',
      //       name: 'others/page1',
      //       meta: { title: '页面1' },
      //       component: () => import('../views/Others/PageOne.vue')
      //     },
      //     {
      //       path: '/others/page2',
      //       name: 'others/page2',
      //       meta: { title: '页面2' },
      //       component: () => import('../views/Others/PageTwo.vue')
      //     }
      //   ]
      // }
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

