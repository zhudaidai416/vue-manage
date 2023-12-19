<template>
  <div>
    <el-tag v-for="item in tags" :key="item.path" 
    :closable="item.name !== 'home'"
    :effect="$route.name === item.name ? 'dark' : 'plain'">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.breadcrumbList
    })
  }
}
</script>

<style lang="less" scoped></style>