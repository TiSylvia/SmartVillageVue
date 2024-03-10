<template>
  <div>
    用户名:<input type="text" v-model="loginForm.uname" placeholder="请输入用户名"/>
    <br><br>
    密码： <input type="password" v-model="loginForm.upassword" placeholder="请输入密码"/>
    <br><br>
    <button v-on:click="login">登录</button>
  </div>
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
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/login', {
          uname: this.loginForm.uname,
          upassword: this.loginForm.upassword
        })
        .then(successResponse => {
          if (successResponse.status === 200) {
            this.$router.replace({path: '/hollowed'})
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style scoped>

</style>
