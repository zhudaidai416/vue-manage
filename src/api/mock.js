import Mock from 'mockjs'
import home from './mockServeData/home'
import user from './mockServeData/user'
import permission from './mockServeData/permission'


// 定义 mock 请求拦截
// Mock.mock('/api/home/getData',function(){
//   // 拦截到请求后的处理逻辑
//   console.log('拦截')
// })


// 首页数据
Mock.mock('/api/home/getData', home.getStatisticalData)

// 用户管理数据
Mock.mock('/api/user/add', 'post', user.createUser)
Mock.mock('/api/user/edit', 'post', user.updateUser)
Mock.mock('/api/user/del', 'post', user.deleteUser)
Mock.mock(/api\/user\/getUser/, user.getUserList)

// 登录拦截
Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)