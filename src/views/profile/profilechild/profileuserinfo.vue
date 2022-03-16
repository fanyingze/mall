<template>
  <div class="wrap">
    <div class="user-content">
      <img class="user-icon" src="@/assets/img/profile/avatar.svg" alt="" />

      <div class="user-text">
        <div class="login">登录/注册</div>
        <div class="phone">
          <img class="phone-icon" src="@/assets/img/profile/phone.svg" alt="" />
          <div>暂无绑定手机号</div>
        </div>
    </div>

    </div>
    
    <div class="arrow">
      <img src="@/assets/img/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "profileuserinfo",
  computed: {},
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 85px;
  color: #fff;
  font-size: 14px;
  background: var(--color-tint);
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.user-icon{
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.login{
  font-size: 18px;
  font-weight: 700;
}
.user-text{
  height: 50px;
  margin-left:10px;
}
.user-content{
  display: flex;
  align-items: center;
}
.phone-icon{
  width: 20px;
}
.phone{
  height: 30px;
  line-height: 30px;
  display: flex;
}
.arrow{
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.arrow img{
  width: 20px;
  height: 20px;
}
</style>