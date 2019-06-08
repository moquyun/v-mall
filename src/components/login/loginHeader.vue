<template>
  <div class="user-login-head">
    <i class="cubeic-back" @click="goBack()"></i>
    <h3>
      <slot></slot>
    </h3>
  </div>
</template>

<script>
import commonMixin from '@/mixin/common'
export default {
  name: 'loginHeader',
  mixins: [commonMixin]
}
</script>

<style scoped lang="scss">
.user-login-head{
  position:relative;
  margin-top:.1rem;
  i{
    color:#dbdbdb;
  }
  h3{
    font-size: .4rem;
    margin-top:.35rem;
  }
}
</style>
