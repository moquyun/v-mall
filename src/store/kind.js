import axios from 'axios'
export default {
  state: {
    kindList: [],
    catInfo: []
  },
  mutations: {
    changeKindList (state, data) {
      state.kindList = data
    },
    changeCatInfo (state, data) {
      state.catInfo = data
    }
  },
  getters: {
    kindTabs: state => {
      if (state.kindList.data) {
        return state.kindList.data.map(kitem => ({
          label: kitem.cat_name,
          value: kitem.cat_id
        }))
      }
    }
  },
  actions: {
    getKindList (context) {
      axios.get('/data/kind.json').then(
        res => {
          context.commit('changeKindList', res.data)
        }
      ).catch(
        err => console.log(err)
      )
    },
    getCatInfo (context, goodid) {
      console.log('goods', goodid)
      axios.get('/data/cat/' + goodid + '.json').then(
        res => {
          context.commit('changeCatInfo', res.data.data)
        }
      )
    }
  }
}
