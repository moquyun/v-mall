import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let footer = () => import('./components/common/Footer')

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('./views/Home.vue'),
        footer
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('./views/Home'),
        footer
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('./views/Kind'),
        footer
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('./views/Cart'),
        footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('./views/User'),
        footer
      }
    },
    {
      path: '*', component: () => import('./views/Error')
    }
  ]
})
