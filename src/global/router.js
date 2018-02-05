/**
 * Created by 熊超超 on 2017/8/4.
 */
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import HomePage2 from '../components/HomePage2'
import HomePage3 from '../components/HomePage3'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/b',
      component: HomePage2
    },
    {
      path: '/b/c',
      component: HomePage3
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

// 路由改变的钩子
// router.beforeEach((to, from, next) => {
// })

export default router
