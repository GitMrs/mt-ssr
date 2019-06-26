<template>
  <div>
    <el-container>
      <el-header>
        <m-header />
      </el-header>
      <el-main>
        <nuxt />
      </el-main>
      <el-footer><m-footer /></el-footer>
    </el-container>
    
  </div>
</template>
<script>
import mHeader from '@/components/public/header';
import mFooter from '@/components/public/footer'
export default {
  name:'Index',
  data(){
    return{

    }
  },
  components:{
    mHeader,
    mFooter
  }
}
</script>

<style lang='scss'>

</style>
