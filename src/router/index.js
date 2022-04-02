import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue'
import Project from '../views/project/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Project',
        component: Project,
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
