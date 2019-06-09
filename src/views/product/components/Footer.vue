<template>
    <div class="footer">
      <div class="page-foot" id="page-foot">
        <div class="g-foot-bar">
          <ul class="m-nav-foot clearfix">
            <li>
              <router-link to="/">
                <div><img
                  src="./../images/shouye.svg" />
                </div>
                首页
              </router-link>
            </li>
            <li>
              <router-link to="/live">
                <div>
                  <img src="./../images/shoucang.svg" />
                </div>
                收藏
              </router-link>
            </li>
            <li>
              <a class="bot-coupons2">加入购物车</a>
            </li>
            <li>
              <a class="bot-coupons1" >立即购买</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="shadeAndrTire"></div>
      <div class="shadeIosTire"></div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  .page-foot{
    width:100%;
    height: 48px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index:99;
    .g-foot-bar{
      width: 100%;
      height: 100%;
      background-color: #fff;
      z-index: 1000;
      ul.m-nav-foot{
        width: 100%;
        height: 100%;
        li{
          float:left;
          height: 100%;
          margin: auto;
          text-align: center;
          &:nth-child(1),&:nth-child(2){
            border-top: 1px solid #D6D6D6;
            flex: 0 0 18% !important;
            border-right:1px solid #E1E1E1 ;
            img{
              width:100%;
            }
          }
          &:nth-child(3),&:nth-child(4){
            flex: 0 0 32% !important;
          }
          &:nth-child(3){
            float:left
          }
          &:nth-child(4){
            float:right
          }
          a{
            display: block;
            width: 100%;
            height: 100%;
            color: #000;
            div {
              width:20px;
              height: 20px;
              margin:3px auto;
            }
            &.bot-coupons1,&.bot-coupons2{
              line-height:50px;
              font-size: 16px;
              text-align: center;
              color: #FFFFFF;
            }
            &.bot-coupons1{
              background: -webkit-linear-gradient(left, #ff6633, #ff9900); /* Safari 5.1 - 6.0 */
              background: -o-linear-gradient(right,  #ff6633, #ff9900); /* Opera 11.1 - 12.0 */
              background: -moz-linear-gradient(right, #ff6633, #ff9900); /* Firefox 3.6 - 15 */
              background: linear-gradient(to right,  #ff6633, #ff9900); /* 标准的语法 */
            }
            &.bot-coupons2{
              background: -webkit-linear-gradient(left,#ff6633,#ff3333); /* Safari 5.1 - 6.0 */
              background: -o-linear-gradient(right,#ff6633,#ff3333); /* Opera 11.1 - 12.0 */
              background: -moz-linear-gradient(right, #ff6633,#ff3333); /* Firefox 3.6 - 15 */
              background: linear-gradient(to right, #ff6633,#ff3333); /* 标准的语法 */
            }
          }
          &.cur a{
            color: #FFB802;
          }
        }
      }
    }
  }
</style>
