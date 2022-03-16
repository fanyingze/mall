<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showData" alt="" @load="imageLoad">
    <div class="goods-item-info">
      <p>{{GoodItem.title}}</p>
      <span class="price">{{showPrice}}</span>
      <span class="cfav">{{GoodItem.cfav}}</span>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'GoodListItem',
  props:{
    GoodItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },filters:{
    
  },computed:{
    showData(){
      return this.GoodItem.img ||this.GoodItem.image || this.GoodItem.show.img 
    },
    showPrice(){
      return '￥'+Number(this.GoodItem.price).toFixed(2)
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('itemImgLoad')
    },
    itemClick(){
      const iid = this.GoodItem.iid
      this.$router.push({path:'detail',query:{iid}})
    }
  }
}
  
</script>

<style>
  .goods-item{
    padding-bottom: 40px;
    position: relative;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-item-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    text-align: center;
  }
  .goods-item-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .price{
    color: var(--color-high-text);
    margin-right:20px;
  }
  .cfav{
    position:relative;
  }
  .cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background:url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
