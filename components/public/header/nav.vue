<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/myorder">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/myorder">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/myorder">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/myorder">我的订单</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list bd">
        <nuxt-link to="/order">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">商家中心</nuxt-link>
      </li>
      <li class="list side">
        <nuxt-link to="/silde">网站导航</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Mnav",
  data() {
    return {};
  }
};
</script>
