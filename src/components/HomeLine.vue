<template>
  <div id="echarts1">

  </div>
</template>

<script>
import { getData } from '../api'
import * as echarts from 'echarts'
export default {
  data() {
    return {
      orderData: []
    }
  },
  mounted() {
    getData().then((data) => {
      // console.log(data)
      // 解构数据
      const { orderData } = data.data.data
      const xAxis = Object.keys(orderData.data[0])
      console.log(xAxis)
      const echarts1 = echarts.init(this.$refs.echarts1)
      var option = {

      }
      echarts1.setOption(option);
    })
  },
}
</script>

<style lang="less" scoped></style>