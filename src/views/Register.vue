<template>
  <div class="container">
    <div class="content">
      <div class="login-box">
        <loginHeader>
          <h3>新用户注册</h3>
        </loginHeader>
        <div class="user-login-main">
          <div class="from-el">
            <div class="from-content">
              <div class="from-box">
                <div class="in-lable">
                  <i class="cubeic-mobile-phone"></i>
                </div>
                <div class="in-value">
                  <div class="input-box">
                    <input type="text" class="mob-code">
                  </div>
                </div>
                <div class="in-key">
                  <div class="lable">{{ mobCodeMsg }}</div>
                </div>
              </div>
            </div>
          </div>
          <!--          -->
          <button class="btn-reg"></button>
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

export default {
  name: 'Login',
  data () {
    return {
      mobCodeMsg: '获取验证码'
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
    margin-top: .25rem;
    overflow: hidden;
   .from-el{
     margin-bottom: 0;
     .from-content{
       line-height: 40px;
       position: relative;
       font-size: 14px;
       .from-box{
         border-bottom: 1px solid #ddd;
         overflow: hidden;
         padding: .08rem 0;
         position: relative;
         font-size: .15rem;
         line-height: 40px;
         display: flex;
         .in-lable{
           min-width: .2rem;
           height: .24rem;
           line-height: .24rem;
           i{
             font-size: 16px;
             color: #bdbdbd;
             margin-right: .05rem;
           }
         }
         .in-value{
           height: .24rem;
           line-height: .24rem;
           flex:1;
           display: block!important;
           width: 100%;
           .input-box{
             font-size: 14px;
             display: block;
             width: 100%;
             position: relative;
             .mob-code{
               -webkit-appearance: none;
               background-color: #fff;
               background-image: none;
               border-radius: 4px;
               border: 1px solid #dcdfe6;
               -webkit-box-sizing: border-box;
               box-sizing: border-box;
               color: #606266;
               display: inline-block;
               font-size: inherit;
               height: 40px;
               line-height: 40px;
               outline: 0;
               padding: 0 15px;
               -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
               transition: border-color .2s cubic-bezier(.645,.045,.355,1);
               width: 100%;
               //
               border: 0;
               height: 2.4rem;
               line-height: 2.4rem;
               -webkit-box-sizing: border-box;
               box-sizing: border-box;
               width: 100%;
               color: #666;
               font-size: 1.5rem;
               padding: 0 1rem 0 0;
               background: none;
             }
           }
         }
         .in-key{
           .lable{}
         }
       }
     }
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
