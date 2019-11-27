import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/14slot',
    name: '14slot',
    component: () => import('../views/14_slot/14_slot.vue')

  },
  {
    path: '/15dynamic',
    name: '15dynamic',
    component: () => import('../views/15_components-dynamic-async/15_components-dynamic-async.vue')

  }

]

const router = new VueRouter({
  routes
})

export default router
