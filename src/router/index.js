import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home =() => import('@/views/home/home.vue')
const Category =() => import('@/views/category/category.vue')
const Profile =() => import('@/views/profile/profile.vue')
const Shopcart =() => import('@/views/shopcart/shopcart.vue')
const Detail =() => import('@/views/detail/detail.vue')

const router = new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'home'
    },{
      path:'/home',
      component:Home
    },{
      path:'/category',
      component:Category
    },{
      path:'/shopcart',
      component:Shopcart
    },{
      path:'/profile',
      component:Profile
    },{
      path:'/detail',
      component:Detail
    }
  ],
  mode:"history"
})

export default router