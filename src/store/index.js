import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

// 1.安装插件
Vue.use(Vuex)
// 2.创建对象
const state = {
  cartList:[]
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
// 3.挂载Vue实例上
export default store