export default {
  state: {
    isCollapse: false,  // 控制菜单展开或收起
    breadcrumbList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home'
      }
    ]
  },
  mutations: {
    // 修改菜单展开或收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    // 更新面包屑数据
    selctMenu(state, val) {
      console.log(val)
      if (val.name !== 'home') {
        const index = state.breadcrumbList.findIndex(item => item.name === val.name)
        // 如果不存在
        if (index === -1) {
          state.breadcrumbList.push(val)
        }
      }
    }
  },
}