<template>
    <div class="announcement">
      <img src="@/assets/images/108_P_1536792828502.png" alt="">
      <div class="connew con2">
        <cube-scroll
          ref="scroll"
          :options="options"
          :data="items"
          class="horizontal-scroll-list-wrap">
          <ul class="list-wrapper">
            <li v-for="(item, index) in items" :key="index" class="list-item">{{ item }}</li>
          </ul>
        </cube-scroll>
      </div>
      <router-link to="/" class="more-link">more</router-link>
    </div>
</template>

<script>
export default {
  name: 'announcement',
  data () {
    return {
      items: [
        '😀 😁 😂 🤣 😃 🙃 ',
        '👈🏻  scroll 👉🏻 ',
        '🙂 🤔 😄 🤨 😐 🙃 ',
        '👈🏻  scroll 👉🏻 ',
        '😔 😕 🙃 🤑 😲 ☹️ ',
        '👈🏻  scroll 👉🏻 ',
        '🐣 🐣 🐣 🐣 🐣 🐣 ',
        '👈🏻  scroll 👉🏻 ',
        '🐥 🐥 🐥 🐥 🐥 🐥 ',
        '👈🏻  scroll 👉🏻 ',
        '🤓 🤓 🤓 🤓 🤓 🤓 ',
        '👈🏻  scroll 👉🏻 ',
        '🦔 🦔 🦔 🦔 🦔 🦔 ',
        '👈🏻  scroll 👉🏻 ',
        '🙈 🙈 🙈 🙈 🙈 🙈 ',
        '👈🏻  scroll 👉🏻 ',
        '🚖 🚖 🚖 🚖 🚖 🚖 ',
        '👈🏻  scroll 👉🏻 ',
        '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
      ],
      newY: -200
    }
  },
  mounted () {
  },
  methods: {
    //
  },
  computed: {
    options () {
      return {
        // scrollbar: this.scrollbarObj,
        startY: this.newY
      }
    }
  }
}
</script>

<style lang="scss">
  @import '@/lib/reset.scss';
  .announcement {
    background: #fff;
    vertical-align: middle;
    @include box-sizing(border-box);
    overflow: hidden;
    padding: .07rem .08rem;
    height: .5rem;
    @include display(flex);
    @include align-items(center);
    @include justify-content(normal);
    img{
      height: 86%;
      margin-right: .08rem;
      display: block;
    }
    .connew{
      font-size: .13rem;
      height: 100%;
      @include flex(1);
    }
    .con2{
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      list-style: none;
      padding: 0;
      z-index: 1;
    }
    .more-link{
      font-size: .13rem;
      margin-left: .08rem;
      padding-left: .08rem;
      border-left: 1px solid #e3e8ee;
      color: #464c5b;
      transition: color .2s ease;
    }
  }
  // new
.horizontal-scroll-list-wrap{
  /*border: 1px solid rgba(0, 0, 0, 0.1);*/
  border-radius: .05rem;
  .cube-scroll-content{
    display: inline-block;
  }
  .cube-scroll-list-wrapper{
    .list-wrapper{
      padding: 0 .1rem;
      line-height: .4rem;
      white-space: nowrap;
    }
    .list-item{
      //
    }
  }
}

</style>
