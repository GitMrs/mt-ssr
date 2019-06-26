<template>
  <div class="page-index">
    <el-row>
      <el-col :span='5'>
        <m-menu />
      </el-col>
      <el-col :span='19'>
        <m-life />
      </el-col>
      <el-col :span='24'>
        <m-artistic />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mMenu from '~/components/index/menu.vue'
import mLife from '~/components/index/life.vue'
import mArtistic from '~/components/index/artistic.vue'
export default {
  name:'pageIndex',
  components: {
    mMenu,
    mLife,
    mArtistic
  }
}
</script>

<style lang='scss'>
   @import '@/assets/css/index/index.scss';
</style>
