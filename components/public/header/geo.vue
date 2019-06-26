<template>
  <div class="m-geo">
    <i class="el-icon-location">北京市</i>
    <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>[宁波 温州 上海]
  </div>
</template>

<script>
export default {
  name: "geo",
  data() {
    return {};
  },
  async mounted() {
 
  }
};
</script>

<style lang="" scoped>
</style>