<template>
  <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
    <div v-for="item in menuData" :key="item.path">
      <el-menu-item @click="clickMenu(item)" :index="item.path + ''" v-if="!item.children">
        <i :class="`el-icon-${item.meta.icon}`"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      <el-submenu :index="item.path + ''" v-else>
        <template slot="title">
          <i :class="`el-icon-${item.meta.icon}`"></i>
          <span slot="title">{{ isCollapse ? '' : item.meta.title }}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
          <el-menu-item @click="clickMenu(subItem)" :index="subItem.path + ''">{{ subItem.meta.title }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </div>

  </el-menu>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 菜单跳转
    clickMenu(item) {
      // el-menu 封装好了router，此步骤可不写
      // 当页面的路由与跳转的路由不一致才允许跳转
      // this.$route：当前页面的路由，this.$router：路由实例
      // if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
      //   this.$router.push(item.path)
      // }
        console.log(item)
      this.$store.commit('selectMenu', item)
    }
  },
  computed: {
    // 没有子菜单
    // noChildren() {
    //   return this.menuData.filter(item => !item.children)
    // },
    // 有子菜单
    // hasChildren() {
    //   return this.menuData.filter(item => item.children)
    // },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    menuData() {
      return JSON.parse(localStorage.getItem('menuData')) || this.$store.state.tab.menuData
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100vh;
  border: none;

  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>