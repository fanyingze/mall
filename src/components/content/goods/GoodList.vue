<template>
  <div>
    <div class="goods-list">
    <GoodListItem 
    class="item"
    v-for="item in goods"
    :GoodItem="item"
    ></GoodListItem>
    </div>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem.vue'


export default {
  
  name: 'GoodList',
  components:{
    GoodListItem
  },
  props:{
    goods:{
      type: Array,
        default() {
          return []
        }
    }
  }
}

</script>

<style>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
  }
  .goods-list .item{
    width: 48%;
  }
</style>
