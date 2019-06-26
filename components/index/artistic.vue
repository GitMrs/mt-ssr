<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd :class="{active:kind === 'all'}" kind="all" keyword="景点">全部</dd>
      <dd :class="{active:kind === 'part'}" kind="part" keyword="美食">约会聚餐</dd>
      <dd :class="{active:kind === 'spa'}" kind="spa" keyword="丽人">丽人SPA</dd>
      <dd :class="{active:kind === 'movie'}" kind="movie" keyword="电影">电影演出</dd>
      <dd :class="{active:kind === 'travel'}" kind="travel" keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in cur" :key="item.name">
        <el-card :body-style="{padding:'0px'}" shadow="never">
          <img :src="item.imgUrl" class="image">
          <ul class="cbody">
            <li class="title">{{item.title}}</li>
            <li class="pos">{{item.areaName}}</li>
            <li class="price">
              <em>{{item.lowPrice}}</em>
              <span>/起</span>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "istvle",
  data() {
    return {
      kind: "all",
      list: {
        all: [
          {
            itemId: "158809828",
            title: "旺顺阁鱼头泡饼（长阳半岛店）",
            imgUrl:"//p0.meituan.net/msmerchant/8e9d07bac32473da09c402203cc5288c138748.jpg",
            score: "4.3",
            consumeNum: null,
            areaName: "长阳镇",
            lowPrice: "95.0",
            saleNum: null,
            commentNum: 153,
            detailUrl: "",
            firstCate: [1, 20632, 20426, 20557],
            avgPrice: 123
          },
          {
            itemId: "2412338",
            title: "金真子纸上烤肉（双桥店）",
            imgUrl: "//p0.meituan.net/deal/__26218156__8593562.jpg",
            score: "3.7",
            consumeNum: null,
            areaName: "双桥",
            lowPrice: "59.9",
            saleNum: null,
            commentNum: 17242,
            detailUrl: "",
            firstCate: [1, 20632, 20426, 20557],
            avgPrice: 62
          },
          {
            itemId: "150660331",
            title: "Visual Salon 视觉造型·e万造型（顺义店）",
            imgUrl:"//p0.meituan.net/merchantpic/e3f61992caf9efaf93750bfc7fd88b7e33151.jpg",
            score: "5.0",
            consumeNum: null,
            areaName: "顺义城区",
            lowPrice: "19.9",
            saleNum: null,
            commentNum: 1032,
            detailUrl: "",
            firstCate: [22, 20630, 20426],
            avgPrice: 219
          }
        ],
        part: [
          {
            itemId: "42539662",
            title: "丁丁洋回转自助火锅（太阳岛物美店）",
            imgUrl:"//p0.meituan.net/mogu/0da0cd3be3a6a1e107ca8fe6eb639ef967394.jpg",
            score: "3.6",
            consumeNum: null,
            areaName: "古城/八角",
            lowPrice: "39.9",
            saleNum: null,
            commentNum: 6975,
            detailUrl: "",
            firstCate: [1, 20632, 20426, 20557],
            avgPrice: 41
          },
          {
            itemId: "110245771",
            title: "火炉火烤肉·芝士排骨（BHGMall店）",
            imgUrl:"//p0.meituan.net/scarlett/7116a4ec9f556e5a52b3dd9f5f286cce322856.png",
            score: "3.2",
            consumeNum: null,
            areaName: "顺义城区",
            lowPrice: "198.0",
            saleNum: null,
            commentNum: 4438,
            detailUrl: "",
            firstCate: [1, 20632, 20426, 20557],
            avgPrice: 90
          },
          {
            itemId: "178896819",
            title: "阿芮烤鸡爪（三里屯SOHO店）",
            imgUrl:"//p0.meituan.net/bbia/541ce3d7ba6ec778521bf794285a094c641037.jpg",
            score: "4.5",
            consumeNum: null,
            areaName: "三里屯/工体",
            lowPrice: "28.5",
            saleNum: null,
            commentNum: 14,
            detailUrl: "",
            firstCate: [1, 20426, 20557],
            avgPrice: 24
          }
        ],
        spa: [
          {
            itemId: "182640357",
            title: "奶茶嫁给粉（食宝街店）",
            imgUrl:"//p0.meituan.net/msmerchant/ece501037b1edd047ca6226ca204296723695.jpg",
            score: "3.6",
            consumeNum: null,
            areaName: "北京西站/军博",
            lowPrice: "8.8",
            saleNum: null,
            commentNum: 16,
            detailUrl: "",
            firstCate: [1, 20426, 20557],
            avgPrice: 21
          },
          {
            itemId: "306086",
            title: "正一味（百货大楼店）",
            imgUrl:"//p0.meituan.net/bbia/4dd007023c2f9f8663153a6a43f78ae1795973.jpg",
            score: "3.9",
            consumeNum: null,
            areaName: "王府井/东单",
            lowPrice: "18.0",
            saleNum: null,
            commentNum: 3093,
            detailUrl: "",
            firstCate: [1, 20632, 20426, 20557],
            avgPrice: 31
          },
          {
            itemId: "4000941",
            title: "大渔铁板烧（欧美汇购物中心店）",
            imgUrl:"//p0.meituan.net/msmerchant/91374426377209ba6254bc270ee9bb0c27489.jpg",
            score: "3.0",
            consumeNum: null,
            areaName: "中关村",
            lowPrice: "245.0",
            saleNum: null,
            commentNum: 545,
            detailUrl: "",
            firstCate: [1, 20632, 20426, 20557],
            avgPrice: 239
          }
        ],
        movie: [
          {
            itemId: "6371296",
            title: "鼎鼎轩烤肉自助餐厅（马驹桥店）",
            imgUrl: "//p0.meituan.net/deal/__45919367__3801890.jpg",
            score: "3.1",
            consumeNum: null,
            areaName: "马驹桥",
            lowPrice: "65.0",
            saleNum: null,
            commentNum: 12308,
            detailUrl: "",
            firstCate: [1, 20632, 20426, 20557],
            avgPrice: 60
          },
          {
            itemId: "6570878",
            title: "鼎极轩海鲜自助烤肉（小营店）",
            imgUrl:"//p0.meituan.net/mogu/fac5e9043a9b2c33595f94f90bb96508725444.png",
            score: "3.1",
            consumeNum: null,
            areaName: "小营",
            lowPrice: "79.9",
            saleNum: null,
            commentNum: 29936,
            detailUrl: "",
            firstCate: [1, 20632, 20426, 20557],
            avgPrice: 79
          },
          {
            itemId: "790017",
            title: "大碗居（东四店）",
            imgUrl:"//p0.meituan.net/msmerchant/9e55ba506554832e2f00102d27c559861312343.jpg",
            score: "4.7",
            consumeNum: null,
            areaName: "东四十条",
            lowPrice: "92.0",
            saleNum: null,
            commentNum: 874,
            detailUrl: "",
            firstCate: [1, 20632, 20426, 20557],
            avgPrice: 52
          }
        ],
        travel: [
          {
            itemId: "77375132",
            title: "铁木真烤肉自助城（西三旗店）",
            imgUrl:"//p0.meituan.net/poi/dd74a9b11f8ba8cbbe47fc608dd24a5271680.jpg",
            score: "3.0",
            consumeNum: null,
            areaName: "回龙观",
            lowPrice: "72.9",
            saleNum: null,
            commentNum: 732,
            detailUrl: "",
            firstCate: [1, 20632, 20426, 20557],
            avgPrice: 75
          },
          {
            itemId: "6399484",
            title: "永远爱小海鲜自助烤肉火锅",
            imgUrl:"//p0.meituan.net/shopmainpic/430f2a4a1474a1a435057cd3ce557e53246958.png",
            score: "4.0",
            consumeNum: null,
            areaName: "天通苑",
            lowPrice: "75.0",
            saleNum: null,
            commentNum: 15927,
            detailUrl: "",
            firstCate: [1, 20632, 20426, 20557],
            avgPrice: 62
          },
          {
            itemId: "165508822",
            title: "老诚一锅（菜市口店）",
            imgUrl:"//p0.meituan.net/msmerchant/4f0b6b2e5089d09e880d771b82981512427787.jpg",
            score: "3.3",
            consumeNum: null,
            areaName: "菜市口/陶然亭",
            lowPrice: "90.0",
            saleNum: null,
            commentNum: 243,
            detailUrl: "",
            firstCate: [1, 20632, 20426],
            avgPrice: 81
          }
        ]
      }
    };
  },
  computed: {
    cur() {
      return this.list[this.kind];
    }
  },
  methods:{
    over:async function(e){
      let dom = e.target;
      let tag = dom.tagName.toLowerCase();
      let self = this;
      if(tag === 'dd'){
        this.kind = dom.getAttribute('kind');
        let keyword = dom.getAttribute('keyword');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '@/assets/css/index/artistic.scss';
</style>