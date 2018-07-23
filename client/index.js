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

// 动态注册一个模块
store.registerModule('c', {
  state: {
    text: 'test textC'
  }
})

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log(newCount, 'newCount')
// })

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})
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
