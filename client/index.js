import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import Vuex from 'vuex'
import './assets/styles/global.styl'
import createRouter from './config/router'

import createStore from './store/store'

Vue.use(Vuex)
Vue.use(VueRouter)
const router = createRouter()
const store = createStore()
// router.beforeEach((to, from, next) => {
//   console.log('before each invoked')
//   next()
//   // if (to.fullPath === '/app') {
//   //   // next('/login')
//   //   next({path: '/login'})
//   // } else {
//   //   next()
//   // }
// })

// router.beforeResolve((to, from, next) => {
//   console.log('before resolve invoked')
//   next()
// })

// router.afterEach((to, from) => {
//   console.log('after each invoked')
// })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
