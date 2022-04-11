import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/usefetchcache',
      name: 'usefetchcache',
      component: () => import('../views/UseFetchCache.vue'),
    },
    {
      path: '/usestorage',
      name: 'usestorage',
      component: () => import('../views/UseStorage.vue'),
    },
    {
      path: '/useviewport',
      name: 'useviewport',
      component: () => import('../views/UseViewPort.vue'),
    },
    {
      path: '/useonclickoutside',
      name: 'useonclickoutside',
      component: () => import('../views/UseOnClickOutside.vue'),
    },
  ],
})

export default router
