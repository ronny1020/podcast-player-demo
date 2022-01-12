import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/modules/podcast/views/PodcastHome.vue'),
    children: [
      {
        path: '/',
        component: () =>
          import('@/modules/podcast/views/podcastList/PodcastList.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
