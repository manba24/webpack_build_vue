const Router = require('koa-router')

const userRouter = new Router({prefix: '/user'})

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  console.log(user)
  if (user.username === 'jack' && user.password === 'jack111') {
    ctx.session.user = {
      username: 'jack'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'jack'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
