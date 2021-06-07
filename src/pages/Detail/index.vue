<template>
  <div class="desc">
    <div class="detail-top" :style="{ opacity: opacity }">
      <van-icon name="revoke" class="icon-top" @click="back" />
      <van-tabs v-model="activeName" class="van-tabs">
        <van-tab title="商品" name="a"></van-tab>
        <van-tab title="评价" name="b"></van-tab>
        <van-tab title="详情" name="c"></van-tab>
        <van-tab title="推荐" name="d"></van-tab>
      </van-tabs>
      <van-icon name="weapp-nav" class="icon-top" @click="toggle(flag)">
        <div class="menu-box" v-if="flag">
          <span class="content">◆</span>
          <ul @click.stop="">
            <li v-for="i in items" :key="i.id">
              <van-icon :name="i.icon" />
              <span class="mr">{{ i.name }} </span>
            </li>
          </ul>
        </div>
      </van-icon>
    </div>

    <div class="banner">
      <van-swipe @change="onChange">
        <van-swipe-item v-for="i in 4" :key="i.id">
          <img :src="pic.coverImg" alt="" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/4</div>
        </template>
      </van-swipe>
      <div class="price">
        <div>
          <span class="rmb">￥</span>
          <span class="color">{{ pic.price }}</span>
        </div>
        <div class="right">
          <span>
            <span class="fz"><van-icon name="gold-coin-o" /></span>
            <span class="fz"><van-icon name="label-o" /></span>
            <br />
            <span>降价提醒</span>
            <span>收藏</span>
          </span>
        </div>
      </div>
      <div class="p-name">{{ pic.name }}</div>
    </div>

    <div class="margin">
      <div class="fangxingou">
        <img src="../../assets/fangxingou.png" alt="" />
        <div>免费上门取退</div>
        <div><van-icon name="weapp-nav" /></div>
      </div>

      <div class="youhui">
        <span>优惠</span>
        <span class="coupon">优惠</span>
        <span class="coupon">优惠</span>
        <span class="coupon">优惠</span>
        <span> <van-icon name="weapp-nav" /></span>
      </div>

      <div>
        <span>已选</span>
        <span> <van-icon name="weapp-nav" /></span>
      </div>

      <div>
        <span>送至</span>
        <span> <van-icon name="weapp-nav" /></span>
      </div>

      <div>
        <span>运费</span>
        <span>在线支付免运费</span>
      </div>

      <div>
        <span>商家发货&售后</span>
        <span>7天无理由退货</span>
        <span>运送费险</span>
        <span> <van-icon name="weapp-nav" /></span>
      </div>

      <!-- 评价 -->

      <div>
        <div>
          <span>评价 100+</span>
          <span>好评度 100%</span>
        </div>
        <div>
          <span>穿着舒适</span>
          <span>穿着舒适</span>
          <span>穿着舒适</span>
        </div>
        <div>
          <span>穿着舒适</span>
          <span>穿着舒适</span>
          <span>穿着舒适</span>
          <span><img src="../../assets/fangxingou.png" alt="" /></span>
          <span><img src="../../assets/fangxingou.png" alt="" /></span>
          <span><img src="../../assets/fangxingou.png" alt="" /></span>
          <span><img src="../../assets/fangxingou.png" alt="" /></span>

          <span><img src="../../assets/fangxingou.png" alt="" /></span>
          <span><img src="../../assets/fangxingou.png" alt="" /></span>
          <span><img src="../../assets/fangxingou.png" alt="" /></span>
          <span><img src="../../assets/fangxingou.png" alt="" /></span>s
        </div>
        <p>用户1</p>
      </div>

      <!-- 详情 -->
      <div>
        <van-tabs v-model="pIntroduct">
          <van-tab title="商品介绍" name="i">内容 1</van-tab>
          <van-tab title="规格参数" name="g">内容 2</van-tab>
          <van-tab title="售后保障" name="s">内容 3</van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- 底部 -->

    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="showPopup"
        />

        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
      <van-popup
        v-model="show"
        closeable
        round
        position="bottom"
        :style="{ height: '70%' }"
      >
        <van-card
          num="1"
          :price="pic.price"
          desc="oh,mygod,买它，买它"
          :title="pic.name"
          :thumb="pic.coverImg"
        />
        <h6>颜色</h6>
        <van-button
          round
          block
          type="danger"
          native-type="submit"
          @click="addCart(pic._id, 1)"
        >
          提交
        </van-button>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { reqDetail } from "../../api/detail";
