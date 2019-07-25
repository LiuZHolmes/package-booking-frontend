import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
import CreatePackage from './components/CreatePackage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/about',
      name: 'about',
      component: CreatePackage
    }
  ]
})
