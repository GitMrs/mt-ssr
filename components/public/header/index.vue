<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <top-bar/>
      </el-col>
      <el-col>
        <search-bar/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topBar from "./topbar";
import searchBar from "./searchbar";
export default {
  name: "Mheader",
  data() {
    return {};
  },
  components: {
    topBar,
    searchBar
  }
};
</script>

<style lang="sass">
  @import "@/assets/css/public/layout.scss";
  @import '@/assets/css/public/header/index.scss';
</style>