<template>
  <el-form el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" label-position="left" class="login-container">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="name">
      <el-input v-model="loginForm.uname" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.upassword" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login('loginForm')">登录</el-button>
    </el-form-item>
  </el-form>

<!--  <el-card>-->
<!--    用户名:<input type="text" v-model="loginForm.uname" placeholder="请输入用户名"/>-->
<!--    <br><br>-->
<!--    密码： <input type="password" v-model="loginForm.upassword" placeholder="请输入密码"/>-->
<!--    <br><br>-->
<!--    <button v-on:click="login">登录</button>-->
<!--  </el-card>-->
  </template>

<script>
export default {
  name: "Login",
  data () {
    return {
      loginForm: {
        uname: '',
        upassword: ''
      },
      responseResult: [],
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (loginForm) {
      //TODO 登录框验证逻辑未完善
      this.$refs[loginForm].validate((valid) =>
      {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      //登录拦截
      var _this = this
      console.log(this.$store.state)
      this.$axios
        .post('/login', {
          uname: this.loginForm.uname,
          upassword: this.loginForm.upassword
        })
        .then(successResponse => {
          if (successResponse.status === 200) {
            _this.$store.commit('login', _this.loginForm)
            var path = this.$route.query.redirect
            this.$router.replace({path: path === '/' || path === undefined ? '/hollowed' : path})
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style>
#poster {
  /*background:url("../assets/eva.jpg") no-repeat;*/
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
}
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

