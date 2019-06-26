<template>
  <dl class="m-sum-card">
    <dt>
      <h1>{{meta.name}}</h1>
      <el-rate v-model="meta.score" disabled></el-rate>
      <span>{{meta.score}}</span>
      <span>人均￥{{meta.avgPrice}}</span>
      <ul>
        <li>地址：{{meta.address}}</li>
        <li>电话：{{meta.phone}}</li>
        <li>营业时间：{{meta.openTime}}</li>
      </ul>
    </dt>
    <dd>
      <el-carousel height='240px' indicator-position='home'>
        <el-carousel-item v-for="(item,idx) in album" :key="idx">
          <h3>
            <img :src="item.url" :alt="item.imgDesc" height="100%" width="100%" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </dd>
  </dl>
</template>

<script>
export default {
  name: "summa",
  props:{
    meta:{
      type:Object,
      default(){
        return {}
      }
    },
    album:{
      type:Array,
      default(){
        return []
      }
    }
  }
};
</script>

<style lang="">
</style>