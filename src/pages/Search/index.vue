<template>
  <div class="search">
    <div class="header">
      <van-icon name="arrow-left" size="20" @click="back" />
      <van-search
        v-model="value"
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
      />
      <span class="searchbtn">搜索</span>
    </div>
    <div class="history">
      <div class="title">
        <h4>最近搜索</h4>
        <span><i class="fa fa-trash"></i></span>
      </div>
      <ul>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
      </ul>
    </div>
    <div class="hot">
      <div class="title">
        <h4>热门搜索</h4>
        <span>隐藏</span>
      </div>
      <ul>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
        <li>1111</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      text: [],
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
.header {
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
.title {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  line-height: 15px;
  color: #232326;
}
.title i {
  font-size: 15px;
  line-height: 15px;
  color: #232326;
}

.history ul li,
.hot ul li {
  width: 50px;
  height: 30px;
  background: #e8e8ed;
  margin: 10px;
  text-align: center;
  line-height: 30px;
  float: left;
  border-radius: 5px;
  color: #686868;
}
.hot {
  clear: both;
}
</style>