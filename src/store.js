import Vue from 'vue'
import Vuex from 'vuex'
import home from './store/home'
import user from './store/user'
import kind from './store/kind'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    user,
    kind
  }
})
