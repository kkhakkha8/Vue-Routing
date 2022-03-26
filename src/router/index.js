import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import JobDetailView from "../views/jobs/JobDetailView.vue"
import JobsView from "../views/jobs/JobsView.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // component : ()=>{
      // return import ('../views/AboutView.vue') lazy loading
    //}
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path:'/jobs',
    name:'jobs',
    component:JobsView
  },
  {
    path:'/jobs-detail/:id',
    name:'jobs-detail',
    component:JobDetailView,
    props : true
  },
  {
    path:'/all-jobs',
    redirect : '/jobs'
  },
  // catchAll
  {
    path: '/:catchAll(.*)',
    component : NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
