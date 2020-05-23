import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    //Declarar las rutas así hace que la cargue al inicar la app, solo usar para algunas paginas
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/location',
    name: 'Location',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Location.vue')
  },
  {
    path: '/product/:id',
    name: 'ShowProduct',
    component: () => import(/* webpackChunkName: "product" */ '../views/ShowProduct.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "product" */ '../views/Products.vue')
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('../views/New.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
