<template>
  <div class="tag">
    <el-tag v-for="(item, index) in tags" :key="item.path" :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'" @click="changePage(item)" @close="closePage(item, index)"
      size="small">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.selectMenuList
    })
  },
  methods: {
    // 点击 tag 跳转路由
    changePage(item) {
      // this.$router.push({ name: item.name })
      this.$router.push(item.path)
    },
    ...mapMutations(['closeTag']),
    // 删除 tag
    closePage(item, index) {
      this.closeTag(item)
      // 或者 this.$store.state.tab.selectMenuList.splice(index,1)

      // 删除之后的跳转逻辑
      const length = this.tags.length
      if (item.name !== this.$route.name) {
        return
      }
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name
        })
      } else {
        this.$router.push({
          name: this.tags[index].name
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tag {
  padding: 20px;

  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>