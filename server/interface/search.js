import Router from 'koa-router';

let router = new Router({
  prefix:'/search'
})



//用户是否登录
router.get('/isSignIn',(ctx,next) => {
  ctx.body = {
    login:ctx.isAuthenticated()
  }
})


export default router;