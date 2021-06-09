<template>
  <div class="search">
    <div class="header">
      <van-icon name="arrow-left" size="20" @click="back" />
      <van-search
        v-model="val"
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
        @input="onSearch"
        @search="historyLoc"
      />
      <span class="searchbtn">搜索</span>
    </div>
    <div class="seaList" v-if="!flag">
      <ul>
        <li v-for="v in arr" :key="v._id" @click="goDetail(v._id)">
          {{ v.name }}
        </li>
      </ul>
    </div>
    <div class="history" v-if="flag">
      <div class="title">
        <h4>最近搜索</h4>
        <span @click="clearList"><i class="fa fa-trash"></i></span>
      </div>
      <ul v-for="item in historyList" :key="item.id">
        <li>{{ item.val }}</li>
      </ul>
    </div>
    <div class="hot" v-if="flag">
      <div class="title">
        <h4>热门搜索</h4>
        <span @click="isShow = !isShow">隐藏</span>
      </div>
      <ul v-show="isShow">
        <li>李建广</li>
        <li>史鹏飞</li>
        <li>罗鸿宇</li>
        <li>陈晓东</li>
        <li>曹阳阳</li>
        <li>杨天赐</li>
        <li>邵振帅</li>
        <li>韩雪怡</li>
        <li>张智聪</li>
      </ul>
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
      flag: true,
      historyList: null,
      val: "",
      arr: [],
      isShow: true,
    };
  },
  computed: {},
  watch: {},
  methods: {
    back() {
      this.$router.back();
    },
    // 隐藏热门搜索
    //搜索功能
    async onSearch(val) {
      if (val) {
        this.flag = false;
      } else {
        this.flag = true;
      }
      let { data } = await reqProducts({ per: 1000, page: 1 });
      let list = data.products;
      this.arr = [];
      list.forEach((v) => {
        let earSeach = v.name.includes(this.val);
        if (earSeach == true) {
          if (this.arr.length < 10) {
            this.arr.push(v);
          }
        }
      });
    },
    // 跳转到详情页面
    goDetail(id) {
      this.$router.push("/detail/" + id);
    },
    // 历史搜索记录
    historyLoc(val) {
      console.log(val);
      let historyList = JSON.parse(localStorage.getItem("historyTxt")) || [];
      historyList.push({ val });
      localStorage.setItem("historyTxt", JSON.stringify(historyList));
      this.$router.push({
        path: "/SearchList",
        query: { val },
      });
    },
    //历史数据展示在页面
    historyFn() {
      let historyList = JSON.parse(localStorage.getItem("historyTxt"));
      this.historyList = historyList;
    },
    //清空历史数据
    clearList() {
      Dialog.confirm({
        title: "提示",
        message: "确认要清空浏览足迹吗？",
      })
        .then(() => {
          localStorage.removeItem("historyTxt");
          this.historyList = "";
          Toast("全部清除");
        })
        .catch(() => {
          Toast("撤销删除");
        });
    },
  },

  created() {
    this.historyFn();
  },
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
  height: 30px;
  background: #e8e8ed;
  padding: 0 10px;
  margin: 10px;
  text-align: center;
  line-height: 30px;
  float: left;
  border-radius: 2px;
  color: #686868;
}
.hot {
  clear: both;
}
.seaList ul {
  width: 100%;
  min-height: 200px;
  background: rgb(255, 255, 255);
  margin: 20px;
}
.seaList ul li {
  height: 42px;
  border-bottom: 1px solid #f0f2f5;
  line-height: 42px;
}
</style>