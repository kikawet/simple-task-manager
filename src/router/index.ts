import MainLayout from '@/layouts/MainLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = {
  Home: {
    path: '/',
    name: 'Home'
  },
  About: {
    path: '/about',
    name: 'About'
  }
} as const

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { ...routes.Home, component: () => import('@/views/HomeView.vue') },
        {
          ...routes.About,
          component: () => import('@/views/AboutView.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: () => import('@/views/ErrorNotFound.vue')
    }
  ]
})

export default router
