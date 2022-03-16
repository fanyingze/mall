<template>
<div>
  <div class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="price-n">{{ goods.newPrice }}</span>
      <span class="price-o">{{ goods.oldPrice }}</span>
      <span class="price-discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div v-if="goods.columns" class="info-other">
      <span  class="mount">{{ goods.columns[0] }}</span>
      <span class="mount">{{ goods.columns[1] }}</span>
      <span class="mount">{{ goods.columns[2] }}</span>
    </div>
  </div>
  <div class="line"></div>
  </div>
</template>


<script>
export default {
  name: "detailBaseInfo",
  props: {
    goods: {
      type: Object,
    },
  },
  
};
</script>

<style scoped>
.base-info {
  padding: 10px 10px 5px 10px;
}
.info-title {
  /* 这里设置了超出两行隐藏 */
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 18px;
  margin-bottom: 8px;
}
.info-price{
  width: 100%; 
  height: 30px;
  margin-bottom:30px ;
}
.price-n{
  color: var(--color-high-text);
  font-size: 25px;
  margin-right: 5px;
}
.price-o{
  text-decoration:line-through;
  color:#999;
  margin-right: 5px;
}
.price-discount{
  color: white;
  background-color:var(--color-high-text);
  border:3px solid var(--color-high-text); 
  border-radius: 7px;
  font-size: 14px;
  position: absolute;
}
.info-other{
  display: flex;
  justify-content: space-between;
  margin-bottom:3px ;
}
.info-other .mount{
  /* flex: 1; */
  font-size: 14px;
  color: #999;
  
}
.line{
  width:100%;
  height:5px;
  background-color: rgba(230, 230, 230, .3);
}
</style>
