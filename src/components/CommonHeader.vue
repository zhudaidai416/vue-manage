<template>
  <div class="header">
    <div class="left">
      <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }"
          :style="{ '--menu-color': (item.name === $route.name) ? '#fff' : '#666' }">
          {{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img class="user" src="../assets/images/user.png" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'MallView',
  data() {
    return {

    }
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    },
    handleCommand(command) {
      if (command === 'logout') {
        // console.log('退出')
        localStorage.removeItem('token')
        localStorage.removeItem('menuData')
        this.$router.push('/login')
      }
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.selectMenuList
    })
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .left {
    display: flex;
    align-items: center;

    .el-button {
      margin-right: 20px;
    }

    /deep/.el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: normal;
        color: var(--menu-color) !important;

        // &.is-link {
        //   color: #666;
        // }
      }
    }
  }

  .right {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>