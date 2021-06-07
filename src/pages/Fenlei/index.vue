<template>
  <div class="classify">
    <div class="header">
      <div class="backBtn"></div>
      <div class="seach">
        <i></i>
        <input type="text" />
      </div>
      <div class="more"></div>
    </div>
    <div class="content">
      <div class="aside">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item :title="v" v-for="v in list" :key="v._id" />
        </van-sidebar>
      </div>
      <div class="goods">
        <ul>
          <li v-for="item in goodsList" :key="item._id">
            <img :src="item.coverImg" alt="" />
            <span>{{ item.productCategory.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { reqProducts } from "../../api/products";
export default {
  components: {},
  data() {
    return {
      goodsList: [],
      activeKey: 0,
      value: "",
      list: [
        "热门推荐",
        "手机数码",
        "电脑办公",
        "家用电器",
        "美妆护肤",
        "汽车生活",
        "京东超市",
        "男装",
        "男鞋",
        "女装",
        "女鞋",
        "运动户外",
        "内衣配饰",
        "酒水饮料",
        "家具家装",
        "箱包手袋",
        "钟表珠宝",
        "玩具乐器",
        "医药保健",
        "宠物生活",
        "礼品鲜花",
        "农资绿植",
        "生活旅行",
        "奢侈品",
        "京东国际",
        "艺术邮币",
        "二手商品",
        "特产馆",
        "京东金融",
        "国际名牌",
        "拍卖",
        "房产",
        "工业品",
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    async onChange(index) {
      const result = await reqProducts({ page: index + 1 });
      console.log(result.data.products);
      this.goodsList = result.data.products;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.header {
  position: fixed;
  border-bottom: 1px solid #e5e5e5;
  min-height: 44px;
  background: #fff;
  padding: 3px;
  z-index: 999;
}
.backBtn {
  width: 20px;
  height: 20px;
  margin-top: 10px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTF1famFhal1fal1fal5ga39/f15hbF5ga2JidV1fasLnCw4AAAAKdFJOUwDxN13aWgVemg1awhgkAAAATUlEQVQoz2NgGAjA5FiAKai4SgxToRQWQcVVqwKwKFyMTaHBUFTI4IVFIeeqVQ0MRKnEGkAg25cyEGc9VocOCqUBxKUQrGkJe6qjEgAAfcYsJDT7oy4AAAAASUVORK5CYII=)
    no-repeat;
  float: left;
  background-size: 100% 100%;
  margin-left: 10px;
}

.seach {
  width: 330px;
  float: left;
  border: none;
  border-radius: 15px;
  height: 30px;
  overflow: hidden;
  background: #f7f7f7;
  font-size: 12px;
  line-height: 30px;
  margin-top: 5px;
  margin-left: 11px;
}
.seach input {
  outline: none;
  border: none;
  height: 28px;
  width: 200px;
  background: #f7f7f7;
  position: absolute;
  top: 8px;
  left: 85px;
}
.seach i {
  display: block;
  width: 18px;
  height: 15px;
  background: url(https://st.360buyimg.com/so/images/search/jd-sprites.png?__inline=)
    no-repeat;
  background-position: -80px 0;
  background-size: 200px;
  margin: 8px 0 0 15px;
}
.header {
  width: 100%;
  min-height: 40px;
  /* background: pink; */
}
.more {
  width: 40px;
  height: 40px;
  /* background: violet; */
  float: right;
  margin: 12px 12px 12px 10px;
  width: 20px;
  height: 20px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAMBAMAAAAzCuYOAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURUdwTF1fal1fa11famZmcF1fanZMvqUAAAAFdFJOUwDD82UZbfC98gAAAEtJREFUGNNjYGAWUjRgQACsXBbR0NBAB7ggdi5jKBAIwEWxc01BVDBcFDtXFEQFwkWxc1VBVBBcFDuXKEVEWUeUw4kKAqICk5hoAQAuJDMBhQy+8AAAAABJRU5ErkJggg==)
    no-repeat 50%;
  background-size: 20px;
}
.content {
  width: 100%;
  height: auto;
  background: powderblue;
  /* overflow: hidden; */
}
.aside {
  float: left;
  min-width: 76px;
  min-height: 100%;
  background: pink;
  position: absolute;
  top: 50px;
  left: 0;
  overflow-y: auto;
  /* overflow-x: hidden; */
}
.goods {
  width: 300px;
  min-height: 100px;
  position: absolute;
  top: 50px;
  left: 90px;
  overflow-y: auto;
}
.goods img {
  width: 70px;
  height: 70px;
}
.goods ul {
  display: flex;
  flex-wrap: wrap;
}
.goods span {
  width: 32.8%;
  float: left;
  text-align: center;
}
</style>