import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Authorization from '../views/Authorization.vue'
import Userpage from '../views/Userpage.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registration',
    name: 'Register',
    component: Authorization
  },
  {
    path: '/user/:name',
    name: 'Userpage',
    component: Userpage
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
