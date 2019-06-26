<template>
  <div class="page-Category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in list" :key="item">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl v-for="item in block" :key="item.title" class="m-categroy-section">
      <dt :id="'city-' + item.title">{{item.title}}</dt>
      <dd>
        <span v-for="c in item.city" :key="c">{{c}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import pyjs from "js-pinyin"; //解决：汉语到拼音的转换
import pData from "./province.json";
export default {
  name: "page-Category",
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      block: []
    };
  },
  async mounted() {
    let self = this;
    let blocks = [];
    let p; //城市拼音首字母
    let c;
    let d = {}; //每个字母对应的数组
    pData.forEach(item => {
      item.cityInfoList.map(_item => {
        p = pyjs
          .getFullChars(_item.name)
          .toLocaleLowerCase()
          .slice(0, 1); //转换为字母，变为小写，取第一个
        c = p.charCodeAt(0); // 将取来的字母变成charCode码 a-z在96-123之间
        if (c > 96 && c < 123) {
          if (!d[p]) {
            d[p] = [];
          }
          d[p].push(_item.name);
        }
      });
    });
    //从d的临时对象转换为指定数组，同时将字母大写
    for (let [k, v] of Object.entries(d)) {
      blocks.push({
        title: k.toUpperCase(),
        city: v
      });
    }
    //排序
    blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
    // 赋值
    self.block = blocks;
    // console.log(provice)
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>

