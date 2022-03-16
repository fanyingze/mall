<template>
  <div>
    <navBar class="profile-nav"><div slot="center">我的档案</div></navBar>
    <user-info></user-info>
    <count></count>
    <profileoption></profileoption>
  </div>
</template>


<script>
import navBar from '@/components/common/navbar/navBar.vue'
import count from './profilechild/profilecount.vue'
import userInfo from './profilechild/profileuserinfo.vue'
import profileoption from'./profilechild/profileoption.vue'



export default {
  name: "profile",
  components:{
    navBar,
    userInfo,
    count,
    profileoption
    }
};
</script>

<style scoped>
.profile-nav{
  width: 100%;
    position: relative;
    top:0px;
    z-index: 99;
    background-color:var(--color-tint) ;
    color: #fff;
    z-index: 9;
}
</style>

