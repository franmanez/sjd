import { createRouter, createWebHistory } from 'vue-router'
import Convocatories from "@/views/Convocatories.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/HomeView.vue')
  },
  {
    path: '/carrera/formacio',
    name: 'carrera-formacio',
    component: () => import(/* webpackChunkName: "about" */ './views/CarreraFormacio.vue')
  },
  {
    path: '/carrera/docencia',
    name: 'carrera-docencia',
    component: () => import(/* webpackChunkName: "about" */ './views/CarreraDocencia.vue')
  },
  {
    path: '/carrera/recerca',
    name: 'carrera-recerca',
    component: () => import(/* webpackChunkName: "about" */ './views/CarreraRecerca.vue')
  },
  {
    path: '/convocatories',
    name: 'convocatories',
    component: Convocatories
  },
  {
    path: '/table',
    name: 'tablePagination',
    component: () => import(/* webpackChunkName: "about" */ './samples/SamplePage.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ './samples/ParentComponent.vue')
  },
  { path: '/:pathMatch(.*)*', name: 'error', component: Error },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
