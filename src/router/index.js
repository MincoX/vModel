import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('@/views/login/Login')
const Management = () => import('@/views/management/Management')
const Index1 = () => import('@/views/management/menuList/index/Index1')
const Index2 = () => import('@/views/management/menuList/index/Index2')
const Index3 = () => import('@/views/management/menuList/index/Index3')
const BookingPlatform = () => import('@/views/management/menuList/menus/BookingPlatform')
const Dashboard1 = () => import('@/views/dashboard/Dashboard1')


const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/dashboard1',
    component: Dashboard1,
  },
  {
    path: '/management',
    component: Management,
    children: [
      {
        //以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了
        path: 'index1',
        name: 'index1',
        component: Index1
      },
      {
        path: 'index2',
        name: 'index2',
        component: Index2
      },
      {
        path: 'index3',
        name: 'index3',
        component: Index3
      },
      {
        path: 'menu1',
        name: 'menu1',
        component: BookingPlatform
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫
// import store from '@/store/idnex'
import Loading from '@/components/common/loading'

import NProgress from 'nprogress'

router.beforeEach((to, from, next) => {
  next()
  // if (store.userInfo.status) {
  //   next()
  // } else {
  //   next({ path: '/login' })
  // }
})

router.afterEach(() => {
  NProgress.done()
  Loading.done()
})

export default router
