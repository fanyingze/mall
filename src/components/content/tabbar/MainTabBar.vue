<template>
  <div id="app">
    <TabBar>
      <TabBarItem path="/home" activeColor="#ff5777">
        <img slot ="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
        <img slot ="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
        <span slot="item-text">首页</span>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="#ff5777">
        <img slot ="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
        <img slot ="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
        <span slot="item-text">分类</span>
      </TabBarItem>
      <TabBarItem path="/shopcart" activeColor="#ff5777">
        <img slot ="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="">
        <img slot ="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
        <span slot="item-text">购物车</span>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="#ff5777">
        <img slot ="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
        <img slot ="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
        <span slot="item-text">我的</span>
      </TabBarItem>
    </TabBar>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TabBar from '@/components/common/tabbar/TabBar.vue';
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  components: {
    TabBar,TabBarItem
  }
}
</script>

<style>
/* @import '@/assets/css/base.css'; */
</style>
