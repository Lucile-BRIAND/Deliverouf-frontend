import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientLogInView from '../views/ClientLogInView.vue'
import ClientRegisterView from '../views/ClientRegisterView.vue'
import ClientAccountView from '../views/ClientAccountView.vue'
import ShopView from '../views/ShopView.vue'
import store from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: { guest: true },
    component: ClientLogInView
  },
  {
    path: '/register',
    name: 'register',
    meta: { guest: true },
    component: ClientRegisterView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: "/commande",
    name: "commande",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/ClientCommander.vue"),
  },
  {
    path: '/account',
    name: 'account',
    //meta: { requiresAuth: true },
    component: ClientAccountView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router

