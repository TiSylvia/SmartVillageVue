// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js'
import * as echarts from 'echarts'


Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.prototype.$echarts = echarts

// 设置反向代理，前端请求默认发送到 http://localhost:8081/smartvillage
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8081'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
      if (store.state.user.uname) {
        next()
      } else {
        next({
          path: 'login',
          query: {redirect: to.fullPath}
        })
      }
      console.log(store)
    } else {
      next()
    }
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
