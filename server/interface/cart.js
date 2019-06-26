import Router from 'koa-router';
import Cart from '../dbs/model/cart';
import MD5 from 'crypto-js/md5';
let router = new Router({
  prefix: '/cart'
})
router.post('/create', async (ctx, next) => {
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: '用户未登录'
    }
  } else {
    let time = new Date();
    let cartNo = MD5(Math.random() * 1000 + time).toString();
    let {
      params: {
        id,
        detail
      }
    } = ctx.request.body;
    let cart = new Cart({ id, cartNo, time, detail, user: ctx.session.passport.user });
    let result = await cart.save();
    if (result) {
      ctx.body = {
        code: 0,
        msg: '',
        id: cartNo
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'fail'
      }
    }
  }
})
router.post('/getCart', async (ctx, next) => {
  let { id } = ctx.request.body;
  try {
    let result = await Cart.findOne({ cartNo: id });
    ctx.body = {
      code: 0,
      msg:'成功',
      result: result ? result.detail[0] : {}
    }
  } catch (err) {
    ctx.body = {
      code: -1,
      result: {}
    }
  }
})
export default router;