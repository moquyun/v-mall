<template>
  <div class="container">
    <cube-page type="scroll-nav-side" title="ScrollNav">
      <div slot="content">
        <div class="view-wrapper">
          <cube-scroll-nav
            :side="true"
            :data="data"
            :current="current"
            @change="changeHandler"
            @sticky-change="stickyChangeHandler">

            <cube-scroll-nav-panel
              v-for="item in data"
              :key="item.name"
              :label="item.name"
              :title="item.name">
              <ul>
                <li v-for="(food, index) in item.foods" :key="index">
                  <div>
                    <img :src="food.icon">
                    <p>{{food.name}}</p>
                  </div>
                </li>
              </ul>
            </cube-scroll-nav-panel>
          </cube-scroll-nav>
        </div>
      </div>
    </cube-page>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CubePage from '@/components/cube-page.vue'

export default {
  name: 'kind',
  components: {
    CubePage
  },
  data () {
    return {
      // data: goods,
      current: '热销榜3'// goods[3].name
    }
  },
  mounted () {
    this.listActions()
    // this.current = this.goods[3].name
  },
  methods: {
    ...mapActions({
      listActions: 'getKindList'
    }),
    changeHandler (label) {
      console.log('changed to:', label)
    },
    stickyChangeHandler (current) {
      console.log('sticky-change', current)
    }
  },
  computed: {
    ...mapState({
      data: ({ kind }) => {
        return kind.kindList
      }
    })
  }
}
</script>

<style lang="scss">
  /*.scroll-nav-side{*/
  /*  background-color: #fff;*/
  /*  .view-wrapper{*/
  /*    position: fixed;*/
  /*    top: 44px;*/
  /*    left: 0;*/
  /*    bottom: 0;*/
  /*    width: 100%;*/
  /*  }*/
  /*}*/
  .cube-sticky-fixed{
    background-color:#666;
  }
  .cube-scroll-nav-panel{
    img{
      height:500px;
    }
  }
</style>
