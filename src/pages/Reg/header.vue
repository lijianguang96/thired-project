<template>
  <div class="header">
    <span class="icon" @click="tologin"><van-icon name="arrow-left" /></span>
    <span class="title">京东注册</span>
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
    tologin() {
      this.$router.push("/login");
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.header {
  width: 325px;
  height: 44px;
  position: relative;
}
.icon {
  font-size: 18px;
  position: absolute;
  top: 11px;
  left: 0;
}
.title {
  font-size: 17px;
  line-height: 44px;
  position: absolute;
  left: 128px;
}
</style>