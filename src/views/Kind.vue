<template>
  <div class="container">
    <div class="selsecon">
        <div slot="content">
          <div class="left-panel">
            <cube-scroll>
              <cube-tab-bar vlaue="2" v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
            </cube-scroll>
          </div>
          <div @click="test()">aaaaa</div>
          <div class="right-panel">
            <cube-scroll ref="scroll">
              <div class="cat-mian" v-for="(catModule, index) in scrollData" :key="index">
                <div class="cat-top">
                  <i class="row"></i>
                  <div class="cat-title">{{ catModule.cat_name }}</div>
                </div>
                <ul>
                  <li v-for="(catChild, index) in catModule.child" :key="index">
                    <img :src="catChild.touch_icon" alt="">
                    <span>{{ catChild.cat_name }}</span>
                  </li>
                </ul>
              </div>
            </cube-scroll>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
// const DATA_MAP = {
//   '全部': [
//     { name: '天穹守望者', avatar: 'http://dota2dbpic.uuu9.com/cb880d14-e6a2-4737-8fe7-dab43281e24144575.jpg' },
//     { name: '上古巨神', avatar: 'http://dota2dbpic.uuu9.com/73aa3fe9-be47-49e2-82b1-75d44d069c20Elder_Titan.png' },
//     {
//       name: '灰烬之灵',
//       avatar: 'http://dota2dbpic.uuu9.com/4c54e1ab-0c34-4f4a-8236-26e3ffa08274legion_commander_full.png'
//     },
//     { name: '地精撕裂者', avatar: 'http://dota2dbpic.uuu9.com/d637e928-6289-4561-8c7d-b40d96c539d000.jpg' },
//     { name: '双头龙', avatar: 'http://dota2dbpic.uuu9.com/7148a12f-a0ed-4307-a46b-830d278a5a00thd.gif' },
//     { name: '魅惑魔女', avatar: 'http://dota2dbpic.uuu9.com/5bf5a558-74e5-49f5-91a1-6167cf8d00ffeh.gif' },
//     { name: '先知', avatar: 'http://dota2dbpic.uuu9.com/0878a84c-30cf-434c-84c1-4a2ccf3e52fcfur.gif' },
//     { name: '地精修补匠', avatar: 'http://dota2dbpic.uuu9.com/92a8eaa6-7141-4300-bca9-01d02f30e453tk.png' },
//     { name: '暗影恶魔', avatar: 'http://dota2dbpic.uuu9.com/5476d96a-cb17-45de-8f17-379d0a74ab92Eredar.gif' },
//     { name: '暗影萨满', avatar: 'http://dota2dbpic.uuu9.com/13098635-b43e-459f-88ac-0a9ec28fc9b4ss.gif' },
//     { name: '祈求者', avatar: 'http://dota2dbpic.uuu9.com/99ffd3b8-0691-4922-8467-2667bf83804bKael.gif' },
//     { name: '黑暗贤者', avatar: 'http://dota2dbpic.uuu9.com/57252321-1b37-495c-8ac1-f68306d5d48eDS.gif' },
//     { name: '受折磨的灵魂', avatar: 'http://dota2dbpic.uuu9.com/1c87b008-31d1-4000-92e5-18aa5486a641TS.gif' },
//     { name: '蝙蝠骑士', avatar: 'http://dota2dbpic.uuu9.com/ea3ed2fa-cbb4-44ac-a06b-a9029608c2b8batrider.jpg' },
//     { name: '秀逗魔导士', avatar: 'http://dota2dbpic.uuu9.com/4860461c-ae68-401a-809f-f4c7a0b63aedlina.gif' },
//     { name: '宙斯', avatar: 'http://dota2dbpic.uuu9.com/7be0f49d-6287-4278-9ff0-a42bbd7956cfzeus.gif' },
//     { name: '赏金猎人', avatar: 'http://dota2dbpic.uuu9.com/cf7f3664-7a7c-4d5e-94f5-98c0c2fd0deebh.gif' },
//     { name: '复仇之魂', avatar: 'http://dota2dbpic.uuu9.com/9608a806-4bf0-47a0-a4ba-20b491fa3121vs.gif' },
//     { name: '圣堂刺客', avatar: 'http://dota2dbpic.uuu9.com/25340f33-d595-46de-bc11-2453bb83de2bta.gif' },
//     { name: '矮人直升机', avatar: 'http://dota2dbpic.uuu9.com/cc02d678-beef-4cee-931e-815b04aa513bcopter.gif' },
//     { name: '风暴之灵', avatar: 'http://dota2dbpic.uuu9.com/c4e5c967-dbab-4a24-aa51-7e035dc683c2ST.gif' }
//   ],
//   '近战': [
//     { name: '齐天大圣', avatar: 'http://dota2dbpic.uuu9.com/5f813eaa-e738-4ea5-a425-f260cd01334c3159302_mk105x60.jpg' },
//     { name: '大地之灵', avatar: 'http://dota2dbpic.uuu9.com/e037c631-cddd-41e1-899d-36db1a7d3df5legion_commander_full.png' },
//     { name: '恐怖利刃', avatar: 'http://dota2dbpic.uuu9.com/201fc99f-61af-4a07-a9cb-8ceaf6e0d3392.png' },
//     { name: '上古巨神', avatar: 'http://dota2dbpic.uuu9.com/73aa3fe9-be47-49e2-82b1-75d44d069c20Elder_Titan.png' },
//     { name: '灰烬之灵', avatar: 'http://dota2dbpic.uuu9.com/4c54e1ab-0c34-4f4a-8236-26e3ffa08274legion_commander_full.png' },
//     { name: '巨牙海民', avatar: 'http://dota2dbpic.uuu9.com/970edd19-f2bb-40b5-b9d9-8b2d31a3cf03Tusk.gif' },
//     { name: '地精撕裂者', avatar: 'http://dota2dbpic.uuu9.com/d637e928-6289-4561-8c7d-b40d96c539d000.jpg' },
//     { name: '黑暗贤者', avatar: 'http://dota2dbpic.uuu9.com/57252321-1b37-495c-8ac1-f68306d5d48eDS.gif' },
//     { name: '赏金猎人', avatar: 'http://dota2dbpic.uuu9.com/cf7f3664-7a7c-4d5e-94f5-98c0c2fd0deebh.gif' },
//     { name: '熊战士', avatar: 'http://dota2dbpic.uuu9.com/ab520d8b-2104-4a14-97d2-1254d2aef1dcuw.gif' },
//     { name: '隐形刺客', avatar: 'http://dota2dbpic.uuu9.com/79f3f7ad-e71b-4755-bc5a-44e509c47011sa.gif' },
//     { name: '幻影长矛手', avatar: 'http://dota2dbpic.uuu9.com/ce78281b-47a8-402e-97bf-645c2e8874b1lancer.gif' },
//     { name: '娜迦海妖', avatar: 'http://dota2dbpic.uuu9.com/2f2648ee-5570-48db-ae45-32565bd886f5naga.gif' },
//     { name: '德鲁伊', avatar: 'http://dota2dbpic.uuu9.com/88c02857-7c61-4488-8101-2ca5971e4748ld.gif' },
//     { name: '主宰', avatar: 'http://dota2dbpic.uuu9.com/b3ce2f49-daf9-452a-b516-fa8406d77fc4jugg.gif' },
//     { name: '虚空假面', avatar: 'http://dota2dbpic.uuu9.com/6add3463-d86a-43d8-ab96-b4211dcc3cacfv.jpg' },
//     { name: '鱼人夜行者', avatar: 'http://dota2dbpic.uuu9.com/739da86d-40e9-4e07-b48f-1a03a8a8a3e0sg.jpg' },
//     { name: '地卜师', avatar: 'http://dota2dbpic.uuu9.com/c86c22f9-5f71-4e2f-be85-591a685ec500meepo.jpg' },
//     { name: '幽鬼', avatar: 'http://dota2dbpic.uuu9.com/56d8d3f3-9c6b-429a-aace-226d5e7bd524tb.jpg' },
//     { name: '幻影刺客', avatar: 'http://dota2dbpic.uuu9.com/3fa185dd-95f5-4f9c-85aa-36b42b80e8bapa.jpg' },
//     { name: '半人猛犸', avatar: 'http://dota2dbpic.uuu9.com/3dcc13b7-cd12-46bc-8884-693aaa6ddc12123456.jpg' },
//     { name: '司夜刺客', avatar: 'http://dota2dbpic.uuu9.com/536d63ab-25a6-4b88-b052-2f20add0b32dNA.jpg' },
//     { name: '不朽尸王', avatar: 'http://dota2dbpic.uuu9.com/2946d072-dde3-4791-9385-d06f8bbd2d5aUndying.jpg' },
//     { name: '育母蜘蛛', avatar: 'http://dota2dbpic.uuu9.com/aeaa2836-ef80-4ec2-b3e0-a52a318887c1br.jpg' },
//     { name: '混沌骑士', avatar: 'http://dota2dbpic.uuu9.com/032f1369-e1cd-4279-8412-89666c21e1941234567.jpg' },
//     { name: '血魔', avatar: 'http://dota2dbpic.uuu9.com/530e6ca3-d04f-41b8-891d-b3ac021c9ee2bs.jpg' },
//     { name: '狼人', avatar: 'http://dota2dbpic.uuu9.com/9d8d4257-9f31-4bac-8054-e05e4ba573291234.jpg' },
//     { name: '裂魂人', avatar: 'http://dota2dbpic.uuu9.com/71821a46-b435-4845-8226-2f66853c5370123.png' },
//     { name: '末日使者', avatar: 'http://dota2dbpic.uuu9.com/28ecc276-5596-4fd6-ab3f-0a265afd8e77123456.png' },
//     { name: '暗夜魔王', avatar: 'http://dota2dbpic.uuu9.com/23f78a12-62cd-4b0a-9757-1be4fa94f9c5123456.png' },
//     { name: '噬魂鬼', avatar: 'http://dota2dbpic.uuu9.com/aa4f2d3d-c660-48b3-b931-74ce10fdfc721.jpg' },
//     { name: '半人马战行者', avatar: 'http://dota2dbpic.uuu9.com/65940f31-266e-4dec-b107-f40d4556fd000.jpg' },
//     { name: '全能骑士', avatar: 'http://dota2dbpic.uuu9.com/01ddcdb3-fb3d-412b-a6cf-e85bc473a35a00.jpg' },
//     { name: '兽王', avatar: 'http://dota2dbpic.uuu9.com/523a7780-04aa-4b55-bc69-f46d4f37fff900.jpg' },
//     { name: '骷髅王', avatar: 'http://dota2dbpic.uuu9.com/bd925caa-6b96-4a08-9748-a19e8fe7c927wraith_king_hphover.png' },
//     { name: '潮汐猎人', avatar: 'http://dota2dbpic.uuu9.com/508e0019-b6de-4ae2-8e00-b8428bb6d16btidehunter_full.png' },
//     { name: '鱼人守卫', avatar: 'http://dota2dbpic.uuu9.com/d1e5938a-b248-45f0-9123-d6cf0be97c6bslardar_full.png' },
//     { name: '流浪剑客', avatar: 'http://dota2dbpic.uuu9.com/2bb589ad-9fa2-4093-8ec9-c2fcd12d14dc00.jpg' },
//     { name: '沙王', avatar: 'http://dota2dbpic.uuu9.com/0ae7f51a-4cca-43cb-9a7f-5d6b5ba5401612345.png' },
//     { name: '屠夫', avatar: 'http://dota2dbpic.uuu9.com/b4e99c9b-91e5-431e-89ca-a9fe3171120cuntitled.jpg' },
//     { name: '敌法师', avatar: 'http://dota2dbpic.uuu9.com/310d3227-3e5f-4132-bc93-8afac9d0d123am.gif' },
//     { name: '斧王', avatar: 'http://dota2dbpic.uuu9.com/09e8f2f6-4fa7-4870-ac05-7fb7f44510fafuwang.png' }]
// }
// const genTabLabels = Object.keys(DATA_MAP).map(label => ({
//   label
// }))
// console.log(DATA_MAP)
export default {
  name: 'kind',
  data () {
    return {
      selectedLabel: 858,
      scrollData: [],
      tabs: []
    }
  },
  created () {
    // this.scrollData = this.kindTabs[this.selectedLabel]
  },
  mounted () {
    this.getKindList()
    this.getCatInfo(this.selectedLabel)
  },
  methods: {
    test () {
      console.log(this.kindTabs)
    },
    changeHandler (label) {
      this.scrollData = this.kindTabs[label]
      this.$nextTick(() => {
        this.$refs.scroll.scrollTo(0, 0)
        this.$refs.scroll.refresh()
      })
    },
    ...mapActions({
      getKindList: 'getKindList',
      getCatInfo: 'getCatInfo'
    })
  },
  computed: {
    ...mapState({
      kindList: ({ kind }) => kind.kindList,
      catInfo: ({ kind }) => kind.catInfo
    }),
    ...mapGetters({
      kindTabs: 'kindTabs'
    })
  },
  watch: {
    selectedLabel (newV) {
      // console.log('aaa', newV)
      this.getCatInfo(newV)
    },
    kindTabs (newV, oldV) {
      this.tabs = newV
    },
    catInfo (newV) {
      this.scrollData = newV
    }
  }
}
</script>

