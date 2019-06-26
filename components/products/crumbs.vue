<template>
  <div class="m-crumbs">
    <el-breadcrumb spellcheck=">">
      <el-breadcrumb-item to='/'>三亚美团</el-breadcrumb-item>
      <el-breadcrumb-item>三亚{{keyword}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Crumbs',
  props:{
    keyword:{
      type:String,
      default:''
    }
  },
  data() { 
    return {

    }
  }
 }
</script>

<style lang="">
</style>