import axios from 'axios'
export default {
  state: {
    kindList: []
  },
  mutations: {
    changeKindList (state, data) {
      state.kindList = data
    }
  },
  actions: {
    getKindList (context) {
      axios.get('/data/kind.json').then(
        res => {
          // console.log(res.data)
          context.commit('changeKindList', res.data)
        }
      ).catch(
        err => console.log(err)
      )
    }
  }
}
