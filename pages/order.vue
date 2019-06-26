<template>
  <div class="page-order">
    <el-row type="flex" justify="space-between">
      <el-col :span="5" class="navbar">
        <h3>我的美团</h3>
        <dl>
          <dt>我的订单</dt>
          <dd>
            全部订单
            <i class="el-icon-arrow-right"/>
          </dd>
          <dd>
            代付款
            <i class="el-icon-arrow-right"/>
          </dd>
          <dd>
            待使用
            <i class="el-icon-arrow-right"/>
          </dd>
        </dl>
        <dl>
          <dt>我的收藏</dt>
          <dd>
            收藏的商家
            <i class="el-icon-arrow-right"/>
          </dd>
          <dd>
            收藏的团购
            <i class="el-icon-arrow-right"/>
          </dd>
        </dl>
        <dl>
          <dt>抵用券</dt>
          <dd>
            可用券
            <i class="el-icon-arrow-right"/>
          </dd>
          <dd>
            失效券
            <i class="el-icon-arrow-right"/>
          </dd>
        </dl>
        <dl>
          <dt>个人信息</dt>
          <dd>
            用户设置
            <i class="el-icon-arrow-right"/>
          </dd>
        </dl>
      </el-col>
      <el-col :span="19" class="table">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane
            v-for="(item,idx) in tabList"
            :label="item.label"
            :name="item.name"
            :key="idx"
          >
            <List :cur="cur"/>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import List from "@/components/order/list.vue";
export default {
  name: "order",
  data() {
    return {
      activeName: "all",
      tabList: [
        {
          label: "全部订单",
          name: "all"
        },
        {
          label: "代付款",
          name: "unpay"
        },
        {
          label: "待使用",
          name: "unuse"
        },
        {
          label: "待评价",
          name: "unreplay"
        }
      ],
      cur: []
    };
  },
  components: {
    List
  },
  watch: {
    activeName(val) {
      this.cur = this.list.filter(item => {
        if (val === "unpay") {
          return item.status === 0;
        } else if (val === "all") {
          return true;
        } else {
          return false;
        }
      });
    }
  },
  methods: {
    handleClick(tab) {
      this.activeName = tab.name;
    }
  },
  async asyncData(ctx) {
    let {
      status,
      data: { code, list }
    } = await ctx.$axios.post("/order/getOrder");
    if (status === 200 && code === 0) {
      return {
        list: list.map(item => {
          return {
            img: item.imgs.length ? item.imgs[0] : "/logo.png", // 可以提供默认图片
            name: item.name,
            count: 1,
            total: item.total,
            status: item.status,
            statusTxt: item.status === 0 ? "待付款" : "已付款" // 前端根据后端数据，映射自己的字段 statusTxt
          };
        }),
        cur: list.map(item => {
          return {
            img: item.imgs.length ? item.imgs[0] : "/logo.png",
            name: item.name,
            count: 1,
            total: item.total,
            status: item.status,
            statusTxt: item.status === 0 ? "待付款" : "已付款"
          };
        })
      };
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/order/index.scss";
</style>