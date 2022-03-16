<template>
  <div>
    <scroll class="content" ref="scroll">
      
      <goods-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :itemInfo="item"
      ></goods-list-item>
    </scroll>
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem";
import scroll from "@/components/common/scroll/scroll.vue";
import {itemListenerMixin} from '@/common/mixin.js';

export default {
  name: "goodsList",
  components: {
    goodsListItem,
    scroll,
  },
  mixins:[itemListenerMixin],
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 84px;
  
}
</style>