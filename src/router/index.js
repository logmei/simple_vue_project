import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

/**
 * 静态路由
 */
export const constantRoutes = [
  { 
      path:'/login',
      component:()=> import('@/views/login/index.vue'),
      hidden:true
  },
  {
      path:'/404',
      component:()=>import('@/views/errorPage/404.vue'),
      hidden:true
  },
  {
      path:'*',
      component:()=>import('@/views/errorPage/401.vue'),
      hidden:true
  }
]
/**
 * 动态路由
 */
export const asyncRoutes = [
    {
        path:'/',
        component:()=>import('@c/index.vue'),
        name:'Main'
    }
]

/**创建router实例 */

export default new VueRouter({
    routes:[...constantRoutes,...asyncRoutes]
})

