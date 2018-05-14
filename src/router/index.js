import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import CreateIdea from '@/components/CreateIdea'
import EditIdea from '@/components/EditIdea'

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
    },
    {
      path: '/editidea/:id',
      name: 'EditIdea',
      component: EditIdea
    }
  ]
})
