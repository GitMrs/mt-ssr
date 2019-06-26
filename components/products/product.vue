<template>
  <dl class="s-item">
    <dt>
      <img :src="meta.imageUrl" alt="商品图片">
    </dt>
    <dd>
      <h3>
        <nuxt-link
          :to="{path:'detail',query:{keyword:meta.title,type:meta.showType,id:meta.id}}"
        >{{meta.title}}</nuxt-link>
      </h3>
      <el-rate v-model="meta.avgscore" :colors="['#ff9900','#ff9900','#ff9900']" disabled></el-rate>
      <span v-if="meta.avgscore" class="s-item-comment">很好</span>
      <span v-else-if="meta.avgscore" class="s-item-comment">一般</span>
      <span v-else class="s-item-comment">很差</span>
      <span class="s-item-value">{{meta.avgscore}}分</span>
      <span class="s-item-comment-total">{{meta.comments}}人评论</span>
      <p>
        <span class="s-item-type">{{meta.backCateName + '|' + meta.areaname}}</span>
        <span class="s-item-addr">{{meta.address}}</span>
      </p>
      <p>
        <em class="s-item-price">￥{{meta.lowestprice}}起</em>
      </p>
      <ul>
        <li v-for="(item,idx) in meta.deals" :key="idx">
          <span class="detail-type">门票</span>
          {{item.title}}
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  name: "",
  props: {
    meta: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="">
</style>