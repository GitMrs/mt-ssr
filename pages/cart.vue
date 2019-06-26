<template>
  <div class="page-cart">
    <el-row>
      <el-col v-if="cart.length" :span="24">
        <List :cartData="cart"/>
        <p>
          应付金额:
          <em class="money">￥{{total}}</em>
        </p>
        <div class="post">
          <el-button type="primary" around @click="submit">确定</el-button>
        </div>
      </el-col>
      <el-col v-else class="empty">暂时为空！</el-col>
    </el-row>
  </div>
</template>

<script>
import List from "@/components/cart/list.vue";
export default {
  name: "Cart",
  data() {
    return {
      cart: []
    };
  },
  computed: {
    total() {
      let total = 0;
      this.cart.forEach(item => {
        total += item.price * item.count;
      });
      return total;
    }
  },
  async asyncData(ctx) {
    let {
      status,
      data: {
        code,
        result: { name, price, imgs }
      }
    } = await ctx.$axios.post("/cart/getCart", {
      id: ctx.query.id
    });

    if (status === 200 && code === 0) {
      return {
        cart: [
          {
            name,
            price,
            imgs,
            count: 1
          }
        ],
        cartNo: ctx.query.id
      };
    }
  },
  methods: {
    async submit() {
      let {status,data:{code,id}} = await this.$axios.post('/order/createOrder', {
        id:this.cartNo,
        price:this.cart[0].price,
        count:this.cart[0].count
      }) 
      if(status === 200 && code === 0){
        this.$message({
          message:'恭喜下单成功！',
          type:'success'
        })
       location.href = '/order'
      } else{
         this.$message({
          message:'恭喜下单失败！',
          type:'error'
        })
      }
    }
  },
  components: {
    List
  }
};
</script>

<style lang="scss">
@import "@/assets/css/cart/index.scss";
</style>