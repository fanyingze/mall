<template>
<div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
  <!-- 上 -->
  <div class="top">
    <div class="start">
      </div>
    <div class="top-desc">{{detailInfo.desc}}</div>
    <div class="end"></div>
  </div>
  <!-- 中 -->
  <div class="midle-text">{{detailInfo.detailImage[0].key}}</div>
  <div v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
    <img class="goods-img" :src="item" alt="" @load="imageLoad">
  </div>
</div>
</template>

<script>
export default{
  name:'detailGoodsInfo',
  props:{
    detailInfo:{
      type:Object
    }
  },
  data(){
    return{
      counter:0,
      imagesLength:0
    }
  },
  methods:{
    imageLoad(){
      if(++this.counter === this.imagesLength){
        this.$bus.$emit('itemImgLoad');
      }
    }
  },watch:{
    detailInfo(){
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
.goods-info{
  padding: 7px;
}
.top-desc{
  font-size: 14px;
}

.midle-text{
  margin-top:20px;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  margin-bottom: 10px;
}
.goods-img{
  width:100%;
}
</style>
