import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              meta: { title: '首页', icon: 's-home' },
              url: 'Home.vue'
            },
            {
              path: '/mall',
              name: 'mall',
              meta: { title: '商品管理', icon: 'shopping-bag-2' },
              url: 'Mall.vue'
            },
            {
              path: '/echarts',
              name: 'echarts',
              meta: { title: 'Echarts', icon: 'data-line' },
              children: [
                {
                  path: '/echarts/page1',
                  name: 'echarts/page1',
                  meta: { title: '图表1' },
                  url: 'Echarts/EchartsOne.vue'
                },
                {
                  path: '/echarts/page2',
                  name: 'echarts/epage2',
                  meta: { title: '图表2' },
                  url: 'Echarts/EchartsTwo.vue'
                }
              ]
            },
            {
              path: '/user',
              name: 'user',
              meta: { title: '用户管理', icon: 'user' },
              url: 'User.vue'
            },
            {
              path: '/others',
              name: 'others',
              meta: { title: '其他', icon: 'cloudy' },
              children: [
                {
                  path: '/others/page1',
                  name: 'others/page1',
                  meta: { title: '页面1' },
                  url: 'Others/PageOne.vue'
                },
                {
                  path: '/others/page2',
                  name: 'others/page2',
                  meta: { title: '页面2' },
                  url: 'Others/PageTwo.vue'
                }
              ]
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              meta: { title: '首页', icon: 's-home' },
              url: 'Home.vue'
            },
            {
              path: '/mall',
              name: 'mall',
              meta: { title: '商品管理', icon: 'video-play' },
              url: 'Mall.vue'
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }
  }
}