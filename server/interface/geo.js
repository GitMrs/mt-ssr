import Router from 'koa-router';
import axios from './utils/axios.js';
import Province from '../dbs/model/province';
import City from '../dbs/model/city';
import Menu from '../dbs/model/menu';
let router = new Router({ prefix: '/geo' });
let regCip = /(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])/
let regCid = /[1-9][0-9]{5}/
let regCname = /[\u4E00-\u9FA5]+/;
//位置获取使用新浪的位置获取方法，使用正则获取需要的值用户ip，用户邮编，用户区域
router.get('/getPosition', async (ctx) => {
  let { status, data } = await axios.get(`http://pv.sohu.com/cityjson?ie=utf-8`)
  if (status === 200) {
    ctx.body = {
      code: 0,
      cid: data.match(regCid)[0],
      cip: data.match(regCip)[0],
      city: data.match(regCname)[0]
    }
  }
})
//获取城市切换数据
router.get('/province', async (ctx) => {
  let province = await Province.find();
  ctx.body = {
    province: province.map(item => {
      return {
        id: item.id,
        name: item.value[0]
      }
    })
  }
})
//获取某个省份
router.get('/province/:id', async (ctx) => {
  let city = await city.findOne({ id: ctx.params.id });
  ctx.body = {
    code: 0,
    city: city.value.map(item => {
      return { provice: item.provice, id: item.id, name: item.name }
    })
  }
})
//获取到全部城市
router.get('/city', async (ctx) => {
  let city = []
  let result = await City.find();
  result.forEach((item) => {
    city.concat(item.value)
  })
  ctx.body = {
    code: 0,
    city: city.map((item) => {
      return {
        province: item.province,
        id: item.id,
        name: item.name === '市辖区' || item.name === '省直辖县级行政区划'
          ? item.province
          : item.name
      }
    })
  }
})
//切换热门城市页面
router.get('/hotCity', async (ctx) => {
  let list = [
    '北京市',
    '上海市',
    '广州市',
    '深圳市',
    '天津市',
    '西安市',
    '杭州市',
    '南京市',
    '武汉市',
    '成都市'
  ]
  let result = await City.find();
  let nList = [];
  result.forEach(item => {
    nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.provice)))
  });
  ctx.body = {
    hots:list
  }
})
//菜单获取
router.get('/mune',async (ctx) => {
  let result = await Menu.findOne();
  ctx.body = {
    code:0,
    menu:result.menu
  }
})
export default router;