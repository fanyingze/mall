<template>
<div class="rate">

  <div class="top">
    <div>用户评价</div>
    <div>更多</div>
  </div>

  <div v-if="rate.list" class="user">
    <img class="user-avatar" :src="rate.list[0].user.avatar" alt="">
    <div class="user-name">{{rate.list[0].user.uname}}</div>
  </div>
 
  <div v-if="rate.list" class="content">
    <div class="content-text">{{rate.list[0].content}}</div>
    <div class="content-params">
      <div class="content-time">{{rate.list[0].created | showDate}}</div>
      <div class="content-style">{{rate.list[0].style}}</div>
    </div>
    <div v-if="rate.list" class="content-img" >
      <img v-for="(item,index) in rate.list[0].images" :key="index" :src="item" alt="">
    </div>
  </div>
</div>
</template>

<script>
import {formatDate} from '@/common/utils.js';
export default{
  name:"detailCommentInfo",
  props:{
    rate:{
      type:Object
    }
  },filters:{
     showDate:(value)=>{
       let date = new Date(value*1000)
       return formatDate(date,'yyyy-MM-dd')
     }
  }
}
</script>

<style scoped>
  .rate{
    padding: 7px;
    margin-top:10px;
    padding-bottom:20px;
    border-bottom: 2px solid rgba(100,100,100,.1);
  }
  .top{
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(100,100,100,.1);
    font-size: 14px;
  }
  .user{
    margin-top:10px;
    display: flex;
    line-height: 45px;
  }
  .user-avatar{
    width:45px;
    height:45px;
    border-radius: 50%;
  }
  .user-name{
    margin-left: 10px;
  }
  .content{
    margin-top:15px;
  }
  .content-text{
    font-size:14px;
    margin-bottom: 10px;
    
  }
  
  .content-params{
    font-size: 14px;
    display: flex;
    color: rgb(180,180,180);
  }
  .content-time{
    margin-right: 10px;
  }
  .content-img{
    margin-top:10px;
    display:flex;
  }
  .content-img img{
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>