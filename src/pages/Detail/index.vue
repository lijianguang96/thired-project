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
            <span class="fz"><van-icon name="gold-coin-o"/></span>
            <span class="fz"><van-icon name="label-o"/></span>
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
        <div><van-icon name="weapp-nav" @click="fangshow()" /></div>
      </div>

      <div class="youhui">
        <span>优惠</span>
        <span class="coupon">优惠</span>
        <span class="coupon">优惠</span>
        <span class="coupon">优惠</span>
        <span><van-icon name="weapp-nav" @click="youhuiShow()"/></span>
      </div>

      <div class="yixuan">
        <span>已选</span>
        <span>那么穷，你好意思买东西</span>
        <span><van-icon name="weapp-nav" @click="yixuanShow()"/></span>
      </div>

      <div class="songzhi">
        <span>送至</span>
        <span>相送哪送哪，哎，我就是不发货，投诉我吧</span>
        <span> <van-icon name="weapp-nav" @click="szShow()"/></span>
      </div>

      <div class="yunfei">
        <span>运费</span>
        <span>在线支付免运费</span>
      </div>

      <div class="yunfei-f">
        <span> <img src="../../assets/duigou.png" alt="" /> 商家发货&售后</span>
        <span><img src="../../assets/duigou.png" alt="" />7天无理由退货</span>
        <span><img src="../../assets/duigou.png" alt="" />运送费险</span>
        <span> <van-icon name="weapp-nav" @click="yunfeiShow()"/></span>
      </div>

      <!-- 评价 -->

      <div>
        <div class="pingjia-t">
          <span>评价 100+</span>
          <span>好评度 100%<van-icon name="arrow"/></span>
        </div>
        <div class="pingjia-m">
          <span class="pj-bg">穿着舒适</span>
          <span class="pj-bg">穿着舒适</span>
          <span class="pj-bg">穿着舒适</span>
        </div>
        <div>
          <span class="pj-bg">穿着舒适</span>
          <span class="pj-bg">穿着舒适</span>
          <span class="pj-bg">穿着舒适</span>
          <!-- <span><img src="../../assets/fangxingou.png" alt=""/></span>
          <span><img src="../../assets/fangxingou.png" alt=""/></span>
          <span><img src="../../assets/fangxingou.png" alt=""/></span>
          <span><img src="../../assets/fangxingou.png" alt=""/></span> -->
        </div>
      </div>
      <!-- 猜你喜欢 -->

      <div class="like">
        <p>猜你喜欢</p>
        <ul class="img" v-for="i in products" :key="i._id">
          <dl>
            <dt><img :src="i.coverImg" alt="" /></dt>
            <dd>
              {{ i.name }}
            </dd>
            <div class="like-price">￥{{ i.price }}</div>
          </dl>
        </ul>
      </div>
      <!-- 详情 -->
      <div class="detail">
        <van-tabs v-model="pIntroduct">
          <van-tab title="商品介绍" name="i"
            ><img :src="pic.coverImg" alt=""
          /></van-tab>
          <van-tab title="规格参数" name="g"
            ><h1 class="fxg-fz">分手必备</h1></van-tab
          >
          <van-tab title="售后保障" name="s"
            ><h1 class="fxg-fz">{{ pic.name }}</h1></van-tab
          >
        </van-tabs>
      </div>
    </div>
    <!-- 底部 -->

    <div class="footer">
      <van-goods-action v-for="i in quantity" :key="i.id">
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          :badge="cartNum"
          @click="linkCar()"
        />
        <van-goods-action-icon icon="shop-o" text="店铺" :badge="dianbu" />
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

    <!-- 点击三个点弹出显示内容 -->
    <van-popup
      v-model="fxgshow"
      closeable
      round
      position="bottom"
      :style="{ height: '60%' }"
    >
      <div class="fxg-fz">
        <p>放心购</p>
        <p>买苹果发苹果</p>
        <p>买钻石发板砖</p>
      </div>
    </van-popup>

    <van-popup
      v-model="szshow"
      closeable
      round
      position="bottom"
      :style="{ height: '60%' }"
    >
      <div class="fxg-fz">
        <p>爱送哪送哪</p>
        <p>哎！我就是不发货</p>
        <p>快来投诉我吧</p>
      </div>
    </van-popup>

    <van-popup
      v-model="yhshow"
      closeable
      round
      position="bottom"
      :style="{ height: '60%' }"
    >
      <div class="fxg-fz">
        <p>减价了减价了</p>
        <p>全场大减价</p>
        <p>一支口红只要1万元</p>
      </div>
    </van-popup>

    <van-popup
      v-model="yxshow"
      closeable
      round
      position="bottom"
      :style="{ height: '60%' }"
    >
      <div class="fxg-fz">
        <p>那么穷</p>
        <p>你好意思买东西</p>
        <p>我赌你买不起</p>
      </div>
    </van-popup>

    <van-popup
      v-model="yunshow"
      closeable
      round
      position="bottom"
      :style="{ height: '60%' }"
    >
      <div class="fxg-fz">
        <p>货到付款</p>
        <p>无售后</p>
        <p>不要请扔垃圾桶</p>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import { reqDetail } from "../../api/detail";
  import { reqAddCart, reqCartlist } from "../../api/cart";
  import { reqProducts } from "../../api/products";

  export default {
    components: {},
    data() {
      return {
        quantity: {},
        products: {},
        show: false,
        fxgshow: false,
        szshow: false,
        yhshow: false,
        yunshow: false,
        yxshow: false,
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
    computed: {
      cartNum() {
        var num = 0;
        this.quantity.forEach((i) => {
          console.log(i);
          num += i.quantity;
        });
        return num;
      },
      dianbu() {
        return this.quantity.length;
      },
    },
    watch: {},
    methods: {
      // goAnchor() {
      //   console.log(111);
      // },
      // goAnchor(selector) {
      //   this.$el.querySelector(selector).scrollIntoView({
      //     behavior: "smooth", // 平滑过渡
      //     block: "start", // 上边框与视窗顶部平齐。默认值
      //   });
      // },
      linkCar() {
        this.$router.push("/cart");
      },
      youhuiShow() {
        this.yhshow = true;
      },
      yixuanShow() {
        this.yxshow = true;
      },
      yunfeiShow() {
        this.yunshow = true;
      },
      szShow() {
        this.szshow = true;
      },
      fangshow() {
        this.fxgshow = true;
      },
      showPopup() {
        this.show = true;
      },
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
      },
      async addCart(product, quantity) {
        console.log(product);
        const result = await reqAddCart({ product, quantity });
        if (result.status == 200) {
          this.$toast.success("加入购物车成功");
        }
        console.log(result);
        this.getCar();
      },
      async getProduct() {
        var per = 10;
        var page = Math.round(Math.random() * 10);
        const result = await reqProducts({ per, page });
        console.log(result);
        this.products = result.data.products;
      },

      async getCar() {
        const result = await reqCartlist();
        console.log(result);
        this.quantity = result.data;
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
    },

    created() {
      this.getPic(this.$route.params.id);
      this.getProduct();
      this.getCar();
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
  };
</script>
<style scoped lang="css">
  .desc {
    position: relative;
    padding-bottom: 60px;
  }
  .detail-top {
    background-color: rgb(255, 255, 255);
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
    margin-top: 15px;
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
    margin-top: 10px;
  }
  .youhui span:nth-child(3) {
    margin-top: 10px;
  }
  .youhui span:nth-child(4) {
    margin-top: 10px;
  }

  .yixuan {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .yixuan span:nth-child(1) {
    font-size: 16px;
    font-weight: 700;
  }
  .songzhi {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .songzhi span:nth-child(1) {
    font-size: 16px;
    font-weight: 700;
  }
  .yunfei {
    margin-top: 15px;
  }
  .yunfei span:nth-child(1) {
    font-size: 16px;
    font-weight: 700;
    margin-right: 20px;
  }
  .yunfei-f {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  .yunfei-f span {
    display: inline-block;
  }
  .yunfei-f img {
    display: inline-block;
  }
  .pingjia-t {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 16px;
  }
  .pingjia-m {
    margin-top: 15px;
  }
  .pj-bg {
    display: inline-block;
    margin: 0 5px 5px 0;
    padding: 0 10px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    font-size: 11px;
    color: #262626;
    background: #fcedeb;
  }
  .img {
    float: left;
  }
  .like img {
    width: 100px;
    height: 100px;
    border-radius: 15px;
    margin-left: 12px;
    margin-top: 3px;
  }
  .like p {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .like dl {
    text-align: left;
  }
  .like dd {
    margin-left: 12px;
    margin-top: 20px;
    width: 100px;
    height: 25px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 12px;
  }
  .like-price {
    color: red;
    margin-left: 12px;
    margin-top: 8px;
    font-size: 16px;
  }
  .detail {
    clear: both;
  }
  .fxg-fz {
    margin-top: 40px;
    text-align: center;
    line-height: 70px;
    color: red;
    font-weight: 700;
    font-size: 50px;
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
