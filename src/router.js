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
      },
      children: [
        {
          path: 'login',
          component: () => import('./views/user/Login')
        },
        {
          path: 'nologin',
          component: () => import('./views/user/NoLogin')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('./views/Login')
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: () => import('./views/Register')
      }
    },
    {
      path: '/loginMobile',
      name: 'loginMobile',
      components: {
        default: () => import('./views/LoginMobile')
      }
    },
    {
      path: '/forget',
      name: 'forget',
      components: {
        default: () => import('./views/Forget')
      }
    },
    {
      path: '*', component: () => import('./views/Error')
    }
  ]
})
