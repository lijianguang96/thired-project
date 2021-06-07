<template>
  <div class="search">
    <van-icon name="arrow-left" size="20" @click="back" />
    <van-search
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
    />
    <span class="searchbtn">搜索</span>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    back() {
      this.$router.back();
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.search {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.van-icon {
  padding: 0 5px;
}
.van-search {
  width: 260px;
  height: 30px;
}
.searchbtn {
  width: 40px;
  height: 28px;
  font-size: 14px;
  color: #fff;
  background: #e93b3d;
  border-radius: 5px;
  text-align: center;
  line-height: 28px;
  margin-left: 10px;
}
</style>