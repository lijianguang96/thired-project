<template>
  <div class="searchlist">
    <div class="header">
      <div class="backBtn" @click="back"></div>
      <div class="seach">
        <i></i>
        <input type="text" @click="goToSeach" v-model="val" />
      </div>
      <div class="more"></div>
    </div>
    <div class="tab">
      <ul>
        <li
          v-for="item in goodsList"
          :key="item._id"
          @click="goDetail(item._id)"
        >
          <img :src="item.coverImg" alt="" />
        </li>
      </ul>
    </div>
    <div class="dropdown">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option" />
        <van-dropdown-item title="销量" />
        <van-dropdown-item v-model="value" :options="option1" />
        <van-dropdown-item title="筛选" ref="item">
          <van-cell center title="包邮">
            <template #right-icon>
              <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <van-cell center title="团购">
            <template #right-icon>
              <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <div style="padding: 5px 16px">
            <van-button type="danger" block round @click="onConfirm">
              确认
            </van-button>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="tab-barTabMore">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div class="goods">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ul>
          <li
            v-for="item in goodsList"
            :key="item._id"
            @click="goDetail(item._id)"
          >
            <div class="img">
              <img :src="item.coverImg" alt="" />
            </div>
            <div class="disclose">
              <p>{{ item.name }}</p>
              <div class="biaoqian">
                <span>标签</span>
                <span>标签</span>
              </div>
              <div class="price">
                <span class="big-price">￥{{ item.price }}</span>
                <span class="manjian">满减</span>
              </div>
              <div class="small-p">10万+评价 好评率100%</div>
              <div class="shopname">商家名字</div>
            </div>
          </li>
        </ul>
      </van-list>
    </div>
    <div @click="Gotop" class="gotop" v-show="showbtn"></div>
  </div>
</template>
 
<script>
import { reqProducts } from "../../api/products";

