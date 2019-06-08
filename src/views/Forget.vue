<template>
  <div class="container">
    <div class="content">
      <div class="login-box">
        <loginHeader>
          <h3>忘记密码</h3>
        </loginHeader>

      </div>
    </div>
  </div>
</template>

<script>
import loginHeader from '@/components/login/loginHeader'

export default {
  name: 'forget',
  components: {
    loginHeader
  }
}
</script>

<style scoped lang="scss">
.content{
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  background: #fff;
  .login-box{
    padding: .11rem;
  }
}
</style>
