<template>
  <div class="container">
    <header class="header-address">
      <div class="header-box">
        <i class="cubeic-location"></i>
        <span>上海</span>
      </div>
      <div class="header-edit">编辑</div>
    </header>
    <section class="card-goods">
      <div class="card-goods-group">
        <div class="card-shop-head">
          <div class="card-goods__item">
            <div class="check-aa"></div>
            <div class="van-checkbox__con">
              <div class="store_name"><strong>自营</strong></div>
            </div>
          </div>
        </div>
        <div class="van-checkbox-group">
          <van-checkbox-group class="card-goods" v-model="checkedGoods">
            <van-checkbox
              class="card-goods__item"
              v-for="item in goods"
              :key="item.id"
              :name="item.id"
            >
              <van-card
                :title="item.title"
                :desc="item.desc"
                :num="item.num"
                :price="formatPrice(item.price)"
                :thumb="item.thumb"
              />
            </van-checkbox>
          </van-checkbox-group>
          <van-submit-bar
            :price="totalPrice"
            :disabled="!checkedGoods.length"
            :button-text="submitBarText"
            @submit="onSubmit"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant'
import 'vant/lib/checkbox/style'
import 'vant/lib/checkbox-group/style'
import 'vant/lib/card/style'
import 'vant/lib/submit-bar/style'
import 'vant/lib/toast/style'
export default {
  name: 'Cart',
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data () {
    return {
      checkedGoods: ['1', '2', '3'],
      goods: [{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 200,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
      }, {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: 690,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
      }, {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 2680,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
      }]
    }
  },
  computed: {
    submitBarText () {
      const count = this.checkedGoods.length
      return '结算' + (count ? `(${count})` : '')
    },
    totalPrice () {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0)
    }
  },
  methods: {
    formatPrice (price) {
      return (price / 100).toFixed(2)
    },
    onSubmit () {
      Toast('点击结算')
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';
.card-goods{
  position: relative;
  @include rect(auto,100%);
}
header.header-address{
  @include padding(.11rem);
  @include font-size(.14rem);
  @include flexbox();
  .header-box{
    display: block!important;
    width: 100%;
    color: #777;
    height: .19rem;
    line-height: .19rem;
    padding-left: .16rem;
    position: relative;
    @include flex();
  }
  .header-edit{
    color: #f92028;
  }
}
.card-goods{
  /*margin-bottom: .3rem;*/
  .card-goods-group{
    margin-bottom: .1rem;
    .card-shop-head{
      padding: .13rem 0;
      .card-goods__item{
        border-bottom: 0;
        position: relative;
        .check-aa{}
        .van-checkbox__con{
          margin-left: 0;
          width: 100%;
          padding: 0 .1rem 0 .35rem;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          .store_name{
            font-size: .15rem;
            strong{}
          }
        }
      }
    }
    .van-checkbox-group{
      .card-goods__item{
        .van-checkbox__label{
          padding: 0 .1rem 0 .35rem;
          .van-card{
            background-color:#fff;
            .van-card__header{
              position: relative;
              background-color: #fff;
              padding: .15rem .11rem .15rem .95rem;
              height: auto;
              min-height: 1rem;
              font-size: .12rem;
              .van-card__thumb{
                position:absolute;
                width: .7rem;
                height: .7rem;
                top: .15rem;
                left: .1rem;
              }
            }
            &:after {
              content: " ";
              position: absolute;
              left: .1rem;
              bottom: -.1px;
              right: .1rem;
              height: .1px;
              z-index: 5;
              border-bottom: 1px solid #e5e5e5;
              color: #e5e5e5;
              -webkit-transform-origin: 0 0;
              transform-origin: 0 0;
              -webkit-transform: scaleY(.5);
              transform: scaleY(.5);
            }
          }
        }
      }
      .card-goods__item:first-child .van-card{
        border-radius: .1rem .1rem 0 0;
      }
      .card-goods__item:last-child .van-card{
        border-radius: 0 0 .1rem .1rem;
      }
    }
  }
}
.card-goods {
  padding: 10px 0;
  /*background-color: #fff;*/
  &__item {
    position: relative;
    /*background-color: #fafafa;*/
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
    .van-card__thumb{
      .van-image{
        /*border-radius: .05rem;*/
        /*box-shadow: 0 0 2px rgba(0,0,0,.5);*/
        overflow: hidden;
      }
    }
    // cart-foot
  }
  .van-submit-bar{
    position:absolute;
  }
}
</style>
