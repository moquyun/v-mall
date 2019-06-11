export default {
  state: {
    isLogin: ''
  },
  mutations: {
    changeIsLogin (state, data) {
      state.isLogin = data
    }
  },
  actions: {
    getLocalStorageIsLogin (context) {
      let isLogin = localStorage.getItem('isLogin')
      if (isLogin) {
        context.commit('changeIsLogin', isLogin)
      }
    }
  }
}
