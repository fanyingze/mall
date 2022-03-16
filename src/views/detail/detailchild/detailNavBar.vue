<template>
  <navBar>
      <div slot="left" class="navBarBackImg" @click="goBack"><img src="@/assets/img/common/back.svg" alt=""></div>
      <div slot="center" class="navbar">
        <div v-for="(item,index) in navbarList" :key="index"
             class="navbar-item"
             :class="{active:index === currentIndex}"
             @click="itemClick(index)">{{item}}
             </div>
      </div>
    </navBar>
</template>

<script>
import navBar from '@/components/common/navbar/navBar.vue';

export default ({
  name:'detailNavBar',
  components:{
    navBar
  },data(){
    return{
      navbarList:['商品','参数','评论','推荐'],
      currentIndex:0,
    }
  },
    methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('navbarIndex',index)
    },
    goBack(){
      this.$router.back()
    
  },
  }
})
</script>

<style scoped>

.navbar{
    display: flex;
  }
  .navbar-item{
    flex: 1;
    font-size: 14px;
  }
  .active{
    color: var(--color-high-text);
  }
  .navBarBackImg img{
    width: 20px;
    margin-top:12px ;
  }
</style>
