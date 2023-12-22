<template>
  <div class="login-bg">
    <div class="login-content">
      <div class="left">
        <img src="../assets/images/login1.png" alt="">
      </div>
      <div class="right">
        <div class="right-content">
          <span>通用后台管理系统</span>
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item prop="username">
              <el-input class="username" placeholder="用户名" v-model="loginForm.username">
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input class="password" placeholder="密码" type="password" v-model="loginForm.password">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="login">立即登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Mock from "mockjs"
import { getMenu } from '../api'
export default {
  name: 'LoginView',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    login() {
      // const token = Mock.Random.guid()
      // Cookie.set('token', token)
      // localStorage.setItem('token', token)  

      // 表单校验通过
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          getMenu(this.loginForm).then(({ data }) => {
            console.log(data)
            if (data.code === 20000) {
              localStorage.setItem('token', data.data.token)

              // 获取菜单数据存入store
              this.$store.commit('setMenu', data.data.menu)
              this.$router.push('/home')
              
            } else {
              this.$message.error(data.data.message)
            }
          })
        }
      })
    },
  }
}
</script>

<style lang="less" scoped>
.login-bg {
  width: 100%;
  height: 100vh;
  background: url(@/assets/images/background.jpg) no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content {
  width: 65%;
  height: 65%;
  border-radius: 15px;
  display: flex;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgb(228, 228, 228);

  .left {
    width: 50%;
    background: url(@/assets/images/login2.png) no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    text-align: center;

    span {
      font-size: 28px;
      color: #A7ACFE;
    }

    .right-content {
      width: 65%;
    }

    .el-form {
      margin: 60px 0;

      /deep/ .el-form-item__content {
        margin: 0 !important;
      }

      /deep/ .username .el-input__inner {
        background: url(@/assets/images/phone.png) no-repeat 10px center;
        padding: 0px 35px;
      }

      /deep/ .password .el-input__inner {
        background: url(@/assets/images/password.png) no-repeat 10px center;
        padding: 0px 35px;
      }

      .el-button {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        background: linear-gradient(to right, #99CAFD, #999BCE);
        color: white;
      }
    }
  }
}
</style>