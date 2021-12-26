import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import ErrorPage from '../views/ErrorPage.vue'
// import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  { path: '*',
    name: 'ErrorPage', 
    component: ErrorPage 
  },  
  // { path: '*',
  //   redirect: '/404' 
  // }, 
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
