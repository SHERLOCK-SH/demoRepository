/*import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})*/
//配置路由
import Router from 'vue-router'
import  Vue from 'vue'
import Home from '../components/Home'
import About from  '../components/about'
import User from '../components/User'

//1.通过Vue.use(插件)，安装插件
Vue.use(Router)

//2.创建Vue-router对象
export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
    path: '/home',
    component: Home
  },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:id',
      component: User
    }
  ],
  mode: 'history',
  linkActiveClass: 'router-link-active'
})
