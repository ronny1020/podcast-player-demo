import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/modules/podcast/views/PodcastHome.vue'),
    children: [
      {
        path: '/episode/:guid',
        component: () =>
          import('@/modules/podcast/views/episodePage/EpisodePage.vue'),
      },
      {
        path: '/',
        component: () =>
          import('@/modules/podcast/views/podcastList/PodcastList.vue'),
      },
    ],
  },
]

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHashHistory(),
  routes,
})

export default router
