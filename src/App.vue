<template>
  <div id="app">
    <transition
      enter-active-class="animated rotateInDownLeft"
      leave-active-class="animated rotateOutDownLeft"
    >
      <router-view/>
    </transition>
    <router-view name="footer" />
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';
html, body, #app, .box {
  @include rect(100%, 100%);
}
#app, .box {
  @include flexbox();
  @include flex-direction(column);
  @include background-color(#f4f4f4);
  .container {
    @include flex();
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
    .header {
      @include rect(100%, 0.44rem);
      @include background-color(#f66);
    }
    .content {
      @include flex();
      @include rect(100%, auto);
      @include overflow();
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    @include background-color(#efefef);
    ul {
      @include rect(100%, 100%);
      @include flexbox();
      li{
        @include flex();
        @include rect(auto, 100%);
        @include flexbox();
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        span {
          @include font-size(0.24rem);
        }
        p {
          @include font-size(0.12rem);
        }
        &.router-link-active {
          @include text-color(#f66);
        }
      }
    }
  }
}
.dd-enter-active{
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
</style>
