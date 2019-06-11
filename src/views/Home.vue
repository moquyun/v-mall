<template>
  <div class="container">
    <cube-scroll
      ref="scroll"
      :scroll-events="['scroll']"
      :options="options"
      @scroll="onScrollHandle"
      @pulling-down="onPullingDown">
      <div ref="topHeader" class="header">
        <div class="search-box">
          <input type="text" class="search-text" placeholder="请输入搜索内容..." />
          <router-link to="/search" class="search-btn">
            <i class="cubeic-search"></i>
          </router-link>
        </div>
      </div>
      <cube-slide :data="banner"/>
      <home-list :navlist="navList" />
      <announcement/>
      <prolist :prolist="goodsList" />
      <template slot="pulldown" slot-scope="props">
        <div v-if="props.pullDownRefresh"
             class="cube-pulldown-wrapper"
             :style="pullDownStyle">
          <div class="pulldown-content">
            <img src="https://dpubstatic.udache.com/static/dpubimg/7d895941-251f-471f-abc4-3eca25762465.jpg">
            <span v-if="props.beforePullDown">{{ pullDownTip }}</span>
            <template v-else>
              <span v-if="props.isPullingDown">正在更新...</span>
              <span v-else>更新成功</span>
            </template>
          </div>
        </div>
      </template>
    </cube-scroll>
    <transition name="surprise-page">
      <div v-if="triggerSurprise"
           @click="surpriseHandle"
           class="surprise-page">
        <img src="https://dpubstatic.udache.com/static/dpubimg/42DhMSHmIY/ad_fullpage2.jpg">
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import homeList from '@/components/homeList'
import announcement from '@/components/home/announcement'
import prolist from '@/components/common/Prolist'
export default {
  data () {
    return {
      options: {
        pullDownRefresh: {
          threshold: 60,
          stop: 40,
          txt: '更新成功'
        }
      },
      pullDownY: 0,
      pullDownStyle: '',
      opacityStyle: '',
      triggerSurpriseFlag: false,
      triggerSurprise: false
    }
  },
  components: {
    homeList,
    announcement,
    prolist
  },
  computed: {
    ...mapState({
      banner: ({ home }) => home.bannerList,
      navList: ({ home }) => home.navList,
      goodsList: ({ home }) => home.homeGoodsList
    }),
    pullDownTip () {
      if (this.pullDownY <= 60) {
        return '下拉刷新...'
      } else if (this.pullDownY <= 90) {
        return '继续下拉有惊喜...'
      } else {
        return '松手得惊喜！'
      }
    },
    headerStyle () {
      return Math.min(1, Math.max(0, 1 - this.pullDownY / 40))
    }
  },
  methods: {
    ...mapActions({
      getBanner: 'bannerListAction',
      getChecked: 'homeChecked'
    }),
    onScrollHandle (pos) {
      this.pullDownY = pos.y
      if (pos.y > 0) {
        this.pullDownStyle = `top:${pos.y}px`
        this.triggerSurpriseFlag = false
        if (this.pullDownY > 90) {
          this.triggerSurpriseFlag = true
        }
      }
      this.$refs.topHeader.style.opacity = this.headerStyle
    },
    onPullingDown () {
      if (this.triggerSurpriseFlag) {
        this.triggerSurprise = true
        this.$refs.scroll.forceUpdate()
        return
      }
      setTimeout(() => {
        this.$refs.scroll.forceUpdate()
      }, 1000)
    },
    surpriseHandle () {
      this.triggerSurpriseFlag = false
      this.triggerSurprise = false
      this.$refs.topHeader.style.opacity = 1
      // go to other page
    },
    onImgLoad () {
      this.$refs.scroll.refresh()
    }
  },
  mounted () {
    this.getBanner()
    this.getChecked()
    console.log(this.GLOBAL.httpUrl)
  }
}
</script>
<style scoped lang="scss">
  @import '@/lib/reset.scss';
  .header {
    @include rect(100%, 0.44rem);
    @include background-color(rgba(255,255,255,.9));
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
    position:fixed;
    z-index: 10;
    .search-box{
      position: absolute;
      top:50%;
      left: .2rem;
      transform: translate(0,-50%);
      background: #2f3640;
      height: .4rem;
      border-radius: .4rem;
     /* padding:.1rem;
      &:hover .search-text{
        width: 2.4rem;
      }*/
      .search-btn{
        color: #e84118;
        height:.4rem;
        width:.4rem;
        border-radius: 50%;
        background: #2f3640;
        display: flex;
        float:right;
        justify-content: center;
        align-items: center;
        i{}
      }
      .search-text{
        border: none;
        background: none;
        outline: none;
        float: left;
        color: white;
        font-size: .16rem;
        transition: .4s;
        line-height: .4rem;
        width: 2.6rem;
      }
    }
  }
  .cube-slide{
    height:2rem;//banner-height
    img{
      width:100%;
    }
  }
  .content{
    margin: 0 !important;
    height: 100%;
    }
  .scroll-list-wrap{
    position: relative;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    transform: rotate(0deg); // fix 子元素超出边框圆角部分不隐藏的问题
    overflow: hidden;
    img{
      width: 100%;
      // height: 50px
    }
  }
  .cube-pulldown{
    .cube-pulldown-wrapper{
      transform: translateY(-100%);
      line-height: 0;
      top:0;
      .pulldown-content{
        width: 100%;
        img{
          width:100%;
          /*height: 50px;*/
        }
        span{
          position: absolute;
          bottom: 15px;
          left: 0;
          right: 0;
          margin: auto;
          width: 200px;
          text-align: center;
          color: #eee;
          font-size: 14px;
        }
      }
    }
  }
  .surprise-page{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 33;
    line-height: 0;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .surprise-page-enter, .surprise-page-leave-to{
    transform: translateY(-100%);
  }
  .surprise-page-enter-active, .surprise-page-leave-active{
    transition: transform .2s;
  }
</style>
