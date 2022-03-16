<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" v-bind:key="index">
        <a v-bind:href="item.link">
          <img v-bind:src="item.image" alt="" @load="SwiperImageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>


<script>

import {Swiper, SwiperItem} from '@/components/common/swiper'

export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },props:{
    banners:{
      type:Array,
      required:true
    }
  },methods:{
    SwiperImageLoad(){
      this.$emit('SwiperImageLoad')
    }
  }
};
</script>

<style scoped>
  
</style>

