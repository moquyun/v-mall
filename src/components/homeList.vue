<template>
    <nav class="nav">
      <section class="list" v-for="(item, index) of navlist" :key="index">
        <router-link to="/"></router-link>
          <img :src="item.img" alt="">
          <div class="con">{{item.desc}}</div>
      </section>
    </nav>
</template>

<script>
export default {
  name: 'homeList',
  props: ['navlist']
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
nav{
  @include background-color(#fff);
  @include padding(.08rem 0);
  @include overflow(hidden);
  .list{
    @include rect(20%,auto);
    float: left;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
    padding: .04rem;
    position: relative;
    a{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    img{
      width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }
    .con{
      font-size: .15rem;
      color: #000;
      box-flex: 1;
      -webkit-box-flex: 1;
      -ms-flex: 1!important;
      flex: 1!important;
      -webkit-flex: 1!important;
      min-width: auto;
      min-height: auto;
      margin-top: .02rem;
      font-size: .13rem;
      height: .16rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
