<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <a href="/">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
        </a>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="search" @focus="focus" @blur="blur" @input="input" placeholder="搜索"></el-input>
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <a class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item ,index) of hotPlace" :key="index">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{item.name}}</a>
            </dd>
          </a>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) of searchList" :key="index">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{item.name}}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
         <a :href="'/products?keyword='+encodeURIComponent(c.name)" v-for="c in hotPlace" :key="c.name">{{c.name}}</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund">
              <p class="txt">随时退</p>
            </i>
          </li>
          <li>
            <i class="single">
              <p class="txt">不满意免单</p>
            </i>
          </li>
          <li>
            <i class="overdue">
              <p class="txt">过期退</p>
            </i>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      search: "",
      isFocus: false,
      hotPlace: [{name:'北京欢乐谷'}, {name:'北京动物园'}, {name:'八达岭长城'}, {name:'胡大饭馆'}, {name:'欢乐水魔方水上乐园'}],
      searchList: [{name:'北京欢乐谷'}, {name:'北京动物园'}, {name:'八达岭长城'}, {name:'胡大饭馆'}]
    };
  },
  computed: {
    isHotPlace() {
      return this.isFocus === true && !this.search;
    },
    isSearchList() {
      return this.isFocus === true && this.search;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    input() {
      console.log("input");
    }
  }
};
</script>

<style lang="sass" scoped>

</style>