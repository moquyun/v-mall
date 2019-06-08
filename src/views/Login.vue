<template>
  <div class="container">
    <div class="content">
      <div class="login-box">
        <loginHeader>
          用户登录
        </loginHeader>
        <div class="user-login-main">
          <cube-input v-model="username" autofocus placeholder="请输入用户名"></cube-input>
          <cube-input
            v-model="password"
            placeholder="请输入密码"
            type="password"
            :maxlength="maxlength"
            :autocomplete="autocomplete"
            :eye="eye"
          ></cube-input>
          <router-link to="/register" class="new-register acolor">新用户注册</router-link>
          <router-link to="/forget" class="last-password acolor">忘记密码</router-link>
          <cube-button :primary="true">登录</cube-button>
        </div>
        <div class="user-bottom">
          <router-link to="/loginMobile">
            短信验证码登录
            <i class="cubeic-arrow"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loginHeader from '@/components/login/loginHeader'
import loginMixin from '@/mixin/login'
export default {
  name: 'Login',
  mixins: [loginMixin],
  data () {
    return {
      username: '',
      password: '',
      type: 'password',
      maxlength: 100,
      autocomplete: true,
      eye: {
        open: false,
        reverse: false
      }
    }
  },
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
  background: #f4f4f4;
  .login-box{
    padding: .11rem;
  }
  .user-login-main{
    .cube-input{
      margin:.3rem 0;
    }
    .new-register{
      float:left;
    }
    .last-password{
      float:right;
    }
    .acolor{
      font-size: .14rem;
      line-height: 2;
      margin: 0 0 .1rem;
      color: #4b89dc;
    }
  }
  .user-bottom{
    margin-top:.35rem;
    a{
      width: 100%;
      display: block;
      text-align: center;
      color: #f92028;
      font-weight: 400;
      font-size: .15rem;
      i{
        font-size: .1rem;
        margin-left: .05rem;
      }
    }
  }
}
</style>
