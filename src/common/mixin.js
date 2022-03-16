import {debounce} from './debounce.js'

export const itemListenerMixin={
  mounted(){
    let newRefresh = debounce(this.$refs.scroll.refresh,100)

    this.itemImgListener = () =>{
      newRefresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener)

    
  },
  destroyed(){
    this.$bus.$off('itemImgLoad',this.itemImgListener)
    console.log('离开')
  },deactivated(){
    this.$bus.$off('itemImgLoad',this.itemImgListener)
    console.log('离开');
  }
}