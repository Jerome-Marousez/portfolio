import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../Pages/HomePage.vue'
import ContactPage from '../Pages/ContactPage.vue'
import ProjectsPage from '../Pages/ProjectsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import(/* webpackChunkName: "projects" */ '../Pages/ProjectsPage.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import(/* webpackChunkName: "contact" */ '../Pages/ContactPage.vue')
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
