import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {layout: 'default', auth: true},
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty', auth: false},
    component: () => import('../views/Login')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
