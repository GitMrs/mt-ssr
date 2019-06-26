import Router from 'koa-router';
import Order from '../dbs/model/order';
import Cart from '../dbs/model/cart';
import md5 from 'crypto-js/md5';
let router = new Router({
  prefix:'/order'
});
//创建订单
router.post('/createOrder',async (ctx) => {
  let {id,price,count} = ctx.request.body;
  let time = new Date();
  let orderId = md5(Math.random()*1000 + time).toString();
  if(!ctx.isAuthenticated()){
    ctx.body = {
      code:-1,
      msg:'请登录！'
    }
    return false;
  }
  let findCart =await Cart.findOne({cartNo:id});
  console.log(findCart)
  let order = new Order({
    id:orderId,
    count,
    total:count*price,
    time,
    user: ctx.session.passport.user,
    name: findCart.detail[0].name,
    imgs: findCart.detail[0].imgs,
    status: 0
  })
 
  try {
    let result = await order.save();
    if(result){
      await findCart.remove();
      ctx.body = {
        code:0,
        id:orderId
      }
    }else{
      ctx.body = {
        code:-1,
        id:''
      }
    }
  } catch (error) {
    ctx.body = {
      code:-1,
      id:'',
      msg:error
    }
  }
})
//查询订单
router.post('/getOrder',async (ctx) => {

  if(!ctx.isAuthenticated()){
    ctx.body = {
      code:-1,
      msg:'用户未登陆'
    }
  }
  let {user} = ctx.session.passport;
  try {
    let result = await Order.find({user});
    if(result){
      ctx.body = {
        code:0,
        list:result
      }
    }else{
      ctx.body = {
        code:-1,
        list:[]
      }
    }
  } catch (error) {
    ctx.body = {
      code:-1,
      list:'',
      msg:error
    }
  }
})


export default router;