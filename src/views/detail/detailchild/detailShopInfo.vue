<template>
  <div>
    <!-- 1.头像和店名 -->
    <div class="shop-name">
      <img :src="shop.logo" alt="">
      <div>{{shop.name}}</div>
    </div>
    <!-- 2.中部信息 -->
    <div class="shop-info">
      <!-- 3.销量和宝贝数量 -->
      <div class="shop-info-left">
        <div class="sells-info">
          <div class="sells-count">
            {{shop.sells | sellsFixed}}
          </div>
          <div class="sells-text">
            总销量
          </div>
        </div>
        <div class="count-info">
          <div class="count">
            {{shop.goodsCount}}
          </div>
          <div class="sells-text">
            全部宝贝
          </div>
        </div>
      </div>
      <!-- 4.评分等 -->
    <div class="shop-info-right">
      <tr v-for="(item,index) in shop.score" :key="index" class="score-content">
        <td class="score-name">{{item.name}}</td>
        <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
        <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
      </tr>
    </div>
    </div>
    <!-- 3.进店逛逛 -->
    <div class="shop-bottom">
      <div class="shop-end">进店逛逛</div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default{
  name:'detailShopInfo',
  props:{
    shop:{
      type:Object
    }
  },filters:{
    sellsFixed:(value)=>{
      if(value<10000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
/* 头像和店名 */
.shop-name{
  margin-top:10px ;
  padding: 10px;
  display: flex;
  line-height: 45px;
  font-size: 18px;
}
.shop-name img{
    width:45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
    margin-right: 10px;
}
/* 中部信息 */
.shop-info{
  display: flex;
  padding: 10px;
  margin-top: 18px;
  justify-content: space-evenly;
  align-items: center;
}
/* 左边左边左边 */
.shop-info-left{
  height: 50px;
  width:50%;
  display: flex;
  color:#333;
  font-size: 20px;
  justify-content: space-evenly;
  /* background-color: red; */
  border-right: 1px solid rgba(0,0,0,.1);
}
.sells-info,.count-info{
  text-align: center;
}
.sells-text{
  margin-top:10px;
  font-size: 13px;
}

.shop-info-right{
  line-height:20px;
  width:50%;
  font-size: 13px;
  text-align: center;
  padding-left:30px;
}
.shop-info-right td{
  padding-right:15px ;
}
.score{
  color: #5ea732
}
.score-better{
  color:#f13e3a
}
.better span{
  background-color:#5ea732 ;
  color:#fff;
}
.better-more span{
  background-color:#f13e3a ;
}
.shop-bottom{
  margin-top: 10px;
  width: 100%;
  display:flex;
  text-align:center;
}
.shop-end{
  background-color: rgba(0,0,0,.05);
  width: 180px;
  padding: 7px;
  margin: 0 auto;
  border-radius: 10px;
}
.line{
  width:100%;
  height:5px;
  background-color: rgba(230, 230, 230, .3);
  margin-top:10px ;
}
</style>