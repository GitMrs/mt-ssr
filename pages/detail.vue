<template>
  <div class="page-detail">
    <el-row>
      <el-col :span="24">
        <Crumbs :keyword="keyword" :type="type"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Summa :meta="poiInfo" :album="album"/>
      </el-col>
    </el-row>
    <el-row class="m-title">
      <el-col :span="24">
        <h3>商家团购及优惠</h3>
      </el-col>
    </el-row>
    <el-row v-if="canOrder || !login">
      <el-col :span="24">
        <List :list="group" v-if="login"/>
        <div v-else class="deal-need-login">
          <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="登录查看">
          <span>请登录之后查看详情团购优惠</span>
          <el-button type="primary" round>
            <a href="/login">立即登陆</a>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from "@/components/detail/crumbs.vue";
import Summa from "@/components/detail/summa.vue";
import List from "@/components/detail/list.vue";
export default {
  name: "detail",
  data() {
    return {};
  },
  computed: {
    canOrder() {
      return this.group.filter(i => i.headIcon.length).length;
    }
  },
  async asyncData(ctx) {
    let { keyword, type } = ctx.query;
    let {
      status,
      data: { login }
    } = await ctx.$axios.get("/search/isSignIn");
    if (status === 200) {
      return {
        keyword,
        type,
        poiInfo: {
          id: 1663403,
          name: "呷哺呷哺（怀柔青春路店）",
          score: 5,
          avgPrice: 52,
          address: "怀柔区青春路15号C-001一层",
          phone: "010-61625773",
          openTime: "周一至周日\n10:30-00:00",
          headIcon:
            "https://img.meituan.net/w.h/msmerchant/3848b525ef9bef2520b0d40045054634218628.jpg",
          wifi: 1,
          park: "有停车位",
          lng: 116.629813,
          lat: 40.317798,
          brandId: 29606,
          jumpUrl: null,
          crumbs: null,
          cityId: 1,
          cityName: "北京",
          lowestPrice: 20,
          sold: 1034,
          firstCate: [1, 20632, 20426, 20557],
          subCate: [17, 20625, 20644, 20633, 20427, 20639],
          thridCate: [21386],
          brandName: "呷哺呷哺",
          cityPy: "bj"
        },
        login,
        album: [
          {
            url:
              "http://p1.meituan.net/merchantpic/f683ca1197cfc9657892b1a8e6e3f14745146.jpg@92w_50h_1e_1c"
          },
          {
            url:
              "http://p0.meituan.net/merchantpic/7d8fed814999041d8b477778a4c0107d94119.jpg@92w_50h_1e_1c"
          },
          {
            url:
              "https://img.meituan.net/msmerchant/3d62d9984898fb445b62ad22d270d774180349.jpg@92w_50h_1e_1c"
          },
          {
            url:
              "https://img.meituan.net/msmerchant/0f3c34be7369265a49b03ebf21d1710e456758.jpg@92w_50h_1e_1c"
          }
        ],
        group: [
          {
            headIcon:
              "http://p0.meituan.net/208.126/deal/4410c6ffaf3bc387cd5d370687b781ad60734.jpg@100w_100h_1e_1c",
            title: "十人精品套餐，包间免费",
            sold: "11",
            deadline: "周一至周日 11:00-14:30 16:00-22:30",
            price: "111",
            value: "98"
          }
        ]
      };
    }else{
      return {
        login:false
      }
    }
  },
  components: {
    Crumbs,
    Summa,
    List
  }
};
</script>

<style lang="scss">
@import "@/assets/css/detail/index.scss";
</style>