import Koa from 'koa';

import consola from 'consola';
import mongoose from 'mongoose';
import bodyparser from 'koa-bodyparser'; //post请求处理
import session from 'koa-generic-session'; //session处理
import Redis from 'koa-redis';  //redis 用户获取邮件验证码
import json from 'koa-json'; //返回json数据,进行美化
import dbsConfig from './dbs/config.js';
import passport from './interface/utils/passport.js';
// const { Nuxt, Builder } = require('nuxt')
import {Nuxt,Builder} from 'nuxt';

//api
import users from './interface/users'
import geo from './interface/geo'
import search from './interface/search';
import cart from './interface/cart';
import order from './interface/order';

const app = new Koa()
//koa配置
app.keys = ['mt','keyskeys']
app.proxy = true
app.use(session({
  key:'mt',
  prefix:'mt:uid',
  store:new Redis()
}))
app.use(bodyparser({
  extendTypes:['json','form','text']
}))
app.use(json())
//连接数据库
mongoose.connect(dbsConfig.dbs,{
  useNewUrlParser:true
})
//配置passport,处理相关登录
app.use(passport.initialize())
app.use(passport.session())
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.baseUrl || '127.0.0.1',
    port = process.env.port || 3000
  } = nuxt.options.server
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  // 配置路由 --- 固定写法，且固定位置
  app.use(users.routes()).use(users.allowedMethods()); 
  app.use(geo.routes()).use(geo.allowedMethods());
  app.use(search.routes()).use(search.allowedMethods());
  app.use(cart.routes()).use(cart.allowedMethods());
  app.use(order.routes()).use(order.allowedMethods());

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
