<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';


export default {
  
  name: "category"
  ,data(){
    return {
      scroll:null
    }
  },props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  mounted(){
    this.scroll = new BetterScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      mouseWheel:true,
      click:true,
      pullUpLoad:true
    })
    
    // 监听滚动位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollTo(x,y,time = 300){
      // 前面加这个是先判断其有没有值，如果有的话，再执行
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    finishedPullUp() {
        this.scroll  && this.scroll.finishPullUp()
      },refresh(){
    // 这里是为了解决高度不能即使更新的bug
    console.log('刷新了');
    this.scroll && this.scroll.refresh()
  }
  }
};

</script>

<style scoped>
.wrapper{
  overflow: hidden;
}
</style>
