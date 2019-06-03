<template>
  <cube-tab-bar class="footer"
    v-model="selectedLabelDefault"
    :data="tabs"
    @click="clickHandler"
    @change="changeHandler">
  </cube-tab-bar>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      selectedLabelDefault: 'Vip',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-like'
      }, {
        label: '购物车',
        icon: 'cubeic-vip'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      switch (label) {
        case '首页':
          this.$router.push('/')
          break
        case '分类':
          this.$router.push('/kind')
          break
        case '购物车':
          this.$router.push('/cart')
          break
        case '我的':
          this.$router.push('/user')
          break
        default:
          console.log(111)
      }
    },
    changeHandler (label) {
    }
  }
}

</script>

<style lang="scss">
.footer{
  height:.6rem !important;
  background-color: #fff !important;
  box-shadow: 0 0 1px #dbdbdb;
  i{
    font-size: .24rem;
  }
}
</style>
