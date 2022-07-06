import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/authority',
    name: 'authority',
    component: () => import('../views/AuthorityView.vue')
  },
  {
    path: '/publish',
    name: 'publish',
    component: () => import('../views/PublishView.vue')
  },
  {
    path: '/timer',
    name: 'timer',
    component: () => import('../views/TimerView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
