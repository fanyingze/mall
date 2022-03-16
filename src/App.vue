<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view class="router"></router-view>
    </keep-alive>
    <MainTabBar class="TabBar"></MainTabBar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainTabBar from '@/components/content/tabbar/MainTabBar.vue';

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
@import 'assets/css/normalize.css';

</style>
