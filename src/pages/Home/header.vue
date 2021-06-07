<template>
  <div class="header">
    <span class="tu1"><img src="../../assets/fenlei.png" alt="" /></span>
    <div class="search">
      <span class="letter1">JD</span>
      <span class="tu2"><img src="../../assets/sousuo.png" alt="" /></span>
      <input type="text" value="电子琴" class="ipt" @click="search" />
    </div>
    <span class="login" @click="login">登录</span>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    login() {
      this.$router.push("/login");
    },
    search() {
      this.$router.push("/search");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 40px;
  background: rgb(228, 49, 48);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tu1 {
  padding-left: 10px;
}
.tu1 img {
  width: 20px;
  height: 18px;
}
.search {
  width: 273px;
  height: 30px;
  border-radius: 30px;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.tu2 {
  width: 18px;
  height: 15px;
  padding: 0 8px;
}
.tu2 img {
  width: 18px;
  height: 15px;
}
.letter1 {
  width: 20px;
  height: 15px;
  border-right: solid 1px #ccc;
  display: block;
  font-size: 15px;
  font-weight: 700;
  color: rgb(228, 49, 48);
  padding: 0 8px;
}
.login {
  font-size: 16px;
  color: #fff;
  padding-right: 8px;
}
</style>