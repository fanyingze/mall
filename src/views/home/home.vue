<template>
  <div id="home">
    <navBar class="home-nav"><div slot="center">购物街</div></navBar>
    <TabControl class="tab-control" :titles="['流行','新款','精选']"
                @tabClick="tabClick"
                ref="TabControl1"
                v-show="tabControlIsShow"
                ></TabControl>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            v-on:scroll="scroll"
            v-on:pullingUp="loadMore">
            <!-- 注意：在这里只有用ref才可能拿到scroll内部的东西 -->
      <HomeSwiper v-bind:banners="banners" @SwiperImageLoad="swiperImageLoad"></HomeSwiper>
    <RecommendView v-bind:recommends="recommends"></RecommendView>
    <FeatureView></FeatureView>
    <TabControl class="tab-control" :titles="['流行','新款','精选']"
                @tabClick="tabClick"
                ref="TabControl2"
                ></TabControl>
    <GoodList :goods="showData"></GoodList>
    </scroll>
    <backTop class="backTop" v-on:click.native="backTop" v-show="backTopIsShow"></backTop>
    <!-- .native 不加，不能监听组件的点击 -->
    
  </div>
</template>


<script>

import navBar from '@/components/common/navbar/navBar.vue'
import TabControl from'@/components/content/tabControl/TabControl.vue'
import GoodList from'@/components/content/goods/GoodList.vue'
import scroll from '@/components/common/scroll/scroll.vue'
import backTop from '@/components/content/backTop/backTop.vue'

import HomeSwiper from './homechild/HomeSwiper.vue'
import RecommendView from './homechild/RecommendView.vue'
import FeatureView from './homechild/FeatureView.vue'

import {itemListenerMixin} from '@/common/mixin.js';
import {getHomeMultidata,getProductData} from '@/network/home.js';

export default {
  name: "home",
  components:{
    navBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    scroll,
    backTop
  },
  mixins:[itemListenerMixin],
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:1,list:[]},
        'new':{page:1,list:[]},
        'sell':{page:1,list:[]}
      },
      currentType:'pop',
      backTopIsShow:false,
      tabOffsetTop:0,
      tabControlIsShow:false,
      saveY:0
    }
  },created(){
    this._getHomeMultidata();

    this._getProductData('pop');
    this._getProductData('new');
    this._getProductData('sell');
    
    
  },mounted(){
   

    
  },activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
   
  },methods:{
    // 事件监听
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.TabControl1.currentIndex = index
      this.$refs.TabControl2.currentIndex = index
    },

    // 网络请求
    _getHomeMultidata(){
      getHomeMultidata().then(res=>{
      
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(this.recommends);
    })
    },
    _getProductData(type){
      const page = this.goods[type].page
      getProductData(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page ++;
      this.$refs.scroll.finishedPullUp()
    })
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    // 滚动控制模块
    scroll(position){
      this.backTopIsShow = -position.y > 1000
      this.tabControlIsShow = -position.y > this.tabOffsetTop
    },
    loadMore(){
      this._getProductData(this.currentType)
    },
    // 防抖动函数
    
    swiperImageLoad(){
      // 获取当前组件的高度
      // 其中$el是可以获取到该组件中的dom
      this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop
    }
  },computed:{
    showData(){
      return this.goods[this.currentType].list
    }
  }
  
};


</script>

<style scoped>
  #home{
    position: relative;
    /* padding-top:44px ; */
    height: 100vh;
  }
  .home-nav{
    width: 100%;
    position: relative;
    top:0px;
    z-index: 99;
    background-color:var(--color-tint) ;
    color: #fff;
    z-index: 9;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
  .content{
    position:absolute;
    top:44px;
    bottom:49px;
    overflow: hidden;
  }
  
</style>

