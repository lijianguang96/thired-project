<template>
  <div class="classify">
    <div class="header">
      <div class="backBtn" @click="back"></div>
      <div class="seach">
        <i></i>
        <input type="text" @click="goToSeach" />
      </div>
      <div class="more" @click="toggle(flag)">
        <div class="menu-box" v-if="flag">
          <span class="triangle">◆</span>
          <ul @click.stop>
            <li v-for="i in navlist" :key="i.id">
              <van-icon :name="i.icon" />
              <span class="mr">{{ i.name }} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <van-tree-select
        height="150vw"
        :items="items"
        :main-active-index.sync="active"
        @click-nav="clickNav"
      >
        <template #content>
          <div class="history">
            <div class="title">
              <h3>浏览历史</h3>
              <span @click="clearList"><i class="fa fa-trash"></i> 清空</span>
            </div>
            <ul>
              <li v-for="(item, index) in historyList" :key="index">
                <van-image :src="item.coverImg" width="64" />
                <span>{{ item.productCategory.name }}</span>
              </li>
            </ul>
          </div>
          <div class="hotlist">
            <h3>热卖商品</h3>

            <ul>
              <li
                v-for="item in goodsList"
                :key="item._id"
                @click="goSeach(item)"
              >
                <van-image :src="item.coverImg" width="64" />
                <span>{{ item.productCategory.name }}</span>
              </li>
            </ul>
          </div>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>
<script>
  import { reqProducts } from "../../api/products";
  import { Toast } from "vant";
  import { Dialog } from "vant";
  export default {
    components: {},
    data() {
      return {
        historyList: [],
        active: 0,
        flag: false,
        navlist: [
          { name: "首页", icon: "home-o" },
          { name: "分类搜索", icon: "search" },
          { name: "购物车", icon: "cart-o" },
          { name: "我的京东", icon: "user-o" },
          { name: "浏览记录", icon: "eye-o" },
        ],
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
      //点击获取商品
      async clickNav(index) {
        const result = await reqProducts({ page: index + 1, per: 20 });
        console.log(result.data.products);
        this.goodsList = result.data.products;
      },

      //去商品列表页面
      async goSeach(item) {
        // console.log(item);
        let historyList = JSON.parse(localStorage.getItem("hisList")) || [];
        historyList.push({ ...item });
        localStorage.setItem("hisList", JSON.stringify(historyList));
        this.$router.push("/SearchList");
      },
      //历史数据展示在页面
      historyFn() {
        let historyList = JSON.parse(localStorage.getItem("hisList"));
        this.historyList = historyList;
      },
      //清空历史数据
      clearList() {
        Dialog.confirm({
          title: "提示",
          message: "确认要清空浏览足迹吗？",
        })
          .then(() => {
            localStorage.removeItem("hisList");
            this.historyList = "";
            Toast("全部清除");
          })
          .catch(() => {
            Toast("撤销删除");
          });
      },
      // 跳转搜索页面
      goToSeach() {
        this.$router.push("/search");
      },
      //返回上一页
      back() {
        this.$router.back();
      },
      // 切换
      toggle(flag) {
        this.flag = !flag;
      },
    },
    created() {
      this.clickNav(0);
      this.historyFn();
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
  .menu-box {
    position: absolute;
    top: 61px;
    left: 249px;
    width: 125px;
    height: 245px;
    color: white;
    border-radius: 4px;
    background-color: black;
    display: flex;
    justify-content: center;
  }
  .triangle {
    color: black;
    font-size: 28px;
    position: absolute;
    top: -13px;
    left: 98px;
  }
  .van-icon {
    font-size: 16px;
    margin-right: 8px;
  }

  .menu-box li {
    line-height: 16px;
    margin-top: 20px;
    font-size: 16px;
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
  .title {
    width: 228px;
    height: 25px;
    position: relative;
  }
  .title span {
    position: absolute;
    top: -9px;
    right: 0;
  }
</style>
