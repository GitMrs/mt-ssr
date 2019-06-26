<template>
  <div :id="id" class="m-map" :style="{width:width + 'px',height:height + 'px',margin:'34px auto'}"></div>
</template>

<script>
export default {
  name: "map",
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    point: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      id: "map",
      key: "bb2bbc23a162451bd966e5de51562e6c"
    };
  },
  watch: {
    point(val, old) {
      this.map.setCenter(val);
      this.marker.setPosition(val);
    }
  },
  mounted() {
    let self = this;
    self.id = `map${Math.random()
      .toString()
      .slice(4, 6)}`;
    window.onmaploaded = () => {
      let map = new window.AMap.Map(self.id, {
        resizeEnable: true,
        zoom: 11,
        center: self.point
      });
      console.log(window)
      // self.map = map;
      window.AMap.plugin("AMap.ToolBar", () => {
        let toolbar = new window.AMap.ToolBar();
        map.addControl(toolbar);
        let marker = new window.AMap.Marker({
          icon: "",
          position: self.point
        });
        self.marker = marker;
        marker.setMap(map);
      });
    };
    const url = `https://webapi.amap.com/maps?v=1.4.10&key=${
      self.key
    }&callback=onmaploaded`;
    let jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
};
</script>

<style lang="" scoped>
</style>