<template>
  <div>
    <el-card style="margin-top: 20px;">
      <el-form :inline="true" :model="searchForm" size="mini">
        <el-form-item label="订单编号">
          <el-input v-model="searchForm.order_id"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="searchForm.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button icon="el-icon-refresh">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="margin-top: 20px;height: 100%;">
      <div class="icon">
        <i class="el-icon-search icon-item"></i>
        <i class="el-icon-refresh icon-item"></i>
      </div>
      <el-table :data="tableData" style="width: 100%;" size="small" stripe border
        :header-cell-style="{ background: '#F8F8F9' }">
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column prop="id" label="序号" width="55" align="center">
        </el-table-column>
        <el-table-column prop="order_id" label="订单编号" width="140" align="center">
          <template slot-scope="scope">
            <span class="one-line">
              {{ scope.row.order_id }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="username" label="用户名" align="center">
        </el-table-column>
        <el-table-column prop="total_score" label="综合评分" align="center">
        </el-table-column>
        <el-table-column prop="number" label="游玩人数" align="center">
        </el-table-column>
        <el-table-column prop="time" label="评价时间" align="center">
        </el-table-column>
        <el-table-column prop="content" label="评价内容" align="center">
        </el-table-column>
        <el-table-column prop="status" label="审核状态" align="center">
          <template slot-scope="scope">
            <span :class="scope.row.status | filterStatusColor">
              {{ scope.row.status | filterStatus }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <i class="el-icon-view" @click="detail(scope.row)">
              <span class="text-blue">{{ scope.row.status !== 1 ? '详情' : '审核' }}</span>
            </i>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="total, sizes, prev, pager, next, jumper" :page-sizes="[5, 10, 20]" :page-size="5"
        :total="tableData.length" background>
      </el-pagination>
    </el-card>
    <!-- 弹框 -->
    <el-dialog title="详情" :visible.sync="dialogVisible" width="65%">
      <div class="content">
        <div class="left">
          <div class="item">
            <span>用户名：</span><span>{{ deltailData.username }}</span>
          </div>
          <div class="item">
            <span>评价时间：</span><span>{{ deltailData.time }}</span>
          </div>
          <div class="item">
            <span>综合评分：</span><span>{{ deltailData.total_score }}</span>
          </div>
          <div class="item">
            <span>行程安排评分：</span><span>{{ deltailData.trip_score }}</span>
          </div>
          <div class="item">
            <span>酒店住宿评分：</span><span>{{ deltailData.hotel_score }}</span>
          </div>
          <div class="item">
            <span>司导服务评分：</span><span>{{ deltailData.director_score }}</span>
          </div>
          <div class="item">
            <span>订单编号：</span><span>{{ deltailData.order_id }}</span>
          </div>
          <div class="item">
            <span>评价商品：</span><span>{{ deltailData.username }}</span>
          </div>
        </div>
        <div class="right">
          <div class="item">
            <span>评价内容：</span><span>{{ deltailData.content }}</span>
          </div>
          <div class="item">
            <span>图片：</span>
            <el-image style="width: 100px; height: 100px" v-for="(item, index) in deltailData.img" :key="index" :src="item"
              fit="fill"></el-image>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { tableData } from '../../utils/data'
export default {
  data() {
    return {
      searchForm: {
        order_id: '',
        username: ''
      },
      tableData: tableData,
      dialogVisible: false,
      deltailData: {}
    }
  },
  filters: {
    filterStatus(val) {
      switch (val) {
        case 0:
          return '通过'
        case 1:
          return '审核'
        case 2:
          return '不通过'
      }
    },
    filterStatusColor(val) {
      switch (val) {
        case 0:
          return 'status-green'
        case 1:
          return 'status-yellow'
        case 2:
          return 'status-red'
      }
    }
  },
  methods: {
    detail(row) {
      console.log('row:', row)
      this.dialogVisible = true
      this.deltailData = JSON.parse(JSON.stringify(row))
    }
  }
}
</script>

<style lang="less" scoped>
.el-form {
  .el-form-item {
    margin-right: 40px;
    margin-bottom: 0;
  }
}

.icon {
  text-align: right;
  margin-bottom: 20px;

  .icon-item {
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #DCDFE6;
    border-radius: 50%;
    margin-left: 10px;
  }

}

.el-table {

  .one-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .status-red {
    color: red;
  }

  .status-yellow {
    color: orange;
  }

  .status-green {
    color: green;
  }

  .text-blue {
    margin: 0 5px;
    color: #4597EB;
  }
}

.el-pagination {
  margin-top: 20px;
  text-align: right;
}

/deep/.el-dialog {
  border-radius: 10px;
}

/deep/.el-dialog__header {
  padding: 15px;
  background-color: #4597EB;
  border-radius: 10px 10px 0 0;

  .el-dialog__title {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }

  .el-dialog__headerbtn .el-dialog__close {
    color: #fff;
  }
}

/deep/.el-dialog__body {
  padding: 20px 25px 0 25px;

  .content {
    padding: 10px 20px;
    background-color: #F1F2F5;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: space-between;

    .left {
      width: 40%;
      padding: 10px 15px;
      background-color: #fff;
      border-radius: 5px;
    }

    .right {
      width: 50%;
      padding: 10px 15px;
      background-color: #fff;
      border-radius: 5px;

      .el-image {
        margin-right: 20px;
        vertical-align: text-top;
      }
    }

    .item {
      margin-bottom: 20px;
      span:nth-of-type(1) {
        color: #A5A5A5;
      }
    }
  }
}

/deep/.el-dialog__footer {
  padding: 0 15px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border-radius: 0 0 10px 10px;
  background-color: #F8F7F7;

  .el-button {
    width: 130px;
  }
}
</style>