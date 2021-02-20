import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('views/home/Home')
    },
    {
      path: '/category',
      component: () => import('views/category/Category')
    },
    {
      path: '/shopcart',
      component: () => import('views/shopcart/Shopcart')
    },
    {
      path: '/profile',
      component: () => import('views/profile/Profile')
    }
  ]
})
