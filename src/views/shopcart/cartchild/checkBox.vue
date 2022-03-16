<template>
  <div>
    <div class="icon-select" :class="{check : isChecked}">
      <img src="@/assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:"checkBox",
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .icon-select img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    
  }
  .check{
    width: 20px;
    height: 20px;
  border-radius: 50%;
  background-color:#ff8198 ;
  
  }
</style>
