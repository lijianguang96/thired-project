<template>
  <div class="search">
    <!-- <van-icon name="arrow-left" size="20" /> -->
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
    <!-- <span class="searchbtn">搜索</span> -->
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
  methods: {},
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
.searchbtn {
  width: 10px;
  height: 30px;
}
.van-search {
  width: 200px;
  height: 30px;
}
</style>