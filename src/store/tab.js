export default {
  state: {
    isCollapse: false,  // 控制菜单展开或收起
    selectMenuList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home'
      }
    ],
    menuData: []
  },
  mutations: {
    // 修改菜单展开或收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    // 更新面包屑数据
    selectMenu(state, val) {
      // console.log(val)
      if (val.name !== 'home') {
        const index = state.selectMenuList.findIndex(item => item.name === val.name)
        // 如果不存在
        if (index === -1) {
          state.selectMenuList.push(val)
        }
      }
    },
    // 关闭 tag 标签
    closeTag(state, val) {
      const index = state.selectMenuList.findIndex(item => item.name === val.name)
      state.selectMenuList.splice(index, 1)
    },
    // 设置 menu 数据
    setMenu(state, val) {
      state.menuData = val
      localStorage.setItem('menuData', JSON.stringify(val))
    },
    // 动态路由
    dynamicRoute(state, router) {
      if (!localStorage.getItem('menuData')) return
      const menuData = JSON.parse(localStorage.getItem('menuData'))
      state.menuData = menuData

      // 路由数据处理
      const menuArray = []
      menuData.forEach(item => {
        if (item.children) {
          item.children = item.children.map((i) => {
            i.component = () => import(`../views/${i.url}`)
            return i
          })
          menuArray.push(...item.children)
        } else {
          item.component = () => import(`../views/${item.url}`)
          menuArray.push(item)
        }
        console.log('menuArray',menuArray)
      })

      // 路由动态添加
      menuArray.forEach(item => {
        router.addRoute('main', item)
      })
    }
  },
}