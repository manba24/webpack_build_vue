import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    path: '/app/:id',
    props: {
      default: true,
      login: true
    },
    // props可定制..可以是一个函数
    // props:(route)=> ({id: route.query.b})
    components: {
      default: Todo,
      // 异步路由，加快首屏加载
      login: () => import('../views/login/login.vue')
    },
    name: 'app',
    meta: {
      title: 'this is app'
    }
    // beforeEnter (to, from, next) {
    //   console.log('app router before enter')
    //   next()
    // }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/login/exact',
    component: () => import('../views/login/login.vue')
  }
]
