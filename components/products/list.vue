<template>
  <div class="m-products-list">
    <dl>
      <dd
        v-for="(item,idx) in nav"
        :key="idx"
        :class="[item.name, item.active ? 's-nav-active' : '']"
        @click="sort(item,idx)"
      >{{item.txt}}</dd>
    </dl>
    <ul>
      <item v-for="(item,idx) in list" :meta="item" :key="idx"></item>
    </ul>
  </div>
</template>

<script>
import item from "./product";
export default {
  name: "list",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      nav: [
        {
          name: "s-default",
          txt: "智能排序",
          active: true
        },
        {
          name: "s-price",
          txt: "价格最低",
          active: false
        },
        {
          name: "s-visit",
          txt: "人气最高",
          active: false
        },
        {
          name: "s-comment",
          txt: "评分最高",
          active: false
        }
      ]
    };
  },
  methods: {
    sort(item, idx) {
      console.log(this.list);
      this.nav = this.nav.map(item => {
        return {
          name: item.name,
          txt: item.txt,
          active: false
        };
      });
      this.nav.filter(i => i.name === item.name)[0].active = true;
      //默认排序
      if (item.name === "s-default") {
        this.list.sort((a, b) => a.avgprice - b.avgprice);
      }
      // 价格最低排序
      if (item.name === "s-price") {
        this.list.sort((a, b) => a.lowestprice - b.lowestprice);
      }
      // 人气最高排序
      if (item.name === "s-visit") {
        this.list.sort((a, b) => b.comments - a.comments);
      }
      // 评价最高排序
      if (item.name === "s-comment") {
        this.list.sort((a, b) => b.avgscore - a.avgscore);
      }
    }
  },
  components: {
    item
  }
};
</script>

<style lang="">
</style>