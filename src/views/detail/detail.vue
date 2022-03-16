<template>
  <div id="detail">
    <!-- 顶部 -->
     <detailNavBar class="nav-bar" @navbarIndex="navbarIndex" ref="navbar" :navbarCurrentIndex="navbarCurrentIndex"></detailNavBar>
     <!-- 内容 -->
    <scroll class="content" ref="scroll" :probeType="3" @scroll="scroll">
    <detailSwiper :data="[topImages]"></detailSwiper>
    <detailBaseInfo :goods="goods"></detailBaseInfo>
    <detailShopInfo :shop="shop"></detailShopInfo>
    <detailGoodsInfo :detailInfo="detailInfo"></detailGoodsInfo>
    <detailGoodsParams ref="params" :itemParams="itemParams"></detailGoodsParams>
    <detailCommentInfo ref="comment" :rate="rate"></detailCommentInfo>
    <GoodList ref="recommend" :goods="recommend"></GoodList>

    </scroll>
    <!-- 底部 -->
  <detailBottomBar class="bottom-bar" @addCart="addCart" :goods="goods"></detailBottomBar>

  </div>
</template>

<script>

import {getDetail,Goods,Shop,getRecommend} from '@/network/detail.js';
import {itemListenerMixin} from '@/common/mixin.js'
import {debounce} from '@/common/debounce.js'

import detailNavBar from './detailchild/detailNavBar.vue';
import detailSwiper from './detailchild/detailSwiper.vue';
import detailBaseInfo from './detailchild/detailBaseInfo';
import detailShopInfo from './detailchild/detailShopInfo';
import detailGoodsInfo from './detailchild/detailGoodsInfo.vue';
import detailGoodsParams from './detailchild/detailGoodsParams.vue';
import detailCommentInfo from './detailchild/detailCommentInfo.vue';
import detailBottomBar from './detailchild/detailBottomBar.vue';


import scroll from '@/components/common/scroll/scroll.vue';
import GoodList from '@/components/content/goods/GoodList.vue';



export default ({
  name:"detail",
  components:{
    detailNavBar,
    getDetail,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    scroll,
    detailGoodsInfo,
    detailGoodsParams,
    detailCommentInfo,
    GoodList,
    detailBottomBar
  
  },mixins:[itemListenerMixin],
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      itemParams:{},
      rate:{},
      recommend:[],
      themeTopYs:[0,0,0,0,0,Number.MAX_VALUE],
      navbarCurrentIndex:0,
      count:-1,
      message:null,
      toastIsShow:false
    }
  },
  created(){
    this.iid = this.$route.query.iid
    this._getDetail(this.iid)
    this._getRecommend()
    
  },mounted(){
    
    this.$bus.$on('itemImgLoad',
      debounce(()=>{
        // 注意这里不能函数套函数
        this.themeTopYs[2] = this.$refs.params.$el.offsetTop
        this.themeTopYs[3] = this.$refs.comment.$el.offsetTop
        this.themeTopYs[4] = this.$refs.recommend.$el.offsetTop
      },150)
        
      
    )
  },methods:{
    // 加入购物车
    addCart(){
      
      const product = {}
        product.iid = this.iid
        product.imgURL = this.detailInfo.detailImage[0].list[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.count = -this.count

      // 提交到store中
      this.$store.dispatch('addCart',product).then(res=>{
        this.$toast.showToast(res,1500)
      })
    },
    scroll(position){
      let length = this.themeTopYs.length
      for(let i=0;i<length;i++){
        
        if(this.navbarCurrentIndex !== i && (position.y<=-this.themeTopYs[i] && position.y>-this.themeTopYs[i+1])){
          this.navbarCurrentIndex = i
          
          this.$refs.navbar.currentIndex = this.navbarCurrentIndex -1 
        }
      }
    },
    navbarIndex(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],300)
    },
    _getDetail(iid){
      getDetail(iid).then((res)=>{
      const data = res.result
      // 1.拿到轮播图的信息
      this.topImages = data.itemInfo.topImages
      // 2.拿到基础信息
      this.goods = new Goods(data.itemInfo,data.columns,data.services)
      // 3.拿到商店的信息
      this.shop = new Shop(data.shopInfo)
      // 4.获取商品详细信息
      this.detailInfo = data.detailInfo
      // 5.获取商品参数信息
      this.itemParams = data.itemParams
      // 6.拿到评论里的信息
      this.rate = data.rate
      })
    },
    _getRecommend(){
    getRecommend().then((res)=>{
      this.recommend = res.data.list;
    })
  }
  }
  

})
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
    z-index:9;
    background-color: #fff;
  }
  .nav-bar{
    position: relative;
  }
  .content{
    height: calc(100% - 102px );
  }
  .bottom-bar{
    position:relative;
    bottom: 0px;
  }
  .toast{
    z-index: 99;
  }
</style>