<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd>
        <i-select v-for="(item, idx) in types" :key="idx" :name="item.name" :list="item.children"/>
      </dd>
    </dl>
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd>
        <i-select v-for="(item, idx) in areas" :key="idx" :name="item.name" :list="item.children"/>
      </dd>
    </dl>
  </div>
</template>

<script>
import iSelect from "./iselect";
export default {
  name: "categroy",
  props: {
    types: {
      type: Array,
      default() {
        return [];
      }
    },
    areas: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    iSelect
  }
};
</script>

<style lang="">
</style>