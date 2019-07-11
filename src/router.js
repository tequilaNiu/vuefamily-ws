import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/user',
    name: 'user',
    component: () => import('./views/User.vue')
  }, {
    path: '/user/basic',
    name: 'userBasic',
    component: () => import('./views/UserBasic.vue')
  }, {
    path: '/order',
    name: 'order',
    component: () => import('./views/Order.vue')
  }]
})