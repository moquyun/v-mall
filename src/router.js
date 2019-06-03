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
      path: '*', component: () => import('./views/Error')
    }
  ]
})
