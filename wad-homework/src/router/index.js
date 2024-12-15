import { createRouter, createWebHashHistory } from 'vue-router'
import PostsView from '../views/PostsView.vue'
import PostView from '../views/PostView.vue'
import ContactView from '@/views/ContactView.vue';
import auth from "../auth";

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: PostsView,
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticated();
      console.log("auth result: ", await authResult)
      if (!authResult) {
        next('/login')
      } else {
        next();
      }
    }
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
  {
    path: '/post',
    name: 'Post', 
    component: () => import('../views/PostView.vue'),
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticated();
      console.log("auth result: ", await authResult)
      if (!authResult) {
        next('/login')
      } else {
        next();
      }
    }
  },
  {
    path: '/add_post',
    name: 'Add Post',
    component: () => import('../views/AddPostView.vue'),
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticated();
      console.log("auth result: ", await authResult)
      if (!authResult) {
        next('/login')
      } else {
        next();
      }
    }
  },
  {
    path: '/post/:id',
    name: 'PostView',
    component: PostView, 
    props: true
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
