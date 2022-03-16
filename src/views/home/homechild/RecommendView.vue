<template>
  <div class="recommends">
    <div v-for="(item,index) in recommends" v-bind:key="index" class="recommends-item">
      <a href="item.link" >
        <img v-bind:src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>


<script>

export default {
  name: "RecommendView",
  components:{
    
  },props:{
    recommends:{
      type:Array,
      required:true
    }
  }
};
</script>

<style scoped>


  .recommends{
    display: flex;
    font-size:14px;
  }
  .recommends-item{
    flex: 1;
    display: flex;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 10px solid #eee;
    align-self: center;
  }
  
  .recommends img{
    margin:  0px 10px auto;
    margin-bottom: 10px;
    width: 70px;
    height: 70px;
    
  }
  .recommends span{
    width: 70px;
  }
</style>

