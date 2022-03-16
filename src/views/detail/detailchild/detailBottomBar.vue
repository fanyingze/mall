<template>
  <div class="bar" v-show="goods">
    <div class="bar-left">
      <div>
        <i class="ico service"></i>
        <span class="text">客服</span>
      </div>

      <div>
        <i class="ico shop"></i>
        <span class="text">店铺</span>
      </div>

      <div>
        <i class="ico collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>

    <div class="bar-right" >
      <div class="shopping" @click="addCart">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottomBar",
  methods:{
    addCart(){
      this.$emit('addCart');
      this.$bus.$emit('itemImgLoad');
    }
  },props:{
    goods:{
      type:Object
    }
  }
};
</script>

<style scoped>
.bar {
  width: 100%;
  /* background-color:red; */
  height: 58px;
  display: flex;
  
}
.bar-left {
  width: 50%;
  display: flex;
  
}
.ico{
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100% ;
}
  .bar-left .service {
    background-position:0 -54px;
  }
  .bar-left .shop {
    background-position:0 -98px;
  }
.bar-left > div,.bar-right > div {
  flex: 1;
  /* 让其中元素居中的工具 */
  text-align: center;
}

.bar-right {
  width: 50%;
  display: flex;
  line-height: 58px;
}
.purchase{
  color:white;
  background-color: #f69;
}
.shopping{
  background-color:#ffe817;
}
</style>
