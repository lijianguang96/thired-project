<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar route v-if="$route.meta.footerShow">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/fenlei" icon="qr">分类</van-tabbar-item>
      <van-tabbar-item to="/jingxi" icon="shop-o">京喜</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-circle-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    // Footer,
  },
  created() {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    this.$store.commit("getuser", userInfo);

    const userInfoData = localStorage.getItem("userInfoData")
      ? JSON.parse(localStorage.getItem("userInfoData"))
      : null;
    this.$store.commit("getData", userInfoData);
  },
};
</script>

<style>
</style>
