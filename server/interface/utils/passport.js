import passport from 'koa-passport'; //用于登录
import localStrategy from 'passport-local'; //本地化策略
import userModel from '../../dbs/model/user.js';
//注册策略
passport.use(new localStrategy(async function(username,password,done){
  let where = {
    username
  };
  let result = await userModel.findOne(where)
  if(result !== null){
    if(result.password === password){
      return done(null,result)
    }else{
      return done(null,false,'用户名密码错误！')
    }
  }else{
    return done(null,false,'该用户不存在！')
  }
}))
/**
 * 如果想通过session进行验证，（实际使用中，我们通常会把鉴权后的用户身份保存在cookie中供后续请求来使用）
 * 我们需要添加序列化和反序列的操作。
 */

// 序列化
passport.serializeUser(function (user, done) {
  done(null, user) // 在调用 ctx.login() 时会触发------>用户登录成功之后，把用户的数据存储到session中，从而种植到客户端的cookie中去
})

// 反序列化
passport.deserializeUser(function (user, done) {
  return done(null, user) // 在请求时，session中如果存在 "passport":{"user":"xxx"}时触发
})

export default passport
