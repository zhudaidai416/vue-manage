<template>
  <div class="header">
    <div class="left">
      <i :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']" @click="handleMenu"></i>
      <!-- <el-button @click="handleMenu" icon="el-icon-menu" ></el-button> -->
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="{ path: item.path }">
          {{ item.title }}
        </el-breadcrumb-item>
        <!-- <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="{ path: item.path }"
          :style="{ '--menu-color': (item.name === $route.name) ? '#fff' : '#666' }">
          {{ item.title }}
        </el-breadcrumb-item> -->
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
      breadcrumbList: []
    }
  },
  created() {
    this.caleBreadcrumb() // 初始化渲染面包屑导航
  },
  watch: {
    $route: {
      immediate: true,  // 刷新页面立即监听
      handler() {
        this.caleBreadcrumb()
      },
    }
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    },
    caleBreadcrumb() {
      // console.log(this.$route.matched)
      const temp = []
      this.$route.matched.forEach((item) => {
        if (item.meta.title && item.path) {
          temp.push({ path: item.path, title: item.meta.title })
        }
      })
      // console.log('temp', temp)
      this.breadcrumbList = temp
    },
    handleCommand(command) {
      if (command === 'logout') {
        // console.log('退出')
        localStorage.removeItem('token')
        localStorage.removeItem('menuData')
        this.$router.push('/login')
      }
    },
  },
  computed: {
    ...mapState({
      isCollapse: state => state.tab.isCollapse
    })
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .left {
    display: flex;
    align-items: center;

    .el-icon-s-fold,
    .el-icon-s-unfold {
      font-size: 25px;
      margin-right: 20px;

      &:hover {
        color: #409EFF;
      }
    }

    /deep/.el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: normal;
        color: #333;

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