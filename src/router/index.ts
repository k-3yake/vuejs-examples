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
    path: '/14slot',
    name: '14slot',
    component: () => import('../views/14_slot/14_slot.vue')

  },
  {
    path: '/15dynamic',
    name: '15dynamic',
    component: () => import('../views/15_components-dynamic-async/15_components-dynamic-async.vue')

  },
  {
    path: '/16edge-case',
    name: '16edge-case',
    component: () => import('../views/16_components-edge-case/EdgeCaseApp.vue')
  },
  {
    path: '/17transition',
    name: '17transition',
    component: () => import('../views/17_transition/TransitionApp.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
