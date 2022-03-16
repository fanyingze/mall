<template>
  <div class="bottom">
    <!-- 左边 -->
    <div class="left">
      <div id="check">
        <check-box :isChecked="isChecked" @click.native="allCheck"></check-box>
      </div>
      <span>全选</span>
    </div>

    <!-- 中间 -->
    <div class="mid">
      <span>合计：</span>
      <span>{{ totalPrice }}</span>
    </div>

    <!-- 右边 -->
    <div class="right" >
      <span @click="purchase">去计算({{ totalCount }})</span>
    </div>
  </div>
</template>

<script>

import checkBox from "./checkBox.vue";
export default {
  name: "goodsListBottom",
  components: {
    checkBox,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter((item) => {
            return item.check;
          })
          .reduce((preValue, item) => {
            return (preValue + item.price * item.count)
          }, 0).toFixed(2)
      );
    },
    totalCount() {
      return this.cartList
        .filter((item) => {
          return item.check;
        })
        .reduce((preValue, item) => {
          return preValue + item.count;
        }, 0);
    },
    checkLength(){
      return this.cartList.filter(item=>
        item.check
      ).length
    },
    isChecked(){
      if(this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.check)
    }
  },
  props: {
    cartList: {
      type: Array,
    },
  },
  methods: {
    allCheck() {
      if(this.isChecked){
        this.cartList.forEach(item=> item.check = false)
      }else{
        this.cartList.forEach(item=> item.check = true)
      }
    },
    purchase(){
      if(this.isChecked == false){
        this.$toast.showToast('请选择您所需的商品',1500)
      }else{
        this.$toast.showToast('正在与服务器通信···',1000)
        setTimeout((
        )=>{
          this.$toast.showToast('请稍后重试',3000)
        },3000)
      }
    }
  },
};
</script>

<style scoped>
.bottom {
  width: 100%;
  background-color: #eee;
  height: 40px;
  position: absolute;
  bottom: 44px;
  display: flex;
  line-height: 40px;
  /* padding: 0px 5px; */
  justify-content: space-between;
}
#check {
  /* background-color: red; */
  /* position: absolute; */
  margin-right: 5px;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  padding-left: 8px;
  display: flex;
}
.right {
  width: 100px;
  background-color: var(--color-high-text);
  text-align: center;
  color: white;
}
</style>