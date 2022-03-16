const mutations={
  
    // 前面有加入过，加数量
    oldProduct(state,payload){
      for(let i =0;i<state.cartList.length;i++){
        if(state.cartList[i].iid === payload.iid){
          state.cartList[i].count ++;
        }
      }
    },
    // 前面没有加入过，加入购物车
    newProduct(state,payload){
      
      payload.check = true
      state.cartList.push(payload)
      
    }
  
}

export default mutations