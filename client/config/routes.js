import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    path: '/app',
    // props可定制..可以是一个函数
    // props:(route)=> ({id: route.query.b})
    props: true,
    components: {
      default: Todo,
      a: Login
    },
    name: 'app',
    meta: {
      title: 'this is app'
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/login/exact',
    component: Login
  }
]
