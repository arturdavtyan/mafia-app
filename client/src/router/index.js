import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Empty layout
    {
      path: '/',
      component: () => import('@/layouts/Empty.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/Home/Home.vue')
        }
      ]
    }
  ]
})
