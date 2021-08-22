import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./views/main/Index.vue')
    },
    {
      path: '/rooms',
      name: 'rooms',
      redirect: { name: 'rooms-list' },
      component: () => import('./views/rooms/Index.vue'),
      children: [
        {
          path: 'list',
          name: 'rooms-list',
          component: () => import('./views/rooms/List.vue')
        }
      ]
    },
    {
      path: '/new-room',
      name: 'new-room',
      component: () => import('./views/newRoom/Index.vue')
    },
    {
      path: '/room/:uuid',
      name: 'room',
      component: () => import('./views/room/Index.vue'),
      beforeEnter (to, from, next) {
        const isPlayer = !!store.getters['Game/GetPlayer']

        isPlayer ? next() : next({ name: 'main' })
      }
    },


    {
      path: '*',
      redirect: { name: 'main' }
    }
  ]
})

router.afterEach(() => {

})

// router.beforeEach((to, from, next) => {
  
// })

export default router