import { reqAddCart } from "../../api/cart";

export default {
  components: {},
  data() {
    return {
      show: false,
      pic: {},
      current: 0,
      activeName: "a",
      pIntroduct: "i",
      flag: false,
      opacity: 0,
      scrollTop: 0,
      items: [
        { name: "首页", icon: "home-o" },
        { name: "分类搜索", icon: "search" },
        { name: "我的网站", icon: "user-o" },
        { name: "浏览记录", icon: "eye-o" },
        { name: "我的关注", icon: "like-o" },
        { name: "分享", icon: "share-o" },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    toggle(flag) {
      this.flag = !flag;
    },
    onChange(index) {
      this.current = index;
    },
    // 详情接口
    async getPic(id) {
      const result = await reqDetail(id);
      console.log(result);
      this.pic = result.data;
      console.log(result);
    },
    async addCart(product, quantity) {
      console.log(product);
      const result = await reqAddCart(product, quantity);
      if (result.status == 200) {
        this.$toast.success("加入购物车成功");
      }
      console.log(result);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop < 200) {
        // 当滚动距离小于200时，计算导航透明度，可以考虑修改为每20增加0.1
        // this.opacity = (scrollTop / 200).toFixed(1);
        this.opacity = scrollTop / 200;
        return;
      } else {
        this.opacity = 1;
      }
    },
    showPopup() {
      this.show = true;
    },
  },
  created() {
    this.getPic(this.$route.params.id);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped lang="css">
.desc {
  position: relative;
}
.detail-top {
  background-color: white;
  width: 375px;
  height: 45px;
  border-bottom: 1px solid rgb(206, 206, 206);
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.icon-top {
  margin-top: 15px;
  position: relative;
  /* display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999; */
}

.van-tabs >>> .van-tab {
  margin-left: 20px;
}
.van-tabs >>> .van-tab:nth-child(1) {
  margin-left: 0px;
}

.menu-box {
  position: absolute;
  top: 25px;
  left: -95px;
  width: 125px;
  height: 245px;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  z-index: 999;
}
.content {
  color: black;
  font-size: 20px;
  position: absolute;
  top: -13px;
  left: 98px;
}
.menu-box li {
  line-height: 16px;
  margin-top: 20px;
  font-size: 14px;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
  color: white;
}
.banner img {
  width: 375px;
  height: 372px;
}
.price {
  height: 40px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.price .right {
  font-size: 14px;
  margin-right: 10px;
}
.price .right span:nth-child(1) {
  margin-left: -10;
}
.price .right span:nth-child(2) {
  margin-left: 40px;
}
.price .right span:nth-child(4) {
  margin-left: -20px;
}
.price .right span:nth-child(5) {
  margin-left: 20px;
}
.price .right .fz {
  font-size: 20px;
}
.rmb {
  line-height: 40px;
  margin-left: 10px;
  color: red;
  font-size: 16px;
}
.color {
  color: red;
  font-size: 26px;
}
.p-name {
  margin-top: 12px;
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
}
.margin {
  margin-left: 10px;
  margin-right: 10px;
}
.fangxingou {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.fangxingou div:nth-child(2) {
  margin-left: -190px;
  color: red;
}
.fangxingou img {
  width: 70px;
  height: 13px;
}
.youhui {
  line-height: 38px;
  height: 38px;
  background-color: rgb(255, 208, 203);
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.youhui span:nth-child(1) {
  font-weight: 700;
  font-size: 14px;
}
.youhui span:nth-child(2) {
  font-size: 16px;
}
.coupon {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  line-height: normal;
  margin-right: 6px;
  padding: 0 6px;
  border: 1px solid #ff8373;
  border-radius: 2.5px;
  height: 15px;
  color: #f2270c;
  font-size: 10px;
}
</style>
