<template>
  <div class="tag">
    <el-tag v-for="(item, index) in tags" :key="item.path" :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'" @click="changePage(item)" @close="closePage(item, index)"
      size="small">
      {{ item.meta.title }}
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
  padding: 10px 20px 0 20px;
  border-bottom: 1px solid #eee;

  .el-tag {
    height: 30px;
    line-height: 30px;
    margin-right: 10px;
    border-radius: 5px 5px 0 0;
    border-bottom: none;
    cursor: pointer;
  }
}
</style>