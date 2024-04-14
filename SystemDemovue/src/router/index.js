import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/home/HelloWorld'
import Login from "../components/Login"
import Home from '../components/Home'
import OfficeIndex from "../components/office/OfficeIndex";

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
      path: '/home',
      name: 'Home',
      component: Home,
      // home页面并不需要被访问
      redirect: '/hollowed',
      children: [
        {
          path: '/hollowed',
          name: 'HelloWorld',
          component: HelloWorld,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/office',
          name: 'Office',
          component: OfficeIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
  ]
})
