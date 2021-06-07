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
      <van-tree-select
        height="150vw"
        :items="items"
        :main-active-index.sync="active"
        @click-nav="clickNav"
      >
        <template #content>
          <ul class="history">
            <li></li>
          </ul>
          <h4>热卖商品</h4>
          <ul class="hotlist">
            <li v-for="item in goodsList" :key="item._id">
              <van-image :src="item.coverImg" width="64" />
              <span>{{ item.productCategory.name }}</span>
            </li>
          </ul>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>
<script>
import { reqProducts } from "../../api/products";
export default {
  components: {},
  data() {
    return {
      active: 0,
      items: [
        { text: "热门推荐" },
        { text: "手机数码" },
        { text: "电脑办公" },
        { text: "家用电器" },
        { text: "美妆护肤" },
        { text: "汽车生活" },
        { text: "京东超市" },
        { text: "男装" },
        { text: "男鞋" },
        { text: "女装" },
        { text: "女鞋" },
        { text: "运动户外" },
        { text: "内衣配饰" },
        { text: "酒水饮料" },
        { text: "家具家装" },
        { text: "箱包手袋" },
        { text: "钟表珠宝" },
        { text: "玩具乐器" },
        { text: "医药保健" },
        { text: "宠物生活" },
        { text: "京东超市" },
        { text: "礼品鲜花" },
        { text: "农资绿植" },
        { text: "生活旅行" },
        { text: "奢侈品" },
        { text: "京东国际" },
        { text: "艺术邮币" },
        { text: "二手商品" },
        { text: "特产馆" },
        { text: "京东金融" },
        { text: "国际名牌" },
        { text: "拍卖" },
        { text: "房产" },
        { text: "工业品" },
      ],
      goodsList: [],

      value: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    async clickNav(index) {
      const result = await reqProducts({ page: index + 1, per: 20 });
      console.log(result.data.products);
      this.goodsList = result.data.products;
    },
  },
  created() {
    this.clickNav(0);
  },
  mounted() {},
};
</script>
<style scoped>
.header {
  width: 100%;
  min-height: 40px;
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
  width: 290px;
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
  position: absolute;
  top: 56px;
  left: 0;
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
}
.goods {
  width: 300px;
  min-height: 100px;
  position: absolute;
  top: 50px;
  left: 90px;
  overflow-y: auto;
}
.van-image__img {
  width: 70px;
  height: 70px;
}
.van-tree-select__content ul {
  display: flex;
  flex-wrap: wrap;
}
.van-tree-select__content li {
  width: 32.8%;
  margin: 10px 0;
}
.van-tree-select__content span {
  font-size: 12px;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 10px;
}
</style>