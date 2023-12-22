<template>
  <div class="user">
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <!-- 新增用户的表单信息 -->
      <el-form ref="form" :model="form" :inline="true" label-width="80px" :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker v-model="form.birth" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>

    <div class="header">
      <el-button type="primary" @click="add">+ 新增</el-button>
      <el-form :inline="true" :model="userForm">
        <el-form-item>
          <el-input v-model="userForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 表格数据 -->
    <el-table :data="tableData" height="90%" style="width: 100%" stripe>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.sex === 1 ? '男' : '女' }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120">
      </el-table-column>
      <el-table-column prop="birth" label="出生日期" width="150">
      </el-table-column>
      <el-table-column prop="addr" label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="total, sizes, prev, pager, next, jumper" :page-sizes="[5, 10, 20]" :page-size="pageData.limit"
      :total="total" @size-change="sizeChange" @current-change="currentPage">
    </el-pagination>
  </div>
</template>

<script>
import { getUser, addUser, editUser, delUser } from '../api'
export default {
  name: 'UserView',
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名' },
        ],
        age: [
          { required: true, message: '请输入年龄' },
        ],
        sex: [
          { required: true, message: '请选择性别' },
        ],
        birth: [
          { required: true, message: '请选择出生日期' },
        ],
        addr: [
          { required: true, message: '请输入地址' },
        ],
      },
      tableData: [],
      dialogType: 0,  // 0表示新增，1表示编辑
      dialogTitle: '新增用户',
      total: 0,  // 列表总条数
      pageData: {
        page: 1,
        limit: 5
      },
      userForm: {
        name: ''
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    // 获取列表数据
    getList() {
      getUser({ ...this.userForm, ...this.pageData }).then(({ data }) => {
        // console.log(data)
        this.tableData = data.list
        this.total = data.count || 0
      })
    },
    add() {
      this.dialogType = 0
      this.dialogTitle = '新增用户'
      this.dialogVisible = true
    },
    submit() {
      // 提交表单
      this.$refs.form.validate((valid) => {
        console.log(valid)
        if (valid) {
          // 表单通过校验之后的处理
          console.log('表单数据', this.form)
          if (this.dialogType === 0) {
            addUser(this.form).then(() => {
              // 重新获取列表接口
              this.$message.success('提交成功！')
              this.getList()
            })
          } else {
            editUser(this.form).then(() => {
              this.getList()
            })
          }

        } else {
          this.$message.error('提交失败！');
        }
      })
      this.handleClose()
    },
    cancel() {
      this.handleClose()
    },
    // 弹窗关闭时表单重置
    handleClose() {
      this.dialogVisible = false
      this.$refs.form.resetFields()
    },
    edit(row) {
      // console.log(row)
      this.dialogType = 1
      this.dialogTitle = '更新用户'
      this.dialogVisible = true
      // 注意需要对当前行数据进行深拷贝
      this.form = JSON.parse(JSON.stringify(row))
    },
    del(row) {
      this.$confirm('是否删除该用户', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delUser({ id: row.id }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getList()
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 选择页码
    currentPage(val) {
      this.pageData.page = val
      this.getList()
    },
    // 每页条数
    sizeChange(val) {
      this.pageData.limit = val
      this.getList()
    },
    // 搜索
    search() {
      this.getList()
    }
  },
}
</script>

<style lang="less" scoped>
.user {
  height: 90%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  .el-pagination {
    margin-top: 15px;
    text-align: right;
  }
}
</style>