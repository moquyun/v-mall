<template>
  <div class="container">
    <div class="content">
      <div class="login-box">
        <loginHeader>
          <h3>新用户注册</h3>
        </loginHeader>
        <div class="user-login-main">
          <div class="mobCode">
            <cube-input
              clearable="clearable"
              v-model="mobile"
              placeholder="手机号码"
            >
            </cube-input>
            <button @click="sendCode" :class="sendClass">{{ sendMsg }}</button>
          </div>
          <cube-validator ref="validator0" v-model="result[0]" :model="mobile" :rules="rules0"/>
          <cube-input clearable="clearable" v-model="smsCode" placeholder="验证码"/>
          <cube-validator ref="validator1" v-model="result[1]" :model="smsCode" :rules="rules1"/>
          <cube-input
            clearable="clearable"
            v-model="password"
            placeholder="登录密码"
            type="password"
            :eye="eye"
          />
          <cube-validator ref="validator2" v-model="result[2]" :model="password" :rules="rules2"/>
          <cube-button :primary="true" @click="submit">注册</cube-button>
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
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      sendMsg: '获取验证码',
      result: [undefined, undefined, undefined],
      mobile: '',
      rules0: {
        required: true,
        type: 'tel'
      },
      smsCode: '',
      rules1: {
        required: true,
        type: 'number',
        len: 4
      },
      password: '',
      rules2: {
        required: true,
        type: 'string',
        min: 8
      },
      trigger: false,
      eye: {
        open: false
      },
      SmsTime: 5, // 验证码按钮时间
      sendClass: 'sendCode'
    }
  },
  components: {
    loginHeader
  },
  methods: {
    submit () {
      const p1 = this.$refs.validator0.validate()
      const p2 = this.$refs.validator1.validate()
      const p3 = this.$refs.validator2.validate()
      // let config = {
      //   headers: {
      //     'Content-Type': 'application/json;charset=UTF-8'
      //   }
      // }
      Promise.all([p1, p2, p3]).then(() => {
        if (this.result.every(item => item)) {
          axios.post('http://moquyun.com/users/register', {
            username: this.mobile,
            password: this.password
          }).then(
            res => {
              if (res.data === 0) {
                this.$createToast({
                  type: 'error',
                  txt: '注册失败',
                  time: 1000
                }).show()
              } else if (res.data === 1) {
                // success
                this.$createToast({
                  type: 'correct',
                  txt: '注册成功',
                  time: 1000
                }).show()
                localStorage.setItem('isLogin', 'ok')
                this.$store.commit('changeIsLogin', 'ok')
                this.$router.push('/user')
              } else if (res.data === 2) {
                this.$createToast({
                  type: 'error',
                  txt: '账号已存在',
                  time: 1000
                }).show()
              } else {
                this.$createToast({
                  type: 'error',
                  txt: '意外错误',
                  time: 1000
                }).show()
              }
            }
          )
        }
      })
    },
    sendCode () {
      const p1 = this.$refs.validator0.validate()
      Promise.all([p1]).then((res) => {
        if (res[0]) {
          axios.get(`http://www.daxunxun.com/users/sendCode?tel=${this.mobile}`).then(
            res => {
              if (res.data === 0) {
                this.$createToast({
                  type: 'error',
                  txt: '手机号验证码获取失败',
                  time: 1000
                }).show()
              } else if (res.data === 1) {
                this.$createToast({
                  type: 'error',
                  txt: '该手机号已经注册',
                  time: 1000
                }).show()
              } else if (res.data.code) {
                this.$createToast({
                  type: 'correct',
                  txt: '验证码已发送',
                  time: 1000
                }).show()
                this.resetBtn()
              } else {
                this.$createToast({
                  type: 'error',
                  txt: '意外错误',
                  time: 1000
                }).show()
              }
            }
          )
        } else {
          this.$createToast({
            type: 'error',
            txt: '手机号错误',
            time: 1000
          }).show()
        }
      })
    },
    resetBtn () {
      this.sendClass = 'sendCode hs'
      let Timer = this.SmsTime
      this.sendMsg = `${Timer}秒后在试`
      this.smsDisabled = true
      // axios
      let TimerSms = setInterval(() => {
        Timer--
        this.sendMsg = `${Timer}秒后在试`
        if (!Timer) {
          this.sendClass = 'sendCode'
          this.sendMsg = '再次发送'
          this.smsDisabled = false
          clearInterval(TimerSms)
        }
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
  .mobCode{
    display: flex;
    background-color: #fff;
    div.cube-input{
      flex:0 0 70%;
      margin:0 !important;
    }
    .sendCode{
      flex:0 0 30%;
      border: none;
      background: none;
    }
    .hs{
      color: #e74c3c;
      background-color: #bdc3c7;
    }
  }
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
