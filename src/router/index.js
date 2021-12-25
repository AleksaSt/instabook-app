import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Gallery from '../views/Gallery.vue'
import ErrorPage from '../views/ErrorPage.vue'
// import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  { path: '*',
    name: 'ErrorPage', 
    component: ErrorPage 
  },  
  // { path: '*',
  //   redirect: '/404' 
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.path != '/login') {
//       if(store.getters.isUserLoggedIn) { 
//           next();
//       } else {
//           next({name: 'Login'});
//       }
//   } else {
//       next();
//   }

//   if (to.path == '/login' && store.getters.isUserLoggedIn) {
//     next({name: 'Home'})
//   }

  // if (to.path == '*') {
  //   next({name: 'ErrorPage'})
  // }
// });

export default router
