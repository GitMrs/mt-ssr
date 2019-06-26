<template>
  <div class="exit">

  </div>
</template>

<script>
export default {
  name: 'exit',
  data() { 
    return {

    }
  },
  middleware:async (ctx) => {
    // 利用中间件退出登录，并返回首页
   let {status,data} =await ctx.$axios.get('/users/exit');
    console.log(status,data)
    if(status === 200 && data.code === 0){
      console.log(111)
       window.location.href = '/'
    }
  }
 }
</script>

<style lang="" scoped>
</style>