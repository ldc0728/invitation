import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  }
]

const router = new Router({
  mode: 'history',
  history: true,
  hashbang: false,
  base: process.env.BASE_URL,
  routes
})

export default router
