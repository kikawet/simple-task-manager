import MainLayout from '@/layouts/MainLayout.vue'
import type { Route } from '@/model/Route'
import { createRouter, createWebHistory } from 'vue-router'

export const routes: { [key: string]: Route } = {
  List: {
    path: '/',
    name: 'List',
    msg: 'List tasks'
  },
  Create: {
    path: '/create',
    name: 'Create',
    msg: 'Create task'
  },
  Update: {
    path: '/update',
    name: 'Update',
    msg: 'Edit task'
  },
  Delete: {
    path: '/delete',
    name: 'Delete',
    msg: 'Delete task'
  }
} as const

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        { ...routes.List, component: () => import('@/views/ListView.vue') },
        {
          ...routes.Create,
          component: () => import('@/views/CreateView.vue')
        },
        {
          ...routes.Update,
          component: () => import('@/views/UpdateView.vue')
        },
        {
          ...routes.Delete,
          component: () => import('@/views/DeleteView.vue')
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
