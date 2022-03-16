<template>
  <div class="cart-list">
    <div class="cart-selector">
      <check-box :isChecked="itemInfo.check" @click.native="clickChecked"></check-box>
    </div>
    
    <div class="cart-img">
      <img :src="itemInfo.imgURL" alt="">
    </div>

    <div class="cart-text">
      <div class="text-title">
        {{itemInfo.title}}
      </div>
      <div class="text-desc">
        {{itemInfo.desc}}
      </div>
      <div class="text-bottom">
        <div class="price">
          ￥{{itemInfo.price}}
        </div>
        <div class="count">
          <button class="button" @click="addCount">+</button>
          {{itemInfo.count}}
          <button class="button" @click="subCount">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkBox from './checkBox.vue'

export default {
  name:'goodsListItem',
  props:{
    itemInfo:{
      type:Object
    }
  },components:{
    checkBox
  },methods:{
    clickChecked(){
      this.itemInfo.check = !this.itemInfo.check
    },addCount(){
      this.itemInfo.count ++;
    },subCount(){
      if(this.itemInfo.count>1){
        this.itemInfo.count --;
      }
    }
  }
}
</script>

<style scoped>
.cart-list{
  width: 100%;
  display: flex;
  
  
  border-bottom: 1px solid #ccc;
}
.cart-selector{
  margin-left:5px ;
  display: flex;
  justify-content: center;
    align-items: center;
}
.cart-img img{
  margin: 10px;
  width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
.cart-text{
  font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
.text-title,.text-desc{
   text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.text-desc{
  margin-top: 10px;
  font-size: 14px;
}
.text-bottom{
  
  /* background-color:red ; */
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 25px;
  display: flex;
  justify-content:space-between ;
}
.button{
  margin-right: 5px;
  margin-left: 5px;
  width: 25px;
}
</style>