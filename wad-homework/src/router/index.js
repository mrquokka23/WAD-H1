import { createRouter, createWebHashHistory } from 'vue-router'
import PostsView from '../views/PostsView.vue'

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: PostsView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
