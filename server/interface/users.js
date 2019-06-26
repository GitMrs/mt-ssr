import Router from 'koa-router';
import nodemailer from 'nodemailer';
import Redis from 'koa-redis';

import userModel from '../dbs/model/user.js';
import Email from '../dbs/config.js';
import passport from './utils/passport.js';
import axios from './utils/axios.js';
let router = new Router({
  prefix: "/users" // 所有这个文件下的接口，都添加users前缀
})
let Store = new Redis().client // 获取redis客户端

//用户注册
router.post('/signup', async (ctx, next) => {
  let { username, password, code, email } = ctx.request.body;
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code');
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire');
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire < 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已经过期，请重新尝试'
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '验证码不正确，请输入正确的验证码'
      }
    }
    let user =await userModel.find({
      username
    })
    if (user.length) {
      ctx.body = {
        code: -1,
        msg: '该用户名已经注册'
      }
      return false;
    }
    let nuser = await userModel.create({
      username,
      password,
      email
    })
    if (nuser) {
      let res = await axios.post('/users/signin', {
        username, password
      })
      console.log(res)
      if (res.data && res.data.code === 0) {
        ctx.body = {
          code: 0,
          msg: '注册成功',
          user: res.data.user
        }
      } else {
        ctx.body = {
          code: -1,
          msg: 'error'
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '注册失败'
      }
    }
  }
})
//用户登录
router.post('/signin', async (ctx, next) => {
  // let {username,password} = ctx.request.body;
  return passport.authenticate('local', function (err, user, info, status) {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: -1,
          msg: info
        }
      }
    }
  })(ctx, next)
})
//邮箱认证
router.post('/verify', async (ctx, next) => {
  // console.log('======>',1)

  let username = ctx.request.body.username;
  const saveExpire = await Store.hget(`nodemail:${username}`, 'expire');
  if (saveExpire && (new Date().getTime() - saveExpire) > 0) {
    ctx.body = {
      code: -1,
      msg: '验证码请求过于频繁，1分钟内1次'
    }
    return false
  }
  //nodemailer 邮件发送
  let transporter = nodemailer.createTransport({
    host: Email.smtp.host,
    port: 587,
    secure: false,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  })
  let ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  }
  let mailOptions = {
    from: `"认证邮件"<${Email.smtp.user}>`,
    to: ko.email,
    subject: '测试邮件',
    html: `测试邀请码是${ko.code}`
  }
  // console.log(mailOptions)
  // 发送邮件动作
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error, info)
    } else {
      // 存储--redis
      Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码已发送，可能会有延时，有效期1分钟'
  }
})

//退出登录
router.get('/exit', async (ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})
//获取用户名
router.get('/getUser', async (ctx) => {
  if (ctx.isAuthenticated()) {
    const { username, email } = ctx.session.passport.user
    ctx.body = {
      code: 0,
      user: username,
      email
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '获取用户失败'
    }
  }
})
export default router