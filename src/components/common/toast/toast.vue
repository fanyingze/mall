<template>
  <div   v-show="toastIsShow" class="toast fadeOut">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default{
  name:"toast",
  data(){
    return {
      message:'',
      toastIsShow:false
    }
  },
  methods:{
    showToast(message='请输入您所需的文字',duration=1500){
      this.message = message
      this.toastIsShow = true

      setTimeout(()=>{
        this.message = ''
        this.toastIsShow = false
      },duration)
    }
  }

}
</script>

<style scoped>
.toast{
  z-index: 999;
  position: fixed;
  left: 50%;
  top: 50%;
  color: white;
  padding: 8px 10px;
  border-radius: 5px;
  background:rgba(0,0,0,.75);
  transform: translate(-50%,-50%);
}

</style>