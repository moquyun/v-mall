<template>
  <div class="container">
    user
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'User',
  data () {
    return {
      // isLogin: 'ok'
    }
  },
  computed: {
    ...mapState({
      isLogin: ({ user }) => user.isLogin
    })
  },
  methods: {
    ...mapActions({
      getLocalStorageIsLogin: 'getLocalStorageIsLogin'
    })
  },
  mounted () {
    this.getLocalStorageIsLogin()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.name === 'user') {
        if (vm.isLogin === 'ok') {
          // vm.$router.push('/user/login')
          next('/user/login')
        } else {
          next('/login')
        }
      } else {
        next()
      }
    })
  },
  watch: {
    $route (newV) {
      if (this.isLogin === 'ok') {
        this.$router.push('/user/login')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>

</style>
