// 配置路由信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// 路由懒加载
// const Home = resolve => require(['../components/Home'], resolve)
const Home = () => import('../components/Home')
const Homenews = () => import('../components/HomeNews')
const Homemessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {title: '首页'},
    children: [
      // 嵌套路由
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: Homenews
      },
      {
        path: 'message',
        component: Homemessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {title: '关于'},
    beforeEnter: (to, from, next) => {
      console.log('about beforeRouteEnter')
      next()
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {title: '用户'}
  },
  {
    path: '/profile',
    component: Profile,
    meta: {title: '档案'}
  }
]

// 创建VueRouter对象
const router = new VueRouter({
  // 配置路由和组件之间的对应关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置导航守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  document.title = to.matched[0].meta.title
  next()
})

// 后置导航钩子
router.afterEach((to, from) => {
  console.log('---------------')
})

// 导出路由对象
export default router
