<template>
  <div class="list">
    <div class="list-item" 
    v-for="(item,index) in categories" 
    :key="index"
    @click="listChange(index)"
    :class="{active:currentIndex === index}"
    >{{item.title}}

    </div>
  </div>
</template>

<script>
export default {
  name:'categoryList',
  props:{
    categories:{
      type:Array
    }
  },data(){
    return {
      currentIndex:0
    }
  },methods:{
    listChange(index){
      this.currentIndex = index;
      this.$emit('listChange',index)
    }
  }
}
</script>

<style scoped>
.list{
  width: 100px;
}
.list-item{
  width: 100px;
  height:45px ;
  line-height:45px;
  text-align: center;
  color: #666666;
  background: #f6f6f6;
}
.active{
  background: white;
  color: var(--color-high-text);
  font-weight: 700;
  border-left: 3px solid var(--color-high-text);
}
</style>