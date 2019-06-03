import axios from 'axios'
export default {
  state: {
    bannerList: [],
    navList: [],
    homeGoodsList: []
  },
  mutations: {
    changeBannerList (state, data) {
      state.bannerList = data
    },
    changeNavList (state, data) {
      state.navList = data
    },
    //
    changeChecked (state, data) {
      state.homeGoodsList = data
    }
  },
  actions: {
    bannerListAction (context) {
      axios.get('/data/banner.json').then(
        res => {
          // console.log(JSON.parse(res.data.data.data))
          let arr = JSON.parse(res.data.data.data)
          let bannerList = []
          arr[1].data.list.map(item => {
            bannerList.push({
              image: item.img
            })
          })
          context.commit('changeBannerList', bannerList)
          // nav
          // let navList = []
          // arr[2].data.list.map(item => {
          //   navList.push({
          //     image: item.img
          //   })
          // })
          context.commit('changeNavList', arr[2].data.list)
        }
      )
    },
    homeChecked (context) {
      axios.get('/data/checked.json').then(
        res => {
          context.commit('changeChecked', res.data.data)
          console.log(res.data.data)
        }
      )
    }
  }
}