<style lang="scss">
.cube-scroll-list-wrapper{
  .cube-tab-bar{
    flex-wrap: wrap;
    .cube-tab{
      width: 100%;
      flex-basis: unset;
      height: 40px;
      /*line-height: 40px;*/
      font-size: 14px;
      color: #db8931;
      transition: all .3s ease-in;
      &.cube-tab_active{
        color: #fff;
        font-size: 16px;
        background-color: #a74b00;
      }
    }
  }
}
.left-panel{
  position: absolute;
  top: 44px;
  left: 0;
  bottom: .6rem;
  width: 80px;
  /*background-color: #2d2d2d;*/
  background-color: #fff;
}
.right-panel{
  position: absolute;
  top: 44px;
  left: 80px;
  right: 0;
  bottom: .6rem;
  /*background-color: #171819;*/
  background-color: #fff;
  .cat-mian{
    overflow: hidden;
    padding:0 .11rem;
    margin-bottom: -.11rem;
    .cat-top{
      margin: .11rem 0;
      position: relative;
      overflow: hidden;
      height: .25rem;
      font-size: .13rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .cat-title{
        min-width: .5rem;
        height: .16rem;
        background: #fff;
        line-height: .16rem;
        text-align: center;
        overflow: hidden;
        color: #333;
        position: absolute;
      }
      i.row{
        display: block;
        width: .65rem;
        height: .008rem;
        background: #e0e0e0;
      }
    }
    ul{
      overflow: hidden;
      background-color: #fff;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      li{
        width: 33.33%;
        box-sizing: border-box;
        position: relative;
        text-align: center;
        margin-bottom: .2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        img{
          display: block;
          width: .52rem;
          height: .52rem;
          overflow: hidden;
          margin: 0 auto;
          border-radius: 0;
        }
        span{
          display: block;
          height: .2rem;
          line-height: .2rem;
          overflow: hidden;
          text-align: center;
          font-size: .1rem;
          color: #777;
          margin-top: .1rem;
        }
      }
    }
  }
  /*li{*/
  /*  height: 80px;*/
  /*  display: flex;*/
  /*  align-items: center;*/
  /*  background-color: #fff;*/
  /*  img{*/
  /*    width: 102px;*/
  /*    margin: 0 10px 0 20px;*/
  /*    border: 1px solid #ff9f38;*/
  /*    border-radius: 3px;*/
  /*    box-shadow: 0 1px 5px 0 #000;*/
  /*  }*/
  /*  span{*/
  /*    color: #db8931;*/
  /*  }*/
  /*}*/
}
</style>
