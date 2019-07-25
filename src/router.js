import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
import CreatePackage from './components/CreatePackage'
import Appointment from './components/Appointment'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/create',
      component: CreatePackage
    },
    {
      path: '/appointment',
      component: Appointment
    }
  ]
})
