<template>
  <div class="tab-bar-item" v-on:click="itemClick()">
    <div v-if="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
    <div v-else class="item-icon-active"><slot name="item-icon-active"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
// import TabBar from '@/components/common/tabbar/TabBarItem.vue'

export default {
  name:"TabBarItem",
  props:{
    path:{
      type:String,
      required:true
    },activeColor:{
      type:String,
      defalut:'#222222'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      // return {color:'red'}
      return this.isActive ? {color: this.activeColor} : {}
      
    }
  },
  methods:{
    itemClick(){
      
      this.$router.replace(this.path).catch(err => err)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  font-size: 14px;
  height: 49px;
  /* align-items: center; */
}
.tab-bar-item, .item-icon img, .item-icon-active img{
  width: 24px;
  height: 24px;
  margin-top: 2px;
  margin-bottom: 1px;
  vertical-align: middle;
}
</style>