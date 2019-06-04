<template>
  <section class="prolist">
    <ul class="product-list">
      <li v-for="(item, index) of prolist" :key="index">
        <router-link to="item.goods_id"></router-link>
        <figure>
          <div class="img-box">
            <img :src="item.goods_img" alt="">
          </div>
          <figcaption>
            <h4 class="twolist-hidden">{{ item.title }}</h4>
            <p class="price">
              <em>{{ item.shop_price_formated }}</em>
            </p>
          </figcaption>
        </figure>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Prolist',
  props: ['prolist']
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.product-list{
    overflow: hidden;
    li{
      width: 50%;
      padding-top: 1px;
      padding-right: 1px;
      float: left;
      position: relative;
      a{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
      }
      figure{
        background: #fff;
        padding: .08rem;
        @include box-sizing(border-box);
        .img-box{
          img{
            @include rect(100%,auto);
          }
        }
        figcaption{
          margin-top: .08rem;
          h4{
            font-size: .14rem;
            height: .38rem;
            line-height: .19rem;
            font-weight: 400;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
          }
          .twolist-hidden {
            -webkit-line-clamp: 2;
          }
          p{
            margin-top: .04rem;
          }
          .price {
            font-size: .13rem;
            color: #f92028;
            em{
              color: #ec5151;
              font-size: .17rem;
              display: block;
            }
          }
        }
      }
    }
  }
</style>
