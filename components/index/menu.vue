<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部类型</dt>
      <dd v-for="(item,index) of menu" :key="index" @mouseenter="enter">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="item of curdetail.child">
        <h4 :key="item.title">{{item.title}}</h4>
        <span v-for="v of item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mmenu",
  data() {
    return {
      kind: "",
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: "美食",
              child: ["代金券", "甜点饮品"]
            }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          child: [
            {
              title: "美食",
              child: ["代金券", "酒店"]
            }
          ]
        }
      ]
    };
  },
  computed: {
    curdetail() {
      return this.menu.filter(item => {
        return item.type === this.kind;
      })[0];
    }
  },
  methods: {
    mouseleave() {
      this.timer = setTimeout(() => {
        this.kind = "";
      }, 150);
    },
    enter(e) {
      this.kind = e.target.querySelector("i").className;
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.kind = "";
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/index/index.scss";
</style>