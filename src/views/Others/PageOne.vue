<template>
  <div>
    <el-card style="margin-top: 20px;height: 460px;">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="课程">
        </el-table-column>
        <el-table-column prop="todayBuy" label="今日购买">
        </el-table-column>
        <el-table-column prop="monthBuy" label="本月购买">
        </el-table-column>
        <el-table-column prop="totalBuy" label="总购买">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
}
</script>

<style lang="less" scoped></style>