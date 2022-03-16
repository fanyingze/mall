const actions ={
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      
    if(oldProduct){
      context.commit('oldProduct',oldProduct)
      resolve('当前数量+1')
    }else{
      context.commit('newProduct',payload)
      resolve('已经成功添加至购物车')
    }
    })
  }
}

export default actions