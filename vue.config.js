const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  // 关闭 eslint 校验
  publicPath:'./'  // 打包统一配置路径
})
