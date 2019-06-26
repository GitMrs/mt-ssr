<template>
  <div class="m-iselect">
    <span class="name">按省份选择:</span>
    <el-select v-model="pvalue" placeholder="省份" class="province">
      <el-option
        v-for="(item,index) in province"
        :key="index"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select v-model="cvalue" placeholder="城市" :disabled="!city.length" class="city">
      <el-option v-for="(item,index) in city" :key="index" :label="item.label" :value="item.value"/>
    </el-select>
    <span class="label">直接搜索</span>
    <el-autocomplete
      class="input"
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    />
  </div>
</template>
<script>
import _ from "lodash";
import Pdata from "./province.json";
export default {
  name: "iSelect",
  data() {
    return {
      pvalue: "",
      cvalue: "",
      cities: [],
      input: "",
      province: [],
      city: []
    };
  },
  watch: {
    async pvalue(newPvalue) {
      let self = this;
      let cityData = await Pdata.filter(item => {
        return item.provinceCode === newPvalue;
      })[0].cityInfoList;
      self.cvalue = "请选择";
      self.city = cityData.map(item => {
        return {
          value: item.id,
          label: item.name
        };
      });
      // let {status,data:{city}} = await self.$axios.get(`/geo/province/${newPvalue}`)
      // if(status === 200){
      //   self.city = city.map(item => {
      //     return {
      //       value:item.id,
      //       label:item.name
      //     }
      //   })
      // }
    }
  },
  // async mounted
  async mounted() {
    let self = this;
    self.province = Pdata.map(item => {
      return {
        value: item.provinceCode,
        label: item.provinceName
      };
    });
    // let {status,data:{province}} =await self.$axios.get('/geo/province');
    // if(status === 200){
    //   self.province = province.map(item => {
    //     return {
    //       label:item.name,
    //       value:item.id
    //     }
    //   })
    // }
  },
  methods: {
    querySearchAsync: _.debounce(async function(query, cb) {
      let self = this;
      if (self.cities.length) {
        cb(self.cities.filter(item => item.value.indexOf(query) > -1));
      } else {
        Pdata.map(item => {
          item.cityInfoList.map(_item => {
            self.cities.push( { value:_item.name})
          })
        });
        cb(self.cities.filter(item => item.value.indexOf(query) > -1));


        // let {
        //   status,
        //   data: { city }
        // } = await self.$axios.get("/geo/city");
        // if (status === 200) {
        //   self.cities = city.map(item => {
        //     return {
        //       value: item.name
        //     };
        //   });
        //   cb(self.cities.filter(item => item.value.indexOf(query) > -1));
        // } else {
        //   cd([]);
        // }
      }
    }, 200),
    handleSelect(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>