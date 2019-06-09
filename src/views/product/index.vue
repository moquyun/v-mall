<template>
  <div class="con">
    <div id="wrapper">
      <div id="scroller">
        <div class="productBox">
          <div class="pro-pic">
            <img class=""
                 :src="goods.img"
                 style="animation: 1s ease 0.2s normal both 1 running fadeIn;"/>
          </div>
          <h1 class="pro-title">{{ goods.title }}</h1>
          <div class="pro-price">
            <div class="pro-price-l">
              <p class="pro-price-1">抢购价:￥<span>{{ goods.pic }}</span></p>
              <p class="pro-price-2">原价:￥<span>{{ goods.delPic }}</span></p>
            </div>
            <div class="pro-price-r" v-if="goods.coupon.couPic">
              <p class="pro-price-r-1">专享优惠券
                <label><span>￥</span><span>{{ goods.coupon.couPic }}</span></label>
              </p>
            </div>
          </div>
          <!--grrom推荐理由-->
          <template v-if="goods.proGroom.length > 0">
            <div class="pro-groom" v-for="(item,index) of goods.proGroom" :key="index">
              <div class="pro-groom-desc">
                <p><span>{{ item.title }}</span>{{ item.desc }}</p>
              </div>
            </div>
          </template>
          <div class="pro-remove more">继续拖动,查看图文详情</div>
          <div class="weui_panel_bd detail-box">
          </div>
        </div>
      </div>
    </div>
    <!--    淘口令弹出窗-->
    <amoyPwdBox v-show="amoyPwdBoxShow"></amoyPwdBox>
    <!--底部导航-->
    <Footer></Footer>
  </div>
</template>

<script>
import amoyPwdBox from './components/amoyPwdBox'
import Footer from './components/Footer'
export default {
  name: 'index',
  data () {
    return {
      amoyPwdBoxShow: false,
      goods: {
        img: 'https://img.alicdn.com/imgextra/i1/2785084212/TB2Civ_oypnpuFjSZFIXXXh2VXa_!!2785084212.jpg',
        title: '临时停车牌挪车电话号码牌汽车临时停车电话号码卡可定制防晒夜光',
        pic: '6.90',
        delPic: '9.99',
        coupon: {
          couPic: '4'
        },
        proGroom: [
          {
            title: '推荐',
            desc: '&nbsp;临时停车牌挪个性时尚，防晒防爆，字迹清晰，正品保障。'
          }
        ],
        aa: ''
      }
    }
  },
  components: {
    amoyPwdBox,
    Footer
  }
}
</script>

<style scoped lang="scss">
@import "css/index.scss";
</style>
