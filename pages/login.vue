<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/" class="logo"/>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        >
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">{{error}}</h4>
        <p>
          <span>账号登录</span>
        </p>
        <el-input v-model="username" prefix-icon="profile"/>
        <el-input v-model="password" prefix-icon="password" type="password"/>
        <div class="footer">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
          <b>忘记密码?</b>
        </div>
        <el-button class="btn-login" type="success" size="mini" @click="login">登录</el-button>
        <p>
          没有账户，
          <a href="/register">立即注册</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      error: "",
      checked: ""
    };
  },
  layout: "blank",
  methods: {
    login() {
      this.$axios
        .post("/users/signin", {
          username: window.encodeURIComponent(this.username),
          password: CryptoJS.MD5(this.password).toString()
        })
        .then(({ status, data }) => {
          if (status === 200) {
            if (data && data.code === 0) {
              // 登录成功
              location.href = "/";
            } else {
              // 登录失败
              self.error = data.msg;
            }
          } else {
            self.error = `服务器出错，错误码：${status}`;
          }
          // 定时清空 error 信息
          // (因为我们一直在对 error 进行赋值，导致error里面一直有值)
          setTimeout(function() {
            self.error = "";
          }, 3000);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/login/index.scss";
</style>