import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import CreateIdea from '@/components/CreateIdea'
import EditIdea from '@/components/EditIdea'

Vue.use(Router)

export var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {auth: false}
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {auth: true}
    },
    {
      path: '/createidea',
      name: 'CreateIdea',
      component: CreateIdea,
      meta: {auth: true}
    },
    {
      path: '/editidea/:id',
      name: 'EditIdea',
      component: EditIdea,
      meta: {auth: true}
    }
  ]
})

router.beforeEach((to, from, next)=>{
  if(to.meta.auth){
    if(!localStorage.getItem['idea_token']){
      next()
    }
    else{
      next('/')
    }
  }
  else{
    next()
  }
})
