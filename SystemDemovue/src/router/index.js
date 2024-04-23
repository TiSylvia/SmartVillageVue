import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/home/HelloWorld'
import Users from '../components/home/Users'
import Login from "../components/Login"
import Home from '../components/Home'
import OfficeIndex from "../components/office/OfficeIndex";
import office_complaint_suggestion from "../components/office/suggestion/office_complaint_suggestion"
import system_fault_report from "../components/office/suggestion/system_fault_report"
import complaint_feedback from "../components/office/suggestion/complaint_feedback"
import complaint_details from "../components/office/suggestion/complaint_details"
import complaint_mine from "../components/office/suggestion/complaint_mine"
import complaint_details_mine from "../components/office/suggestion/complaint_details_mine"
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
        },
        {
          path: '/users',
          name: 'Users',
          component: Users,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/office-complaint-suggestion',
          name: 'office_complaint_suggestion',
          component: office_complaint_suggestion
        },
        {
          path: '/system-fault-report',
          name: 'system_fault_report',
          component: system_fault_report
        },
        {
          path: '/complaint-feedback',
          name: 'complaint_feedback',
          component: complaint_feedback
        },
        {
          path: '/complaint-details/:cid',
          name: 'complaint_details',
          component: complaint_details
        },
        {
          path: '/complaint-mine',
          name: 'complaint_mine',
          component: complaint_mine
        },
        {
          path: '/complaint-details-mine/:cid',
          name: 'complaint_details_mine',
          component: complaint_details_mine
        }
      ]
    }
  ]
})
