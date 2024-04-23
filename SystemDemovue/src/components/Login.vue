<template>
  <el-form :model="loginForm" ref="loginForm" label-width="0px" label-position="left" class="login-container">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="name">
      <el-input v-model="loginForm.uname" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.upassword" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-radio v-model="loginForm.role" label="3">群众</el-radio>
      <el-radio v-model="loginForm.role" label="2">办公人员</el-radio>
      <el-radio v-model="loginForm.role" label="1">管理员</el-radio>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        uname: '',
        upassword: '',
        role: '' // 新增角色选择字段
      },
      responseResult: []
    }
  },
  methods: {
    login() {
      var _this = this;
      this.$axios
        .post('/login/login', {
          uname: this.loginForm.uname,
          upassword: this.loginForm.upassword,
          roleselect: this.loginForm.role // 将角色选择信息发送给后端
        })
        .then(successResponse => {
          if (successResponse.status === 200) {
            const responseData = successResponse.data;
            // 假设后端返回的数据结构包含 uid 和 photo 字段
            const { uid, photo } = responseData;
            // 构造用户对象
            const user = {
              uname: _this.loginForm.uname,
              upassword: _this.loginForm.upassword,
              uid,
              photo,
              roleselect:this.loginForm.role
            };
            _this.$store.commit('login', user);
            var path = this.$route.query.redirect;
            this.$router.replace({ path: path === '/' || path === undefined ? '/hollowed' : path });
          }
        })
        .catch(failResponse => {
          console.error(failResponse);
        });
    }
  }
};
</script>

<style scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>