export default {
  components: {},
  data() {
    return {
      val: "",
      showbtn: false,
      loading: false,
      finished: false,
      page: 1,
      goodsList: [],
      value: 0,
      switch1: false,
      switch2: false,
      arr: [],
      option: [
        { text: "综合", value: 0 },
        { text: "最新上架", value: 1 },
        { text: "价格最低", value: 2 },
        { text: "价格最高", value: 3 },
        { text: "评价最多", value: 4 },
      ],
      option1: [
        { text: "有货优先", value: 0 },
        { text: "货到付款", value: 1 },
        { text: "京东国际", value: 2 },
        { text: "PLUS专享", value: 3 },
        { text: "配送全球", value: 4 },
      ],
    };
  },
  computed: {
    // search: function () {
    //   this.arr = this.goodsList.filter((item) => item.name == this.val);
    //   console.log(this.arr);
    //   return arr;
    // },
  },
  watch: {},
  methods: {
    //返回上一页
    async back() {
      this.$router.back();
    },
    onConfirm() {
      this.$refs.item.toggle();
    },

    // 获取商品
    async lodeList() {
      this.loading = true; //先把加载中展示出来
      const result = await reqProducts({ page: this.page });
      this.loading = false; //关闭加载
      // console.log(result.data.products);
      this.goodsList = [...this.goodsList, ...result.data.products]; //把每次的数据拼接起来
      if (result.data.products < 10) {
        //如果返回的数据是最后一页 说明数据已经加载完毕
        this.finished = true;
      } else {
        this.page++;
      }
    },

    // 滚动条触底触发onLoad
    onLoad() {
      this.lodeList(); //上拉加载更多 onLoad会自动执行一次
    },

    // 跳转到详情页面
    goDetail(id) {
      this.$router.push("/detail/" + id);
    },
    // 跳转搜索页面
    goToSeach() {
      this.$router.push("/search");
    },
    // 显示回到顶部按钮
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 100 ? (this.showbtn = true) : (this.showbtn = false);
    },
    // 回到顶部
    Gotop() {
      var timer = setInterval(function () {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        this.isTop = true;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
    //显示搜索内容
    // searchVal(val) {
    //   this.goodsList.forEach((v) => {
    //     let earSeach = v.name.includes(val);
    //     console.log(earSeach);
    //     if (earSeach == true) {
    //       this.arr.push(v);
    //       console.log(this.arr);
    //       this.goodsList = [];
    //     }
    //   });
    // },
  },
  created() {
    // this.searchVal();
    this.lodeList();
    let title = this.$route.query.val;
    this.val = title;
  },
  mounted() {
    // 监听滚动;
    window.addEventListener("scroll", this.handleScroll, true);
  },
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
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUdwTGZmZmVlZWdnZ2ZmZmQUBPYAAAAEdFJOUwDmSUqpTpZKAAAAMklEQVQoz2NQdAEDIQYGOEsEwnBkQLBcGMDAhQHBGnZCWLxtCGEIMyCxqAhGw56ksAcACQo3hfAlFFAAAAAASUVORK5CYII=)
    50% no-repeat;
  background-size: 20px;
}
.tab {
  width: 100%;
  height: 80px;
  position: absolute;
  top: 55px;
  left: 0;
  background: #e8e8ed;
  padding-left: 10px;
  overflow-x: scroll;
}
.tab ul {
  min-width: 800px;
  height: 80px;
  /* overflow-x: auto; */
}
.tab ul li {
  float: left;
  width: 50px;
  height: 50px;
  background: pink;
  margin: 10px;
}
.tab img {
  width: 50px;
  height: 50px;
}
.dropdown {
  width: 100%;
  position: absolute;
  top: 126px;
  left: 0;
}
.dropdown .van-dropdown-menu {
  font-size: 16px;
}
.tab-barTabMore {
  width: 100%;
  height: 60px;
  position: absolute;
  top: 180px;
  left: 0;
  background: white;
  padding-left: 10px;
  overflow-x: auto;
}
.tab-barTabMore ul {
  min-width: 800px;
  height: 80px;
  /* overflow-x: auto; */
}
.tab-barTabMore ul li {
  float: left;
  width: 60px;
  height: 30px;
  background: #e8e8ed;
  margin: 10px;
}
.goods {
  width: 100%;
  min-height: 500px;
  /* background: pink; */
  position: absolute;
  top: 230px;
  left: 0;
}
.img img {
  width: 120px;
  height: 120px;
}
.goods li {
  margin: 20px;
  display: flex;
}
.disclose {
  width: 200px;
  margin-left: 20px;
}
.disclose p {
  font-size: 16px;
  color: #333;
}
.biaoqian {
  margin: 10px 0;
}
.biaoqian span {
  padding: 0 5px;
  margin-right: 10px;
  border-radius: 1px;
  font-size: 10px;
  min-width: 10px;
  height: 15px;
  line-height: 15px;
  color: #999;
  background-color: #f2f2f7;
}
.price .big-price {
  font-weight: 400;
  font-size: 16px;
  color: #e4393c;
}
.price .manjian {
  border: 1px solid #e4393c;
  color: #e4393c;
  margin-left: 10px;
}
.small-p {
  margin: 10px 0;
}
.gotop {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 100px;
  right: 0;
  background: rgba(0, 0, 0, 0.7)
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmBAMAAABXDYTaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURUdwTP///////////////////4gZPH8AAAAFdFJOUwDOErgtIpiQXwAAAHtJREFUKM/tjssNgCAQBTckNLAJdzjYgVZgA6Ch/1ZkPwKrFwvwHeAxOwGgPgIv8DkJ7dmFEq1QK1ohFKOkshwBZwF9TpPSus9uKFR9hqFQa6ArXBroCu8EVJGNgCqyMuCZegx4qDcJoOkmbwmAdMIeZ+DW+7cKRn4guQD4+CB6VvlekQAAAABJRU5ErkJggg==)
    50% no-repeat;
  background-size: 16px auto;
  transition: right 0.3s ease;
}
</style>