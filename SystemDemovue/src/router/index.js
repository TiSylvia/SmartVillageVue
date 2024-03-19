import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/home/HelloWorld'
import Login from "../components/Login";


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/hollowed',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requireAuth: true
      }
    }
  ]
})
