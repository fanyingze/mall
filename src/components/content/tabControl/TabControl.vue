<template>
  <div class="tab-control">
    <div class="tab-control-item"
    v-for="(item,index) in titles" :key=index
    :class="{active:currentIndex === index}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size:15px;
    background-color: white;
  }
  .tab-control-item{
    flex:1;
  }
  .tab-control-item span{
    padding:5px;
  }
  .active{
    color:var(--color-high-text)
  }
  .active span{
    border-bottom:2px solid var(--color-high-text) ;
  }
</style>
