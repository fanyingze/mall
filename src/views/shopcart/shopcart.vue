<template>
  <div>
    <navBar class="cart-nav"><div slot="center">购物车({{cartLength}})</div></navBar>
      <div v-show="cartLength == 0" class="nothing">你的购物车空空如也~</div>
      <goodsList :cartList="cartList"></goodsList>
      <goods-list-bottom v-show="cartLength !== 0" :cartList="cartList" ></goods-list-bottom>
  </div>
</template>


<script>
import navBar from "@/components/common/navbar/navBar.vue";
import goodsListBottom from './cartchild/goodsListBottom.vue'

import goodsList from './cartchild/goodsList.vue'

import { mapGetters } from 'vuex'

export default {
  name: "shopcart",
  components: {
    navBar,
    mapGetters,
    goodsList,
    goodsListBottom
  },
  
  computed:{
    ...mapGetters([
      	'cartLength',
        'cartList'
      ])
  },methods:{
    getSum(total,num){
      return total+num
    }
  }
};
</script>

<style scoped>
.cart-nav {
  width: 100%;
  position: relative;
  top: 0px;
  z-index: 99;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
}
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 44px;
}
.nothing{
 
  height: calc( 100vh - 98px);
  line-height:  calc( 100vh - 98px);
  font-size: 30px;
  text-align: center;
  color: var(--color-high-text);
  width: 100%;
  margin: 0 auto;
}
</style>

