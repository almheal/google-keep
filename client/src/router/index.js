import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'default', auth: true },
    component: () => import('../views/Home'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'empty', auth: false },
    component: () => import('../views/Register'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'empty', auth: false },
    component: () => import('../views/Login'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(async (to, from, next) => {
  let token = localStorage.getItem('app_token')
  if (token && to.meta.auth) {
    const response = await store.dispatch('user/auth')
    if (response.status === 403) {
      localStorage.setItem('app_token', '')
      next('/login')
    } else {
      next()
    }
  } else if (to.meta.auth && !token) {
    next('/login')
  } else if (
    (token && to.path === '/login') ||
    (token && to.path === '/register')
  ) {
    next('/')
  } else {
    next()
  }
})

export default router
