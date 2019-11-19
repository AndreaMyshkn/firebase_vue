import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'init',
  
    component: () => import(/* webpackChunkName: "init" */ '../views/Init.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
  
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue')
  }, 
  {
    path: '/add',
    name: 'add',
  
    component: () => import(/* webpackChunkName: "edit" */ '../views/Add.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
