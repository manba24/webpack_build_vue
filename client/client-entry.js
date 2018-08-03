import creatApp from './create-app'
import bus from './util/bus'
const {app, router} = creatApp()

bus.$on('auth', () => {
  router.push('/login')
})
router.onReady(() => {
  app.$mount('#root')
})
