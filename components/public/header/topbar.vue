<template>
  <el-row :gutter='0' class="m-header">
    <el-col :span='5'>
      <geo />
    </el-col>
    <el-col :span='5'>
      <user />
    </el-col>
    <el-col :span='14'>
      <m-nav />
    </el-col>
  </el-row>
</template>

<script>
import geo from './geo';
import user from './user';
import mNav from './nav';
export default {
  name: 'topbar',
  data() { 
    return {

    }
  },
  components:{
    geo,
    user,
    mNav
  }
 }
</script>

<style lang="" scoped>

</style>