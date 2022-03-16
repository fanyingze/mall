<template>
  <div class="wrap">
    <div class="left">
      <span class="num">0.00</span><span>元</span>
      <div>我的余额</div>
    </div>
    <div class="mid">
      <span class="num">0</span><span>个</span>
      <div>我的优惠券</div>
    </div>
    <div class="right">
      <span class="num">0</span><span>分</span>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profilecount",
};
</script>

<style scoped>
.wrap{
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-bottom: 20px solid rgba(0,0,0,.04);
}
.left,.mid,.right{
  width: 33%;
  padding: 18px;
  padding-bottom: 12px;
  font-size: 13px;
  line-height: 25px;
}
.left,.mid{
  border-right: 1px solid rgba(0,0,0,.08);
}
.num{
  font-size: 24px ;
  font-weight: 700;
  color: #FF5F3E;
}
</style>