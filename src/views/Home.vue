<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div class="user">
            <img src="../assets/images/user.png" alt="">
            <div class="userinfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间：<span>2023-12-19</span></p>
            <p>上次登录地点：<span>成都</span></p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px;height: 460px;">
          <el-table :data="tableData" style="width: 100%">
            <!-- <el-table-column prop="name" label="课程">
            </el-table-column>
            <el-table-column prop="todayBuy" label="今日购买">
            </el-table-column>
            <el-table-column prop="monthBuy" label="本月购买">
            </el-table-column>
            <el-table-column prop="totalBuy" label="总购买">
            </el-table-column> -->
            <el-table-column v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val" />
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="num">
          <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
            <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
            <div class="detail">
              <p class="price">￥{{ item.value }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <!-- 折线图 -->
        <el-card style="height:280px">
          <div ref="line" class="line"></div>
        </el-card>
        <div class="graph">
          <el-card>
            <div ref="bar" class="bar"></div>
          </el-card>
          <el-card>
            <div ref="pie" class="pie"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from '../api'
import * as echarts from 'echarts'
export default {
  name: 'HomeView',
  data() {
    return {
      // 表头数据
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      tableData: [],  // 表格数据
      countData: [],  // 列表图数据
    }
  },
  mounted() {
    getData().then((data) => {
      console.log(data)
      // 解构数据
      const { tableData, countData, orderData, userData, videoData } = data.data.data
      this.tableData = tableData
      this.countData = countData

      // 折线图
      const line = echarts.init(this.$refs.line)
      const xAxis = Object.keys(orderData.data[0])
      var lineOption = {
        xAxis: {
          data: orderData.date
        },
        yAxis: {},
        legend: {
          data: xAxis
        },
        series: []
      }
      xAxis.forEach(key => {
        lineOption.series.push({
          name: key,
          data: orderData.data.map(item => item[key]),
          type: 'line'
        })
      })
      // console.log(lineOption)
      line.setOption(lineOption)

      // 柱状图
      const bar = echarts.init(this.$refs.bar)
      var barOption = {
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: userData.map(item => item.date),
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        series: [
          {
            name: '新增用户',
            type: 'bar',
            data: userData.map(item => item.new),
          },
          {
            name: '活跃用户',
            type: 'bar',
            data: userData.map(item => item.active),
          }
        ],
      }
      bar.setOption(barOption)

      // 饼图 
      const pie = echarts.init(this.$refs.pie)
      var pieOption = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [
          {
            data: videoData,
            type: 'pie'
          }
        ],
      }
      pie.setOption(pieOption)
    })
  },
}
</script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }

  .userinfo {

    .name {
      margin-bottom: 10px;
      font-size: 32px;
    }

    .access {
      color: #999999;
    }
  }
}

.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;

    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}

.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }

  .icon {
    width: 80px;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    text-align: center;
    color: #fff;
  }

  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;

    .price {
      height: 30px;
      line-height: 30px;
      font-size: 30px;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
}

.line {
  height: 280px;
}

.graph {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .el-card {
    width: 48%;
    height: 260px;
  }

  .bar,
  .pie {
    height: 240px;
  }
}
</style>