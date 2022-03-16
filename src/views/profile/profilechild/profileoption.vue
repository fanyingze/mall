<template>
  <div>
    <div class="part1">
      <div class="item">
        <div class="icon"> <img class="icon" src="@/assets/img/profile/shopping.svg" alt=""></div>
        <span class="info">我的订单</span>
      </div>
      <div class="item">
        <div class="icon"> <img class="icon" src="@/assets/img/profile/message.svg" alt=""></div>
        <span class="info">我的消息</span>
      </div>
      <div class="item">
        <div class="icon"> <img class="icon" src="@/assets/img/profile/cart.svg" alt=""></div>
        <span class="info">我的购物车</span>
      </div>
    </div>
    <div class="part2">
      <div class="item">
        <div class="icon"> <img class="icon" src="@/assets/img/profile/vip.svg" alt=""></div>
        <span class="info">会员卡</span>
      </div>
      <div class="item">
        <div class="icon"> <img class="icon" src="@/assets/img/profile/pointer.svg" alt=""></div>
        <span class="info">积分商城</span>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name:'profileoption',
  filters:{
    
  },
  computed:{
    imgUrl(){
      return '@/assets/img/profile/message.svg'
    }
  }
}
</script>

<style scoped>
.part1{
  border-bottom: 20px solid rgba(0,0,0,.04);
}
.item{
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  padding-left: 15px;
}
.item img{
  width: 20px;
  height: 20px;
}
.icon{
  width: 20px;
  display: flex;
  align-items: center;
  margin-right:13px ;
}
.info{
  padding-left: 3px;
  width: calc(100vw - 20px);
  border-bottom: 1px solid rgba(0,0,0,.04);
}
</style>