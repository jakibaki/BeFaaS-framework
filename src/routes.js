// const AWS = require('aws-sdk')
const Router = require('@koa/router')
const router = new Router()

module.exports = router

router.get('/', (ctx, next) => {
  ctx.body = { message: 'Hello World!' }
})

router.get('/logs', async (ctx, next) => {
  for (var i = 0; i < 10000; i++) {
    console.log(JSON.stringify({
      id: i,
      ts: (new Date()).getTime()
    }))
  }
  ctx.body = { done: true }
})