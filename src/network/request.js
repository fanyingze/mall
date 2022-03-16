import axios from "axios"

export function request(config){
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })

  // 2.过滤器（拦截器）
  instance.interceptors.response.use(res=>{

    return res.data
  },err=>{
    console.log(err);
  })

  return instance(config)
}
