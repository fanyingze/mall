<template>
<div>
  <swiper>
    <swiper-item v-for="(item,index) in data" :key="index" class="swiper-item">
      <img v-bind:src="item" alt="">
    </swiper-item>
  </swiper>
</div>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'

export default ({
  name:"detailSwiper",
  components:{
    Swiper,SwiperItem
  },props:{
    data:{
      type:Array,
      required:true
    }
  }
})
</script>

<style scoped>
.swiper-item{
  height: 300px;
}
</style>