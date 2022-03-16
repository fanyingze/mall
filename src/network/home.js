import {request} from './request';
// 这里需要用{}进行导入，原因：request.js里面的东西没有被default导出

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
export function getProductData(type,page){
  return request({
    url:'home/data',
    params:{
      type,
      page
    }
  })
}