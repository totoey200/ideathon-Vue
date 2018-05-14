import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import CreateIdea from '@/components/CreateIdea'

Vue.use(Router)

export var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/createidea',
      name: 'CreateIdea',
      component: CreateIdea
    }
  ]
})
