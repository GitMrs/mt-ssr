<template>
  <div class="page-product">
    <el-row>
      <el-col :span="19">
        <Crumbs :keyword="keyword"/>
        <Categroy :types="types" :areas="areas"/>
        <List :list="list"/>
      </el-col>
      <el-col :span="5">
        <Map :point='point' :width='300' :height='300' />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from "@/components/products/crumbs.vue";
import Categroy from "@/components/products/categroy.vue";
import List from "@/components/products/list.vue";
import Map from "@/components/public/map.vue";
export default {
  name: "mProducts",
  data() {
    return {
      keyword: "其他",
      types: [],
      areas: [],
      list: [],
      point:[116.46,39.92]
    };
  },
  async asyncData(ctx) {
    let keyword = ctx.query.keyword;
    return {
      keyword,
      types: [
        {
          name: "美食",
          children: [
            {
              name: "全部"
            },
            {
              name: "饮品店"
            },
            {
              name: "自主餐"
            }
          ]
        },
        {
          name:'酒店住宿'
        },
        {
          name:'周边游'
        }
      ],
      areas: [
        {
          name: "推荐商圈",
          children: [
            {
              name: "昌平"
            },
            {
              name: "海淀"
            }
          ]
        }
      ],
      list: [
        {
          id: 165682990,
          template: "pcfood",
          imageUrl:
            "//p1.meituan.net/hotel/457937b22bd6203aecf01d786c5b8e75120661.jpg",
          title: "天津玛雅海滩水公园",
          address: "东丽区东丽湖旅游度假区东丽之光大道2号",
          lowestprice: 69.0,
          avgprice: 136.0,
          latitude: 39.187152,
          longitude: 117.473147,
          showType: "travel",
          avgscore: 4.0,
          comments: 2506,
          historyCouponCount: 14416,
          backCateName: "水上乐园",
          areaname: "华侨城欢乐谷",
          tag: [],
          cate: [195, 20632, 20873, 20426, 20522],
          recentScreen: null,
          abstracts: [],
          dangleAbstracts: null,
          titleTags: [],
          iUrl: null,
          deals: [
            {
              id: 601163688,
              title: "天津玛雅海滩水公园成人全天票",
              subtitleA: null,
              subtitleB: null,
              subtitleC: null,
              price: 69.0,
              value: 200.0,
              sales: 11057.0,
              iUrl: "",
              stid: null,
              trace: null,
              tag: {
                promotion: []
              }
            }
          ],
          posdescr: null,
          ct_poi: null,
          trace: null,
          landmarkDistance: null,
          hasAds: false,
          adsClickUrl: "",
          adsShowUrl: "",
          distance: "天津",
          cityId: 40,
          city: "天津",
          full: false
        },
        {
          id: 1496329,
          template: "pcfood",
          imageUrl:
            "//p1.meituan.net/travel/f166163144fcff2755d5f517993c3cc093429.jpg",
          title: "太平洋海底世界博览馆",
          address: "海淀区西三环中路11号中央电视塔下",
          lowestprice: 60.0,
          avgprice: 127.0,
          latitude: 39.918935,
          longitude: 116.306341,
          showType: "travel",
          avgscore: 4.0,
          comments: 28930,
          historyCouponCount: 122097,
          backCateName: "海洋馆",
          areaname: "航天桥",
          tag: [],
          cate: [195, 20007, 20632, 20873, 20426, 20522],
          recentScreen: null,
          abstracts: [],
          dangleAbstracts: null,
          titleTags: [],
          iUrl: null,
          deals: null,
          posdescr: null,
          ct_poi: null,
          trace: null,
          landmarkDistance: null,
          hasAds: false,
          adsClickUrl: "",
          adsShowUrl: "",
          distance: "",
          cityId: 1,
          city: "北京",
          full: false
        },
        {
          id: 92363,
          template: "pcfood",
          imageUrl:
            "//p0.meituan.net/travel/207384e80f132a0ce4d57bde75576ad8571060.png",
          title: "北京野生动物园",
          address:
            "大兴区榆垡镇万亩森林（106国道北京森林假日高尔夫俱乐部北面）",
          lowestprice: 72.0,
          avgprice: 221.0,
          latitude: 39.495958,
          longitude: 116.334678,
          showType: "travel",
          avgscore: 5.0,
          comments: 57899,
          historyCouponCount: 493937,
          backCateName: "动物园",
          areaname: "大兴区",
          tag: [],
          cate: [195, 20632, 20873, 20426, 20522],
          recentScreen: null,
          abstracts: [],
          dangleAbstracts: null,
          titleTags: [],
          iUrl: null,
          deals: null,
          posdescr: null,
          ct_poi: null,
          trace: null,
          landmarkDistance: null,
          hasAds: false,
          adsClickUrl: "",
          adsShowUrl: "",
          distance: "",
          cityId: 1,
          city: "北京",
          full: false
        }
      ],
      point:[116.46,39.92]
    };
  },
  components:{
    Crumbs,
    Categroy,
    List,
    Map
  }
};
</script>

<style lang="scss">
  @import "@/assets/css/products/index.scss";
</style>