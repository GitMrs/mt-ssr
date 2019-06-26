<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt>{{name}} <i class="el-icon-arrow-down el-icon--right" /></dt>
      <dd>
        <h3>{{name}}</h3>
        <span v-for="(item,ind) in list" :key="ind">{{item.name}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
/**
 * 设计原则
 * 先设计DOM结构
 * 在设计数据结构
 * （数据结构值前端的数据结构）
 * 原则：前端有自己数据结构，后端有自己的数据结构
 * 好处：前端完全不依赖后端数据结构
 * 纽带：前端拿到数据结构后，映射成自己想要的数据结构，不要轻易修改DOM，修改DOM结构的难度远比修改数据结构难
 */
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default(){
        return []
      }
    }
  }
};
</script>

<style lang="">
</style>