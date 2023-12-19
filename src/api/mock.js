import Mock from 'mockjs'
import homeApi from './mockServeData/home'

// 定义 mock 请求拦截
// Mock.mock('/api/home/getData',function(){
//   // 拦截到请求后的处理逻辑
//   console.log('拦截')
// })
Mock.mock('/api/home/getData',homeApi.getStatisticalData)