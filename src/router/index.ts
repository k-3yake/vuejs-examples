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
    component: () => import('../views/guide/14_slot/14_slot.vue')

  },
  {
    path: '/15dynamic',
    name: '15dynamic',
    component: () => import('../views/guide/15_components-dynamic-async/15_components-dynamic-async.vue')

  },
  {
    path: '/16edge-case',
    name: '16edge-case',
    component: () => import('../views/guide/16_components-edge-case/EdgeCaseApp.vue')
  },
  {
    path: '/17transition',
    name: '17transition',
    component: () => import('../views/guide/17_transition/TransitionApp.vue')
  },
  {
    path: '/18mixin',
    name: '18mixin',
    component: () => import('../views/guide/18_mixin/MixInApp.vue')
  },
  {
    path: '/19customDirective',
    name: '19customDirective',
    component: () => import('../views/guide/19_custom-directive/CustomDirectiveApp.vue')
  },
  {
    path: '/20renderFunction',
    name: '20renderFunction',
    component: () => import('../views/guide/20_render-function/RenderFunctionApp.vue')
  },
  {
    path: '/MarkDown',
    name: 'MarkDown',
    component: () => import('../views/examples/markdown/MarkDownApp.vue')
  },
  {
    path: '/Commits',
    name: 'Commits',
    component: () => import('../views/examples/commits/CommitsApp.vue')
  },
  {
    path: '/GridComponent',
    name: 'GridComponent',
    component: () => import('../views/examples/grid-component/HeroesGridApp.vue')
  },
  {
    path: '/TreeView',
    name: 'TreeView',
    component: () => import('../views/examples/tree/TreeViewApp.vue')
  },
  {
    path: '/SvgGraph',
    name: 'SvgGraph',
    component: () => import('../views/examples/svg/SvgGraphApp.vue')
  },
  {
    path: '/ModalComponent',
    name: 'ModalComponent',
    component: () => import('../views/examples/modal/ModalApp.vue')
  },
  {
    path: '/Wrapper',
    name: 'Wrapper',
    component: () => import('../views/examples/wrapper/WrapperApp.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
