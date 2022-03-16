<template>
<div class="params-info">
  <!-- 上半部分表格 -->
  <div v-if="itemParams.rule" class="info-1">
    <table 
    v-for="(item,index) in itemParams.rule.tables" :key="index" class="info-size">
      <tr v-for="(tr,indey) in item" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">
          {{td}}
        </td>
      </tr>
    </table>
  </div>

  <!-- 下半部分表格 -->
  <div class="info-2">
    <table v-if="itemParams.info" class="info-params">
      <tr v-for="(item,index) in itemParams.info.set" :key="index">
        <td class="info-params-key">{{item.key}}</td>
      <td class="info-params-value"> {{item.value}}</td>
      </tr>
    </table>
  </div>

</div>
</template>

<script>
export default {
  name:'detailGoodsParams',
  props:{
    itemParams:{
      type:Object
    }
  },
  
  }
</script>

<style scoped>
.params-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
.params-info table {
    width: 100%;
    border-collapse: collapse;
  }
  .params-info table tr {
    height: 42px;
  }
  .params-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-params-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
  .info-params {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .info-params-value{
    color:var(--color-high-text)
  }
</style>